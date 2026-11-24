/**
 * Site-wide structure and content shared by every page: routes, section anchors,
 * navigation, social links, contact details and the footer.
 *
 * Values marked PLACEHOLDER must be confirmed by the business before launch.
 * Architecture (pages, links, routing): docs/architecture.md.
 */
import { brand, promises } from './brand'

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
  /** The footer (register interest + contact). Present on every page. */
  contact: 'contact',
} as const

/** A homepage section, linked from any page. Same-page links scroll smoothly (useAnchorScroll). */
export const homeSection = (id: string) => `${routes.home}#${id}`

/** A section on the current page. */
export const onThisPage = (id: string) => `#${id}`

/** The one action the site converges on. Leads to the form in the footer of whichever page you are on. */
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

export const contact = {
  cta: { label: 'Register interest', href: onThisPage(anchors.contact) },
  // PLACEHOLDER: WhatsApp link (https://wa.me/<number>).
  whatsapp: { label: 'Chat with us on WhatsApp', href: onThisPage(anchors.contact) },
  // PLACEHOLDER: office address. The brand story places Products Palace in Lagos; nothing more specific is confirmed.
  addresses: ['Lagos, Nigeria'],
  // PLACEHOLDER: confirm the mailbox exists.
  email: 'hello@productspalace.com',
  // PLACEHOLDER: real phone number.
  phone: '+234 000 000 0000',
  // PLACEHOLDER: confirm office hours.
  hours: { label: 'Office hours:', value: 'Mon – Fri, 9am – 5pm' },
}

export const footer = {
  register: {
    title: ['Register Your ', 'Interest'] as const,
    text: 'Be among the first to hear as the details of our first address are shared. Only what matters, and only when there is something worth saying.',
    placeholder: 'Your email address',
    button: 'Register interest',
    success: 'Thank you. We’ll be in touch as the details are shared.',
  },
  blurb: brand.closing,
  quickLinks: {
    title: 'Explore',
    links: [
      { label: 'Home', href: routes.home },
      { label: 'About us', href: routes.about },
      { label: 'Who we build for', href: homeSection(anchors.people) },
      { label: 'What we believe', href: homeSection(anchors.belief) },
      { label: 'Our promise', href: homeSection(anchors.promise) },
      { label: 'The homes', href: homeSection(anchors.firstAddress) },
      { label: 'Register interest', href: onThisPage(anchors.contact) },
      // PLACEHOLDER: link to the privacy policy once it exists.
      { label: 'Privacy policy', href: onThisPage(anchors.top) },
    ] satisfies Link[],
  },
  promises: {
    title: 'What you can count on',
    links: promises.map((p) => ({ label: p.title, href: homeSection(anchors.promise) })) satisfies Link[],
  },
  contactTitle: 'Let’s talk about home',
  marquee: brand.tagline,
  copyright: `Copyright © ${brand.name} ${new Date().getFullYear()}`,
}
