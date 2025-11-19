// Test script to verify Resend API key and sending capability
// Run with: node test-resend.js

import { Resend } from 'resend';

const API_KEY = 're_Teh5acBL_9q3YjXjHsRcw3hkDr9iVsKWU';

console.log('🧪 Testing Resend API Key...\n');

// Initialize Resend
const resend = new Resend(API_KEY);

console.log('✓ Resend client initialized');
console.log('✓ API Key prefix:', API_KEY.substring(0, 15) + '...\n');

// Test sending an email
async function testEmail() {
  try {
    console.log('📧 Attempting to send test email...');
    console.log('From: onboarding@resend.dev');
    console.log('To: anna.destiny113@slmails.com');
    console.log('Subject: Hello World\n');

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'anna.destiny113@slmails.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });

    console.log('✅ Email send attempt completed!\n');
    console.log('Full Response:', JSON.stringify(result, null, 2));

    if (result.error) {
      console.log('\n❌ Error detected:', result.error);
      console.log('Error message:', result.error.message);
      console.log('Error name:', result.error.name);
    } else {
      console.log('\n✅ Success! Email sent successfully');
      console.log('Email ID:', result.data?.id);
    }

  } catch (error) {
    console.log('\n❌ Caught exception:', error);
    console.log('Error type:', error.constructor.name);
    console.log('Error message:', error.message);
    console.log('Error stack:', error.stack);
  }
}

// Run the test
testEmail();
