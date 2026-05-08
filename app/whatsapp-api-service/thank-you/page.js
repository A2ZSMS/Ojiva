import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Thank You',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThankYouPage() {
  return (
    <div className="ty-page">
      {/* Header */}
      <header className="lp-header">
        <div className="lp-header-inner">
          <Link href="/" aria-label="Ojiva AI Home">
            <Image
              src="/ojiva-logo-optimized.png"
              alt="Ojiva AI"
              width={110}
              height={32}
              priority
              unoptimized
              style={{ height: "auto" }}
            />
          </Link>
          <div className="lp-header-right">
            <a href="tel:+918431086185" className="lp-header-phone">
              {/* <i className="bi bi-telephone-fill" /> +91-843-108-6185 */}
            </a>
          </div>
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
            Thank you for reaching out. Our India-based team will contact you
            within <strong>2 business hours</strong> to get your WhatsApp
            Business API live.
          </p>

          <div className="ty-steps">
            {[
              {
                num: "1",
                text: "Check your inbox — a confirmation email is on the way.",
              },
              {
                num: "2",
                text: "Our onboarding specialist will WhatsApp you to schedule a quick call.",
              },
              { num: "3", text: "Go live with your WhatsApp API in 48 hours." },
            ].map(({ num, text }) => (
              <div key={num} className="ty-step">
                <span className="ty-step-num">{num}</span>
                <span className="ty-step-text">{text}</span>
              </div>
            ))}
          </div>

          <div className="ty-actions">
            <Link href="/book-demo" className="lp-btn-primary">
              <i className="bi bi-camera-video" />
              Book a Full Demo Instead
            </Link>
            <Link href="/" className="ty-home-link">
              ← Back to Ojiva AI
            </Link>
          </div>

          <div className="ty-contact">
            <p>
              Need help right now?{" "}
              <a
                href="https://wa.me/918431086185"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp" /> WhatsApp Us
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="lp-foot">
        <div className="lp-container">
          <p>
            © {new Date().getFullYear()} Ojiva AI ·{" "}
            <Link href="/privacy">Privacy Policy</Link> ·{" "}
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
