import Link from 'next/link';

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-10 pb-20 pt-[100px] max-[1024px]:px-7 max-[1024px]:pb-[70px] max-[1024px]:pt-[90px] max-[767px]:min-h-[auto] max-[767px]:px-5 max-[767px]:pb-[60px] max-[767px]:pt-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(29,158,117,0.1) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: NOISE_BG }}
      />

      <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full bg-teal-light px-[14px] py-1.5 text-xs font-bold tracking-[0.3px] text-teal-dark max-[767px]:px-3 max-[767px]:text-[11px]">
        <span className="h-1.5 w-1.5 animate-pulse-brand rounded-full bg-teal" />
        HACCP 인증·미인증 업체 모두 사용 가능
      </div>

      <h1
        className="mb-3 max-w-[900px] animate-fade-up text-center font-serif leading-[1.1] text-ink"
        style={{ fontSize: 'clamp(44px,7vw,84px)', animationDelay: '0.15s' }}
      >
        식품 제조, 이제
        <br />
        <em className="text-teal">수기 없이</em> 관리하세요
      </h1>

      <p
        className="mb-9 max-w-[680px] animate-fade-up text-center font-normal leading-[1.65] text-stone"
        style={{ fontSize: 'clamp(17px,2vw,20px)', animationDelay: '0.3s' }}
      >
        거래명세서 사진 한 장으로 입고 완료.
        <br className="max-[640px]:hidden" />
        <span className="max-[640px]:hidden"> </span>
        장비 데이터는 자동 수신, 식약처 수불대장은 원클릭 출력.
      </p>

      <div
        className="mb-16 flex animate-fade-up justify-center gap-3.5 max-[767px]:w-full max-[767px]:flex-col max-[767px]:items-center max-[767px]:gap-2.5"
        style={{ animationDelay: '0.45s' }}
      >
        <Link
          href="/trial"
          className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-bold text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-[0_8px_32px_rgba(29,158,117,0.4)] max-[767px]:w-full max-[767px]:max-w-[320px] max-[767px]:justify-center max-[767px]:px-6 max-[767px]:py-3 max-[767px]:text-[15px]"
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
        <a
          href="#features"
          className="rounded-full border-[1.5px] border-stone-light bg-transparent px-8 py-3.5 text-base font-medium text-ink no-underline transition-all hover:-translate-y-0.5 hover:border-ink max-[767px]:w-full max-[767px]:max-w-[320px] max-[767px]:px-6 max-[767px]:py-3 max-[767px]:text-[15px] max-[767px]:text-center"
        >
          기능 살펴보기
        </a>
      </div>

      <div
        className="flex animate-fade-up max-[1024px]:gap-0 max-[767px]:w-full max-[767px]:max-w-[280px] max-[767px]:flex-col max-[767px]:overflow-hidden max-[767px]:rounded-2xl max-[767px]:border max-[767px]:border-stone-light"
        style={{ animationDelay: '0.6s' }}
      >
        <Stat num="80" unit="%" label="입고 입력 시간 단축" highlight="unit" />
        <Stat num="0" unit="원" label="카드 없이 체험 시작" highlight="num" />
        <Stat num="3" unit="분" label="첫 수불대장 출력까지" highlight="unit" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-stone-medium max-[767px]:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function Stat({
  num,
  unit,
  label,
  highlight,
}: {
  num: string;
  unit: string;
  label: string;
  highlight: 'num' | 'unit';
}) {
  return (
    <div className="border-r border-stone-light px-9 text-center first:pl-0 last:border-r-0 last:pr-0 max-[1024px]:px-6 max-[767px]:w-full max-[767px]:border-b max-[767px]:border-r-0 max-[767px]:border-stone-light max-[767px]:px-0 max-[767px]:py-4 max-[767px]:last:border-b-0">
      <div className="font-serif text-4xl leading-none text-ink max-[767px]:text-[28px]">
        {highlight === 'num' ? <span className="text-teal">{num}</span> : num}
        {highlight === 'unit' ? <span className="text-teal">{unit}</span> : unit}
      </div>
      <div className="mt-1 text-xs text-stone">{label}</div>
    </div>
  );
}
