'use client';

export function CheckMark({ color = '#1B48E0' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FeatureValue({ value, highlightColor }) {
  if (value === true) return <CheckMark color={highlightColor} />;
  if (value === false) {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="9" fill="rgba(0,0,0,0.04)" />
        <path d="M6 9h6" stroke="#c4c9d4" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#4b5563' }}>{value}</span>;
}

export const CHANNEL_ACCENTS = {
  SMS: '#1B48E0',
  WhatsApp: '#25D366',
  RCS: '#FF6D42',
  Voice: '#a78bfa',
};
