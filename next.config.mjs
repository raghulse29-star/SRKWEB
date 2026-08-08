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

  // Security headers — lost when the site moved from Netlify (netlify.toml)
  // to Vercel; restored here so they apply on every route.
  async headers() {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "frame-src https://www.google.com https://maps.google.com",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: csp },
        ],
      },
      {
        // Long-cache immutable Next static assets.
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
