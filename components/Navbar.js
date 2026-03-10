'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg ojiva-nav" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Ojiva <span>AI</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ojiva-nav-menu"
          aria-controls="ojiva-nav-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="ojiva-nav-menu">
          <ul className="navbar-nav mx-auto gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link${pathname === href ? ' active' : ''}`}
                  aria-current={pathname === href ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link href="/contact" className="btn-ojiva-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
