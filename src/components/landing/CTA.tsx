import Link from 'next/link';
import { DemoButton } from './DemoButton';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-surface-dark px-10 py-[120px] text-center max-[767px]:px-5 max-[767px]:py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(29,158,117,0.2) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-[1]">
        <div className="reveal">
          <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-medium">
            지금 시작하세요
          </div>
        </div>
        <h2
          className="reveal reveal-d1 mx-auto mb-4 max-w-[700px] font-bold leading-[1.2] text-white"
          style={{ fontSize: 'clamp(32px,4vw,52px)' }}
        >
          수기 관리, 오늘로
          <br />
          <em className="text-teal-medium">마지막 날로 만드세요</em>
        </h2>
        <p className="reveal reveal-d2 mx-auto mb-10 text-[17px] leading-[1.7] text-white/55">
          14일 동안 무료로 모든 기능을 사용해 보세요.
          <br />
          카드 등록 없이, 언제든 해지 가능합니다.
        </p>
        <div className="reveal reveal-d3 flex flex-wrap justify-center gap-3.5 max-[767px]:flex-col max-[767px]:items-center">
          <Link
            href="/trial"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-10 py-4 text-base font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-[0_8px_32px_rgba(29,158,117,0.5)] max-[767px]:w-full max-[767px]:max-w-[320px] max-[767px]:justify-center max-[767px]:px-7 max-[767px]:py-3.5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <polyline points="13 17 18 12 13 7" />
              <path d="M6 12h12" />
            </svg>
            14일 무료 체험 시작
          </Link>
          <DemoButton className="rounded-full border-[1.5px] border-white/25 bg-transparent px-10 py-4 text-base font-medium text-white transition-all hover:border-white/60 max-[767px]:w-full max-[767px]:max-w-[320px] max-[767px]:px-7 max-[767px]:py-3.5" />
        </div>
        <div className="reveal reveal-d4 mt-5 text-[13px] text-white/35">
          카드 없이 시작 · 언제든 해지 · 해지 시 데이터 전체 다운로드 제공
        </div>
      </div>
    </section>
  );
}
