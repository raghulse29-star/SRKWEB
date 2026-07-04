'use client';

import { BadgeCheck, DraftingCompass, Shield, Factory } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   SERVICE BADGES — Exact UI, content, and layout match from design
   ────────────────────────────────────────────────────────────────────────── */

const badges = [
  { 
    icon: BadgeCheck, 
    title: 'Certified\nQuality', 
    description: 'ISO 9001 certified materials and processes for lifelong durability.' 
  },
  { 
    icon: DraftingCompass, // Using DraftingCompass to match the exact visual
    title: 'Modern Design', 
    description: 'Architect-led designs that blend seamlessly with contemporary aesthetics.' 
  },
  { 
    icon: Shield, 
    title: '25yr Warranty', 
    description: 'Industry-leading protection plans for your peace of mind and investment.' 
  },
  { 
    icon: Factory, // Closest semantic match for precision manufacturing gear
    title: 'Precision Gear', 
    description: 'Advanced laser-guided tools for millimeter-perfect structural alignment.' 
  },
];

export function ServiceBadges() {
  return (
    <section className="w-full bg-[#EFEFEF] py-10 lg:py-14 font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Badges Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {badges.map((b, index) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
                className="flex flex-col items-center justify-center rounded-[20px] bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:p-10"
              >
                {/* Icon (No background circle, just the colored icon) */}
                <div className="mb-6 text-[#CF5B4B]">
                  <Icon className="h-11 w-11" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="heading-card mb-4 whitespace-pre-line text-[#0A111A]">
                  {b.title}
                </h3>

                {/* Description */}
                <p className="body-text text-[#4B5563]">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}