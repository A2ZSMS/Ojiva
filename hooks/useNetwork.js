'use client';
import { useEffect, useState } from 'react';

// Returns { saveData, isSlow, ready }
//   saveData: navigator.connection?.saveData === true
//   isSlow:   effectiveType === '2g' | 'slow-2g' | '3g'  OR saveData true
//   ready:    true once the client has evaluated (SSR default: false)
// SSR-safe: returns { saveData:false, isSlow:false, ready:false } on the server
export function useNetwork() {
  const [state, setState] = useState({ saveData: false, isSlow: false, ready: false });
  useEffect(() => {
    const c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!c) { setState({ saveData: false, isSlow: false, ready: true }); return; }
    const compute = () => {
      const et = c.effectiveType || '';
      setState({
        saveData: !!c.saveData,
        isSlow: !!c.saveData || et === '2g' || et === 'slow-2g' || et === '3g',
        ready: true,
      });
    };
    compute();
    c.addEventListener?.('change', compute);
    return () => c.removeEventListener?.('change', compute);
  }, []);
  return state;
}
