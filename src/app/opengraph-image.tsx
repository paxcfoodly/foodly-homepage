import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Foodly — 식품 제조 통합 관리 플랫폼';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '88px',
          background:
            'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(29,158,117,0.35) 0%, transparent 70%), #0a3d30',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, "Apple SD Gothic Neo", sans-serif',
          letterSpacing: '-0.025em',
        }}
      >
        {/* Brand wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#1d9e75',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <div style={{ width: 32, height: 4, borderRadius: 2, background: 'white' }} />
            <div style={{ width: 22, height: 4, borderRadius: 2, background: 'white' }} />
            <div style={{ width: 26, height: 4, borderRadius: 2, background: 'white' }} />
          </div>
          <div style={{ fontSize: 56, fontWeight: 900, display: 'flex' }}>
            food<span style={{ color: '#9fe1cb' }}>ly</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1.05, display: 'flex' }}>
            식품 제조, 이제
          </div>
          <div style={{ fontSize: 92, fontWeight: 900, lineHeight: 1.05, display: 'flex' }}>
            <span style={{ color: '#9fe1cb' }}>수기 없이</span>
            <span>&nbsp;관리하세요</span>
          </div>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.55)',
            display: 'flex',
            gap: 14,
            alignItems: 'center',
          }}
        >
          <span>OCR 자동 입고</span>
          <span>·</span>
          <span>장비 연동</span>
          <span>·</span>
          <span>식약처 수불대장 원클릭</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
