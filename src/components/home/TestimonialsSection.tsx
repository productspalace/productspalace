import { useRef } from 'react'
import { anchors, moment } from '../../content/home'
import { useSnapTrack } from '../../hooks/useSnapTrack'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { CarouselNav } from '../ui/CarouselNav'
import { LogoMark } from '../ui/Logo'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "The moment we build for": the arrival home, told in short beats on a horizontal
 * track of alternating light / dark cards that rise in on a scrubbed scroll.
 */
export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { trackRef, index, count, goTo, prev, next } = useSnapTrack<HTMLUListElement>()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-testimonial]',
          { y: '10vw', opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.5,
            ease: 'none',
            scrollTrigger: { trigger: trackRef.current, start: 'top bottom', end: 'top 60%', scrub: 2.5 },
          },
        )
      })
      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id={anchors.moment} className="bg-surface pt-12 pb-20 lg:pb-24">
      <div className="container-page">
        <SectionHeading kicker={moment.kicker} title={moment.title} className="max-w-[48rem]" />

        <ul ref={trackRef} className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-8 lg:mt-[4.4rem]">
          {moment.beats.map((beat, i) => {
            const dark = i % 2 === 1
            return (
              <li
                key={beat.time}
                data-testimonial
                className={`flex min-h-[18rem] flex-[0_0_85%] snap-start flex-col rounded-card p-5 sm:p-[1.875rem] md:min-h-[20rem] md:flex-[0_0_78%] xl:flex-[0_0_calc(50%-0.625rem)] ${
                  dark ? 'bg-ink-950 text-white' : 'bg-white shadow-[0_10px_40px_rgb(15_13_10/0.08)]'
                }`}
              >
                <p className={`text-[0.8125rem] font-semibold tracking-[0.15em] uppercase ${dark ? 'text-brass-400' : 'text-accent-ink'}`}>
                  <time>{beat.time}</time>
                </p>
                <p className={`mt-5 flex-1 font-display text-[1.375rem] leading-[1.4] font-light md:text-[1.75rem] ${dark ? 'text-white/85' : 'text-fg'}`}>
                  {beat.text}
                </p>
                <div className="mt-10 flex items-end justify-between gap-4">
                  <p className="font-display text-[1.0625rem] leading-[1.75] font-medium">{beat.label}</p>
                  <LogoMark className={`h-10 w-auto ${dark ? 'text-white/25' : 'text-brass-300'}`} />
                </div>
              </li>
            )
          })}
        </ul>

        <CarouselNav
          label={moment.navLabel}
          count={count}
          index={index}
          onSelect={goTo}
          onPrev={prev}
          onNext={next}
        />

        <p className="mt-12 text-center font-display text-xl leading-[1.5] text-fg md:mt-16 md:text-[2rem]" data-reveal="up">
          {moment.closing}
        </p>
      </div>
    </section>
  )
}
