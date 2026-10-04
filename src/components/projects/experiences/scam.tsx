'use client';
import { useState } from 'react';
import { DemoNote } from './activity';
const evidence = [
  {
    name: 'Website',
    state: 'Observed',
    detail:
      'The sample page describes an opportunity. Page content alone does not establish credibility.',
  },
  {
    name: 'Domain',
    state: 'Not verified',
    detail: 'Independent ownership evidence is missing from this invented example.',
  },
  {
    name: 'Organization',
    state: 'Not verified',
    detail: 'The fictional organization has no independent source in this demo.',
  },
  {
    name: 'Claims',
    state: 'Inferred',
    detail: 'A promise on the sample page needs corroborating evidence.',
  },
  {
    name: 'Payment context',
    state: 'Observed',
    detail: 'The sample request asks for an advance payment. Context and verification matter.',
  },
];
export default function Scam() {
  const [input, setInput] = useState('URL');
  const [selected, setSelected] = useState(0);
  const [built, setBuilt] = useState(1);
  return (
    <>
      <div className="demo-heading">
        <strong>Follow the evidence.</strong>
        <span>LOCAL DEMO</span>
      </div>
      <div className="evidence-inputs" role="group" aria-label="Sample investigation input">
        {['Text', 'URL', 'Screenshot', 'PDF', 'Webpage'].map((type) => (
          <button
            key={type}
            aria-pressed={input === type}
            onClick={() => {
              setInput(type);
              setBuilt(1);
              setSelected(0);
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="investigation-board">
        <div className="investigation-target">
          <span className="demo-label">{input.toUpperCase()} / FICTIONAL TARGET</span>
          <strong>Demo opportunity</strong>
          <p>
            A promise. A payment request.
            <br />
            What can we verify?
          </p>
        </div>
        <div className="evidence-tree">
          {evidence.map((item, i) => (
            <button
              key={item.name}
              className={i < built ? 'evidence-found' : ''}
              data-related={
                i < built &&
                (selected === 3
                  ? [1, 2, 4].includes(i)
                  : selected === 4
                    ? i === 3
                    : selected > 0
                      ? i === 0
                      : false)
              }
              aria-pressed={selected === i}
              disabled={i >= built}
              onClick={() => setSelected(i)}
            >
              <span className="evidence-node">{i < built ? '↳' : '·'}</span>
              <strong>{item.name}</strong>
              <small>{i < built ? item.state : 'Awaiting evidence'}</small>
            </button>
          ))}
        </div>
      </div>
      <div className="demo-controls">
        <button
          className="demo-primary"
          onClick={() => {
            setBuilt(Math.min(5, built + 1));
            setSelected(Math.min(4, built));
          }}
          disabled={built === 5}
        >
          Trace next evidence
        </button>
        <button
          onClick={() => {
            setBuilt(1);
            setSelected(0);
          }}
        >
          Restart
        </button>
      </div>
      <div className="demo-context" role="status">
        <strong>
          {evidence[selected].name} · {evidence[selected].state}
        </strong>
        <p>{evidence[selected].detail}</p>
      </div>
      <div className={`risk-assembly ${built === 5 ? 'assembled' : ''}`}>
        <span>
          {built === 5 ? 'Risk reasoning assembled' : `${built} of 5 evidence branches explored`}
        </span>
        <strong>
          {built === 5 ? 'Missing verification → pause and check' : 'Keep tracing before deciding'}
        </strong>
      </div>
      <DemoNote>Invented example; no real organization, investigation or AI request.</DemoNote>
    </>
  );
}
