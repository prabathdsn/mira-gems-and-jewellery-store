'use client';

import { useEffect } from 'react';

export default function ScrollbarManager() {
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const root = document.documentElement;

    const handleScroll = () => {
      root.classList.add('is-scrolling');

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        root.classList.remove('is-scrolling');
      }, 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) clearTimeout(timer);
      root.classList.remove('is-scrolling');
    };
  }, []);

  return null;
}
