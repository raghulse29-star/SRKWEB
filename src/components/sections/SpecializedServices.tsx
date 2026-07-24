'use client';

import Link from 'next/link';
import { Factory, Landmark, DraftingCompass, Tractor, ArrowRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   CORE SERVICES — Exact content and UI match from the design.
   ────────────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Factory,
    title: 'Industrial Roofing Systems',
    description:
      'PEB structures, sheet roofing, warehouse roofing, and factory roofing systems.',
  },
  {
    icon: Landmark,
    title: 'Civil Construction',
    description:
      'Industrial buildings, service centers, foundations, and compound works.',
  },
  {
    icon: DraftingCompass,
    title: 'Structural Fabrication',
    description:
      'Steel structures, trusses, industrial sheds, and structural platforms.',
  },
  {
    icon: Tractor,
    title: 'Earthmoving & Site Development',
    description:
      'Land clearing, leveling, excavation, and foundation preparation.',
  },
];

export function SpecializedServices() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Heading Area */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center" data-reveal>
          <p className="eyebrow text-[#CF5B4B]">
            Our Expertise
          </p>
          <h2 className="heading-section mt-4 text-[#0A111A]">
            Our Core Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              /* Shadow Wrapper (needed because clip-path hides standard box-shadow) */
              <div
                key={service.title}
                className="group relative drop-shadow-sm transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-xl"
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
              >
                {/* Card Inner with Chamfered Bottom-Right Corner */}
                <div
                  className="flex h-full flex-col bg-white p-8 sm:p-10"
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                  }}
                >
                  <div className="mb-6 text-[#CF5B4B]">
                    <Icon className="h-10 w-10" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="heading-card text-[#0A111A]">
                    {service.title}
                  </h3>

                  <p className="body-text mb-8 mt-4 text-gray-500">
                    {service.description}
                  </p>
                  
                  <Link
                    href="/services"
                    className="mt-auto inline-flex items-center gap-2 text-[15px] font-bold text-[#CF5B4B] transition-colors group-hover:text-[#b54a3b]"
                  >
                    Explore Service
                    <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}