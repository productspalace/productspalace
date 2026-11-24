import { useRef, useState } from 'react'
import { expertiseFilm, memberLogos } from '../../content/assets'
import { expertise } from '../../content/home'
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
          aria-label={expertise.filmLabel}
          className="absolute top-1/2 left-1/2 grid size-[6.25rem] -translate-1/2 cursor-pointer place-items-center bg-white/10 text-white backdrop-blur-md transition-colors duration-300 hover:bg-accent hover:text-accent-fg"
        >
          <Icon name="play" size={22} />
        </button>
      </div>
      <VideoLightbox film={film} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

/** Logos roll to their duplicate on hover (reference behaviour). */
function MemberCompanies() {
  return (
    <div id="companies" className="scroll-mt-24 pt-20 lg:pt-[6.25rem]">
      <div className="flex items-center justify-between gap-6 text-sm font-medium">
        <p className="text-white/50">{expertise.membersMeta}</p>
        <h3 className="font-sans text-sm font-medium text-white">{expertise.membersTitle}</h3>
      </div>
      <ul className="mt-10 grid grid-cols-3 gap-x-4 gap-y-6 md:mt-14 md:grid-cols-6 md:gap-x-6">
        {memberLogos.map((logo) => (
          <li key={logo.id} className="group h-14 overflow-hidden md:h-[4.5rem] xl:h-[7.5rem]">
            <div className="flex flex-col transition-transform duration-500 ease-luxe group-hover:-translate-y-1/2">
              {[0, 1].map((copy) => (
                <div key={copy} className="grid h-14 place-items-center md:h-[4.5rem] xl:h-[7.5rem]">
                  <AssetImage asset={logo} decorative={copy === 1} className="h-auto max-h-full w-full max-w-[12rem] object-contain" />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="bg-[linear-gradient(var(--color-ink-800)_0%,var(--color-ink-950)_15%)] pt-16 pb-24 text-white md:pt-12 lg:pb-32"
    >
      <div className="container-page">
        <SectionHeading title={expertise.title} effect="split-scale" titleClassName="font-light" />
        <p className="mt-5 type-h3 font-light">
          {expertise.subtitle}
        </p>

        <ul className="mt-14 grid gap-x-8 border-t border-white/10 pt-4 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {expertise.pillars.map((pillar) => (
            <li key={pillar.title} className="border-t border-brass-700/70 border-b border-b-white/10 py-8">
              <Icon name="diamond" size={18} className="text-accent" />
              <h3 className="mt-4 font-sans text-[0.9375rem] font-bold tracking-[0.14em] uppercase">{pillar.title}</h3>
              <p className="mt-2 leading-[1.7] font-light text-white/85">{pillar.text}</p>
            </li>
          ))}
        </ul>

        <ClippedFilm />
        <MemberCompanies />
      </div>
    </section>
  )
}
