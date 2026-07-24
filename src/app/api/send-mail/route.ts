import nodemailer from 'nodemailer';

/**
 * CONTACT / QUOTE FORM MAILER — Next.js API route (serverless on Vercel).
 *
 * Both site forms POST here (urlencoded) and the submission is relayed as an
 * email via Gmail SMTP.
 *
 * Credentials are NEVER in the repo:
 *  - Production: set in Vercel → Project → Settings → Environment Variables
 *  - Local dev:  .env (gitignored), loaded automatically by `next dev`
 *      SMTP_USER = the Gmail address
 *      SMTP_PASS = the 16-character Gmail App Password
 *      MAIL_TO   = (optional) recipient; defaults to SMTP_USER
 */
export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.text();
  const data = Object.fromEntries(new URLSearchParams(body));

  // Honeypot: bots fill the hidden field — pretend success, send nothing.
  if (data['bot-field']) {
    return Response.json({ ok: true });
  }

  const name = (data.name || '').trim();
  const email = (data.email || '').trim();
  if (!name || !email) {
    return Response.json({ ok: false, error: 'Name and email are required.' }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error('SMTP_USER / SMTP_PASS environment variables are not set.');
    return Response.json({ ok: false, error: 'Mailer not configured.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  // "contact" or "quote" — set by the hidden form-name field in each form.
  const formType = data['form-name'] === 'quote' ? 'Quote request' : 'Inquiry';

  const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : '');
  const text =
    `New ${formType.toLowerCase()} from the website\n\n` +
    line('Name', name) +
    line('Phone', data.phone) +
    line('Email', email) +
    line('Service', data.service) +
    line('Location', data.location) +
    line('Budget', data.budget) +
    (data.details ? `\nMessage:\n${data.details}\n` : '');

  try {
    await transporter.sendMail({
      from: `"SRK Website" <${user}>`,
      to: process.env.MAIL_TO || user,
      replyTo: `"${name}" <${email}>`,
      subject: `${formType} from ${name}${data.service ? ` — ${data.service}` : ''}`,
      text,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('sendMail failed:', err);
    return Response.json({ ok: false, error: 'Failed to send email.' }, { status: 502 });
  }
}
