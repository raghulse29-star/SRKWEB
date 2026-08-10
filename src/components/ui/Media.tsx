import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Image wrapper that degrades gracefully before real photography is added.
 *
 * While `ASSETS_READY` is false, it renders a styled placeholder (so the site looks
 * intentional during the build) instead of a broken image. Once real photos are dropped
 * into /public/images, flip ASSETS_READY to true and it renders optimized-layout
 * next/image (unoptimized loader, required for static export).
 */
const ASSETS_READY = true;

export function Media({
  src,
  alt,
  className,
  fill = true,
  width,
  height,
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  if (!ASSETS_READY || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-secondary to-primary text-center text-xs font-medium text-white/70',
          className,
        )}
      >
        <span className="px-3">{alt}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={cn('object-cover', className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      className={className}
    />
  );
}
