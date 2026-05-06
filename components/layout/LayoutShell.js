'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import PageLoader from './PageLoader';

const AD_ROUTES = ['/whatsapp-api-service'];

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isAdPage = AD_ROUTES.some(r => pathname?.startsWith(r));

  if (isAdPage) return <>{children}</>;

  return (
    <>
      <PageLoader />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
