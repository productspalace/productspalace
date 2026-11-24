import { useRef, useState } from 'react'
import { contact, mainNav } from '../../content/home'
import { useScrolledPast } from '../../hooks/useScrollPosition'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { MobileMenu } from './MobileMenu'

type Tone = 'light' | 'dark'

function DesktopNav({ tone, label }: { tone: Tone; label: string }) {
  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-11">
        {mainNav.map((item, i) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={i === 0 ? 'page' : undefined}
              className={`text-sm font-medium transition-colors duration-200 hover:text-accent aria-[current=page]:underline aria-[current=page]:underline-offset-4 ${
                tone === 'light' ? 'text-white' : 'text-fg'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function HeaderActions({ tone }: { tone: Tone }) {
  return (
    <div className="flex items-center gap-7 justify-self-end">
      <a
        href={contact.whatsapp.href}
        aria-label={contact.whatsapp.label}
        className={`transition-colors hover:text-accent ${tone === 'light' ? 'text-white' : 'text-fg'}`}
      >
        <Icon name="whatsapp" size={30} />
      </a>
      <a href={contact.cta.href} className="btn btn-primary min-h-10 px-6 text-[0.8125rem] tracking-[0.16em]">
        {contact.cta.label}
      </a>
    </div>
  )
}

/**
 * Desktop (≥1200px): a transparent header over the hero (nav · logo · actions)
 * plus a white condensed header that slides in after 30px of scroll.
 * Below 1200px: a fixed white bar with logo and burger, opening MobileMenu.
 */
export function SiteHeader() {
  const scrolled = useScrolledPast(30)
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 hidden xl:block">
        <div className="container-page grid h-[6.5rem] grid-cols-[1fr_auto_1fr] items-center gap-8">
          <DesktopNav tone="light" label="Main" />
          <a href="#top" aria-label="Products Palace, back to top">
            <Logo tone="light" className="text-[1.125rem]" />
          </a>
          <HeaderActions tone="light" />
        </div>
      </header>

      <div
        inert={!scrolled}
        className={`fixed inset-x-0 top-0 z-50 hidden bg-white shadow-[0_3px_18px_rgb(15_13_10/0.08)] transition-[translate,visibility] duration-600 ease-header xl:block ${
          scrolled ? 'visible translate-y-0' : 'invisible -translate-y-[120%]'
        }`}
      >
        <div className="container-page grid h-header-sticky grid-cols-[1fr_auto_1fr] items-center gap-8">
          <a href="#top" aria-label="Products Palace, back to top" className="justify-self-start">
            <Logo className="text-[0.9375rem]" />
          </a>
          <DesktopNav tone="dark" label="Main (condensed)" />
          <HeaderActions tone="dark" />
        </div>
      </div>

      <header className="fixed inset-x-0 top-0 z-50 h-header-mobile bg-white xl:hidden">
        <div className="flex h-full items-center justify-between px-4 md:px-6">
          <a href="#top" aria-label="Products Palace, back to top">
            <Logo className="text-[0.875rem]" />
          </a>
          <button
            ref={burgerRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
            className="flex size-11 cursor-pointer flex-col items-end justify-center gap-[7px]"
          >
            <span className="h-0.5 w-7 bg-ink-900" />
            <span className="h-0.5 w-9 bg-ink-900" />
            <span className="h-0.5 w-6 bg-ink-900" />
          </button>
        </div>
      </header>
      <div aria-hidden="true" className="h-header-mobile xl:hidden" />

      <MobileMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(false)
          burgerRef.current?.focus()
        }}
      />
    </>
  )
}
