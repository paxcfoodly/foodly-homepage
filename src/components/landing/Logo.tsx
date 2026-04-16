import { BrandMark } from './BrandMark';

type LogoProps = {
  variant?: 'dark' | 'light';
  size?: number;
};

/**
 * Foodly logo lockup — BrandMark + `foodly` wordmark.
 *
 * The wordmark uses Inter Tight ExtraBold for a sharper, more
 * condensed feel than the body copy — reads as an enterprise
 * logotype rather than styled text. Teal accent lives only in the
 * BrandMark; the wordmark stays monochrome for a corporate look.
 */
export function Logo({ variant = 'dark', size = 28 }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-ink' : 'text-white';
  const wordmarkSize = Math.round(size * 0.95);
  return (
    <span className="inline-flex items-center gap-2">
      <BrandMark size={size} />
      <span
        className={`font-display font-extrabold leading-none ${wordmarkColor}`}
        style={{ fontSize: `${wordmarkSize}px`, letterSpacing: '-0.045em' }}
      >
        food<span className="text-teal">ly</span>
      </span>
    </span>
  );
}
