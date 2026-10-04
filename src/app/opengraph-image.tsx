import { ImageResponse } from 'next/og';
export const alt = 'Akilesh S — System / Signal / Flow. Software Systems & Applied AI.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#101314',
        color: '#f4f1ea',
        padding: '65px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, letterSpacing: 4 }}
      >
        <span>SOFTWARE SYSTEMS / APPLIED AI</span>
        <span>COIMBATORE, IN</span>
      </div>
      <div style={{ display: 'flex', fontSize: 150, fontWeight: 800, letterSpacing: -9 }}>
        AKILESH S<span style={{ color: '#5887ff' }}>.</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 38, maxWidth: 700 }}>
          <span>Complex problems.</span>
          <span>Practical software systems.</span>
        </div>
        <div style={{ color: '#5887ff', fontSize: 20 }}>SYSTEM / SIGNAL / FLOW ↗</div>
      </div>
    </div>,
    size,
  );
}
