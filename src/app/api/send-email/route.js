import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, name, message } = await request.json();

  // Create a transporter object using the Mailgun SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  // Set up email data
  let mailOptions = {
    from: '"Bekræftelse Improve Business" <your-email@your-domain.com>', // Valid sender address
    to: email, // list of receivers
    subject: "Vi har modtaget din besked", // Subject line
    text: `Hello ${name},\n\nThank you for your message: ${message}\n\nBest regards,\nYour Website Team`, // plain text body
    // html: '<b>Hello world?</b>', // html body (optional)
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error sending email",
      status: 500,
    });
  }
}
