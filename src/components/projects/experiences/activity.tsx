'use client';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { isReducedMotion } from '@/lib/motion';

const Activity = createContext({ active: false, reduced: false });
function subscribeMotion(callback: () => void) {
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', callback);
  window.addEventListener('portfolio-motion', callback);
  return () => {
    media.removeEventListener('change', callback);
    window.removeEventListener('portfolio-motion', callback);
  };
}
export function ExperienceFrame({
  name,
  kind,
  children,
}: {
  name: string;
  kind: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduced = useSyncExternalStore(subscribeMotion, isReducedMotion, () => false);
  useEffect(() => {
    let visible = false;
    const update = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return (
    <Activity value={{ active, reduced }}>
      <div
        ref={ref}
        className={`project-experience experience-${kind}`}
        data-active={active && !reduced}
        role="group"
        aria-label={`${name} interactive illustrative preview`}
      >
        {children}
      </div>
    </Activity>
  );
}
export const useExperienceActivity = () => useContext(Activity);
/** Only user-started demos run, and their clocks stop offscreen, when hidden, or with reduced motion. */
export function useDemoClock(running: boolean, tick: () => void, delay = 1000) {
  const { active, reduced } = useExperienceActivity();
  useEffect(() => {
    if (!active || reduced || !running) return;
    const timer = window.setInterval(tick, delay);
    return () => clearInterval(timer);
  }, [active, reduced, running, tick, delay]);
}
export function DemoNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="demo-note">
      <span>ILLUSTRATIVE</span> {children}
    </p>
  );
}
