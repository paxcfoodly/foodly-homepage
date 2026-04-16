'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const LINKS = [
  { href: '#features', label: '기능' },
  { href: '#workflow', label: '도입 방법' },
  { href: '#pricing', label: '요금제' },
  { href: '#testimonials', label: '고객 후기' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] grid h-16 grid-cols-[1fr_auto_1fr] items-center border-b border-stone-light/60 bg-cream/90 px-[60px] backdrop-blur-md transition-shadow duration-300 max-[1024px]:px-8 max-[767px]:flex max-[767px]:h-14 max-[767px]:justify-between max-[767px]:px-5 ${
          scrolled ? 'shadow-[0_2px_12px_rgba(14,27,22,0.06)]' : ''
        }`}
      >
        <div className="justify-self-start">
          <Link href="/" aria-label="Foodly 홈" className="no-underline">
            <Logo variant="dark" size={26} />
          </Link>
        </div>

        <div className="flex items-center gap-8 justify-self-center max-[767px]:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-stone no-underline transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://foodly-fe.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium text-stone no-underline transition-colors hover:text-ink"
          >
            Foodly-MES
          </a>
        </div>

        <div className="flex items-center gap-2.5 justify-self-end max-[767px]:hidden">
          <a
            href="#"
            className="rounded-full border border-stone-light px-5 py-2 text-[14px] font-medium text-ink no-underline transition-all hover:border-teal hover:text-teal"
          >
            로그인
          </a>
          <Link
            href="/trial"
            className="rounded-full bg-teal px-5 py-2 text-[14px] font-semibold text-white no-underline transition-all hover:-translate-y-px hover:bg-teal-dark hover:shadow-[0_4px_16px_rgba(29,158,117,0.35)]"
          >
            무료 체험 →
          </Link>
        </div>

        <button
          aria-label="메뉴"
          onClick={() => setMenuOpen((v) => !v)}
          className="z-[200] hidden cursor-pointer flex-col gap-[5px] border-none bg-transparent p-1 max-[767px]:flex"
        >
          <span
            className={`block h-0.5 w-[22px] rounded-[2px] bg-ink transition-all ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded-[2px] bg-ink transition-all ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-[22px] rounded-[2px] bg-ink transition-all ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className={`fixed inset-0 z-[150] ${
          menuOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center gap-8 bg-cream transition-opacity ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className="font-serif text-[32px] text-ink no-underline transition-colors hover:text-teal"
          >
            {l.label}
          </a>
        ))}
        <div className="mt-2 flex flex-col items-center gap-3">
          <a
            href="#"
            onClick={close}
            className="rounded-full border border-stone-light px-[18px] py-2 font-sans text-sm text-ink no-underline hover:border-teal hover:text-teal"
          >
            로그인
          </a>
          <Link
            href="/trial"
            onClick={close}
            className="rounded-full bg-teal px-5 py-2 font-sans text-sm font-bold text-white no-underline hover:bg-teal-dark"
          >
            무료 체험 →
          </Link>
        </div>
      </div>
    </>
  );
}
