'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        delay: 0,
      });
    });
  }, []);

  return null;
}
