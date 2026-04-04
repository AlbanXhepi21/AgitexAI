import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const useGmail = Boolean(gmailUser && gmailAppPassword);

const gmailTransporter = useGmail
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })
  : null;

const TO_EMAILS = (process.env.CONTACT_FORM_TO_EMAIL ?? "albanxhepi@agitexai.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);
const defaultTo = TO_EMAILS.length > 0 ? TO_EMAILS : ["albanxhepi@agitexai.com"];
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "AgitexAI Website <onboarding@resend.dev>";

const FALLBACK_CONTACT = "albanxhepi@agitexai.com";

function buildPayload(body: Record<string, unknown>) {
  const { name, email, projectType, message } = body;

  const subject =
    `Contact form: ${typeof name === "string" && name.trim() ? name.trim() : "New inquiry"}`.slice(
      0,
      255
    );
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${name ?? "—"}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project type:</strong> ${projectType ?? "—"}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${message}</pre>
  `;
  return { subject, html, replyTo: email as string };
}

export async function POST(request: Request) {
  if (!resend && !gmailTransporter) {
    return NextResponse.json(
      {
        error:
          "Email not configured. Add either (A) GMAIL_USER + GMAIL_APP_PASSWORD in .env for free Gmail, or (B) RESEND_API_KEY. See .env.example.",
      },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { email, message } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const { subject, html, replyTo } = buildPayload(body);

    if (gmailTransporter) {
      const info = await gmailTransporter.sendMail({
        from: `AgitexAI Contact <${gmailUser}>`,
        to: defaultTo,
        replyTo: replyTo || undefined,
        subject,
        html,
      });
      return NextResponse.json({ success: true, id: info.messageId });
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: defaultTo,
      replyTo: replyTo || undefined,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      const errMsg = String(error.message || "");
      const isDomainError =
        errMsg.includes("only send testing emails") ||
        errMsg.includes("verify a domain") ||
        errMsg.includes("verify your domain");
      const userMessage = isDomainError
        ? "Resend requires domain verification to send to this address. Use Gmail instead: set GMAIL_USER and GMAIL_APP_PASSWORD in .env (see .env.example)."
        : error.message || "Failed to send email";
      return NextResponse.json({ error: userMessage }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err instanceof Error ? err.message : "Send failed";
    return NextResponse.json(
      {
        error: `Something went wrong: ${message}. Please try again or email ${FALLBACK_CONTACT}.`,
      },
      { status: 500 }
    );
  }
}
