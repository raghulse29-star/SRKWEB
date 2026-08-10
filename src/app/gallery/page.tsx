import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { CTASection } from '@/components/sections/CTASection';
import { getProjects } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery',
  description: 'Browse photos from completed roofing, construction, and renovation projects by SKR Construction.',
  path: '/gallery',
});

export default function GalleryPage() {
  const projects = getProjects();
  return (
    <>
      <Section>
        <SectionHeading
          centered
          eyebrow="Portfolio Showcase"
          title="Project Gallery"
          lead="A closer look at the roofing, construction, and renovation work we've delivered across Tamil Nadu."
        />
        <div className="mt-12">
          <ProjectGallery projects={projects} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
