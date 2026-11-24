import { aboutAnchors, ourBelief } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'
import { Highlight, SectionHeading } from '../ui/SectionHeading'

/**
 * Our belief (reference: "journey" split). Desktop: text column on the left,
 * inset and starting lower than the 718 × 600 image on the right. Below 1200px
 * the text comes first and the image follows (57% wide from md, full-bleed on phones).
 */
export function OurBelief() {
  const [before, word] = ourBelief.title
  return (
    <section id={aboutAnchors.belief} className="pt-14 pb-16 md:pt-20 xl:pb-[10.75rem]">
      <div className="container-page grid gap-y-12 xl:grid-cols-[minmax(0,482fr)_minmax(0,718fr)] xl:items-start xl:gap-x-20">
        <div className="xl:pt-[3.125rem] xl:pl-9">
          <SectionHeading
            kicker={ourBelief.kicker}
            title={
              <>
                {before}
                <Highlight>{word}</Highlight>
              </>
            }
          />
          <div data-reveal="up" style={revealDelay(400)} className="mt-7 max-w-[30.125rem] space-y-7 leading-[1.62] text-fg-muted">
            {ourBelief.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div
          data-reveal="mask"
          className="relative -mx-gutter h-[25rem] overflow-hidden bg-stone-200 md:mx-0 md:h-[37.5rem] md:w-[57%] xl:w-auto"
        >
          <AssetImage
            asset={ourBelief.image}
            className="absolute inset-0 size-full object-cover transition-transform duration-[1100ms] ease-reveal hover:scale-[1.04]"
          />
        </div>
      </div>
    </section>
  )
}
