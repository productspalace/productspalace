import { useEffect, useRef } from 'react'
import { useScrolledPast } from '../../hooks/useScrollPosition'
import { scrollToTarget } from '../../lib/smooth-scroll'
import { Icon } from '../ui/Icon'

const R = 21
const CIRCUMFERENCE = 2 * Math.PI * R

/** Floating back-to-top button with a scroll-progress ring. */
export function ScrollTopButton() {
  const visible = useScrolledPast(300)
  const ringRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      ringRef.current?.setAttribute('stroke-dashoffset', String(CIRCUMFERENCE * (1 - progress)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      inert={!visible}
      onClick={() => scrollToTarget(0)}
      className={`fixed right-6 z-40 grid size-[46px] cursor-pointer place-items-center rounded-full text-white transition-all duration-300 ease-luxe lg:right-10 ${
        visible ? 'visible bottom-6 opacity-100 lg:bottom-10' : 'invisible bottom-3 opacity-0 lg:bottom-5'
      }`}
    >
      <span className="absolute inset-0.5 rounded-full bg-ink-900" />
      <svg viewBox="0 0 46 46" className="absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="23" cy="23" r={R} fill="none" stroke="rgb(255 255 255 / 0.25)" strokeWidth="2" />
        <circle
          ref={ringRef}
          cx="23"
          cy="23"
          r={R}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2.5"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
        />
      </svg>
      <Icon name="arrow-up" size={16} className="relative" />
    </button>
  )
}
