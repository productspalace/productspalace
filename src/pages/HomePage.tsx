import { AboutSection } from '../components/home/AboutSection'
import { ExpertiseSection } from '../components/home/ExpertiseSection'
import { Hero } from '../components/home/Hero'
import { NewsSection } from '../components/home/NewsSection'
import { ProcessSection } from '../components/home/ProcessSection'
import { ProjectShowcase } from '../components/home/ProjectShowcase'
import { TestimonialsSection } from '../components/home/TestimonialsSection'

/** Section order follows the reference homepage. */
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
