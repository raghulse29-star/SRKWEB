import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Media } from '@/components/ui/Media';
import { getPosts } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog & News',
  description: 'Roofing and construction tips, guides, and news from the SKR Construction team.',
  path: '/blog',
});

function formatDate(iso: string) {
  // Build-time formatting; avoids Date.now and locale surprises.
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[Number(m) - 1]} ${Number(d)}, ${y}`;
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <Section>
      <SectionHeading
        centered
        eyebrow="Insights"
        title="Blog & News"
        lead="Practical advice and updates from our roofing and construction experts."
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-shadow hover:shadow-[var(--shadow-lifted)]">
              <div className="relative aspect-[16/9]">
                <Media src={post.cover} alt={post.title} className="h-full w-full" />
              </div>
              <div className="p-6">
                <time className="text-xs font-medium text-muted-foreground">{formatDate(post.date)}</time>
                <h3 className="mt-2 text-xl transition-colors group-hover:text-accent">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
