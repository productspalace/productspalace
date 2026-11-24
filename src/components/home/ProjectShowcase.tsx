import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { showcase } from '../../content/home'
import { prefersReducedMotion } from '../../lib/gsap'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'
import { Highlight } from '../ui/SectionHeading'

const { projects } = showcase

function useAutoplay(advance: () => void, interval: number, paused: boolean) {
  useEffect(() => {
    if (paused) return
    const id = window.setTimeout(advance, interval)
    return () => clearTimeout(id)
  })
}

/**
 * Featured developments: 56/44 image + info stage, 6s autoplay (paused on hover,
 * focus and hidden tabs), dash pagination, round arrows and touch swipe.
 */
export function ProjectShowcase() {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [reduced] = useState(prefersReducedMotion)
  const [hidden, setHidden] = useState(false)
  const touchX = useRef<number | null>(null)
  const project = projects[current]

  const go = useCallback((i: number) => setCurrent((i + projects.length) % projects.length), [])

  useEffect(() => {
    const onVis = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useAutoplay(() => go(current + 1), showcase.interval, hovered || reduced || hidden)

  const [kickerA, kickerB] = showcase.kicker
  const [titleA, titleB] = showcase.title
  const [footA, footB] = showcase.footer

  return (
    <section id="projects" aria-roledescription="carousel" aria-label="Featured developments" className="p-2.5">
      <div className="bg-stone-100 py-14 md:py-[5.3rem]">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-6 md:mb-[3.25rem] lg:flex-row lg:items-end lg:justify-between lg:gap-10" data-reveal="up" style={{ '--reveal-delay': '400ms' } as CSSProperties}>
            <div>
              <p className="mb-6 flex items-center gap-3.5 text-[0.8125rem] font-semibold tracking-[0.15em] text-fg uppercase">
                {kickerA}
                <span className="h-0.5 w-7 bg-accent" />
                {kickerB}
              </p>
              <h2 className="type-h2 font-normal xl:whitespace-nowrap">
                {titleA}
                <br className="xl:hidden" />
                <Highlight>{titleB}</Highlight>
              </h2>
            </div>
            <a href={showcase.link.href} className="link-arrow self-start lg:mb-2 lg:self-auto">
              {showcase.link.label}
              <Icon name="arrow-right" size={19} />
            </a>
          </div>

          <div
            className="flex flex-col shadow-[0_20px_70px_rgb(0_0_0/0.07)] md:grid md:min-h-[38.125rem] md:grid-cols-[52fr_48fr] lg:grid-cols-[56fr_44fr]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setHovered(true)}
            onBlurCapture={() => setHovered(false)}
            onTouchStart={(e) => (touchX.current = e.changedTouches[0].screenX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return
              const dx = e.changedTouches[0].screenX - touchX.current
              if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1))
              touchX.current = null
            }}
          >
            {/* Image: every slide is stacked; the active one fades in and slowly zooms */}
            <div className="relative h-[21.875rem] overflow-hidden bg-ink-800 md:h-auto md:min-h-[38.125rem]">
              {projects.map((p, i) => (
                <AssetImage
                  key={p.image.id}
                  asset={p.image}
                  decorative={i !== current}
                  className={`absolute inset-0 size-full object-cover ${
                    i === current
                      ? 'scale-[1.07] opacity-100 [transition:opacity_.45s_ease,scale_6s_ease]'
                      : 'scale-100 opacity-0 [transition:opacity_.45s_ease,scale_0s_.45s]'
                  }`}
                />
              ))}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.28)_0%,rgb(0_0_0/0)_45%,rgb(0_0_0/0.58)_100%)]"
              />
              <span className="absolute top-[1.125rem] left-[1.125rem] z-10 flex items-center gap-3 bg-[rgb(15_15_15/0.72)] px-[1.125rem] py-[0.8125rem] text-[0.6875rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md md:top-8 md:left-8 md:text-xs">
                <span className="size-[7px] animate-gold-pulse rounded-full bg-accent" />
                {project.tag}
              </span>
              <span className="absolute bottom-5 left-[1.125rem] z-10 text-[0.6875rem] font-semibold tracking-[0.17em] text-white uppercase md:bottom-[1.875rem] md:left-8 md:text-xs">
                {showcase.imageCaption}
              </span>
            </div>

            {/* Info panel */}
            <div className="flex min-w-0 flex-col justify-between bg-white px-6 py-7 md:p-7 lg:px-[clamp(1.75rem,4vw,4rem)] lg:py-[2.2rem]">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold tracking-[0.12em] text-fg-subtle uppercase">
                {showcase.infoLabel}
                <Icon name="sparkle" size={29} strokeWidth={1.2} className="animate-spin-slow text-accent" />
              </div>

              <div key={current} aria-live={hovered ? 'polite' : 'off'} className="animate-text-enter py-8 md:py-[2.2rem]">
                <p className="mb-5 flex items-center gap-2 text-[0.8125rem] font-bold tracking-[0.08em] text-accent-ink uppercase">
                  <Icon name="pin" size={17} />
                  {project.location}
                </p>
                <h3 className="font-display text-[2.6875rem] leading-[1.15] font-normal tracking-[-0.02em] text-fg md:text-[2.75rem] lg:text-[clamp(2.5rem,4vw,3.75rem)]">
                  {project.title}
                </h3>
                <span className="mt-7 mb-6 block h-[3px] w-[3.25rem] bg-accent" />
                <p className="mb-6 leading-[1.95] text-fg-muted md:mb-8">{project.description}</p>
                <dl className="grid grid-cols-2 gap-3 border-t border-line py-6 md:gap-5">
                  <div>
                    <dt className="mb-2.5 text-xs font-semibold tracking-[0.1em] text-fg-subtle uppercase">Price from</dt>
                    <dd className="text-base leading-normal font-semibold text-fg lg:text-lg">{project.price}</dd>
                  </div>
                  <div>
                    <dt className="mb-2.5 text-xs font-semibold tracking-[0.1em] text-fg-subtle uppercase">Property type</dt>
                    <dd className="text-base leading-normal font-semibold text-fg lg:text-lg">{project.type}</dd>
                  </div>
                </dl>
                <a
                  href={project.href}
                  className="group flex w-full items-center justify-between gap-4 bg-accent px-5 py-4 text-[0.8125rem] font-bold tracking-[0.09em] text-accent-fg uppercase transition-[background-color,translate] duration-300 hover:-translate-y-[3px] hover:bg-brass-400"
                >
                  {showcase.ctaLabel}
                  <Icon name="arrow-right" size={23} className="transition-transform duration-300 group-hover:translate-x-[5px]" />
                </a>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-line pt-[1.125rem] text-[0.6875rem] font-semibold tracking-[0.12em] text-fg-subtle uppercase">
                <span>{footA}</span>
                <span>{footB}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 pt-[2.125rem]">
            <div className="flex max-w-[16.25rem] min-w-0 flex-1 items-center gap-[clamp(0.375rem,1.5vw,0.75rem)]">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  aria-label={`Show ${p.title}`}
                  aria-current={i === current ? 'true' : undefined}
                  onClick={() => go(i)}
                  className="relative h-11 min-w-0 flex-1 cursor-pointer after:absolute after:inset-x-0 after:top-[calc(50%-2px)] after:h-[3px] after:bg-stone-300 after:transition-colors aria-[current=true]:after:bg-accent"
                />
              ))}
            </div>
            <div className="flex gap-2.5">
              <button type="button" onClick={() => go(current - 1)} aria-label="Previous project" className="grid size-[2.875rem] cursor-pointer place-items-center rounded-full border border-stone-300 text-fg transition-colors duration-300 hover:border-accent hover:bg-accent md:size-[3.375rem]">
                <Icon name="arrow-left" size={23} />
              </button>
              <button type="button" onClick={() => go(current + 1)} aria-label="Next project" className="grid size-[2.875rem] cursor-pointer place-items-center rounded-full border border-stone-300 text-fg transition-colors duration-300 hover:border-accent hover:bg-accent md:size-[3.375rem]">
                <Icon name="arrow-right" size={23} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
