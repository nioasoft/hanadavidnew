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

    // Recipient email address
    const TO_EMAIL = 'miss.anna.davidi@gmail.com';
    const FROM_EMAIL = 'onboarding@resend.dev'; // Or your verified domain

    try {
      console.log('Attempting to send email with Resend...', {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        hasApiKey: !!process.env.RESEND_API_KEY,
        apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10)
      });

      const result = await resend.emails.send({
        from: `Hana David Website <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
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

      console.log('Resend API response:', result);

      // Check if there's an error in the response
      if (result.error) {
        console.error('Resend API error details:', {
          error: result.error,
          name,
          email,
          timestamp: new Date().toISOString()
        });
        return NextResponse.json(
          { error: 'Failed to send email', details: result.error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, data: result.data });

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
