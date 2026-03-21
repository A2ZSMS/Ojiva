import SectionHeading from '@/components/ui/SectionHeading';
import { BlurReveal, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { SMS_TYPES } from './data';

export default function SmsTypes() {
  return (
    <section className="py-5" aria-labelledby="sms-types-heading">
      <div className="container">
        <BlurReveal>
          <div className="text-center mb-5">
            <SectionHeading tag="SMS Types" title="Every SMS Type Your Business Needs" subtitle="From one-time OTPs to million-message promotional blasts — all in one platform, one API." center />
          </div>
        </BlurReveal>
        <StaggerContainer className="row g-4">
          {SMS_TYPES.map(({ icon, title, color, desc, points }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="service-type-card">
                <div className="cb-card-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                <div className="service-type-icon" style={{ background: `${color}12`, borderColor: `${color}30` }}>{icon}</div>
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
