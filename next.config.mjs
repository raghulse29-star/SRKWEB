/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` — no Node server at runtime.
  output: 'export',

  // `next dev` and `next build` share `.next` by default, so building while
  // the dev server runs corrupts it (MODULE_NOT_FOUND ./NNN.js errors).
  // Normal flow: stop the dev server before `npm run build` (exports to out/).
  // Escape hatch: NEXT_DIST_DIR=.next-prod npm run build keeps the dev server
  // alive — note the static site is then exported INTO that folder, not out/.
  distDir: process.env.NEXT_DIST_DIR || '.next',

  // Static export has no Image Optimization server, so images must be unoptimized.
  // next/image still handles layout/sizes; we ship correctly-sized source images.
  images: {
    unoptimized: true,
  },

  // Emit /about/index.html instead of /about.html so static hosts serve clean URLs.
  trailingSlash: true,

  // Surface lint/type errors at build time rather than silently passing.
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
