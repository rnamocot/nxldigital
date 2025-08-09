import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      companyName,
      industry,
      website,
      companySize,
      firstName, 
      lastName, 
      email, 
      phone,
      services,
      goals,
      timeline,
      budget,
      currentMarketing,
      challenges,
      additionalInfo,
      consent 
    } = body;

    // Validate required fields
    if (!companyName || !industry || !firstName || !lastName || !email || !services || !goals || !timeline || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for admin notification
    const adminEmailContent = `
      New Quote Request Submission
      
      BUSINESS INFORMATION:
      Company: ${companyName}
      Industry: ${industry}
      Website: ${website || 'Not provided'}
      Company Size: ${companySize || 'Not specified'}
      
      CONTACT INFORMATION:
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      PROJECT DETAILS:
      Services: ${Array.isArray(services) ? services.join(', ') : services}
      Timeline: ${timeline}
      Budget: ${budget}
      
      Goals:
      ${goals}
      
      Current Marketing:
      ${currentMarketing || 'Not provided'}
      
      Challenges:
      ${challenges || 'Not provided'}
      
      Additional Information:
      ${additionalInfo || 'Not provided'}
      
      Consent: ${consent ? 'Yes' : 'No'}
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Prepare recipients list
    const recipients = process.env.CONTACT_EMAIL?.split(',').map(email => email.trim()) || [process.env.SMTP_FROM_EMAIL];
    console.log('Sending quote request to recipients:', recipients);

    // Send email to admin(s)
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: recipients,
      subject: `NXL Digital - New Quote Request - ${companyName} (${industry})`,
      text: adminEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <h2 style="color: #002186; border-bottom: 2px solid #FFD302; padding-bottom: 10px;">
            New Quote Request Submission
          </h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #002186; margin-top: 0;">Business Information</h3>
              <p><strong>Company:</strong> ${companyName}</p>
              <p><strong>Industry:</strong> ${industry}</p>
              <p><strong>Website:</strong> ${website ? `<a href="${website}">${website}</a>` : 'Not provided'}</p>
              <p><strong>Size:</strong> ${companySize || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #002186; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
          </div>
          
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #FFD302; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Project Requirements</h3>
            <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Budget:</strong> ${budget}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Goals</h3>
            <p style="white-space: pre-wrap;">${goals}</p>
          </div>
          
          ${currentMarketing ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Current Marketing Efforts</h3>
            <p style="white-space: pre-wrap;">${currentMarketing}</p>
          </div>
          ` : ''}
          
          ${challenges ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Challenges</h3>
            <p style="white-space: pre-wrap;">${challenges}</p>
          </div>
          ` : ''}
          
          ${additionalInfo ? `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #002186; margin-top: 0;">Additional Information</h3>
            <p style="white-space: pre-wrap;">${additionalInfo}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
            <p style="color: #6c757d; font-size: 0.9em;">
              Consent: ${consent ? 'Yes' : 'No'}<br>
              Submitted: ${new Date().toLocaleString()}<br>
              Priority: High (Quote Request)
            </p>
          </div>
        </div>
      `
    });

    // Send confirmation email to customer
    const customerEmailContent = `
      Thank you for your quote request!
      
      Hi ${firstName},
      
      Thank you for requesting a quote from NXL Digital. We've received your detailed information and will prepare a comprehensive proposal for ${companyName}.
      
      What happens next:
      
      1. EXPERT ANALYSIS (24-48 hours)
         Our team will analyze your current digital presence, competitors, and identify growth opportunities.
      
      2. CUSTOM PROPOSAL (Within 24-48 hours)
         You'll receive a detailed proposal with strategies, timelines, transparent pricing, and ROI projections.
      
      3. STRATEGY CALL (Your choice)
         We'll schedule a free consultation to discuss the proposal, answer questions, and refine the strategy.
      
      Your request summary:
      - Services: ${Array.isArray(services) ? services.join(', ') : services}
      - Timeline: ${timeline}
      - Budget: ${budget}
      
      Questions? Reply to this email or call us directly.
      
      Best regards,
      The NXL Digital Team
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'NXL Digital - Your Custom Quote Request Received',
      text: customerEmailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #002186 0%, #001760 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Quote Request Received!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We're preparing your custom proposal</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border: 1px solid #dee2e6; border-top: none;">
            <p style="font-size: 18px; color: #002186;">Hi ${firstName},</p>
            
            <p style="line-height: 1.6; color: #333;">
              Thank you for requesting a quote from NXL Digital. We've received your detailed information 
              and will prepare a comprehensive proposal for <strong>${companyName}</strong>.
            </p>
            
            <div style="background: linear-gradient(135deg, #FFD302 0%, #f5c842 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #002186; margin-top: 0; text-align: center;">What Happens Next</h3>
              
              <div style="display: grid; gap: 15px;">
                <div style="display: flex; align-items: flex-start; gap: 15px;">
                  <div style="background: #002186; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">1</div>
                  <div>
                    <h4 style="margin: 0 0 5px 0; color: #002186;">Expert Analysis (24-48 hours)</h4>
                    <p style="margin: 0; font-size: 14px; color: #333;">Our team analyzes your digital presence, competitors, and identifies growth opportunities.</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: flex-start; gap: 15px;">
                  <div style="background: #002186; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">2</div>
                  <div>
                    <h4 style="margin: 0 0 5px 0; color: #002186;">Custom Proposal (Within 24-48 hours)</h4>
                    <p style="margin: 0; font-size: 14px; color: #333;">Detailed proposal with strategies, timelines, transparent pricing, and ROI projections.</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: flex-start; gap: 15px;">
                  <div style="background: #002186; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">3</div>
                  <div>
                    <h4 style="margin: 0 0 5px 0; color: #002186;">Strategy Call (Your choice)</h4>
                    <p style="margin: 0; font-size: 14px; color: #333;">Free consultation to discuss the proposal and refine the strategy together.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #002186;">
              <h3 style="color: #002186; margin-top: 0;">Your Request Summary</h3>
              <p style="margin: 5px 0;"><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
              <p style="margin: 5px 0;"><strong>Timeline:</strong> ${timeline}</p>
              <p style="margin: 5px 0;"><strong>Budget:</strong> ${budget}</p>
            </div>
            
            <p style="line-height: 1.6; color: #333;">
              Questions? Simply reply to this email or 
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" style="color: #002186;">contact us directly</a>.
            </p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #dee2e6; border-top: none;">
            <p style="margin: 0; color: #6c757d; font-size: 0.9em;">
              Best regards,<br>
              <strong>The NXL Digital Team</strong>
            </p>
          </div>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again later.' },
      { status: 500 }
    );
  }
}