import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { SlideLeft, SlideRight, ScalePop } from '@/components/ui/Animations';

export default function ApiSection() {
  return (
    <section className="py-5 bg-section" aria-labelledby="rcs-api-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <SlideLeft className="col-12 col-lg-5">
            <SectionHeading tag="Developer First" title="Send Rich RCS Cards with One API Call" subtitle="Our RCS API follows the same pattern as SMS and WhatsApp APIs — minimal learning curve." />
            <ul className="feature-deep-list mt-4">
              {['Unified API for SMS, WhatsApp & RCS', 'Auto-fallback to SMS if RCS unavailable', 'Rich card & carousel builder', 'Delivery and interaction webhooks', 'Full sandbox for testing'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 rcs-btn-primary d-inline-flex">Get RCS API Access →</Link>
          </SlideLeft>
          <SlideRight className="col-12 col-lg-7">

            <ScalePop>
              <div className="api-snippet-wrap">
                <div className="api-snippet-header">
                  <div className="api-snippet-dots">
                    <span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" />
                  </div>
                  <span className="api-snippet-label">Send RCS Rich Card — Node.js</span>
                </div>
                <div className="api-snippet-body">
                  <div><span className="api-comment">// Unified API — same client, multiple channels</span></div>
                  <div><span className="api-key">await</span> client.rcs.<span className="api-method">sendCard</span>({'{'}</div>
                  <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">card</span>: {'{'}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">title</span>: <span className="api-str">&apos;Diwali Sale — 30% OFF&apos;</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">description</span>: <span className="api-str">&apos;Shop your favourites today!&apos;</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">imageUrl</span>: <span className="api-str">&apos;https://cdn.ojiva.ai/diwali.jpg&apos;</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="api-key">buttons</span>: [</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="api-key">type</span>: <span className="api-str">&apos;url&apos;</span>, <span className="api-key">label</span>: <span className="api-str">&apos;Shop Now&apos;</span>, <span className="api-key">url</span>: <span className="api-str">&apos;https://store.ojiva.ai&apos;</span> {'}'}</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;]</div>
                  <div>&nbsp;&nbsp;{'}'}</div>
                  <div>{'}'});</div>
                  <br />
                  <div><span className="api-comment">// {'{ id: "rcs_01", status: "delivered", type: "rich_card" }'}</span></div>
                </div>
              </div>
            </ScalePop>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
