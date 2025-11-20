import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, preferredLanguage } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Recipient email address for admin notifications
    const ADMIN_EMAIL = 'miss.anna.davidi@gmail.com';
    const FROM_EMAIL = 'noreply@limmudanglit.co.il';

    try {
      console.log('Attempting to send emails with Resend...', {
        admin: ADMIN_EMAIL,
        user: email,
        from: FROM_EMAIL,
        hasApiKey: !!process.env.RESEND_API_KEY,
      });

      // Prepare admin email
      const adminEmailPromise = resend.emails.send({
        from: `Hana David Website <${FROM_EMAIL}>`,
        to: [ADMIN_EMAIL],
        subject: `New contact form submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Preferred Language:</strong> ${preferredLanguage || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // Prepare user confirmation email
      const userEmailPromise = resend.emails.send({
        from: `Hana David <${FROM_EMAIL}>`,
        to: [email],
        subject: `תודה על פנייתך / Thank you for contacting us`,
        html: `
          <div dir="rtl" style="text-align: right; font-family: Arial, sans-serif;">
            <h2>שלום ${name},</h2>
            <p>תודה שפנית אלינו. קיבלנו את פרטייך ואנו ניצור עמך קשר בהקדם.</p>
          </div>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
          <div dir="ltr" style="text-align: left; font-family: Arial, sans-serif;">
            <h2>Hello ${name},</h2>
            <p>Thank you for contacting us. We have received your details and will be in touch shortly.</p>
          </div>
        `,
      });

      // Send both emails
      const [adminResult, userResult] = await Promise.all([adminEmailPromise, userEmailPromise]);

      console.log('Resend API responses:', { admin: adminResult, user: userResult });

      // Check for errors in admin email (critical)
      if (adminResult.error) {
        console.error('Failed to send admin email:', adminResult.error);
        return NextResponse.json(
          { error: 'Failed to send admin email', details: adminResult.error.message },
          { status: 500 }
        );
      }

      // We consider it a success if at least the admin received the email, 
      // but we log if the user email failed.
      if (userResult.error) {
        console.warn('Failed to send user confirmation email:', userResult.error);
      }

      return NextResponse.json({ 
        success: true, 
        data: { 
          admin: adminResult.data, 
          user: userResult.data 
        } 
      });

    } catch (resendError) {
      console.error('Resend SDK exception caught:', {
        error: resendError,
        message: resendError instanceof Error ? resendError.message : 'Unknown error',
        stack: resendError instanceof Error ? resendError.stack : undefined,
        timestamp: new Date().toISOString()
      });
      return NextResponse.json(
        { error: 'Email service error', details: resendError instanceof Error ? resendError.message : 'Unknown error' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
