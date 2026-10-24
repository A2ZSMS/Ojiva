import Link from 'next/link';
import {
  RiFlashlightLine, RiShieldLine, RiTeamLine,
} from 'react-icons/ri';
import {
  SlideLeft,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  MagneticButton,
} from '@/components/ui/Animations';
import { ICON } from '@/lib/colors';

const WHY = [
  {
    icon: RiFlashlightLine,
    title: 'Guided Onboarding',
    desc: 'Get help with channel setup and your first campaign.',
    color: ICON.fg,
  },
  {
    icon: RiShieldLine,
    title: 'DLT & Template Guidance',
    desc: 'Navigate registration and messaging templates with practical support.',
    color: ICON.fg,
  },
  {
    icon: RiTeamLine,
    title: 'Support Beyond Launch',
    desc: 'Get implementation guidance and help resolving campaign issues.',
    color: ICON.fg,
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
              text="Practical help from your first setup to your next campaign."
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
                <StaggerItem key={title} className="col-12">
                  <div className="why-card-v3">
                    <span className="why-icon-v3" style={{ background: ICON.tile, color }}>
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
