'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/platform', label: 'Platform' },
  { href: '/about', label: 'About Us' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact Us' },
];

const SERVICE_LINKS = [
  { href: '/sms',       icon: '📱', label: 'Bulk SMS',      desc: 'Transactional, promotional & OTP',   color: '#1B48E0', bg: 'rgba(27,72,224,0.08)' },
  { href: '/whatsapp',  icon: '💬', label: 'WhatsApp API',   desc: 'Official Meta BSP partner',         color: '#25D366', bg: 'rgba(37,211,102,0.08)' },
  { href: '/whatsapp-chatbot', icon: '🤖', label: 'WhatsApp Chatbot', desc: 'AI-powered conversation bot', color: '#128C7E', bg: 'rgba(18,140,126,0.08)' },
  { href: '/rcs',       icon: '✨', label: 'RCS Messaging',  desc: 'Rich cards & carousels',            color: '#FF6D42', bg: 'rgba(255,109,66,0.08)' },
  { href: '/voice',     icon: '📞', label: 'Bulk Voice Call', desc: 'IVR, OBD & AI voice bots',          color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServiceActive = SERVICE_LINKS.some(s => pathname === s.href);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`navbar navbar-expand-lg ojiva-nav${scrolled ? ' scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" href="/" aria-label="Ojiva AI Home">
            <Image
              src="/ojiva-logo-optimized.png"
              alt="Ojiva AI"
              width={180}
              height={106}
              className="nav-logo"
              priority
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className={`navbar-toggler${menuOpen ? '' : ' collapsed'}`}
            type="button"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-controls="ojiva-nav-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Nav menu */}
          <div
            className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}
            id="ojiva-nav-menu"
          >
            <ul className="navbar-nav mx-auto gap-1">

              {/* Home */}
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link${pathname === '/' ? ' active' : ''}`}
                  aria-current={pathname === '/' ? 'page' : undefined}
                >
                  Home
                  {pathname === '/' && <span className="nav-active-dot" />}
                </Link>
              </li>

              {/* ── Services dropdown ── */}
              <li className="nav-item nav-dropdown-item">
                <button
                  className={`nav-link nav-dropdown-trigger${isServiceActive ? ' active' : ''}`}
                  onClick={() => setServicesOpen(prev => !prev)}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <span className={`nav-chevron${servicesOpen ? ' open' : ''}`}>▾</span>
                  {isServiceActive && <span className="nav-active-dot" />}
                </button>

                <div className={`nav-dropdown${servicesOpen ? ' mobile-open' : ''}`}>
                  {SERVICE_LINKS.map(({ href, icon, label, desc, color, bg }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`nav-dropdown-link${pathname === href ? ' active' : ''}`}
                    >
                      <span className="nav-dd-icon-wrap" style={{ background: bg, color }}>{icon}</span>
                      <span className="nav-dd-text">
                        <span className="nav-dd-label">{label}</span>
                        <span className="nav-dd-desc">{desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>

              {/* Other nav links */}
              {NAV_LINKS.map(({ href, label }) => (
                <li className="nav-item" key={href}>
                  <Link
                    href={href}
                    className={`nav-link${pathname === href ? ' active' : ''}`}
                    aria-current={pathname === href ? 'page' : undefined}
                  >
                    {label}
                    {pathname === href && <span className="nav-active-dot" />}
                  </Link>
                </li>
              ))}

            </ul>

            <div className="nav-cta-group mt-3 mt-lg-0">
              <Link href="/contact" className="nav-cta-outline">Contact Us</Link>
              <Link href="/book-demo" className="nav-cta">Book a Demo →</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
