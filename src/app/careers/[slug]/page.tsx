import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ButtonLink } from '@/components/ui/Button';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getCareer, getCareers } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getCareers().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = await getCareer(slug);
  if (!job) return {};
  return buildMetadata({
    title: job.title,
    description: job.seo?.description ?? job.summary,
    path: `/careers/${job.slug}`,
  });
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getCareer(slug);
  if (!job) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Careers', path: '/careers' },
    { name: job.title, path: `/careers/${job.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <Section>
        <Container className="max-w-3xl !px-0">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 text-4xl">{job.title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {[job.type, job.location].filter(Boolean).join(' · ')}
          </p>
          <article
            className="prose-content mt-8"
            dangerouslySetInnerHTML={{ __html: job.contentHtml ?? '' }}
          />
          <div className="mt-10">
            <ButtonLink href="/contact" variant="accent">
              Apply via Contact
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
