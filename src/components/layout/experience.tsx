'use client';
import { isReducedMotion } from '@/lib/motion';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
export function Experience() {
  const cursor = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const ambient = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const fine = matchMedia('(pointer: fine)');
    const visibility = () => {
      if (ambient.current) ambient.current.dataset.visible = String(!document.hidden);
    };
    visibility();
    document.addEventListener('visibilitychange', visibility);
    let observer: IntersectionObserver | undefined;
    const setupReveals = () => {
      observer?.disconnect();
      if (isReducedMotion()) {
        cursor.current?.style.setProperty('opacity', '0');
        ambient.current?.style.setProperty('--ambient-scroll', '0px');
      }
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
        ambient.current?.style.setProperty(
          '--ambient-scroll',
          `${isReducedMotion() ? 0 : Math.min(1, scrollY / Math.max(height, 1)) * -60}px`,
        );
        document.querySelector('.site-header')?.setAttribute('data-scrolled', String(scrollY > 40));
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
      if (!fine.matches || isReducedMotion()) return;
      cancelAnimationFrame(cursorFrame);
      cursorFrame = requestAnimationFrame(() => {
        if (!cursor.current) return;
        cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
        cursor.current.dataset.active = String(
          Boolean((event.target as Element).closest('a,button,summary,input')),
        );
        const target = (event.target as Element).closest<HTMLElement>('[data-cursor],a');
        cursor.current.dataset.label =
          target?.dataset.cursor || (target?.getAttribute('target') === '_blank' ? 'OPEN ↗' : '');
        ambient.current?.style.setProperty('--light-x', `${event.clientX}px`);
        ambient.current?.style.setProperty('--light-y', `${event.clientY}px`);
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
      document.removeEventListener('visibilitychange', visibility);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(cursorFrame);
    };
  }, [pathname]);
  return (
    <>
      <div ref={progress} className="scroll-progress" aria-hidden="true" />
      <div className="cursor-ring" ref={cursor} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div ref={ambient} className="ambient-background" aria-hidden="true">
        <i className="ambient-wash" />
        <i className="ambient-orbit" />
        <i className="ambient-grid" />
        <i className="ambient-light" />
      </div>
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
