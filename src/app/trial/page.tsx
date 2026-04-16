import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '14일 무료 체험',
  description: '카드 등록 없이 14일 동안 Foodly의 모든 기능을 무료로 사용해 보세요.',
};

/**
 * /trial — replaces legacy foodlyR01.html.
 * Implementation comes after the main landing is fully componentized.
 */
export default function TrialPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-1.5 text-xs font-bold text-teal-dark mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-brand" />
          coming soon
        </div>
        <h1 className="font-serif text-5xl leading-tight">
          14일 <em className="text-teal not-italic">무료 체험</em>
        </h1>
        <p className="mt-4 text-stone">
          이 페이지는 기존 <code className="font-mono text-sm">foodlyR01.html</code>의
          Next 라우트 자리표시자입니다. 회원가입 폼은 후속 작업에서 이식됩니다.
        </p>
        <a
          href="/"
          className="mt-8 inline-block font-mono text-sm text-teal hover:text-teal-dark"
        >
          ← 홈으로
        </a>
      </div>
    </main>
  );
}
