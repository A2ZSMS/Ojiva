import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="lp-foot">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Ojiva AI ·{" "}
          <Link href="/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/terms">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
