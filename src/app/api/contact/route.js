import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    console.log('=== Contact API Called ===');
    
    const body = await request.json();
    console.log('Request body received:', body);
    
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      services, 
      budget, 
      message,
      privacy 
    } = body;

    console.log('Extracted fields:', { firstName, lastName, email, services, message });

    // Validate required fields
    if (!firstName || !lastName || !email || !services || !message) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Validation passed, creating transporter...');

    // Create transporter with your SMTP settings
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      fromEmail: process.env.SMTP_FROM_EMAIL,
      contactEmail: process.env.CONTACT_EMAIL
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log('Transporter created successfully');

    // Email content for admin notification
    const adminEmailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Services Interested: ${services}
      Budget Range: ${budget || 'Not specified'}
      
      Message:
      ${message}
      
      Privacy Consent: ${privacy ? 'Yes' : 'No'}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Prepare recipients list
    const recipients = process.env.CONTACT_EMAIL?.split(',').map(email => email.trim()) || [process.env.SMTP_FROM_EMAIL];
    console.log('Sending to recipients:', recipients);

    // Send email to admin(s)
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: recipients,
      subject: `NXL Digital - New Contact Form Submission - ${firstName} ${lastName}`,
      text: adminEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #002186; border-bottom: 2px solid #FFD302; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Project Information</h3>
            <p><strong>Services Interested:</strong> ${services}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 0.9em;">
              Privacy Consent: ${privacy ? 'Yes' : 'No'}<br>
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `
    });

    // Send confirmation email to customer
    const customerEmailContent = `
      Thank you for contacting NXL Digital!
      
      Hi ${firstName},
      
      Thank you for reaching out to us. We've received your inquiry and will get back to you within 24 hours during business days.
      
      Here's a summary of your submission:
      - Services interested in: ${services}
      - Budget range: ${budget || 'Not specified'}
      
      In the meantime, feel free to explore our case studies and blog articles on our website.
      
      Best regards,
      The NXL Digital Team
      
      ---
      This is an automated response. Please do not reply to this email.
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'NXL Digital - Thank you for contacting us',
      text: customerEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #002186 0%, #001760 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border: 1px solid #dee2e6; border-top: none;">
            <p style="font-size: 18px; color: #002186;">Hi ${firstName},</p>
            
            <p style="line-height: 1.6; color: #333;">
              Thank you for reaching out to NXL Digital. We've received your inquiry and will get back to you 
              <strong>within 24 hours</strong> during business days.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFD302;">
              <h3 style="color: #002186; margin-top: 0;">Your Inquiry Summary</h3>
              <p style="margin: 5px 0;"><strong>Services:</strong> ${services}</p>
              <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              In the meantime, feel free to explore our 
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/case-studies" style="color: #002186;">case studies</a> and 
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" style="color: #002186;">blog articles</a>.
            </p>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #FFD302 0%, #f5c842 100%); border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #002186; font-weight: bold;">
                🚀 Ready to get started? Schedule a free consultation!
              </p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/get-quote" 
                 style="display: inline-block; margin-top: 10px; padding: 12px 24px; background: #002186; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Get Free Quote
              </a>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #dee2e6; border-top: none;">
            <p style="margin: 0; color: #6c757d; font-size: 0.9em;">
              Best regards,<br>
              <strong>The NXL Digital Team</strong>
            </p>
            <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 0.8em;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.', details: error.message },
      { status: 500 }
    );
  }
}