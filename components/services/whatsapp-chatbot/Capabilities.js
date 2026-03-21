'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { BOT_FEATURES } from './data';

export default function Capabilities() {
  return (
    <section className="py-5" aria-labelledby="cb-features">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Key Capabilities" title="Everything Your WhatsApp Chatbot Needs" subtitle="NLP intelligence, no-code building, lead scoring, and multi-language support — all built in." center />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4">
          {BOT_FEATURES.map(({ icon, title, color, desc, points }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="service-type-card" style={{ '--card-accent': color }}>
                <div className="cb-card-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                <div className="service-type-icon" style={{ background: `${color}14`, borderColor: `${color}30` }}>{icon}</div>
                <h3 className="service-type-title">{title}</h3>
                <p className="service-type-desc">{desc}</p>
                <ul className="service-type-points">
                  {points.map((p) => (<li key={p}><span style={{ color }}>✓</span> {p}</li>))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
