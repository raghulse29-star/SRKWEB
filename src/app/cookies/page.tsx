import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description: `How ${siteConfig.name} uses cookies and similar technologies.`,
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Cookie Policy"
        lead="Last updated: July 2026"
      />
      <div className="prose-content mt-10 max-w-3xl">
        <p>
          This policy explains how {siteConfig.name} uses cookies and similar browser storage on
          this website.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored in your browser by websites you visit. They can be set
          by the site itself (first-party) or by an embedded third-party service.
        </p>

        <h2>Cookies we use</h2>
        <p>
          We do not run analytics, advertising, or marketing trackers on this website, and we do not
          set any first-party tracking cookies of our own.
        </p>

        <h2>Third-party embeds</h2>
        <p>
          Our{' '}
          <a href="/contact">Contact page</a> includes an embedded Google Maps view to help you find
          our office, and a floating WhatsApp button that links out to WhatsApp. When you interact
          with these, Google or WhatsApp may set their own cookies or collect data according to their
          own privacy policies — this happens on their domain, not ours, and is outside our control.
        </p>

        <h2>Managing cookies</h2>
        <p>
          Most browsers let you view, delete, or block cookies through their settings. Since this
          site does not rely on cookies for its own functionality, blocking third-party cookies will
          not affect your ability to browse or submit forms here — it may only prevent the embedded
          map from loading correctly.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we introduce analytics or additional third-party tools in the future, we will update
          this page to reflect that. The &quot;Last updated&quot; date above always reflects the
          latest revision.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </div>
    </Section>
  );
}
