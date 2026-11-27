import { useRef } from 'react'
import { aboutImages } from '../../content/assets'
import { aboutAnchors, ourPromise } from '../../content/about'
import { PARALLAX_LAYER, useParallax } from '../../hooks/useParallax'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'

/**
 * Our promise, as the About page's one dark band (secondary reference: Sujimoto's
 * "Our Core Values"; see docs/selective-ui-refinement.md §5.1).
 *
 * One shared photograph drifts under a deep ink tint. Kicker, title and intro are
 * centred, then the five principles: five columns from xl, 3 + 2 centred from lg,
 * 2 per row (fifth centred) from md, and a left-aligned list on phones. Each keeps
 * the brand's brass initial, now in a hairline circle. A brass hairline is drawn
 * downwards on scroll from the centre of the band into "Our first address".
 *
 * Deliberately different from the homepage's five photo cards for the same promises.
 */
export function OurPromise() {
  const [before, word] = ourPromise.title
  const layerRef = useParallax<HTMLDivElement>()
  const threadRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        threadRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: { trigger: threadRef.current, start: 'top 92%', end: 'bottom 70%', scrub: true } },
      )
    })
    return () => mm.revert()
  })

  return (
    <section id={aboutAnchors.promise} className="relative isolate overflow-hidden bg-ink-950 pt-section text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div ref={layerRef} className={PARALLAX_LAYER}>
          <AssetImage asset={aboutImages.promise} decorative className="size-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-ink-950/[0.86]" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-[46rem] text-center">
          <p data-reveal="up" className="kicker justify-center text-brass-400">
            {ourPromise.kicker}
          </p>
          <h2 data-reveal="up" style={revealDelay(150)} className="mt-5 type-h2 md:mt-6">
            {before}
            <span className="text-brass-400">{word}</span>
          </h2>
          <p data-reveal="up" style={revealDelay(300)} className="mx-auto mt-6 max-w-[36rem] leading-[1.7] text-white/80">
            {ourPromise.intro}
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center lg:mt-16">
          {ourPromise.principles.map((p, i) => (
            <li
              key={p.principle}
              data-reveal="up"
              style={revealDelay(i * 110)}
              className="flex basis-full gap-5 border-t border-white/10 py-8 md:basis-1/2 md:flex-col md:items-center md:border-t-0 md:px-6 md:py-6 md:text-center lg:basis-1/3 xl:basis-1/5 xl:border-l xl:border-brass-700/50 xl:px-5 xl:first:border-l-0"
            >
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-full border border-brass-400/50 font-display text-[1.5rem] leading-none font-light text-brass-400 md:size-16 md:text-[2rem]"
              >
                {p.principle.charAt(0)}
              </span>
              <div>
                <p className="text-[0.75rem] font-semibold tracking-[0.2em] text-brass-400 uppercase md:mt-1">{p.principle}</p>
                <h3 className="mt-3 font-display text-[1.5rem] leading-[1.2] font-normal tracking-[-0.015em] text-pretty">{p.title}</h3>
                <p className="mt-3 leading-[1.65] text-white/75">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* The thread into the next section (from md) */}
      <div aria-hidden="true" className="mt-10 hidden justify-center md:flex lg:mt-14">
        <span ref={threadRef} className="block h-28 w-px origin-top bg-brass-400/60" />
      </div>
      <div className="h-14 md:hidden" />
    </section>
  )
}
