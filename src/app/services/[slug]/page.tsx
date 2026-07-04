import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Media } from '@/components/ui/Media';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getService, getServices } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

/** Pre-render one static page per service. */
export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.seo?.description ?? service.summary,
    path: `/services/${service.slug}`,
    image: service.seo?.image ?? service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <div className="relative aspect-[21/9] w-full">
        <Media src={service.image} alt={service.title} className="h-full w-full" priority />
      </div>

      <Section>
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-4 text-4xl">{service.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{service.summary}</p>
        <div
          className="prose-content mt-10 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: service.contentHtml ?? '' }}
        />
      </Section>

      <CTASection />
    </>
  );
}
