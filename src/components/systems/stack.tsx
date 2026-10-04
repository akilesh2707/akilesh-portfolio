'use client';
import { useState } from 'react';
import Link from 'next/link';
import { skills } from '@/data/profile';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/section-heading';
export function Stack() {
  const [selected, setSelected] = useState<string | null>(null);
  const matches = selected
    ? projects.filter((project) => {
        if (selected === 'Digital Twins')
          return /digital twin|3d twin/i.test(
            `${project.subtitle} ${project.description} ${project.pipeline.join(' ')}`,
          );
        if (selected === 'Evidence fusion')
          return project.pipeline.some((step) => /freshness.*fusion/i.test(step));
        return project.stack.some((technology) =>
          technology.toLowerCase().split(' / ').includes(selected.toLowerCase()),
        );
      })
    : [];
  return (
    <section id="stack" className="section stack-section">
      <SectionHeading
        number="04"
        label="TECHNICAL STACK / BY RESPONSIBILITY"
        title={
          <>
            The right tool.
            <br />
            <span className="muted">For the right layer.</span>
          </>
        }
        description="Résumé skills and documented project technologies, organized by the work they do."
      />
      <div className="stack-table">
        {skills.map((group, i) => (
          <div className="stack-row reveal" key={group.name}>
            <div>
              <span className="mono muted">0{i + 1}</span>
              <h3>{group.name}</h3>
              <span className="stack-source">{group.source}</span>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <button
                    aria-pressed={selected === item}
                    onClick={() => setSelected(selected === item ? null : item)}
                  >
                    {item}
                    <span aria-hidden="true">↗</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skill-context" aria-live="polite">
        <div>
          <span className="mono">FOLLOW A CONNECTION</span>
          <p>{selected || 'Choose a skill to explore its project context.'}</p>
        </div>
        <div className="skill-projects">
          {selected ? (
            matches.length ? (
              matches.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <strong>{project.name} ↗</strong>
                  <span>{project.status}</span>
                </Link>
              ))
            ) : (
              <p className="muted">
                {skills.find((group) => group.items.includes(selected))?.source}. See the group
                above for its source; no project proficiency rating is implied.
              </p>
            )
          ) : (
            <span className="muted">
              Project stages stay visible, including proposed and research work.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
