'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import ChatLauncher from '@/components/ui/ai-chat/ChatLauncher';
import LeadPopup from '@/components/ui/lead-popup/LeadPopup';

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
      {children}
      {footer}
      {SHOW_AI_CHAT && <ChatLauncher />}
      {/* Lead popup: blog + service pages only (its own ALLOWED list) */}
      <LeadPopup />
    </div>
  );
}
