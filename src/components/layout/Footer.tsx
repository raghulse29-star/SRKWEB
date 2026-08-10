'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, ThumbsUp, Share2 } from 'lucide-react';
import { siteConfig } from '@/lib/site';

/* ──────────────────────────────────────────────────────────────────────────
   FOOTER — Exact layout, content, and styling match from the design.
   ────────────────────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Project Portfolio', href: '/projects' },
  { label: 'Safety Standards', href: '/safety' },
  { label: 'Careers', href: '/careers' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  // { label: 'Sitemap', href: '/sitemap' },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#061118] text-white font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: 3-Column Grid */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          
          {/* Column 1: Brand & Info (Takes up more space) */}
          <div className="lg:col-span-5 lg:pr-12">
            <h2 className="heading-card text-white">
              SRIKUMARAN ROOFING & CONSTRUCTION
            </h2>
            <p className="body-text mt-5 text-[#9CA3AF]">
              Building with precision, protecting with passion.<br />
              The leading choice for architectural roofing<br />
              solutions in the region.
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16232B] text-[#9CA3AF] transition-all duration-300 hover:bg-[#CF5B4B] hover:text-white" aria-label="Website">
                <Globe className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16232B] text-[#9CA3AF] transition-all duration-300 hover:bg-[#CF5B4B] hover:text-white" aria-label="Facebook">
                <ThumbsUp className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16232B] text-[#9CA3AF] transition-all duration-300 hover:bg-[#CF5B4B] hover:text-white" aria-label="Share">
                <Share2 className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav className="lg:col-span-3" aria-label="Quick Links">
            <h3 className="text-[17px] font-normal text-white">Quick Links</h3>
            <ul className="mt-6 space-y-4 text-[16px] text-[#9CA3AF]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-[#CF5B4B]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-4">
            <h3 className="text-[17px] font-normal text-white">Contact Us</h3>
            <ul className="mt-6 space-y-5 text-[16px] text-[#9CA3AF]">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#CF5B4B]" strokeWidth={1.5} />
                <span className="leading-relaxed">
                  {siteConfig.contact.address.street},<br />
                  {siteConfig.contact.address.locality}, {siteConfig.contact.address.region}<br />
                  {siteConfig.contact.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#CF5B4B]" strokeWidth={1.5} />
                <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-[#CF5B4B]">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#CF5B4B]" strokeWidth={1.5} />
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-[#CF5B4B]">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row">
          <p className="text-[14px] text-[#9CA3AF]">
            © 2026 SRIKUMARAN ROOFING & CONSTRUCTION. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6 text-[14px] text-[#9CA3AF]">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}