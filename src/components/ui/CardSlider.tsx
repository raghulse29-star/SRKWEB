'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * HORIZONTAL CARD SLIDER — native scroll-snap track with prev/next arrows.
 *
 * Swipe on touch devices, arrow buttons on desktop; the hidden scrollbar
 * keeps trackpad/shift-wheel scrolling working. Arrows fade out at each end.
 *
 * Each direct child must be a slide carrying its own sizing classes plus:
 *   data-slide className="snap-start shrink-0 w-[82%] sm:w-[48%] lg:w-[38.5%]"
 */
export function CardSlider({
  children,
  variant = 'light',
  className,
}: {
  children: React.ReactNode;
  /** Arrow styling to suit the section background. */
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // Enable/disable the arrows based on how far the track has scrolled.
  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-slide]');
    const step = card ? card.offsetWidth + 24 /* gap-6 */ : el.clientWidth * 0.4;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const arrowClass = cn(
    'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-[#CF5B4B] hover:text-white disabled:pointer-events-none disabled:opacity-0',
    variant === 'dark'
      ? 'border border-white/20 bg-[#182329]/80 text-white'
      : 'border border-gray-200 bg-white/90 text-[#0A111A]'
  );

  return (
    <div className={cn('relative', className)}>
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByCard(-1)}
        disabled={!canPrev}
        className={cn(arrowClass, '-left-3 sm:-left-4')}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByCard(1)}
        disabled={!canNext}
        className={cn(arrowClass, '-right-3 sm:-right-4')}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
