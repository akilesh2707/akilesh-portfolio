'use client';
import { useState } from 'react';
import { profile } from '@/data/profile';
import { Arrow } from '@/components/ui/icon';
export function Contact() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-label">06 / OPEN A CONVERSATION</div>
        <div className="contact-title reveal">
          <h2>
            Have a problem
            <br />
            worth <span>building for?</span>
          </h2>
          <a href={`mailto:${profile.email}`} aria-label="Email Akilesh" className="contact-arrow">
            <Arrow />
          </a>
        </div>
        <div className="contact-bottom">
          <div>
            <span className="mono muted">LET’S CONNECT</span>
            <div className="email-row">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button onClick={copy} aria-label="Copy email address">
                {copied ? 'Copied ✓' : 'Copy ↗'}
              </button>
            </div>
            <span className="sr-only" role="status">
              {copied
                ? 'Email address copied.'
                : failed
                  ? 'Copy unavailable. Select the email address to copy it.'
                  : ''}
            </span>
            {failed && <p className="copy-error">Select the email address to copy it.</p>}
          </div>
          <div className="contact-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <Arrow />
              </a>
            ))}
          </div>
        </div>
        <footer className="footer">
          <span>© 2026 AKILESH S</span>
          <span>{profile.location} · SYSTEM / SIGNAL / FLOW</span>
          <a href="#top">
            BACK TO TOP <Arrow direction="up-right" />
          </a>
        </footer>
      </div>
    </section>
  );
}
