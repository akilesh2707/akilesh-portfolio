'use client';
import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { primaryProjects } from '@/data/projects';
import { Arrow } from '@/components/ui/icon';
import { MagneticLink } from '@/components/ui/magnetic-link';
import { ProjectExperience } from './experiences/project-experience';

export function ProjectGallery() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const p = primaryProjects[active];
  const select = (index: number, focus = false) => {
    const next = (index + primaryProjects.length) % primaryProjects.length;
    setActive(next);
    if (focus) buttons.current[next]?.focus();
  };
  return (
    <div className="project-gallery reveal" data-project={p.slug}>
      <div className="gallery-stage">
        <div className="gallery-surface product-gallery-surface">
          <article id={`${id}-preview`} aria-labelledby={`${id}-title`} className="gallery-project">
            <div className="gallery-copy product-gallery-heading" key={`copy-${p.slug}`}>
              <span className="mono muted">{p.eyebrow}</span>
              <h3 id={`${id}-title`}>
                <Link href={`/projects/${p.slug}`}>
                  {p.name}
                  <Arrow />
                </Link>
              </h3>
              <p className="project-description">{p.description}</p>
            </div>
            <div className="gallery-art" key={`art-${p.slug}`}>
              <ProjectExperience slug={p.slug} />
            </div>
            <div className="gallery-copy product-gallery-footer">
              <div className="project-meta">
                <span className="status-tag">
                  <i />
                  {p.status}
                </span>
                <span className="mono muted">{p.subtitle}</span>
              </div>
              <div className="gallery-bottom">
                <div className="project-tags">
                  {p.stack.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <MagneticLink href={`/projects/${p.slug}`} className="text-link gallery-view">
                  View case study <Arrow />
                </MagneticLink>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="gallery-selection">
        <div className="gallery-list-heading">
          <span className="mono">TAKE A CLOSER LOOK</span>
          <span className="mono muted">01—05</span>
        </div>
        <div className="gallery-list" role="group" aria-label="Choose a featured project">
          {primaryProjects.map((project, index) => (
            <button
              key={project.slug}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              className="gallery-option"
              aria-pressed={active === index}
              aria-controls={`${id}-preview`}
              onClick={() => select(index)}
              onKeyDown={(event) => {
                if (
                  ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(
                    event.key,
                  )
                ) {
                  event.preventDefault();
                  select(
                    event.key === 'Home'
                      ? 0
                      : event.key === 'End'
                        ? primaryProjects.length - 1
                        : index + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1),
                    true,
                  );
                }
              }}
            >
              <span className="gallery-option-number mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="gallery-option-copy">
                <strong>{project.name}</strong>
                <span>{project.subtitle}</span>
                <small>{project.status}</small>
              </span>
              <Arrow />
            </button>
          ))}
        </div>
        <div className="gallery-browse">
          <span className="mono muted">SELECT TO EXPLORE</span>
          <div>
            <button aria-label="Previous featured project" onClick={() => select(active - 1)}>
              ←
            </button>
            <button aria-label="Next featured project" onClick={() => select(active + 1)}>
              →
            </button>
          </div>
        </div>
        <p className="gallery-caption">
          Different questions.
          <br />
          <span>One curiosity.</span>
        </p>
      </div>
      <span className="sr-only" role="status">
        Featured project: {p.name}. {p.status}.
      </span>
    </div>
  );
}
