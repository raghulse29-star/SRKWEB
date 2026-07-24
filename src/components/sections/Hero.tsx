'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Briefcase, BadgeCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A111A] pt-16 pb-12 lg:pt-24 lg:pb-16">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/img1.png" // Keep your placeholder or update path
          alt="Building construction site"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay gradient to ensure text readability matching the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A111A]/80 via-[#0A111A]/50 to-transparent" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 data-reveal className="heading-hero text-white">
            Building Industrial<br />
            Strength for Over<br />
            30 Years.
          </h1>
          <p data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="lead mt-6 max-w-2xl text-gray-200">
            Specialists in industrial roofing, civil construction, structural fabrication, and earthmoving solutions. Based in Ranipet District, we deliver projects across Tamil Nadu with a strong commitment to quality and reliability.
          </p>

          <div data-reveal style={{ '--reveal-order': 2 } as React.CSSProperties} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md bg-[#CF5B4B] px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg transition-all hover:bg-[#b54a3b]"
            >
              View Our Projects
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Floating Stat Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:mt-10 lg:gap-6">
          {/* Card 1 */}
          <div data-reveal style={{ '--reveal-order': 3 } as React.CSSProperties} className="flex items-center gap-5 rounded-xl border-l-[6px] border-[#CF5B4B] bg-[#F8F9FA] px-6 py-7 shadow-2xl">
            <div className="text-[#CF5B4B]">
              <Calendar className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E242B]">30+</div>
              <div className="mt-0.5 text-[13px] font-medium text-gray-500">Years of Experience</div>
            </div>
          </div>

          {/* Card 2 */}
          <div data-reveal style={{ '--reveal-order': 4 } as React.CSSProperties} className="flex items-center gap-5 rounded-xl border-l-[6px] border-[#CF5B4B] bg-[#F8F9FA] px-6 py-7 shadow-2xl">
            <div className="text-[#CF5B4B]">
              <Briefcase className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E242B]">2.5k+</div>
              <div className="mt-0.5 text-[13px] font-medium text-gray-500">Completed Projects</div>
            </div>
          </div>

          {/* Card 3 */}
          <div data-reveal style={{ '--reveal-order': 5 } as React.CSSProperties} className="flex items-center gap-5 rounded-xl border-l-[6px] border-[#CF5B4B] bg-[#F8F9FA] px-6 py-7 shadow-2xl">
            <div className="text-[#CF5B4B]">
              <BadgeCheck className="h-8 w-8" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1E242B]">100%</div>
              <div className="mt-0.5 text-[13px] font-medium text-gray-500">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}