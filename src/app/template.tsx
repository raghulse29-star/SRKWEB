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

    // Client-side interactions (filter toggles, tabs, etc.) can mount new
    // [data-reveal] elements after this initial pass. Without watching for
    // them, those elements never get observed and stay stuck at opacity:0
    // forever, since the CSS above only reveals on .is-revealed.
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.hasAttribute('data-reveal')) observer.observe(node);
          node.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => observer.observe(el));
        });
      }
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
