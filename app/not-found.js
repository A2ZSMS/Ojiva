import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist. Return to Ojiva AI home.',
  path: '/404',
});

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        padding: '4rem 1rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '540px' }}>

        {/* Big 404 */}
        <div
          style={{
            fontSize: 'clamp(6rem, 20vw, 10rem)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(90deg, #00c8f8 0%, #1B48E0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '0.5rem',
            letterSpacing: '-0.04em',
          }}
        >
          404
        </div>

        <span className="section-tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
          Page Not Found
        </span>

        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700,
            color: 'var(--dark)',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Looks like this page took a wrong turn
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Head back home or explore our services.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-hero-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-hero-outline">
            Contact Support →
          </Link>
        </div>

        {/* Quick links */}
        <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
            Popular Pages
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/sms',       label: 'Bulk SMS'       },
              { href: '/whatsapp',  label: 'WhatsApp API'   },
              { href: '/rcs',       label: 'RCS Messaging'  },
              { href: '/voice',     label: 'Voice Call'     },
              { href: '/platform',  label: 'Platform'       },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '50px',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.18s',
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
