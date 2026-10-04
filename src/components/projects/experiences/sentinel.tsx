'use client';
import { useState } from 'react';
import { DemoNote } from './activity';
const events = [
  {
    name: 'Face signal',
    explanation: 'This scripted frame represents a face-presence signal. No camera is accessed.',
  },
  {
    name: 'Head pose',
    explanation: 'A pose signal needs assessment policy and context before human review.',
  },
  {
    name: 'Multiple faces',
    explanation:
      'An illustrative multi-face event creates an evidence marker, not a cheating verdict.',
  },
  {
    name: 'Tab change',
    explanation: 'A scripted browser-focus event is attached to the session for organizer review.',
  },
];
export default function Sentinel() {
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState<number | null>(null);
  const [event, setEvent] = useState(0);
  return (
    <>
      <div className="demo-heading">
        <strong>An assessment, in progress.</strong>
        <span>CONCEPT PREVIEW</span>
      </div>
      <div className={`assessment-product ${started ? 'session-active' : ''}`}>
        <div className="assessment-question">
          <span className="demo-label">QUESTION 01 / SAMPLE</span>
          <h4>Which structure processes items in arrival order?</h4>
          <div className="assessment-answers">
            {['Stack', 'Queue', 'Tree'].map((text, i) => (
              <button key={text} aria-pressed={answer === i} onClick={() => setAnswer(i)}>
                <i>{answer === i ? '●' : '○'}</i>
                {text}
              </button>
            ))}
          </div>
          <p>
            {answer === null
              ? 'Choose an answer to try the assessment.'
              : `“${['Stack', 'Queue', 'Tree'][answer]}” selected. Demo answer saved locally.`}
          </p>
        </div>
        <div className="assessment-monitor">
          <div className="candidate-frame">
            <svg
              viewBox="0 0 160 150"
              role="img"
              aria-label="Illustrated candidate silhouette, not a camera feed"
            >
              <circle cx="80" cy="55" r="25" />
              <path d="M30 145v-18c0-52 100-52 100 0v18" />
              <path
                className="face-corners"
                d="M45 30V20h15m55 10V20h-15M45 80v10h15m55-10v10h-15"
              />
            </svg>
            {started && <i className="camera-sweep" />}
            <span>{started ? 'DEMO FRAME ACTIVE' : 'CAMERA ILLUSTRATION'}</span>
          </div>
          <p className="monitor-state">
            {started ? '● Monitoring preview active' : '○ Session ready'}
          </p>
          <p>Policy → signal → review</p>
        </div>
      </div>
      <div className="demo-controls">
        <button
          className="demo-primary"
          onClick={() => {
            setStarted(!started);
            setEvent(0);
          }}
        >
          {started ? 'End preview' : 'Begin assessment'}
        </button>
        <span>{started ? 'Select an event below ↓' : 'Try a sample session'}</span>
      </div>
      <div className="assessment-events" role="group" aria-label="Illustrative monitoring events">
        {events.map((item, i) => (
          <button
            key={item.name}
            disabled={!started}
            aria-pressed={started && event === i}
            onClick={() => setEvent(i)}
          >
            {i === 0 ? '◉' : '◇'} {item.name}
          </button>
        ))}
      </div>
      <div className="demo-context" role="status">
        <strong>
          {started
            ? event > 0
              ? 'Evidence marker attached'
              : 'Normal demo state'
            : 'No live monitoring'}
        </strong>
        <p>
          {started
            ? events[event].explanation
            : 'Start the preview to explore scripted signals and their context.'}
        </p>
      </div>
      <DemoNote>
        Proposed capabilities. Scripted states; no live detection or camera access.
      </DemoNote>
    </>
  );
}
