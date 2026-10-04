'use client';
import { isReducedMotion } from '@/lib/motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
export function MagneticLink({
  href,
  children,
  className = '',
  'aria-label': ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const bounds = useRef<DOMRect | null>(null);
  const frame = useRef(0);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const reset = () => {
      cancelAnimationFrame(frame.current);
      ref.current?.style.removeProperty('translate');
      bounds.current = null;
    };
    window.addEventListener('portfolio-motion', reset);
    media.addEventListener('change', reset);
    window.addEventListener('scroll', reset, { passive: true });
    return () => {
      reset();
      window.removeEventListener('portfolio-motion', reset);
      media.removeEventListener('change', reset);
      window.removeEventListener('scroll', reset);
    };
  }, []);
  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      aria-label={ariaLabel}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse' && !isReducedMotion())
          bounds.current = e.currentTarget.getBoundingClientRect();
      }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || isReducedMotion()) return;
        const rect = bounds.current;
        if (!rect) return;
        const x = Math.max(-4, Math.min(4, (e.clientX - rect.x - rect.width / 2) * 0.08));
        const y = Math.max(-4, Math.min(4, (e.clientY - rect.y - rect.height / 2) * 0.08));
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() =>
          ref.current?.style.setProperty('translate', `${x}px ${y}px`),
        );
      }}
      onPointerLeave={() => {
        cancelAnimationFrame(frame.current);
        bounds.current = null;
        ref.current?.style.removeProperty('translate');
      }}
    >
      {children}
    </Link>
  );
}
