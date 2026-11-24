import { aboutAnchors, firstAddress } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'
import { Icon } from '../ui/Icon'
import { Highlight, SectionHeading } from '../ui/SectionHeading'

/**
 * Our first address: the planned pilot development. A text / image split in the
 * reference's proportions (image 718 × 600 on the right from 1200px), then each
 * planned feature paired with the life it is meant to support. The image carries
 * a "Planned" chip and an "illustrative" caption so nothing reads as built.
 */
export function FirstAddress() {
  const [before, word] = firstAddress.title
  return (
    <section id={aboutAnchors.firstAddress} className="bg-surface-alt section">
      <div className="container-page">
        <div className="grid gap-y-12 xl:grid-cols-[minmax(0,482fr)_minmax(0,718fr)] xl:items-center xl:gap-x-20">
          <div>
            <SectionHeading
              kicker={firstAddress.kicker}
              title={
                <>
                  {before}
                  <Highlight>{word}</Highlight>
                </>
              }
            />
            <div data-reveal="up" style={revealDelay(400)}>
              <p className="mt-7 inline-flex items-center gap-3 rounded-full border border-line-strong bg-white px-4 py-2 text-[0.75rem] font-semibold tracking-[0.14em] text-fg uppercase">
                <span aria-hidden="true" className="size-[7px] animate-gold-pulse rounded-full bg-accent" />
                {firstAddress.status}
              </p>
              <div className="mt-7 max-w-[30.125rem] space-y-6 leading-[1.62] text-fg-muted">
                {firstAddress.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <div data-reveal="up" style={revealDelay(500)} className="mt-9">
              <a href={firstAddress.link.href} className="link-arrow">
                {firstAddress.link.label}
                <Icon name="arrow-right" size={19} />
              </a>
            </div>
          </div>

          <figure data-reveal="mask" className="relative h-[22rem] overflow-hidden bg-stone-200 sm:h-[28rem] md:h-[37.5rem]">
            <AssetImage asset={firstAddress.image} className="absolute inset-0 size-full object-cover" />
            <span
              aria-hidden="true"
              className="absolute top-4 left-4 flex items-center gap-3 bg-[rgb(15_15_15/0.72)] px-4 py-3 text-[0.6875rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-md md:top-6 md:left-6"
            >
              <span className="size-[7px] animate-gold-pulse rounded-full bg-accent" />
              {firstAddress.imageLabel}
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,rgb(15_13_10/0.6),transparent)] px-4 pt-10 pb-4 text-[0.75rem] font-medium tracking-[0.04em] text-white/90 md:px-6 md:pb-5">
              {firstAddress.imageCaption}
            </figcaption>
          </figure>
        </div>

        <ul className="mt-14 grid gap-x-8 border-t border-line md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {firstAddress.features.map((f, i) => (
            <li
              key={f.feature}
              data-reveal="up"
              style={revealDelay((i % 3) * 120)}
              className="border-b border-line py-7 md:py-8"
            >
              <Icon name="diamond" size={16} className="text-accent" />
              <h3 className="mt-4 font-sans text-[0.875rem] leading-[1.5] font-bold tracking-[0.12em] text-fg uppercase">{f.feature}</h3>
              <p className="mt-2 leading-[1.62] text-fg-muted">{f.purpose}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
