# SKR Construction — Website

Static service & showcase website for **Srikumaran Roofing & Construction**, built with
**Next.js (App Router) static export** and **Tailwind CSS v4**. SEO-optimized, deploys to
Netlify, content managed via Markdown/JSON files in the repo.

## Tech stack

- **Next.js 15** (App Router) with `output: 'export'` → fully static `out/`
- **Tailwind CSS v4** — global design tokens in [`src/styles/globals.css`](src/styles/globals.css)
- **TypeScript**
- Content: Markdown + JSON in [`src/content/`](src/content/), parsed with `gray-matter` + `remark`
- Forms: **Netlify Forms**
- Hosting: **Netlify**

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export to ./out
npm run preview    # serve the built ./out locally
npm run typecheck  # tsc --noEmit
npm run lint
```

## Project structure

```
src/
  app/              # routes (App Router). Dynamic [slug] routes pre-render via generateStaticParams
  components/
    ui/             # token-driven primitives (Button, Card, Container, Section, Media, Input)
    layout/         # Header, Footer, Breadcrumbs
    sections/       # Hero, ServicesGrid, ProjectGallery, Testimonials, StatsBand, CTASection
    seo/            # JSON-LD helpers
    forms/          # Netlify-wired Contact + Quote forms
  content/          # Markdown/JSON content (the editable site data)
  lib/              # content loaders, markdown, SEO helpers, site config
  styles/globals.css# THE global theme — all design tokens live here
  types/            # content type definitions
public/
  images/           # photos, logo, OG image (add real assets here)
  __forms.html      # Netlify form detection (do not delete)
```

## Editing content

No template changes needed — just add/edit files:

- **Service** → new `.md` in `src/content/services/` (frontmatter: title, slug, summary, icon, image, order)
- **Project** → new `.md` in `src/content/projects/` (title, slug, category, location, year, cover, gallery[], featured)
- **Blog post** → new `.md` in `src/content/blog/` (title, slug, date, author, excerpt, cover, tags)
- **Career** → new `.md` in `src/content/careers/`
- **Team** → edit `src/content/team/team.json`
- **Testimonials** → edit `src/content/testimonials/testimonials.json`

## Theming (the "super structure")

All colors, fonts, spacing, radii, and shadows are CSS variables in the `@theme` block of
[`src/styles/globals.css`](src/styles/globals.css). Change values there and the whole site
re-themes. Components reference tokens only (e.g. `bg-primary`, `text-accent`) — no
hardcoded colors elsewhere.

Fonts are wired via `next/font` in [`src/app/layout.tsx`](src/app/layout.tsx).

## Images

`src/components/ui/Media.tsx` renders styled **placeholders** until real photos are added.
Drop images into `public/images/` (matching the paths in content frontmatter), then set
`ASSETS_READY = true` at the top of `Media.tsx` to switch to real images.

## SEO

- Per-page metadata via the Metadata API + `buildMetadata()` in `src/lib/seo.ts`
- JSON-LD: `GeneralContractor` (site-wide), `Article` (blog), `BreadcrumbList` (detail pages)
- Auto-generated `/sitemap.xml` and `/robots.txt`
- Update the domain and business details in [`src/lib/site.ts`](src/lib/site.ts)

## Forms (Netlify)

Forms are declared in `public/__forms.html` so Netlify detects them at build. The React
components POST to `/` with a matching `form-name`. After the first deploy, view
submissions and set up email notifications in the Netlify dashboard.

## Deploy

Push to a Git repo connected to Netlify. `netlify.toml` sets `command = npm run build` and
`publish = out`. No extra configuration needed.

## TODO before launch

- [ ] Replace placeholder brand details in `src/lib/site.ts` (domain, phone, address, hours, social)
- [ ] Add real logo (`public/images/logo.*`) + replace the `SKR` text mark in Header/Footer
- [ ] Add real photography to `public/images/`, then set `ASSETS_READY = true`
- [ ] Apply final Figma design tokens to `globals.css`
- [ ] Add a 1200×630 OG image at `public/images/og-default.jpg`
- [ ] Confirm the "specify later" extra page once defined
```
