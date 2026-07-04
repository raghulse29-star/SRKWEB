import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

/** Reusable call-to-action band, used near the bottom of most pages. */
export function CTASection({
  title = 'Ready to secure your architectural legacy?',
  text = 'Get a free, no-obligation quote from our team. We respond within one business day.',
  primaryHref = '/quote',
  primaryLabel = 'Book a Free Site Inspection',
  secondaryHref = '/projects',
  secondaryLabel = 'View Portfolio',
}: {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col items-center gap-6 py-16 text-center" data-reveal>
          <h2 className="max-w-2xl text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="max-w-xl text-white/80">{text}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href={primaryHref} variant="accent" size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
