/* ──────────────────────────────────────────────────────────────────────────
   FOUNDER'S MESSAGE — dark full-width quote band.
   ────────────────────────────────────────────────────────────────────────── */

export function FounderMessage() {
  return (
    <section className="w-full bg-[#0A111A] py-16 lg:py-24 font-sans">
      <div className="mx-auto w-full max-w-[1000px] px-4 text-center sm:px-6 lg:px-8">
        <p className="eyebrow text-[#D45D53]" data-reveal>
          Founder&apos;s Message
        </p>

        <blockquote
          data-reveal
          style={{ '--reveal-order': 1 } as React.CSSProperties}
          className="mx-auto mt-8 text-[22px] font-bold leading-relaxed text-white sm:text-[26px] lg:text-[28px]"
        >
          &quot;As an engineering driven company, we believe every industrial structure must stand strong for decades. Our focus is not only on completing projects, but also on delivering long term value to our clients through quality workmanship and disciplined execution.&quot;
        </blockquote>

        <div data-reveal style={{ '--reveal-order': 2 } as React.CSSProperties}>
          <div className="mx-auto mt-10 h-[3px] w-16 bg-[#B44335]" />
          <p className="mt-6 text-[17px] font-bold text-white">Srikumaran R.</p>
          <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#D45D53]">
            Founder, Srikumaran Roofing and Construction
          </p>
        </div>
      </div>
    </section>
  );
}
