import { useRef, useState, type CSSProperties, type FormEvent } from 'react'
import { anchors, contact, footer, socials } from '../../content/home'
import { gsap, MOTION_OK, useGSAP } from '../../lib/gsap'
import { Icon } from '../ui/Icon'
import { Logo } from '../ui/Logo'
import { Highlight } from '../ui/SectionHeading'

function RegisterInterest() {
  const [sent, setSent] = useState(false)
  const { register } = footer

  // No backend yet: the form validates and acknowledges locally.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity()) setSent(true)
  }

  return (
    <div className="relative bg-sand-200">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_45%_115%,rgb(15_13_10/0.55),transparent_70%),linear-gradient(to_bottom,transparent_62%,var(--color-ink-950))]"
      />
      <div className="relative container-page flex flex-col gap-8 pt-14 pb-24 lg:flex-row lg:items-start lg:justify-between lg:pt-[4.5rem] lg:pb-28">
        <div className="max-w-[31rem]" data-reveal="up" style={{ '--reveal-delay': '400ms' } as CSSProperties}>
          <h2 className="font-display text-[2rem] leading-none font-light tracking-[-0.02em]">
            {register.title[0]}
            <Highlight>{register.title[1]}</Highlight>
          </h2>
          <p className="mt-4 text-body leading-8 text-ink-800">{register.text}</p>
        </div>

        {sent ? (
          <p role="status" className="font-display text-h4 lg:mt-3">
            {register.success}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full flex-col gap-4 sm:flex-row lg:mt-3 lg:w-auto">
            <label htmlFor="register-email" className="sr-only">
              Email address
            </label>
            <input
              id="register-email"
              type="email"
              required
              autoComplete="email"
              placeholder={register.placeholder}
              className="h-[3.125rem] w-full border border-line-strong bg-stone-50 px-4 text-fg placeholder:text-fg-muted focus-visible:outline-accent lg:w-[19.375rem]"
            />
            <button type="submit" className="btn btn-ink min-h-[3.125rem] w-full lg:w-[19.375rem]">
              {register.button}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      // Endless loop at ~100px/s, as on the reference.
      const distance = track.scrollWidth / 2
      gsap.to(track, { x: -distance, duration: distance / 100, ease: 'none', repeat: -1 })
    })
    return () => mm.revert()
  })

  const word = (
    <span className="text-outline pr-[0.35em] font-sans text-[clamp(4.5rem,13.5vw,12.5rem)] leading-[1.1] font-semibold tracking-[-0.01em] uppercase">
      {footer.marquee}
    </span>
  )

  return (
    <div aria-hidden="true" className="overflow-hidden py-6 lg:py-10">
      <div ref={trackRef} className="flex w-max whitespace-nowrap">
        {word}
        {word}
      </div>
    </div>
  )
}

const columnTitle = 'text-sm text-white/60'
const columnLink = 'text-sm font-medium text-white transition-colors hover:text-accent'

export function SiteFooter() {
  return (
    <footer id={anchors.contact} className="bg-ink-950 text-white">
      <div className="text-fg">
        <RegisterInterest />
      </div>

      <div className="container-page grid gap-12 pt-16 pb-6 md:grid-cols-2 lg:pt-20 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,1.35fr)_minmax(0,0.9fr)_minmax(0,0.95fr)] xl:gap-10">
        <div>
          <Logo tone="light" className="text-[1.125rem]" />
          <p className="mt-8 max-w-[19rem] text-lg leading-[1.4]">{footer.blurb}</p>
          <ul className="mt-6 flex gap-5 text-accent [--icon-cutout:var(--color-ink-950)]">
            {socials.map((s) => (
              <li key={s.id}>
                <a href={s.href} aria-label={s.label} className="transition-opacity hover:opacity-70">
                  <Icon name={s.id} size={19} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links">
          <p className={columnTitle}>{footer.quickLinks.title}</p>
          <ul className="mt-10 grid grid-flow-col grid-cols-2 grid-rows-4 gap-x-10 gap-y-6">
            {footer.quickLinks.links.map((l) => (
              <li key={l.label}>
                <a className={columnLink} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={footer.promises.title}>
          <p className={columnTitle}>{footer.promises.title}</p>
          <ul className="mt-9 grid gap-6">
            {footer.promises.links.map((l) => (
              <li key={l.label}>
                <a className={columnLink} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={columnTitle}>{footer.contactTitle}</p>
          <address className="mt-9 grid gap-4 text-sm font-medium not-italic">
            {contact.addresses.map((a) => (
              <p key={a} className="flex gap-2.5">
                <Icon name="pin" size={18} className="mt-0.5 flex-none text-accent" />
                {a}
              </p>
            ))}
            <a href={`mailto:${contact.email}`} className="flex gap-2.5 hover:text-accent">
              <Icon name="mail" size={18} className="flex-none text-accent" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="flex gap-2.5 hover:text-accent">
              <Icon name="phone" size={18} className="flex-none text-accent" />
              {contact.phone}
            </a>
            <p className="mt-3 text-white/60">
              {contact.hours.label} <span className="text-white">{contact.hours.value}</span>
            </p>
          </address>
        </div>
      </div>

      <Marquee />

      <div className="container-page flex flex-col gap-6 pt-4 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/60">{footer.copyright}</p>
        <ul className="flex gap-6 text-white/50 [--icon-cutout:var(--color-ink-950)]">
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} aria-label={s.label} className="transition-colors hover:text-accent">
                <Icon name={s.id} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
