import { useEffect, useState, type CSSProperties } from 'react'
import { heroFilm, heroSlides } from '../../content/assets'
import { hero } from '../../content/home'
import { anchors } from '../../content/site'
import { prefersReducedMotion } from '../../lib/gsap'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'
import { SocialRail } from '../ui/SocialRail'

const SLIDE_DELAY = 4000
const SLIDE_FADE = 1000

/** Cross-fading image slideshow (reference mobile hero; also the stand-in for the film). */
function HeroSlideshow({ className = '' }: { className?: string }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion() || heroSlides.length < 2) return
    const id = window.setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % heroSlides.length)
    }, SLIDE_DELAY + SLIDE_FADE)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`absolute inset-0 ${className}`}>
      {heroSlides.map((slide, i) => (
        <AssetImage
          key={slide.id}
          asset={slide}
          decorative={i !== 0}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          className={`absolute inset-0 size-full object-cover transition-opacity ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${SLIDE_FADE}ms` }}
        />
      ))}
    </div>
  )
}

/** Background film from md up, when a final video source exists. */
function HeroFilm() {
  const [src, setSrc] = useState<string>()

  useEffect(() => {
    if (!heroFilm.src) return
    const mq = window.matchMedia('(min-width: 48rem)')
    const sync = () => setSrc(mq.matches ? heroFilm.src : undefined)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  if (!src) return null
  return (
    <video
      className="absolute inset-0 hidden size-full object-cover md:block"
      src={src}
      poster={heroFilm.poster.src}
      autoPlay={!prefersReducedMotion()}
      muted
      loop
      playsInline
      aria-hidden="true"
    />
  )
}

/** Planned facts about the first address, desktop only (the reference's stats bar). */
function HeroHighlights() {
  const { caption, items } = hero.highlights
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 hidden h-[6.5rem] border-t border-white/10 bg-black/35 backdrop-blur-md xl:block">
      <div className="container-page grid h-full grid-cols-[auto_repeat(4,minmax(0,1fr))]">
        <p className="flex flex-col justify-center border-r border-white/10 pr-8 font-display text-[0.6875rem] leading-[1.7] tracking-[0.24em] text-accent uppercase">
          <span>{caption[0]}</span>
          <span>{caption[1]}</span>
        </p>
        <dl className="contents">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col justify-center border-r border-white/10 pl-6 last:border-r-0">
              <dt className="order-2 mt-1.5 font-display text-[0.6875rem] tracking-[0.24em] text-white/70 uppercase">
                {item.label}
              </dt>
              <dd className="order-1 font-display text-[2rem] leading-none font-light text-white">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/** Headline block, bottom-left over the media; sits above the highlights bar on desktop. */
function HeroIntro() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 pb-8 md:pb-14 xl:pb-[calc(6.5rem+3.5rem)]">
      <div className="container-page text-white">
        <p data-reveal="up" style={{ '--reveal-delay': '200ms' } as CSSProperties} className="kicker mb-4 text-brass-400 md:mb-6">
          {hero.eyebrow}
        </p>
        <h1
          data-reveal="up"
          style={{ '--reveal-delay': '300ms' } as CSSProperties}
          className="type-h1 max-w-[12em] text-balance md:max-w-[13em]"
        >
          {hero.title}
        </h1>
        <p
          data-reveal="up"
          style={{ '--reveal-delay': '400ms' } as CSSProperties}
          className="mt-6 hidden max-w-[32rem] text-lead leading-[1.6] text-white/85 md:block"
        >
          {hero.text}
        </p>
        <div
          data-reveal="up"
          style={{ '--reveal-delay': '500ms' } as CSSProperties}
          className="mt-6 flex flex-wrap items-center gap-x-9 gap-y-4 md:mt-9"
        >
          <a href={hero.cta.href} className="btn btn-primary min-h-[3.125rem] hover:text-white">
            {hero.cta.label}
          </a>
          <a href={hero.secondary.href} className="link-arrow hidden text-white md:inline-flex">
            {hero.secondary.label}
            <Icon name="arrow-right" size={19} />
          </a>
        </div>
      </div>
    </div>
  )
}

/**
 * Hero: full-bleed media with the brand headline bottom-left. 422px slideshow on
 * phones, video area from md, 100svh on desktop.
 */
export function Hero() {
  const hasFilm = Boolean(heroFilm.src)
  return (
    <section
      id={anchors.top}
      aria-label="Introduction"
      className="relative h-[26.375rem] overflow-hidden bg-ink-950 md:h-[51.25rem] lg:h-[60vw] xl:h-svh xl:min-h-[40rem]"
    >
      <HeroSlideshow className={hasFilm ? 'md:hidden' : ''} />
      <HeroFilm />
      {/* Legibility for the transparent desktop header and the highlights bar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgb(15_13_10/0.55),rgb(15_13_10/0)_28%,rgb(15_13_10/0)_70%,rgb(15_13_10/0.35))] xl:block"
      />
      {/* Legibility for the headline */}
      <div aria-hidden="true" className="overlay-scrim" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(15_13_10/0.6),rgb(15_13_10/0.25)_70%,rgb(15_13_10/0))] md:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgb(15_13_10/0.5),rgb(15_13_10/0)_65%)] md:block"
      />
      <SocialRail className="top-[27%] right-6 xl:right-11" />
      <HeroIntro />
      <HeroHighlights />
    </section>
  )
}
