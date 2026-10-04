'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects';
import { navigation, profile } from '@/data/profile';
import { Arrow } from '@/components/ui/icon';
import { SystemVisual } from '@/components/projects/system-visual';
const sections = navigation.map((n) => ({
  title: n.label,
  description:
    {
      about: `${profile.degree} · CIT · education & community`,
      systems: 'Selected projects, architecture and validation',
      ai: 'ChatGPT, Antigravity, Codex · conceptual workflow',
      stack: 'Programming languages, skills, tools and frameworks',
      impact: 'Achievements, certifications, coding streak and learning',
      contact: profile.email,
    }[n.id] || '',
  href: `/#${n.id}`,
  keywords: `${n.label} ${n.id === 'about' ? 'student education college leadership GDG' : n.id === 'impact' ? 'certificates achievements leetcode hackerrank python badge' : n.id === 'stack' ? 'skills technology languages coding react typescript' : ''}`,
}));
const index = [
  ...sections,
  ...projects.map((p) => ({
    title: p.name,
    description: `${p.subtitle} · ${p.status}`,
    href: `/projects/${p.slug}`,
    keywords: `project projects ${p.name} ${p.subtitle} ${p.description} ${p.stack.join(' ')} ${p.category}`,
  })),
];
export function CommandMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = (
    terms.length
      ? index.filter((item) =>
          terms.every((term) =>
            `${item.title} ${item.keywords} ${item.description}`.toLowerCase().includes(term),
          ),
        )
      : sections
  ).slice(0, 8);
  const selectedProject = projects.find(
    (project) => `/projects/${project.slug}` === results[selected]?.href,
  );
  useEffect(() => {
    const open = () => {
      if (!dialog.current?.open) {
        dialog.current?.showModal();
        input.current?.focus();
      }
    };
    const key = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
      }
    };
    window.addEventListener('portfolio-command', open);
    window.addEventListener('keydown', key);
    return () => {
      window.removeEventListener('portfolio-command', open);
      window.removeEventListener('keydown', key);
    };
  }, []);
  useEffect(() => {
    dialog.current?.close();
  }, [pathname]);
  return (
    <dialog
      ref={dialog}
      className="command-dialog"
      aria-labelledby="command-title"
      onClick={(event) => {
        if (event.target === dialog.current) {
          const box = dialog.current.getBoundingClientRect();
          if (
            event.clientX < box.left ||
            event.clientX > box.right ||
            event.clientY < box.top ||
            event.clientY > box.bottom
          )
            dialog.current.close();
        }
      }}
    >
      <div className="command-top">
        <span id="command-title">Ask about Akilesh</span>
        <button aria-label="Close command menu" onClick={() => dialog.current?.close()}>
          Esc <span>×</span>
        </button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          resultsRef.current
            ?.querySelectorAll<HTMLAnchorElement>('a')
            [Math.min(selected, results.length - 1)]?.click();
        }}
      >
        <label className="sr-only" htmlFor="command-search">
          Search projects, skills or education
        </label>
        <input
          id="command-search"
          ref={input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(0);
          }}
          placeholder="Try “farmigle”, “skills” or “education”…"
          autoComplete="off"
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
              e.preventDefault();
              setSelected((n) =>
                results.length
                  ? (n + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length
                  : 0,
              );
            }
          }}
        />
      </form>
      {!query && (
        <div className="command-suggestions" aria-label="Search suggestions">
          {['projects', 'farmigle', 'skills', 'education'].map((term) => (
            <button
              key={term}
              onClick={() => {
                setQuery(term);
                setSelected(0);
                input.current?.focus();
              }}
            >
              {term} <span>↗</span>
            </button>
          ))}
        </div>
      )}
      <div className="command-results" ref={resultsRef} aria-label="Search results">
        {results.length ? (
          results.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={i === selected ? 'selected' : ''}
              onFocus={() => setSelected(i)}
              onPointerEnter={() => setSelected(i)}
              onClick={() => dialog.current?.close()}
            >
              <div>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
              <Arrow />
            </Link>
          ))
        ) : (
          <p className="no-results">No matching content. Try a project name, “AI” or “skills”.</p>
        )}
      </div>
      {selectedProject && (
        <div className="command-preview" key={selectedProject.slug}>
          <SystemVisual project={selectedProject} compact />
          <div>
            <strong>{selectedProject.name}</strong>
            <p>{selectedProject.description}</p>
            <span className="mono">{selectedProject.status} · Illustrative preview</span>
          </div>
        </div>
      )}
      <div className="command-footer">
        <span>
          <i className="status-dot" /> offline · keyword matched
        </span>
        <span>↑ ↓ navigate · ↵ open</span>
      </div>
    </dialog>
  );
}
