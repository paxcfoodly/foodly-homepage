import { Logo } from './Logo';

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: '제품',
    links: [
      { href: '#features', label: '주요 기능' },
      { href: '#pricing', label: '요금제' },
      { href: '#', label: '업데이트 노트' },
      { href: '#', label: '보안 정책' },
    ],
  },
  {
    title: '지원',
    links: [
      { href: '#', label: '사용 가이드' },
      { href: '#', label: 'API 문서' },
      { href: '#', label: '자주 묻는 질문' },
      { href: '#', label: '고객 센터' },
    ],
  },
  {
    title: '회사',
    links: [
      { href: '#', label: '소개' },
      { href: '#', label: '채용' },
      { href: '#', label: '개인정보처리방침' },
      { href: '#', label: '이용약관' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-surface-dark px-[60px] pb-10 pt-[60px] max-[767px]:px-5 max-[767px]:pb-8 max-[767px]:pt-12">
      <div className="mb-13 grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] max-[1024px]:grid-cols-2 max-[1024px]:gap-10 max-[767px]:grid-cols-1 max-[767px]:gap-8">
        <div>
          <div className="mb-3.5">
            <Logo variant="light" size={26} />
          </div>
          <p className="max-w-[280px] text-sm leading-[1.7] text-white/40 max-[767px]:max-w-none">
            소규모 식품 제조업체를 위한 원료수불·재고·생산 통합 관리 플랫폼. OCR과 장비 연동으로 수기 관리를 완전히 대체합니다.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[1.5px] text-white/35">
              {col.title}
            </div>
            {col.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="mb-2.5 block text-sm text-white/55 no-underline transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.07] pt-7 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-4">
        <div className="text-[13px] text-white/25">© 2025 PAXC(팍스). All rights reserved.</div>
        <div className="flex gap-3 max-[767px]:flex-wrap max-[767px]:gap-2">
          {['HACCP 지원', '식약처 수불대장', 'SSL 보안'].map((b) => (
            <span
              key={b}
              className="rounded bg-white/[0.06] px-2.5 py-1 text-[11px] font-bold tracking-[0.3px] text-white/35"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
