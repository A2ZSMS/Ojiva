'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageFade — soft fade-in when the visitor moves to another page (Nov 2026).
 *
 * On each in-site navigation the new page's content (#main-content) fades in
 * over ~0.3s, so pages no longer snap. The navbar and footer do not animate.
 *
 * Deliberately plain CSS, not the browser View Transitions API: React's
 * <ViewTransition> (experimental.viewTransition) was tried first and left
 * pages frozen — menu and scroll effects dead — when a page loaded in a
 * background tab. A class + keyframes cannot block rendering.
 *
 * Never runs on the first page load, so it cannot delay first paint / LCP.
 * Styles: `.page-fade-in` in globals.css (off for "reduce motion").
 * Renders nothing.
 */
export default function PageFade() {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useLayoutEffect(() => {
    if (previous.current === pathname) return; // first load, or same page
    previous.current = pathname;

    const el = document.getElementById('main-content');
    if (!el) return;

    el.classList.remove('page-fade-in');
    void el.offsetWidth; // restart the animation if one was mid-flight
    el.classList.add('page-fade-in');

    // Child animations bubble up too — only react to the page's own.
    const onEnd = (e) => {
      if (e.target !== el) return;
      el.classList.remove('page-fade-in');
      el.removeEventListener('animationend', onEnd);
    };
    el.addEventListener('animationend', onEnd);
    return () => el.removeEventListener('animationend', onEnd);
  }, [pathname]);

  return null;
}
