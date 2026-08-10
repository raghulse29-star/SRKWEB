import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { markdownToHtml } from './markdown';
import type { CareerPost, CaseStudy, Post, Project, Service, TeamMember, Testimonial } from '@/types';

/**
 * Build-time content loaders. All functions read from src/content and run only on the
 * server during static generation — nothing here is bundled for the client.
 *
 * To add content: drop a new .md file in the relevant folder (or edit the .json data).
 * No template changes needed — listings and routes pick it up automatically.
 */

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

/** Read all `.md` files in a collection folder, returning slug + frontmatter + raw body. */
function readMarkdownCollection(folder: string): Array<{
  slug: string;
  data: Record<string, unknown>;
  body: string;
}> {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      const slug = (data.slug as string) || file.replace(/\.md$/, '');
      return { slug, data, body: content };
    });
}

/**
 * Coerce a frontmatter date (which YAML may parse into a Date object) to a
 * `YYYY-MM-DD` string so downstream code can rely on a consistent type.
 */
function toISODate(value: unknown): string {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '').slice(0, 10);
}

function readJson<T>(folder: string, file: string): T[] {
  const fp = path.join(CONTENT_DIR, folder, file);
  if (!fs.existsSync(fp)) return [];
  return JSON.parse(fs.readFileSync(fp, 'utf8')) as T[];
}

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export function getServices(): Service[] {
  return readMarkdownCollection('services')
    .map(({ slug, data }) => ({ slug, ...(data as object) }) as Service)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export async function getService(slug: string): Promise<Service | null> {
  const item = readMarkdownCollection('services').find((i) => i.slug === slug);
  if (!item) return null;
  return { slug, ...(item.data as object), contentHtml: await markdownToHtml(item.body) } as Service;
}

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export function getProjects(): Project[] {
  return readMarkdownCollection('projects')
    .map(({ slug, data }) => ({ slug, ...(data as object) }) as Project)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

export async function getProject(slug: string): Promise<Project | null> {
  const item = readMarkdownCollection('projects').find((i) => i.slug === slug);
  if (!item) return null;
  return { slug, ...(item.data as object), contentHtml: await markdownToHtml(item.body) } as Project;
}

/* -------------------------------------------------------------------------- */
/* Case Studies                                                                */
/* -------------------------------------------------------------------------- */

export function getCaseStudies(): CaseStudy[] {
  return readMarkdownCollection('case-studies')
    .map(({ slug, data }) => ({ slug, ...(data as object) }) as CaseStudy)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const item = readMarkdownCollection('case-studies').find((i) => i.slug === slug);
  if (!item) return null;
  return { slug, ...(item.data as object), contentHtml: await markdownToHtml(item.body) } as CaseStudy;
}

/* -------------------------------------------------------------------------- */
/* Blog                                                                        */
/* -------------------------------------------------------------------------- */

export function getPosts(): Post[] {
  return readMarkdownCollection('blog')
    .map(({ slug, data }) => ({ slug, ...(data as object), date: toISODate(data.date) }) as Post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const item = readMarkdownCollection('blog').find((i) => i.slug === slug);
  if (!item) return null;
  return {
    slug,
    ...(item.data as object),
    date: toISODate(item.data.date),
    contentHtml: await markdownToHtml(item.body),
  } as Post;
}

/* -------------------------------------------------------------------------- */
/* Careers                                                                     */
/* -------------------------------------------------------------------------- */

export function getCareers(): CareerPost[] {
  return readMarkdownCollection('careers').map(
    ({ slug, data }) => ({ slug, ...(data as object) }) as CareerPost,
  );
}

export async function getCareer(slug: string): Promise<CareerPost | null> {
  const item = readMarkdownCollection('careers').find((i) => i.slug === slug);
  if (!item) return null;
  return {
    slug,
    ...(item.data as object),
    contentHtml: await markdownToHtml(item.body),
  } as CareerPost;
}

/* -------------------------------------------------------------------------- */
/* Team + Testimonials (JSON data)                                             */
/* -------------------------------------------------------------------------- */

export function getTeam(): TeamMember[] {
  return readJson<TeamMember>('team', 'team.json');
}

export function getTestimonials(): Testimonial[] {
  return readJson<Testimonial>('testimonials', 'testimonials.json');
}
