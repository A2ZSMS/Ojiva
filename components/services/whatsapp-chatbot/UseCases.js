'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { USE_CASES } from './data';

export default function UseCases() {
  return (
    <section className="py-5 bg-section" aria-labelledby="cb-usecases">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Use Cases" title="WhatsApp Chatbots for Every Industry" subtitle="See how businesses across India use Ojiva AI chatbots to transform engagement." center />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.08}>
          {USE_CASES.map(({ icon, title, desc, color, points }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-4">
              <div className="chatbot-usecase-card">
                <div className="chatbot-usecase-icon" style={{ background: `${color}12`, borderColor: `${color}25` }}>
                  <span>{icon}</span>
                </div>
                <h3 className="chatbot-usecase-title">{title}</h3>
                <p className="chatbot-usecase-desc">{desc}</p>
                <ul className="chatbot-usecase-points">
                  {points.map((p) => (<li key={p}><span style={{ color }}>→</span> {p}</li>))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
