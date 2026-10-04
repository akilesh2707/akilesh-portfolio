'use client';
import { isReducedMotion } from '@/lib/motion';
import { useEffect, useRef, useState } from 'react';
import { achievements } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    if (isReducedMotion()) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isReducedMotion()) {
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / 750, 1);
            setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.8 },
    );
    if (ref.current) observer.observe(ref.current);
    const stop = () => {
      if (isReducedMotion()) {
        cancelAnimationFrame(frame);
        setDisplay(value);
      }
    };
    media.addEventListener('change', stop);
    window.addEventListener('portfolio-motion', stop);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      media.removeEventListener('change', stop);
      window.removeEventListener('portfolio-motion', stop);
    };
  }, [value]);
  return (
    <span ref={ref} aria-label={String(value)}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
export function Impact() {
  return (
    <section id="impact" className="section impact-section">
      <SectionHeading
        number="05"
        label="ON THE RECORD / LEARNING MILESTONES"
        title={
          <>
            Consistency
            <br />
            <span className="muted">compounds.</span>
          </>
        }
        description="Small milestones, backed by my résumé. A record of learning and practice."
      />
      <div className="achievement-grid">
        {achievements.map((a) => (
          <article className="achievement reveal" key={a.label}>
            <div className="achievement-value">
              <Counter value={a.value} />
              <span>{a.suffix}</span>
            </div>
            <h3>{a.label}</h3>
            <p>{a.detail}</p>
          </article>
        ))}
      </div>
      <div className="learning-timeline reveal">
        <div>
          <span className="mono">2025</span>
          <strong>Google Cloud Study Jams</strong>
          <p>Hands-on Google Cloud learning and practical labs · GDG on Campus CIT</p>
        </div>
        <div>
          <span className="mono">2025 / 2026</span>
          <strong>LeetCode 50 Days Coding Badge</strong>
          <p>Consistent problem solving across both years</p>
        </div>
        <div>
          <span className="mono">WORKSHOP</span>
          <strong>Hands-On Flask</strong>
          <p>FOSS Club · Coimbatore Institute of Technology</p>
        </div>
      </div>
    </section>
  );
}
