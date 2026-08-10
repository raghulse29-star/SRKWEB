'use client';

import Link from 'next/link';

/* ──────────────────────────────────────────────────────────────────────────
   CTA BANNER — Exact UI match with slanted overlay and stacked buttons
   ────────────────────────────────────────────────────────────────────────── */

export function CtaBanner() {
  return (
    <section className="w-full bg-[#F8F9FA] py-10 lg:py-14 font-sans">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        
        {/* Dark Card Container */}
        <div
          className="relative overflow-hidden rounded-[20px] bg-[#1E2930] px-6 py-12 shadow-2xl sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-14"
          data-reveal
        >
          
          {/* Background Slanted Graphic Overlay */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-white/[0.04]" 
              style={{ clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 25% 100%)' }}
            />
          </div>

          {/* Left Content Area */}
          <div className="relative z-10 max-w-2xl lg:pr-8">
            <h2 className="heading-section text-white">
              Ready to secure your <br className="hidden sm:block" />
              architectural legacy?
            </h2>
            <p className="lead mt-5 max-w-[500px] text-[#8F9CA7]">
              Schedule a site evaluation with our master contractors today. No-obligation consultation for all premium projects.
            </p>
          </div>

          {/* Right Content Area (Stacked Buttons) */}
          <div className="relative z-10 mt-10 flex w-full flex-col gap-4 sm:w-[280px] lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#CF5B4B] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#b54a3b] hover:shadow-xl"
            >
              Book A Consultation
            </Link>
            
            <a
              href="/brochure/SKR-Construction-Brochure.pdf"
              download
              className="inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-white/5 px-8 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Download Brochure
            </a>
          </div>

        </div>
        
      </div>
    </section>
  );
}