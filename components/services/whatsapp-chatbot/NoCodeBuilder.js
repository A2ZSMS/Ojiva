'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SlideLeft, SlideRight, ScalePop } from '@/components/ui/Animations';
import { HANDOFF_MSGS } from './data';

export default function NoCodeBuilder() {
  return (
    <section className="py-5 bg-section" aria-labelledby="cb-builder">
      <div className="container">
        <div className="service-feature-row mb-5">
          <SlideLeft className="service-feature-text">
            <span className="section-tag">No-Code Builder</span>
            <h2 className="section-title mt-2">Build Complex Chatbots — No Code Required</h2>
            <p className="section-subtitle mb-4">
              Design sophisticated conversation flows with conditional logic, API integrations, and dynamic responses — all drag-and-drop.
            </p>
            <ul className="feature-deep-list">
              {['Drag-and-drop visual builder', 'Conditional branching & decision trees', 'Quick replies, buttons & list menus', 'Dynamic API responses', 'Template management & approval', 'Version history & rollback'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Try the Builder →</Link>
          </SlideLeft>
          <SlideRight className="service-feature-visual">
            <ScalePop>
              <Image
                src="/images/chatbot-builder.webp"
                alt="No-code chatbot flow builder interface"
                width={600}
                height={600}
                className="cb-feature-image"
              />
            </ScalePop>
          </SlideRight>
        </div>

        {/* Human Handoff */}
        <div className="service-feature-row">
          <SlideLeft className="service-feature-visual order-lg-1">
            <div className="cb-handoff-wrap">
              <p className="cb-flow-label">Live Handoff — Conversation Log</p>
              {HANDOFF_MSGS.map(({ from, msg }, i) => (
                <div key={i} className={`cb-handoff-msg cb-handoff-msg--${from}`}>
                  <div className={`cb-handoff-bubble cb-handoff-bubble--${from}`}>{msg}</div>
                  <p className="cb-handoff-meta">{from.charAt(0).toUpperCase() + from.slice(1)}</p>
                </div>
              ))}
              <div className="cb-handoff-banner">⚡ Full context transferred — Zero repeat</div>
            </div>
          </SlideLeft>
          <SlideRight className="service-feature-text order-lg-2">
            <span className="section-tag">Human Handoff</span>
            <h2 className="section-title mt-2">Seamless AI-to-Human Handoff</h2>
            <p className="section-subtitle mb-4">
              Complex queries? The chatbot seamlessly transfers to the right human agent with full chat context and AI-generated summary.
            </p>
            <ul className="feature-deep-list">
              {['Smart escalation triggers (sentiment, intent)', 'Full conversation context passed to agent', 'Role-based routing (sales, support, billing)', 'Agent dashboard with AI-suggested replies', 'Hybrid mode: AI + human in same thread', 'Post-handoff quality scoring'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">See Handoff in Action →</Link>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
