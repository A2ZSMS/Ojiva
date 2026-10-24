import Link from 'next/link';
import {
  RiBarChart2Line, RiFlashlightLine, RiLinksLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  StaggerContainer,
  StaggerItem,
  TiltCard3D,
  ScrollScale,
} from '@/components/ui/Animations';
import { ICON } from '@/lib/colors';

const MODULES = [
  {
    icon: RiFlashlightLine,
    tag: 'Automation',
    title: 'Build Your Customer Journey',
    desc: 'Connect messages, replies, and follow-ups in one workflow.',
    points: ['Visual workflow builder', 'Cross-channel campaigns'],
    color: ICON.bg,
    accentColor: ICON.fg,
  },
  {
    icon: RiLinksLine,
    tag: 'Integrations',
    title: 'Connect Your Existing Tools',
    desc: 'Keep your CRM and communication channels working together.',
    points: ['REST API & webhooks', 'Delivery callbacks'],
    color: ICON.bg,
    accentColor: ICON.fg,
  },
  {
    icon: RiBarChart2Line,
    tag: 'Analytics',
    title: 'See What Works',
    desc: 'Review messaging and call activity across your channels.',
    points: ['Delivery reports', 'Campaign performance'],
    color: ICON.bg,
    accentColor: ICON.fg,
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="section-padding hp-sec-platform" aria-labelledby="modules-heading">
      <div className="container">
        <ScrollScale>
          <SectionHeading
            id="modules-heading"
            tag="Platform"
            title="One Platform. A Connected Workflow."
            subtitle="Build your workflows, connect your tools, and follow your results."
            center
          />
        </ScrollScale>

        <StaggerContainer className="row g-4 mt-3" staggerDelay={0.09}>
          {MODULES.map(({ icon: Icon, tag, title, desc, points, color, accentColor }) => (
            <StaggerItem key={title} className="col-12 col-md-4">
              <TiltCard3D intensity={9} className="module-card-v3 h-100">
                <div className="module-card-v3-icon" style={{ background: ICON.tile, color: accentColor }}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <span className="module-tag-v3" style={{ color: accentColor, background: color }}>{tag}</span>
                <h3 className="module-card-v3-title">{title}</h3>
                <p className="module-card-v3-desc">{desc}</p>
                <ul className="module-list-v3">
                  {points.map((p) => (
                    <li key={p} style={{ '--accent': accentColor }}>
                      <span aria-hidden="true">→</span> {p}
                    </li>
                  ))}
                </ul>
                <Link href="/platform" className="module-link-v3" style={{ color: accentColor }}>
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </TiltCard3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
