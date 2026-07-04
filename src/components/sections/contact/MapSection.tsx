import { MapPin, ArrowUpRight } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   MAP SECTION — real interactive Google Map (no API key needed), contained.

   EDIT the location: set MAP_QUERY to an address or "lat,lng".
   - Address example:  '123 Industrial Park Way, Chennai 600001'
   - Coordinates:      '13.0827,80.2707'
   For a custom styled embed, replace the iframe `src` with the URL from
   Google Maps → Share → "Embed a map" (an https://www.google.com/maps/embed?pb=... link).

   Layout: on mobile the info card sits BELOW the map; on desktop it overlays
   the right side of the map.
   ────────────────────────────────────────────────────────────────────────── */

const MAP_QUERY = 'Chennai, Tamil Nadu 600001';
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=13&output=embed`;
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

export function MapSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Map */}
          <div data-reveal className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-sm sm:h-[440px] lg:h-[520px]">
            <iframe
              title="Srikumaran Roofing & Construction location"
              src={mapSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Visit HQ card — below map on mobile, overlay right on desktop */}
          <div className="relative mt-5 w-full rounded-2xl bg-[#0A111A] p-7 shadow-2xl lg:absolute lg:right-12 lg:top-1/2 lg:mt-0 lg:w-[360px] lg:-translate-y-1/2 lg:p-8">
            <div data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="mb-4 flex items-center gap-3 text-[#CF5B4B]">
              <MapPin className="h-6 w-6" />
            </div>

            <h3 data-reveal style={{ '--reveal-order': 1 } as React.CSSProperties} className="heading-card text-white">Visit Headquarters</h3>

            <p data-reveal style={{ '--reveal-order': 2 } as React.CSSProperties} className="body-text mt-3 text-gray-300">
              Experience our material library and structural prototypes in person.
            </p>

            <a
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ '--reveal-order': 3 } as React.CSSProperties}
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-[#CF5B4B] transition-colors hover:text-[#b54a3b]"
            >
              Get Directions <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
