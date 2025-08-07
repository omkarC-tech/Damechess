import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

// Load env from server folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(input: ContactEmailInput) {
  const { name, email, phone, subject, message } = input;

  try {
    const { data, error } = await resend.emails.send({
      from: `DameChess <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL!,
      subject: `New Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      throw new Error("Email send failed");
    }

    console.log("✅ Email sent via Resend:", data?.id);
  } catch (err) {
    console.error("❌ Failed to send contact email:", err);
    throw err;
  }
}
