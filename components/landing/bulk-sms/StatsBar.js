const STATS = [
  { val: '10M+',  lbl: 'Messages / Day'  },
  { val: '500+',  lbl: 'Businesses'       },
  { val: '99%',   lbl: 'Delivery Rate'    },
  { val: '48 hr', lbl: 'Go-Live Time'     },
  { val: 'DLT',   lbl: 'Registered'       },
];

export default function StatsBar() {
  return (
    <div className="slp-stats-bar">
      <div className="container">
        <div className="slp-stats-inner">
          {STATS.map(({ val, lbl }) => (
            <div key={lbl} className="slp-stat">
              <span className="slp-stat-val">{val}</span>
              <span className="slp-stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
