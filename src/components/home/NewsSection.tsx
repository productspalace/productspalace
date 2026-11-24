import type { CSSProperties } from 'react'
import { anchors, firstAddress } from '../../content/home'
import { AssetImage } from '../ui/AssetImage'
import { LogoMark } from '../ui/Logo'
import { SectionHeading } from '../ui/SectionHeading'

/**
 * "Our first address": the planned pilot development, in the reference's
 * three-card news layout. Every card carries a "Planned" status so nothing reads
 * as finished.
 */
export function NewsSection() {
  return (
    <section id={anchors.firstAddress} className="bg-surface-alt pt-[4.75rem] pb-24 lg:pt-[7.2rem] lg:pb-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[48.5rem]">
            <SectionHeading kicker={firstAddress.kicker} title={firstAddress.title} effect="split-scale" />
            <p data-reveal="up" style={{ '--reveal-delay': '400ms' } as CSSProperties} className="mt-6 max-w-[40rem] text-fg-muted">
              {firstAddress.intro}
            </p>
          </div>
          <div data-reveal="up" style={{ '--reveal-delay': '500ms' } as CSSProperties} className="flex-none">
            <a href={firstAddress.cta.href} className="btn btn-ink">
              {firstAddress.cta.label}
            </a>
          </div>
        </div>

        <ul className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[3.1rem] lg:grid-cols-3">
          {firstAddress.features.map((feature, i) => (
            <li
              key={feature.title}
              data-reveal="up"
              style={{ '--reveal-delay': `${i * 150}ms` } as CSSProperties}
              className="flex flex-col rounded-card bg-white p-2.5"
            >
              <div className="relative aspect-news overflow-hidden rounded-card bg-stone-200">
                <AssetImage asset={feature.image} decorative className="size-full object-cover" />
                <LogoMark className="absolute top-3 right-3 h-8 w-auto text-accent" />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-9 pb-7">
                <p className="flex flex-wrap items-center gap-5 text-[0.9375rem] text-fg-muted">
                  <span className="rounded-full border border-line-strong px-3.5 py-1.5 text-sm text-fg uppercase">{feature.category}</span>
                  <span>{firstAddress.status}</span>
                </p>
                <h3 className="mt-5 font-display text-2xl leading-[1.41] font-medium tracking-[-0.01em] text-fg">{feature.title}</h3>
                <p className="mt-3 text-fg-muted">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
