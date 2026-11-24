import { useEffect, useState } from 'react'

/** Returns true once the page has scrolled beyond `threshold` px (rAF-throttled). */
export function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setPast(window.scrollY > threshold)
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
  }, [threshold])

  return past
}
