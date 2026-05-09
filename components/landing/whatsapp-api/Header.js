'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="lp-header">
      <div className="lp-header-inner">
        <Link href="/" aria-label="Ojiva AI Home">
          <Image
            src="/ojiva-logo-optimized.png"
            alt="Ojiva AI"
            width={90}
            height={26}
            priority
            unoptimized
            style={{ height: "auto" }}
          />
        </Link>
      </div>
    </header>
  );
}
