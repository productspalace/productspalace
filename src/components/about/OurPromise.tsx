import { aboutAnchors, ourPromise } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { Highlight, SectionHeading } from '../ui/SectionHeading'

/**
 * Our promise. The reference has no equivalent section, so it combines two of its
 * patterns: the brass-ruled statement cards (vision / mission) and the large brass
 * initials of the values list. Five cards: 3 + 2 centred from lg, 2 per row from
 * md, stacked on phones.
 */
export function OurPromise() {
  const [before, word] = ourPromise.title
  return (
    <section id={aboutAnchors.promise} className="section">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading
            kicker={ourPromise.kicker}
            title={
              <>
                {before}
                <Highlight>{word}</Highlight>
              </>
            }
          />
          <p data-reveal="up" style={revealDelay(400)} className="max-w-[28rem] leading-[1.62] text-fg-muted lg:mb-1.5">
            {ourPromise.intro}
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-1 lg:mt-14">
          {ourPromise.principles.map((p, i) => (
            <li
              key={p.principle}
              data-reveal="up"
              style={revealDelay((i % 3) * 120)}
              className="flex basis-full flex-col border-b-[3px] border-brass-600 bg-surface-alt px-7 pt-9 pb-10 md:basis-[calc(50%-0.125rem)] md:px-10 lg:basis-[calc((100%-0.5rem)/3)]"
            >
              <span aria-hidden="true" className="font-display text-[3.5rem] leading-none font-light tracking-[-0.02em] text-accent">
                {p.principle.charAt(0)}
              </span>
              <p className="mt-6 text-[0.75rem] font-semibold tracking-[0.2em] text-accent-ink uppercase">{p.principle}</p>
              <h3 className="mt-3 font-display text-[1.625rem] leading-[1.2] font-normal tracking-[-0.015em] text-fg">{p.title}</h3>
              <p className="mt-3 leading-[1.62] text-ink-700">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
