import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Media } from '@/components/ui/Media';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getCaseStudy, getCaseStudies } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) return {};
  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.seo?.description ?? caseStudy.summary,
    path: `/case-studies/${caseStudy.slug}`,
    image: caseStudy.seo?.image ?? caseStudy.cover,
    type: 'article',
  });
}

const highlights = [
  { key: 'challenge', label: 'The Challenge', icon: Target } as const,
  { key: 'solution', label: 'Our Solution', icon: Lightbulb } as const,
  { key: 'result', label: 'The Result', icon: CheckCircle2 } as const,
];

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);
  if (!caseStudy) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: caseStudy.title, path: `/case-studies/${caseStudy.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <div className="relative aspect-[21/9] w-full">
        <Media src={caseStudy.cover} alt={caseStudy.title} className="h-full w-full" priority />
      </div>

      <Section>
        <Container className="max-w-3xl !px-0">
          <Breadcrumbs items={crumbs} />
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-semibold text-accent">{caseStudy.category}</span>
            {caseStudy.location ? <span>· {caseStudy.location}</span> : null}
            {caseStudy.year ? <span>· {caseStudy.year}</span> : null}
          </div>
          <h1 className="mt-2 text-4xl">{caseStudy.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{caseStudy.summary}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {highlights.map(({ key, label, icon: Icon }) => (
              <div key={key} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius)] bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </h3>
                <p className="mt-1.5 text-sm text-foreground">{caseStudy[key]}</p>
              </div>
            ))}
          </div>

          <article
            className="prose-content mt-10"
            dangerouslySetInnerHTML={{ __html: caseStudy.contentHtml ?? '' }}
          />
        </Container>

        {caseStudy.gallery && caseStudy.gallery.length > 0 ? (
          <Container className="mt-12 grid gap-4 sm:grid-cols-2">
            {caseStudy.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
                <Media src={img} alt={`${caseStudy.title} — photo ${i + 1}`} className="h-full w-full" />
              </div>
            ))}
          </Container>
        ) : null}
      </Section>

      <CTASection />
    </>
  );
}
