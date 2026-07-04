import { cn } from '@/lib/cn';
import { Container } from './Container';

/** A vertical page section with consistent spacing and optional muted background. */
export function Section({
  id,
  muted = false,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  muted?: boolean;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-reveal
      className={cn('py-16 sm:py-20 lg:py-24', muted && 'bg-muted', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Standard section heading block (eyebrow + title + optional lead text). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-lg text-muted-foreground">{lead}</p> : null}
    </div>
  );
}
