// Tailwind CSS v4 uses a dedicated PostCSS plugin (no tailwind.config.js needed;
// theme/tokens live in src/styles/globals.css under the @theme block).
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
