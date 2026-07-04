import { absoluteUrl, siteConfig } from '@/lib/site';

/** Inline a JSON-LD <script> block. Server-rendered into the static HTML. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** GeneralContractor / LocalBusiness — render once in the root layout. */
export function OrganizationJsonLd() {
  const { contact } = siteConfig;
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'GeneralContractor',
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: contact.phone,
        email: contact.email,
        image: absoluteUrl(siteConfig.ogImage),
        address: {
          '@type': 'PostalAddress',
          streetAddress: contact.address.street,
          addressLocality: contact.address.locality,
          addressRegion: contact.address.region,
          postalCode: contact.address.postalCode,
          addressCountry: contact.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: contact.geo.latitude,
          longitude: contact.geo.longitude,
        },
        openingHours: contact.hours,
        sameAs: Object.values(siteConfig.social).filter(Boolean),
      }}
    />
  );
}

/** Article schema for blog posts. */
export function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  author?: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        ...(datePublished ? { datePublished } : {}),
        author: { '@type': 'Organization', name: author || siteConfig.legalName },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.legalName,
          logo: { '@type': 'ImageObject', url: absoluteUrl('/images/logo.png') },
        },
        ...(image ? { image: absoluteUrl(image) } : {}),
        mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
      }}
    />
  );
}

/** Breadcrumb schema for detail pages. */
export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; path: string }> }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}
