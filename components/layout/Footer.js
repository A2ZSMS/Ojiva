import Link from 'next/link';
import Image from 'next/image';

const PLATFORM_LINKS = [
  { href: '/platform#messaging', label: 'AI Messaging' },
  { href: '/platform#voice', label: 'AI Voice' },
  { href: '/platform#leads', label: 'Lead Intelligence' },
  { href: '/platform#workflow', label: 'Workflow Orchestration' },
  { href: '/platform#api', label: 'API & Integrations' },
];

const COMPANY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

const SOCIAL = [
  { href: 'https://youtube.com/@ojivaai?si=ZMf_pQnHLd9FHZst', label: 'YouTube', icon: '▶', color: '#ff0000' },
  { href: 'https://www.linkedin.com/company/112715285/', label: 'LinkedIn', icon: 'in', color: '#0a66c2' },
  { href: 'https://www.instagram.com/ojiva.ai/', label: 'Instagram', icon: '◉', color: '#e1306c' },
  { href: 'https://x.com/OjivaAi', label: 'X', icon: '𝕏', color: '#1d9bf0' },
  { href: 'https://wa.me/918431086185', label: 'WhatsApp', icon: 'w', color: '#25d366' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ojiva-footer" aria-label="Site footer">
      {/* Top glow bar */}
      <div className="footer-top-bar" aria-hidden="true" />

      <div className="container">

        {/* ── Main Grid ── */}
        <div className="footer-grid">

          {/* Brand + Address block */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link" aria-label="Ojiva AI Home">
              <Image
                src="/OJIVA%20AI%20MAIN%20LOGO%20WHITE%20PNG.png"
                alt="Ojiva AI"
                width={160}
                height={50}
                className="footer-logo"
                loading="lazy"
                style={{ width: 'auto', height: '50px', objectFit: 'contain', objectPosition: 'left center' }}
              />
            </Link>

            <p className="footer-tagline">
              AI-powered communication for modern enterprises.
              Send smarter. Scale faster. Convert better.
            </p>

            {/* Social Icons */}
            <div className="footer-social-row">
              {SOCIAL.map(({ href, label, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-social-btn"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': color }}
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="footer-trust-badges">
              <span className="footer-trust-badge">🔒 GDPR Compliant</span>
              <span className="footer-trust-badge">🇮🇳 DLT Registered</span>
              <span className="footer-trust-badge">⚡ 99.9% Uptime</span>
            </div>
          </div>

          {/* Platform links */}
          <div className="footer-nav-col">
            <p className="footer-heading">Platform</p>
            <nav aria-label="Platform links">
              {PLATFORM_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="footer-link">
                  <span className="footer-link-arrow">›</span> {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company links */}
          <div className="footer-nav-col">
            <p className="footer-heading">Company</p>
            <nav aria-label="Company links">
              {COMPANY_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="footer-link">
                  <span className="footer-link-arrow">›</span> {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact block */}
          <div className="footer-nav-col">
            <p className="footer-heading">Contact Us</p>
            <div className="footer-contact-block">
              <a
                className="footer-contact-item"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer-contact-icon">📍</span>
                <span>
                  183, 2nd Floor, G Block,<br />
                  Opposite Reliance Trends,<br />
                  Sahakara Nagar, Bengaluru,<br />
                  Karnataka 560092
                </span>
              </a>
              <a className="footer-contact-item" href="mailto:ojiva.tech@gmail.com">
                <span className="footer-contact-icon">✉️</span>
                <span>ojiva.tech@gmail.com</span>
              </a>
              <a className="footer-contact-item" href="tel:+918431086185">
                <span className="footer-contact-icon">📞</span>
                <span>+91 84310 86185</span>
              </a>
              <div className="footer-hours">
                <span className="footer-contact-icon">🕑</span>
                <span>
                  <strong>Mon – Sat</strong><br />
                  10:00 AM – 7:00 PM IST
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy mb-0">
            &copy; {year}{' '}
            <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Ojiva AI</strong>.
            All rights reserved. Made with ❤️ in India.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-copy footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-copy footer-bottom-link">Terms of Service</Link>
            <Link href="/contact" className="footer-copy footer-bottom-link">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
