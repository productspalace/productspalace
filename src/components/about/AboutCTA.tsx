import { aboutAnchors, aboutClosing } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { Icon } from '../ui/Icon'
import { Highlight } from '../ui/SectionHeading'

/**
 * Closing (reference: "commitment" block). Large pale quote glyph top-left, a
 * centred H2 with one highlighted phrase, an italic passage (the invitation that
 * closes the brand story), a tracked brass signature with the tagline under it,
 * then the call to action. The reference attributes its quote to an executive;
 * here the words are the brand's own, so the signature is the brand.
 */
export function AboutCTA() {
  const [before, word, after] = aboutClosing.title
  return (
    <section id={aboutAnchors.closing} aria-labelledby="closing-title" className="relative overflow-hidden bg-white pt-28 pb-24 md:pt-[7.8rem] md:pb-28">
      <Icon
        name="quote"
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-[max(var(--spacing-gutter),calc((100vw-var(--container-page))/2))] size-16 text-stone-100 md:top-14 md:size-36"
      />
      <div className="relative container-page text-center">
        <h2 id="closing-title" data-reveal="up" style={revealDelay(400)} className="type-h2 mx-auto max-w-[16em]">
          {before}
          <Highlight>{word}</Highlight>
          {after}
        </h2>
        <figure data-reveal="up" style={revealDelay(400)} className="mx-auto mt-6 max-w-[68.75rem]">
          <blockquote>
            <p className="font-display text-[1.25rem] leading-[1.55] font-light text-ink-800 italic md:text-[1.5rem]">“{aboutClosing.quote}”</p>
          </blockquote>
          <figcaption className="mt-10">
            <span className="block text-base font-medium tracking-[0.3em] text-accent-ink uppercase">{aboutClosing.signature}</span>
            <span className="mt-2 block font-display text-[0.9375rem] text-fg-muted italic">{aboutClosing.tagline}</span>
          </figcaption>
        </figure>
        <div data-reveal="up" style={revealDelay(500)} className="mt-11">
          <a href={aboutClosing.cta.href} className="btn btn-ink">
            {aboutClosing.cta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
