'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   FAQ — self-contained accordion. EDIT the heading and the `faqs` array below.
   ────────────────────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: 'Do you offer free quotes and inspections?',
    answer:
      'Yes. Every project starts with a free on-site inspection and a detailed, fixed written quote — no obligation and no hidden costs.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Absolutely. We are fully licensed and insured, and our crews follow strict safety standards on every site.',
  },
  {
    question: 'How long does a typical roofing project take?',
    answer:
      'Most residential roofs are completed within a few days to a week, depending on size and weather. We provide a clear schedule before work begins.',
  },
  {
    question: 'What warranties do you provide?',
    answer:
      'We offer lifetime material warranties on premium systems plus a workmanship warranty. Exact terms are confirmed in your quote.',
  },
  {
    question: 'Do you handle both residential and commercial projects?',
    answer:
      'Yes — we deliver roofing, renovation, and structural construction for residential, commercial, and industrial clients.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-reveal>
          <p className="eyebrow text-[#CF5B4B]">Support</p>
          <h2 className="heading-section mt-3 text-[#0A111A]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                data-reveal
                style={{ '--reveal-order': Math.min(i, 5) } as React.CSSProperties}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="heading-card text-[#0A111A]">{faq.question}</span>
                  <span className="shrink-0 text-[#CF5B4B]">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                {isOpen ? (
                  <div className="body-text px-6 pb-5 text-gray-600">{faq.answer}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
