import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Media } from '@/components/ui/Media';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { getPost, getPosts } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.seo?.image ?? post.cover,
    type: 'article',
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <ArticleJsonLd
        title={post.title}
        description={post.seo?.description ?? post.excerpt}
        path={`/blog/${post.slug}`}
        datePublished={post.date}
        author={post.author}
        image={post.cover}
      />

      <div className="relative aspect-[21/9] w-full">
        <Media src={post.cover} alt={post.title} className="h-full w-full" priority />
      </div>

      <Section>
        <Container className="max-w-3xl !px-0">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-4 text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {post.author ? `By ${post.author} · ` : ''}
            {post.date}
          </p>
          <article
            className="prose-content mt-8"
            dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
          />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
