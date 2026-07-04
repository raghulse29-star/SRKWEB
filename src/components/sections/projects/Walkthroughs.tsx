'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { CardSlider } from '@/components/ui/CardSlider';

/* ──────────────────────────────────────────────────────────────────────────
   WALKTHROUGHS — horizontal video slider (exact card UI from design).
   Swipe on touch devices, arrow buttons on desktop (see ui/CardSlider).
   ────────────────────────────────────────────────────────────────────────── */

const videos = [
  {
    time: '12:45 WALKTHROUGH',
    title: 'Industrial Roof Systems 101',
    thumb: '/images/ph23.png',
    href: '#',
  },
  {
    time: '08:20 FEATURE',
    title: 'Masonry Precision in Modern Design',
    thumb: '/images/ph24.png',
    href: '#',
  },
  {
    time: '05:15 TIMELAPSE',
    title: '48-Hour Installation',
    thumb: '/images/ph25.png',
    href: '#',
  },
  {
    time: '10:02 WALKTHROUGH',
    title: 'Structural Steel Framing Tour',
    thumb: '/images/ph26.png',
    href: '#',
  },
  {
    time: '07:40 FEATURE',
    title: 'Precision Tile Roofing Craft',
    thumb: '/images/ph27.png',
    href: '#',
  },
];

export function Walkthroughs() {
  return (
    <section className="w-full bg-[#182329] py-12 lg:py-16 font-sans">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center" data-reveal>
          <p className="eyebrow text-[#CF5B4B]">
            Watch Our Process
          </p>
          <h2 className="heading-section mt-4 text-white">
            On-Site Walkthroughs
          </h2>
          <p className="lead mx-auto mt-5 max-w-lg text-gray-400">
            Go behind the scenes and witness the precision of our engineering team in these project deep-dives.
          </p>
        </div>

        {/* Video Slider */}
        <div className="mt-10" data-reveal>
          <CardSlider variant="dark">
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.href}
                data-slide
                className="group relative block aspect-[16/10] w-[82%] shrink-0 snap-start overflow-hidden rounded-[16px] bg-black/40 sm:w-[48%] lg:w-[38.5%]"
              >
                <Image
                  src={video.thumb}
                  alt={video.title}
                  fill
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#182329] via-transparent to-transparent opacity-90" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 ml-1 text-white" fill="white" />
                  </div>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="eyebrow text-[#CF5B4B]">
                    {video.time}
                  </span>
                  <h3 className="heading-card mt-2 text-white">
                    {video.title}
                  </h3>
                </div>
              </a>
            ))}
          </CardSlider>
        </div>
      </div>
    </section>
  );
}
