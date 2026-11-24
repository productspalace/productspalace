import type { SVGProps } from 'react'

/** Small inline icon set (24px grid, stroke-based unless noted). */
const paths = {
  'arrow-right': <path d="M4 12h15m-6-6 6 6-6 6" />,
  'arrow-left': <path d="M20 12H5m6-6-6 6 6 6" />,
  'arrow-up': <path d="M12 20V5m-6 6 6-6 6 6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  play: <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.6 1.5A16 16 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4z" />,
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" fill="currentColor" stroke="none" />,
  sparkle: <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1" />,
  diamond: (
    <>
      <path d="m12 3 9 9-9 9-9-9z" />
      <path d="m12 8 4 4-4 4-4-4z" fill="currentColor" />
    </>
  ),
  quote: (
    <path
      d="M4 18v-5.5C4 8.4 6.2 6 10 5.5v2.6c-2 .5-3 1.7-3 3.9h3v6zm10 0v-5.5c0-4.1 2.2-6.5 6-7v2.6c-2 .5-3 1.7-3 3.9h3v6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  // Social glyphs (simplified, original drawings)
  facebook: <path d="M14.5 8H16V5h-2a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.3l.7-3h-3V9.2c0-.7.5-1.2 1.5-1.2z" fill="currentColor" stroke="none" />,
  x: <path d="M5 4.5h4l10 15h-4zM18.5 4.5 13 10.8M5.5 19.5l5.6-6.3" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" fill="currentColor" stroke="none" />
      <path d="m10 9 5 3-5 3z" fill="var(--icon-cutout, #000)" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" stroke="none" />
      <path d="M8 10v7M8 7v.01M11.5 17v-7m0 3.2c0-2 1.2-3.2 2.7-3.2s2.3 1 2.3 3V17" stroke="var(--icon-cutout, #000)" strokeWidth="2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20.5 5.3 16A8.5 8.5 0 1 1 8.4 19z" />
      <path d="M9.2 8.3c-.3 1.6.4 3.3 1.8 4.7s3.1 2.1 4.7 1.8l.8-1.6-1.8-.9-.8.8c-.8-.3-1.6-1-2-1.9l.7-.8-.8-1.8z" fill="currentColor" stroke="none" />
    </>
  ),
} as const

export type IconName = keyof typeof paths

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number | string }

export function Icon({ name, size = 24, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
