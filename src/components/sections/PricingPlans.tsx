'use client';

import Link from 'next/link';
import { CircleCheck, CircleOff, Wrench } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   TRANSPARENT PRICING PLANS — Architectural Consultation enabled in Basic
   ────────────────────────────────────────────────────────────────────────── */

const plans = [
  {
    name: 'Basic',
    target: 'Small repairs & inspections',
    price: 'Custom',
    subPrice: 'Starting from ₹15,000',
    features: [
      { text: 'Structural Audit', active: true },
      { text: 'Basic Leak fixing', active: true },
      { text: '1-Year Service Warranty', active: true },
      { text: 'Architectural Consultation', active: true }, // Updated to be active
    ],
    ctaLabel: 'Choose Basic',
    ctaHref: '/contact?plan=basic',
    theme: 'light',
    iconType: 'check',
  },
  {
    name: 'Premium',
    target: 'Full residential or small commercial',
    price: 'Project Based',
    subPrice: 'Competitive market rates',
    features: [
      { text: 'Architectural Consultation', active: true },
      { text: 'Premium Material Selection', active: true },
      { text: '10-Year Structural Warranty', active: true },
      { text: 'Advanced Leak Protection', active: true },
    ],
    ctaLabel: 'Start Premium Project',
    ctaHref: '/contact?plan=premium',
    theme: 'dark',
    badge: 'MOST POPULAR',
    iconType: 'check',
  },
  {
    name: 'Enterprise',
    target: 'Industrial & large-scale projects',
    price: 'Corporate',
    subPrice: 'Quoted per project complexity',
    features: [
      { text: 'Dedicated Project Management', active: true },
      { text: 'Full Structural Engineering', active: true },
      { text: 'Lifetime Maintenance Support', active: true },
      { text: 'Site Safety Compliance Audit', active: true },
    ],
    ctaLabel: 'Request Enterprise Quote',
    ctaHref: '/contact?plan=enterprise',
    theme: 'light', 
    iconType: 'tools',
  },
];

export function PricingPlans() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center" data-reveal>
          <p className="eyebrow mb-3 text-[#9E473B]">
            Investment Tiers
          </p>
          <h2 className="heading-section text-[#0A111A]">
            Transparent Pricing Plans
          </h2>
          <p className="lead mt-5 text-gray-500">
            Select a plan that aligns with your architectural project requirements and structural longevity goals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-center lg:gap-8">
          {plans.map((plan, index) => {
            const isDark = plan.theme === 'dark';

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[16px] p-8 transition-all duration-300 hover:shadow-xl ${
                  isDark
                    ? 'bg-[#152028] border-2 border-[#9E473B] shadow-2xl md:py-12'
                    : 'bg-[#F6F6F6] border border-transparent shadow-sm'
                }`}
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
              >
                {/* Badge for Dark Plan */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#9E473B] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <p className={`text-[15px] font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {plan.name}
                  </p>
                  <p className={`mt-1 text-[13px] ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.target}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h3 className={`heading-card ${isDark ? 'text-white' : 'text-[#0A111A]'}`}>
                    {plan.price}
                  </h3>
                  <p className={`mt-2 text-[12px] ${isDark ? 'text-[#9E473B]' : 'text-gray-500'}`}>
                    {plan.subPrice}
                  </p>
                </div>

                {/* Features List */}
                <ul className="mb-10 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {/* Dynamic Icon Rendering based on type and active state */}
                      <span className={`mt-0.5 shrink-0 ${
                        !feature.active 
                          ? 'text-gray-300' 
                          : 'text-[#9E473B]'
                      }`}>
                        {!feature.active ? (
                          <CircleOff className="h-5 w-5" strokeWidth={1.5} />
                        ) : plan.iconType === 'tools' ? (
                          <Wrench className="h-5 w-5" strokeWidth={1.5} />
                        ) : (
                          <CircleCheck className="h-5 w-5" strokeWidth={1.5} />
                        )}
                      </span>
                      <span className={`text-[14px] font-medium ${
                        !feature.active 
                          ? 'text-gray-400 line-through' 
                          : isDark 
                            ? 'text-gray-200' 
                            : 'text-[#4B5563]'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.ctaHref}
                  className={`mt-auto inline-flex w-full items-center justify-center rounded-md px-6 py-3.5 text-[14px] font-bold transition-all duration-300 ${
                    isDark
                      ? 'bg-[#9E473B] text-white hover:bg-[#8A3D33] shadow-lg'
                      : 'border border-[#0A111A] bg-transparent text-[#0A111A] hover:bg-[#0A111A] hover:text-white'
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}