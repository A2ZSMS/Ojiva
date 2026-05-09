'use client';

import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp } from '@/components/ui/Animations';

const FEATURES = [
  'REST API with OpenAPI 3.0 spec',
  'SDK for Node.js, Python, PHP, Java',
  'Multi-channel fallback in one call',
  'Webhook for delivery &amp; verification events',
  '99.99% API uptime SLA',
  'Sandbox environment for testing',
];

export default function ApiPreview() {
  return (
    <section className="section-padding bg-section" aria-labelledby="otp-api-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <FadeUp>
              <SectionHeading
                tag="Developer First"
                title="Integrate OTP in Minutes"
                subtitle="A single REST endpoint handles send, verify, and retry — with SDKs for every major language."
              />
              <ul className="feature-deep-list mt-4">
                {FEATURES.map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span><span dangerouslySetInnerHTML={{ __html: pt }} /></li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 d-inline-flex">Get API Key →</Link>
            </FadeUp>
          </div>
          <div className="col-12 col-lg-7">
            <FadeUp delay={0.1}>
              <div className="api-snippet-wrap">
                <div className="api-snippet-header">
                  <div className="api-snippet-dots">
                    <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                    <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', marginLeft: 6 }} />
                    <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e', display: 'inline-block', marginLeft: 6 }} />
                  </div>
                  <span className="api-snippet-label">Verify OTP — Node.js</span>
                </div>
                <div className="api-snippet-body">
                  <div><span className="api-comment">// npm install ojiva-ai</span></div>
                  <div><span className="api-key">const</span> {'{'} OjivaAI {'}'} = <span className="api-method">require</span>(<span className="api-str">&apos;ojiva-ai&apos;</span>);</div>
                  <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'} apiKey: <span className="api-str">&apos;ojv_live_xxx&apos;</span> {'}'});</div>
                  <br />
                  <div><span className="api-comment">// Step 1: Send OTP</span></div>
                  <div><span className="api-key">const</span> result = <span className="api-key">await</span> client.otp.<span className="api-method">send</span>({'{'}</div>
                  <div>&nbsp;&nbsp;to: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                  <div>&nbsp;&nbsp;channel: <span className="api-str">&apos;sms&apos;</span>,</div>
                  <div>&nbsp;&nbsp;length: <span className="api-num">6</span>, expiry: <span className="api-num">120</span></div>
                  <div>{'}'});</div>
                  <br />
                  <div><span className="api-comment">// Step 2: Verify OTP entered by user</span></div>
                  <div><span className="api-key">const</span> verify = <span className="api-key">await</span> client.otp.<span className="api-method">verify</span>({'{'}</div>
                  <div>&nbsp;&nbsp;otp_id: result.otp_id,</div>
                  <div>&nbsp;&nbsp;code: <span className="api-str">&apos;847291&apos;</span></div>
                  <div>{'}'});</div>
                  <br />
                  <div><span className="api-comment">// {'{ verified: true, latency_ms: 312 }'}</span></div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
