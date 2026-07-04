'use client';

import { DoorClosed, PenTool, Wrench, ClipboardCheck, Key } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   THE BLUEPRINT TO COMPLETION — Exact UI, content, and timeline match
   ────────────────────────────────────────────────────────────────────────── */

const steps = [
  {
    icon: DoorClosed,
    step: 'Step 01',
    title: 'Consultation',
    description: 'Site visit and discussion to understand project needs.',
  },
  {
    icon: PenTool,
    step: 'Step 02',
    title: 'Planning',
    description: 'Project design, estimation, and construction planning.',
  },
  {
    icon: Wrench,
    step: 'Step 03',
    title: 'Construction',
    description: 'Execution using quality materials and skilled workmanship.',
  },
  {
    icon: ClipboardCheck,
    step: 'Step 04',
    title: 'Inspection',
    description: 'Quality and safety checks to ensure excellence.',
  },
  {
    icon: Key,
    step: 'Step 05',
    title: 'Delivery',
    description: 'Successful project handover with customer satisfaction.',
  },
];

export function Blueprint() {
  return (
    <section className="w-full bg-[#182329] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow text-[#CF5B4B]">
            Our Workflow
          </p>
          <h2 className="heading-section mt-4 text-white">
            The Blueprint to Completion
          </h2>
          <p className="lead mt-5 text-gray-400">
            A streamlined approach to delivering quality roofing, fabrication, and construction projects.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          
          {/* Horizontal Connection Line (Visible on Desktop) */}
          <div className="absolute left-0 top-[48px] hidden h-[1px] w-full bg-white/10 lg:block" />

          {/* Steps Grid */}
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  data-reveal
                  style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  
                  {/* Icon Circle */}
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#182329] text-white transition-transform duration-300 hover:scale-105">
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  
                  {/* Step Label */}
                  <p className="eyebrow mt-7 text-[#CF5B4B]">
                    {step.step}
                  </p>

                  {/* Title */}
                  <h3 className="heading-card mt-2 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="body-text mx-auto mt-3 max-w-[240px] text-gray-400">
                    {step.description}
                  </p>
                  
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}