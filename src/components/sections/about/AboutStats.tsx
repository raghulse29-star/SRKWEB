/* ──────────────────────────────────────────────────────────────────────────
   ABOUT STATS — self-contained. EDIT the `stats` array below.
   ────────────────────────────────────────────────────────────────────────── */

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '1.2k+', label: 'Projects Completed' },
  { value: '150+', label: 'Expert Artisans' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function AboutStats() {
  return (
    <section className="w-full bg-white py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ '--reveal-order': Math.min(i, 5) } as React.CSSProperties}
              className="text-center"
            >
              <dt className="text-4xl font-extrabold text-[#1E242B] lg:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
