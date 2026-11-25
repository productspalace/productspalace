/**
 * Footer content, shared by every page. The layout follows the Sujimoto Group footer
 * (see docs/footer-reference-audit.md); every word, link and detail is Products Palace's.
 *
 * Contact details and social profiles live in ./site.ts. Anything not yet confirmed
 * (a `null` contact detail, a '#' profile URL) is left out of the rendered footer.
 */
import { brand } from './brand'
import { anchors, contact, followLabel, homeSection, routes, socials, type Link } from './site'

/** A placeholder URL is never rendered as a link in the footer. */
const isConfirmed = (href: string) => href !== '' && href !== '#'

export const footer = {
  /** Two-panel band above the columns (reference: "Follow Us" | "Let's Talk"). */
  band: {
    follow: {
      title: followLabel,
      socials: socials.filter((s) => isConfirmed(s.href)),
    },
    /** Fills the follow panel until at least one social profile is confirmed in site.ts. */
    followFallback: {
      title: 'Our first address',
      cta: { label: 'Find your place', href: homeSection(anchors.firstAddress) } satisfies Link,
    },
    /** Target of every "Register your interest" link on the site (`#contact`). */
    register: {
      title: 'Let’s talk about home',
      placeholder: 'Your email address',
      button: 'Register interest',
      note: 'Be among the first to hear as the details of our first address are shared. Only what matters, and only when there is something worth saying.',
      success: 'Thank you. We’ll be in touch as the details are shared.',
    },
  },

  /** Under the logo. Official tagline, verbatim (the design uppercases it). */
  tagline: brand.tagline,

  links: {
    title: 'Useful links',
    items: [
      { label: 'Home', href: routes.home },
      { label: 'About us', href: routes.about },
      { label: 'Our promise', href: homeSection(anchors.promise) },
      // PENDING: add 'Privacy policy' once the page exists.
    ] satisfies Link[],
  },

  office: {
    title: 'Office',
    addresses: contact.addresses,
    email: contact.email,
    phone: contact.phone,
  },

  /** Takes the place of the reference's careers column. */
  invitation: {
    title: 'Your next chapter',
    text: 'You’ve worked hard for this life. Picture a home that gives you room to live it.',
    cta: { label: 'Who we build for', href: homeSection(anchors.people) } satisfies Link,
  },

  copyright: `Copyright © ${brand.name} ${new Date().getFullYear()}`,
}
