'use client';

import LeftPanel, { LeftPanelDetails } from './sections/LeftPanel';
import DemoForm from './sections/DemoForm';
import PerksSection from './sections/PerksSection';
import ReducedMotion from '@/components/ui/ReducedMotion';

/* ── Page ───────────────────────────────────────────────
   DOM order = phone order: headline → form → details. On desktop the grid
   places the hero and details together in the left column (see .dbp-split). */
export default function DemoBooking() {
  return (
    <ReducedMotion>
    <main className="dbp-page">
      <div className="dbp-split">
        <LeftPanel />
        <div className="dbp-right">
          <div className="dbp-right-inner">
            <DemoForm />
            <PerksSection />
          </div>
        </div>
        <LeftPanelDetails />
      </div>
    </main>
    </ReducedMotion>
  );
}
