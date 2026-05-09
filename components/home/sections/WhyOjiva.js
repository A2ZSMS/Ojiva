import Link from 'next/link';
import {
  RiFlashlightLine, RiBrainLine, RiPuzzleLine, RiBarChart2Line,
  RiShieldLine, RiTeamLine,
} from 'react-icons/ri';
import {
  SlideLeft,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  MagneticButton,
} from '@/components/ui/Animations';

const WHY = [
  {
    icon: RiFlashlightLine,
    title: 'Live in Under 10 Minutes',
    desc: 'Pre-built connectors, guided onboarding, and a sandbox environment mean you go live the same day.',
    color: '#1B48E0',
  },
  {
    icon: RiBrainLine,
    title: 'AI That Gets Smarter Daily',
    desc: 'Models retrain on your own data — every campaign makes the next one more accurate and effective.',
    color: '#7C3AED',
  },
  {
    icon: RiPuzzleLine,
    title: 'Works With Your Entire Stack',
    desc: '200+ native connectors. Anything else connects instantly via our REST API or webhook system.',
    color: '#FF6D42',
  },
  {
    icon: RiBarChart2Line,
    title: 'Unified Real-Time Analytics',
    desc: 'One dashboard across all channels — SMS, WhatsApp, Voice, RCS — with live delivery and conversion data.',
    color: '#25D366',
  },
  {
    icon: RiShieldLine,
    title: 'Enterprise-Grade Compliance',
    desc: 'SOC 2, GDPR, DPDP Act, DLT registered, end-to-end encryption — built for regulated industries.',
    color: '#dc2626',
  },
  {
    icon: RiTeamLine,
    title: '24/7 Dedicated Success Team',
    desc: 'Every enterprise client gets a named solutions architect, quarterly business reviews, and priority support.',
    color: '#d97706',
  },
];

export default function WhyOjiva() {
  return (
    <section className="section-padding hp-sec-why" aria-labelledby="why-heading">
      <div className="container">
        <div className="row align-items-center g-5">
          <SlideLeft className="col-12 col-lg-5">
            <span className="section-tag">Why Ojiva AI</span>
            <h2 id="why-heading" className="section-title mt-2">
              Built for Teams That{' '}
              <span className="text-gradient-animated">Can&apos;t Afford</span>{' '}
              to Slow Down
            </h2>
            <TextReveal
              text="We've obsessed over every detail so you don't have to. Ojiva AI is the communication backbone trusted by startups and Fortune 500s — from day one to enterprise scale."
              className="section-subtitle mb-4"
            />
            <MagneticButton className="magnetic-btn-wrap">
              <Link href="/contact" className="btn-ojiva-primary">
                Book a Free Demo →
              </Link>
            </MagneticButton>
          </SlideLeft>
          <div className="col-12 col-lg-7">
            <StaggerContainer className="row g-3" staggerDelay={0.07}>
              {WHY.map(({ icon: Icon, title, desc, color }) => (
                <StaggerItem key={title} className="col-12 col-sm-6">
                  <div className="why-card-v3">
                    <span className="why-icon-v3" style={{ background: `${color}15`, color }}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="why-title-v3">{title}</h3>
                      <p className="why-desc-v3">{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
