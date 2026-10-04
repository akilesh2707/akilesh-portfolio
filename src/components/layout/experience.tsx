'use client';
import { isReducedMotion } from '@/lib/motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
export function Experience() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | undefined;
    const setupReveals = () => {
      observer?.disconnect();
      if (isReducedMotion()) {
        document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'));
        return;
      }
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in-view');
              observer?.unobserve(e.target);
            }
          }),
        { threshold: 0.1 },
      );
      document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el));
    };
    setupReveals();
    reduced.addEventListener('change', setupReveals);
    window.addEventListener('portfolio-motion', setupReveals);
    let frame = 0,
      previous = scrollY,
      lastTime = performance.now();
    const scroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - innerHeight;
        progress.current?.style.setProperty(
          'transform',
          `scaleX(${height > 0 ? scrollY / height : 0})`,
        );
        const now = performance.now();
        const speed = Math.min(Math.abs(scrollY - previous) / Math.max(now - lastTime, 1), 4);
        document.documentElement.style.setProperty(
          '--scroll-skew',
          `${isReducedMotion() ? 0 : Math.sign(scrollY - previous) * speed * 0.7}deg`,
        );
        previous = scrollY;
        lastTime = now;
        frame = 0;
      });
    };
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    let cursorFrame = 0;
    const move = (event: PointerEvent) => {
      if (!matchMedia('(pointer: fine)').matches || isReducedMotion()) return;
      cancelAnimationFrame(cursorFrame);
      cursorFrame = requestAnimationFrame(() => {
        if (!cursor.current) return;
        cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
        cursor.current.dataset.active = String(
          Boolean((event.target as Element).closest('a,button,summary,input')),
        );
        cursor.current.style.opacity = '1';
      });
    };
    const leave = () => {
      if (cursor.current) cursor.current.style.opacity = '0';
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', leave);
    document.addEventListener('keydown', leave);
    return () => {
      observer?.disconnect();
      reduced.removeEventListener('change', setupReveals);
      window.removeEventListener('portfolio-motion', setupReveals);
      window.removeEventListener('scroll', scroll);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('keydown', leave);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(cursorFrame);
    };
  }, [pathname]);
  return (
    <>
      <div ref={progress} className="scroll-progress" aria-hidden="true" />
      <div className="cursor-ring" ref={cursor} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
export function BuildLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let duration = 950;
    try {
      if (sessionStorage.getItem('portfolio-ready') || isReducedMotion()) duration = 0;
      sessionStorage.setItem('portfolio-ready', '1');
    } catch {}
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div className="build-loader" aria-label="Portfolio initializing">
      <div className="loader-meta">
        BUILD.LOG <span>AKILESH / SYSTEM.01</span>
      </div>
      <div className="loader-count" aria-hidden="true">
        <span>000</span>
        <span>100</span>
      </div>
      <p>
        INITIALIZING PORTFOLIO
        <br />
        SYSTEM CHECK <span>........................ READY</span>
        <br />
        PROJECTS <span>............................ LOADED</span>
      </p>
      <button onClick={() => setVisible(false)}>Skip initialization ↗</button>
    </div>
  );
}
