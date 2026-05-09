'use client';

import Link from 'next/link';

const HERO_STATS = [
  { value: '<3s', label: 'Delivery time' },
  { value: '99.9%', label: 'Success rate' },
  { value: '3', label: 'OTP channels' },
  { value: '500+', label: 'Businesses trust us' },
];

export default function Hero() {
  return (
    <section className="service-hero" aria-labelledby="otp-hero-heading">
      <div className="container">
        <div className="service-hero-inner">
          <div className="row align-items-center g-5">
            {/* Left: text */}
            <div className="col-12 col-lg-6">
              <div className="service-badge" style={{ background: 'rgba(27,72,224,0.12)', color: '#7aaeff', border: '1px solid rgba(27,72,224,0.25)' }}>
                🔐 OTP &amp; 2FA Solutions
              </div>
              <h1 id="otp-hero-heading" className="service-hero-title">
                <span className="sh-accent sh-accent-sms">OTP &amp; 2FA</span>
                <br />Solutions India
              </h1>
              <p className="service-hero-desc">
                Deliver one-time passwords in under 3 seconds via SMS, WhatsApp, or Voice call. AES-256 encrypted. DLT compliant. Trusted by 500+ businesses.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link href="/contact" className="btn-hero-primary border-0">Get Free API Key →</Link>
                <Link href="/book-demo" className="btn-hero-outline">Book a Demo</Link>
              </div>
              <div className="service-stats-row">
                {HERO_STATS.map(({ value, label }) => (
                  <div key={label} className="service-stat-item">
                    <span className="service-stat-value">{value}</span>
                    <span className="service-stat-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: OTP terminal mockup */}
            <div className="col-12 col-lg-6">
              <div className="api-snippet-wrap">
                <div className="api-snippet-header">
                  <div className="api-snippet-dots">
                    <span className="dot-red" style={{ background: '#ef4444' }} />
                    <span className="dot-yellow" style={{ background: '#f59e0b' }} />
                    <span className="dot-green" style={{ background: '#22c55e' }} />
                  </div>
                  <span className="api-snippet-label">OTP Delivery — Live Request</span>
                </div>
                <div className="api-snippet-body">
                  <div><span className="api-comment">// Send OTP via SMS, WhatsApp or Voice</span></div>
                  <div><span className="api-key">POST</span> <span className="api-str">https://api.ojiva.ai/v1/otp/send</span></div>
                  <div><span className="api-key">Authorization</span>: Bearer <span className="api-str">ojv_live_xxx</span></div>
                  <br />
                  <div>{'{'}</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;to&quot;</span>: <span className="api-str">&quot;+919876543210&quot;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;channel&quot;</span>: <span className="api-str">&quot;sms&quot;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;length&quot;</span>: <span className="api-num">6</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;expiry&quot;</span>: <span className="api-num">120</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;template_id&quot;</span>: <span className="api-str">&quot;otp_login_v2&quot;</span></div>
                  <div>{'}'}</div>
                  <br />
                  <div><span className="api-comment">// 200 OK — response</span></div>
                  <div>{'{'}</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;status&quot;</span>: <span className="api-str">&quot;sent&quot;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;otp_id&quot;</span>: <span className="api-str">&quot;otp_01jx8k2m&quot;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;latency_ms&quot;</span>: <span className="api-num">284</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">&quot;expires_at&quot;</span>: <span className="api-str">&quot;2026-05-02T10:03:00Z&quot;</span></div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
