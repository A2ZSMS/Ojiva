'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/about',   label: 'About Us' },
  { href: '/blogs',   label: 'Blog'     },
  { href: '/support', label: 'Support'  },
];

const SERVICE_LINKS = [
  { href: '/sms',              icon: 'bi-chat-dots-fill',  label: 'Bulk SMS',         desc: 'Transactional, promotional & OTP',  color: '#1B48E0', bg: 'rgba(27,72,224,0.09)'  },
  { href: '/whatsapp',         icon: 'bi-whatsapp',        label: 'WhatsApp API',     desc: 'Official Meta BSP partner',         color: '#25D366', bg: 'rgba(37,211,102,0.09)' },
  { href: '/whatsapp-chatbot', icon: 'bi-robot',           label: 'WhatsApp Chatbot', desc: 'AI-powered conversation bot',       color: '#128C7E', bg: 'rgba(18,140,126,0.09)' },
  { href: '/rcs',              icon: 'bi-stars',           label: 'RCS Messaging',    desc: 'Rich cards & carousels',            color: '#FF6D42', bg: 'rgba(255,109,66,0.09)'  },
  { href: '/voice',            icon: 'bi-telephone-fill',  label: 'Bulk Voice Call',  desc: 'IVR, OBD & AI voice bots',          color: '#7C3AED', bg: 'rgba(124,58,237,0.09)'  },
];


export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [servicesOpen,  setServicesOpen]  = useState(false);

  // Only home page gets transparent navbar — all other pages stay white
  const isLightPage = pathname !== '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServiceActive = SERVICE_LINKS.some(s => pathname === s.href);

  return (
    <nav
      className={`navbar navbar-expand-lg ojiva-nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}${isLightPage ? ' light-page' : ''}`}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" href="/" aria-label="Ojiva AI Home">
          <Image
            src={scrolled || isLightPage ? "/ojiva-logo-optimized.png" : "/ojiva-logo-white.png"}
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

            {/* Services dropdown */}
            <li className="nav-item nav-dropdown-item">
              <button
                className={`nav-link nav-dropdown-trigger${isServiceActive ? ' active' : ''}`}
                onClick={() => { if (window.innerWidth <= 991) setServicesOpen(prev => !prev); }}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <span className={`nav-chevron${servicesOpen ? ' open' : ''}`}>▼</span>
                {isServiceActive && <span className="nav-active-dot" />}
              </button>

              <div className={`nav-dropdown${servicesOpen ? ' mobile-open' : ''}`}>
                <div className="nav-dd-header">
                  <span className="nav-dd-tag">Our Services</span>
                </div>
                <div className="nav-dd-body">
                  {SERVICE_LINKS.map(({ href, icon, label, desc, color, bg }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`nav-dropdown-link${pathname === href ? ' active' : ''}`}
                      onClick={() => setServicesOpen(false)}
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
                  <Link href="/platform" onClick={() => setServicesOpen(false)}>
                    Explore Platform <i className="bi bi-arrow-right-short" />
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
  );
}
