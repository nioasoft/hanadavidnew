import { Resend } from 'resend';

// Fallback to a dummy key if RESEND_API_KEY is not set, to prevent build failures.
// In production, the actual environment variable must be set.
const apiKey = process.env.RESEND_API_KEY || 're_123456789'; 

export const resend = new Resend(apiKey);