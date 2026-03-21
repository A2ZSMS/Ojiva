import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { SlideLeft, SlideRight, ScalePop } from '@/components/ui/Animations';

export default function ApiSection() {
  return (
    <section className="py-5 bg-section" aria-labelledby="wa-api-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <SlideLeft className="col-12 col-lg-5">
            <SectionHeading tag="Developer First" title="Send WhatsApp Messages with a Single API Call" subtitle="Our WhatsApp API is REST-based, well-documented, and available with SDKs for every major language." />
            <ul className="feature-deep-list mt-4">
              {['REST API with full OpenAPI spec','SDK for Node.js, Python, PHP, Java','Webhook for delivery & read receipts','Sandbox environment for testing','99.99% API uptime SLA'].map(pt => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Get API Access →</Link>
          </SlideLeft>
          <SlideRight className="col-12 col-lg-7">

            <ScalePop>
              <div className="api-snippet-wrap">
                <div className="api-snippet-header">
                  <div className="api-snippet-dots"><span className="dot-red" /><span className="dot-yellow" /><span className="dot-green" /></div>
                  <span className="api-snippet-label">Send WhatsApp Message — Node.js</span>
                </div>
                <div className="api-snippet-body">
                  <div><span className="api-comment">// Install: npm install ojiva-ai</span></div>
                  <div><span className="api-key">const</span> <span className="api-method">OjivaAI</span> = <span className="api-method">require</span>(<span className="api-str">&apos;ojiva-ai&apos;</span>);</div>
                  <br />
                  <div><span className="api-key">const</span> client = <span className="api-key">new</span> <span className="api-method">OjivaAI</span>({'{'} <span className="api-key">apiKey</span>: <span className="api-str">&apos;ojv_live_xx&apos;</span> {'}'});</div>
                  <br />
                  <div><span className="api-key">await</span> client.whatsapp.<span className="api-method">send</span>({'{'}</div>
                  <div>&nbsp;&nbsp;<span className="api-key">to</span>: <span className="api-str">&apos;+919876543210&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">type</span>: <span className="api-str">&apos;template&apos;</span>,</div>
                  <div>&nbsp;&nbsp;<span className="api-key">template</span>: {'{'} <span className="api-key">name</span>: <span className="api-str">&apos;order_shipped&apos;</span>, <span className="api-key">language</span>: <span className="api-str">&apos;en_IN&apos;</span> {'}'}</div>
                  <div>{'}'});</div>
                  <br />
                  <div><span className="api-comment">// {'{ id: "wamid_01", status: "sent", channel: "whatsapp" }'}</span></div>
                </div>
              </div>
            </ScalePop>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
