import { useEffect, useState, type ReactNode } from 'react'
import { CustomCursor } from './components/layout/CustomCursor'
import { Loader } from './components/layout/Loader'
import { ScrollTopButton } from './components/layout/ScrollTopButton'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { useAnchorScroll } from './hooks/useAnchorScroll'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { startSmoothScroll } from './lib/smooth-scroll'

/**
 * Shell shared by every page: loader, header, footer and the floating utilities.
 * Each page is its own HTML document (see vite.config.ts); main.tsx passes in the
 * page that document renders.
 */
const App = ({ children }: { children: ReactNode }) => {
  const [entered, setEntered] = useState(false)

  useEffect(() => startSmoothScroll(), [])
  useAnchorScroll(entered)
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
      <main id="main" tabIndex={-1} className="overflow-x-clip outline-none">
        {children}
      </main>
      <SiteFooter />
      <ScrollTopButton />
      <CustomCursor />
    </>
  )
}

export default App
