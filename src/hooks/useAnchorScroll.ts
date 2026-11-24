import { useEffect } from 'react'
import { scrollToTarget } from '../lib/smooth-scroll'

/** Routes in-page `#hash` links through the smooth scroller, clearing the fixed header. */
export function useAnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      const hash = link?.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return
      e.preventDefault()
      scrollToTarget(hash === '#top' ? 0 : target)
      history.replaceState(null, '', hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
