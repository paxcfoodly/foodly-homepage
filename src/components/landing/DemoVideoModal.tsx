'use client';

import { useEffect } from 'react';

type DemoVideoModalProps = {
  onClose: () => void;
};

export function DemoVideoModal({ onClose }: DemoVideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[200] flex animate-fade-in items-center justify-center bg-surface-dark/85 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-video w-full max-w-[920px] overflow-hidden rounded-2xl bg-ink-soft shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
      >
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/*
          Replace the <div> below with an <iframe> when a real demo URL exists, e.g.
          <iframe
            src="https://www.youtube.com/embed/<id>?autoplay=1"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        */}
        <div className="flex h-full flex-col items-center justify-center px-12 text-center">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal/20">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#1d9e75"
              stroke="#1d9e75"
              strokeWidth="2"
              strokeLinejoin="round"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </div>
          <div className="mb-2.5 text-[26px] font-bold text-white">데모 영상 준비 중입니다</div>
          <p className="max-w-md text-[15px] leading-[1.7] text-white/60">
            Foodly의 OCR 자동 입고와 장비 연동을 90초 안에 보여드릴 영상을 마무리하고 있습니다.
            먼저 사용해 보고 싶으시면 14일 무료 체험을 통해 직접 확인해 보세요.
          </p>
          <a
            href="/trial"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(29,158,117,0.4)]"
          >
            14일 무료 체험 시작
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="13 17 18 12 13 7" />
              <path d="M6 12h12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
