import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/Animations';
import { CHANNELS } from './data';

export default function ChannelPortals() {
  return (
    <section className="section-padding" id="portals" aria-labelledby="portals-heading">
      <div className="container">
        <div className="row mb-5 justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <SectionHeading
              tag="Four portals, one account"
              title="Every channel your business needs"
              subtitle="Each channel gets its own purpose-built portal — and they all live inside the same Ojiva AI login. Switch between them in a click."
              center
            />
          </div>
        </div>

        <StaggerContainer className="pf-portal-grid" staggerDelay={0.06}>
          {CHANNELS.map((c) => (
            <StaggerItem key={c.id}>
              <div className="pf-portal-card" style={{ '--ch': c.accent, '--ch-soft': c.accentSoft }}>
                <div className="pf-portal-head">
                  <span className="pf-portal-icon" aria-hidden="true">{c.icon}</span>
                  <div>
                    <h3 className="pf-portal-title">{c.title}</h3>
                    <p className="pf-portal-tagline">{c.tagline}</p>
                  </div>
                </div>

                <div className="pf-portal-caps">
                  {c.capabilities.map((cap) => (
                    <span className="pf-portal-cap" key={cap}>{cap}</span>
                  ))}
                </div>

                <Link href={c.href} className="pf-portal-link">
                  Explore {c.title.replace(' portal', '')} &rarr;
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
