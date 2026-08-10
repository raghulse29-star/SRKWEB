import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.legalName} collects, uses, and protects your information.`,
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
          {siteConfig.legalName.toUpperCase()} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or
          &quot;Company&quot;) respects your privacy and is committed to protecting the personal
          information you provide when using our website.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect information when you
          visit or interact with our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect information that you voluntarily provide to us, including:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Company or organization name</li>
          <li>Project location</li>
          <li>Details about your construction or roofing requirements</li>
          <li>Information submitted through contact, enquiry, quotation, or other forms</li>
          <li>Any other information you choose to provide when contacting us</li>
        </ul>
        <p>
          We may also automatically collect limited technical information such as your IP address,
          browser type, device type, pages visited, and website usage information.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We may use the information collected to:</p>
        <ul>
          <li>Respond to your enquiries and requests</li>
          <li>Provide quotations or project-related information</li>
          <li>Contact you regarding our services</li>
          <li>Understand your project requirements</li>
          <li>Provide and improve our services and website</li>
          <li>Maintain website security and prevent misuse</li>
          <li>Send relevant business or marketing communications where permitted by law</li>
          <li>Comply with applicable legal and regulatory requirements</li>
        </ul>
        <p>
          We do not use your personal information for purposes unrelated to the services or
          communication described above without appropriate notice or consent.
        </p>

        <h2>3. Sharing of Information</h2>
        <p>We do not sell or rent your personal information.</p>
        <p>
          We may share information with trusted service providers when reasonably necessary to
          operate our website or provide our services, such as website hosting, analytics,
          communication, or technology providers.
        </p>
        <p>
          We may also disclose information where required by applicable law, legal process, or a
          lawful government request.
        </p>

        <h2>4. Cookies and Similar Technologies</h2>
        <p>
          Our website may use cookies and similar technologies to improve website functionality,
          understand website traffic, remember preferences, and improve user experience.
        </p>
        <p>
          You may be able to control or disable cookies through your browser settings. Disabling
          certain cookies may affect some website functionality. See our{' '}
          <a href="/cookies">Cookie Policy</a> for details.
        </p>

        <h2>5. Third-Party Services and Links</h2>
        <p>
          Our website may contain links to third-party websites, social media platforms, maps, or
          other services.
        </p>
        <p>
          We are not responsible for the privacy practices, security, or content of third-party
          websites. We recommend reviewing their respective privacy policies before providing
          personal information.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect personal information
          against unauthorized access, loss, misuse, alteration, or disclosure.
        </p>
        <p>
          However, no method of transmission or storage over the internet can be guaranteed to be
          completely secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain personal information only for as long as reasonably necessary for the purposes
          described in this Privacy Policy, including responding to enquiries, maintaining business
          records, complying with legal obligations, and resolving disputes.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          Depending on applicable law, you may have rights regarding your personal information,
          including the right to request access, correction, updating, or deletion of certain
          information.
        </p>
        <p>To make a privacy-related request, please contact us using the details below.</p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>
          Our website is not specifically directed toward children. We do not knowingly collect
          personal information from children without appropriate consent where required by law.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated &quot;Last Updated&quot; date.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy or how we handle personal
          information, please contact:
        </p>
        <p>
          {siteConfig.legalName.toUpperCase()}
          <br />
          Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          <br />
          Phone: <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
          <br />
          Address: {siteConfig.contact.address.street}, {siteConfig.contact.address.locality},{' '}
          {siteConfig.contact.address.region} {siteConfig.contact.address.postalCode}
          <br />
          Website: {siteConfig.url.replace('https://', '')}
        </p>
      </div>
    </Section>
  );
}
