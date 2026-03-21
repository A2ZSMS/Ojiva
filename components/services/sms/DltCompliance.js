import Link from 'next/link';
import Image from 'next/image';
import { SlideLeft, SlideRight } from '@/components/ui/Animations';
import { DLT_STATS, DELIVERY_ROUTES } from './data';

export default function DltCompliance() {
  return (
    <section className="py-5" aria-labelledby="sms-dlt-heading">
      <div className="container">
        <div className="service-feature-row mb-5">
          <SlideLeft className="service-feature-text">
            <span className="section-tag">DLT Compliance</span>
            <h2 className="section-title mt-2">India&apos;s Most DLT-Compliant SMS Gateway</h2>
            <p className="section-subtitle mb-4">Every message routes through TRAI-registered telecom entities with full header and template management — zero blocked messages.</p>
            <ul className="feature-deep-list">
              {['Automatic DLT template matching & approval', 'PE ID & Sender Header registration', 'TRAI blackout time enforcement', 'Content scrubbing & complaint management', 'Full audit trail for compliance reporting'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">Get DLT Help →</Link>
          </SlideLeft>
          <SlideRight className="service-feature-visual">
            <div className="svc-stat-list">
              {DLT_STATS.map(({ label, val, color }) => (
                <div key={label} className="svc-stat-row">
                  <span className="svc-stat-label">{label}</span>
                  <span className="svc-stat-val" style={{ color }}>{val}</span>
                </div>
              ))}
              <div className="svc-stat-highlight sms-highlight">
                <span className="svc-stat-highlight-icon">🛡️</span>
                <p className="svc-stat-highlight-text">Zero blocked messages in last 90 days</p>
              </div>
            </div>
          </SlideRight>
        </div>

        {/* ══ SMART DELIVERY ══ */}
        <div className="service-feature-row">
          <SlideLeft className="service-feature-visual order-lg-1">
            <div className="svc-stat-list">
              <p className="cb-flow-label">Delivery Analytics — Live</p>
              {DELIVERY_ROUTES.map(({ route, pct, count, color }) => (
                <div key={route} className="svc-delivery-row">
                  <span className="svc-delivery-name" style={{ color }}>{route}</span>
                  <div className="svc-delivery-bar">
                    <div className="svc-delivery-fill" style={{ width: `${pct}%`, background: color }} />
                  </div>
                  <span className="svc-delivery-stat">{pct}% · {count}</span>
                </div>
              ))}
            </div>
          </SlideLeft>
          <SlideRight className="service-feature-text order-lg-2">
            <span className="section-tag">Smart Delivery</span>
            <h2 className="section-title mt-2">98%+ Delivery Rate with Intelligent Routing</h2>
            <p className="section-subtitle mb-4">Our AI routing engine selects the best telecom operator per message with real-time failover — maximum delivery even at peak loads.</p>
            <ul className="feature-deep-list">
              {['Multi-operator intelligent routing', 'Real-time delivery receipts (DLR)', 'Automatic retry on failed routes', 'International SMS to 200+ countries', 'Peak-load auto-scaling'].map((pt) => (
                <li key={pt}><span className="check-icon">✓</span>{pt}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn-ojiva-primary mt-4 sms-btn-primary d-inline-flex">See Delivery Proof →</Link>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
