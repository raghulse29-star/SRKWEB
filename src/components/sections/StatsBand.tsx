import { Container } from '@/components/ui/Container';

const stats = [
  { value: '20+', label: 'Years of experience' },
  { value: '500+', label: 'Projects completed' },
  { value: '100%', label: 'Licensed & insured' },
  { value: '5★', label: 'Average client rating' },
];

/** Trust band of headline numbers. Edit values in this file. */
export function StatsBand() {
  return (
    <section className="bg-accent text-accent-foreground">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-display text-3xl font-extrabold sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm font-medium">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
