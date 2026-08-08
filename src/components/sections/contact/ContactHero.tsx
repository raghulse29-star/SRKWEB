'use client';

import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────
   CONTACT HERO — Exact UI, content, and atmospheric match
   ────────────────────────────────────────────────────────────────────────── */

export function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A111A] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 font-sans">

      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img1.webp" // Ensure this matches your public path
          alt="Metal roof structure against twilight sky"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient to ensure text readability against the twilight sky */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A111A]/70 via-[#0A111A]/25 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <p className="eyebrow text-[#CF5B4B]">
          Connect With Our Experts
        </p>

        {/* Main Heading */}
        <h1 data-reveal className="heading-hero mt-5 max-w-4xl text-white">
          Start Your Construction <br />
          Journey With Us
        </h1>

        {/* Description Paragraph */}
        <p data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="lead mt-6 max-w-[540px] text-gray-300">
          From precision roofing to full-scale commercial construction, we bring architectural excellence and structural integrity to every project.
        </p>
        
      </div>
    </section>
  );
}