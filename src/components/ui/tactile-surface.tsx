'use client';
import { useEffect, useRef } from 'react';
import { isReducedMotion } from '@/lib/motion';

/** Bounded pointer depth. Content and links remain ordinary, accessible HTML. */
export function TactileSurface({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const bounds = useRef<DOMRect | null>(null);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const reset = () => {
      cancelAnimationFrame(frame.current);
      bounds.current = null;
      ['--tilt-x', '--tilt-y', '--depth-x', '--depth-y'].forEach((key) =>
        ref.current?.style.removeProperty(key),
      );
    };
    media.addEventListener('change', reset);
    window.addEventListener('portfolio-motion', reset);
    window.addEventListener('scroll', reset, { passive: true });
    return () => {
      reset();
      media.removeEventListener('change', reset);
      window.removeEventListener('portfolio-motion', reset);
      window.removeEventListener('scroll', reset);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`tactile-surface ${className}`}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse' && !isReducedMotion())
          bounds.current = event.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse' || isReducedMotion()) return;
        const box = bounds.current;
        if (!box) return;
        const x = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width) * 2 - 1));
        const y = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height) * 2 - 1));
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          const node = ref.current;
          node?.style.setProperty('--tilt-x', `${-y * 1.4}deg`);
          node?.style.setProperty('--tilt-y', `${x * 1.4}deg`);
          node?.style.setProperty('--depth-x', `${x * 4}px`);
          node?.style.setProperty('--depth-y', `${y * 4}px`);
        });
      }}
      onPointerLeave={() => {
        cancelAnimationFrame(frame.current);
        bounds.current = null;
        ['--tilt-x', '--tilt-y', '--depth-x', '--depth-y'].forEach((key) =>
          ref.current?.style.removeProperty(key),
        );
      }}
    >
      {children}
    </div>
  );
}
