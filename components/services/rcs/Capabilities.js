import SectionHeading from '@/components/ui/SectionHeading';
import { BlurReveal, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { RCS_FEATURES } from './data';

export default function Capabilities() {
  return (
    <section className="py-5" aria-labelledby="rcs-types-heading">
      <div className="container">
        <BlurReveal>
          <div className="text-center mb-5">
            <SectionHeading tag="RCS Capabilities" title="Rich Features That Drive Real Engagement" subtitle="RCS gives you the interactivity of an app inside the native SMS inbox — no download required." center />
          </div>
        </BlurReveal>
        <StaggerContainer className="row g-4">
          {RCS_FEATURES.map(({ icon, title, color, desc, points }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="service-type-card">
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
