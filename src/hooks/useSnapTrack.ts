import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Drives a native horizontal scroll-snap track (process cards, testimonials):
 * tracks the active card from scroll position and exposes prev/next/goTo.
 */
export function useSnapTrack<T extends HTMLElement>() {
  const trackRef = useRef<T>(null)
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)

  const cards = () => Array.from(trackRef.current?.children ?? []) as HTMLElement[]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let frame = 0
    const measure = () => {
      frame = 0
      const items = Array.from(track.children) as HTMLElement[]
      setCount(items.length)
      const maxScroll = track.scrollWidth - track.clientWidth
      if (maxScroll <= 1) return setIndex(0)
      if (track.scrollLeft >= maxScroll - 2) return setIndex(items.length - 1)
      const left = track.getBoundingClientRect().left
      let nearest = 0
      let best = Infinity
      items.forEach((item, i) => {
        const d = Math.abs(item.getBoundingClientRect().left - left)
        if (d < best) {
          best = d
          nearest = i
        }
      })
      setIndex(nearest)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const goTo = useCallback((i: number) => {
    const track = trackRef.current
    const target = cards()[i]
    if (!track || !target) return
    const first = cards()[0]
    track.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: 'smooth' })
  }, [])

  return {
    trackRef,
    index,
    count,
    goTo,
    prev: () => goTo(Math.max(0, index - 1)),
    next: () => goTo(Math.min(count - 1, index + 1)),
  }
}
