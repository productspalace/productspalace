import { useEffect, useRef, useState } from 'react'
import { aboutAnchors, theLives } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'

const { households } = theLives

/**
 * The lives we design around (reference: "values" block, image 502 × 400 beside a
 * list led by large brass glyphs). Desktop: the image column is sticky and
 * cross-fades to the household being read (whichever entry crosses the middle of
 * the viewport, or is hovered). Below 1200px every household shows its
 * own image, so nothing depends on hover or scroll position.
 */
export function OurPeople() {
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    const items = Array.from(listRef.current?.children ?? [])
    if (!items.length || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(items.indexOf(entry.target))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id={aboutAnchors.lives} aria-labelledby="lives-title" className="pt-16 pb-20 md:pt-20 xl:pt-[3.75rem] xl:pb-24">
      <div className="container-page grid gap-x-[1.875rem] gap-y-10 xl:grid-cols-[minmax(0,31.375rem)_minmax(0,1fr)] xl:items-start">
        {/* Sticky, cross-fading image (desktop only) */}
        <div className="relative hidden h-[25rem] overflow-hidden bg-stone-200 xl:sticky xl:top-[calc(var(--spacing-header-sticky)+2.5rem)] xl:mt-[0.9375rem] xl:block">
          {households.map((h, i) => (
            <AssetImage
              key={h.image.id}
              asset={h.image}
              decorative
              className={`absolute inset-0 size-full object-cover transition-[opacity,scale] duration-700 ease-reveal ${
                i === active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
              }`}
            />
          ))}
          <p aria-hidden="true" className="absolute bottom-4 left-4 bg-[rgb(15_15_15/0.72)] px-4 py-2.5 text-[0.6875rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md">
            {households[active].person}
          </p>
        </div>

        <div>
          <div data-reveal="up" style={revealDelay(400)}>
            <h2 id="lives-title" className="font-display text-[2.5rem] leading-none font-light tracking-[-0.02em]">
              {theLives.title}
            </h2>
            <p className="mt-5 max-w-[36rem] leading-[1.62] text-fg-muted">{theLives.intro}</p>
          </div>

          <ol ref={listRef} className="mt-10 grid gap-12 md:gap-14 xl:mt-12 xl:gap-[1.875rem]">
            {households.map((h, i) => (
              <li
                key={h.person}
                onMouseEnter={() => setActive(i)}
                className="grid gap-x-6 md:grid-cols-[3.75rem_minmax(0,1fr)] xl:rounded-sm xl:py-2"
              >
                {/* The reveal sits on a static wrapper: React rewrites the numeral's
                    className when `active` changes, which would drop `is-revealed`. */}
                <div aria-hidden="true" data-reveal="up" style={revealDelay(400)}>
                  <span
                    className={`font-display text-[3.5rem] leading-none font-light tracking-[-0.02em] text-accent transition-colors duration-500 ${
                      i === active ? '' : 'xl:text-brass-300'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div data-reveal="up" style={revealDelay(400)} className="mt-3 md:mt-0">
                  <div className="relative mb-6 h-[18rem] overflow-hidden bg-stone-200 sm:h-[22rem] xl:hidden">
                    <AssetImage asset={h.image} className="absolute inset-0 size-full object-cover" />
                  </div>
                  <h3 className="font-sans text-base leading-normal font-bold tracking-normal text-fg">
                    <span className="sr-only">{i + 1}. </span>
                    {h.person}
                    <span className="font-medium text-fg-muted"> — {h.season}</span>
                  </h3>
                  <p className="mt-2 leading-[1.62] text-ink-700">{h.text}</p>
                  {h.home && (
                    <p className="mt-3 text-[0.75rem] font-semibold tracking-[0.14em] text-accent-ink uppercase">
                      {theLives.homeLabel}: <span className="text-fg">{h.home}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
