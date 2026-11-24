import type { CSSProperties } from 'react'

/** Inline style that delays a `data-reveal` entrance (see src/styles/motion.css). */
export const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
