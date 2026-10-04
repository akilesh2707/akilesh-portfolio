'use client';
import { useState } from 'react';
import { methodology } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
const steps = [
  {
    name: 'Explore',
    log: [
      'read specification',
      'inspect repository and source evidence',
      'identify constraints and unknowns',
    ],
    detail: 'Understand the actual problem before generating an implementation.',
  },
  {
    name: 'Implement',
    log: [
      'follow shared standards',
      'build against the agreed contract',
      'preserve documented limitations',
    ],
    detail: 'Turn the specification into small, reviewable changes.',
  },
  {
    name: 'Test',
    log: [
      'check types and lint',
      'exercise failure paths',
      'inspect responsive and accessible behavior',
    ],
    detail: 'Check the behavior, not just whether the code compiles.',
  },
];
export function AIWorkflow() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="ai" className="section ai-section">
      <SectionHeading
        number="03"
        label="AI / A PRACTICAL METHODOLOGY"
        title={
          <>
            More capable tools.
            <br />
            <span className="muted">The same responsibility.</span>
          </>
        }
        description="ChatGPT, Antigravity and Codex are tools in my résumé. This is a conceptual development methodology: clear instructions, grounded context and human review."
      />
      <div className="ai-workspace reveal">
        <div className="orchestration">
          <div className="diagram-heading mono">
            <span>CONCEPTUAL / INTERACTIVE</span>
            <span>SELECT A BRANCH ↓</span>
          </div>
          <div className="orchestrator-person">
            AKILESH <span>Defines the problem</span>
          </div>
          <div className="connector vertical" />
          <div className="orchestrator-core">
            ORCHESTRATOR <span>Shared context & standards</span>
          </div>
          <div className="branch-connectors" />
          <div
            className="agent-branches"
            role="group"
            aria-label="Explore conceptual workflow branches"
          >
            {steps.map((s, i) => (
              <button key={s.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>
                <span>0{i + 1}</span>
                {s.name}
                <i />
              </button>
            ))}
          </div>
          <div className="branch-connectors reversed" />
          <div className="review-node">
            HUMAN REVIEW <span>→ SHIP</span>
          </div>
        </div>
        <div className="workflow-terminal">
          <div className="terminal-bar">
            <span>WORKFLOW.LOG</span>
            <span className="illustrative-label">ILLUSTRATIVE</span>
          </div>
          <div className="workflow-log" aria-live="polite">
            <p className="terminal-command">$ workflow {steps[selected].name.toLowerCase()}</p>
            {steps[selected].log.map((log, i) => (
              <p key={log}>
                <span>0{i + 1}</span> {log}
              </p>
            ))}
            <div className="workflow-outcome">↳ {steps[selected].detail}</div>
          </div>
          <div className="workflow-note">
            A conceptual diagram and sample transcript.
            <br />
            Not a record of a historical agent session.
          </div>
        </div>
      </div>
      <div className="methodology-grid">
        {methodology.map((m, i) => (
          <article className="methodology-item reveal" key={m.title}>
            <span className="mono muted">0{i + 1}</span>
            <h3>{m.title}</h3>
            <p>{m.text}</p>
            <span className="method-command mono">{m.command}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
