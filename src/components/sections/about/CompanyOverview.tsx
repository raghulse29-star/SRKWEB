import Image from 'next/image';

/* ──────────────────────────────────────────────────────────────────────────
   COMPANY OVERVIEW — heading + intro + Vision/Mission beside a site photo.
   NOTE: image is a placeholder — swap `src` when the real photo is provided.
   ────────────────────────────────────────────────────────────────────────── */

export function CompanyOverview() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Left: copy */}
        <div data-reveal="left">
          <p className="eyebrow text-[#B44335]">
            Company Overview
          </p>
          <h2 className="heading-section mt-4 text-[#0A111A]">
            Thirty Years of<br className="hidden sm:block" /> Engineering<br className="hidden sm:block" /> Excellence
          </h2>

          <p className="body-text mt-6 text-gray-600">
            Srikumaran Roofing and Construction was established with a vision to deliver reliable and structurally strong industrial infrastructure solutions. With more than three decades of experience, the company has successfully executed roofing, civil construction, and fabrication projects across Tamil Nadu and surrounding regions.
          </p>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-[15px] font-semibold text-[#0A111A]">Vision</h3>
                <p className="body-text mt-2 italic text-gray-500">
                  &quot;To become one of South India&apos;s most trusted industrial construction partners.&quot;
                </p>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-[#0A111A]">Mission</h3>
                <p className="body-text mt-2 italic text-gray-500">
                  &quot;To deliver safe, durable, and technically sound industrial structures while maintaining integrity, transparency, and complete client satisfaction.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: site photo (placeholder) */}
        <div data-reveal="right" className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/ph13.webp"
            alt="Industrial steel structure under construction"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
