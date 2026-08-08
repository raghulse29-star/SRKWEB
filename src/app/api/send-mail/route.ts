import nodemailer from 'nodemailer';
import { siteConfig } from '@/lib/site';

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

const MAX_BODY_BYTES = 20_000; // generous for a contact form, blocks payload-bloat abuse
const FIELD_LIMITS: Record<string, number> = {
  name: 100,
  phone: 30,
  email: 254, // RFC 5321 max
  service: 100,
  location: 150,
  budget: 50,
  details: 4000,
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Strips CR/LF (header-injection hardening) and enforces a max length. */
function clean(value: string | undefined, maxLen: number): string {
  return (value || '').replace(/[\r\n]+/g, ' ').trim().slice(0, maxLen);
}

// Simple in-memory sliding-window rate limit: 5 requests / 10 minutes per IP.
// NOTE: resets on cold start and isn't shared across serverless instances —
// it raises the bar against casual scripted abuse, not a determined attacker.
// For stronger guarantees, move this to Upstash Redis / Vercel Edge Config.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // same-origin form posts / non-browser tools may omit Origin
  try {
    const host = new URL(origin).host;
    const siteHost = new URL(siteConfig.url).host;
    return host === siteHost || host === 'localhost:3000' || host === '127.0.0.1:3000';
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!isAllowedOrigin(req)) {
    return Response.json({ ok: false, error: 'Forbidden.' }, { status: 403 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return Response.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const rawBody = await req.text();
  if (rawBody.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: 'Request too large.' }, { status: 413 });
  }
  const data = Object.fromEntries(new URLSearchParams(rawBody));

  // Honeypot: bots fill the hidden field — pretend success, send nothing.
  if (data['bot-field']) {
    return Response.json({ ok: true });
  }

  const name = clean(data.name, FIELD_LIMITS.name);
  const email = clean(data.email, FIELD_LIMITS.email);
  const phone = clean(data.phone, FIELD_LIMITS.phone);
  const service = clean(data.service, FIELD_LIMITS.service);
  const location = clean(data.location, FIELD_LIMITS.location);
  const budget = clean(data.budget, FIELD_LIMITS.budget);
  const details = clean(data.details, FIELD_LIMITS.details);
  const formName = clean(data['form-name'], 20);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: 'A valid name and email are required.' }, { status: 400 });
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
  const formType = formName === 'quote' ? 'Quote request' : 'Inquiry';

  const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : '');
  const text =
    `New ${formType.toLowerCase()} from the website\n\n` +
    line('Name', name) +
    line('Phone', phone) +
    line('Email', email) +
    line('Service', service) +
    line('Location', location) +
    line('Budget', budget) +
    (details ? `\nMessage:\n${details}\n` : '');

  try {
    await transporter.sendMail({
      from: `"SKR Website" <${user}>`,
      to: process.env.MAIL_TO || user,
      replyTo: `"${name}" <${email}>`,
      subject: `${formType} from ${name}${service ? ` — ${service}` : ''}`,
      text,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('sendMail failed:', err);
    return Response.json({ ok: false, error: 'Failed to send email.' }, { status: 502 });
  }
}
