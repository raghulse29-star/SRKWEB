import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { getCareers, getPosts, getProjects, getServices } from '@/lib/content';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sitemap',
  description: `A full list of pages on the ${siteConfig.name} website.`,
  path: '/sitemap',
});

function LinkGroup({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  if (links.length === 0) return null;
  return (
    <div>
      <h3 className="heading-card text-[#0A111A]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="body-text text-gray-600 transition-colors hover:text-[#CF5B4B]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const services = getServices();
  const projects = getProjects();
  const posts = getPosts();
  const careers = getCareers();

  return (
    <Section>
      <SectionHeading
        eyebrow="Navigate"
        title="Sitemap"
        lead="A complete list of every page on this website."
      />

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <LinkGroup
          title="Main"
          links={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Projects', href: '/projects' },
            { label: 'Team', href: '/team' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Blog', href: '/blog' },
            { label: 'Careers', href: '/careers' },
            { label: 'Contact', href: '/contact' },
            { label: 'Request a Quote', href: '/quote' },
          ]}
        />

        <LinkGroup
          title="Services"
          links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
        />

        <LinkGroup
          title="Projects"
          links={projects.map((p) => ({ label: p.title, href: `/projects/${p.slug}` }))}
        />

        <LinkGroup
          title="Blog Posts"
          links={posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` }))}
        />

        <LinkGroup
          title="Careers"
          links={careers.map((c) => ({ label: c.title, href: `/careers/${c.slug}` }))}
        />

        <LinkGroup
          title="Legal"
          links={[
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Cookie Policy', href: '/cookies' },
          ]}
        />
      </div>
    </Section>
  );
}
