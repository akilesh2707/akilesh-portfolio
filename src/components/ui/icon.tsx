import type { CSSProperties } from 'react';
export function Arrow({
  direction = 'up-right',
  className = '',
}: {
  direction?: 'up-right' | 'down' | 'right' | 'left';
  className?: string;
}) {
  const rotations = { 'up-right': 0, right: 45, down: 135, left: 225 };
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotations[direction]}deg)` } as CSSProperties}
    >
      <path
        d="M5 19 19 5M5 5h14v14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ThemeIcon({ mode }: { mode: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {mode === 'dark' ? (
        <path
          d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ) : mode === 'light' ? (
        <>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </>
      ) : (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 21h8m-4-4v4" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  );
}
