const STATS = [
  { val: '94%',   lbl: 'Read Rate'        },
  { val: '3×',    lbl: 'Higher CTR'       },
  { val: '1B+',   lbl: 'Android Users'    },
  { val: 'Verified', lbl: 'Sender ID'     },
  { val: '48 hr', lbl: 'Activation'       },
];

export default function StatsBar() {
  return (
    <div className="slp-stats-bar">
      <div className="container">
        <div className="slp-stats-inner">
          {STATS.map(({ val, lbl }) => (
            <div key={lbl} className="slp-stat">
              <span className="slp-stat-val" style={{ color: '#22d3ee' }}>{val}</span>
              <span className="slp-stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
