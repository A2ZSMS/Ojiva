import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { INFRA } from './data';

export default function Infrastructure() {
  return (
    <section className="section-padding" aria-labelledby="infra-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-7">
            <SectionHeading
              tag="Infrastructure"
              title="Enterprise-grade from the ground up"
              subtitle="Ojiva AI's architecture is designed for enterprise workloads with the security, compliance, and observability that regulated industries demand."
              center
            />
          </div>
        </div>
        <StaggerContainer className="row g-4" staggerDelay={0.08}>
          {INFRA.map(({ icon, title, desc }) => (
            <StaggerItem className="col-12 col-md-6 col-lg-4" key={title}>
              <div className="about-infra-card">
                <div className="about-infra-icon" aria-hidden="true">{icon}</div>
                <h4 className="about-infra-title">{title}</h4>
                <p className="about-infra-desc">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
