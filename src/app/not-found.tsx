import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="text-6xl font-extrabold text-accent">404</p>
      <h1 className="mt-4 text-3xl">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <ButtonLink href="/" variant="accent">
          Back home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </Section>
  );
}
