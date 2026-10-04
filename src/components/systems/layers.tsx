'use client';
import { useState } from 'react';
const layers = [
  {
    name: 'Problem',
    text: 'Define the need, the context and what success can actually mean.',
    example: 'QueueZero · congestion across connected service stages',
  },
  {
    name: 'Data',
    text: 'Track what is known, where it came from and what is missing.',
    example: 'FARMIGLE · source provenance and evidence freshness',
  },
  {
    name: 'Model / logic',
    text: 'Choose an accountable decision process rather than a black box for everything.',
    example: 'ChipX · Ridge gate and continuous adaptive fusion',
  },
  {
    name: 'API',
    text: 'Make the contract explicit and handle invalid inputs and unavailable services.',
    example: 'ScamCheck · bounded extraction and graceful fallbacks',
  },
  {
    name: 'Integration',
    text: 'Isolate external systems so failures and provider changes remain manageable.',
    example: '3 Sports Academy · Sheets, media and transactional email',
  },
  {
    name: 'Interface',
    text: 'Show the decision, its evidence and the next useful action.',
    example: 'FARMIGLE · farmer and officer workflows',
  },
  {
    name: 'Access',
    text: 'Keep protected resources scoped to the people who should use them.',
    example: 'ScamCheck · scoped extension pairing and authorization',
  },
  {
    name: 'Release',
    text: 'A passing local build is one gate. Operational acceptance is another.',
    example: 'FARMIGLE · local verification versus external deployment gates',
  },
];
export function SystemLayers() {
  const [selected, setSelected] = useState(1);
  return (
    <section className="section layers-section">
      <div className="layers-intro reveal">
        <span className="section-label">THE ENGINEERING / BELOW THE SURFACE</span>
        <h2>
          A system is
          <br />
          <span className="muted">every layer.</span>
        </h2>
        <p>Select a layer to see the thinking behind it.</p>
      </div>
      <div className="layers-interactive reveal">
        <div className="layers-list" role="group" aria-label="Explore engineering layers">
          {layers.map((layer, i) => (
            <button key={layer.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>
              <span>0{i + 1}</span>
              <strong>{layer.name}</strong>
              <span>{selected === i ? '↗' : '+'}</span>
            </button>
          ))}
        </div>
        <div className="layer-detail" aria-live="polite">
          <span className="mono">LAYER / 0{selected + 1}</span>
          <h3>{layers[selected].name}</h3>
          <p>{layers[selected].text}</p>
          <div className="layer-example">
            <span className="mono">IN PROJECT CONTEXT</span>
            <p>{layers[selected].example}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
