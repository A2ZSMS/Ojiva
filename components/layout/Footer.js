import Link from 'next/link';
import Image from 'next/image';

const PLATFORM_LINKS = [
  { href: '/platform#messaging', label: 'AI Messaging' },
  { href: '/platform#voice', label: 'Bulk Voice Call' },
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
  {
    href: 'https://youtube.com/@ojivaai?si=ZMf_pQnHLd9FHZst',
    label: 'YouTube',
    color: '#ff0000',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/112715285/',
    label: 'LinkedIn',
    color: '#0a66c2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/ojiva.ai/',
    label: 'Instagram',
    color: '#e1306c',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    href: 'https://x.com/OjivaAi',
    label: 'X (Twitter)',
    color: '#fff',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
      </svg>
    ),
  },
  {
    href: 'https://wa.me/918431086185',
    label: 'WhatsApp',
    color: '#25d366',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
  },
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
                  title={label}
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
