'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CircleCheck } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   SERVICE FEATURES — Exact light-theme UI, content, and layout match
   ────────────────────────────────────────────────────────────────────────── */

type Feature = {
  eyebrow: string;
  title: string;
  image: string;
  description: string;
  bullets: string[];
  reverse: boolean;
  stats?: { value: string; label: string }[];
  cta?: { label: string; href: string };
};

const features: Feature[] = [
  {
    eyebrow: 'RESIDENTIAL & COMMERCIAL',
    title: 'Advanced Roofing Solutions',
    image: '/images/ph15.webp',
    description:
      'We specialize in durable and reliable roofing systems for residential, commercial, and industrial buildings. Our roofing solutions are designed to provide superior protection, weather resistance, and long-term performance while enhancing the overall value of your property.',
    bullets: [
      'Thermal Insulation Layering',
      'Weather-Resistant Roofing Systems',
      'Leak-Proof Roof Installation',
      'High-Strength Metal Roofing Solutions',
    ],
    cta: { label: 'Explore Roofing Projects', href: '/projects' },
    reverse: false,
  },
  {
    eyebrow: 'STRUCTURAL INTEGRITY',
    title: 'Civil & Structural Engineering',
    image: '/images/ph14.webp',
    description:
      'Our engineering team manages core structural works for both private residential developments and public infrastructure. We ensure that every foundation and beam meets the highest safety standards, handling large-scale commercial civil projects with technical mastery and precision.',
    bullets: [
      'Reinforced concrete frameworks',
      'Seismic-resistant design patterns',
      'Custom structural steel fabrication',
    ],
    cta: { label: 'Technical Specifications', href: '/contact' },
    reverse: true,
  },
  {
    eyebrow: 'MAINTENANCE & ALTERATIONS',
    title: 'Water Leakage Repairs & Building Alterations',
    image: '/images/ph13.webp',
    description:
      'Protect your property from water damage, seepage, and structural deterioration. We provide expert leakage repair, waterproofing, and building alteration services to restore strength, safety, and long-term durability.',
    stats: [
      { value: '98%+', label: 'Leakage Prevention' },
      { value: '15+', label: 'Years Durability' },
    ],
    bullets: [
      'Terrace & Roof Leakage Repairs',
      'Wall Seepage & Crack Treatment',
      'Bathroom & Kitchen Waterproofing',
      'Structural Alterations & Renovations',
    ],
    reverse: false,
  },
];

export function ServiceFeatures() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] space-y-24 px-4 sm:px-6 lg:space-y-32 lg:px-8">
        {features.map((f) => (
          <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            
            {/* Image (Right side for first item) */}
            <div data-reveal={f.reverse ? 'left' : 'right'} className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-gray-200 shadow-xl ${f.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
              <Image 
                src={f.image} 
                alt={f.title} 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>

            {/* Content (Left side for first item) */}
            <div data-reveal={f.reverse ? 'right' : 'left'} className={f.reverse ? 'lg:order-2' : 'lg:order-1'}>
              {/* Eyebrow */}
              <p className="eyebrow mb-4 text-[#CF5B4B]">
                {f.eyebrow}
              </p>

              {/* Title */}
              <h2 className="heading-section text-[#0A111A]">
                {f.title}
              </h2>

              {/* Description */}
              <p className="lead mt-6 text-gray-600">
                {f.description}
              </p>

              {/* Optional stat cards */}
              {f.stats ? (
                <div className="mt-8 flex flex-wrap gap-4">
                  {f.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#0A111A] px-6 py-4 text-white">
                      <div className="text-xl font-extrabold">{s.value}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Bullet Points */}
              <ul className="mt-8 space-y-4">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-4">
                    <CircleCheck 
                      className="h-5 w-5 flex-shrink-0 text-[#CF5B4B]" 
                      fill="#CF5B4B" 
                      stroke="white" 
                      strokeWidth={2} 
                    />
                    <span className="body-text font-medium text-[#1E242B]">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button (optional) */}
              {f.cta ? (
                <Link
                  href={f.cta.href}
                  className="mt-10 inline-flex items-center justify-center rounded-sm border-2 border-[#1E242B] bg-transparent px-8 py-3.5 text-[14px] font-bold text-[#1E242B] transition-all duration-300 hover:bg-[#1E242B] hover:text-white"
                >
                  {f.cta.label}
                </Link>
              ) : null}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}