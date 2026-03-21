import SectionHeading from '@/components/ui/SectionHeading';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { FEATURES } from './data';

export default function Features() {
  return (
    <section className="py-5 bg-section" aria-labelledby="sms-features-heading">
      <div className="container">
        <FadeUp>
          <div className="text-center mb-5">
            <SectionHeading tag="Platform Features" title="Built for India. Built for Scale." subtitle="Every feature for compliant, high-performance SMS campaigns at enterprise volume." center />
          </div>
        </FadeUp>
        <StaggerContainer className="row g-4" staggerDelay={0.12}>
          {FEATURES.map(({ icon, title, desc, detail }, i) => {
            const colors = ['#1B48E0', '#0ea5e9', '#7C3AED'];
            const color = colors[i % colors.length];
            return (
              <StaggerItem key={title} className="col-12 col-lg-4">
                <div className="service-type-card">
                  <div className="cb-card-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                  <div className="service-type-icon" style={{ background: `${color}12`, borderColor: `${color}30` }}>{icon}</div>
                  <h3 className="service-type-title">{title}</h3>
                  <p className="service-type-desc">{desc}</p>
                  <ul className="service-type-points">
                    {detail.map((d) => (<li key={d}><span style={{ color }}>✓</span> {d}</li>))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
