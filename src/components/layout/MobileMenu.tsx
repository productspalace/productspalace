import { useEffect, useRef } from 'react'
import { mobileNav } from '../../content/site'
import { ariaCurrent } from '../../lib/page'
import { setScrollLocked } from '../../lib/smooth-scroll'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'

/** Full-width white panel (below 1200px): close button, logo, divided link list. */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  })

  useEffect(() => {
    if (!open) return
    setScrollLocked(true)
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onCloseRef.current()
    window.addEventListener('keydown', onKey)
    return () => {
      setScrollLocked(false)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
      className={`fixed inset-0 z-[60] overflow-y-auto bg-white xl:hidden ${
        open
          ? 'visible translate-x-0 [transition:translate_250ms_var(--ease-luxe),visibility_0s]'
          : 'invisible translate-x-full [transition:translate_250ms_var(--ease-luxe),visibility_0s_250ms]'
      }`}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-0 right-0 grid size-10 cursor-pointer place-items-center bg-stone-100 text-fg transition-colors hover:bg-accent"
      >
        <Icon name="close" size={20} />
      </button>

      <div className="px-7 pt-9 pb-12 md:px-10">
        <Logo className="text-[0.8125rem]" />
        <nav aria-label="Mobile" className="mt-10">
          <ul>
            {mobileNav.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  aria-current={ariaCurrent(item.page)}
                  onClick={onClose}
                  className="block py-3.5 text-sm font-medium text-fg transition-colors hover:text-accent-ink aria-[current=page]:text-accent-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
