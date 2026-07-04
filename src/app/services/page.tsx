import type { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services/ServicesHero';
import { ServiceBadges } from '@/components/sections/services/ServiceBadges';
import { ServiceFeatures } from '@/components/sections/services/ServiceFeatures';
import { Faq } from '@/components/sections/services/Faq';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description:
    'Explore Srikumaran Roofing & Construction services — roofing, civil & structural engineering, waterproofing, and renovation.',
  path: '/services',
});

/**
 * SERVICES PAGE.
 * Each section is a self-contained component in src/components/sections/services/ —
 * open the matching file to edit its content and design in one place.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceBadges />
      <ServiceFeatures />
      <Faq />
      <CtaBanner />
    </>
  );
}
