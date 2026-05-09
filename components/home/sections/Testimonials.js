import SectionHeading from '@/components/ui/SectionHeading';
import {
  StaggerContainer,
  StaggerItem,
  ParallaxSection,
} from '@/components/ui/Animations';

const TESTIMONIALS = [
  {
    quote: 'Ojiva AI cut our lead response time from 4 hours to under 60 seconds. Our conversion rate jumped 38% in the very first month.',
    name: 'Sarah Chen',
    role: 'Head of Growth',
    company: 'FinNova Technologies',
    initials: 'SC',
    avatarBg: '#dbeafe',
    avatarColor: '#1d4ed8',
    result: '+38% Conversions',
    resultColor: '#16a34a',
    stars: 5,
  },
  {
    quote: "We replaced an entire outbound team with Ojiva AI's voice automation. The AI qualifies leads better than most human reps — at a fraction of the cost.",
    name: 'Marcus Reid',
    role: 'VP of Sales',
    company: 'ProScale SaaS',
    initials: 'MR',
    avatarBg: '#ede9fe',
    avatarColor: '#6d28d9',
    result: '60% Cost Reduction',
    resultColor: '#1B48E0',
    stars: 5,
  },
  {
    quote: 'The WhatsApp campaign automation is a game-changer. We now run 12 concurrent campaigns with one person — not twelve.',
    name: 'Priya Nair',
    role: 'Marketing Director',
    company: 'Nexora Commerce',
    initials: 'PN',
    avatarBg: '#dcfce7',
    avatarColor: '#15803d',
    result: '12× Campaign Scale',
    resultColor: '#7C3AED',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: '#f8fafc' }} aria-labelledby="testimonials-heading">
      <div className="container">
        <ParallaxSection speed={0.1}>
          <SectionHeading
            tag="Customer Stories"
            title="Real Teams. Real Results."
            subtitle="Businesses across India are transforming their growth with Ojiva AI — here's what they say."
            center
          />
        </ParallaxSection>

        <StaggerContainer className="row g-4 mt-4" staggerDelay={0.1}>
          {TESTIMONIALS.map(({ quote, name, role, company, initials, avatarBg, avatarColor, result, resultColor, stars }) => (
            <StaggerItem key={name} className="col-12 col-md-4">
              <div className="ojv-testi-card h-100">
                {/* Big quote mark */}
                <div className="ojv-testi-quote-mark" aria-hidden="true">&ldquo;</div>
                <div className="ojv-testi-top">
                  <div className="ojv-testi-stars">{'★'.repeat(stars)}</div>
                  <div
                    className="ojv-testi-result"
                    style={{ color: resultColor, background: `${resultColor}20` }}
                  >
                    {result}
                  </div>
                </div>
                <p className="ojv-testi-quote">{quote}</p>
                <div className="ojv-testi-author">
                  <span
                    className="ojv-testi-avatar"
                    style={{ background: avatarBg, color: avatarColor }}
                  >
                    {initials}
                  </span>
                  <div>
                    <p className="ojv-testi-name">{name}</p>
                    <p className="ojv-testi-meta">{role} · {company}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
