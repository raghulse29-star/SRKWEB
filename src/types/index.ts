/** Shared content types. Frontmatter shapes for Markdown collections + JSON data. */

/** SEO overrides any content item may carry in frontmatter. */
export interface SeoMeta {
  title?: string;
  description?: string;
  /** Path to a social share image under /public (e.g. /images/og/foo.jpg). */
  image?: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  /** Icon key (maps to an icon in components/ui/Icon) or emoji fallback. */
  icon?: string;
  image?: string;
  /** Sort order in listings (lower first). */
  order?: number;
  seo?: SeoMeta;
  /** Rendered HTML body (set by the loader from Markdown). */
  contentHtml?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  location?: string;
  year?: number;
  cover?: string;
  gallery?: string[];
  /** Marks projects to surface on the homepage. */
  featured?: boolean;
  seo?: SeoMeta;
  contentHtml?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  category: string;
  location?: string;
  year?: number;
  client?: string;
  cover?: string;
  gallery?: string[];
  challenge: string;
  solution: string;
  result: string;
  featured?: boolean;
  seo?: SeoMeta;
  contentHtml?: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date string (YYYY-MM-DD). */
  date: string;
  author?: string;
  cover?: string;
  tags?: string[];
  seo?: SeoMeta;
  contentHtml?: string;
}

export interface CareerPost {
  slug: string;
  title: string;
  location?: string;
  type?: string; // Full-time, Part-time, Contract
  summary: string;
  seo?: SeoMeta;
  contentHtml?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number; // 1-5
}
