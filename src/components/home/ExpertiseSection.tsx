import { useRef, useState } from 'react'
import { expertiseFilm } from '../../content/assets'
import { belief } from '../../content/home'
import { anchors } from '../../content/site'
import { PARALLAX_LAYER, useParallax } from '../../hooks/useParallax'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'
import { LogoMark } from '../ui/Logo'
import { VideoLightbox } from './VideoLightbox'

/**
 * The belief, told inside one image (secondary reference: Sujimoto's "Redefining
 * Luxury Living" band; see docs/selective-ui-refinement.md §4.2).
 *
 * - The rounded panel keeps the primary reference's motion: it starts clipped
 *   (inset 0 5%, scale .86) and opens to its full frame once it nears 450px from
 *   the top of the viewport (scrub 1; measured from a wrapper ~75px above, hence 525px).
 * - Inside it the photograph drifts with the scroll, and the H2 is set as two
 *   staggered display lines with the subtitle beside the second (below it on
 *   smaller screens).
 * - The play control and lightbox appear only once a real film exists
 *   (`expertiseFilm.src`); until then the band is a still photograph.
 */
function StatementBand() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const layerRef = useParallax<HTMLDivElement>()
  const [open, setOpen] = useState(false)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          panelRef.current,
          { clipPath: 'inset(0% 5%)', scale: 0.86 },
          {
            clipPath: 'inset(0% 0%)',
            scale: 1,
            ease: 'sine.inOut',
            scrollTrigger: { trigger: wrapRef.current, start: 'top 525px', end: '+=1', scrub: 1 },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: wrapRef },
  )

  const film = expertiseFilm
  const [first, second] = belief.title

  return (
    <div ref={wrapRef} className="relative h-[27.5rem] md:h-[32.5rem] lg:h-[37.5rem] xl:h-[42.5rem]">
      <div ref={panelRef} className="absolute inset-0 overflow-hidden rounded-card bg-ink-800">
        <div ref={layerRef} className={PARALLAX_LAYER}>
          {film.src ? (
            <video
              className="size-full object-cover"
              src={film.src}
              poster={film.poster.src}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : (
            <AssetImage asset={film.poster} className="size-full object-cover" />
          )}
        </div>
        {/* Keeps the statement legible over any photograph */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(15_13_10/0.3)_0%,rgb(15_13_10/0.12)_26%,rgb(15_13_10/0.62)_52%,rgb(15_13_10/0.9)_100%)]"
        />
        <LogoMark className="absolute top-3 left-4 h-14 w-auto text-accent" />
        {film.src && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={belief.filmLabel}
            className="absolute top-4 right-4 grid size-[4.5rem] cursor-pointer place-items-center bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-accent hover:text-accent-fg md:top-8 md:right-8 md:size-[6.25rem]"
          >
            <Icon name="play" size={22} />
          </button>
        )}

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 md:gap-6 md:p-10 xl:flex-row xl:items-end xl:gap-14 xl:px-16 xl:pb-14">
          <h2 className="type-display text-white">
            <span data-reveal="up" className="block">
              {first}
            </span>{' '}
            <span data-reveal="up" style={revealDelay(150)} className="block md:pl-[1.6em]">
              {second}
            </span>
          </h2>
          <p data-reveal="up" style={revealDelay(300)} className="max-w-[22rem] text-lead font-light text-white/90 xl:mb-3">
            {belief.subtitle}
          </p>
        </div>
      </div>
      {film.src && <VideoLightbox film={film} open={open} onClose={() => setOpen(false)} />}
    </div>
  )
}

/** Closing statement on exclusivity (takes the slot of the reference's member-company row). */
function ExclusivityStatement() {
  const { meta, text, signature } = belief.statement
  return (
    <div className="pt-20 lg:pt-[6.25rem]">
      <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-6 text-sm font-medium">
        <p className="text-white/50">{meta}</p>
        <LogoMark className="h-8 w-auto text-accent" />
      </div>
      <blockquote data-reveal="up" className="mt-10 max-w-[56rem] md:mt-14">
        <p className="type-h3 font-light text-white/90">{text}</p>
        <footer className="mt-8 flex flex-wrap gap-x-3 gap-y-1 font-display text-lg text-brass-400 italic md:text-xl">
          <span>{signature[0]}</span>
          <span>{signature[1]}</span>
        </footer>
      </blockquote>
    </div>
  )
}

/** Luxury, redefined: statement band → four pillars → exclusivity statement. */
export function ExpertiseSection() {
  return (
    <section
      id={anchors.belief}
      className="bg-[linear-gradient(var(--color-ink-800)_0%,var(--color-ink-950)_15%)] pt-16 pb-24 text-white md:pt-20 lg:pb-32"
    >
      <div className="container-page">
        <StatementBand />

        <ul className="mt-14 grid gap-x-8 border-t border-white/10 pt-4 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {belief.pillars.map((pillar) => (
            <li key={pillar.title} className="border-t border-brass-700/70 border-b border-b-white/10 py-8">
              <Icon name="diamond" size={18} className="text-accent" />
              <h3 className="mt-4 font-sans text-[0.9375rem] font-bold tracking-[0.14em] uppercase">{pillar.title}</h3>
              <p className="mt-2 leading-[1.7] font-light text-white/85">{pillar.text}</p>
            </li>
          ))}
        </ul>

        <ExclusivityStatement />
      </div>
    </section>
  )
}
