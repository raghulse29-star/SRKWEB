import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BackToTop } from '@/components/ui/BackToTop';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';

/**
 * Self-hosted fonts via next/font (no external request at runtime).
 * Swap these families to match the Figma design once confirmed.
 * --font-heading / --font-body are consumed by globals.css @theme.
 */
const heading = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ['roofing', 'construction', 'renovation', 'contractor', siteConfig.name],
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 1200 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/favicon.png', apple: '/images/favicon.png' },
};

// Correct mobile scaling across all devices.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      {/* suppressHydrationWarning: browser extensions (ColorZilla, Grammarly…)
          inject attributes into <body> before React hydrates, triggering a
          false-positive hydration warning. This only mutes attribute
          mismatches on <body> itself, not real bugs in children. */}
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
