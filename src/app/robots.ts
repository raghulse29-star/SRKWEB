import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

// Required for `output: 'export'` — render this route at build time.
export const dynamic = 'force-static';

/** Emitted to /robots.txt in the static export. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
