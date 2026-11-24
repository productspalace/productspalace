import { useEffect, useState, type CSSProperties } from 'react'
import { heroFilm, heroSlides } from '../../content/assets'
import { brand, heroStats, socials } from '../../content/home'
import { prefersReducedMotion } from '../../lib/gsap'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'

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

function SocialRail() {
  return (
    <div
      data-reveal="right"
      style={{ '--reveal-delay': '300ms' } as CSSProperties}
      className="absolute top-[27%] right-6 z-10 hidden flex-col items-center gap-6 text-white md:flex xl:right-11"
    >
      <span className="text-[0.8125rem] font-medium [writing-mode:vertical-rl] rotate-180">Follow us</span>
      <span className="h-12 w-px bg-white/40" />
      <ul className="flex flex-col items-center gap-3.5 [--icon-cutout:#111]">
        {socials.map((s) => (
          <li key={s.id}>
            <a href={s.href} aria-label={s.label} className="transition-colors hover:text-accent">
              <Icon name={s.id} size={17} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HeroStats() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 hidden h-[6.5rem] border-t border-white/10 bg-black/35 backdrop-blur-md xl:block">
      <dl className="container-page grid h-full grid-cols-4">
        {heroStats.map((stat) => (
          <div key={stat.label} className="flex flex-col justify-center border-r border-white/10 pl-6">
            <dt className="order-2 mt-1 font-display text-[0.6875rem] tracking-[0.24em] text-white/70 uppercase">
              {stat.label}
            </dt>
            <dd className="order-1 font-display text-[2rem] leading-none font-light text-white">
              {stat.value}
              {stat.suffix && <span className="ml-2 text-accent">{stat.suffix}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

/**
 * Hero: full-bleed media, no visible headline (the reference lets the film carry
 * the message). 422px slideshow on phones, video area from md, 100svh on desktop.
 */
export function Hero() {
  const hasFilm = Boolean(heroFilm.src)
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative h-[26.375rem] overflow-hidden bg-ink-950 md:h-[51.25rem] lg:h-[60vw] xl:h-svh xl:min-h-[40rem]"
    >
      <h1 className="sr-only">{brand.name}: luxury real estate developments</h1>
      <HeroSlideshow className={hasFilm ? 'md:hidden' : ''} />
      <HeroFilm />
      {/* Legibility for the transparent desktop header and the stats bar */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(to_bottom,rgb(15_13_10/0.55),rgb(15_13_10/0)_28%,rgb(15_13_10/0)_70%,rgb(15_13_10/0.35))] xl:block"
      />
      <SocialRail />
      <HeroStats />
    </section>
  )
}
