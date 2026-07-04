import type { Testimonial } from '@/types';
import { Card, CardBody } from '@/components/ui/Card';

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="text-accent" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}
      <span className="text-border">{'★'.repeat(5 - rating)}</span>
    </div>
  );
}

/** Grid of testimonial cards. */
export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <Card key={i}>
          <CardBody>
            <Stars rating={t.rating} />
            <blockquote className="mt-4 text-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-primary">{t.author}</span>
              {t.role ? <span className="text-muted-foreground"> · {t.role}</span> : null}
            </figcaption>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
