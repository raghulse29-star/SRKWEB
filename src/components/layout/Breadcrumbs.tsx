import Link from 'next/link';

/** Visual breadcrumb trail. Pair with BreadcrumbJsonLd for SEO on detail pages. */
export function Breadcrumbs({ items }: { items: Array<{ name: string; path: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-accent">
                    {item.name}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
