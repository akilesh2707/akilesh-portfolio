'use client';
import { useId, useState } from 'react';
import { DemoNote } from './activity';
const zones = [
  {
    name: 'A',
    state: 'HARVEST_READY',
    label: 'Harvest ready',
    path: 'M40 45 225 30 213 174 52 185Z',
    x: 133,
    y: 109,
  },
  {
    name: 'B',
    state: 'NEAR_READY',
    label: 'Near ready',
    path: 'M244 29 465 53 430 184 233 173Z',
    x: 342,
    y: 109,
  },
  {
    name: 'C',
    state: 'NOT_READY',
    label: 'Not ready',
    path: 'M54 204 427 202 464 302 69 326Z',
    x: 258,
    y: 259,
  },
];
const layers = ['Satellite', 'Drone', 'Ground', 'Context'];
const explanations: Record<string, string> = {
  Satellite:
    'Satellite evidence supplies scene context. It does not establish ground-truth ripeness.',
  Drone:
    'Aerial observations belong to a zone and an acquisition source. This demo performs no perception inference.',
  Ground: 'Phone images and farmer voice/text observations contribute sourced ground evidence.',
  Context:
    'Weather, soil and crop/history provide context. Missing or stale evidence keeps uncertainty visible.',
};
export default function Farm() {
  const [zone, setZone] = useState(0);
  const [layer, setLayer] = useState('Drone');
  const [published, setPublished] = useState<{ zone: number; layer: string } | null>(null);
  const pattern = useId().replaceAll(':', '');
  return (
    <>
      <div className="demo-heading">
        <strong>A farm, understood through evidence.</strong>
        <span>SYNTHETIC MAP</span>
      </div>
      <div className="farm-map">
        <svg
          viewBox="0 0 510 350"
          role="group"
          aria-label={`Illustrative farm divided into three zones. Selected zone ${zones[zone].name}: ${zones[zone].label}.`}
        >
          <defs>
            <pattern id={pattern} width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="11" r="4" fill="currentColor" opacity=".28" />
            </pattern>
          </defs>
          <path d="M19 23Q205-5 487 35L485 333Q178 364 30 336Z" fill="var(--farm-earth)" />
          <path d="m25 196 421-9m-214-171-13 174" fill="none" stroke="var(--bg)" strokeWidth="13" />
          {zones.map((item, i) => (
            <g
              key={item.name}
              className={`farm-zone ${i === zone ? 'zone-selected' : ''}`}
              data-state={item.state}
              role="button"
              tabIndex={0}
              aria-label={`Select map zone ${item.name}`}
              aria-pressed={zone === i}
              onClick={() => setZone(i)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setZone(i);
                }
              }}
            >
              <path d={item.path} />
              <path d={item.path} fill={`url(#${pattern})`} className="orchard-trees" />
              <text x={item.x} y={item.y} textAnchor="middle">
                ZONE {item.name}
              </text>
              <text className="zone-readiness" x={item.x} y={item.y + 20} textAnchor="middle">
                {item.label}
              </text>
            </g>
          ))}
          {layer === 'Satellite' && (
            <g className="satellite-context">
              <path
                d="M0 80h510M0 160h510M0 240h510M120 0v350M255 0v350M390 0v350"
                stroke="var(--bg)"
                opacity=".25"
              />
              <path
                d="M35 35h35m-35 0v35M475 315h-35m35 0v-35"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
              />
            </g>
          )}
          {layer === 'Drone' && (
            <g>
              <path
                className="drone-trace"
                d={
                  zone === 2
                    ? 'M92 227h303v30H92v30h303'
                    : zone === 0
                      ? 'M68 65h130v35H68v35h130'
                      : 'M262 66h164v34H262v35h150'
                }
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="7 5"
              />
              <circle
                className="drone-marker"
                cx={zones[zone].x}
                cy={zones[zone].y - 37}
                r="8"
                fill="var(--accent)"
              />
            </g>
          )}
          {layer === 'Ground' && (
            <g fill="var(--amber)">
              {[
                [-39, -24],
                [37, 31],
                [3, 56],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={zones[zone].x + x} cy={zones[zone].y + y} r="7" />
                  <circle
                    cx={zones[zone].x + x}
                    cy={zones[zone].y + y}
                    r="12"
                    fill="none"
                    stroke="var(--amber)"
                  />
                </g>
              ))}
            </g>
          )}
          {layer === 'Context' && (
            <g>
              <rect x="311" y="268" width="148" height="45" rx="3" fill="var(--raised)" />
              <text x="324" y="286" className="farm-context-text">
                WEATHER · SOIL
              </text>
              <text x="324" y="303" className="farm-context-text">
                CROP · HISTORY
              </text>
            </g>
          )}
        </svg>
      </div>
      <div className="farm-zone-controls" role="group" aria-label="Select a farm zone">
        {zones.map((item, i) => (
          <button key={item.name} aria-pressed={zone === i} onClick={() => setZone(i)}>
            <strong>Zone {item.name}</strong>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <div className="evidence-inputs" role="group" aria-label="Farm evidence layer">
        {layers.map((item) => (
          <button key={item} aria-pressed={layer === item} onClick={() => setLayer(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="demo-context">
        <strong>
          {layer} evidence · Zone {zones[zone].name}
        </strong>
        <p>{explanations[layer]}</p>
      </div>
      <div className="farm-evidence">
        <span>
          {layer === 'Context'
            ? 'Context, not a direct observation'
            : `${layer} observation · sample provenance`}
        </span>
        <span>Freshness: illustrative · uncertainty retained</span>
      </div>
      <div className="demo-controls">
        <button className="demo-primary" onClick={() => setPublished({ zone, layer })}>
          Fuse & update Twin
        </button>
        <span role="status">
          {published === null
            ? 'Choose evidence, then publish a demo state'
            : `Demo Twin → Zone ${zones[published.zone].name}: ${zones[published.zone].state} · ${published.layer} snapshot`}
        </span>
      </div>
      <DemoNote>
        Invented zones and harvest states; no field measurements, inference or agronomic validation.
        Farmer observations and context complement image evidence.
      </DemoNote>
    </>
  );
}
