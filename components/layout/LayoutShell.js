'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const AD_ROUTES = ['/whatsapp-api-service', '/bulk-sms', '/rcs-messaging'];

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdPage = AD_ROUTES.some(r => pathname?.startsWith(r));

  if (isAdPage) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
