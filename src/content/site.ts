/**
 * Site-wide structure and content shared by every page: routes, section anchors,
 * navigation, social links and contact details. Footer copy: ./footer.ts.
 *
 * Values marked PLACEHOLDER must be confirmed by the business before launch.
 * Architecture (pages, links, routing): docs/architecture.md.
 */
export type Link = { label: string; href: string }

/** Every page of the site. Each one is its own HTML document (see vite.config.ts). */
export type PageId = 'home' | 'about'

const base = import.meta.env.BASE_URL

export const routes: Record<PageId, string> = {
  home: base,
  about: `${base}about/`,
}

/** Homepage section anchors, shared by navigation, CTAs and the section elements themselves. */
export const anchors = {
  top: 'top',
  story: 'about',
  people: 'people',
  belief: 'belief',
  promise: 'promise',
  moment: 'moment',
  firstAddress: 'first-address',
  /** The register-interest panel at the top of the footer. Present on every page. */
  contact: 'contact',
} as const

/** A homepage section, linked from any page. Same-page links scroll smoothly (useAnchorScroll). */
export const homeSection = (id: string) => `${routes.home}#${id}`

/** A section on the current page. */
export const onThisPage = (id: string) => `#${id}`

/** The one action the site converges on. Leads to the register form in the footer of whichever page you are on. */
export const registerInterest: Link = { label: 'Register your interest', href: onThisPage(anchors.contact) }

export type NavLink = Link & {
  /** Marks the item as the current page (aria-current="page"). */
  page?: PageId
}

export const mainNav: NavLink[] = [
  { label: 'About', href: routes.about, page: 'about' },
  { label: 'Who we build for', href: homeSection(anchors.people) },
  { label: 'Our promise', href: homeSection(anchors.promise) },
  { label: 'The homes', href: homeSection(anchors.firstAddress) },
]

/** The mobile menu has room for an explicit Home item. */
export const mobileNav: NavLink[] = [{ label: 'Home', href: routes.home, page: 'home' }, ...mainNav]

export type SocialId = 'facebook' | 'x' | 'youtube' | 'instagram' | 'linkedin' | 'whatsapp'
export type SocialLink = { id: SocialId; label: string; href: string }

// PLACEHOLDER: replace '#' with the real profile URLs, and remove any channel the brand does not use.
export const socials: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'x', label: 'X', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
]

export const followLabel = 'Follow us'

/** Contact details. Unconfirmed values are `null` and are not rendered (see ./footer.ts). */
export const contact = {
  cta: { label: 'Register interest', href: onThisPage(anchors.contact) },
  // PLACEHOLDER: WhatsApp link (https://wa.me/<number>).
  whatsapp: { label: 'Chat with us on WhatsApp', href: onThisPage(anchors.contact) },
  // PENDING: full office address. The brand story places Products Palace in Lagos; nothing more specific is confirmed.
  addresses: ['Lagos, Nigeria'],
  // PENDING: set once the mailbox is confirmed (proposed: hello@productspalace.com).
  email: null as string | null,
  // PENDING: set once the number is confirmed, written as it should be displayed (e.g. '+234 …').
  phone: null as string | null,
}
