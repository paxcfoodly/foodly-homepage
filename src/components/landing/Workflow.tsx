'use client';

import { useEffect, useState } from 'react';

const STEPS = [
  { num: '01', title: '회원가입', desc: '이메일 또는 카카오 계정으로 30초 만에 가입' },
  { num: '02', title: '사업장 등록', desc: '사업자번호 입력하면 국세청 자동 조회' },
  { num: '03', title: '원료·공급업체 입력', desc: '기존 엑셀 파일로 일괄 가져오기 가능' },
  { num: '04', title: '첫 입고 등록', desc: '명세서 촬영 → OCR 확인 → 완료' },
  { num: '05', title: '수불대장 출력', desc: 'PDF 버튼 한 번으로 즉시 완성' },
];

export function Workflow() {
  // -1 means "all steps inactive" — renders briefly between cycles to mimic
  // the original DOM-class-toggle reset effect without remounting children.
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((prev) => {
        if (prev >= STEPS.length - 1) return -1;
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="workflow" className="relative overflow-hidden bg-surface-dark">
      <div
        className="absolute inset-x-0 top-0 h-[60px] bg-cream max-[767px]:h-10"
        style={{ clipPath: 'ellipse(55% 100% at 50% 0%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[60px] bg-cream max-[767px]:h-10"
        style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }}
      />
      <div className="py-[120px] max-[767px]:py-20">
        <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
          <div className="text-center">
            <div className="reveal">
              <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal-medium">
                도입 과정
              </div>
            </div>
            <h2
              className="reveal reveal-d1 mx-auto mb-3 font-serif leading-[1.2] text-white"
              style={{ fontSize: 'clamp(32px,4vw,52px)' }}
            >
              시작하는 데
              <br />
              <em className="text-teal-medium">3분이면 충분합니다</em>
            </h2>
            <p className="reveal reveal-d2 mx-auto text-[17px] leading-[1.7] text-white/55">
              복잡한 설치 없음. 긴 온보딩 없음. 지금 바로 시작.
            </p>
          </div>

          <div className="reveal reveal-d3 relative mt-14 grid grid-cols-5 max-[1024px]:grid-cols-3 max-[1024px]:gap-5 max-[767px]:grid-cols-1 max-[767px]:gap-0">
            <span className="absolute left-[10%] right-[10%] top-7 h-px bg-gradient-to-r from-transparent via-teal-medium to-transparent max-[1024px]:hidden" />
            {STEPS.map((s, i) => {
              const active = i <= activeIdx;
              const hiddenOnTablet = i >= 3 ? 'max-[1024px]:hidden max-[767px]:flex' : '';
              return (
                <div
                  key={s.num}
                  className={`relative z-[1] flex flex-col items-center px-3 text-center max-[767px]:flex-row max-[767px]:items-start max-[767px]:border-b max-[767px]:border-white/10 max-[767px]:py-4 max-[767px]:text-left max-[767px]:last:border-b-0 ${hiddenOnTablet}`}
                >
                  <div
                    className={`mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 font-mono text-base font-bold transition-all max-[767px]:mb-0 max-[767px]:mr-4 max-[767px]:h-11 max-[767px]:w-11 max-[767px]:text-sm ${
                      active
                        ? 'border-teal bg-teal text-white shadow-[0_0_24px_rgba(29,158,117,0.5)]'
                        : 'border-white/10 bg-ink-soft text-white/40'
                    }`}
                  >
                    {s.num}
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-bold text-white max-[767px]:mb-1">
                      {s.title}
                    </div>
                    <div className="text-xs leading-[1.6] text-white/45">{s.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
