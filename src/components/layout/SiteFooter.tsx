import { useEffect, useRef, useState, type FormEvent } from 'react'
import { footer } from '../../content/footer'
import { anchors, routes } from '../../content/site'
import { brand } from '../../content/brand'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'

/*
 * Layout reference: the Sujimoto Group footer (docs/footer-reference-audit.md).
 * A two-panel band (follow us | let's talk) sits above a dark block of four
 * columns and a copyright bar. Below 1024 px everything stacks.
 */

/* Band panels: 140 / 70 px padding on desktop (less below, where the register note
   sits, so the band keeps the reference's ~410 px height); 42 px when stacked. */
const panel = 'px-gutter py-[2.625rem] text-center lg:px-[4.375rem] lg:pt-[8.75rem] lg:pb-[5.5rem]'
const panelTitle = 'mt-5 font-display text-[1.875rem] leading-[1.1] font-normal'
/* Column titles and body: 14 px / 20 px. */
const label = 'font-sans text-sm leading-5 font-medium tracking-[1px] text-white/95 uppercase'
const columnTitle = `mb-7 ${label}`
const columnText = 'text-sm leading-5 text-white/95'
const columnLink = 'text-sm leading-5 text-white/80 transition-colors duration-300 hover:text-accent'

function FollowPanel() {
  const { follow, followFallback } = footer.band

  return (
    <div className={`bg-ink-900 ${panel}`}>
      {follow.socials.length > 0 ? (
        <>
          <h2 className={panelTitle}>{follow.title}</h2>
          <ul className="mt-2.5 flex flex-wrap justify-center gap-2 [--icon-cutout:var(--color-ink-900)]">
            {follow.socials.map((s) => (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center text-white/95 transition-colors duration-300 hover:text-accent"
                >
                  <Icon name={s.id} size={21} />
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2 className={panelTitle}>{followFallback.title}</h2>
          <a href={followFallback.cta.href} className="btn-pill mt-[1.875rem]">
            {followFallback.cta.label}
          </a>
        </>
      )}
    </div>
  )
}

/** Register interest. No backend yet: the form validates and acknowledges locally. */
function RegisterPanel() {
  const { register } = footer.band
  const [sent, setSent] = useState(false)
  const statusRef = useRef<HTMLParagraphElement>(null)

  // The form unmounts on success, so move focus to the confirmation.
  useEffect(() => {
    if (sent) statusRef.current?.focus()
  }, [sent])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) setSent(true)
  }

  return (
    <section id={anchors.contact} aria-labelledby="register-title" className={`bg-ink-800 ${panel}`}>
      <h2 id="register-title" className={panelTitle}>
        {register.title}
      </h2>

      {!sent && (
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-[1.875rem] flex max-w-[26rem] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:flex-col xl:flex-row"
        >
          <label htmlFor="register-email" className="sr-only">
            Email address
          </label>
          <input
            id="register-email"
            type="email"
            required
            autoComplete="email"
            placeholder={register.placeholder}
            className="h-[2.375rem] w-full rounded-full border border-white/40 bg-transparent px-5 text-sm text-white transition-colors duration-300 placeholder:text-white/60 hover:border-white/70 sm:w-[16.5rem]"
          />
          <button
            type="submit"
            className="btn-pill flex-none [--pill-color:var(--color-accent)] [--pill-hover-fg:var(--color-ink-950)]"
          >
            {register.button}
          </button>
        </form>
      )}
      <p
        ref={statusRef}
        role="status"
        tabIndex={-1}
        className={sent ? 'mt-[1.875rem] text-sm leading-6 text-white/95 outline-none' : 'sr-only'}
      >
        {sent ? register.success : ''}
      </p>

      <p className="mx-auto mt-5 max-w-[26rem] text-xs leading-5 text-white/60">{register.note}</p>
    </section>
  )
}

export function SiteFooter() {
  const { links, office, invitation } = footer

  return (
    <footer className="text-white">
      <div className="grid lg:grid-cols-2">
        <FollowPanel />
        <RegisterPanel />
      </div>

      <div className="bg-ink-950">
        <div className="container-page py-[2.625rem] lg:py-[4.375rem]">
          <div className="grid gap-7 lg:min-h-[9.375rem] lg:grid-cols-[minmax(max-content,19fr)_minmax(max-content,10fr)_minmax(max-content,23fr)_minmax(0,48fr)] lg:gap-x-6">
            <div>
              <a href={routes.home} aria-label={`${brand.name} home`} className="inline-block lg:mt-11">
                <Logo tone="light" className="text-[1rem]" />
              </a>
              <p className={`mt-6 lg:mt-11 ${label}`}>{footer.tagline}</p>
            </div>

            {/* Stacked layout: a hairline separates the brand from the link groups. */}
            <nav
              aria-labelledby="footer-links-title"
              className="max-lg:mt-2 max-lg:border-t max-lg:border-white/50 max-lg:pt-7 max-lg:pb-3.5"
            >
              <h2 id="footer-links-title" className={columnTitle}>
                {links.title}
              </h2>
              <ul className="grid gap-3.5 text-sm leading-5">
                {links.items.map((l) => (
                  <li key={l.label}>
                    <a className={columnLink} href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="max-lg:pb-3.5">
              <h2 className={columnTitle}>{office.title}</h2>
              <address className="grid gap-3.5 text-sm leading-5 not-italic">
                {office.addresses.map((a) => (
                  <p key={a} className={`flex gap-2 ${columnText}`}>
                    <Icon name="pin" size={15} className="mt-[0.15rem] flex-none" />
                    {a}
                  </p>
                ))}
                {office.phone && (
                  <a href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} className={`flex gap-2 ${columnLink}`}>
                    <Icon name="phone" size={15} className="mt-[0.15rem] flex-none" />
                    {office.phone}
                  </a>
                )}
                {office.email && (
                  <a href={`mailto:${office.email}`} className={`flex gap-2 ${columnLink}`}>
                    <Icon name="mail" size={15} className="mt-[0.15rem] flex-none" />
                    {office.email}
                  </a>
                )}
              </address>
            </div>

            <div>
              <h2 className={columnTitle}>{invitation.title}</h2>
              <p className={columnText}>{invitation.text}</p>
              <a href={invitation.cta.href} className="btn-pill mt-3.5">
                {invitation.cta.label}
              </a>
            </div>
          </div>

          <div className="mt-[4.375rem] border-t border-white/50 pt-7">
            <p className="text-sm leading-5 text-white/90">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
