import { aboutAnchors, aboutHero } from '../../content/about'
import { revealDelay } from '../../lib/reveal'
import { AssetImage } from '../ui/AssetImage'
import { SocialRail } from '../ui/SocialRail'

/**
 * About hero (reference: inner-page banner). A darkened photograph with kicker,
 * display headline and a short paragraph, left-aligned on the page container; the
 * "Follow us" rail sits on the right from md. 666px tall on desktop (under the
 * transparent header), ~420–470px below 1200px (under the fixed mobile bar).
 * Text rises in (fadeInUp, 400ms) once the loader has gone.
 */
export function AboutHero() {
  return (
    <section
      id={aboutAnchors.top}
      aria-labelledby="about-title"
      className="relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden bg-ink-950 text-white md:min-h-[28rem] lg:min-h-[29rem] xl:min-h-[41.625rem]"
    >
      <AssetImage
        asset={aboutHero.image}
        decorative
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {/* Even darkening (reference ~55%), deepened on the text side and under the transparent header */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/50" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(15_13_10/0.45),rgb(15_13_10/0)_70%),linear-gradient(to_bottom,rgb(15_13_10/0.35),rgb(15_13_10/0)_30%)]"
      />

      <SocialRail className="top-[22%] right-6 xl:top-[50%] xl:right-11" />

      <div className="container-page pt-24 pb-14 md:pb-[4.5rem] xl:pt-60 xl:pb-[7.5rem]">
        <div data-reveal="up" style={revealDelay(400)}>
          <p className="kicker mb-5 text-brass-400 md:mb-7">{aboutHero.kicker}</p>
          <h1
            id="about-title"
            className="max-w-[11em] font-display text-[clamp(2.5rem,1.2rem+4.4vw,5rem)] leading-[1.02] font-light tracking-[-0.02em] text-balance"
          >
            {aboutHero.title}
          </h1>
        </div>
        <p data-reveal="up" style={revealDelay(400)} className="mt-6 max-w-[31.25rem] leading-[1.62] text-white/80 md:mt-7">
          {aboutHero.text}
        </p>
      </div>
    </section>
  )
}
