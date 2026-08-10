'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useNetlifyForm } from '@/components/forms/useNetlifyForm';
import { siteConfig } from '@/lib/site';

/* ──────────────────────────────────────────────────────────────────────────
   CONTACT SECTION — Exact light-theme UI match from design
   ────────────────────────────────────────────────────────────────────────── */

const services = [
  'Industrial Roofing',
  'Residential Roofing',
  'Civil & Structural',
  'Waterproofing & Renovation',
];

const budgets = ['Under ₹5L', '₹5L - ₹20L', '₹20L - ₹50L', '₹50L+'];

const infoCards = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: [
      `${siteConfig.contact.address.street}`,
      `${siteConfig.contact.address.locality}, Tamil Nadu ${siteConfig.contact.address.postalCode}`,
    ],
  },
  {
    icon: Phone,
    title: 'Direct Line',
    lines: [siteConfig.contact.phone, 'Mon-Sat: 8:00 AM - 6:00 PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [siteConfig.contact.email],
  },
];

const fieldClass =
  'w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-[14px] text-[#0A111A] placeholder:text-gray-400 focus:border-[#CF5B4B] focus:outline-none focus:ring-1 focus:ring-[#CF5B4B]';

export function ContactSection() {
  const [budget, setBudget] = useState(budgets[2]);
  // Submits to the serverless mailer, which emails the inquiry via Gmail SMTP.
  const { status, handleSubmit } = useNetlifyForm('/api/send-mail');

  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto grid w-full max-w-[1200px] gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        
        {/* Left: Heading & Info */}
        <div className="flex flex-col justify-center" data-reveal="left" style={{ '--reveal-order': 1 } as React.CSSProperties}>
          <h2 className="heading-section text-[#0A111A]">Get In Touch</h2>
          <p className="lead mt-6 text-gray-600">
            Have a specific project in mind? Our team of structural engineers and design consultants are ready to help you navigate the complexities of your next build.
          </p>

          <div className="mt-10 space-y-5">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="flex items-start gap-5 rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#CF5B4B] text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="heading-card text-[#0A111A]">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="body-text mt-0.5 text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-10" data-reveal="right">
          <form name="contact" onSubmit={handleSubmit} className="space-y-6">
            {/* form-name tells the mailer which form this is; the hidden
                bot-field is a honeypot spam trap. */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden aria-hidden="true">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[14px] font-bold text-[#0A111A]">Full Name</label>
                <input name="name" required placeholder="Enter your name" className={fieldClass} />
              </div>
              <div>
                <label className="mb-2 block text-[14px] font-bold text-[#0A111A]">Phone Number</label>
                <input name="phone" type="tel" placeholder="+91 00000 00000" className={fieldClass} />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-bold text-[#0A111A]">Email Address</label>
              <input name="email" type="email" required placeholder="email@example.com" className={fieldClass} />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-bold text-[#0A111A]">Service Required</label>
              <select name="service" className={fieldClass}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-[14px] font-bold text-[#0A111A]">Estimated Budget Range</label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-md border py-3 text-[13px] font-bold transition-all ${
                      budget === b
                        ? 'border-[#0A111A] bg-[#0A111A] text-white'
                        : 'border-gray-200 bg-white text-[#0A111A] hover:border-[#0A111A]'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected budget travels as a hidden field (buttons above are UI only). */}
            <input type="hidden" name="budget" value={budget} />

            <div>
              <label className="mb-2 block text-[14px] font-bold text-[#0A111A]">Project Message</label>
              <textarea name="details" placeholder="Tell us about your project requirements..." rows={4} className={`${fieldClass} resize-none`} />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 flex w-full items-center justify-center gap-3 rounded-lg bg-[#0A111A] py-4 text-[16px] font-bold text-white transition-all hover:bg-[#1E242B] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Inquiry'} <ArrowRight className="h-5 w-5" />
            </button>

            {status === 'success' && (
              <p role="status" className="rounded-md bg-green-50 p-4 text-[14px] font-semibold text-green-700">
                Thank you! Your inquiry has been sent — we&apos;ll get back to you within one business day.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="rounded-md bg-red-50 p-4 text-[14px] font-semibold text-red-700">
                Something went wrong. Please try again, or call us directly at +91 44 2456 7890.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}