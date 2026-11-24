import { useRef } from 'react'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'

/** Desktop-only translucent accent disc that trails the pointer (decorative). */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add(`${MOTION_OK} and (pointer: fine) and (min-width: 75rem)`, () => {
      const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
      const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })
      const move = (e: PointerEvent) => {
        gsap.set(el, { autoAlpha: 1 })
        x(e.clientX)
        y(e.clientY)
      }
      const hide = () => gsap.to(el, { autoAlpha: 0, duration: 0.3 })
      window.addEventListener('pointermove', move)
      document.documentElement.addEventListener('pointerleave', hide)
      return () => {
        window.removeEventListener('pointermove', move)
        document.documentElement.removeEventListener('pointerleave', hide)
        gsap.set(el, { autoAlpha: 0 })
      }
    })
    return () => mm.revert()
  })

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] invisible -mt-10 -ml-10 size-20 rounded-full bg-accent/25 opacity-0"
    />
  )
}
