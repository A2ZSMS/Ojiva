'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { INDUSTRIES } from '@/lib/industries';

// Top-level navigation links shown right of the dropdowns.
// /support intentionally removed — the role of /support has been
// replaced by /solutions which serves a clearer purpose.
const NAV_LINKS = [
  { href: '/about',   label: 'About Us'   },
  { href: '/blogs',   label: 'Blog'       },
  { href: '/contact', label: 'Contact Us' },
];

const SERVICE_LINKS = [
  { href: '/sms',              icon: 'bi-chat-dots-fill',  label: 'Bulk SMS',         desc: 'Transactional, promotional & OTP',  color: '#1B48E0', bg: 'rgba(27,72,224,0.09)'  },
  { href: '/whatsapp',         icon: 'bi-whatsapp',        label: 'WhatsApp API',     desc: 'Official Meta BSP partner',         color: '#25D366', bg: 'rgba(37,211,102,0.09)' },
  { href: '/whatsapp-chatbot', icon: 'bi-robot',           label: 'WhatsApp Chatbot', desc: 'AI-powered conversation bot',       color: '#128C7E', bg: 'rgba(18,140,126,0.09)' },
  { href: '/rcs',              icon: 'bi-stars',           label: 'RCS Messaging',    desc: 'Rich cards & carousels',            color: '#FF6D42', bg: 'rgba(255,109,66,0.09)'  },
  { href: '/voice',            icon: 'bi-telephone-fill',  label: 'Bulk Voice Call',  desc: 'IVR, OBD & AI voice bots',          color: '#7C3AED', bg: 'rgba(124,58,237,0.09)'  },
  { href: '/otp',              icon: 'bi-shield-lock-fill',label: 'OTP & 2FA',        desc: 'SMS, WhatsApp & Voice OTP',         color: '#0ea5e9', bg: 'rgba(14,165,233,0.09)' },
];

// Solutions mega-menu data.
// "By Industry" pulls straight from lib/industries.js — single source of truth.
const SOLUTION_INDUSTRIES = INDUSTRIES.map(ind => ({
  href:  `/solutions/${ind.slug}`,
  icon:  ind.icon,
  label: ind.shortName,
  desc:  // 1-line use line; truncate for menu compactness
    (ind.subtitle || '').replace(/\s+/g, ' ').trim().slice(0, 72) + (ind.subtitle && ind.subtitle.length > 72 ? '…' : ''),
  color: ind.color,
}));

// "By Use Case" — common cross-industry workflows, each linked to the most
// relevant existing channel page or solution. These are used as quick entry
// points; rebuild when dedicated use-case pages exist.
const SOLUTION_USE_CASES = [
  { href: '/otp',                          icon: 'bi-shield-lock-fill', label: 'OTP & 2FA',           desc: 'Login, payments, KYC verification',         color: '#0ea5e9' },
  { href: '/solutions/ecommerce-retail',   icon: 'bi-cart-x',           label: 'Cart Recovery',       desc: 'Win back abandoned baskets',                color: '#FF6D42' },
  { href: '/solutions/healthcare',         icon: 'bi-calendar-check',   label: 'Appointment Reminders', desc: 'Reduce no-shows across appointments',     color: '#16a34a' },
  { href: '/whatsapp-chatbot',             icon: 'bi-headset',          label: 'Customer Support',    desc: 'AI + human concierge on WhatsApp',          color: '#128C7E' },
  { href: '/whatsapp',                     icon: 'bi-megaphone-fill',   label: 'Marketing Campaigns', desc: 'Two-way campaigns over WhatsApp & RCS',     color: '#7C3AED' },
  { href: '/solutions/banking-finance',    icon: 'bi-cash-stack',       label: 'Collections & EMI',   desc: 'Pre-due, due, overdue reminder cadences',   color: '#1B48E0' },
];


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [solutionsOpen,  setSolutionsOpen]  = useState(false);

  // All pages use white navbar — hero is now light-themed
  const isLightPage = true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const isServiceActive  = SERVICE_LINKS.some(s => pathname === s.href);
  const isSolutionActive = pathname === '/solutions' || pathname.startsWith('/solutions/');

  const isHome = pathname === '/';

  // Close all menus and scroll to page top — used by every submenu link click
  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // ── Desktop hover with 150 ms close-delay (bridges the trigger→panel gap) ──
  const svcTimer = useRef(null);
  const solTimer = useRef(null);

  const onSvcEnter = () => {
    if (window.innerWidth <= 991) return;
    clearTimeout(svcTimer.current);
    setServicesOpen(true);
    setSolutionsOpen(false);          // close the other one
  };
  const onSvcLeave = () => {
    if (window.innerWidth <= 991) return;
    svcTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const onSolEnter = () => {
    if (window.innerWidth <= 991) return;
    clearTimeout(solTimer.current);
    setSolutionsOpen(true);
    setServicesOpen(false);           // close the other one
  };
  const onSolLeave = () => {
    if (window.innerWidth <= 991) return;
    solTimer.current = setTimeout(() => setSolutionsOpen(false), 150);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ojiva-nav${isHome ? ' nav--fixed' : ''}${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}${isLightPage ? ' light-page' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Logo — white when homepage hero is in view, coloured otherwise */}
        <Link className="navbar-brand" href="/" aria-label="Ojiva AI Home">
          <Image
            src={isHome && !scrolled ? '/ojiva-logo-white.webp' : '/ojiva-logo-optimized.webp'}
            alt="Ojiva AI — India's #1 AI Communication Platform for Bulk SMS, WhatsApp Business API, RCS & Voice"
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
          <ul className="navbar-nav mx-auto gap-2">

            {/* Home */}
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link${pathname === '/' ? ' active' : ''}`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
            </li>

            {/* Services dropdown (compact list) */}
            <li className="nav-item nav-dropdown-item" onMouseEnter={onSvcEnter} onMouseLeave={onSvcLeave}>
              <button
                className={`nav-link nav-dropdown-trigger${isServiceActive ? ' active' : ''}`}
                onClick={() => { if (typeof window !== 'undefined' && window.innerWidth <= 991) setServicesOpen(prev => !prev); }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <span className={`nav-chevron${servicesOpen ? ' open' : ''}`}>▼</span>
                {isServiceActive && <span className="nav-active-dot" />}
              </button>

              <div className={`nav-dropdown${servicesOpen ? ' dd-open' : ''}`}>
                <div className="nav-dd-header">
                  <span className="nav-dd-tag">Our Services</span>
                </div>
                <div className="nav-dd-body">
                  {SERVICE_LINKS.map(({ href, icon, label, desc, color, bg }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`nav-dropdown-link${pathname === href ? ' active' : ''}`}
                      onClick={closeAll}
                    >
                      <span className="nav-dd-icon-wrap" style={{ background: bg, color }}>
                        <i className={`bi ${icon}`} />
                      </span>
                      <span className="nav-dd-text">
                        <span className="nav-dd-label">{label}</span>
                        <span className="nav-dd-desc">{desc}</span>
                      </span>
                      <i className="bi bi-arrow-right-short nav-dd-arrow" />
                    </Link>
                  ))}
                </div>
                <div className="nav-dd-footer">
                  <Link href="/platform" onClick={closeAll}>
                    Explore Platform <i className="bi bi-arrow-right-short" />
                  </Link>
                </div>
              </div>
            </li>

            {/* Solutions mega-menu (full-width 2-column dropdown) */}
            <li className="nav-item nav-dropdown-item nav-mega-item" onMouseEnter={onSolEnter} onMouseLeave={onSolLeave}>
              <button
                className={`nav-link nav-dropdown-trigger${isSolutionActive ? ' active' : ''}`}
                onClick={() => { if (typeof window !== 'undefined' && window.innerWidth <= 991) setSolutionsOpen(prev => !prev); }}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
              >
                Solutions
                <span className={`nav-chevron${solutionsOpen ? ' open' : ''}`}>▼</span>
                {isSolutionActive && <span className="nav-active-dot" />}
              </button>

              <div className={`nav-dropdown nav-mega${solutionsOpen ? ' dd-open' : ''}`}>
                <div className="nav-mega-inner">
                  <div className="nav-mega-grid">

                    {/* Featured / brand panel — desktop only, hidden mobile */}
                    <div className="nav-mega-feature">
                      <div>
                        <span className="nav-mega-feature-eyebrow">Solutions</span>
                        <h3 className="nav-mega-feature-title">
                          Built for the way your industry actually works
                        </h3>
                        <p className="nav-mega-feature-body">
                          Bulk SMS, WhatsApp Business API, RCS and AI Voice — combined into workflows scoped to your vertical.
                        </p>
                      </div>
                      <Link
                        href="/solutions"
                        className="nav-mega-feature-cta"
                        onClick={closeAll}
                      >
                        Explore all solutions <i className="bi bi-arrow-right-short" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Column — by industry */}
                    <div className="nav-mega-col">
                      <div className="nav-mega-col-head">By Industry</div>
                      <div className="nav-mega-col-body">
                        {SOLUTION_INDUSTRIES.map(({ href, icon, label, desc, color }) => (
                          <Link
                            key={href}
                            href={href}
                            className={`nav-mega-card${pathname === href ? ' active' : ''}`}
                            onClick={closeAll}
                            style={{ '--ind-color': color }}
                          >
                            <span className="nav-mega-card-icon">
                              <i className={`bi ${icon}`} aria-hidden="true" />
                            </span>
                            <span className="nav-mega-card-text">
                              <span className="nav-mega-card-label">{label}</span>
                              <span className="nav-mega-card-desc">{desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column — by use case */}
                    <div className="nav-mega-col">
                      <div className="nav-mega-col-head">By Use Case</div>
                      <div className="nav-mega-col-body">
                        {SOLUTION_USE_CASES.map(({ href, icon, label, desc, color }) => (
                          <Link
                            key={`${href}-${label}`}
                            href={href}
                            className={`nav-mega-card${pathname === href ? ' active' : ''}`}
                            onClick={closeAll}
                            style={{ '--ind-color': color }}
                          >
                            <span className="nav-mega-card-icon">
                              <i className={`bi ${icon}`} aria-hidden="true" />
                            </span>
                            <span className="nav-mega-card-text">
                              <span className="nav-mega-card-label">{label}</span>
                              <span className="nav-mega-card-desc">{desc}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="nav-dd-footer">
                  <Link href="/solutions" onClick={closeAll}>
                    View all solutions <i className="bi bi-arrow-right-short" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>

            {/* Platform direct link */}
            <li className="nav-item">
              <Link
                href="/platform"
                className={`nav-link${pathname === '/platform' ? ' active' : ''}`}
                aria-current={pathname === '/platform' ? 'page' : undefined}
              >
                Platform
                {pathname === '/platform' && <span className="nav-active-dot" />}
              </Link>
            </li>

            {/* About Us / Blog (Support removed — replaced by Solutions) */}
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
            <Link href="/book-demo" className="nav-cta">Book a Demo →</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
