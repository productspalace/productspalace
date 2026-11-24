import { useEffect, useRef } from 'react'

/** Never hold the page longer than this (ms since navigation), even if an asset hangs or fails. */
const MAX_WAIT = 3500
/** Avoids a one-frame flash when everything is cached. */
const MIN_SHOW = 450
/** Reference adds `is-loaded` 60ms after window load, then fades for 600ms. */
const EXIT_DELAY = 60
const FADE = 600

/**
 * Controls the loader painted by index.html (#app-loader: black layer, hairline ring,
 * rotating highlight arc, logo). The markup lives in the HTML so it shows before
 * any script or stylesheet arrives; this component times its exit: `window.load`
 * (capped at MAX_WAIT) + 60ms, then a 0.6s fade, then removal.
 */
export function Loader({ onExit }: { onExit: () => void }) {
  const onExitRef = useRef(onExit)

  useEffect(() => {
    onExitRef.current = onExit
  })

  useEffect(() => {
    const el = document.getElementById('app-loader')
    if (!el) {
      onExitRef.current()
      return
    }
    const timers: number[] = []
    let left = false

    const leave = () => {
      if (left) return
      left = true
      const wait = Math.max(0, MIN_SHOW - performance.now()) + EXIT_DELAY
      timers.push(
        window.setTimeout(() => {
          el.classList.add('is-loaded')
          el.setAttribute('aria-hidden', 'true')
          onExitRef.current()
          timers.push(window.setTimeout(() => el.remove(), FADE))
        }, wait),
      )
    }

    if (document.readyState === 'complete') leave()
    else window.addEventListener('load', leave, { once: true })
    timers.push(window.setTimeout(leave, Math.max(0, MAX_WAIT - performance.now())))

    return () => {
      window.removeEventListener('load', leave)
      timers.forEach(clearTimeout)
    }
  }, [])

  return null
}
