'use client';
import { useEffect, useId, useRef } from 'react';
import type { Project } from '@/data/projects';
export function SystemVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const id = project.slug;
  const illustrationId = useId();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let inView = false;
    const update = () => {
      node.dataset.visible = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );
    observer.observe(node);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);
  return (
    <div
      ref={ref}
      data-visible="false"
      className={`system-visual visual-${id} ${compact ? 'compact' : ''}`}
      role="img"
      aria-label={`${project.name} architecture illustration. ${project.pipeline.join(' to ')}. Illustrative, not a live product screenshot.`}
    >
      <div className="visual-topline">
        <span>
          {id === 'farmigle'
            ? 'FARM.DIGITAL_TWIN'
            : id === 'queuezero'
              ? 'FLOW.DECISION_LOOP'
              : id === 'chipx'
                ? 'ADAPTIVE.FUSION'
                : id === 'scamcheck'
                  ? 'EVIDENCE.PROTOCOL'
                  : id === 'infraguard'
                    ? 'INSPECTION.PIPELINE'
                    : 'SYSTEM.ARCHITECTURE'}
        </span>
        <span>ILLUSTRATIVE</span>
      </div>
      {id === 'sentinelx' ? (
        <div className="sentinel-diagram">
          <div className="sentinel-scan signature-motion" aria-hidden="true" />
          <div className="sentinel-ring ring-outer" />
          <div className="sentinel-ring ring-inner" />
          <svg viewBox="0 0 400 270" aria-hidden="true">
            <path
              d="M200 38 280 72v75c0 50-80 86-80 86s-80-36-80-86V72Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="m170 132 20 20 43-43" fill="none" stroke="var(--accent)" strokeWidth="3" />
            <path
              d="M10 85h105m170 0h105M10 195h122m137 0h121"
              stroke="currentColor"
              strokeDasharray="3 6"
            />
          </svg>
          <span className="diagram-note note-left">POLICY</span>
          <span className="diagram-note note-right">EVIDENCE</span>
          <span className="diagram-footer">SIGNAL → CONTEXT → HUMAN REVIEW</span>
        </div>
      ) : id === 'queuezero' ? (
        <div className="flow-diagram">
          {['SENSE', 'PREDICT', 'SIMULATE', 'OPTIMIZE', 'ACT', 'MEASURE'].map((s, i) => (
            <div key={s} className="flow-step">
              <span className="flow-number">0{i + 1}</span>
              <div className={`flow-bars bars-${i}`}>
                {Array.from({ length: 7 }, (_, j) => (
                  <i key={j} style={{ height: `${15 + ((j * 17 + i * 11) % 65)}%` }} />
                ))}
              </div>
              <span>{s}</span>
            </div>
          ))}
          <div className="flow-loop">
            ↳ ANALYTICAL TOOLS <span>HUMAN APPROVAL ↲</span>
          </div>
          <div className="flow-travellers" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : id === 'scamcheck' ? (
        <div className="evidence-diagram">
          <div className="evidence-input">
            URL / TEXT / IMAGE / PDF <span>↓</span>
          </div>
          <div className="evidence-core">
            <span>SC</span>
            <div>
              VERIFY THE CLAIM.
              <br />
              SHOW THE EVIDENCE.
            </div>
          </div>
          <div className="evidence-trace" aria-hidden="true">
            <i />
          </div>
          <div className="evidence-states">
            {['SUPPORTED', 'NOT VERIFIED', 'INFERRED'].map((s) => (
              <span key={s}>
                <i />
                {s}
              </span>
            ))}
          </div>
        </div>
      ) : id === 'farmigle' ? (
        <div className="farm-diagram">
          <svg viewBox="0 0 500 250" fill="none" aria-hidden="true">
            <defs>
              <pattern
                id={`farm-grid-${illustrationId}`}
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <path d="M22 0H0v22" stroke="currentColor" strokeOpacity=".08" />
              </pattern>
            </defs>
            <rect width="500" height="250" fill={`url(#farm-grid-${illustrationId})`} />
            <g transform="translate(85,12)">
              <path
                d="m45 24 193 8 63 50-10 118-99 22-165-41-18-99Z"
                stroke="currentColor"
                strokeOpacity=".45"
              />
              <path
                className="farm-zone zone-one"
                d="m46 26 80 5-8 89-91-37Z"
                fill="var(--accent)"
                fillOpacity=".12"
                stroke="var(--accent)"
                strokeOpacity=".5"
              />
              <path
                className="farm-zone zone-two"
                d="m133 33 104 0 59 49-110 29-63 8Z"
                fill="var(--accent)"
                fillOpacity=".25"
                stroke="var(--accent)"
                strokeOpacity=".6"
              />
              <path
                className="farm-zone zone-three"
                d="m27 88 92 39 57 90-149-37-15-94Z"
                fill="var(--accent)"
                fillOpacity=".2"
                stroke="var(--accent)"
                strokeOpacity=".4"
              />
              <path
                className="farm-zone zone-four"
                d="m126 126 63-6 107-30-11 104-95 20Z"
                fill="var(--accent)"
                fillOpacity=".08"
                stroke="var(--accent)"
                strokeOpacity=".4"
              />
              <circle cx="175" cy="88" r="4" fill="var(--amber)" />
              <circle cx="72" cy="145" r="4" fill="var(--amber)" />
            </g>
          </svg>
          <div className="farm-sources">
            <span>SATELLITE</span>
            <span>AERIAL</span>
            <span>GROUND</span>
            <span>CONTEXT</span>
          </div>
          <div className="farm-twin-label">
            PERSISTENT TWIN <span>← IMMUTABLE RUNS</span>
          </div>
        </div>
      ) : id === 'infraguard' ? (
        <div className="infra-diagram">
          <div className="inspection-grid" />
          <svg viewBox="0 0 420 230" aria-hidden="true">
            <path
              d="m98 30 19 29-12 25 26 36-3 20 42 22-14 27 11 21"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="m111 85 38-11 19-21m-31 85 49 7 21 26"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <rect
              className="inspection-box"
              x="81"
              y="47"
              width="114"
              height="136"
              stroke="var(--amber)"
              strokeWidth="1.5"
              fill="var(--amber)"
              fillOpacity=".04"
            />
            <path
              d="M230 71h115M230 95h77M230 119h97M230 143h54"
              stroke="currentColor"
              strokeOpacity=".2"
            />
          </svg>
          <div className="inspection-caption">
            <span>FRAME → TRACK → FINDING</span>
            <span>INSPECTOR REVIEW</span>
          </div>
        </div>
      ) : id === 'chipx' ? (
        <div className="fusion-diagram">
          <div className="fusion-path">
            <span>LEARNED</span>
            <div className="pixel-field learned" />
          </div>
          <div className="restoration-pixels" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${i * 80}ms` }} />
            ))}
          </div>
          <span className="fusion-plus">+</span>
          <div className="fusion-path">
            <span>BICUBIC</span>
            <div className="pixel-field bicubic" />
          </div>
          <div className="fusion-gate">
            α <span>ADAPTIVE BLENDING WEIGHT</span>
          </div>
        </div>
      ) : id === 'oncotwin' ? (
        <div className="onco-diagram">
          <div className="scan-rings">
            <i />
            <i />
            <i />
            <span>
              3D
              <br />
              TWIN
            </span>
          </div>
          <div className="trajectory">
            <svg viewBox="0 0 240 140" aria-hidden="true">
              <path d="M0 20H240M0 70H240M0 120H240" stroke="currentColor" strokeOpacity=".1" />
              <path
                d="m10 30 50 21 50 45 50-9 50 35"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
              />
            </svg>
            <span>PROPOSED LONGITUDINAL LAYER</span>
          </div>
        </div>
      ) : id === '3-sports-academy' ? (
        <div className="academy-diagram">
          <div className="registration-slips" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="pitch-lines">
            <span>3</span>
          </div>
          <div className="academy-workflow">
            <span>REGISTRATION</span>
            <i>↓</i>
            <span>API / PERSISTENCE</span>
            <i>↓</i>
            <span>SHEETS + EMAIL</span>
          </div>
        </div>
      ) : (
        <div className="style-diagram">
          <svg className="style-silhouette" viewBox="0 0 120 150" aria-hidden="true">
            <path
              d="M41 22 26 32 10 59l18 12 10-17-5 74h54l-5-74 10 17 18-12-16-27-15-10c-6 13-32 13-38 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="M37 88h46M42 100h36" stroke="var(--accent)" strokeWidth="2" />
          </svg>
          <div className="style-swatches">
            <i />
            <i />
            <i />
          </div>
          <span>WARDROBE → OUTFIT → VISUALIZATION</span>
          <strong>Wear your context.</strong>
        </div>
      )}
      <div className="visual-bottomline">
        <span>INPUT → LOGIC → INTERFACE</span>
        <span>↗</span>
      </div>
    </div>
  );
}
