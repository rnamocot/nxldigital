import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return testEmail();
}

export async function POST() {
  return testEmail();
}

async function testEmail() {
  try {
    console.log('Testing email configuration...');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_SECURE:', process.env.SMTP_SECURE);
    console.log('SMTP_FROM_EMAIL:', process.env.SMTP_FROM_EMAIL);
    console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL);

    // Return configuration for debugging
    if (!process.env.SMTP_HOST) {
      return NextResponse.json({
        error: 'Environment variables not loaded',
        debug: {
          SMTP_HOST: process.env.SMTP_HOST || 'MISSING',
          SMTP_PORT: process.env.SMTP_PORT || 'MISSING',
          SMTP_USER: process.env.SMTP_USER || 'MISSING',
          SMTP_SECURE: process.env.SMTP_SECURE || 'MISSING',
          NODE_ENV: process.env.NODE_ENV
        }
      }, { status: 500 });
    }

    // Create transporter with your SMTP settings
    const transportConfig = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add these options for better debugging and connection handling
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
      debug: true,
      logger: console
    };

    console.log('Transporter config:', JSON.stringify(transportConfig, null, 2));

    const transporter = nodemailer.createTransport(transportConfig);

    console.log('Transporter created successfully');

    // Test the connection with timeout
    const verifyPromise = transporter.verify();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout after 15 seconds')), 15000)
    );

    await Promise.race([verifyPromise, timeoutPromise]);
    console.log('SMTP connection verified');

    // Prepare recipients list
    const recipients = process.env.CONTACT_EMAIL?.split(',').map(email => email.trim()) || [process.env.SMTP_FROM_EMAIL];
    console.log('Test email recipients:', recipients);

    // Send a test email
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: recipients,
      subject: 'NXL Digital - Test Email Configuration',
      text: 'This is a test email to verify the SMTP configuration is working.',
      html: '<p>This is a test email to verify the SMTP configuration is working.</p>'
    });

    console.log('Test email sent successfully');

    return NextResponse.json(
      { message: 'Test email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email test error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    
    return NextResponse.json(
      { 
        error: 'Email test failed', 
        details: error.message,
        code: error.code 
      },
      { status: 500 }
    );
  }
}