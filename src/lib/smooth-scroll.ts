import Lenis from 'lenis'
import { gsap, prefersReducedMotion, ScrollTrigger } from './gsap'

let lenis: Lenis | null = null

/** Header height that anchored sections should clear (matches the fixed bars). */
const headerOffset = () => {
  const styles = getComputedStyle(document.documentElement)
  const token = window.matchMedia('(min-width: 75rem)').matches
    ? '--spacing-header-sticky'
    : '--spacing-header-mobile'
  return parseFloat(styles.getPropertyValue(token)) * 16 || 0
}

/** Starts Lenis (smoothed wheel scrolling, as on the reference) and wires it to ScrollTrigger. */
export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return () => {}

  lenis = new Lenis({ autoRaf: false, lerp: 0.1 })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time: number) => lenis?.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(tick)
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToTarget(target: string | number | HTMLElement) {
  const el = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target
  if (el === null) return
  // Resolve to an absolute position so html `scroll-padding-top` isn't applied a second time.
  const top = typeof el === 'number' ? el : el.getBoundingClientRect().top + window.scrollY - headerOffset()
  if (lenis) {
    lenis.scrollTo(top, { duration: 1.2, force: true })
    return
  }
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}

/** Pause / resume page scrolling (mobile menu, lightbox). */
export function setScrollLocked(locked: boolean) {
  document.documentElement.style.overflow = locked ? 'hidden' : ''
  if (locked) lenis?.stop()
  else lenis?.start()
}
