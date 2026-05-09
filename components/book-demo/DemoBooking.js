'use client';

import LeftPanel from './sections/LeftPanel';
import DemoForm from './sections/DemoForm';
import PerksSection from './sections/PerksSection';

/* ── Page ───────────────────────────────────────────── */
export default function DemoBooking() {
  return (
    <main className="dbp-page">
      <div className="dbp-split">
        <LeftPanel />
        <div className="dbp-right">
          <div className="dbp-right-inner">
            <DemoForm />
            <PerksSection />
          </div>
        </div>
      </div>
    </main>
  );
}
