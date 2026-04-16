import { LiveCounter } from './LiveCounter';

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Features() {
  return (
    <section id="features" className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="reveal">
          <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
            핵심 기능
          </div>
        </div>
        <h2
          className="reveal reveal-d1 mb-4 font-serif leading-[1.2] text-ink"
          style={{ fontSize: 'clamp(32px,4vw,52px)' }}
        >
          세 가지 자동화로
          <br />
          <em className="text-teal">모든 것이 바뀝니다</em>
        </h2>

        <FeatureBlock
          eyebrow="기능 01 — OCR 자동 입고"
          title={
            <>
              명세서 사진 한 장이면
              <br />
              입고 등록 끝
            </>
          }
          desc="어떤 양식의 거래명세서든 사진을 찍으면 Claude Vision AI가 공급업체·품목·수량·유통기한을 자동으로 추출합니다. 신뢰도가 낮은 항목만 확인하면 됩니다."
          points={[
            '양식 무관 — 어떤 명세서든 자동 인식',
            '신뢰도별 색상 강조로 확인 포인트 즉시 파악',
            '입고 확정 즉시 재고·수불대장 자동 반영',
          ]}
          visual={<OcrMock />}
          first
        />

        <FeatureBlock
          eyebrow="기능 02 — 장비 연동 생산 집계"
          title={
            <>
              장비가 보내면
              <br />
              재고가 알아서 줄어듭니다
            </>
          }
          desc="출하 장비가 생산 완료 신호를 보내면 Foodly가 레시피 기반으로 원료를 FIFO 순서로 자동 차감합니다. 불량률이 기준을 초과하면 카카오 알림이 즉시 발송됩니다."
          points={[
            'REST API 한 번 설정으로 이후 자동 수신',
            'FIFO 로트별 자동 차감 — race condition 방지',
            '불량 유형별 집계 · 불량률 경보 자동 발송',
          ]}
          visual={<ProductionMock />}
          reverse
        />

        <FeatureBlock
          eyebrow="기능 03 — 수불대장 자동 생성"
          title={
            <>
              식약처 수불대장,
              <br />
              버튼 한 번으로 출력
            </>
          }
          desc="입고·생산사용·재고조정 데이터가 실시간으로 통합됩니다. 기간과 원료를 선택하고 PDF 버튼을 누르면 식약처 양식에 맞는 수불대장이 즉시 출력됩니다."
          points={[
            '입고·생산·조정 자동 집계 — 별도 작업 불필요',
            '로트 역추적으로 리콜 대응 즉시 가능',
            'PDF · 엑셀 양식 원클릭 출력',
          ]}
          visual={<LedgerMock />}
        />
      </div>
    </section>
  );
}

function FeatureBlock({
  eyebrow,
  title,
  desc,
  points,
  visual,
  reverse,
  first,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  points: string[];
  visual: React.ReactNode;
  reverse?: boolean;
  first?: boolean;
}) {
  return (
    <div
      className={`reveal grid grid-cols-1 items-center gap-7 py-10 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-20 ${
        first ? 'mt-14' : 'border-t border-stone-light'
      }`}
    >
      <div className={reverse ? 'md:col-start-2 md:row-start-1' : ''}>
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
          {eyebrow}
        </div>
        <h3
          className="mb-4 font-bold leading-[1.2] text-ink"
          style={{ fontSize: 'clamp(26px,3vw,38px)' }}
        >
          {title}
        </h3>
        <p className="mb-7 text-base leading-[1.8] text-stone max-[767px]:mb-5 max-[767px]:text-sm">
          {desc}
        </p>
        <div className="flex flex-col gap-2.5">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-2.5 text-sm text-ink">
              <span className="mt-px flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-light text-teal">
                <span className="block h-2.5 w-2.5">{CHECK_ICON}</span>
              </span>
              {p}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`relative overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.12)] ${
          reverse ? 'md:col-start-1 md:row-start-1' : ''
        }`}
      >
        {visual}
      </div>
    </div>
  );
}

function MockHeader({ title, badge }: { title: string; badge?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 bg-surface-dark px-4 py-3">
      <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
      <span className="h-[9px] w-[9px] rounded-full bg-[#FEBC2E]" />
      <span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
      <span className="ml-2 text-xs font-bold text-white/70">{title}</span>
      {badge && <span className="ml-auto">{badge}</span>}
    </div>
  );
}

function LiveBadge({ label = 'LIVE' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-light px-2.5 py-[3px] text-[11px] font-bold text-teal-dark">
      <span className="h-[5px] w-[5px] animate-pulse-brand rounded-full bg-teal" />
      {label}
    </span>
  );
}

function OcrMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white font-sans">
      <MockHeader title="OCR 검토 · 수정" badge={<LiveBadge label="분석 완료" />} />
      <div className="p-4">
        <div className="mb-3 flex gap-2.5">
          <div className="flex-1 rounded-lg bg-cream p-3 text-[11px] leading-[1.9] text-[#555]">
            <div className="mb-2 border-b border-stone-light pb-1.5 text-xs font-bold">
              (주)대한제분 거래명세서
            </div>
            납품일: 2025-03-21
            <br />
            품목: 밀가루(중력분)
            <br />
            수량: 100 kg
            <br />
            유통기한:{' '}
            <span className="rounded-[2px] bg-[#FAEEDA] px-[3px] text-[10px] text-[#633806]">
              2026.03.21
            </span>
            <br />
            LOT:{' '}
            <span className="rounded-[2px] border border-[#F09595] bg-[#FCEBEB] px-[3px] text-[10px] text-[#7a1f1f]">
              판독 불가
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="mb-0.5 text-[11px] text-stone">추출된 정보</div>
            <OcrRow label="공급업체" level="high" />
            <OcrRow label="품목·수량" level="high" />
            <OcrRow label="유통기한" level="mid" />
            <OcrRow label="로트번호" level="low" />
          </div>
        </div>
        <div className="cursor-pointer rounded-lg bg-teal px-3.5 py-2.5 text-center text-xs font-bold text-white">
          입고 확정 →
        </div>
      </div>
    </div>
  );
}

function OcrRow({ label, level }: { label: string; level: 'high' | 'mid' | 'low' }) {
  const cfg = {
    high: { bg: 'bg-teal-light', text: 'text-teal-dark', value: '높음 ✓' },
    mid: { bg: 'bg-[#FAEEDA]', text: 'text-amber', value: '확인 !' },
    low: { bg: 'bg-[#FCEBEB]', text: 'text-[#A32D2D]', value: '입력 필요' },
  }[level];
  return (
    <div
      className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[11px] ${cfg.bg}`}
    >
      <span className="text-[#333]">{label}</span>
      <span className={`font-bold ${cfg.text}`}>{cfg.value}</span>
    </div>
  );
}

function ProductionMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white font-sans">
      <MockHeader title="생산 실시간 모니터" badge={<LiveBadge />} />
      <div className="p-4">
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-cream p-2.5">
            <div className="text-xl font-bold text-teal">
              <LiveCounter />
            </div>
            <div className="mt-0.5 text-[10px] text-stone">오늘 생산량</div>
          </div>
          <div className="rounded-lg bg-cream p-2.5">
            <div className="text-xl font-bold text-ink">97.3%</div>
            <div className="mt-0.5 text-[10px] text-stone">양품률</div>
          </div>
        </div>
        <div className="mb-2.5">
          <div className="mb-1 flex justify-between text-[11px]">
            <span className="text-stone">출하라인 1호기</span>
            <span className="font-bold text-teal">가동 중</span>
          </div>
          <div className="h-1 overflow-hidden rounded-sm bg-stone-light">
            <div className="h-full animate-grow bg-teal" />
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <Th align="left">배치</Th>
              <Th align="right">생산</Th>
              <Th align="right">불량</Th>
              <Th align="left">입력</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { batch: 'PROD-005-06', good: 207, bad: 6 },
              { batch: 'PROD-005-05', good: 200, bad: 4 },
              { batch: 'PROD-005-04', good: 200, bad: 7 },
            ].map((r) => (
              <tr key={r.batch}>
                <Td className="font-mono text-[10px]">{r.batch}</Td>
                <Td align="right" className="font-bold text-teal">
                  {r.good}
                </Td>
                <Td align="right" className="text-[#A32D2D]">
                  {r.bad}
                </Td>
                <Td>
                  <span className="rounded-[3px] bg-[#EEEDFE] px-1.5 py-px text-[9px] font-bold text-[#3C3489]">
                    장비
                  </span>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children, align = 'left' }: { children: React.ReactNode; align?: 'left' | 'right' }) {
  return (
    <th
      className={`border-b border-stone-light px-2 py-1.5 text-[10px] font-bold text-stone ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  align = 'left',
  className = '',
}: {
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}) {
  return (
    <td
      className={`border-b border-cream px-2 py-1.5 text-[11px] ${align === 'right' ? 'text-right' : ''} ${className}`}
    >
      {children}
    </td>
  );
}

function LedgerMock() {
  return (
    <div className="overflow-hidden rounded-xl bg-white font-sans">
      <div className="flex items-center gap-2 bg-surface-dark px-4 py-3">
        <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#FEBC2E]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs font-bold text-white/70">원료수불대장</span>
        <div className="ml-auto flex gap-1.5">
          <span className="cursor-pointer rounded bg-white/10 px-2 py-[3px] text-[10px] font-bold text-teal-medium">
            엑셀
          </span>
          <span className="cursor-pointer rounded bg-teal px-2 py-[3px] text-[10px] font-bold text-white">
            PDF 출력
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-[7px] bg-cream px-2.5 py-2 text-center">
            <div className="text-base font-bold text-teal">+320</div>
            <div className="text-[10px] text-stone">입고 합계 kg</div>
          </div>
          <div className="rounded-[7px] bg-cream px-2.5 py-2 text-center">
            <div className="text-base font-bold text-[#534AB7]">−148</div>
            <div className="text-[10px] text-stone">출고 합계 kg</div>
          </div>
        </div>
        <table className="w-full border-collapse text-[11px]">
          <thead>
            <tr className="bg-cream">
              <LedgerTh>날짜</LedgerTh>
              <LedgerTh>구분</LedgerTh>
              <LedgerTh align="right">입고</LedgerTh>
              <LedgerTh align="right">출고</LedgerTh>
              <LedgerTh align="right">잔고</LedgerTh>
            </tr>
          </thead>
          <tbody>
            <LedgerRow date="03-01" kind="입고" inQty="+100" outQty="—" balance="150" />
            <LedgerRow date="03-03" kind="생산" inQty="—" outQty="−30" balance="120" last />
            <LedgerRow date="03-08" kind="입고" inQty="+80" outQty="—" balance="200" last />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LedgerTh({
  children,
  align = 'left',
}: {
  children: React.ReactNode;
  align?: 'left' | 'right';
}) {
  return (
    <th
      className={`border-b border-stone-light px-[7px] py-1.5 text-[10px] text-stone ${align === 'right' ? 'text-right' : 'text-left'}`}
    >
      {children}
    </th>
  );
}

function LedgerRow({
  date,
  kind,
  inQty,
  outQty,
  balance,
  last,
}: {
  date: string;
  kind: '입고' | '생산';
  inQty: string;
  outQty: string;
  balance: string;
  last?: boolean;
}) {
  const border = last ? '' : 'border-b border-cream';
  const tag =
    kind === '입고' ? 'bg-teal-light text-teal-dark' : 'bg-[#EEEDFE] text-[#3C3489]';
  const inColor = inQty.startsWith('+') ? 'text-teal font-bold' : 'text-stone-medium';
  const outColor = outQty.startsWith('−') ? 'text-[#534AB7] font-bold' : 'text-stone-medium';
  return (
    <tr>
      <td className={`px-[7px] py-1.5 ${border}`}>{date}</td>
      <td className={`px-[7px] py-1.5 ${border}`}>
        <span className={`rounded-[3px] px-1.5 py-px text-[9px] font-bold ${tag}`}>{kind}</span>
      </td>
      <td className={`px-[7px] py-1.5 text-right ${border} ${inColor}`}>{inQty}</td>
      <td className={`px-[7px] py-1.5 text-right ${border} ${outColor}`}>{outQty}</td>
      <td className={`px-[7px] py-1.5 text-right font-bold ${border}`}>{balance}</td>
    </tr>
  );
}
