'use client';
import { useCallback, useState } from 'react';
import { DemoNote, useDemoClock, useExperienceActivity } from './activity';
const stages = [
  'Registration',
  'Validation',
  'Upload',
  'Cloudinary',
  'Database',
  'Google Sheets',
  'Email',
];
const captions = [
  'A synthetic registration enters the workflow.',
  'Validate fields before processing.',
  'Prepare media for upload.',
  'Store uploaded media with Cloudinary.',
  'Persist the registration in MongoDB Atlas.',
  'Synchronize the record through Google Sheets API.',
  'Send a confirmation through Resend.',
];
export default function Academy() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const { reduced } = useExperienceActivity();
  const tick = useCallback(() => setStep((previous) => Math.min(previous + 1, 7)), []);
  useDemoClock(running && step < 7, tick, 850);
  return (
    <>
      <div className="demo-heading">
        <strong>One registration. Every handoff.</strong>
        <span>WORKFLOW DEMO</span>
      </div>
      <div className="registration-record">
        <div className="record-mark">
          3<span>SPORTS ACADEMY</span>
        </div>
        <div>
          <span className="demo-label">SYNTHETIC REGISTRATION</span>
          <strong>Demo player</strong>
          <p>Sample media · no personal data</p>
        </div>
        <span className="record-state">
          {step === 7 ? '✓ COMPLETE' : step < 0 ? 'READY' : String(step + 1).padStart(2, '0')}
        </span>
      </div>
      <ol className="registration-flow">
        {stages.map((stage, i) => (
          <li key={stage} data-state={step > i ? 'complete' : step === i ? 'current' : 'waiting'}>
            <i>{step > i ? '✓' : String(i + 1).padStart(2, '0')}</i>
            <div>
              <strong>{stage}</strong>
              <span>
                {i === 4
                  ? 'MongoDB Atlas'
                  : i === 6
                    ? 'Resend'
                    : i === 1
                      ? 'Node / Express'
                      : i === 0
                        ? 'React / Vite'
                        : i === 5
                          ? 'API sync'
                          : i === 3
                            ? 'Media storage'
                            : 'Sample media'}
              </span>
            </div>
            {step === i && (
              <span className="moving-record" aria-hidden="true">
                ↳
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className="demo-controls">
        <button
          className="demo-primary"
          onClick={() => {
            if (step < 0 || step === 7) {
              setStep(0);
              setRunning(!reduced);
            } else if (reduced) tick();
            else setRunning(!running);
          }}
        >
          {step < 0 || step === 7
            ? 'Start registration'
            : reduced
              ? 'Advance registration'
              : running
                ? 'Pause'
                : 'Continue'}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setStep(Math.min(step + 1, 7));
          }}
          disabled={step === 7}
        >
          Next stage
        </button>
        <button
          onClick={() => {
            setStep(-1);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </div>
      <div className="demo-context" role="status">
        <strong>
          {step === 7
            ? 'Demo registration completed'
            : step < 0
              ? 'Try the registration journey'
              : stages[step]}
        </strong>
        <p>
          {step === 7
            ? 'Every handoff is illustrated. Nothing was uploaded, stored or emailed.'
            : step < 0
              ? 'Start the demo or advance one stage at a time.'
              : captions[step]}
        </p>
      </div>
      <DemoNote>
        The client workflow is documented; this preview uses a local synthetic record and makes no
        service calls.
      </DemoNote>
    </>
  );
}
