import { cn } from '@/lib/cn';

/** Centered content wrapper with the global max width + responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[var(--container-max)] px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
