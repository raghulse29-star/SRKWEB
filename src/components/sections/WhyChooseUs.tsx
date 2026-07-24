'use client';

import { History, Factory, UserCog, CalendarCheck, Handshake } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   WHY CHOOSE US — five advantage cards, exact content from the design.
   ────────────────────────────────────────────────────────────────────────── */

const advantages = [
  {
    icon: History,
    title: '35+ Years',
    description: 'Proven industry experience since 1989.',
  },
  {
    icon: Factory,
    title: 'Industrial Focus',
    description: 'Specialization in large-scale industrial projects.',
  },
  {
    icon: UserCog,
    title: 'Expert Team',
    description: 'Skilled workforce and technical supervision.',
  },
  {
    icon: CalendarCheck,
    title: 'Timely Delivery',
    description: 'Structured planning for on-time completion.',
  },
  {
    icon: Handshake,
    title: 'Client Trust',
    description: 'Strong long-term client relationships.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F4F4F4] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center" data-reveal>
          <p className="eyebrow text-[#B44335]">
            Our Advantage
          </p>
          <h2 className="heading-section mt-4 text-[#0A111A]">
            Why Choose Us
          </h2>
        </div>

        {/* Advantage Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
                className="flex flex-col items-center rounded-2xl bg-white px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CF5B4B]/15 text-[#B44335]">
                  <Icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
                <h3 className="heading-card mt-6 text-[#0A111A]">
                  {item.title}
                </h3>
                <p className="body-text mt-3 text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
