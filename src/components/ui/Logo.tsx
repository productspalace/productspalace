import { brand } from '../../content/brand'

/**
 * TEMPORARY brand logo: an original arch mark plus wordmark. Replace the markup in
 * this file (or swap in an <img>) when the final logo artwork is supplied; every
 * usage goes through this component.
 */

type Tone = 'light' | 'dark'

/** The arch mark alone (also used as the small corner badge on imagery). */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path d="M5 37V19a15 15 0 0 1 30 0v18" stroke="currentColor" strokeWidth="2.6" />
      <path d="M11 37V20a9 9 0 0 1 18 0v17" stroke="currentColor" strokeWidth="2.6" />
      <path d="M17 37V21a3 3 0 0 1 6 0v16" stroke="currentColor" strokeWidth="2.6" />
    </svg>
  )
}

export function Logo({ tone = 'dark', className = '' }: { tone?: Tone; className?: string }) {
  const ink = tone === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <span className={`inline-flex items-center gap-2.5 ${ink} ${className}`}>
      <LogoMark className="h-[1.4em] w-auto flex-none text-accent" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[1em] font-extrabold tracking-[-0.01em] uppercase">{brand.name}</span>
        <span className="mt-[0.3em] flex items-center gap-[0.5em] self-end font-sans text-[0.38em] font-bold tracking-[0.55em] uppercase">
          <span className="h-px w-[2.2em] bg-accent" />
          {brand.descriptor}
        </span>
      </span>
    </span>
  )
}
