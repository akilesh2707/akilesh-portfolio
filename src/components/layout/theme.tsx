'use client';
import { useSyncExternalStore } from 'react';
import { isReducedMotion } from '@/lib/motion';
import { ThemeIcon } from '@/components/ui/icon';
type Mode = 'system' | 'light' | 'dark';
function subscribe(callback: () => void) {
  window.addEventListener('portfolio-theme', callback);
  window.addEventListener('storage', callback);
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const update = () => {
    if (getMode() === 'system')
      document.documentElement.dataset.theme = media.matches ? 'dark' : 'light';
    callback();
  };
  media.addEventListener('change', update);
  return () => {
    window.removeEventListener('portfolio-theme', callback);
    window.removeEventListener('storage', callback);
    media.removeEventListener('change', update);
  };
}
function getMode(): Mode {
  return (document.documentElement.dataset.preference as Mode) || 'system';
}
export function ThemeControl() {
  const mode = useSyncExternalStore(subscribe, getMode, () => 'system' as Mode);
  const reduce = useSyncExternalStore(
    (callback) => {
      window.addEventListener('portfolio-motion', callback);
      return () => window.removeEventListener('portfolio-motion', callback);
    },
    () => document.documentElement.dataset.motion === 'reduce',
    () => false,
  );
  function toggleMotion() {
    const next = reduce ? 'system' : 'reduce';
    document.documentElement.setAttribute('data-motion', next);
    try {
      localStorage.setItem('portfolio-motion', next);
    } catch {}
    window.dispatchEvent(new Event('portfolio-motion'));
  }
  function changeTheme(next: Mode, event: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const rect = event.currentTarget.getBoundingClientRect();
    root.style.setProperty('--theme-x', `${rect.x + rect.width / 2}px`);
    root.style.setProperty('--theme-y', `${rect.y + rect.height / 2}px`);
    const apply = () => {
      root.setAttribute('data-preference', next);
      root.setAttribute(
        'data-theme',
        next === 'system'
          ? matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : next,
      );
      try {
        localStorage.setItem('portfolio-theme', next);
      } catch {}
      window.dispatchEvent(new Event('portfolio-theme'));
    };
    if (document.startViewTransition && !isReducedMotion()) document.startViewTransition(apply);
    else apply();
    const picker = event.currentTarget.closest('details');
    picker?.removeAttribute('open');
    picker?.querySelector('summary')?.focus();
  }
  return (
    <details className="theme-picker">
      <summary aria-label={`Theme: ${mode}. Choose color theme`}>
        <ThemeIcon mode={mode} />
      </summary>
      <div className="theme-options" role="group" aria-label="Color theme">
        {(['system', 'light', 'dark'] as const).map((next) => (
          <button
            key={next}
            aria-label={`${next} theme`}
            aria-pressed={mode === next}
            onClick={(e) => changeTheme(next, e)}
          >
            <ThemeIcon mode={next} />
            {next}
            <span>{mode === next ? '✓' : ''}</span>
          </button>
        ))}
        <button className="motion-option" aria-pressed={reduce} onClick={toggleMotion}>
          Reduce motion<span>{reduce ? '✓' : ''}</span>
        </button>
      </div>
    </details>
  );
}
