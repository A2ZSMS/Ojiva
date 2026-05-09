import Link from 'next/link';
import {
  RiWhatsappLine, RiMessage3Line, RiSmartphoneLine, RiPhoneLine,
  RiLockPasswordLine, RiRobotLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  BlurReveal,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/Animations';

const SERVICES = [
  {
    id: 'whatsapp',
    icon: RiWhatsappLine,
    iconBg: '#25D366',
    title: 'WhatsApp Business API',
    desc: 'Send bulk messages, automate replies with chatbots, and manage customer conversations at scale with 98% open rates.',
    stat: '98% open rate',
  },
  {
    id: 'rcs',
    icon: RiMessage3Line,
    iconBg: '#1B48E0',
    title: 'RCS Messaging',
    desc: 'Deliver rich, app-like experiences with interactive carousels, branded messages, and verified sender identity.',
    stat: '94% read rate',
  },
  {
    id: 'sms',
    icon: RiSmartphoneLine,
    iconBg: '#0EA5E9',
    title: 'Bulk SMS Service',
    desc: 'Lightning-fast promotional and transactional SMS campaigns with 99.9% delivery rates across all networks.',
    stat: '10M+ msgs/day',
  },
  {
    id: 'voice',
    icon: RiPhoneLine,
    iconBg: '#7C3AED',
    title: 'Bulk Voice Call',
    desc: 'Crystal-clear voice campaigns with IVR, auto-retry logic, and detailed analytics for maximum reach.',
    stat: 'Zero-agent IVR',
  },
  {
    id: 'platform',
    icon: RiLockPasswordLine,
    iconBg: '#dc2626',
    title: 'OTP & 2FA Solutions',
    desc: 'Ultra-fast OTP delivery via SMS, WhatsApp & Voice with 99.9% success rate and enterprise-grade two-factor authentication.',
    stat: '99.9% success',
  },
  {
    id: 'whatsapp-chatbot',
    icon: RiRobotLine,
    iconBg: '#25D366',
    title: 'WhatsApp AI Chatbot',
    desc: '24/7 automated customer support powered by AI. Handle queries, capture leads, and close sales while you sleep.',
    stat: '24/7 automated',
    linkOverride: '/whatsapp-chatbot',
  },
];

export default function Services() {
  return (
    <section className="section-padding hp-sec-svc" aria-labelledby="services-heading">
      <div className="container">
        <BlurReveal>
          <SectionHeading
            tag="Powerful Messaging Solutions"
            title="Everything You Need to Grow Your Business"
            subtitle="From WhatsApp automation to bulk messaging — powerful communication tools trusted by 10,000+ businesses across India."
            center
          />
        </BlurReveal>

        {/* Top-tier featured services */}
        <StaggerContainer className="ojv-svc-grid-top mt-5" staggerDelay={0.08}>
          {SERVICES.slice(0, 2).map(({ id, icon: Icon, iconBg, title, desc, stat, linkOverride }, i) => (
            <StaggerItem key={`${id}-top`}>
              <Link href={linkOverride || `/${id}`} className="ojv-svc-card ojv-svc-card--featured">
                <div className="ojv-svc-card-accent" style={{ background: `linear-gradient(90deg, ${iconBg}, ${iconBg}99)` }} aria-hidden="true" />
                <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: iconBg }}>
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="ojv-svc-title">{title}</h3>
                <p className="ojv-svc-desc">{desc}</p>
                <div className="ojv-svc-footer">
                  <span className="ojv-svc-stat" style={{ color: iconBg, background: `${iconBg}12` }}>
                    {stat}
                  </span>
                  <span className="ojv-svc-link" style={{ color: iconBg }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Supporting services grid */}
        <StaggerContainer className="ojv-svc-grid mt-4" staggerDelay={0.07}>
          {SERVICES.slice(2).map(({ id, icon: Icon, iconBg, title, desc, stat, linkOverride }, i) => (
            <StaggerItem key={`${id}-${i}`}>
              <Link href={linkOverride || `/${id}`} className="ojv-svc-card">
                <div className="ojv-svc-icon" style={{ background: `${iconBg}18`, borderColor: `${iconBg}30`, color: iconBg }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="ojv-svc-title">{title}</h3>
                <p className="ojv-svc-desc">{desc}</p>
                <div className="ojv-svc-footer">
                  <span className="ojv-svc-stat" style={{ color: iconBg, background: `${iconBg}12` }}>
                    {stat}
                  </span>
                  <span className="ojv-svc-link" style={{ color: iconBg }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
