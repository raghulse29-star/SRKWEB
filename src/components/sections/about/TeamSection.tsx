'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   MASTERMINDS OF STRUCTURE (Team) — Exact UI, content, and layout from design
   ────────────────────────────────────────────────────────────────────────── */

const team = [
  { 
    name: 'Srikumaran R.', 
    role: 'Founder & Chief Engineer', 
    description: '30 years of civil engineering expertise.',
    photo: '/images/ph8.png' 
  },
  { 
    name: 'Sarah Chen', 
    role: 'Head of Design', 
    description: 'Award-winning architectural designer.',
    photo: '/images/ph9.png' 
  },
  { 
    name: 'Marcus Thorne', 
    role: 'Operations Director', 
    description: 'Expert in large-scale commercial logistics.',
    photo: '/images/ph10.png' 
  },
  { 
    name: 'David Wilson', 
    role: 'Site Safety Lead', 
    description: '20 years experience in safety compliance.',
    photo: '/images/ph11.png' 
  },
];

export function TeamSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading Area */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div data-reveal>
            <p className="eyebrow text-[#CF5B4B]">
              Our Leadership
            </p>
            <h2 className="heading-section mt-3 text-[#0A111A]">
              Masterminds of Structure
            </h2>
          </div>
          <Link
            href="/team"
            data-reveal
            style={{ '--reveal-order': 1 } as React.CSSProperties}
            className="group inline-flex items-center gap-2 text-[15px] font-bold text-[#0A111A] transition-colors hover:text-[#CF5B4B]"
          >
            Meet the Whole Team 
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
        </div>

        {/* Team Grid */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              data-reveal
              style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
              className="group flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[#E5E7EB]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              
              {/* Text Content Area */}
              <div className="mt-6 flex flex-col">
                <h3 className="heading-card text-[#0A111A]">
                  {member.name}
                </h3>
                <p className="eyebrow mt-1 text-[#CF5B4B]">
                  {member.role}
                </p>
                <p className="body-text mt-3 text-[#4B5563]">
                  {member.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}