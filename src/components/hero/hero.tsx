'use client';
import { useEffect, useState } from 'react';
import { isReducedMotion } from '@/lib/motion';
import { profile } from '@/data/profile';
import { Arrow } from '@/components/ui/icon';
import { MagneticLink } from '@/components/ui/magnetic-link';
import { SignalNetwork } from './signal-network';
const terminalStories = {
  whoami: ['$ whoami', 'Akilesh S', 'Software Systems · CIT', 'Coimbatore, India', '2025 → 2030'],
  approach: [
    '$ cat approach.md',
    'problem → evidence → system',
    'make the boundaries explicit',
    'build → test → learn → iterate',
    'human judgment stays in the loop',
  ],
  now: [
    '$ cat now.md',
    'Emerging Tech Team Lead',
    'GDG on Campus CIT · 2026 — present',
    'technical activities & workshops',
    'community-driven learning',
  ],
};
export function Hero() {
  const [role, setRole] = useState(0);
  const [story, setStory] = useState<keyof typeof terminalStories>('whoami');
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const configure = () => {
      clearInterval(timer);
      if (!isReducedMotion())
        timer = setInterval(() => {
          if (!document.hidden) setRole((n) => (n + 1) % profile.roles.length);
        }, 3600);
    };
    configure();
    media.addEventListener('change', configure);
    window.addEventListener('portfolio-motion', configure);
    return () => {
      clearInterval(timer);
      media.removeEventListener('change', configure);
      window.removeEventListener('portfolio-motion', configure);
    };
  }, []);
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-overline">
        <span>
          <i className="status-dot" /> SOFTWARE SYSTEMS / APPLIED AI
        </span>
        <span>
          COIMBATORE, IN <span className="muted">↗</span>
        </span>
      </div>
      <div className="hero-name-line">
        <h1 id="hero-title" aria-label="Akilesh S">
          {'AKILESH'.split('').map((letter, i) => (
            <span key={i} className="hero-letter" style={{ animationDelay: `${i * 45}ms` }}>
              {letter}
            </span>
          ))}
          <span className="hero-s">
            {' '}
            S<span className="name-period">.</span>
          </span>
        </h1>
        <span className="name-note">
          BUILDING
          <br />
          WITH INTENT.
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-message">
          <div className="role-line">
            <span className="tiny-cross">+</span>
            <span key={role}>{profile.roles[role]}</span>
          </div>
          <p className="hero-positioning">
            I turn complex problems into <span>practical</span> software systems.
          </p>
          <p className="hero-support">
            Connecting data, intelligence and interfaces.
            <br />
            Learning by building the whole system.
          </p>
          <div className="hero-ctas">
            <MagneticLink href="#systems" className="button button-primary">
              Explore the systems <Arrow direction="down" />
            </MagneticLink>
            <a href="#contact" className="text-link">
              Let’s connect <Arrow />
            </a>
          </div>
        </div>
        <div className="hero-system">
          <SignalNetwork />
          <div className="hero-terminal">
            <div className="terminal-bar">
              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
              <span>~/akilesh</span>
              <span className="terminal-small">STORY / LOCAL</span>
            </div>
            <div className="terminal-tabs" role="group" aria-label="Explore my story">
              {(Object.keys(terminalStories) as (keyof typeof terminalStories)[]).map((key) => (
                <button key={key} aria-pressed={story === key} onClick={() => setStory(key)}>
                  {key}
                </button>
              ))}
            </div>
            <div className="terminal-lines" aria-live="polite">
              {terminalStories[story].map((line, i) => (
                <p key={line} className={i === 0 ? 'terminal-command' : ''}>
                  {line}
                </p>
              ))}
              <span className="terminal-prompt">
                ↳ <i />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>SCROLL TO CONNECT THE DOTS</span>
        <a href="#about" aria-label="Scroll to About">
          <Arrow direction="down" />
        </a>
        <span>PERSONAL PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}
