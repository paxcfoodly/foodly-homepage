import { BrandMark } from './BrandMark';

type LogoProps = {
  variant?: 'dark' | 'light';
  size?: number;
};

/**
 * Foodly logo lockup — BrandMark + Geist wordmark.
 *
 * - `dark` variant places ink-color wordmark on light backgrounds (nav)
 * - `light` variant places white wordmark on dark backgrounds (footer)
 *
 * The teal accent lives in the BrandMark icon; the wordmark stays
 * monochrome for a more corporate / less playful feel.
 */
export function Logo({ variant = 'dark', size = 26 }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-ink' : 'text-white';
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={size} />
      <span
        className={`font-display text-[22px] font-semibold tracking-[-0.04em] leading-none ${wordmarkColor}`}
      >
        foodly
      </span>
    </span>
  );
}
