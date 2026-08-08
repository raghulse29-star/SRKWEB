import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: `The terms that govern use of the ${siteConfig.name} website.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Terms of Service"
        lead="Last updated: July 2026"
      />
      <div className="prose-content mt-10 max-w-3xl">
        <p>
          These terms govern your use of the {siteConfig.name} website, operated by{' '}
          {siteConfig.legalName}. By browsing this site or submitting a form, you agree to these
          terms.
        </p>

        <h2>Use of this website</h2>
        <p>
          This website is provided for informational purposes — to showcase our services, past
          projects, and to let you request a consultation or quote. You agree not to misuse the
          site, attempt to disrupt its operation, or submit false or malicious information through
          our forms.
        </p>

        <h2>Quotes and estimates</h2>
        <p>
          Any pricing, timelines, or package details shown on this website (including the
          Transparent Pricing Plans) are indicative and subject to change based on site inspection,
          material availability, and project scope. A final quote is only confirmed in writing after
          consultation.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All text, images, project photography, and branding on this website are the property of{' '}
          {siteConfig.legalName} unless otherwise credited, and may not be reproduced without
          permission.
        </p>

        <h2>Third-party links and embeds</h2>
        <p>
          This site links to or embeds third-party services (such as Google Maps and WhatsApp). We
          are not responsible for the content, availability, or privacy practices of those external
          services.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          While we make reasonable efforts to keep information on this site accurate and up to date,
          we make no warranties about its completeness and are not liable for any loss arising from
          reliance on website content. Actual construction and roofing work is governed separately by
          the signed contract for that project.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India, and any disputes shall be subject to the
          jurisdiction of the courts in Tamil Nadu.
        </p>

        <h2>Contact us</h2>
        <p>
          Questions about these terms can be sent to{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or{' '}
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
        </p>
      </div>
    </Section>
  );
}
