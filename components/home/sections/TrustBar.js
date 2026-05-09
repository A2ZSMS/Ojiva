const TRUST_STATS = [
  { val: '10M+',  lbl: 'Messages / day' },
  { val: '500+',  lbl: 'Businesses trust us' },
  { val: '99.9%', lbl: 'Uptime SLA' },
  { val: '4',     lbl: 'Channels — one API' },
  { val: 'AES-256', lbl: 'Encryption standard' },
];

export default function TrustBar() {
  return (
    <div className="hp-trust-bar" aria-label="Platform statistics">
      <div className="container">
        <div className="hp-trust-inner">
          {TRUST_STATS.map(({ val, lbl }) => (
            <div key={lbl} className="hp-trust-item">
              <span className="hp-trust-val">{val}</span>
              <span className="hp-trust-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
