import Link from 'next/link';
import { primaryProjects, projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/section-heading';
import { Arrow } from '@/components/ui/icon';
import { SystemVisual } from './system-visual';
export function SelectedSystems() {
  return (
    <section id="systems" className="section systems-section">
      <SectionHeading
        number="02"
        label="SELECTED SYSTEMS / 01—05"
        title={
          <>
            Different problems.
            <br />
            <span className="muted">Connected thinking.</span>
          </>
        }
        description="From assessment integrity to farm intelligence. Each system starts with a real problem and an explicit boundary."
      />
      <div className="project-index mono">
        <span>PROJECT / ENGINEERING FOCUS</span>
        <span>IMPLEMENTATION LEVEL</span>
      </div>
      <div className="primary-projects">
        {primaryProjects.map((p, i) => (
          <article key={p.slug} className={`project-feature project-${p.slug} reveal`}>
            <div className="project-visual-wrap">
              <SystemVisual project={p} />
            </div>
            <div className="project-copy">
              <div className="project-meta">
                <span className="mono">
                  {String(i + 1).padStart(2, '0')} / {p.eyebrow.split(' / ')[1]}
                </span>
                <span className="status-tag">
                  <i />
                  {p.status}
                </span>
              </div>
              <h3>
                <Link href={`/projects/${p.slug}`}>
                  {p.name}
                  <Arrow />
                </Link>
              </h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-description">{p.description}</p>
              <div className="project-insight">
                <span className="mono">KEY DECISION</span>
                <p>
                  {p.slug === 'farmigle'
                    ? 'Preserve evidence history. Publish a new Twin only after a completed full-farm analysis.'
                    : p.slug === 'queuezero'
                      ? 'Quantitative tools calculate the outcome. The copilot explains it. A human approves it.'
                      : p.slug === 'scamcheck'
                        ? 'Credibility and suitability are different questions. Uncertainty belongs in the report.'
                        : p.slug === 'infraguard'
                          ? 'One shared frame pipeline, with source adapters and session-isolated findings.'
                          : 'Separate configurable policy from detection and keep evidence connected to human review.'}
                </p>
              </div>
              <div className="project-tags">
                {p.stack.slice(0, 4).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <Link className="case-study-link" href={`/projects/${p.slug}`}>
                Inside the system <Arrow />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function ResearchProjects() {
  return (
    <section id="research" className="section research-section">
      <div className="subsection-top">
        <span className="section-label">TECHNICAL / RESEARCH</span>
        <span className="mono muted">GOING A LAYER DEEPER</span>
      </div>
      <h2 className="subsection-title reveal">
        Where the questions
        <br />
        get more interesting.
      </h2>
      <div className="research-grid">
        {projects
          .filter((p) => p.category === 'research')
          .map((p) => (
            <article className="research-project reveal" key={p.slug}>
              <SystemVisual project={p} compact />
              <div className="project-meta">
                <span className="mono">{p.eyebrow.split(' / ')[1]}</span>
                <span className="status-tag">{p.status}</span>
              </div>
              <h3>
                <Link href={`/projects/${p.slug}`}>
                  {p.name}
                  <Arrow />
                </Link>
              </h3>
              <p>{p.description}</p>
              <Link href={`/projects/${p.slug}`} className="text-link">
                Explore the research <Arrow />
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
}
export function ClientProject() {
  const p = projects.find((p) => p.category === 'client')!;
  return (
    <section id="client" className="section client-section">
      <div className="client-heading reveal">
        <span className="section-label">REAL-WORLD ENGINEERING</span>
        <span className="status-tag">
          <i />
          {p.status}
        </span>
      </div>
      <div className="client-layout">
        <div className="client-copy reveal">
          <span className="mono muted">FULL-STACK DEVELOPER</span>
          <h2>
            Built for the
            <br />
            <span className="muted">real world.</span>
          </h2>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p className="client-lesson">
            The engineering continued after deployment: domain configuration, CORS, service
            ownership and dependable notifications.
          </p>
          <Link className="button button-primary" href={`/projects/${p.slug}`}>
            Read the engineering story <Arrow />
          </Link>
        </div>
        <div className="reveal">
          <SystemVisual project={p} />
          <div className="client-proof">
            <span className="mono">DOCUMENTED PRODUCTION VERIFICATION</span>
            <p>Registration → persistence → spreadsheet → email.</p>
            <span>Private client data stays private.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function SideProjects() {
  const p = projects.find((p) => p.category === 'exploration')!;
  return (
    <section id="experiments" className="section experiments-section">
      <SectionHeading
        number="+"
        label="EXPLORATIONS / OPEN QUESTIONS"
        title={
          <>
            A little room
            <br />
            <span className="muted">for what’s next.</span>
          </>
        }
      />
      <div className="experiment-grid">
        <article className="experiment reveal">
          <span className="mono">PRODUCT / AI CONCEPT</span>
          <h3>
            {p.name}
            <Arrow />
          </h3>
          <p>{p.description}</p>
          <Link href={`/projects/${p.slug}`} className="text-link">
            Explore the idea <Arrow />
          </Link>
          <div className="wardrobe-stripe" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
        </article>
        <article className="experiment techsprint reveal">
          <span className="mono">COMMUNITY / EVENT PLATFORM</span>
          <h3>
            TechSprint 2026
            <Arrow />
          </h3>
          <p>
            A responsive event platform, built and deployed with Node.js and Tailwind CSS.
            Documented in my résumé.
          </p>
          <a
            href="https://techsprint-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Visit event platform <Arrow />
          </a>
          <div className="sprint-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </article>
        <article className="next-project reveal">
          <span className="mono">NEXT PROJECT / IN DEVELOPMENT</span>
          <span className="next-symbol" aria-hidden="true">
            +
          </span>
          <h3>
            The next system
            <br />
            is being built.
          </h3>
          <p>Leaving space for the next problem worth solving.</p>
          <span className="mono muted">NAME & DETAILS TO COME</span>
        </article>
      </div>
    </section>
  );
}
