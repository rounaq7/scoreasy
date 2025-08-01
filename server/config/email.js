const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendContactNotification = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to admin
      subject: '🎓 New Contact Form Submission - Scoreazy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎓 Scoreazy</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${contactData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
              <p><strong>Message:</strong></p>
              <div style="background: #f1f3f4; padding: 15px; border-radius: 5px; margin-top: 10px;">
                ${contactData.message}
              </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">
              <p style="margin: 0; color: #1976d2;">
                <strong>Submission Time:</strong> ${new Date(contactData.createdAt).toLocaleString()}
              </p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="${process.env.ADMIN_URL || 'http://localhost:5000/admin'}" 
                 style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                View in Admin Dashboard
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated notification from Scoreazy's contact form system.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return false;
  }
};

const sendWelcomeEmail = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: '🎓 Welcome to Scoreazy - We\'ve Received Your Message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎓 Scoreazy</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Personalized Learning & Mentorship</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Thank You for Reaching Out!</h2>
            
            <p>Dear ${contactData.name},</p>
            
            <p>Thank you for your interest in Scoreazy's Counseling & Mentorship Program! We've received your message and our team will get back to you within 24 hours.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #667eea; margin-top: 0;">What's Next?</h3>
              <ul style="color: #555;">
                <li>Our expert team will review your requirements</li>
                <li>We'll schedule a personalized discovery call</li>
                <li>Create your customized learning blueprint</li>
                <li>Match you with the perfect mentor</li>
              </ul>
            </div>
            
            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
              <p style="margin: 0; color: #2e7d32;">
                <strong>Why Choose Scoreazy?</strong><br>
                AI-powered insights • Certified mentors • Personalized learning paths • Proven results
              </p>
            </div>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Scoreazy Team</strong><br>
              <a href="mailto:support@scoreazy.com">support@scoreazy.com</a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>© 2024 Scoreazy. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Welcome email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('❌ Error sending welcome email:', error);
    return false;
  }
};

module.exports = {
  sendContactNotification,
  sendWelcomeEmail,
}; 