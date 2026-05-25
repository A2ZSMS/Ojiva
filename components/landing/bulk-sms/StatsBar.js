const CLIENTS = [
  { name: 'Times Group',     style: { fontFamily: 'Georgia, serif',     fontWeight: 800, letterSpacing: '0.02em' } },
  { name: 'HDFC',            style: { fontFamily: 'Arial, sans-serif',  fontWeight: 900, letterSpacing: '0.08em' } },
  { name: 'AMUL',            style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.12em' } },
  { name: 'TVS',             style: { fontFamily: 'Arial Black, sans-serif', fontWeight: 900, letterSpacing: '0.05em' } },
  { name: 'Muthoot',         style: { fontFamily: 'Georgia, serif',     fontWeight: 800, fontStyle: 'italic'      } },
  { name: 'L&T Finance',     style: { fontFamily: 'Arial, sans-serif',  fontWeight: 800, letterSpacing: '0.04em' } },
  { name: 'ICICI',           style: { fontFamily: 'Verdana, sans-serif',fontWeight: 900, letterSpacing: '0.06em' } },
  { name: 'Apollo',          style: { fontFamily: 'Georgia, serif',     fontWeight: 700, letterSpacing: '0.03em' } },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: '#ffffff',
        padding: '2.5rem 0 2rem',
        borderTop: '1px solid rgba(148,163,184,0.18)',
        borderBottom: '1px solid rgba(148,163,184,0.18)',
      }}
    >
      <div className="container">
        <p
          style={{
            textAlign: 'center',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(100,116,139,0.95)',
            marginBottom: '1.5rem',
          }}
        >
          Trusted by 500+ businesses across India
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 4vw, 3.5rem)',
            opacity: 0.7,
          }}
        >
          {CLIENTS.map(({ name, style }) => (
            <div
              key={name}
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
                color: '#475569',
                whiteSpace: 'nowrap',
                ...style,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
