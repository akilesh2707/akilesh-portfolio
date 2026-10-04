import Link from 'next/link';
import { projects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/section-heading';
import { Arrow } from '@/components/ui/icon';
import { ProjectExperience } from './experiences/project-experience';
import { ProjectGallery } from './project-gallery';
import { TactileSurface } from '@/components/ui/tactile-surface';
import { MagneticLink } from '@/components/ui/magnetic-link';
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
      <ProjectGallery />
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
            <div className="research-surface reveal product-research" key={p.slug}>
              <article className="research-project">
                <div className="project-meta">
                  <span className="mono">{p.eyebrow}</span>
                  <span className="status-tag">{p.status}</span>
                </div>
                <h3>
                  <Link href={`/projects/${p.slug}`}>
                    {p.name}
                    <Arrow />
                  </Link>
                </h3>
                <p>{p.description}</p>
                <ProjectExperience slug={p.slug} />
                <div className="project-tags">
                  {p.stack.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {p.stackNote && <p className="research-stack-note">{p.stackNote}</p>}
                <Link href={`/projects/${p.slug}`} className="text-link">
                  Explore the research <Arrow />
                </Link>
              </article>
            </div>
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
          <MagneticLink className="button button-primary" href={`/projects/${p.slug}`}>
            Read the engineering story <Arrow />
          </MagneticLink>
        </div>
        <div className="reveal client-preview product-client">
          <ProjectExperience slug={p.slug} />
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
        <div className="experiment-surface reveal product-exploration">
          <article className="experiment">
            <span className="mono">PRODUCT / AI CONCEPT</span>
            <h3>
              {p.name}
              <Arrow />
            </h3>
            <p>{p.description}</p>
            <ProjectExperience slug={p.slug} />
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
        </div>
        <TactileSurface className="experiment-surface reveal">
          <article className="experiment techsprint">
            <a
              className="event-preview side-visual"
              href="https://techsprint-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit TechSprint 2026 event platform"
              data-cursor="OPEN ↗"
            >
              <span aria-hidden="true">26</span>
              <i aria-hidden="true" />
              <i aria-hidden="true" />
              <i aria-hidden="true" />
              <small>TECHSPRINT / COMMUNITY</small>
              <Arrow />
            </a>
            <span className="mono">COMMUNITY / EVENT PLATFORM</span>
            <h3>
              TechSprint 2026
              <Arrow />
            </h3>
            <p>
              A responsive event platform, built and deployed with Node.js and Tailwind CSS.
              Documented in my résumé.
            </p>
            <div className="project-tags">
              <span>Node.js</span>
              <span>Tailwind CSS</span>
            </div>
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
        </TactileSurface>
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
