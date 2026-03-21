import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { ParallaxSection, ScalePop } from '@/components/ui/Animations';

export default function ApiSection() {
  return (
    <section className="py-5 bg-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-5">
            <ParallaxSection>
              <SectionHeading tag="Developer First" title="Integrate SMS in Minutes" subtitle="Our REST API, SDK libraries, and full documentation get you sending in one afternoon." />
              <ul className="feature-deep-list mt-4">
                {['REST API with OpenAPI 3.0 spec', 'SDK for Node.js, Python, PHP, Java', 'Sandbox environment for testing', 'Webhooks for delivery receipts', '99.99% API uptime SLA'].map((pt) => (
                  <li key={pt}><span className="check-icon">✓</span>{pt}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">Get API Key →</Link>
            </ParallaxSection>
          </div>
          <div className="col-12 col-lg-7">
            <ScalePop>
              <div className="api-snippet-wrap">
                <div className="api-snippet-header">
                  <div className="api-snippet-dots">
                    <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                  </div>
                  <span className="api-snippet-label">Send SMS — Node.js</span>
                </div>
                <div className="api-snippet-body">
                  <div><span className="api-comment">// npm install ojiva-ai</span></div>
                  <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'} <span className="api-key">apiKey</span>: <span className="api-str">&apos;ojv_live_xxx&apos;</span> {'}'});</div>
                  <br />
                  <div><span className="api-key">await</span> client.sms.<span className="api-method">send</span>({'{'}</div>
                  <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">from</span>: <span className="api-str">&apos;OJIVAI&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">message</span>: <span className="api-str">&apos;Your OTP is {'{'}otp{'}'}. Valid 10 mins.&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">type</span>: <span className="api-str">&apos;transactional&apos;</span></div>
                  <div>{'}'});</div>
                  <br />
                  <div><span className="api-comment">// {'{ id: "msg_01", status: "delivered", latency: "2.3s" }'}</span></div>
                </div>
              </div>
            </ScalePop>
          </div>
        </div>
      </div>
    </section>
  );
}
