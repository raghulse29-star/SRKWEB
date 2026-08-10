import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Media } from '@/components/ui/Media';
import { getCaseStudies } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies',
  description: 'In-depth case studies of roofing, construction, and renovation challenges solved by SKR Construction.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();
  return (
    <Section>
      <SectionHeading
        centered
        eyebrow="Case Study"
        title="Case Studies"
        lead="A deeper look at the technical challenges, decisions, and results behind select projects."
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <Card key={cs.slug} className="h-full overflow-hidden">
            <div className="relative aspect-video">
              <Media src={cs.cover} alt={cs.title} className="h-full w-full" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                <span>{cs.category}</span>
                {cs.location ? <span className="text-muted-foreground">· {cs.location}</span> : null}
              </div>
              <h3 className="mt-2 text-xl">{cs.title}</h3>
              <p className="mt-2 text-muted-foreground">{cs.summary}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
