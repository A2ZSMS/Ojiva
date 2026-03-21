import SectionHeading from '@/components/ui/SectionHeading';
import { ScrollScale, StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { VOICE_TYPES } from './data';

export default function VoiceTypes() {
  return (
    <section className="py-5" aria-labelledby="voice-types-heading">
      <div className="container">
        <ScrollScale>
          <div className="text-center mb-5">
            <SectionHeading tag="Voice Solutions" title="Every Voice Solution Your Business Needs" subtitle="From simple IVRs to fully autonomous AI voice agents — one platform, all telephony." center />
          </div>
        </ScrollScale>
        <StaggerContainer className="row g-4">
          {VOICE_TYPES.map(({ icon, title, color, desc, points }) => (
            <StaggerItem key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="service-type-card">
                <div className="cb-card-accent" style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }} />
                <div className="service-type-icon" style={{ background: `${color}14`, borderColor: `${color}30` }}>{icon}</div>
                <h3 className="service-type-title">{title}</h3>
                <p className="service-type-desc">{desc}</p>
                <ul className="service-type-points">{points.map(p => (<li key={p}><span style={{ color }}>✓</span> {p}</li>))}</ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
