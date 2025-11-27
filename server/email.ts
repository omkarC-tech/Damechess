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
      from: `DameChess <contact@damechess.com>`,
      to: "contact@damechess.com",
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

export async function sendSubscriptionEmail(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: `DameChess <contact@damechess.com>`,
      to: email,
      subject: "Welcome to the Inner Circle of DameChess ♟️",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #eee; }
            .header { background: linear-gradient(135deg, #2b2d42 0%, #1a1b2e 100%); padding: 40px 0; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px; }
            .header span { color: #f97316; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 20px; font-weight: 600; color: #1a1b2e; margin-bottom: 20px; }
            .message { color: #555; margin-bottom: 30px; }
            .features { background-color: #fff7ed; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #f97316; }
            .features h3 { margin-top: 0; color: #9a3412; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px; }
            .features ul { padding-left: 20px; margin-bottom: 0; }
            .features li { margin-bottom: 10px; color: #7c2d12; }
            .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
            .button { display: inline-block; background-color: #f97316; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 10px; }
            .button:hover { background-color: #ea580c; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Dame<span>Chess</span></h1>
            </div>
            <div class="content">
              <div class="greeting">Welcome Aboard!</div>
              <p class="message">
                We are thrilled to welcome you to the DameChess community. You have just taken a significant step towards mastering the royal game.
                <br><br>
                Our mission is to transform how chess is learned and played, combining timeless strategy with modern technology. As a subscriber, you now have a front-row seat to this revolution.
              </p>
              
              <div class="features">
                <h3>What to Expect:</h3>
                <ul>
                  <li><strong>Exclusive Insights:</strong> Deep dives into grandmaster strategies and tournament breakdowns.</li>
                  <li><strong>Weekly Tactics:</strong> Curated puzzles to sharpen your tactical vision.</li>
                  <li><strong>Community Updates:</strong> First access to new courses, features, and events.</li>
                </ul>
              </div>

              <p class="message">
                We promise to keep your inbox inspiring and clutter-free. Get ready to elevate your game.
              </p>
              
              <div style="text-align: center; margin-top: 40px;">
                <a href="https://damechess.com" class="button">Start Learning Now</a>
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} DameChess Academy. All rights reserved.<br>
              Elevating minds, one move at a time.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      throw new Error(`Email send failed: ${error.message}`);
    } else {
      console.log("✅ Subscription email sent:", data?.id);
    }
  } catch (err) {
    console.error("❌ Failed to send subscription email:", err);
  }
}
