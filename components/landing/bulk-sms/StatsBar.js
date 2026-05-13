const STATS = [
  { val: '10M+',  lbl: 'Messages / Day'  },
  { val: '500+',  lbl: 'Businesses'      },
  { val: '99%',   lbl: 'Delivery Rate'   },
  { val: '<3 sec', lbl: 'OTP Delivery'  },
  { val: 'DLT',   lbl: 'Registered'      },
  { val: '24/7',  lbl: 'Support'         },
];

export default function StatsBar() {
  return (
    <div className="bs2-stats-bar">
      <div className="container">
        <div className="bs2-stats-inner">
          {STATS.map(({ val, lbl }) => (
            <div key={lbl} className="bs2-stat-item">
              <span className="bs2-stat-val">{val}</span>
              <span className="bs2-stat-lbl">{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
