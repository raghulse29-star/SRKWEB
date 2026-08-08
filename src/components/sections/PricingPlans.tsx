import Link from 'next/link';
import { Check, Shield, Leaf, Gem } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   TRANSPARENT PRICING PLANS — per-sq.ft investment tiers (Core / Standard / Elite)
   ────────────────────────────────────────────────────────────────────────── */

const plans = [
  {
    name: 'Core Package',
    price: 'RS.2200*',
    unit: '/ SQ.FT',
    features: ['Quality Construction', 'Standard Specifications', 'Timely Delivery', 'Value for Money'],
    theme: 'light',
    headerClass: 'bg-[#CF5B4B]',
    banner: {
      icon: Shield,
      lines: ['Strong', 'Foundation'],
      className: 'bg-[#0A111A]',
      iconClass: 'border border-[#CF5B4B]/60 text-[#CF5B4B]',
    },
  },
  {
    name: 'Standard Package',
    price: 'RS.2400*',
    unit: '/ SQ.FT',
    features: ['Better Quality Materials', 'Enhanced Finishes', 'Superior Design', 'Assured Timely Delivery'],
    theme: 'dark',
    headerClass: 'bg-[#9E3F31]',
    banner: {
      icon: Leaf,
      lines: ['Better Quality,', 'Better Living'],
      className: 'bg-[#CF5B4B]',
      iconClass: 'border border-white/50 text-white',
    },
  },
  {
    name: 'Elite Package',
    price: 'RS.2600*',
    unit: '/ SQ.FT',
    features: ['Premium Quality Materials', 'Luxury Finishes', 'Customized Designs', 'End-to-End Excellence'],
    theme: 'light',
    headerClass: 'bg-[#CF5B4B]',
    banner: {
      icon: Gem,
      lines: ['Premium Living,', 'Timeless Elegance'],
      className: 'bg-[#0A111A]',
      iconClass: 'border border-[#CF5B4B]/60 text-[#CF5B4B]',
    },
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
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:items-start lg:gap-8">
          {plans.map((plan, index) => {
            const isDark = plan.theme === 'dark';
            const BannerIcon = plan.banner.icon;

            return (
              <Link
                key={plan.name}
                href="/quote"
                data-reveal
                style={{ '--reveal-order': Math.min(index, 5) } as React.CSSProperties}
                className={`group flex flex-col overflow-hidden rounded-[16px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isDark ? 'bg-[#111C24]' : 'bg-[#F1EFEC]'
                }`}
              >
                {/* Header bar */}
                <div className={`py-4 text-center text-[13px] font-bold uppercase tracking-wider text-white ${plan.headerClass}`}>
                  {plan.name}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  {/* Price */}
                  <div className="text-center">
                    <h3 className={`heading-card text-[26px] ${isDark ? 'text-white' : 'text-[#0A111A]'}`}>
                      {plan.price} <span className="block sm:inline">{plan.unit}</span>
                    </h3>
                  </div>
                  <div className={`mx-auto mt-5 w-full border-t border-dashed ${isDark ? 'border-white/20' : 'border-gray-300'}`} />

                  {/* Features List */}
                  <ul className="mb-8 mt-7 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#CF5B4B]">
                          <Check className="h-3 w-3 text-white" strokeWidth={3} />
                        </span>
                        <span className={`text-[14px] font-medium ${isDark ? 'text-gray-200' : 'text-[#4B5563]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom banner */}
                  <div className={`mt-auto flex items-center gap-4 rounded-xl px-5 py-4 ${plan.banner.className}`}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${plan.banner.iconClass}`}>
                      <BannerIcon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <p className="text-[12px] font-bold uppercase leading-snug tracking-wide text-white">
                      {plan.banner.lines[0]}
                      <br />
                      {plan.banner.lines[1]}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
