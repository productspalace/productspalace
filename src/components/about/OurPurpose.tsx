import { aboutAnchors, ourPurpose } from '../../content/about'
import { revealDelay } from '../../lib/reveal'

/**
 * Our purpose (reference: vision / mission pair). Two white cards, centred, 4px
 * apart, each closed by a 3px brass rule. Side by side from md, stacked on phones.
 * Sits at the top of the grey band shared with "The lives we design around".
 */
export function OurPurpose() {
  return (
    <section id={aboutAnchors.purpose} aria-labelledby="purpose-title" className="pt-14 md:pt-20">
      <h2 id="purpose-title" className="sr-only">
        {ourPurpose.title}
      </h2>
      <div className="container-page">
        <ul className="mx-auto grid max-w-[61.375rem] gap-1 md:grid-cols-2">
          {ourPurpose.statements.map((s, i) => (
            <li
              key={s.title}
              className={`flex flex-col items-center border-b-[3px] bg-white px-6 py-10 text-center md:px-10 md:py-12 ${
                i === 0 ? 'border-brass-600' : 'border-brass-700'
              }`}
            >
              <h3 data-reveal="up" style={revealDelay(400)} className="font-display text-[2.5rem] leading-none font-light tracking-[-0.02em]">
                {s.title}
              </h3>
              <p data-reveal="up" style={revealDelay(400)} className="mt-4 max-w-[25.75rem] text-xl leading-[1.62] text-ink-700">
                {s.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
