'use client';

import { BadgeCheck, Compass, Handshake } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   THE PRINCIPLES OF SRIKUMARAN — Exact UI, content, and layout from design
   ────────────────────────────────────────────────────────────────────────── */

const principles = [
  {
    icon: BadgeCheck,
    title: 'Quality Construction &\nStructural Strength',
    description:
      'We follow industry-leading construction practices to ensure durable and reliable structures. Every roofing, fabrication, and construction project is built with precision and high-quality materials. Our focus on safety and engineering excellence guarantees long-lasting performance. We deliver structures that stand strong for generations.',
  },
  {
    icon: Compass,
    title: 'Expert Design &\nFabrication Solutions',
    description:
      'Our team combines technical expertise with innovative design to create efficient and functional spaces. From industrial sheds and warehouses to commercial and residential projects, we ensure every structure meets client requirements. We focus on quality fabrication and modern construction techniques. Every project is customized for maximum value and performance.',
  },
  {
    icon: Handshake,
    title: 'Transparent & Reliable\nProject Delivery',
    description:
      'We believe in clear communication and complete transparency throughout every project. Clients receive regular updates, accurate timelines, and detailed cost estimates. Our commitment to honesty and professionalism has earned the trust of customers for over 25 years. We deliver projects on time without compromising quality.',
  },
];

export function Principles() {
  return (
    <section className="w-full bg-[#F4F4F4] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div className="max-w-xl" data-reveal>
            <p className="eyebrow text-[#CF5B4B]">
              Our Philosophy
            </p>
            <h2 className="heading-section mt-4 text-[#0A111A]">
              The Principles of <br className="hidden sm:block" />
              Srikumaran
            </h2>
          </div>
          <div className="max-w-lg lg:pt-8" data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties}>
            <p className="lead text-[#4B5563]">
              With over 25 years of experience in roofing, fabrication, and construction services, we deliver durable structures, quality workmanship, and transparent project management for residential, commercial, and industrial clients.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 lg:gap-8">
          {principles.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
                className="group flex flex-col rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:p-12"
              >
                {/* Icon Box */}
                <div className="mb-8 inline-flex h-[60px] w-[60px] items-center justify-center rounded-2xl bg-[#CF5B4B]/10 text-[#CF5B4B]">
                  <Icon className="h-[28px] w-[28px]" strokeWidth={1.5} />
                </div>
                
                {/* Card Title */}
                <h3 className="heading-card mb-5 whitespace-pre-line text-[#0A111A]">
                  {p.title}
                </h3>

                {/* Card Description */}
                <p className="body-text text-[#6B7280]">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}