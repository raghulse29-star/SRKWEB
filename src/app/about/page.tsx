import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutStats } from '@/components/sections/about/AboutStats';
import { Evolution } from '@/components/sections/about/Evolution';
import { Principles } from '@/components/sections/about/Principles';
import { Blueprint } from '@/components/sections/about/Blueprint';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Us',
  description:
    'Learn about Srikumaran Roofing & Construction — our story, principles, process, and team.',
  path: '/about',
});

/**
 * ABOUT PAGE.
 * Each section is a self-contained component in src/components/sections/about/ —
 * open the matching file to edit its content and design in one place.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <Evolution />
      <Principles />
      <Blueprint />
      <TeamSection />
      <CtaBanner />
    </>
  );
}
