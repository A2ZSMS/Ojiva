'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const AD_ROUTES = ['/whatsapp-api-service', '/bulk-sms', '/rcs-messaging', '/website-development'];

export default function LayoutShell({ children, industryLinks, footer }) {
  const pathname = usePathname();
  const isAdPage = AD_ROUTES.some(r => pathname?.startsWith(r));

  if (isAdPage) return <>{children}</>;

  return (
    <div className={pathname === '/' ? 'site-shell home-shell' : 'site-shell'}>
      <Navbar industryLinks={industryLinks} />
      {children}
      {footer}
    </div>
  );
}
