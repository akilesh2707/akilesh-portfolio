export function isReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    (document.documentElement.dataset.motion === 'reduce' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  );
}
