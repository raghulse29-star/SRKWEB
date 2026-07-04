import type { Metadata } from 'next';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTASection } from '@/components/sections/CTASection';
import { getTestimonials } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Testimonials',
  description: 'Hear from SRK Construction clients about their roofing, construction, and renovation projects.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  const testimonials = getTestimonials();
  return (
    <>
      <Section>
        <SectionHeading
          centered
          eyebrow="Reviews"
          title="What Our Clients Say"
          lead="We measure success by the trust our clients place in us — project after project."
        />
        <div className="mt-12">
          <Testimonials items={testimonials} />
        </div>
      </Section>
      <CTASection />
    </>
  );
}
