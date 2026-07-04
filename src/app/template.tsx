'use client';

import { useEffect, useRef } from 'react';

/**
 * PAGE TRANSITION + SCROLL-REVEAL DRIVER.
 *
 * Next.js remounts template.tsx on every route change, which gives us:
 *  1. A smooth page-enter animation on each navigation (.page-enter in globals.css).
 *  2. A fresh IntersectionObserver pass over the new page's [data-reveal] elements.
 *
 * Elements marked with data-reveal start hidden (only when JS is available and
 * the user allows motion — see globals.css) and get .is-revealed as they scroll
 * into view. Stagger siblings with style={{ '--reveal-order': n }}.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Opt-in flag: hidden reveal states only apply under html.js, so a
    // browser without JS (or a crawler) always sees the full content.
    document.documentElement.classList.add('js');

    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === 'undefined') {
      targets.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      // Trigger once ~8% of the viewport bottom is cleared; threshold 0 so
      // tall sections reveal as soon as their top edge enters.
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
