'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FloatingPill() {
  const [scrolled, setScrolled] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide pill once the footer enters the viewport to avoid overlapping
  // the footer badges in the bottom-right corner.
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const obs = new IntersectionObserver(([entry]) => setAtFooter(entry.isIntersecting), {
      threshold: 0,
      rootMargin: '0px 0px -40px 0px',
    });
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const visible = scrolled && !atFooter;

  return (
    <Link
      href="/trial"
      className={`fixed bottom-7 right-7 z-50 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[13px] font-bold text-white no-underline shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-[0_12px_40px_rgba(29,158,117,0.5)] max-[767px]:bottom-5 max-[767px]:right-4 max-[767px]:px-4 max-[767px]:py-2.5 max-[767px]:text-xs ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span className="h-[7px] w-[7px] animate-pulse-brand rounded-full bg-teal-medium" />
      14일 무료 체험
    </Link>
  );
}
