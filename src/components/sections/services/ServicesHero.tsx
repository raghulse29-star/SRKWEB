'use client';

import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────
   SERVICES HERO — Exact UI, content, and gradient match from design
   ────────────────────────────────────────────────────────────────────────── */

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A111A] pt-20 pb-14 lg:pt-28 lg:pb-20 font-sans">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ph12.webp" // Update with actual image path
          alt="Modern architectural structure"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Deep left-to-right gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141c2435] via-[#141C24]/85 to-[#141C24]/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-[#CF5B4B]">
          Expert Engineering
        </p>
        <h1 data-reveal className="heading-hero mt-5 max-w-3xl text-white">
          Our Comprehensive <br className="hidden sm:block" />
          Construction Services
        </h1>
        <p data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="lead mt-6 max-w-2xl text-gray-300">
          From high-end residential roofing to complex civil engineering, we deliver structural integrity with aesthetic precision.
        </p>
      </div>
    </section>
  );
}