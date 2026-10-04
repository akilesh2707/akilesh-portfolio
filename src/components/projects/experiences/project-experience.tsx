'use client';
import dynamic from 'next/dynamic';
import { ExperienceFrame } from './activity';
import type { QueueZeroMode } from './queue';
const loading = () => <div className="experience-loading">Preparing an interactive preview…</div>;
const Sentinel = dynamic(() => import('./sentinel'), { loading });
const Queue = dynamic(() => import('./queue'), { loading });
const Scam = dynamic(() => import('./scam'), { loading });
const Infra = dynamic(() => import('./infra'), { loading });
const Farm = dynamic(() => import('./farm'), { loading });
const Onco = dynamic(() => import('./onco'), { loading });
const Chip = dynamic(() => import('./chip'), { loading });
const Academy = dynamic(() => import('./academy'), { loading });
const Style = dynamic(() => import('./style'), { loading });
const experiences = {
  sentinelx: { component: Sentinel, kind: 'assessment', name: 'SentinelX' },
  queuezero: { component: Queue, kind: 'hospital', name: 'QueueZero AI' },
  scamcheck: { component: Scam, kind: 'investigation', name: 'ScamCheck' },
  infraguard: { component: Infra, kind: 'inspection', name: 'INFRAguard AI' },
  farmigle: { component: Farm, kind: 'farm', name: 'FARMIGLE' },
  oncotwin: { component: Onco, kind: 'imaging', name: 'OncoTwin AI' },
  chipx: { component: Chip, kind: 'restoration', name: 'ChipX' },
  '3-sports-academy': { component: Academy, kind: 'registration', name: '3 Sports Academy' },
  stylesense: { component: Style, kind: 'wardrobe', name: 'StyleSense AI' },
};
export function ProjectExperience({ slug, mode = 'card' }: { slug: string; mode?: QueueZeroMode }) {
  const experience = experiences[slug as keyof typeof experiences];
  if (!experience) return null;
  const Component = experience.component;
  return (
    <ExperienceFrame name={experience.name} kind={experience.kind}>
      {slug === 'queuezero' ? <Queue mode={mode} /> : <Component />}
    </ExperienceFrame>
  );
}
