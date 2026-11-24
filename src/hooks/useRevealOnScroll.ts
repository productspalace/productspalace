import { useEffect } from 'react'

/**
 * Plays the `fadeInUp` / `fadeInRight` entrance on every `[data-reveal]` element
 * the first time it enters the viewport. Enabled once the loader has left, so the
 * hero entrance is visible instead of happening underneath the loader.
 */
export function useRevealOnScroll(enabled: boolean) {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready')
  }, [])

  useEffect(() => {
    if (!enabled) return
    const reveal = (el: Element) => el.classList.add('is-revealed')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [enabled])
}
