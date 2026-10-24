'use client';

/* Desktop-only hero visuals — the only client code in the homepage hero.
   The copy around them is a server component with CSS entrances. */

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useNetwork } from '@/hooks/useNetwork';
import HeroVideo from './HeroVideo';

// Desktop-only visual — loaded lazily so mobile never downloads/hydrates it
// (the galaxy is hidden with d-none d-lg-flex, so mobile output is unchanged).
const GalaxyCanvas = dynamic(() => import('@/components/home/galaxy/GalaxyCanvas'));

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 992px)');
    const syncDesktop = () => setIsDesktop(media.matches);
    const frame = window.requestAnimationFrame(syncDesktop);
    media.addEventListener('change', syncDesktop);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener('change', syncDesktop);
    };
  }, []);
  return isDesktop;
}

/* Background video — desktop only (992px+), kept off slow connections */
export function HeroBgVideo() {
  const isDesktop = useIsDesktop();
  const { isSlow, ready: networkReady } = useNetwork();
  return <HeroVideo enabled={isDesktop && networkReady && !isSlow} />;
}

export function HeroGalaxy() {
  const isDesktop = useIsDesktop();
  const { isSlow } = useNetwork();
  return isDesktop && !isSlow ? <GalaxyCanvas /> : null;
}
