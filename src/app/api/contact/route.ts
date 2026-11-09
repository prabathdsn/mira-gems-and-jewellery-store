import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, subject, interestCategory, message, preferredContactMethod } = data;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Generate a unique inquiry tracking number
    const inquiryRef = `MIRA-${Date.now().toString().slice(-6)}`;

    // In a production app, send email via SendGrid, Resend, AWS SES or Nodemailer to owner:
    // e.g. await sendEmail({ to: 'owner@miragems.com', from: email, subject, text: message })
    console.log(`[ATELIER EMAIL DISPATCH TO OWNER] Ref: ${inquiryRef}`);
    console.log(`From: ${fullName} <${email}> (${phone})`);
    console.log(`Subject: ${subject} | Category: ${interestCategory}`);
    console.log(`Preferred Method: ${preferredContactMethod}`);
    console.log(`Message:\n${message}`);

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been successfully dispatched to the atelier owner.',
      inquiryRef,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}
