import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Thank You — Ojiva AI',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#060d1a', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <Link href="/" aria-label="Ojiva AI Home">
          <Image src="/ojiva-logo-white.png" alt="Ojiva AI" width={130} height={38} priority unoptimized style={{ height: 'auto' }} />
        </Link>
      </header>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '20px',
          padding: '3rem 2.5rem',
          maxWidth: '520px',
          width: '100%',
          textAlign: 'center',
        }}>

          {/* Icon */}
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'rgba(52,211,153,0.15)',
            border: '2px solid rgba(52,211,153,0.40)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', margin: '0 auto 1.5rem',
          }}>✅</div>

          <h1 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            You&rsquo;re all set!
          </h1>
          <p style={{ color: 'rgba(148,163,184,0.90)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Thank you for reaching out. Our India-based team will contact you within{' '}
            <strong style={{ color: '#e2e8f0' }}>2 business hours</strong>.
          </p>

          {/* Steps */}
          <div style={{ textAlign: 'left', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Check your inbox — a confirmation email is on its way.',
              'Our specialist will call or WhatsApp you to understand your needs.',
              'Go live with your chosen channel in 48 hours.',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{
                  minWidth: '24px', height: '24px', borderRadius: '50%',
                  background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
                  color: '#fff', fontSize: '0.72rem', fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{i + 1}</span>
                <span style={{ color: 'rgba(226,232,240,0.80)', fontSize: '0.9rem', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/book-demo" style={{
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              color: '#fff', padding: '0.85rem 2rem', borderRadius: '10px',
              fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
              display: 'block',
            }}>
              📅 Book a Live Demo
            </Link>
            <Link href="/" style={{
              color: 'rgba(148,163,184,0.75)', fontSize: '0.85rem',
              textDecoration: 'none', display: 'block',
            }}>
              ← Back to Ojiva AI
            </Link>
          </div>

          {/* WhatsApp */}
          <p style={{ marginTop: '1.5rem', color: 'rgba(148,163,184,0.60)', fontSize: '0.82rem' }}>
            Need help now?{' '}
            <a href="https://wa.me/918431086185" target="_blank" rel="noopener noreferrer"
              style={{ color: '#34d399', textDecoration: 'none', fontWeight: 600 }}>
              💬 WhatsApp us
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: '1rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
        <p style={{ color: 'rgba(148,163,184,0.45)', fontSize: '0.78rem', margin: 0 }}>
          © {new Date().getFullYear()} Ojiva AI ·{' '}
          <Link href="/privacy" style={{ color: 'inherit' }}>Privacy</Link> ·{' '}
          <Link href="/terms"   style={{ color: 'inherit' }}>Terms</Link>
        </p>
      </footer>
    </div>
  );
}
