'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigation } from '@/data/profile';
import { ThemeControl } from './theme';
export function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'top' ? '' : entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -65% 0px' },
    );
    navigation.forEach((n) => {
      const section = document.getElementById(n.id);
      if (section) observer.observe(section);
    });
    const top = document.getElementById('top');
    if (top) observer.observe(top);
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.querySelector<HTMLButtonElement>('.mobile-menu-trigger')?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const href = (id: string) => (pathname === '/' ? `#${id}` : `/#${id}`);
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="Akilesh S — home">
          <span className="brand-symbol">
            a<span>↗</span>
          </span>
          <span>
            AKILESH<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map((n) => (
            <a key={n.id} href={href(n.id)} aria-current={active === n.id ? 'location' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="command-trigger"
            onClick={() => window.dispatchEvent(new Event('portfolio-command'))}
            aria-label="Ask about me (Command or Control K)"
          >
            <span className="search-icon">⌕</span>
            <span className="ask-label">Ask</span>
            <kbd>⌘ K</kbd>
          </button>
          <ThemeControl />
          <button
            className="mobile-menu-trigger"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span>{open ? '−' : '+'}</span>
          </button>
        </div>
      </header>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`mobile-nav ${open ? 'open' : ''}`}
        inert={!open}
      >
        {navigation.map((n) => (
          <a key={n.id} href={href(n.id)} onClick={() => setOpen(false)}>
            <span>{n.number}</span>
            {n.label}
            <span>↗</span>
          </a>
        ))}
      </nav>
      <aside className="section-index" aria-label="Section index">
        {navigation.map((n) => (
          <a
            key={n.id}
            href={href(n.id)}
            className={active === n.id ? 'active' : ''}
            aria-label={n.label}
            aria-current={active === n.id ? 'location' : undefined}
          >
            <span>{n.number}</span>
            <i />
          </a>
        ))}
      </aside>
    </>
  );
}
