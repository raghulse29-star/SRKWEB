import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects your information.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Last updated: July 2026"
      />
      <div className="prose-content mt-10 max-w-3xl">
        <p>
          {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This
          policy explains what information we collect through {siteConfig.url.replace('https://', '')},
          how we use it, and the choices you have.
        </p>

        <h2>Information we collect</h2>
        <p>
          When you submit the Contact or Quote Request form, we collect the details you provide —
          typically your name, phone number, email address, project location, service of interest,
          budget range, and message. We do not require you to create an account, and we do not
          collect payment information through this site.
        </p>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to your enquiry and provide quotes or consultations.</li>
          <li>To contact you by phone, email, or WhatsApp about your project.</li>
          <li>To keep internal records of enquiries for quality and follow-up purposes.</li>
        </ul>
        <p>We do not sell, rent, or trade your personal information to third parties.</p>

        <h2>How your information is handled</h2>
        <p>
          Form submissions are sent directly to our business email via a secure server-side process.
          We do not use third-party marketing or advertising trackers on this site. Our website is
          hosted on Vercel, and our contact map uses an embedded Google Maps view — see our{' '}
          <a href="/cookies">Cookie Policy</a> for details on what that embed may set in your browser.
        </p>

        <h2>Data retention</h2>
        <p>
          We retain enquiry information for as long as reasonably necessary to respond to you and
          maintain business records, after which it is deleted or anonymized.
        </p>

        <h2>Your rights</h2>
        <p>
          You may ask us to access, correct, or delete the personal information we hold about you at
          any time by contacting us using the details below.
        </p>

        <h2>Contact us</h2>
        <p>
          For any privacy-related questions, reach us at{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or{' '}
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time to reflect changes in our practices. The
          &quot;Last updated&quot; date above will always indicate the latest revision.
        </p>
      </div>
    </Section>
  );
}
