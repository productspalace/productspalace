import { useRef } from 'react'
import { testimonials } from '../../content/home'
import { useSnapTrack } from '../../hooks/useSnapTrack'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { CarouselNav } from '../ui/CarouselNav'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

/** Horizontal track of alternating light / dark quote cards that rise in on a scrubbed scroll. */
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
    <section ref={sectionRef} id="testimonials" className="bg-surface pt-12 pb-20 lg:pb-24">
      <div className="container-page">
        <SectionHeading kicker={testimonials.kicker} title={testimonials.title} />

        <ul ref={trackRef} className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-8 lg:mt-[4.4rem]">
          {testimonials.items.map((t, i) => {
            const dark = i % 2 === 1
            return (
              <li
                key={t.name}
                data-testimonial
                className={`flex flex-[0_0_85%] snap-start flex-col rounded-card p-5 sm:p-[1.875rem] md:flex-[0_0_78%] xl:flex-[0_0_calc(50%-0.625rem)] ${
                  dark ? 'bg-ink-950 text-white' : 'bg-white shadow-[0_10px_40px_rgb(15_13_10/0.08)]'
                }`}
              >
                <div className="flex gap-1 text-accent" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, s) => (
                    <Icon key={s} name="star" size={17} />
                  ))}
                </div>
                <blockquote className={`mt-5 flex-1 text-lg leading-[1.4] md:text-xl ${dark ? 'text-white/65' : 'text-fg-muted'}`}>
                  <p>{t.quote}</p>
                </blockquote>
                <div className="mt-12 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-[1.0625rem] leading-[1.75] font-medium">{t.name}</p>
                    <p className={`mt-1 text-[0.9375rem] ${dark ? 'text-brass-400' : 'text-fg-muted'}`}>{t.role}</p>
                  </div>
                  <Icon name="quote" size={48} className={dark ? 'text-white/25' : 'text-brass-300'} />
                </div>
              </li>
            )
          })}
        </ul>

        <CarouselNav
          label="Testimonials"
          count={count}
          index={index}
          onSelect={goTo}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </section>
  )
}
