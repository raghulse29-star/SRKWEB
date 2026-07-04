'use client';

import { Building, Factory, Leaf } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   EVOLUTION OF EXCELLENCE — Exact UI, content, and timeline layout from design
   ────────────────────────────────────────────────────────────────────────── */

const milestones = [
  {
    title: 'Founding Vision',
    year: '1995',
    description:
      'Established as a small fabrication company with a passion for quality and craftsmanship. Focused on delivering durable and reliable fabrication solutions. Built strong customer relationships through trust and commitment. Laid the foundation for long-term growth and excellence.',
    icon: Building,
    position: 'right',
  },
  {
    title: 'Commercial Expansion',
    year: '2008',
    description:
      'Expanded operations into warehouse and factory shed construction. Successfully completed large-scale industrial infrastructure projects. Strengthened expertise in steel structures and commercial buildings. Earned a reputation for quality, reliability, and timely delivery.',
    icon: Factory,
    position: 'left',
  },
  {
    title: 'Sustainable Innovation',
    year: '2018',
    description:
      'Adopted modern construction methods and advanced technologies. Focused on creating efficient and long-lasting structural solutions. Implemented high-quality materials to enhance durability and performance. Continued innovating to meet evolving industry and customer needs.',
    icon: Leaf,
    position: 'right',
  },
];

export function Evolution() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="eyebrow text-[#CF5B4B]">
            Our Journey
          </p>
          <h2 className="heading-section mt-3 text-[#0A111A]">
            Evolution of Excellence
          </h2>
          <p className="lead mt-4 text-gray-500">
            Specializing in Residential, Commercial & Industrial Construction Excellence
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          
          {/* Continuous Center Line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[1px] bg-gray-200 lg:left-1/2 lg:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12 lg:space-y-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isRight = m.position === 'right';

              return (
                <div
                  key={m.title}
                  data-reveal
                  style={{ '--reveal-order': Math.min(i, 5) } as React.CSSProperties}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center"
                >
                  
                  {/* Timeline Node Icon (Centered on desktop, left-aligned on mobile) */}
                  <div className="absolute left-[24px] top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D1D5DB] bg-[#F8F9FA] lg:left-1/2 lg:-translate-x-1/2">
                    <Icon className="h-4 w-4 text-[#4B5563]" strokeWidth={1.5} />
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`ml-[60px] lg:ml-0 ${
                      isRight ? 'lg:col-start-2 lg:pl-14' : 'lg:col-start-1 lg:pr-14'
                    }`}
                  >
                    <div className="rounded-[16px] border border-gray-100 bg-white p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-9">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="heading-card text-[#0A111A]">
                          {m.title}
                        </h3>
                        <span className="text-[13px] font-bold text-[#CF5B4B]">
                          {m.year}
                        </span>
                      </div>
                      <p className="body-text text-gray-500">
                        {m.description}
                      </p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}