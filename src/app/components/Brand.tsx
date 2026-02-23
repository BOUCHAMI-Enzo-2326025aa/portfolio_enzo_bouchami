import type { ComponentPropsWithoutRef } from 'react';

export type BrandProps = {
  onClick?: () => void;
  /** URL vers l'image du logo (ex: dans /dist ou sur le web). */
  logoSrc: string;
  /** Texte si l'image ne charge pas + accessibilité. */
  label: string;
} & Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'children'>;

export function Brand({ onClick, logoSrc, label, ...buttonProps }: BrandProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
      aria-label={label}
      {...buttonProps}
    >
      <img
        src={logoSrc}
        alt={label}
        className="h-9 w-auto object-contain"
        loading="eager"
        decoding="async"
      />
      <span className="sr-only">{label}</span>
    </button>
  );
}

