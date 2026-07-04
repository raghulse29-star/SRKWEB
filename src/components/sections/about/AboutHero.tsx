'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   ABOUT HERO — Exact UI, content, and deep gradient match from design
   ────────────────────────────────────────────────────────────────────────── */

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A111A] pt-20 pb-14 lg:pt-28 lg:pb-20 font-sans">
      
      {/* Background Image & Exact Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ph7.webp" // Ensure this matches your public folder path
          alt="Architectural home at night with premium roofing"
          fill
          className="object-cover object-center"
          priority
        />
        Primary rich dark gradient sweeping left to right
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b141c76] via-[#0B141C]/85 to-transparent" />
        {/* Secondary subtle top-to-bottom dark vignette to ensure text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B141C]/40 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px]">
          
          {/* Eyebrow */}
          <p className="eyebrow text-[#CF5B4B]">
            Our Heritage
          </p>

          {/* Main Heading */}
          <h1 data-reveal className="heading-hero mt-5 text-white">
            Built on Trust & <br />
            Quality
          </h1>

          {/* Subtext Paragraph */}
          <p data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="lead mt-6 text-gray-300">
            Dedicated to architectural excellence and structural perfection since 1995. We don't just build roofs; we engineer lasting legacies for your home and business.
          </p>
          
          {/* Call to Action Button */}
          <Link
            href="#story"
            data-reveal
            style={{ '--reveal-order': 2 } as React.CSSProperties}
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-md bg-[#CF5B4B] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b54a3b] hover:shadow-xl"
          >
            Explore Our Story
            <ArrowDown className="h-4 w-4" strokeWidth={2.5} />
          </Link>
          
        </div>
      </div>
    </section>
  );
}