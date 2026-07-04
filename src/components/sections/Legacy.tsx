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
            Architectural<br className="hidden sm:block" /> Excellence in Every<br className="hidden sm:block" /> Shingle
          </h2>

          <div className="body-text mt-6 space-y-5 text-gray-600">
            <p>
              Srikumaran Roofing & Construction was founded with a vision to deliver reliable, high-quality roofing and construction solutions. With over 25 years of experience, we have built a strong reputation for excellence, trust, and craftsmanship across residential, commercial, and industrial projects.
            </p>
            <p>
              We believe every project is more than just a structure—it's an investment in the future. By combining quality materials, skilled workmanship, and a customer-first approach, we transform ideas into durable and lasting spaces that stand the test of time.
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