import { useEffect, useState } from 'react'
import { CustomCursor } from './components/layout/CustomCursor'
import { Loader } from './components/layout/Loader'
import { ScrollTopButton } from './components/layout/ScrollTopButton'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { useAnchorScroll } from './hooks/useAnchorScroll'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { startSmoothScroll } from './lib/smooth-scroll'
import { HomePage } from './pages/HomePage'

const App = () => {
  const [entered, setEntered] = useState(false)

  useEffect(() => startSmoothScroll(), [])
  useAnchorScroll()
  // Entrance animations start as the loader fades, not underneath it.
  useRevealOnScroll(entered)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[110] bg-white px-4 py-3 text-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Loader onExit={() => setEntered(true)} />
      <SiteHeader />
      <main id="main" className="overflow-x-clip">
        <HomePage />
      </main>
      <SiteFooter />
      <ScrollTopButton />
      <CustomCursor />
    </>
  )
}

export default App
