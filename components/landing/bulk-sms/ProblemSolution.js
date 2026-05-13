const PROBLEMS = [
  { icon: '❌', text: 'Low email open rates — under 20% on average' },
  { icon: '❌', text: 'Cold calls ignored — 90%+ go unanswered' },
  { icon: '❌', text: 'WhatsApp not scalable without API access' },
  { icon: '❌', text: 'No real-time delivery or campaign tracking' },
  { icon: '❌', text: 'DLT compliance issues causing message blocks' },
];

const SOLUTIONS = [
  { icon: '✅', text: '98% SMS open rate — highest of any channel' },
  { icon: '✅', text: 'Reaches 1.2 billion Indian mobiles instantly' },
  { icon: '✅', text: 'DLT compliant — zero blocks, zero legal risk' },
  { icon: '✅', text: 'Real-time dashboard with delivery & CTR reports' },
  { icon: '✅', text: 'Sub-3 second OTP & transactional delivery' },
];

export default function ProblemSolution() {
  return (
    <section className="bs2-section bs2-section--light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="bs2-eyebrow">COMPARE CHANNELS</p>
          <h2 className="bs2-section-title">The Problem &amp; Our Solution</h2>
          <p className="bs2-section-desc">
            Stop losing revenue to low-performing channels. Bulk SMS consistently
            outperforms email, cold calls, and social media for business communication.
          </p>
        </div>

        <div className="bs2-ps-grid">
          {/* Problem column */}
          <div className="bs2-ps-col bs2-ps-col--problem">
            <div className="bs2-ps-col-head">
              <span className="bs2-ps-col-icon">😓</span>
              <div>
                <div className="bs2-ps-col-label">THE PROBLEM</div>
                <div className="bs2-ps-col-title">Other Channels Fall Short</div>
              </div>
            </div>
            <ul className="bs2-ps-list">
              {PROBLEMS.map(({ icon, text }) => (
                <li key={text}>
                  <span className="bs2-ps-icon">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS divider */}
          <div className="bs2-ps-vs">
            <div className="bs2-ps-vs-badge">VS</div>
          </div>

          {/* Solution column */}
          <div className="bs2-ps-col bs2-ps-col--solution">
            <div className="bs2-ps-col-head">
              <span className="bs2-ps-col-icon">🚀</span>
              <div>
                <div className="bs2-ps-col-label" style={{ color: '#1B48E0' }}>OUR SOLUTION</div>
                <div className="bs2-ps-col-title">Ojiva AI Bulk SMS</div>
              </div>
            </div>
            <ul className="bs2-ps-list">
              {SOLUTIONS.map(({ icon, text }) => (
                <li key={text}>
                  <span className="bs2-ps-icon">{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
