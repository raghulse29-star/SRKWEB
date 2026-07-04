import Link from 'next/link';
import type { Project } from '@/types';
import { Media } from '@/components/ui/Media';

/** Responsive gallery of project cards linking to each project detail page. */
export function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group relative block overflow-hidden rounded-[var(--radius-lg)]"
        >
          <div className="relative aspect-[4/3]">
            <Media src={project.cover} alt={project.title} className="h-full w-full transition-transform duration-300 group-hover:scale-105" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            {project.location ? (
              <p className="text-sm text-white/70">
                {project.location}
                {project.year ? ` · ${project.year}` : ''}
              </p>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
}
