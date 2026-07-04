// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// /* ──────────────────────────────────────────────────────────────────────────
//    HEADER — Scaled down proportionally.
//    ────────────────────────────────────────────────────────────────────────── */

// const nav = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Services', href: '/services' },
//   { label: 'Projects', href: '/projects' },
//   { label: 'Testimonials', href: '/testimonials' },
//   { label: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const isActive = (href: string) =>
//     href === '/' ? pathname === '/' : pathname.startsWith(href);

//   return (
//     <header className="sticky top-0 z-50 bg-[#F8F9FA] shadow-sm">
//       <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3" aria-label="Srikumaran Roofing & Construction home">
//             <Image
//               src="/images/logo.png"
//               alt="Srikumaran Roofing & Construction"
//               width={240}
//               height={64}
//               priority
//               className="h-8 w-auto lg:h-[48px]"
//             />
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden items-center lg:flex lg:gap-8" aria-label="Primary">
//             {nav.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`pb-1.5 text-[15px] font-medium transition-colors hover:text-[#CF5B4B] ${
//                   isActive(item.href)
//                     ? 'border-b-[2px] border-[#CF5B4B] text-[#CF5B4B]'
//                     : 'text-[#1E242B]'
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop button */}
//           <div className="hidden lg:block">
//             <Link
//               href="/quote"
//               className="inline-flex items-center justify-center rounded-md bg-[#0A111A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
//             >
//               Get Consultation
//             </Link>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             type="button"
//             className="inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-800 lg:hidden"
//             aria-label={open ? 'Close menu' : 'Open menu'}
//             aria-expanded={open}
//             onClick={() => setOpen((v) => !v)}
//           >
//             <span className="text-xl">{open ? '✕' : '☰'}</span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile drawer */}
//       {open ? (
//         <div className="border-t border-gray-200 bg-[#F8F9FA] lg:hidden">
//           <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
//             <nav className="flex flex-col gap-1 py-3" aria-label="Mobile">
//               {nav.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
//                     isActive(item.href)
//                       ? 'bg-red-50 text-[#CF5B4B]'
//                       : 'text-[#1E242B] hover:bg-gray-100'
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <Link
//                 href="/quote"
//                 onClick={() => setOpen(false)}
//                 className="mt-3 flex w-full items-center justify-center rounded-md bg-[#0A111A] px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
//               >
//                 Get Consultation
//               </Link>
//             </nav>
//           </div>
//         </div>
//       ) : null}
//     </header>
//   );
// }
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ──────────────────────────────────────────────────────────────────────────
   HEADER — Replicated UI with smooth hover animations & active states
   ────────────────────────────────────────────────────────────────────────── */

const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  // { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F9FA] shadow-sm">
      <div className="mx-auto w-full max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Srikumaran Roofing & Construction home">
              <Image
                src="/images/logo.png"
                alt="Srikumaran Roofing & Construction"
                width={320}
                height={80}
                priority
                className="h-10 w-auto lg:h-[52px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center lg:flex lg:gap-10" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-[16px] font-semibold transition-colors duration-300 ${
                    active ? 'text-[#CF5B4B]' : 'text-[#1E242B] hover:text-[#CF5B4B]'
                  }`}
                >
                  {item.label}
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] rounded-full bg-[#CF5B4B] transition-all duration-300 ease-out ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Button */}
          <div className="hidden flex-shrink-0 lg:block">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-md bg-[#0A111A] px-7 py-3 text-[15px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#1E242B] hover:shadow-md"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#1E242B] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#CF5B4B] lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          open ? 'max-h-[400px] border-t border-gray-200 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#F8F9FA] px-4 py-4 sm:px-6">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-4 py-3 text-base font-semibold transition-colors ${
                    active
                      ? 'bg-[#CF5B4B]/10 text-[#CF5B4B]'
                      : 'text-[#1E242B] hover:bg-gray-100 hover:text-[#CF5B4B]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-md bg-[#0A111A] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1E242B]"
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}