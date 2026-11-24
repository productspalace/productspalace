import { useEffect } from 'react'
import { scrollToTarget } from '../lib/smooth-scroll'

/** Resolves a same-document link to what it should scroll to, or null to let the browser navigate. */
function sameDocumentTarget(link: HTMLAnchorElement): HTMLElement | 0 | null {
  if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return null
  const href = link.getAttribute('href')
  if (!href || href === '#') return null
  const url = new URL(link.href, location.href)
  if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return null
  // A link to the current page itself (e.g. the logo on its own page) returns to the top.
  if (!url.hash || url.hash === '#top') return 0
  return document.getElementById(decodeURIComponent(url.hash.slice(1)))
}

/**
 * Routes links to the current document (`#section`, or `/#section` while on the
 * homepage) through the smooth scroller, clearing the fixed header. Links to other
 * pages navigate normally. Once the page has entered (loader gone), a `#hash` in
 * the URL, e.g. arriving from another page at `/#promise`, is scrolled to the same way.
 */
export function useAnchorScroll(entered: boolean) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href]')
      if (!link) return
      const target = sameDocumentTarget(link)
      if (target === null) return
      e.preventDefault()
      scrollToTarget(target)
      // Skip links and other focus targets (tabindex="-1") also receive focus.
      if (target && target.hasAttribute('tabindex')) target.focus({ preventScroll: true })
      const { hash } = new URL(link.href, location.href)
      history.replaceState(null, '', hash && hash !== '#top' ? hash : location.pathname)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    if (!entered || !location.hash) return
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (target) scrollToTarget(target)
  }, [entered])
}
