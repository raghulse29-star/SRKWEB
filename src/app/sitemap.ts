import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { getCareers, getPosts, getProjects, getServices } from '@/lib/content';

// Required for `output: 'export'` — render this route at build time.
export const dynamic = 'force-static';

/**
 * Build-time sitemap. Next emits this to /sitemap.xml in the static export.
 * Static routes are listed explicitly; dynamic routes are derived from content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/team',
    '/testimonials',
    '/careers',
    '/contact',
    '/quote',
  ];

  const dynamicPaths = [
    ...getServices().map((s) => `/services/${s.slug}`),
    ...getProjects().map((p) => `/projects/${p.slug}`),
    ...getPosts().map((p) => `/blog/${p.slug}`),
    ...getCareers().map((j) => `/careers/${j.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
