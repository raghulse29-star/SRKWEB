import Image from 'next/image';
import Link from 'next/link';
import { MapPin, DraftingCompass, Clock, ClipboardCheck } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   INDUSTRIAL LANDMARKS — portfolio highlight cards (image + spec sheet).
   NOTE: images are placeholders — swap `image` paths when photos arrive.
   ────────────────────────────────────────────────────────────────────────── */

const filters = ['All Projects', 'Industrial', 'Commercial'];

const projects = [
  {
    title: 'Mega Industrial Warehouse',
    badge: 'Completed',
    badgeClass: 'bg-[#16A34A]',
    image: '/images/ph14.webp',
    imageFirst: true,
    specs: [
      { icon: MapPin, label: 'Location', value: 'SIPCOT Industrial Park, Chennai, TN' },
      { icon: DraftingCompass, label: 'Scope of Work', value: 'Structural Steel Fabrication, Roofing & Civil Works' },
      { icon: Clock, label: 'Duration', value: '14 Months (Feb 2023 - April 2024)' },
      { icon: ClipboardCheck, label: 'Status', value: 'Handover Complete' },
    ],
  },
  {
    title: 'Textile Manufacturing Plant',
    badge: 'In Progress',
    badgeClass: 'bg-[#0A111A]',
    image: '/images/ph15.webp',
    imageFirst: false,
    specs: [
      { icon: MapPin, label: 'Location', value: 'Erode Industrial Zone, TN' },
      { icon: DraftingCompass, label: 'Scope of Work', value: 'Precision Roofing & Thermal Insulation Systems' },
      { icon: Clock, label: 'Duration', value: '8 Months (Estimated)' },
      { icon: ClipboardCheck, label: 'Status', value: 'Erection Phase (70% Completed)' },
    ],
  },
];

export function IndustrialLandmarks() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Header row: title + filter chips */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div>
            <p className="eyebrow text-[#B44335]">
              Our Portfolio
            </p>
            <h2 className="heading-section mt-3 text-[#0A111A]">
              Industrial Landmarks
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((f, i) => (
              <span
                key={f}
                className={`rounded-full border px-5 py-2 text-[13px] font-semibold ${
                  i === 0
                    ? 'border-[#0A111A] bg-white text-[#0A111A]'
                    : 'border-gray-200 bg-white text-gray-500'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Project cards */}
        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <div
              key={p.title}
              data-reveal
              className="grid overflow-hidden rounded-2xl bg-white shadow-sm lg:grid-cols-2"
            >
              {/* Image half */}
              <div className={`relative min-h-[260px] lg:min-h-[320px] ${p.imageFirst ? '' : 'lg:order-2'}`}>
                <Image src={p.image} alt={p.title} fill className="object-cover" />
                <span
                  className={`absolute right-4 top-4 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white ${p.badgeClass}`}
                >
                  {p.badge}
                </span>
              </div>

              {/* Spec sheet half */}
              <div className={`p-8 sm:p-10 ${p.imageFirst ? '' : 'lg:order-1'}`}>
                <h3 className="heading-card text-[#0A111A]">{p.title}</h3>
                <ul className="mt-7 space-y-5">
                  {p.specs.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.label} className="flex items-start gap-4">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#B44335]" strokeWidth={1.75} />
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                            {s.label}
                          </p>
                          <p className="body-text mt-0.5 font-medium text-[#0A111A]">{s.value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="mt-10 text-center" data-reveal>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-[#CF5B4B] px-10 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all hover:bg-[#b54a3b] hover:shadow-lg"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
