import { useRef, useState } from 'react'
import { expertiseFilm } from '../../content/assets'
import { anchors, belief } from '../../content/home'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'
import { LogoMark } from '../ui/Logo'
import { SectionHeading } from '../ui/SectionHeading'
import { VideoLightbox } from './VideoLightbox'

/**
 * Rounded film panel that starts clipped (inset 0 5%, scale .86) and opens to its
 * full frame once it nears 450px from the top of the viewport (scrub 1). The
 * reference measures from a wrapper ~75px above the panel, hence 525px here.
 */
function ClippedFilm() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
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
  return (
    <div ref={wrapRef} className="relative mt-16 h-[25rem] md:h-[31rem] lg:mt-[4.6rem] lg:h-[37.5rem] xl:h-[43.75rem]">
      <div ref={panelRef} className="absolute inset-0 overflow-hidden rounded-card bg-ink-800">
        {film.src ? (
          <video
            className="absolute inset-0 size-full object-cover"
            src={film.src}
            poster={film.poster.src}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : (
          <AssetImage asset={film.poster} className="absolute inset-0 size-full object-cover" />
        )}
        <LogoMark className="absolute top-3 left-4 h-14 w-auto text-accent" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={belief.filmLabel}
          className="absolute top-1/2 left-1/2 grid size-[6.25rem] -translate-1/2 cursor-pointer place-items-center bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-accent hover:text-accent-fg"
        >
          <Icon name="play" size={22} />
        </button>
      </div>
      <VideoLightbox film={film} open={open} onClose={() => setOpen(false)} />
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

export function ExpertiseSection() {
  return (
    <section
      id={anchors.belief}
      className="bg-[linear-gradient(var(--color-ink-800)_0%,var(--color-ink-950)_15%)] pt-16 pb-24 text-white md:pt-12 lg:pb-32"
    >
      <div className="container-page">
        <SectionHeading title={belief.title} effect="split-scale" titleClassName="font-light" />
        <p className="mt-5 type-h3 font-light">
          {belief.subtitle}
        </p>

        <ul className="mt-14 grid gap-x-8 border-t border-white/10 pt-4 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {belief.pillars.map((pillar) => (
            <li key={pillar.title} className="border-t border-brass-700/70 border-b border-b-white/10 py-8">
              <Icon name="diamond" size={18} className="text-accent" />
              <h3 className="mt-4 font-sans text-[0.9375rem] font-bold tracking-[0.14em] uppercase">{pillar.title}</h3>
              <p className="mt-2 leading-[1.7] font-light text-white/85">{pillar.text}</p>
            </li>
          ))}
        </ul>

        <ClippedFilm />
        <ExclusivityStatement />
      </div>
    </section>
  )
}
