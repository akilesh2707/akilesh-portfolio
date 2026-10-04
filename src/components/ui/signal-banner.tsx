export function SignalBanner({ alternate = false }: { alternate?: boolean }) {
  const text = alternate
    ? 'PROBLEM → EVIDENCE → SYSTEM → INTERFACE'
    : 'BUILD → TEST → LEARN → ITERATE';
  return (
    <div className={`signal-banner ${alternate ? 'alternate' : ''}`} aria-label={text}>
      <div aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i}>
            {text}
            <i>✳</i>
          </span>
        ))}
      </div>
    </div>
  );
}
