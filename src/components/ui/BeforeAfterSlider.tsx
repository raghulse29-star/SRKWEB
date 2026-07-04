'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

/**
 * BEFORE / AFTER COMPARISON SLIDER.
 *
 * Matches the approved design: AFTER image on the LEFT (clipped by the
 * draggable divider), BEFORE image on the right, corner tags at the bottom,
 * white circular grip on the divider. Works with mouse drag, touch drag,
 * tap-to-jump, and keyboard arrows (the handle is a focusable ARIA slider).
 *
 * `touch-action: pan-y` keeps normal vertical page scrolling on mobile while
 * still letting horizontal drags move the divider.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className = '',
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // divider position in %
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) updateFromClientX(e.clientX);
  };

  const stopDragging = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      className={`group relative select-none overflow-hidden ${dragging ? 'cursor-ew-resize' : 'cursor-pointer'} ${className}`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* BEFORE — base layer (visible on the right of the divider) */}
      <Image src={before} alt={beforeAlt} fill draggable={false} className="object-cover" />

      {/* AFTER — overlay clipped to the left of the divider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={after} alt={afterAlt} fill draggable={false} className="object-cover" />
      </div>

      {/* Corner tags (per design: AFTER bottom-left, BEFORE bottom-right) */}
      <span
        className="pointer-events-none absolute bottom-5 left-5 rounded-lg bg-[#CF5B4B] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md"
        style={{ clipPath: position < 12 ? 'inset(0 100% 0 0)' : undefined }}
      >
        After
      </span>
      <span
        className="pointer-events-none absolute bottom-5 right-5 rounded-lg bg-[#0A111A]/75 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-md backdrop-blur-sm"
        style={{ clipPath: position > 88 ? 'inset(0 0 0 100%)' : undefined }}
      >
        Before
      </span>

      {/* Divider + drag handle (focusable ARIA slider) */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 outline-none"
        style={{ left: `${position}%`, touchAction: 'none' }}
      >
        {/* Vertical bar */}
        <div className="absolute inset-y-0 -left-px w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
        {/* Grip — white circle with dark chevrons, per design */}
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1E242B] shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-transform duration-200 group-hover:scale-105 focus-visible:scale-110">
          <ChevronsUpDown className="h-5 w-5" strokeWidth={2.25} />
        </div>
      </div>
    </div>
  );
}
