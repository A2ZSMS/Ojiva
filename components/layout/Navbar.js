'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Top-level navigation links shown right of the dropdowns.
// /support intentionally removed — the role of /support has been
// replaced by /solutions which serves a clearer purpose.
const NAV_LINKS = [
  { href: '/about',   label: 'About Us'   },
  { href: '/blogs',   label: 'Blog'       },
  { href: '/contact', label: 'Contact Us' },
];

const SERVICE_LINKS = [
  { href: '/sms',              icon: 'bi-chat-dots-fill',  label: 'Bulk SMS',         desc: 'Transactional, promotional & OTP',  color: '#1D4ED8', bg: 'rgba(59,130,246,0.10)'  },
  { href: '/whatsapp',         icon: 'bi-whatsapp',        label: 'WhatsApp API',     desc: 'Official Meta BSP partner',         color: '#166534', bg: 'rgba(37,211,102,0.10)' },
  { href: '/whatsapp-chatbot', icon: 'bi-robot',           label: 'WhatsApp Chatbot', desc: 'AI-powered conversation bot',       color: '#047857', bg: 'rgba(16,185,129,0.10)' },
  { href: '/rcs',              icon: 'bi-stars',           label: 'RCS Messaging',    desc: 'Rich cards & carousels',            color: '#0369A1', bg: 'rgba(14,165,233,0.10)'  },
  { href: '/voice',            icon: 'bi-telephone-fill',  label: 'Bulk Voice Call',  desc: 'IVR, OBD & AI voice bots',          color: '#6D28D9', bg: 'rgba(139,92,246,0.10)'  },
  { href: '/otp',              icon: 'bi-shield-lock-fill',label: 'OTP & 2FA',        desc: 'SMS, WhatsApp & Voice OTP',         color: '#B45309', bg: 'rgba(245,158,11,0.12)' },
];

// "By Use Case" — common cross-industry workflows, each linked to the most
// relevant existing channel page or solution. These are used as quick entry
// points; rebuild when dedicated use-case pages exist.
const SOLUTION_USE_CASES = [
  { href: '/otp',                          icon: 'bi-shield-lock-fill', label: 'OTP & 2FA',           desc: 'Login, payments, KYC verification',         color: '#1B48E0' },
  { href: '/solutions/ecommerce-retail',   icon: 'bi-cart-x',           label: 'Cart Recovery',       desc: 'Win back abandoned baskets',                color: '#1B48E0' },
  { href: '/solutions/healthcare',         icon: 'bi-calendar-check',   label: 'Appointment Reminders', desc: 'Reduce no-shows across appointments',     color: '#1B48E0' },
  { href: '/whatsapp-chatbot',             icon: 'bi-headset',          label: 'Customer Support',    desc: 'AI + human concierge on WhatsApp',          color: '#1B48E0' },
  { href: '/whatsapp',                     icon: 'bi-megaphone-fill',   label: 'Marketing Campaigns', desc: 'Two-way campaigns over WhatsApp & RCS',     color: '#1B48E0' },
  { href: '/solutions/banking-finance',    icon: 'bi-cash-stack',       label: 'Collections & EMI',   desc: 'Pre-due, due, overdue reminder cadences',   color: '#1B48E0' },
];


export default function Navbar({ industryLinks = [] }) {
  const pathname = usePathname();
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [servicesOpen,   setServicesOpen]   = useState(false);
  const [solutionsOpen,  setSolutionsOpen]  = useState(false);

  // All pages use white navbar — hero is now light-themed
  const isLightPage = true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMenuOpen(false);
      setServicesOpen(false);
      setSolutionsOpen(false);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  const isServiceActive  = SERVICE_LINKS.some(s => pathname === s.href);
  const isSolutionActive = pathname === '/solutions' || pathname.startsWith('/solutions/');

  const isHome = pathname === '/';

  // Sample a one-pixel band at the header centre. Percentage root margins
  // resolve against viewport width, so they cannot reliably locate the header
  // on tall mobile screens. Rebuild the pixel band when the viewport changes.
  const [overDark, setOverDark] = useState(false);
  useEffect(() => {
    if (!isHome || typeof IntersectionObserver === 'undefined') return; // class is gated by isHome
    let io;
    let frame;
    const connect = () => {
      io?.disconnect();
      const header = document.querySelector('nav.ojiva-nav');
      const sampleY = Math.min(Math.round((header?.offsetHeight || 80) / 2), window.innerHeight - 1);
      const sections = [...document.querySelectorAll('[data-nav-dark], .site-footer')];
      const hits = new Set(sections.filter((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      }));
      setOverDark(hits.size > 0);
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.isIntersecting ? hits.add(entry.target) : hits.delete(entry.target));
        setOverDark(hits.size > 0);
      }, { rootMargin: `-${sampleY}px 0px -${window.innerHeight - sampleY - 1}px 0px` });
      sections.forEach((section) => io.observe(section));
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(connect);
    };
    schedule();
    const mutations = new MutationObserver((records) => {
      if (records.some((record) => [...record.addedNodes].some((node) =>
        node.nodeType === 1 && (node.matches('[data-nav-dark]') || node.querySelector('[data-nav-dark]'))
      ))) schedule();
    });
    mutations.observe(document.querySelector('.site-shell') || document.body, { childList: true, subtree: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      io?.disconnect();
      mutations.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, [isHome, pathname]);

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
  const dropdownFocus = useRef(null);

  useEffect(() => {
    const item = dropdownFocus.current;
    if (!item) return;
    // Wait for the disclosure's visibility transition before moving focus.
    const timer = setTimeout(() => {
      item.querySelector('.dd-open a')?.focus();
      dropdownFocus.current = null;
    }, 220);
    return () => clearTimeout(timer);
  }, [servicesOpen, solutionsOpen]);

  const dropdownKeys = (event, setOpen, setOther, timer) => {
    if (event.key !== 'ArrowDown' && event.key !== 'Escape') return;
    event.preventDefault();
    clearTimeout(timer.current);
    if (event.key === 'Escape') {
      dropdownFocus.current = null;
      setOpen(false);
      event.currentTarget.querySelector('.nav-dropdown-trigger')?.focus();
    } else {
      const item = event.currentTarget;
      if (item.querySelector('.dd-open')) {
        item.querySelector('.dd-open a')?.focus();
        return;
      }
      dropdownFocus.current = item;
      setOpen(true);
      setOther(false);
    }
  };

  const onSvcEnter = () => {
    if (window.innerWidth <= 991) return;
    clearTimeout(svcTimer.current);
    setServicesOpen(true);
    setSolutionsOpen(false);          // close the other one
  };
  const onSvcLeave = (event) => {
    if (event.currentTarget.contains(document.activeElement)) return;
    if (window.innerWidth <= 991) return;
    svcTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const onSolEnter = () => {
    if (window.innerWidth <= 991) return;
    clearTimeout(solTimer.current);
    setSolutionsOpen(true);
    setServicesOpen(false);           // close the other one
  };
  const onSolLeave = (event) => {
    if (event.currentTarget.contains(document.activeElement)) return;
    if (window.innerWidth <= 991) return;
    solTimer.current = setTimeout(() => setSolutionsOpen(false), 150);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ojiva-nav${isHome ? ' nav--fixed' : ''}${scrolled ? ' scrolled' : ''}${isHome && overDark ? ' over-dark' : ''}${menuOpen ? ' menu-open' : ''}${isLightPage ? ' light-page' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Logo — white when homepage hero is in view, coloured otherwise */}
        <Link className="navbar-brand" href="/" aria-label="Ojiva AI Home">
          <Image
            src={isHome && (!scrolled || overDark) && !menuOpen ? '/ojiva-logo-white.webp' : '/ojiva-logo-192.v1.webp'}
            alt="Ojiva AI — AI Communication Platform for Bulk SMS, WhatsApp Business API, RCS & Voice"
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
            <li className="nav-item nav-dropdown-item" onMouseEnter={onSvcEnter} onMouseLeave={onSvcLeave}
              onKeyDown={(event) => dropdownKeys(event, setServicesOpen, setSolutionsOpen, svcTimer)}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false); }}>
              <button
                className={`nav-link nav-dropdown-trigger${isServiceActive ? ' active' : ''}`}
                onClick={(event) => { clearTimeout(svcTimer.current); setServicesOpen(prev => event.detail > 0 && window.innerWidth > 991 ? true : !prev); setSolutionsOpen(false); }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-dropdown"
              >
                Services
                <span className={`nav-chevron${servicesOpen ? ' open' : ''}`}>▼</span>
                {isServiceActive && <span className="nav-active-dot" />}
              </button>

              <div id="services-dropdown" className={`nav-dropdown${servicesOpen ? ' dd-open' : ''}`} inert={!servicesOpen}>
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
            <li className="nav-item nav-dropdown-item nav-mega-item" onMouseEnter={onSolEnter} onMouseLeave={onSolLeave}
              onKeyDown={(event) => dropdownKeys(event, setSolutionsOpen, setServicesOpen, solTimer)}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setSolutionsOpen(false); }}>
              <button
                className={`nav-link nav-dropdown-trigger${isSolutionActive ? ' active' : ''}`}
                onClick={(event) => { clearTimeout(solTimer.current); setSolutionsOpen(prev => event.detail > 0 && window.innerWidth > 991 ? true : !prev); setServicesOpen(false); }}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
                aria-controls="solutions-dropdown"
              >
                Solutions
                <span className={`nav-chevron${solutionsOpen ? ' open' : ''}`}>▼</span>
                {isSolutionActive && <span className="nav-active-dot" />}
              </button>

              <div id="solutions-dropdown" className={`nav-dropdown nav-mega${solutionsOpen ? ' dd-open' : ''}`} inert={!solutionsOpen}>
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
                        {industryLinks.map(({ href, icon, label, desc, color }) => (
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
