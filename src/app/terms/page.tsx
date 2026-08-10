import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms and Conditions',
  description: `The terms that govern use of the ${siteConfig.legalName} website.`,
  path: '/terms',
});

export default function TermsPage() {
  const companyName = siteConfig.legalName.toUpperCase();

  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Terms and Conditions"
        lead="Last updated: July 2026"
      />
      <div className="prose-content mt-10 max-w-3xl">
        <p>
          Welcome to the website of {companyName} (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;).
        </p>
        <p>
          By accessing or using this website, you agree to be bound by these Terms and Conditions.
          If you do not agree with these terms, please do not use the website.
        </p>

        <h2>1. Website Information</h2>
        <p>
          The information provided on this website is intended for general informational purposes
          regarding our construction, roofing, fabrication, and related services.
        </p>
        <p>
          While we make reasonable efforts to keep the information accurate and current, we do not
          guarantee that all information, descriptions, prices, availability, project details,
          photographs, or other content will always be complete, accurate, or up to date.
        </p>

        <h2>2. Project Enquiries and Quotations</h2>
        <p>
          Submitting an enquiry through our website does not create a contract or guarantee that we
          will undertake your project.
        </p>
        <p>
          Any quotation, estimate, proposal, scope of work, specifications, payment terms,
          timelines, warranties, or other commercial terms provided by us will be subject to
          separate confirmation and written agreement between the Company and the client.
        </p>
        <p>
          Final project costs may vary depending on site conditions, design changes, material
          specifications, quantities, labour requirements, approvals, transportation, and other
          project-specific factors.
        </p>

        <h2>3. Project Photographs and Information</h2>
        <p>
          Photographs, videos, drawings, descriptions, and project information displayed on this
          website may represent completed, ongoing, or representative work.
        </p>
        <p>
          Actual project results may vary depending on site conditions, materials, design,
          workmanship, environmental conditions, and client requirements.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          Unless otherwise stated, the content of this website, including text, logos, graphics,
          photographs, designs, videos, layouts, and other materials, is owned by or licensed to{' '}
          {companyName}.
        </p>
        <p>
          You may not reproduce, copy, modify, distribute, publish, sell, or commercially use our
          website content without our prior written permission.
        </p>

        <h2>5. User Submissions</h2>
        <p>
          If you submit information, photographs, drawings, documents, or other materials through
          our website, you confirm that you have the necessary rights to provide such materials.
        </p>
        <p>You agree not to submit unlawful, misleading, defamatory, infringing, or harmful material.</p>

        <h2>6. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites or services.</p>
        <p>
          These links are provided for convenience only. We do not control or guarantee the
          availability, accuracy, security, or content of third-party websites.
        </p>

        <h2>7. Website Availability</h2>
        <p>
          We do not guarantee that the website will always be available, uninterrupted, secure, or
          free from errors or harmful components.
        </p>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the website without
          prior notice.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, {companyName} shall not be responsible
          for losses or damages arising solely from reliance on general information published on
          this website.
        </p>
        <p>
          Nothing in these Terms and Conditions excludes or limits liability that cannot legally be
          excluded or limited under applicable law.
        </p>

        <h2>9. Indemnity</h2>
        <p>
          You agree to use the website lawfully and not to misuse, damage, interfere with, or
          attempt to gain unauthorized access to the website or its systems.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and interpreted in accordance with the
          applicable laws of India.
        </p>
        <p>
          Any disputes shall be subject to the jurisdiction of the appropriate courts having
          jurisdiction over Ranipet, Tamil Nadu, India, unless otherwise agreed in a written
          contract with a client.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We may update or modify these Terms and Conditions from time to time. Updated terms will
          be posted on this page with a revised &quot;Last Updated&quot; date.
        </p>

        <h2>12. Contact Us</h2>
        <p>For questions regarding these Terms and Conditions, please contact:</p>
        <p>
          {companyName}
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
