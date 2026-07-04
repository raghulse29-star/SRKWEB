'use client';

import Image from 'next/image';
import Link from 'next/link';

/* ──────────────────────────────────────────────────────────────────────────
   MASTERPIECES (Featured Projects) — Exact UI match from design.
   ────────────────────────────────────────────────────────────────────────── */

const projects = [
  { title: 'Lakeside Residence', category: 'Roofing', image: '/images/ph0.webp', href: '/projects/lakeside-residence' },
  { title: 'Downtown Office Fit-Out', category: 'Construction', image: '/images/ph1.webp', href: '/projects/downtown-office-fitout' },
  { title: 'Hillcrest Kitchen', category: 'Renovation', image: '/images/ph2.webp', href: '/projects/hillcrest-kitchen' },
  { title: 'Glass Tower Facade', category: 'Structural', image: '/images/ph3.webp', href: '/projects' },
  { title: 'Heritage Roof Restoration', category: 'Roofing', image: '/images/ph4.webp', href: '/projects' },
];

export function Masterpieces() {
  return (
    <section className="w-full bg-[#182227] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl" data-reveal>
            <p className="eyebrow mb-3 text-[#CF5B4B]">
              Project Gallery
            </p>
            <h2 className="heading-section text-white">
              Masterpieces of Structural <br className="hidden sm:block" /> Beauty
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-md border border-white/20 bg-transparent px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
          >
            View All Projects
          </Link>
        </div>

        {/* Asymmetrical Masonry Grid Layout */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:gap-6">
          
          {/* Left Column (50% width on Desktop) */}
          <div className="flex w-full flex-col gap-5 lg:w-1/2 lg:gap-6">
            {/* Top Left: Large Square-ish Image */}
            <Link
              href={projects[0].href}
              className="group relative block w-full aspect-[4/3] lg:aspect-[1.05/1] overflow-hidden rounded-2xl bg-[#212f36]"
              aria-label={projects[0].title}
              data-reveal
              style={{ '--reveal-order': 0 } as React.CSSProperties}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
            
            {/* Bottom Left: Wide Landscape Image */}
            <Link
              href={projects[3].href}
              className="group relative block w-full aspect-[16/9] lg:aspect-[2.35/1] overflow-hidden rounded-2xl bg-[#212f36]"
              aria-label={projects[3].title}
              data-reveal
              style={{ '--reveal-order': 1 } as React.CSSProperties}
            >
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Middle Column (25% width on Desktop) */}
          <div className="flex w-full flex-col gap-5 lg:w-1/4 lg:gap-6">
            <Link
              href={projects[1].href}
              className="group relative block w-full aspect-[4/3] lg:aspect-[1.15/1] overflow-hidden rounded-2xl bg-[#212f36]"
              aria-label={projects[1].title}
              data-reveal
              style={{ '--reveal-order': 2 } as React.CSSProperties}
            >
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Column (25% width on Desktop, stretches to full height) */}
          <div className="flex w-full flex-col gap-5 lg:w-1/4 lg:gap-6">
            <Link
              href={projects[2].href}
              className="group relative block w-full aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-2xl bg-[#212f36]"
              aria-label={projects[2].title}
              data-reveal
              style={{ '--reveal-order': 3 } as React.CSSProperties}
            >
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}