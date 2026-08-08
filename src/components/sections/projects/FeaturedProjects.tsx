'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────
   FEATURED PROJECTS — Exact UI, asymmetrical grid, and filter layout
   ────────────────────────────────────────────────────────────────────────── */

const projects = [
  { title: 'Glass Tower', category: 'Commercial', image: '/images/ph17.webp' },
  { title: 'Residential Roof', category: 'Residential', image: '/images/ph18.webp' },
  { title: 'Metal System', category: 'Roofing', image: '/images/ph20.webp' },
  { title: 'Brick Structure', category: 'Industrial', image: '/images/ph19.webp' },
];

const categories = ['All Projects', 'Residential', 'Commercial', 'Roofing', 'Industrial'];

export function FeaturedProjects() {
  const [active, setActive] = useState('All Projects');
  const filtered = active === 'All Projects' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div data-reveal>
            <p className="eyebrow text-[#CF5B4B]">
              Our Expertise
            </p>
            <h2 className="heading-section mt-4 text-[#0A111A]">
              Featured Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-6 py-2.5 text-[14px] font-bold transition-all duration-300 ${
                  active === cat
                    ? 'bg-[#1E242B] text-white shadow-md'
                    : 'border border-gray-200 bg-transparent text-[#1E242B] hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Two-row gallery — alternating big/small rhythm, equal row heights.
            Row 1: big + small   Row 2: small + big  (repeats for more items) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {filtered.map((project, i) => {
            const pair = Math.floor(i / 2);
            const first = i % 2 === 0;
            // even pairs → big-first; odd pairs → small-first
            const big = pair % 2 === 0 ? first : !first;
            return (
              <div
                key={project.title}
                data-reveal
                style={{ '--reveal-order': Math.min(i, 5) } as React.CSSProperties}
                className={`group relative h-[240px] overflow-hidden rounded-[20px] bg-gray-200 shadow-sm sm:h-[300px] lg:h-[360px] ${
                  big ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}