'use client';
import { useState } from 'react';
import { DemoNote } from './activity';
const stages = ['Scan', 'Detect', 'Classify', 'Severity', 'Track'];
const details = [
  'Inspect the synthetic surface frame.',
  'A scripted box marks a possible defect.',
  'Example classification: surface damage.',
  'Severity is illustrative and requires engineer review.',
  'The same illustrative finding is linked across frames to avoid duplicate counting.',
];
export default function Infra() {
  const [stage, setStage] = useState(0);
  const [frame, setFrame] = useState(0);
  return (
    <>
      <div className="demo-heading">
        <strong>Look closer at the surface.</strong>
        <span>INSPECTION DEMO</span>
      </div>
      <div className="inspection-viewport" data-stage={stage}>
        <svg
          viewBox="0 0 600 300"
          role="img"
          aria-label="Synthetic concrete surface with a marked crack; not a model prediction"
        >
          <defs>
            <pattern id={`concrete-${frame}`} width="35" height="28" patternUnits="userSpaceOnUse">
              <path d="M3 8h3m12 13h2m9-18h2" stroke="#9a9995" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="600" height="300" fill="#b9b8b2" />
          <rect width="600" height="300" fill={`url(#concrete-${frame})`} />
          <path
            d="M0 83h600M0 222h600M182 0v83m236 0v139M138 222v78"
            stroke="#797975"
            strokeWidth="3"
          />
          <g transform={`translate(${frame * 8},0)`}>
            <path
              d="m279 38-18 45 23 29-28 38 13 43-25 34 10 40m14-118 47-14 17-34"
              fill="none"
              stroke="#454543"
              strokeWidth="4"
            />
            {stage > 0 && (
              <g className="defect-mark">
                <rect
                  x="221"
                  y="24"
                  width="122"
                  height="256"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="3"
                  strokeDasharray={stage === 4 ? '6 4' : undefined}
                />
                <rect x="221" y="24" width="122" height="25" fill="var(--amber)" />
                <text x="230" y="41" fontSize="12" fill="var(--bg)">
                  {stage >= 2 ? 'SURFACE DAMAGE' : 'DEMO FINDING'}
                </text>
              </g>
            )}
          </g>
        </svg>
        <i className="inspection-sweep" />
        <span className="inspection-frame-label">
          SYNTHETIC FRAME {String(frame + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="inspection-stages" role="group" aria-label="Inspection stages">
        {stages.map((name, i) => (
          <button key={name} aria-pressed={stage === i} onClick={() => setStage(i)}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {name}
          </button>
        ))}
      </div>
      <div className="demo-controls">
        <button className="demo-primary" onClick={() => setStage((stage + 1) % 5)}>
          {stage === 4 ? 'New inspection' : `Next: ${stages[stage + 1]}`}
        </button>
        <button
          onClick={() => {
            setFrame((frame + 1) % 3);
            setStage(4);
          }}
        >
          Track next frame
        </button>
      </div>
      <div className="demo-context" role="status">
        <strong>{stages[stage]}</strong>
        <p>{details[stage]}</p>
      </div>
      <DemoNote>
        Scripted findings; no inference or accuracy claim. Inspectors retain engineering judgment.
      </DemoNote>
    </>
  );
}
