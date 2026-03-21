import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { VALUES } from './data';

export default function Values() {
  return (
    <section className="section-padding bg-section" aria-labelledby="values-heading">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <SectionHeading
              tag="Core Values"
              title="What drives everything we build"
            />
          </div>
        </div>
        <StaggerContainer className="row g-4" staggerDelay={0.08}>
          {VALUES.map(({ icon, bg, title, desc }) => (
            <StaggerItem className="col-12 col-md-6 col-lg-4" key={title}>
              <div className="value-card-v2">
                <div className="value-icon-box" style={{ background: bg }}>
                  <span aria-hidden="true">{icon}</span>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
