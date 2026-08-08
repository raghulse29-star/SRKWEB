'use client';

import Image from 'next/image';
import Link from 'next/link';

/* ──────────────────────────────────────────────────────────────────────────
   PROJECTS HERO — Exact UI, content, and layout match from design
   ────────────────────────────────────────────────────────────────────────── */

export function ProjectsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A111A] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-24 font-sans">

      {/* Background Image & Lightened Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ph16.webp" // Update path as needed
          alt="Aerial view of city infrastructure projects"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient sweeping from right to left to mimic the sunset effect */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a111a08] via-[#0A111A]/40 to-[#0A111A]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A111A]/10 to-[#0A111A]/55" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px]">
          
          {/* Eyebrow */}
          <p className="eyebrow text-[#CF5B4B]">
            Portfolio Showcase
          </p>

          {/* Main Heading */}
          <h1 data-reveal className="heading-hero mt-5 text-white">
            Craftsmanship That <br />
            Speaks Through Every <br />
            Project
          </h1>

          {/* Description Paragraph */}
          <p data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="lead mt-6 text-gray-300">
            Explore our legacy of structural excellence. From high-end residential estates to massive industrial complexes, our roofing and construction solutions define modern skylines.
          </p>
          
          {/* CTA Buttons */}
          <div data-reveal style={{ '--reveal-order': 2 } as React.CSSProperties} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-md bg-[#CF5B4B] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b54a3b] hover:shadow-xl"
            >
              View Gallery
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-3.5 text-[15px] font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Case Studies
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}