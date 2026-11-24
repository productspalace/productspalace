import { AboutSection } from '../components/home/AboutSection'
import { ExpertiseSection } from '../components/home/ExpertiseSection'
import { Hero } from '../components/home/Hero'
import { NewsSection } from '../components/home/NewsSection'
import { ProcessSection } from '../components/home/ProcessSection'
import { ProjectShowcase } from '../components/home/ProjectShowcase'
import { TestimonialsSection } from '../components/home/TestimonialsSection'

/**
 * Section order follows the reference layout; each slot carries one step of the
 * Products Palace story (see docs/homepage-content.md):
 * hero (recognition) → our story (connection) → the lives we design around
 * (imagination) → luxury, redefined (belief) → our promise (reassurance) →
 * the moment we build for (imagination) → our first address (trust) → footer (action).
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectShowcase />
      <ExpertiseSection />
      <ProcessSection />
      <TestimonialsSection />
      <NewsSection />
    </>
  )
}
