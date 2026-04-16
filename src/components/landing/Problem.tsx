type ProblemCardProps = {
  num: string;
  title: string;
  body: string;
  icon: React.ReactNode;
  iconBg: string;
};

const CARDS: ProblemCardProps[] = [
  {
    num: '01',
    title: '엑셀·수기 관리의 한계',
    body: '입고 때마다 거래명세서를 보며 손으로 옮겨 적는 반복 작업. 계산 오류로 재고 장부와 실물이 늘 달라집니다.',
    iconBg: 'rgba(255,100,80,0.12)',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#F09595"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '법정 서류 준비에 수일 소요',
    body: '식약처 원료수불대장 등 법정 서류를 감사 전날 밤새 정리. HACCP 심사 때마다 반복되는 고통스러운 루틴.',
    iconBg: 'rgba(250,192,100,0.12)',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FAC775"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '생산 데이터 단절',
    body: '출하 장비 데이터를 수동으로 재입력하거나 아예 집계하지 않음. 실제 생산량과 재고를 신뢰할 수 없는 상태.',
    iconBg: 'rgba(159,225,203,0.12)',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#9FE1CB"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-surface-dark">
      <div
        className="absolute inset-x-0 top-0 h-20 bg-cream max-[767px]:h-12"
        style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
      />
      <div className="py-[100px] max-[767px]:py-16">
        <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
          <div className="reveal">
            <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-medium">
              현실 인식
            </div>
          </div>
          <h2
            className="reveal reveal-d1 mb-4 font-serif leading-[1.2] text-white"
            style={{ fontSize: 'clamp(32px,4vw,52px)' }}
          >
            소규모 식품 제조,
            <br />
            이렇게 관리하고 계시지 않나요?
          </h2>
          <div className="reveal reveal-d2 mt-14 grid grid-cols-3 gap-0.5 overflow-hidden rounded-2xl bg-white/[0.06] max-[1024px]:grid-cols-1">
            {CARDS.map((c) => (
              <ProblemCard key={c.num} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ num, title, body, icon, iconBg }: ProblemCardProps) {
  return (
    <div className="group relative overflow-hidden bg-surface-elevated px-8 py-9 transition-colors hover:bg-[#1a5c47] max-[767px]:p-7">
      <div className="mb-5 font-mono text-[11px] tracking-[1px] text-white/25">{num}</div>
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div className="mb-2.5 text-lg font-bold leading-[1.3] text-white max-[767px]:text-base">
        {title}
      </div>
      <div className="text-sm leading-[1.7] text-white/55">{body}</div>
      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal to-transparent transition-transform duration-[0.35s] ease-out group-hover:scale-x-100" />
    </div>
  );
}
