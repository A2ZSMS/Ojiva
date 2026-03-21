import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { INTEGRATIONS } from './data';

export default function Integrations() {
  return (
    <section className="section-padding bg-section" aria-labelledby="integrations-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-7">
            <SectionHeading
              tag="Integrations"
              title="Connects to your existing stack"
              subtitle="200+ pre-built connectors across CRM, e-commerce, helpdesk, data, and communication tools. If it has an API, Ojiva AI can integrate with it."
              center
            />
          </div>
        </div>
        <StaggerContainer className="integration-grid" staggerDelay={0.05}>
          {INTEGRATIONS.map(({ icon, name }) => (
            <StaggerItem className="integration-item" key={name}>
              <span className="integration-item-icon" aria-hidden="true">{icon}</span>
              <span>{name}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <p className="integration-more">+ 190 more integrations available</p>
      </div>
    </section>
  );
}
