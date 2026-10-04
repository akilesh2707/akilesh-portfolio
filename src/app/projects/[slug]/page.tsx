import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { SystemVisual } from '@/components/projects/system-visual';
import { ProjectExperience } from '@/components/projects/experiences/project-experience';
import { Arrow } from '@/components/ui/icon';
import { Contact } from '@/components/contact/contact';
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p
    ? {
        title: p.name,
        description: p.description,
        alternates: { canonical: `/projects/${p.slug}` },
        openGraph: { title: `${p.name} — Akilesh S`, description: p.description },
      }
    : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const next = projects[(projects.findIndex((item) => item.slug === p.slug) + 1) % projects.length];
  return (
    <main id="main">
      <article className="case-study" id="top">
        <div className="case-back">
          <Link href="/#systems">
            <Arrow direction="left" /> All systems
          </Link>
          <span className="mono">CASE STUDY / DOCUMENTATION-BACKED</span>
        </div>
        <div className="case-hero">
          <div className="project-meta">
            <span className="mono">{p.eyebrow}</span>
            <span className="status-tag">
              <i />
              {p.status}
            </span>
          </div>
          <h1>
            {p.name}
            <span>↗</span>
          </h1>
          <p className="case-subtitle">{p.subtitle}</p>
          <p className="case-headline">{p.headline}</p>
          {p.link && (
            <a className="text-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
              {p.link.label}
              <Arrow />
            </a>
          )}
        </div>
        {p.slug === 'queuezero' ? (
          <section
            className="case-visual queuezero-case-visual"
            id="digital-twin"
            aria-labelledby="digital-twin-title"
          >
            <div className="queuezero-showcase-intro">
              <h2 id="digital-twin-title">Explore the Digital Twin.</h2>
              <p>
                See how people move through five connected hospital stages. Select a station, change
                your view, or run the synthetic demo to watch queues build and flow onward.
              </p>
            </div>
            <ProjectExperience slug={p.slug} mode="case-study" />
          </section>
        ) : (
          <div className="case-visual reveal">
            <SystemVisual project={p} />
          </div>
        )}
        <div className="case-content">
          <div className="case-sidebar">
            <span className="mono">INSIDE THE SYSTEM</span>
            <nav aria-label="Case study sections">
              <a href="#problem">01 / Problem</a>
              <a href="#approach">02 / Approach</a>
              <a href="#architecture">03 / Architecture</a>
              <a href="#implementation">04 / Contribution & stack</a>
              <a href="#evidence">05 / Evidence</a>
              <a href="#boundaries">06 / Boundaries</a>
            </nav>
          </div>
          <div className="case-narrative">
            <section id="problem" className="case-section reveal">
              <span className="section-label">01 / THE PROBLEM</span>
              <h2>Why this system?</h2>
              <p>{p.problem}</p>
            </section>
            <section id="approach" className="case-section reveal">
              <span className="section-label">02 / THE APPROACH</span>
              <h2>A deliberate response.</h2>
              <p>{p.approach}</p>
              <blockquote>
                <span className="mono">KEY ENGINEERING DECISION</span>
                {p.decision}
              </blockquote>
              {p.slug === 'queuezero' && (
                <div className="queuezero-decision-loop">
                  <h3>How the decision loop works.</h3>
                  <SystemVisual project={p} />
                </div>
              )}
            </section>
            <section id="architecture" className="case-section reveal">
              <span className="section-label">03 / THE SYSTEM</span>
              <h2>Follow the data.</h2>
              <ol className="case-pipeline">
                {p.pipeline.map((step, i) => (
                  <li key={step}>
                    <span className="mono">0{i + 1}</span>
                    <strong>{step}</strong>
                    <Arrow direction="down" />
                  </li>
                ))}
              </ol>
              <p className="diagram-disclaimer">
                Architecture summary from the documentation. Stages reflect the project’s stated
                implementation level; this is not a live system visualization.
              </p>
              <div className="case-capabilities">
                {p.capabilities.map((c) => (
                  <div key={c.title}>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="implementation" className="case-section reveal">
              <span className="section-label">04 / CONTRIBUTION & STACK</span>
              <h2>The implementation context.</h2>
              <p>
                {p.role ||
                  'This case study presents the documented project architecture and engineering decisions. The source does not assign individual contributions, so no specific ownership or team role is claimed.'}
              </p>
              <div className="project-tags case-tags">
                {p.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.stackNote && <p className="stack-note">{p.stackNote}</p>}
            </section>
            <section id="evidence" className="case-section reveal">
              <span className="section-label">05 / STATUS & EVIDENCE</span>
              <h2>What the record establishes.</h2>
              <div className="evidence-record">
                <span className="status-tag">
                  <i />
                  {p.status}
                </span>
                <ul>
                  {p.evidence.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
              <p className="evidence-attribution">
                Evidence reported in the supplied project documentation; these project results were
                not re-run as part of building this portfolio.
              </p>
            </section>
            <section id="boundaries" className="case-section case-boundaries reveal">
              <span className="section-label">06 / VALIDATION BOUNDARIES</span>
              <h2>What remains to be proved.</h2>
              <ul>
                {p.limitations.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <div className="case-future">
                <span className="mono">NEXT VALIDATION / FUTURE WORK</span>
                {p.future.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Link className="next-case" href={`/projects/${next.slug}`}>
          <span className="mono">NEXT SYSTEM</span>
          <strong>{next.name}</strong>
          <Arrow />
        </Link>
      </article>
      <Contact />
    </main>
  );
}
