'use client';

import Link from 'next/link';
import { Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';

/* ──────────────────────────────────────────────────────────────────────────
   PROJECT HIGHLIGHT — Exact UI, content, and layout match from design
   ────────────────────────────────────────────────────────────────────────── */

export function ProjectHighlight() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        
        {/* Copy Section */}
        <div data-reveal="left">
          <p className="eyebrow text-[#CF5B4B]">
            Case Study
          </p>
          <h2 className="heading-section mt-3 text-[#0A111A]">
            Restoring Structural Integrity
          </h2>
          <p className="lead mt-6 text-[#4B5563]">
            The historic Heritage Manor required a complete roof replacement while maintaining its architectural legacy. We utilized modern lightweight materials that mimic the original aesthetic, providing 50+ years of durability.
          </p>

          {/* Detailed Points */}
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#CF5B4B]/10 text-[#CF5B4B]">
                <Wrench className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="heading-card text-[#0A111A]">Technical Challenge</h4>
                <p className="body-text mt-1 text-[#6B7280]">Severe structural decay and leaking in a 100-year-old wooden truss system.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#CF5B4B]/10 text-[#CF5B4B]">
                <CheckCircle2 className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="heading-card text-[#0A111A]">The Result</h4>
                <p className="body-text mt-1 text-[#6B7280]">Energy-efficient, leak-proof roofing with 40% improved thermal insulation.</p>
              </div>
            </div>
          </div>

          <Link
            href="/case-studies/heritage-manor"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-[#0A111A] px-8 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-[#1E242B]"
          >
            Read Full Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Before / After comparison — drag the center bar to compare */}
        <div data-reveal="right" className="aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-2xl">
          <BeforeAfterSlider
            before="/images/ph21.webp"
            after="/images/ph22.webp"
            beforeAlt="Heritage Manor roof before restoration"
            afterAlt="Heritage Manor roof after restoration"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}