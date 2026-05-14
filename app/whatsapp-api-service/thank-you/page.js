import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Thank You — Ojiva AI',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThankYouPage() {
  return (
    <div className="ty-page">

      {/* Header — logo only, no phone number */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" aria-label="Ojiva AI Home">
            <Image
              src="/ojiva-logo-optimized.webp"
              alt="Ojiva AI"
              width={110}
              height={32}
              priority
              unoptimized
              style={{ height: 'auto' }}
            />
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="ty-main">
        <div className="ty-card">

          <div className="ty-icon-wrap">
            <div className="ty-icon-ring" />
            <span className="ty-icon">✅</span>
          </div>

          <h1 className="ty-h1">You&rsquo;re all set!</h1>
          <p className="ty-sub">
            Our India-based team will contact you within{' '}
            <strong>2 business hours</strong> to get your WhatsApp Business API live.
          </p>

          {/* What happens next */}
          <div className="ty-steps">
            {[
              { num: '1', text: 'Check your inbox — a confirmation email is on its way.' },
              { num: '2', text: 'Our onboarding specialist will WhatsApp you to schedule a quick call.' },
              { num: '3', text: 'Go live with your WhatsApp API in 48 hours.' },
            ].map(({ num, text }) => (
              <div key={num} className="ty-step">
                <span className="ty-step-num">{num}</span>
                <span className="ty-step-text">{text}</span>
              </div>
            ))}
          </div>

          {/* Instant WhatsApp chat box */}
          <div className="ty-wa-box">
            <i className="bi bi-whatsapp" style={{ color: '#25d366', fontSize: '1.5rem', flexShrink: 0 }} />
            <div className="ty-wa-text">
              <p className="ty-wa-title">Need instant help?</p>
              <p className="ty-wa-desc">Chat with our team on WhatsApp right now.</p>
            </div>
            <a
              href="https://wa.me/918431086185?text=Hi%2C%20I%20just%20submitted%20a%20form%20for%20WhatsApp%20API"
              target="_blank"
              rel="noopener noreferrer"
              className="ty-wa-btn"
            >
              <i className="bi bi-whatsapp" /> Chat Now
            </a>
          </div>

          {/* Explore links */}
          <p className="ty-explore-label">Explore while you wait</p>
          <div className="ty-actions">
            <Link href="/" className="ty-nav-card">
              <i className="bi bi-house-fill" style={{ color: '#1B48E0' }} />
              <span className="ty-nav-card-text">
                <strong>Homepage</strong>
                <small>See all our products &amp; services</small>
              </span>
              <i className="bi bi-arrow-right-short ty-nav-card-arrow" />
            </Link>
            <Link href="/whatsapp/" className="ty-nav-card">
              <i className="bi bi-whatsapp" style={{ color: '#25d366' }} />
              <span className="ty-nav-card-text">
                <strong>WhatsApp API</strong>
                <small>Features, pricing &amp; use cases</small>
              </span>
              <i className="bi bi-arrow-right-short ty-nav-card-arrow" />
            </Link>
            <Link href="/whatsapp-chatbot/" className="ty-nav-card">
              <i className="bi bi-robot" style={{ color: '#7C3AED' }} />
              <span className="ty-nav-card-text">
                <strong>WhatsApp Chatbot</strong>
                <small>Automate replies 24/7</small>
              </span>
              <i className="bi bi-arrow-right-short ty-nav-card-arrow" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="lp-foot">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Ojiva AI ·{' '}
            <Link href="/privacy">Privacy Policy</Link> ·{' '}
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
