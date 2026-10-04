'use client';
import { isReducedMotion } from '@/lib/motion';
import Link from 'next/link';
import { useRef } from 'react';
export function MagneticLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || isReducedMotion()) return;
        const rect = e.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          'translate',
          `${(e.clientX - rect.x - rect.width / 2) * 0.08}px ${(e.clientY - rect.y - rect.height / 2) * 0.08}px`,
        );
      }}
      onPointerLeave={() => ref.current?.style.setProperty('translate', '0 0')}
    >
      {children}
    </Link>
  );
}
