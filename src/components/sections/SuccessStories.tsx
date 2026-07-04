'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { CardSlider } from '@/components/ui/CardSlider';

/* ──────────────────────────────────────────────────────────────────────────
   SUCCESS STORIES (Testimonials) — Exact UI and content match from design
   ────────────────────────────────────────────────────────────────────────── */

const testimonials = [
  {
    image: '/images/ph4.webp', // Placeholder path
    quote: 'The team at Srikumaran transformed our estate. Their attention to detail during the slate installation was simply world-class.',
    author: 'Jonathan Reed, Estate Owner',
    rating: 5,
  },
  {
    image: '/images/ph5.webp', // Placeholder path
    quote: 'As an architect, I demand precision. These guys delivered a roofing system that was technically perfect and visually stunning.',
    author: 'Sarah Miller, Principal Architect',
    rating: 5,
  },
  {
    image: '/images/ph6.webp', // Placeholder path
    quote: 'Complex commercial roofs require expertise. Srikumaran is the only contractor we trust for large-scale industrial projects.',
    author: 'Michael Chen, Project Manager',
    rating: 5,
  },
];

// Custom Play Icon matching the specific UI
function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" />
    </svg>
  );
}

export function SuccessStories() {
  return (
    <section className="w-full bg-[#F8F9FA] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Area (Left Aligned) */}
        <div className="mb-14" data-reveal>
          <p className="eyebrow mb-3 text-[#CF5B4B]">
            Voice of Trust
          </p>
          <h2 className="heading-section text-[#0A111A]">
            Success Stories
          </h2>
        </div>

        {/* Video Cards Slider */}
        <div data-reveal>
          <CardSlider variant="light">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              data-slide
              className="flex w-[85%] shrink-0 snap-start flex-col gap-4 sm:w-[48%] lg:w-[38.5%]"
            >
              
              {/* Video Thumbnail Area */}
              <div className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-[14px] bg-[#E5E7EB] shadow-sm">
                <Image
                  src={t.image}
                  alt={`Video testimonial from ${t.author}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play Button - Glassmorphism */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-transform duration-300 group-hover:scale-110">
                    <PlayIcon className="h-6 w-6 ml-1 text-white" />
                  </div>
                </div>
              </div>

              {/* Text Card Area */}
              <div className="flex flex-grow flex-col rounded-[14px] bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                {/* Stars */}
                <div className="flex gap-[4px] text-[#CF5B4B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-[18px] w-[18px]"
                      fill={i < t.rating ? 'currentColor' : 'none'}
                      strokeWidth={1}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="body-text mt-5 flex-grow italic text-[#4B5563]">
                  "{t.quote}"
                </blockquote>
                
                {/* Author Name */}
                <p className="mt-6 text-[14px] font-bold text-[#0A111A]">
                  — {t.author}
                </p>
              </div>

            </div>
          ))}
          </CardSlider>
        </div>

      </div>
    </section>
  );
}