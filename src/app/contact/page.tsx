import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactSection } from '@/components/sections/contact/ContactSection';
import { MapSection } from '@/components/sections/contact/MapSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Srikumaran Roofing & Construction — call, email, or send a project inquiry.',
  path: '/contact',
});

/**
 * CONTACT PAGE.
 * Each section is a self-contained component in src/components/sections/contact/ —
 * open the matching file to edit its content and design in one place.
 */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapSection />
      <CtaBanner />
    </>
  );
}
