import Link from 'next/link';

type Plan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: '베이직',
    price: '₩29,000',
    desc: 'HACCP 미인증 소규모 업체. 수기 관리에서 막 벗어나려는 분들에게 적합합니다.',
    features: [
      '원료수불대장 자동 생성',
      'OCR 자동 입고 월 50건',
      '재고 현황 대시보드',
      '이메일 알림',
      '공급업체 마스터 관리',
    ],
    cta: '무료로 시작하기',
  },
  {
    name: '스탠다드',
    price: '₩69,000',
    desc: 'HACCP 인증 준비 중이거나 장비 연동이 필요한 업체에 최적입니다.',
    features: [
      '베이직 전체 포함',
      'OCR 자동 입고 월 200건',
      '장비 API 연동 1대',
      'HACCP 기록 모듈',
      '카카오 · 이메일 알림',
      '레시피 배합비율 관리',
    ],
    cta: '무료로 시작하기',
    featured: true,
  },
  {
    name: '프로',
    price: '₩139,000',
    desc: '다품목 대규모 생산 업체. 무제한 사용과 전담 지원이 필요한 분들에게 맞습니다.',
    features: [
      '스탠다드 전체 포함',
      'OCR 무제한',
      '장비 API 연동 무제한',
      '전담 온보딩 지원',
      'API 직접 연동',
      '우선 기술 지원',
    ],
    cta: '무료로 시작하기',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="text-center">
          <div className="reveal">
            <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
              요금제
            </div>
          </div>
          <h2
            className="reveal reveal-d1 mx-auto mb-3 font-serif leading-[1.2] text-ink"
            style={{ fontSize: 'clamp(32px,4vw,52px)' }}
          >
            규모에 맞게
            <br />
            <em className="text-teal">시작하세요</em>
          </h2>
          <p className="reveal reveal-d2 mx-auto text-[17px] leading-[1.7] text-stone">
            모든 요금제 14일 무료 체험 · 카드 없이 시작 · 언제든 해지 가능
          </p>
        </div>

        <div className="reveal reveal-d3 mt-14 grid grid-cols-3 items-stretch gap-0.5 overflow-hidden rounded-[20px] bg-stone-light max-[1024px]:grid-cols-1 max-[1024px]:gap-3 max-[1024px]:rounded-none max-[1024px]:bg-transparent">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
        <p className="reveal mt-6 text-center text-[13px] text-stone">
          HACCP 미인증 → 인증 취득 시 데이터 그대로 플랜 업그레이드 · 해지 시 수불대장 전체 PDF 다운로드 제공
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const base =
    'relative flex h-full flex-col p-10 transition-transform max-[767px]:p-7 max-[1024px]:rounded-2xl max-[1024px]:border max-[1024px]:border-stone-light';
  const cardBg = plan.featured
    ? 'bg-surface-dark'
    : 'bg-white hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]';
  const nameCls = plan.featured ? 'text-white/80' : 'text-stone';
  const priceCls = plan.featured ? 'text-white' : 'text-ink';
  const periodCls = plan.featured ? 'text-white/50' : 'text-stone';
  const descCls = plan.featured ? 'text-white/60 border-white/10' : 'text-stone border-stone-light';
  const featureCls = plan.featured ? 'text-white/75' : 'text-ink';
  const checkCls = plan.featured ? 'text-teal-medium' : 'text-teal';
  const btnCls = plan.featured
    ? 'bg-teal text-white hover:bg-teal-dark hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(29,158,117,0.35)]'
    : 'bg-transparent border-[1.5px] border-stone-light text-ink hover:border-teal hover:text-teal';

  return (
    <div
      className={`${base} ${cardBg} max-[767px]:order-none ${plan.featured ? 'max-[767px]:-order-1' : ''}`}
    >
      {/* Tag slot — reserved on every card so price/name align horizontally
          across all plans regardless of the featured badge. */}
      <div className="mb-4 flex h-7 items-center">
        {plan.featured && (
          <span className="inline-block rounded bg-teal-medium px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.5px] text-teal-dark">
            가장 많이 선택
          </span>
        )}
      </div>
      <div className={`mb-3 text-[13px] font-bold uppercase tracking-[0.5px] ${nameCls}`}>
        {plan.name}
      </div>
      <div className={`text-5xl font-extrabold leading-none tracking-tight max-[767px]:text-[38px] ${priceCls}`}>
        {plan.price} <span className={`text-sm font-medium ${periodCls}`}>/월</span>
      </div>
      <div className={`my-4 border-b pb-6 text-sm leading-[1.6] ${descCls}`}>{plan.desc}</div>
      <div className="mb-8 flex flex-grow flex-col gap-2.5">
        {plan.features.map((f) => (
          <div key={f} className={`flex items-start gap-2 text-sm ${featureCls}`}>
            <span className={`flex-shrink-0 font-bold ${checkCls}`}>✓</span>
            {f}
          </div>
        ))}
      </div>
      <Link
        href="/trial"
        className={`mt-auto block w-full rounded-[10px] py-3.5 text-center text-sm font-bold no-underline transition-all ${btnCls}`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
