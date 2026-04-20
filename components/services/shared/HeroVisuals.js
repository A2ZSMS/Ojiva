/* Service hero UI mockups — replaces AI-generated images with professional
   code-driven visuals. Each component is a fully CSS-rendered interface panel. */

const WAVE = [12,22,30,18,34,26,14,32,20,16,28,34,22,12,30,20,26,34,18,24];
const WAVE_DELAYS = [0,.1,.2,.3,.4,.5,.6,.7,.0,.1,.2,.3,.4,.5,.6,.7,.0,.1,.2,.3];

/* ─── SMS Dashboard ───────────────────────────────── */
export function SmsHeroVisual() {
  return (
    <div className="shv-wrap">
      <div className="shv-panel">
        <div className="shv-panel-head">
          <span className="shv-title"><i className="bi bi-bar-chart-fill me-2" style={{color:'#00c8f8'}}/>SMS Dashboard</span>
          <span className="shv-live">Live</span>
        </div>
        <div className="shv-panel-body">

          {/* Campaign rows */}
          {[
            { name: 'Diwali Offer 2025', tag: 'Promo', pct: 94, color: '#00c8f8' },
            { name: 'OTP — Auth',        tag: 'OTP',   pct: 99, color: '#4ade80' },
            { name: 'Shipping Update',   tag: 'Txn',   pct: 88, color: '#a78bfa' },
          ].map(({ name, tag, pct, color }) => (
            <div key={name} className="shv-row">
              <span className="shv-camp-name">{name}</span>
              <span className="shv-tag">{tag}</span>
              <div className="shv-track"><div className="shv-fill" style={{ width: `${pct}%`, background: color }} /></div>
              <span className="shv-pct" style={{ color }}>{pct}%</span>
            </div>
          ))}

          {/* Stats strip */}
          <div className="shv-stats">
            {[
              { n: '2.4M', l: 'Delivered', c: '#4ade80' },
              { n: '18.2K', l: 'Clicks',    c: '#60a5fa' },
              { n: '312',   l: 'Converted', c: '#a78bfa' },
            ].map(({ n, l, c }) => (
              <div key={l} className="shv-stat">
                <span className="shv-stat-n" style={{ color: c }}>{n}</span>
                <span className="shv-stat-l">{l}</span>
              </div>
            ))}
          </div>

          {/* Message preview */}
          <div className="shv-msg">
            <div className="shv-msg-top">
              <span className="shv-sender">OJIVAI</span>
              <span className="shv-ts">Just now</span>
            </div>
            <p className="shv-msg-txt">Hi Priya! 🎉 Get 40% OFF today. Code: <strong>DIWALI40</strong>. Shop → ojiv.ai/d40</p>
          </div>

          {/* Compliance tags */}
          <div className="shv-tags">
            {['✓ DLT Compliant', '✓ 98% Delivery', '✓ 10+ Languages'].map(t => (
              <span key={t} className="shv-mini-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="shv-float shv-float--tr">
        <span className="shv-float-n">2.1s</span>
        <span className="shv-float-l">OTP Speed</span>
      </div>
    </div>
  );
}

/* ─── WhatsApp Chat ───────────────────────────────── */
export function WhatsappHeroVisual() {
  return (
    <div className="shv-wrap">
      <div className="shv-phone">
        {/* Header */}
        <div className="shv-wa-head">
          <div className="shv-wa-avatar">OA</div>
          <div className="shv-wa-info">
            <div className="shv-wa-name">
              Ojiva AI Business
              <span className="shv-verified">✓</span>
            </div>
            <div className="shv-wa-sub">Official Business Account · Online</div>
          </div>
        </div>

        {/* Chat */}
        <div className="shv-chat">
          <div className="shv-bub shv-bub--in">Hi! I want to track my order 📦</div>
          <div className="shv-bub shv-bub--out">
            Sure! Please share your Order ID and I'll get the status instantly. ✓✓
          </div>
          <div className="shv-bub shv-bub--in">Order #OJ8291</div>
          <div className="shv-bub shv-bub--out shv-bub--rich">
            <div className="shv-rich-title">📦 Order #OJ8291</div>
            <div className="shv-rich-row">Status <strong>Out for Delivery</strong></div>
            <div className="shv-rich-row">ETA <strong>Today by 6 PM</strong></div>
            <div className="shv-wa-btns">
              <button className="shv-wa-btn">Track Live</button>
              <button className="shv-wa-btn">Contact Support</button>
            </div>
          </div>
        </div>
      </div>

      <div className="shv-float shv-float--bl">
        <span className="shv-float-n">98%</span>
        <span className="shv-float-l">Open Rate</span>
      </div>
    </div>
  );
}

/* ─── WhatsApp Chatbot ────────────────────────────── */
export function ChatbotHeroVisual() {
  return (
    <div className="shv-wrap">
      <div className="shv-phone">
        {/* Header */}
        <div className="shv-wa-head shv-cb-head">
          <div className="shv-wa-avatar shv-cb-avatar"><i className="bi bi-robot"/></div>
          <div className="shv-wa-info">
            <div className="shv-wa-name">
              Ojiva AI Bot
              <span className="shv-verified shv-verified--cb">✓</span>
            </div>
            <div className="shv-wa-sub">AI-Powered · Replies Instantly</div>
          </div>
          <span className="shv-live shv-live--sm">Online</span>
        </div>

        {/* Chat */}
        <div className="shv-chat">
          <div className="shv-bub shv-bub--in shv-bub--bot">
            👋 Hi! How can I help you today?
          </div>
          <div className="shv-bub shv-bub--out">I want to return a product</div>
          <div className="shv-bub shv-bub--in shv-bub--bot">
            I can help with that! Which option applies to you?
          </div>
          <div className="shv-typing">
            <span/><span/><span/>
          </div>
        </div>

        {/* Quick replies */}
        <div className="shv-qr-list">
          {['🔄 Start Return', '📦 Track Return', '💰 Refund Status'].map(r => (
            <button key={r} className="shv-qr">{r}</button>
          ))}
        </div>
      </div>

      <div className="shv-float shv-float--tr">
        <span className="shv-float-n">87%</span>
        <span className="shv-float-l">Auto-Resolved</span>
      </div>
    </div>
  );
}

/* ─── RCS Rich Card ───────────────────────────────── */
export function RcsHeroVisual() {
  return (
    <div className="shv-wrap">
      <div className="shv-phone">
        {/* Verified brand bar */}
        <div className="shv-rcs-head">
          <div className="shv-rcs-check"><i className="bi bi-patch-check-fill"/></div>
          <div>
            <div className="shv-rcs-brand">Ojiva Retail</div>
            <div className="shv-rcs-sub">Verified Business · Google RCS</div>
          </div>
        </div>

        {/* Rich card */}
        <div className="shv-rcs-body">
          <div className="shv-rcs-card">
            <div className="shv-rcs-img">
              <div className="shv-rcs-img-overlay">
                <span className="shv-rcs-badge">🎉 Diwali Sale</span>
              </div>
              <div className="shv-rcs-img-bg" />
            </div>
            <div className="shv-rcs-content">
              <h4 className="shv-rcs-title">Up to 50% OFF — Today Only</h4>
              <p className="shv-rcs-desc">Shop the biggest sale of the year. Free delivery on orders above ₹499.</p>
              <div className="shv-rcs-actions">
                <button className="shv-rcs-btn shv-rcs-btn--primary">Shop Now</button>
                <button className="shv-rcs-btn shv-rcs-btn--outline">View Catalog</button>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="shv-dots">
            <span className="shv-dot shv-dot--active"/>
            <span className="shv-dot"/>
            <span className="shv-dot"/>
          </div>
        </div>
      </div>

      <div className="shv-float shv-float--bl">
        <span className="shv-float-n">3×</span>
        <span className="shv-float-l">Higher CTR</span>
      </div>
    </div>
  );
}

/* ─── Voice Call Dashboard ────────────────────────── */
export function VoiceHeroVisual() {
  return (
    <div className="shv-wrap">
      <div className="shv-panel">
        <div className="shv-panel-head">
          <span className="shv-title"><i className="bi bi-telephone-fill me-2" style={{color:'#a78bfa'}}/>Call Center Live</span>
          <span className="shv-live">3 Active</span>
        </div>
        <div className="shv-panel-body">

          {/* Active call */}
          <div className="shv-call-card">
            <div className="shv-call-top">
              <span className="shv-call-label">IVR Campaign — OBD</span>
              <span className="shv-call-status"><span className="shv-pulse-dot"/>In Progress</span>
            </div>
            <div className="shv-waveform">
              {WAVE.map((h, i) => (
                <span key={i} className="shv-wbar" style={{ height: h, animationDelay: `${WAVE_DELAYS[i]}s` }} />
              ))}
            </div>
            <div className="shv-call-meta">
              <span>Caller <strong>+91 98765 ×××××</strong></span>
              <span>Duration <strong>2:34</strong></span>
              <span>Step <strong>IVR-3</strong></span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="shv-voice-stats">
            {[
              { n: '4,291', l: "Today's Calls",  c: '#fff'    },
              { n: '89%',   l: 'Answered',        c: '#4ade80' },
              { n: '2:12',  l: 'Avg Duration',    c: '#60a5fa' },
              { n: '96%',   l: 'IVR Completion',  c: '#a78bfa' },
              { n: '0.03%', l: 'Drop Rate',        c: '#fbbf24' },
              { n: '10+',   l: 'Languages',        c: '#f472b6' },
            ].map(({ n, l, c }) => (
              <div key={l} className="shv-vs">
                <span className="shv-vs-n" style={{ color: c }}>{n}</span>
                <span className="shv-vs-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shv-float shv-float--tr">
        <span className="shv-float-n">60%</span>
        <span className="shv-float-l">Cost Saved</span>
      </div>
    </div>
  );
}
