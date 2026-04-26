import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject || "New Contact"} — from ${name}`,
      html: `
        <div style="font-family:monospace;background:#050b14;color:#d6eaff;padding:24px;border-radius:12px;max-width:600px">
          <h2 style="color:#00c8ff;margin-bottom:16px">📬 New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="color:#4a6d8c;padding:6px 0;width:120px">Name:</td><td style="color:#f0f8ff">${name}</td></tr>
            <tr><td style="color:#4a6d8c;padding:6px 0">Email:</td><td><a href="mailto:${email}" style="color:#00c8ff">${email}</a></td></tr>
            <tr><td style="color:#4a6d8c;padding:6px 0">Type:</td><td style="color:#f0f8ff">${subject}</td></tr>
          </table>
          <hr style="border:1px solid #1a3a55;margin:16px 0"/>
          <p style="color:#4a6d8c;margin-bottom:8px">Message:</p>
          <p style="color:#d6eaff;line-height:1.7;white-space:pre-wrap">${message}</p>
        </div>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
