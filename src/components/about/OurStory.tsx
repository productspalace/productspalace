import { aboutAnchors, ourStory } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'
import { Highlight, SectionHeading } from '../ui/SectionHeading'

/**
 * Our story (reference: intro split). Desktop (≥1200px): image 718 × 700 on the
 * left, text column on the right with kicker, two-line H2, two paragraphs and a
 * dark button. 768–1199px: text left, image bleeding off the right edge.
 * Phones: text, then a full-bleed 400px image. Text stays left-aligned at every
 * width (the reference centres it on tablets and phones; the homepage does not).
 */
export function OurStory() {
  const [before, word] = ourStory.title
  return (
    <section id={aboutAnchors.story} className="pt-14 md:pt-20">
      <div className="container-page grid items-center gap-y-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-x-12 xl:grid-cols-[minmax(0,718fr)_minmax(0,532fr)] xl:gap-x-20">
        <div className="md:order-1 xl:order-2">
          <SectionHeading
            kicker={ourStory.kicker}
            title={
              <>
                {before}
                <Highlight>{word}</Highlight>
              </>
            }
          />
          <div data-reveal="up" style={revealDelay(400)} className="mt-7 max-w-[31.25rem] space-y-7 leading-[1.62] text-fg-muted">
            {ourStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div data-reveal="up" style={revealDelay(500)} className="mt-10">
            <a href={ourStory.cta.href} className="btn btn-ink">
              {ourStory.cta.label}
            </a>
          </div>
        </div>

        <div
          data-reveal="mask"
          className="relative -mx-gutter h-[25rem] overflow-hidden bg-stone-200 md:order-2 md:mx-0 md:-mr-gutter md:h-[43.75rem] xl:order-1 xl:mr-0"
        >
          <AssetImage
            asset={ourStory.image}
            className="absolute inset-0 size-full object-cover transition-transform duration-[1100ms] ease-reveal hover:scale-[1.04]"
          />
        </div>
      </div>
    </section>
  )
}
