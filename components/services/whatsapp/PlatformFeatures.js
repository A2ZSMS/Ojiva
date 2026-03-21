import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, SlideLeft, SlideRight } from '@/components/ui/Animations';
import { BSP_STATS, CHATBOT_LOG } from './data';

export default function PlatformFeatures() {
  return (
    <section className="py-5 bg-section" aria-labelledby="wa-features-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Platform Features" title="The Complete WhatsApp Business Suite" subtitle="Everything you need to convert conversations into customers — from first message to final sale." center />
          </div>
        </FadeUp>

        {/* BSP Feature */}
        <div className="service-feature-row mb-5">
          <SlideLeft className="service-feature-text">
            <span className="section-tag">Meta Official BSP</span>
            <h2 className="section-title mt-2">Only Official Meta BSPs Get Green Tick & Priority Delivery</h2>
            <p className="section-subtitle mb-4">
              As an official Meta Business Solution Provider, we unlock features unavailable to unofficial senders — including the verified Green Tick, higher messaging limits, and direct access to Meta support.
            </p>
            <ul className="feature-deep-list">
              {['Official Meta Business Solution Provider', 'Green Tick verification support', 'Up to 10M messages/day throughput', 'Meta-compliant template management', 'Priority escalation to Meta support', 'Automated quality rating monitoring'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Get Green Tick →</Link>
          </SlideLeft>
          <SlideRight className="service-feature-visual">
            <div className="svc-stat-list">
              {BSP_STATS.map(({ label, val, color }) => (
                <div key={label} className="svc-stat-row">
                  <span className="svc-stat-label">{label}</span>
                  <span className="svc-stat-val" style={{ color }}>{val}</span>
                </div>
              ))}
              <div className="svc-stat-highlight wa-highlight">
                <span className="svc-stat-highlight-icon">💬</span>
                <p className="svc-stat-highlight-text">98% average message open rate vs 22% email</p>
              </div>
            </div>
          </SlideRight>
        </div>

        {/* Chatbot Feature */}
        <div className="service-feature-row">
          <SlideLeft className="service-feature-visual order-lg-1">
            <div className="cb-handoff-wrap">
              <p className="cb-flow-label">AI Chatbot — Conversation Log</p>
              {CHATBOT_LOG.map(({ from, msg }, i) => (
                <div key={i} className={`cb-handoff-msg cb-handoff-msg--${from}`}>
                  <div className={`cb-handoff-bubble cb-handoff-bubble--${from}`}>{msg}</div>
                  <p className="cb-handoff-meta">{from.charAt(0).toUpperCase() + from.slice(1)}</p>
                </div>
              ))}
              <div className="cb-handoff-banner">⚡ Resolved in 1 minute — No agent needed</div>
            </div>
          </SlideLeft>
          <SlideRight className="service-feature-text order-lg-2">
            <span className="section-tag">AI Chatbot</span>
            <h2 className="section-title mt-2">AI Chatbots That Resolve 70% of Queries Automatically</h2>
            <p className="section-subtitle mb-4">
              Deploy intelligent, NLP-powered chatbots on WhatsApp that understand intent, resolve queries, qualify leads, and escalate to human agents — all in real time, 24×7.
            </p>
            <ul className="feature-deep-list">
              {['Intent-based NLP conversations', 'Multi-language support (20+ languages)', 'Seamless human agent handoff', 'Lead scoring and CRM push', 'Flow builder — no code required', 'A/B testing for conversation flows'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/whatsapp-chatbot" className="btn-ojiva-primary mt-4 cb-btn-primary d-inline-flex">Build Your Chatbot →</Link>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
