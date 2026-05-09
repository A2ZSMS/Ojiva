import {
  RiPlugLine, RiFlowChart, RiBrainLine, RiRocketLine,
} from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  ClipReveal,
  RotateIn,
} from '@/components/ui/Animations';

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect in 10 Minutes',
    desc: 'Plug Ojiva AI into your CRM, messaging apps, and databases using our native connectors or REST API — no engineering sprint required.',
    icon: RiPlugLine,
  },
  {
    step: '02',
    title: 'Build Your First Flow',
    desc: 'Use the no-code visual builder to set triggers, conditions, and actions — from simple OTP campaigns to complex multi-channel automations.',
    icon: RiFlowChart,
  },
  {
    step: '03',
    title: 'AI Takes Over',
    desc: 'Our AI continuously analyses performance, adapts message timing, scores leads, and routes conversations to maximise every conversion.',
    icon: RiBrainLine,
  },
  {
    step: '04',
    title: 'Watch Results Roll In',
    desc: 'Track every message, call, and lead in real time. Most clients see a 38% lift in conversions within the first 30 days.',
    icon: RiRocketLine,
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding hp-sec-hiw" aria-labelledby="how-heading">
      <div className="container">
        <ClipReveal direction="left">
          <SectionHeading
            tag="Get Started in Minutes"
            title="From Sign-Up to Revenue in 4 Steps"
            subtitle="We've removed every barrier to AI adoption. Most teams are live — and seeing results — within 48 hours."
            center
          />
        </ClipReveal>

        <div className="ojv-timeline mt-5">
          {/* Connecting line */}
          <div className="ojv-timeline-line" aria-hidden="true" />
          {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }, i) => (
            <RotateIn key={step} delay={i * 0.12}>
              <div className="ojv-timeline-step">
                <div className="ojv-timeline-node">
                  <span className="ojv-timeline-num">{step}</span>
                  <div className="ojv-timeline-icon"><Icon size={20} aria-hidden="true" /></div>
                </div>
                <div className="ojv-timeline-body">
                  <h3 className="ojv-timeline-title">{title}</h3>
                  <p className="ojv-timeline-desc">{desc}</p>
                </div>
              </div>
            </RotateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
