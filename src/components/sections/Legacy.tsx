'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   LEGACY / ABOUT INTRO — Updated with exact content and layout from design
   ────────────────────────────────────────────────────────────────────────── */

const highlights = [
  'Certified Master Contractors',
  'Lifetime Material Warranties',
  'Advanced Structural Analysis',
];

export function Legacy() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        
        {/* Left: image + overlapping quote card */}
        <div className="relative pb-12 lg:pb-0 lg:pr-8" data-reveal="left">
          <div className="relative aspect-[4/5] w-full lg:w-[95%] overflow-hidden rounded-xl bg-gradient-to-br from-[#2a3f4a] to-[#0A111A] shadow-lg">
            <Image
              src="/images/legacy.jpg" // Update this path to your actual image
              alt="Premium residential roofing at dusk"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote card positioned over bottom right */}
          <div className="absolute -bottom-6 right-0 z-10 w-[90%] rounded-xl bg-[#0A111A] p-6 shadow-2xl sm:p-8 lg:-bottom-10 lg:-right-4 lg:w-[85%]">
            <p className="body-text text-white/95">
              "Precision is our foundation. Quality is our promise."
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="h-[2px] w-6 bg-[#D45D53]" />
              <p className="text-sm font-semibold text-[#D45D53]">Srikumaran Team</p>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="lg:pl-4" data-reveal="right">
          <p className="eyebrow text-[#D45D53]">
            THE SRIKUMARAN LEGACY
          </p>
          <h2 className="heading-section mt-4 text-[#0A111A]">
            Three Decades of<br className="hidden sm:block" /> Engineering<br className="hidden sm:block" /> Excellence
          </h2>

          <div className="body-text mt-6 space-y-5 text-gray-600">
            <p>
              Srikumaran Roofing and Construction is a Tamil Nadu–based industrial construction company with over 30 years of experience delivering durable, cost-effective, and technically sound infrastructure solutions. From large-scale industrial roofing systems to complete civil construction and fabrication works, every project is executed with precision, strict quality control, and a commitment to timelines.
            </p>
          </div>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CircleCheck className="h-6 w-6 shrink-0 text-[#D45D53]" strokeWidth={2} />
                <span className="text-[16px] font-bold text-[#0A111A]">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-[#0A111A] px-8 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#172026] hover:shadow-lg"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}