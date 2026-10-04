'use client';
import { useCallback, useId, useRef, useState, type CSSProperties } from 'react';
import { DemoNote, useDemoClock, useExperienceActivity } from './activity';
const stations = [
  { name: 'Registration', x: 24, y: 50, capacity: 3 },
  { name: 'Consultation', x: 188, y: 50, capacity: 2 },
  { name: 'Diagnostics', x: 352, y: 50, capacity: 2 },
  { name: 'Pharmacy', x: 352, y: 222, capacity: 2 },
  { name: 'Billing', x: 188, y: 222, capacity: 1 },
];
/** Deterministic demo entities, not hospital data or the project's actual simulation engine. */
export function entityPosition(time: number, entity: number) {
  const progress = ((time + entity * 4) % 50) / 10;
  const index = Math.floor(progress);
  const current = stations[index];
  const next = stations[(index + 1) % stations.length];
  const fraction = Math.max(0, (progress - index - 0.58) / 0.42);
  return {
    index,
    x: current.x + 46 + (next.x - current.x) * fraction,
    y: current.y + 74 + (next.y - current.y) * fraction,
  };
}
export type QueueZeroMode = 'card' | 'case-study';
export default function QueueZeroDigitalTwin({ mode = 'card' }: { mode?: QueueZeroMode }) {
  const flowArrowId = useId();
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState(1);
  const [angle, setAngle] = useState(-28);
  const drag = useRef<{ x: number; angle: number } | null>(null);
  const { reduced } = useExperienceActivity();
  const tick = useCallback(() => setTime((previous) => (previous + 1) % 3600), []);
  useDemoClock(running, tick, 700);
  const entities = Array.from({ length: 12 }, (_, i) => entityPosition(time, i));
  const count = entities.filter((entity) => entity.index === selected).length;
  const station = stations[selected];
  return (
    <>
      <div className="demo-heading">
        <strong>A hospital flow you can explore.</strong>
        <span>SYNTHETIC DIGITAL TWIN</span>
      </div>
      <div className="hospital-toolbar">
        <span>
          DEMO CLOCK{' '}
          <strong>
            {String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}
          </strong>
        </span>
        <span>
          {running && !reduced ? '● RUNNING' : '○ PAUSED'} · {entities.length} demo entities
        </span>
      </div>
      <div
        className="hospital-orbit"
        data-mode={mode}
        onPointerDown={(event) => {
          if (event.target instanceof Element && event.target.closest('button')) return;
          drag.current = { x: event.clientX, angle };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          setAngle(
            Math.max(
              -65,
              Math.min(25, drag.current.angle + (event.clientX - drag.current.x) * 0.25),
            ),
          );
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <div className="hospital-world" style={{ '--orbit-angle': `${angle}deg` } as CSSProperties}>
          <div className="hospital-floor">
            <span className="hospital-floor-title">QUEUEZERO / DEMO WARD</span>
          </div>
          <svg className="hospital-flow" viewBox="0 0 500 350" aria-hidden="true">
            <defs>
              <marker
                id={flowArrowId}
                markerWidth="6"
                markerHeight="6"
                refX="5"
                refY="3"
                orient="auto"
              >
                <path d="m0 0 6 3-6 3Z" fill="var(--accent)" />
              </marker>
            </defs>
            {stations.map((item, i) => {
              const next = stations[(i + 1) % 5];
              return (
                <path
                  key={item.name}
                  className={i === selected ? 'selected-flow' : ''}
                  d={`M${item.x + 46} ${item.y + 74}L${next.x + 46} ${next.y + 74}`}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd={`url(#${flowArrowId})`}
                />
              );
            })}
          </svg>
          {stations.map((item, i) => {
            const occupancy = entities.filter((entity) => entity.index === i).length;
            return (
              <button
                key={item.name}
                className={`hospital-room ${selected === i ? 'room-selected' : ''} ${occupancy > item.capacity ? 'room-congested' : ''}`}
                style={{ left: item.x, top: item.y }}
                aria-label={`Inspect ${item.name} station`}
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
                onPointerEnter={() => setSelected(i)}
              >
                <i className="room-wall room-wall-back" />
                <i className="room-wall room-wall-left" />
                <span className="room-floor">
                  <strong>{String(i + 1).padStart(2, '0')}</strong>
                  <small>{item.name}</small>
                  <i>{occupancy > item.capacity ? 'QUEUE' : 'OPEN'}</i>
                </span>
                <span className="room-desk" />
                <span className="room-roof-edge" />
              </button>
            );
          })}
          {entities.map((entity, i) => (
            <div
              key={i}
              className={`hospital-patient ${entity.index === selected ? 'patient-highlight' : ''}`}
              style={{
                transform: `translate3d(${entity.x + (i % 3) * 9 - 9}px, ${entity.y + (Math.floor(i / 3) % 3) * 9}px, 0) rotateX(-90deg)`,
              }}
              aria-hidden="true"
            >
              <i />
              <span />
            </div>
          ))}
        </div>
      </div>
      <div className="demo-controls">
        <button
          className="demo-primary"
          onClick={() => {
            if (reduced) tick();
            else setRunning(!running);
          }}
        >
          {reduced ? 'Advance demo' : running ? 'Pause simulation' : 'Run simulation'}
        </button>
        <button
          onClick={() => {
            setTime(0);
            setRunning(false);
            setAngle(-28);
          }}
        >
          Reset
        </button>
        <button
          aria-label="Rotate hospital view left"
          onClick={() => setAngle(Math.max(-65, angle - 10))}
        >
          ↶
        </button>
        <button
          aria-label="Rotate hospital view right"
          onClick={() => setAngle(Math.min(25, angle + 10))}
        >
          ↷
        </button>
      </div>
      <div className="hospital-stations" role="group" aria-label="Hospital stations">
        {stations.map((item, i) => (
          <button key={item.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>
            {item.name}
          </button>
        ))}
      </div>
      <div className="demo-context" role="status">
        <strong>
          {station.name} · {count > station.capacity ? 'Queue building' : 'Within demo capacity'}
        </strong>
        <p>
          {count} synthetic entities · {station.capacity} illustrative service slots. Drag the scene
          or use the rotation buttons to change your view.
        </p>
        {mode === 'case-study' && (
          <p className="hospital-next-stage">
            {selected === stations.length - 1
              ? 'Billing completes the journey. Demo entities circulate to keep the flow visible.'
              : `Follow the connection: ${station.name} → ${stations[selected + 1].name}. Selecting a station highlights its outgoing flow and the entities at that stage.`}
          </p>
        )}
      </div>
      <DemoNote>
        Deterministic portfolio simulation; not patient data, real hospital performance, or the
        project’s forecasting engine.
      </DemoNote>
    </>
  );
}
