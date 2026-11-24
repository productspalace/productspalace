import { AboutCTA } from '../components/about/AboutCTA'
import { AboutHero } from '../components/about/AboutHero'
import { FirstAddress } from '../components/about/FirstAddress'
import { OurBelief } from '../components/about/OurBelief'
import { OurPeople } from '../components/about/OurPeople'
import { OurPromise } from '../components/about/OurPromise'
import { OurPurpose } from '../components/about/OurPurpose'
import { OurStory } from '../components/about/OurStory'

/**
 * Section order follows the reference About page (banner → intro split → second
 * split → grey band of statements and values → closing quote), extended with the
 * promise and first-address sections the brand story needs. Each section carries
 * one step of the story (see docs/about-page-content.md):
 * hero (recognition) → our story (understanding) → our belief (connection) →
 * purpose (connection) → the lives we design around (imagination) → our promise
 * (reassurance) → our first address (trust) → closing (action).
 */
export function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurBelief />
      <div className="bg-surface-alt">
        <OurPurpose />
        <OurPeople />
      </div>
      <OurPromise />
      <FirstAddress />
      <AboutCTA />
    </>
  )
}
