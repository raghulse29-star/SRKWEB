/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deployed on Vercel, which runs Next.js natively — no static export needed.
  // This enables the /api/send-mail route handler (serverless mailer).

  // `next dev` and `next build` share `.next` by default, so building while
  // the dev server runs corrupts it (MODULE_NOT_FOUND ./NNN.js errors).
  // Normal flow: stop the dev server before `npm run build`.
  // Escape hatch: NEXT_DIST_DIR=.next-prod npm run build keeps the dev server alive.
  distDir: process.env.NEXT_DIST_DIR || '.next',

  // We ship correctly-sized source images; skip Vercel's image optimizer to keep
  // behavior identical to the previous static deployment.
  images: {
    unoptimized: true,
  },

  // Keep the /about/ style URLs the site has always used (SEO continuity).
  trailingSlash: true,

  // Surface lint/type errors at build time rather than silently passing.
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
