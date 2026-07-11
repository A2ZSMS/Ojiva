import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { FEATURES } from './data';

export default function UnifiedTools() {
  return (
    <section className="section-padding" id="all-in-one" aria-labelledby="unified-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <SectionHeading
              tag="All-in-one"
              title="One portal that ties every channel together"
              subtitle="The channels are separate, but everything around them is shared — so your team works from a single source of truth instead of four disconnected tools."
              center
            />
          </div>
        </div>

        <StaggerContainer className="pf-tools-grid" staggerDelay={0.05}>
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="pf-tool-card">
                <span className="pf-tool-icon" aria-hidden="true">{f.icon}</span>
                <h3 className="pf-tool-title">{f.title}</h3>
                <p className="pf-tool-desc">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
