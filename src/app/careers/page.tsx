import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card, CardBody } from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';
import { getCareers } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description: 'Join the SRK Construction team. Explore current openings in roofing and construction.',
  path: '/careers',
});

export default function CareersPage() {
  const jobs = getCareers();
  return (
    <Section>
      <SectionHeading
        centered
        eyebrow="Join us"
        title="Careers at SRK"
        lead="We're always looking for skilled, dependable people who take pride in their work."
      />
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {jobs.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No open positions right now — but we&apos;d still love to hear from you.{' '}
            <Link href="/contact" className="text-accent underline">
              Get in touch
            </Link>
            .
          </p>
        ) : (
          jobs.map((job) => (
            <Card key={job.slug}>
              <CardBody className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg">{job.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {[job.type, job.location].filter(Boolean).join(' · ')}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{job.summary}</p>
                </div>
                <ButtonLink href={`/careers/${job.slug}`} variant="outline" size="sm">
                  View role
                </ButtonLink>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </Section>
  );
}
