import type { CSSProperties } from 'react'
import { aboutGallery } from '../../content/assets'
import { about } from '../../content/home'
import { AssetImage } from '../ui/AssetImage'
import { Highlight, SectionHeading } from '../ui/SectionHeading'

/** 12-column mosaic, rows 38% / 62%: [7][5] over [4][8], 5px gaps. */
const tiles = ['col-span-7', 'col-span-5', 'col-span-4', 'col-span-8']

function LifestyleGallery() {
  return (
    <div className="grid h-[21.25rem] grid-cols-12 grid-rows-[40%_60%] gap-1 min-[421px]:h-[26.25rem] md:h-[31.875rem] md:grid-rows-[38%_62%] md:gap-[5px] xl:h-[36.875rem]">
      {aboutGallery.map((image, i) => (
        <div key={image.id} className={`relative min-h-0 overflow-hidden bg-stone-200 ${tiles[i]}`}>
          <AssetImage
            asset={image}
            className="absolute inset-0 size-full object-cover transition-transform duration-[1100ms] ease-reveal hover:scale-[1.055]"
          />
        </div>
      ))}
    </div>
  )
}

export function AboutSection() {
  const [before, word, after] = about.title
  return (
    <section id="about" className="section">
      <div className="container-page grid gap-12 xl:grid-cols-[minmax(0,32.5rem)_minmax(0,40.3rem)] xl:items-start xl:justify-between">
        <div>
          <SectionHeading
            kicker={about.kicker}
            title={
              <>
                {before}
                <Highlight>{word}</Highlight>
                {after}
              </>
            }
          />
          <div data-reveal="up" style={{ '--reveal-delay': '400ms' } as CSSProperties} className="mt-7 space-y-7 text-fg-muted xl:max-w-[31.25rem]">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div data-reveal="up" style={{ '--reveal-delay': '500ms' } as CSSProperties} className="mt-10">
            <a href={about.cta.href} className="btn btn-ink">
              {about.cta.label}
            </a>
          </div>
        </div>
        <LifestyleGallery />
      </div>
    </section>
  )
}
