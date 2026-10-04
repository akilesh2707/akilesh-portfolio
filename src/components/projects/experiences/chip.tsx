'use client';
import { useId, useState } from 'react';
import { DemoNote } from './activity';
function tone(x: number, y: number) {
  const mountain = 113 - 42 * Math.sin(x / 58) - 25 * Math.cos(x / 29);
  if (y < mountain) return Math.round(194 - y * 0.25);
  if (y < 172) return Math.round(73 + ((x + y) % 29));
  if (x > 116 && x < 225 && y > 191 && y < 249) return x % 22 < 5 || y % 23 < 4 ? 60 : 145;
  return Math.round(109 + 30 * Math.sin(x / 35 + y / 14));
}
export default function Chip() {
  const [split, setSplit] = useState(50);
  const id = useId();
  return (
    <>
      <div className="demo-heading">
        <strong>Recover the finer details.</strong>
        <span>COMPARISON DEMO</span>
      </div>
      <div className="restoration-comparison">
        <svg
          viewBox="0 0 360 270"
          role="img"
          aria-label="Synthetic grayscale landscape with coarse and fine pixel representations"
        >
          <defs>
            <clipPath id={`chip-clip-${id}`}>
              <rect width={(360 * split) / 100} height="270" />
            </clipPath>
          </defs>
          <g>
            <rect width="360" height="270" fill="#bfc0be" />
            <path
              d={`M0 172 L${Array.from({ length: 73 }, (_, i) => `${i * 5} ${(113 - 42 * Math.sin((i * 5) / 58) - 25 * Math.cos((i * 5) / 29)).toFixed(2)}`).join(' L')} L360 172Z`}
              fill="#545552"
            />
            <path d="M0 172H360V270H0Z" fill="#82847f" />
            {Array.from({ length: 24 }, (_, i) => (
              <path
                key={i}
                d={`M${(i % 3) * 11} ${176 + i * 4}h${330 - (i % 5) * 13}`}
                stroke={i % 2 ? '#a0a19c' : '#60625f'}
                strokeWidth="1"
              />
            ))}
            <rect x="118" y="192" width="108" height="57" fill="#929390" />
            <path
              d="M116 192H228m-112 23h112m-112 22h112M132 192v57m22-57v57m22-57v57m22-57v57m22-57v57"
              stroke="#3c3d3b"
              strokeWidth="3"
            />
            <path d="M112 250h121" stroke="#c3c4be" strokeWidth="3" />
          </g>
          <g clipPath={`url(#chip-clip-${id})`}>
            {Array.from({ length: 120 }, (_, i) => {
              const x = (i % 12) * 30,
                y = Math.floor(i / 12) * 27;
              const v = tone(x + 15, y + 14);
              return (
                <rect key={i} x={x} y={y} width="30.5" height="27.5" fill={`rgb(${v},${v},${v})`} />
              );
            })}
          </g>
          <line
            x1={(360 * split) / 100}
            x2={(360 * split) / 100}
            y1="0"
            y2="270"
            stroke="var(--accent)"
            strokeWidth="2"
          />
        </svg>
        <span className="comparison-before">DEGRADED INPUT</span>
        <span className="comparison-after">RESTORED CONCEPT</span>
        <i className="comparison-handle" style={{ left: `${split}%` }} aria-hidden="true">
          ↔
        </i>
      </div>
      <label className="comparison-control">
        Reveal the restoration{' '}
        <input
          aria-label="Before and after comparison"
          type="range"
          min="0"
          max="100"
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
        />
      </label>
      <div className="restoration-pipeline">
        <span>Input</span>
        <i>→</i>
        <span>Validate</span>
        <i>→</i>
        <span>DSP</span>
        <i>→</i>
        <span className={split < 70 ? 'pipeline-lit' : ''}>AI + Bicubic</span>
        <i>→</i>
        <span className={split < 40 ? 'pipeline-lit' : ''}>Blend</span>
        <i>→</i>
        <span>Output</span>
      </div>
      <div className="demo-context">
        <strong>α = Adaptive Blending Weight</strong>
        <p>
          The documented gate blends the learned restoration with a Bicubic baseline. α is not a
          confidence score.
        </p>
      </div>
      <DemoNote>
        Hand-built pixel comparison, not model output or a benchmark. Real pipeline accepts and
        validates grayscale .npy arrays.
      </DemoNote>
    </>
  );
}
