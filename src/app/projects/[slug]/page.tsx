import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Media } from '@/components/ui/Media';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getProject, getProjects } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.seo?.description ?? project.summary,
    path: `/projects/${project.slug}`,
    image: project.seo?.image ?? project.cover,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: project.title, path: `/projects/${project.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />

      <div className="relative aspect-[21/9] w-full">
        <Media src={project.cover} alt={project.title} className="h-full w-full" priority />
      </div>

      <Section>
        <Breadcrumbs items={crumbs} />
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="font-semibold text-accent">{project.category}</span>
          {project.location ? <span>· {project.location}</span> : null}
          {project.year ? <span>· {project.year}</span> : null}
        </div>
        <h1 className="mt-2 text-4xl">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{project.summary}</p>

        <div
          className="prose-content mt-10 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: project.contentHtml ?? '' }}
        />

        {project.gallery && project.gallery.length > 0 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]">
                <Media src={img} alt={`${project.title} — photo ${i + 1}`} className="h-full w-full" />
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      <CTASection />
    </>
  );
}
