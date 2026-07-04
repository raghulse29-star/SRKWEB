import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from './site';

interface BuildMetadataArgs {
  title?: string;
  description?: string;
  /** Site-relative path, e.g. "/services/roofing". Used for canonical + OG url. */
  path?: string;
  /** Site-relative image path; falls back to the default OG image. */
  image?: string;
  type?: 'website' | 'article';
  /** ISO date — only for articles. */
  publishedTime?: string;
}

/**
 * Single helper to produce consistent per-page Metadata: canonical URL, Open Graph,
 * and Twitter cards. Use in every page's `metadata`/`generateMetadata`.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  image = siteConfig.ogImage,
  type = 'website',
  publishedTime,
}: BuildMetadataArgs = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: title || undefined, // root layout's title.template handles suffixing
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: fullTitle }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
