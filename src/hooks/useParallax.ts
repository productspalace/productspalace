import { useRef } from 'react'
import { gsap, MOTION_OK, useGSAP } from '../lib/gsap'

/**
 * Classes for the moving layer: 20% taller than its frame and centred on it,
 * so the drift never shows an edge. The frame must be `relative overflow-hidden`.
 */
export const PARALLAX_LAYER = 'absolute inset-x-0 -top-[10%] h-[120%]'

/**
 * Image drift inside a fixed frame (secondary reference: Sujimoto's image bands,
 * which move at about 0.1 of the scroll speed). The layer travels its full spare
 * 20% while the frame crosses the viewport, scrubbed by ScrollTrigger (driven by
 * Lenis). Off for reduced motion: the layer then simply sits centred.
 */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useGSAP(() => {
    const layer = ref.current
    const frame = layer?.parentElement
    if (!layer || !frame) return
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      // ±10% of the frame = ±(10 / 120) of the layer's own height.
      gsap.fromTo(
        layer,
        { yPercent: -100 / 12 },
        { yPercent: 100 / 12, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
    })
    return () => mm.revert()
  })

  return ref
}
