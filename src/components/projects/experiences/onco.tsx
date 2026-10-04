'use client';
import { useState } from 'react';
import { DemoNote } from './activity';
export default function Onco() {
  const [scan, setScan] = useState(0);
  const [overlay, setOverlay] = useState(true);
  const [view, setView] = useState('Segmentation');
  return (
    <>
      <div className="demo-heading">
        <strong>One view. A longer story.</strong>
        <span>RESEARCH CONCEPT</span>
      </div>
      <div className={`medical-viewport ${view === 'Twin layers' ? 'layered-scan' : ''}`}>
        <div className="scan-layer scan-layer-back" />
        <div className="scan-layer scan-layer-middle" />
        <svg
          viewBox="0 0 320 270"
          role="img"
          aria-label={`Abstract synthetic medical scan ${scan + 1}; ${overlay ? 'segmentation overlay shown' : 'overlay hidden'}. Not patient imaging.`}
        >
          <defs>
            <radialGradient id={`scan-tone-${scan}`}>
              <stop offset="0" stopColor="#aeb4b3" />
              <stop offset=".65" stopColor="#666f70" />
              <stop offset="1" stopColor="#303b3f" />
            </radialGradient>
          </defs>
          <ellipse cx="160" cy="135" rx="132" ry="112" fill={`url(#scan-tone-${scan})`} />
          <ellipse
            cx="160"
            cy="135"
            rx="115"
            ry="98"
            fill="none"
            stroke="#a5abab"
            strokeWidth="3"
          />
          <path
            d="M151 65C113 36 61 68 61 128c0 63 50 96 85 68ZM169 65c38-29 90 3 90 63 0 63-50 96-85 68Z"
            fill="#1e2b2e"
          />
          <ellipse cx="160" cy="168" rx="18" ry="25" fill="#c8cecb" />
          <ellipse cx="160" cy="170" rx="8" ry="10" fill="#7b8586" />
          <path d="M146 104q14-15 28 0v27h-28Z" fill="#929c99" />
          {overlay && (
            <g className="segmentation-region">
              <ellipse
                cx={101 + scan * 3}
                cy={137 - scan * 3}
                rx={25 - scan * 4}
                ry={21 - scan * 3}
                fill="var(--scan-accent)"
                fillOpacity=".45"
                stroke="var(--scan-accent)"
                strokeWidth="2"
              />
              <path
                d={`M${128 + scan * 2} ${130 - scan * 3}h33l16-18h54`}
                fill="none"
                stroke="var(--scan-accent)"
                strokeWidth="1"
              />
              <text x="183" y="105" fill="var(--scan-accent)" fontSize="9">
                DEMO REGION
              </text>
            </g>
          )}
        </svg>
        <span>ABSTRACT SCAN / NOT PATIENT DATA</span>
      </div>
      <div className="scan-timeline" role="group" aria-label="Synthetic longitudinal scan timeline">
        {[0, 1, 2].map((i) => (
          <button key={i} aria-pressed={scan === i} onClick={() => setScan(i)}>
            <i />
            <strong>Scan 0{i + 1}</strong>
            <span>{['Baseline', 'Follow-up', 'Later view'][i]}</span>
          </button>
        ))}
      </div>
      <div className="demo-controls">
        <button aria-pressed={overlay} onClick={() => setOverlay(!overlay)}>
          {overlay ? 'Hide' : 'Show'} segmentation
        </button>
        <button
          aria-pressed={view === 'Twin layers'}
          onClick={() => setView(view === 'Twin layers' ? 'Segmentation' : 'Twin layers')}
        >
          Twin layers
        </button>
      </div>
      <div className="scan-progression">
        <span>Illustrative region extent</span>
        <div aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <i
              key={i}
              className={scan === i ? 'chosen' : ''}
              style={{ height: `${40 - i * 9}px` }}
            />
          ))}
        </div>
        <p>
          Imaging → segmentation → quantification → longitudinal view. Simulation remains a research
          direction.
        </p>
      </div>
      <DemoNote>
        Hand-drawn scans and progression; no diagnosis, treatment advice or clinical outcome.
      </DemoNote>
    </>
  );
}
