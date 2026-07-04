import Link from 'next/link';
import type { Service } from '@/types';
import { Card } from '@/components/ui/Card';
import { Media } from '@/components/ui/Media';

/** Grid of service cards linking to each service detail page (used on /services). */
export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group">
          <Card className="h-full overflow-hidden transition-shadow hover:shadow-[var(--shadow-lifted)]">
            <div className="relative aspect-[16/10]">
              <Media src={service.image} alt={service.title} className="h-full w-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl transition-colors group-hover:text-accent">{service.title}</h3>
              <p className="mt-2 text-muted-foreground">{service.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">
                Learn more →
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
