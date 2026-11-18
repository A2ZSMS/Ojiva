'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
const PageFade = dynamic(() => import('./PageFade'));

// Split into their own chunks so the Google Ads landing pages (which show none
// of these) don't download them. Navbar still server-renders on normal pages.
const Navbar = dynamic(() => import('./Navbar'));
const ChatLauncher = dynamic(() => import('@/components/ui/ai-chat/ChatLauncher'), { ssr: false });
const LeadPopup = dynamic(() => import('@/components/ui/lead-popup/LeadPopup'), { ssr: false });
// Cursor-following card glow: mouse devices only, so it loads as its own tiny chunk.
const CardGlow = dynamic(() => import('@/components/ui/CardGlow'), { ssr: false });

const AD_ROUTES = ['/whatsapp-api-service', '/bulk-sms', '/rcs-messaging', '/website-development'];

// AI chat "Ask AI" button: hidden for now. Set to true to show it again.
const SHOW_AI_CHAT = false;

export default function LayoutShell({ children, industryLinks, footer }) {
  const pathname = usePathname();
  const isAdPage = AD_ROUTES.some(r => pathname?.startsWith(r));

  if (isAdPage) return <>{children}</>;

  return (
    <div className={pathname === '/' ? 'site-shell home-shell' : 'site-shell'}>
      <Navbar industryLinks={industryLinks} />
      {/* Soft fade-in of the page content on in-site navigation */}
      <PageFade />
      <CardGlow />
      {children}
      {footer}
      {SHOW_AI_CHAT && <ChatLauncher />}
      {/* Lead popup: blog + service pages only (its own ALLOWED list) */}
      <LeadPopup />
    </div>
  );
}
