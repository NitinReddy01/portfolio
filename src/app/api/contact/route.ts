import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(2).max(120),
  message: z.string().min(2).max(5000),
});

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_TO_EMAIL; // e.g. your Gmail
const fromEmail = "Acme <onboarding@resend.dev>"; // no custom domain needed

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = schema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    if (!toEmail) {
      return NextResponse.json({ message: "Missing CONTACT_TO_EMAIL" }, { status: 500 });
    }

    const { name, email, subject, message } = parsed.data;

    const blocked = /(https?:\/\/|<a|<script|\bviagra\b|\bcasino\b)/i.test(message);
    if (blocked) {
      return NextResponse.json({ message: "Message flagged" }, { status: 400 });
    }

    const html = `
      <div style="font-family:system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.6">
        <h2 style="margin:0 0 8px">New message from ${name}</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p style="white-space:pre-wrap">${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,                // 👈 snake_case
      subject: `[Portfolio] ${subject}`,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ message: "Email failed", error }, { status: 502 });
    }

    return NextResponse.json({ message: "Message sent", id: data?.id }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
