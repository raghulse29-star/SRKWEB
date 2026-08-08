import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getServices } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Request a Quote',
  description:
    'Request a free, no-obligation quote from SKR Construction for your roofing, construction, or renovation project.',
  path: '/quote',
});

export default function QuotePage() {
  const services = getServices().map((s) => ({ slug: s.slug, title: s.title }));
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          centered
          eyebrow="Free estimate"
          title="Request a Quote"
          lead="Tell us about your project and we'll get back to you within one business day."
        />
        <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8">
          <QuoteForm services={services} />
        </div>
      </div>
    </Section>
  );
}
