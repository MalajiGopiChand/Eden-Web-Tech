import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, projectType, budget, description } = data;

    const messageBody = `
🚀 NEW PROJECT INQUIRY!

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phone || 'N/A'}
Project: ${projectType}
Budget: ${budget}

Description:
${description}
    `;

    // 1. Send Email (using Gmail SMTP)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // e.g., edenwebtechnologies@gmail.com
          pass: process.env.EMAIL_PASS, // Your Gmail App Password
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "edenwebtechnologies@gmail.com", // Send to yourself
        subject: `New Inquiry from ${name} - ${projectType}`,
        text: messageBody,
      });
    }

    // 2. Send WhatsApp Message (using Twilio)
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_WHATSAPP_NUMBER) {
      const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
      
      await client.messages.create({
        body: messageBody,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`, // Twilio Sandbox Number
        to: `whatsapp:+919705527264`, // Your verified WhatsApp number
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notification Error:", error);
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 });
  }
}
