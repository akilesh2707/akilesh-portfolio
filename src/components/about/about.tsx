import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
export function About() {
  const hasPhoto = existsSync(join(process.cwd(), 'public/images/photo.jpg'));
  return (
    <section id="about" className="section about-section">
      <SectionHeading
        number="01"
        label="THE PERSON / THE PROCESS"
        title={
          <>
            Curiosity is the input.
            <br />
            <span className="muted">Systems are the output.</span>
          </>
        }
      />
      <div className="about-grid">
        <div className="profile-frame reveal">
          <div className="profile-art">
            {hasPhoto ? (
              <Image
                src="/images/photo.jpg"
                alt="Portrait of Akilesh S"
                fill
                sizes="(max-width: 768px) 80vw, 350px"
                className="profile-photo"
              />
            ) : (
              <>
                <div className="monogram-grid" aria-hidden="true" />
                <span className="monogram" aria-label="Akilesh S monogram">
                  AS<span>↗</span>
                </span>
                <span className="monogram-caption">
                  A WORK IN PROGRESS.
                  <br />
                  ALWAYS.
                </span>
              </>
            )}
          </div>
          <div className="profile-caption">
            <span>AKILESH S</span>
            <span>COIMBATORE, INDIA</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="about-lead word-reveal reveal">
            {'I’m a Software Systems student at Coimbatore Institute of Technology, exploring what happens when a practical problem meets the right software.'
              .split(' ')
              .map((word, i) => (
                <span key={i} style={{ animationDelay: `${i * 25}ms` }}>
                  {word}{' '}
                </span>
              ))}
          </p>
          <p className="reveal">
            My interests sit where full-stack development, automation and applied AI connect. I’m
            drawn to the work behind the interface: the data model, the decisions, the failure paths
            and the evidence that makes a result trustworthy.
          </p>
          <p className="reveal">
            Real-world projects and community learning are how I strengthen the fundamentals. The
            goal is to understand a system well enough to build it, explain it and keep improving
            it.
          </p>
          <div className="education-record reveal">
            <span className="mono">EDUCATION / CURRENT</span>
            <strong>{profile.degree}</strong>
            <span>{profile.institution}</span>
            <span className="mono muted">{profile.educationPeriod}</span>
          </div>
        </div>
      </div>
      <div className="community-row reveal">
        <span className="section-label">CURRENT / COMMUNITY</span>
        <div>
          <h3>
            Emerging Tech Team Lead <span>↗</span>
          </h3>
          <p>Google Developer Group on Campus CIT</p>
        </div>
        <div>
          <span className="mono">2026 — PRESENT</span>
          <p>Coordinating technical activities, workshops and community learning programs.</p>
        </div>
      </div>
    </section>
  );
}
