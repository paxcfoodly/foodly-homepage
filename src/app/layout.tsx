import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_NAME = 'Foodly';
const SITE_DESCRIPTION =
  '거래명세서 사진 한 장으로 입고 완료. 장비 데이터 자동 수신. 식약처 수불대장 원클릭 출력.';

export const metadata: Metadata = {
  title: {
    default: 'Foodly — 식품 제조 통합 관리 플랫폼',
    template: '%s · Foodly',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'Foodly',
    '식품 제조',
    'HACCP',
    '원료수불대장',
    'OCR 입고',
    '장비 연동',
    '재고 관리',
    '식약처',
  ],
  authors: [{ name: 'PAXC' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: 'Foodly — 식품 제조 통합 관리 플랫폼',
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foodly — 식품 제조 통합 관리 플랫폼',
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d9e75',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
