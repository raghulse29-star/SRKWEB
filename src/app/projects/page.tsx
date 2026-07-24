import type { Metadata } from 'next';
import { ProjectsHero } from '@/components/sections/projects/ProjectsHero';
import { IndustrialLandmarks } from '@/components/sections/about/IndustrialLandmarks';
import { FeaturedProjects } from '@/components/sections/projects/FeaturedProjects';
import { ProjectHighlight } from '@/components/sections/projects/ProjectHighlight';
import { Walkthroughs } from '@/components/sections/projects/Walkthroughs';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'Browse completed roofing, construction, and structural projects by Srikumaran Roofing & Construction.',
  path: '/projects',
});

/**
 * PROJECTS PAGE.
 * Each section is a self-contained component in src/components/sections/projects/ —
 * open the matching file to edit its content and design in one place.
 */
export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <IndustrialLandmarks />
      <FeaturedProjects />
      <ProjectHighlight />
      <Walkthroughs />
      <CtaBanner />
    </>
  );
}
