import { promise } from '../../content/home'
import { anchors } from '../../content/site'
import { useSnapTrack } from '../../hooks/useSnapTrack'
import { AssetImage } from '../ui/AssetImage'
import { CarouselNav } from '../ui/CarouselNav'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "Our promise": 5 photo cards in a grid from 1200px (`xl`; five columns need the
 * room); below that a scroll-snap track (2 per view, 84% on phones) with dots and arrows.
 */
export function ProcessSection() {
  const { trackRef, index, count, goTo, prev, next } = useSnapTrack<HTMLOListElement>()

  return (
    <section id={anchors.promise} className="bg-surface-alt pt-[4.75rem] pb-24 lg:pt-[7.5rem] lg:pb-40">
      <div className="container-page">
        <SectionHeading kicker={promise.kicker} title={promise.title} />

        <ol
          ref={trackRef}
          className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 lg:mt-[3.3rem] xl:grid xl:grid-cols-5 xl:gap-4 xl:overflow-visible"
        >
          {promise.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative isolate flex min-h-[23.75rem] flex-[0_0_84%] snap-start flex-col overflow-hidden rounded-card bg-ink-900 p-6 text-white sm:min-h-[25rem] sm:flex-[0_0_calc((100%-1rem)/2)] sm:p-[1.875rem] xl:min-h-[27.5rem] xl:p-6"
            >
              <AssetImage
                asset={item.image}
                decorative
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
              />
              <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(28_26_23/0.55)_0%,rgb(28_26_23/0.94)_100%)]" />
              <span className="mb-auto font-sans text-[2.375rem] leading-[1.1] font-bold tracking-[-0.03em] text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 mb-3 font-display text-[1.75rem] leading-[1.1] font-medium tracking-[-0.02em] text-balance sm:text-[2rem] xl:text-[1.625rem]">{item.title}</h3>
              <p className="text-base leading-[1.55] text-white/75 sm:text-[1.0625rem] xl:text-base">{item.text}</p>
            </li>
          ))}
        </ol>

        <CarouselNav
          className="mt-5 xl:hidden"
          label={promise.kicker}
          count={count}
          index={index}
          onSelect={goTo}
          onPrev={prev}
          onNext={next}
        />

        <p className="mt-10 text-center text-xl leading-[1.6] text-fg-muted md:text-[2rem]" data-reveal="up">
          {promise.cta.lead}{' '}
          <a href={promise.cta.href} className="text-fg underline decoration-1 underline-offset-[0.18em] transition-colors hover:text-accent-ink">
            {promise.cta.label}
          </a>
        </p>
      </div>
    </section>
  )
}
