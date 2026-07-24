/**
 * Central site configuration — single source of truth for site-wide values used by
 * navigation, footer, SEO metadata, and JSON-LD structured data.
 *
 * NOTE: Values marked `TODO(client)` are placeholders. Replace with the real business
 * details (address, phone, hours, social links) once provided.
 */

export const siteConfig = {
  name: 'SRK Construction',
  legalName: 'Srikumaran Roofing & Construction',
  shortName: 'SRK',
  // Used by metadataBase, canonical URLs, sitemap, and JSON-LD. Update to the real domain.
  url: 'https://dev.skr.hub29.online',
  description:
    'Srikumaran Roofing & Construction — professional roofing, renovation, and ' +
    'construction services. Quality craftsmanship for residential and commercial projects.',
  tagline: 'Building with integrity. Roofing that lasts.',

  // TODO(client): confirm real contact details — also feed the LocalBusiness JSON-LD.
  contact: {
    phone: '+1 (000) 000-0000',
    phoneHref: 'tel:+10000000000',
    email: 'info@srkconstruction.com',
    address: {
      street: '123 Builder Avenue',
      locality: 'Your City',
      region: 'ST',
      postalCode: '00000',
      country: 'US',
    },
    // Geo + hours power the LocalBusiness schema; update with real values.
    geo: { latitude: 0, longitude: 0 },
    hours: 'Mo-Fr 08:00-18:00, Sa 09:00-14:00',
  },

  // TODO(client): real social profiles (used in footer + JSON-LD sameAs).
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  // Primary navigation — keep in sync with routes under src/app.
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],

  // Secondary links surfaced in the footer.
  footerNav: [
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Careers', href: '/careers' },
    { label: 'Request a Quote', href: '/quote' },
  ],

  // Default Open Graph image (place a real 1200x630 image at this path under /public).
  ogImage: '/images/og-default.jpg',
} as const;

export type SiteConfig = typeof siteConfig;

/** Build an absolute URL from a site-relative path (for canonical/OG/sitemap). */
export function absoluteUrl(path = '/'): string {
  const base = siteConfig.url.replace(/\/$/, '');
  const rel = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rel}`;
}
