import Link from 'next/link';

const PLATFORM_LINKS = [
  { href: '/platform#messaging', label: 'AI Messaging' },
  { href: '/platform#voice', label: 'AI Voice' },
  { href: '/platform#leads', label: 'Lead Intelligence' },
  { href: '/platform#workflow', label: 'Workflow Orchestration' },
  { href: '/platform#api', label: 'API & Integrations' },
];

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ojiva-footer" aria-label="Site footer">
      <div className="container">

        {/* ── Main Grid ── */}
        <div className="footer-grid">

          {/* Brand + Address block */}
          <div className="footer-brand-col">
            <span className="footer-brand">
              Ojiva <span>AI</span>
            </span>
            <p className="footer-desc">
              AI-powered communication intelligence for modern enterprises.
              Automate smarter. Scale faster.
            </p>

            <address className="footer-address">
              <span className="footer-address-icon">📍</span>
              <span>
                183, 2nd Floor, G Block,<br />
                Opposite Reliance Trends,<br />
                Sahakara Nagar Main Rd,<br />
                Byatarayanapura, Bengaluru,<br />
                Karnataka 560092
              </span>
            </address>

            <div className="footer-hours">
              <span className="footer-hours-icon">🕑</span>
              <span>
                <strong>Mon – Sat</strong><br />
                10:00 AM – 7:00 PM IST
              </span>
            </div>
          </div>

          {/* Platform links */}
          <div className="footer-nav-col">
            <p className="footer-heading">Platform</p>
            <nav aria-label="Platform links">
              {PLATFORM_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="footer-link">
                  {label}
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
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal links */}
          <div className="footer-nav-col">
            <p className="footer-heading">Legal</p>
            <nav aria-label="Legal links">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="footer-link">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-3">
              <span className="footer-badge">🛡️ Enterprise Ready</span>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy mb-0">
            &copy; {year} Ojiva AI. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-copy footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-copy footer-bottom-link">
              Terms of Service
            </Link>
            <Link href="/contact" className="footer-copy footer-bottom-link">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
