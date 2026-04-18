'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

    // Initialize AOS (same config as A2ZSMS)
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    script.onload = () => {
      window.AOS && window.AOS.init({ duration: 800, once: true });
    };
    document.body.appendChild(script);
  }, []);
  return null;
}
