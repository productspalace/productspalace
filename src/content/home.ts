/**
 * Homepage copy and data. Components render whatever is here, so copy can be
 * edited without touching layout.
 *
 * Source of truth: "Products Palace Brand Story". Voice rules: docs/brand-voice.md.
 * Section-by-section intent: docs/homepage-content.md.
 *
 * The pilot development is PLANNED. Describe its homes and amenities as planned
 * ("will", "planned"), never as finished or operational. Values marked
 * PLACEHOLDER must be confirmed by the business before launch.
 */
import { brand, promises } from './brand'
import { firstAddressImages, peopleImages, promiseImages, type ImageAsset } from './assets'

export type Link = { label: string; href: string }

/** Section anchors, shared by navigation, CTAs and the section elements themselves. */
export const anchors = {
  top: 'top',
  story: 'about',
  people: 'people',
  belief: 'belief',
  promise: 'promise',
  moment: 'moment',
  firstAddress: 'first-address',
  contact: 'contact',
} as const

const to = (id: string) => `#${id}`

/** One call to action, used wherever the visitor is invited to act. Leads to the form in the footer. */
const registerInterest: Link = { label: 'Register your interest', href: to(anchors.contact) }

export const mainNav: Link[] = [
  { label: 'Our story', href: to(anchors.story) },
  { label: 'Who we build for', href: to(anchors.people) },
  { label: 'Our promise', href: to(anchors.promise) },
  { label: 'The homes', href: to(anchors.firstAddress) },
]

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

export const contact = {
  cta: { label: 'Register interest', href: to(anchors.contact) },
  // PLACEHOLDER: WhatsApp link (https://wa.me/<number>).
  whatsapp: { label: 'Chat with us on WhatsApp', href: to(anchors.contact) },
  // PLACEHOLDER: office address. The brand story places Products Palace in Lagos; nothing more specific is confirmed.
  addresses: ['Lagos, Nigeria'],
  // PLACEHOLDER: confirm the mailbox exists.
  email: 'hello@productspalace.com',
  // PLACEHOLDER: real phone number.
  phone: '+234 000 000 0000',
  // PLACEHOLDER: confirm office hours.
  hours: { label: 'Office hours:', value: 'Mon – Fri, 9am – 5pm' },
}

/* -------------------------------------------------------------------------- */
/* 1. Hero: recognition                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: brand.tagline,
  title: 'A home for the life you’re working towards.',
  text: 'Homes planned for peace at the end of the day, privacy to grow, and unhurried time with the people you love.',
  cta: registerInterest,
  secondary: { label: 'Who we build for', href: to(anchors.people) },
  /** Facts about the pilot development, all from the brand story. Desktop bar at the foot of the hero. */
  highlights: {
    caption: ['Planned for', 'our first address'] as const,
    items: [
      { value: '2 · 3 · 4', label: 'Bedroom maisonettes' },
      { value: 'Boys’ quarters', label: 'With every home' },
      { value: 'Padel court', label: 'And a play area' },
      { value: 'One gate', label: 'A managed community' },
    ],
  },
  followLabel: 'Follow us',
}

/* -------------------------------------------------------------------------- */
/* 2. Our story: connection                                                    */
/* -------------------------------------------------------------------------- */

export const about = {
  kicker: 'Our story',
  title: ['A Home That ', 'Owes You', ' Something.'] as const,
  paragraphs: [
    'Lagos rewards ambition, and asks a great deal of the people who carry it. The professional who leaves before sunrise and returns after dark. The young couple protecting a new marriage from a city that never stops talking. The parents who wonder what their children are absorbing beyond the gate. We know these people well, because we are these people.',
    'So we began with one honest question: what does a home owe the person who works this hard? Not more marble, or a bigger chandelier to photograph. It owes you peace, safety and unhurried time with the people you love. Everything we build is our answer.',
  ],
  cta: { label: 'Who we build for', href: to(anchors.people) },
}

/* -------------------------------------------------------------------------- */
/* 3. The lives we design around: imagination                                  */
/* -------------------------------------------------------------------------- */

export type LifeStory = {
  /** The household, shown on the image. */
  person: string
  /** When the scene happens. */
  moment: string
  title: string
  story: string
  home: string
  gives: string
  image: ImageAsset
}

export const people = {
  kicker: ['Our people', 'Seasons of life'] as const,
  title: ['Every Home Begins ', 'With a Person.'] as const,
  link: { label: 'Find your place', href: to(anchors.firstAddress) },
  imageCaption: brand.tagline,
  infoLabel: 'Picture it',
  detailLabels: { home: 'The home', gives: 'What it makes possible' },
  footer: 'Designed around real lives',
  cta: registerInterest,
  labels: {
    region: 'The lives we design around',
    show: 'Show the story of',
    previous: 'Previous story',
    next: 'Next story',
  },
  /** Autoplay interval observed on the reference. */
  interval: 6000,
  stories: [
    {
      person: 'The one who is building',
      moment: 'Sunday afternoon',
      title: 'Room to hear yourself think.',
      story: 'Half the city is at an owambe. You’re at the desk by the window, tea going cold. Nobody is knocking, no generator is roaring next door, and for the first time all week you can think clearly about the dream you haven’t told anyone yet.',
      home: 'Two, three or four bedrooms',
      gives: 'Focus, rest and calm',
      image: peopleImages[0],
    },
    {
      person: 'The newlyweds',
      moment: 'Friday night',
      title: 'Just the two of you.',
      story: 'Neither of you wants to go out. The drive home was short, and dinner is something you’re cooking together, badly and happily. Nobody drops in unannounced. Years from now, you’ll call these the good old days.',
      home: 'Two-bedroom maisonette',
      gives: 'Privacy to grow together',
      image: peopleImages[1],
    },
    {
      person: 'The growing family',
      moment: 'Saturday morning',
      title: 'The childhood you promised them.',
      story: 'Your son wobbles past on a bicycle a little too big for him, and you don’t worry: you know every child in the play area and every parent watching from its edge. Upstairs, your daughter has covered her own bedroom door with drawings.',
      home: 'Three-bedroom maisonette',
      gives: 'Room for each child to grow',
      image: peopleImages[2],
    },
    {
      person: 'The family that has arrived',
      moment: 'Christmas Eve',
      title: 'Room for everyone you love.',
      story: 'Your parents are settled in the guest room and the children are home from school. Every car has found a space. In the kitchen, someone is laughing too loudly over the jollof, and you think: this is what all those years of work were for.',
      home: 'Four-bedroom maisonette',
      gives: 'Generations under one roof',
      image: peopleImages[3],
    },
  ] satisfies LifeStory[],
}

/* -------------------------------------------------------------------------- */
/* 4. Luxury, redefined: belief                                                */
/* -------------------------------------------------------------------------- */

export const belief = {
  title: 'Luxury, Redefined.',
  subtitle: 'Not the destination. The firm ground you stand on while you build what truly matters.',
  pillars: [
    { title: 'Security', text: 'The kind that lets a mother sleep through the night.' },
    { title: 'Stillness', text: 'Room to finish the brief at home without fighting for silence.' },
    { title: 'Time', text: 'Minutes won back from traffic and spent at the dinner table instead.' },
    { title: 'Privacy', text: 'A protected community, so home is a place to rest, not a stage to perform on.' },
  ],
  filmLabel: 'Play the Products Palace brand film',
  statement: {
    meta: 'On exclusivity',
    text: 'We don’t close the gate to feel above the world outside it. We close it so parents can choose the influences around their children, and home can be a place of rest.',
    signature: [brand.exclusivity, brand.tagline] as const,
  },
}

/* -------------------------------------------------------------------------- */
/* 5. Our promise: reassurance                                                 */
/* -------------------------------------------------------------------------- */

export const promise = {
  kicker: 'Our promise',
  title: 'What You Can Count On',
  items: promises.map((p, i) => ({ ...p, image: promiseImages[i] })),
  cta: {
    lead: 'Not features, but the conditions for a good life.',
    label: 'See where they begin',
    href: to(anchors.firstAddress),
  },
}

/* -------------------------------------------------------------------------- */
/* 6. The moment we build for: imagination                                     */
/* -------------------------------------------------------------------------- */

export const moment = {
  kicker: 'The moment we build for',
  title: 'A Quarter Past Seven, on a Weekday Evening',
  navLabel: 'Moments',
  beats: [
    { time: '7:15 pm', label: 'The gate', text: 'The traffic is behind you now. The gate opens, and the guard greets you by name.' },
    { time: '7:16 pm', label: 'The threshold', text: 'Somewhere between the car door and the front door, the day lets go of you.' },
    { time: '7:18 pm', label: 'The quiet', text: 'Inside, the house is quiet in the way you hoped it would be. Upstairs, a child is reading aloud to no one in particular.' },
    { time: '7:19 pm', label: 'Home', text: 'Someone has left a light on for you. You set your bag down, and notice you’ve finally stopped carrying the day in your shoulders.' },
  ],
  closing: 'That moment is the reason Products Palace exists.',
}

/* -------------------------------------------------------------------------- */
/* 7. Our first address: trust                                                 */
/* -------------------------------------------------------------------------- */

export const firstAddress = {
  kicker: 'Our first address',
  title: 'Where the Story Begins',
  intro: 'Every promise needs a first proof. Our pilot development will bring every household in this story together behind one gate. We’ll share the full details of the homes in time. For now, picture it.',
  cta: registerInterest,
  status: 'Planned',
  features: [
    {
      category: 'The homes',
      title: 'A maisonette for every season of life',
      text: 'Two, three and four-bedroom maisonettes, each with its own boys’ quarters, so the help you rely on is close at hand and your privacy stays your own.',
      image: firstAddressImages[0],
    },
    {
      category: 'Community',
      title: 'Weekends that turn neighbours into friends',
      text: 'A padel court for the Saturday game, and a play area where children can run within sight of home.',
      image: firstAddressImages[1],
    },
    {
      category: 'Arriving',
      title: 'Room for every car, and every guest',
      text: 'Generous parking, so arriving home is never the hardest part of the day, even when the whole family comes for Christmas.',
      image: firstAddressImages[2],
    },
  ],
}

/* -------------------------------------------------------------------------- */
/* Footer: action                                                              */
/* -------------------------------------------------------------------------- */

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
      { label: 'Home', href: to(anchors.top) },
      { label: 'Our story', href: to(anchors.story) },
      { label: 'Who we build for', href: to(anchors.people) },
      { label: 'What we believe', href: to(anchors.belief) },
      { label: 'Our promise', href: to(anchors.promise) },
      { label: 'The homes', href: to(anchors.firstAddress) },
      { label: 'Register interest', href: to(anchors.contact) },
      // PLACEHOLDER: link to the privacy policy once it exists.
      { label: 'Privacy policy', href: to(anchors.top) },
    ] satisfies Link[],
  },
  promises: {
    title: 'What you can count on',
    links: promises.map((p) => ({ label: p.title, href: to(anchors.promise) })) satisfies Link[],
  },
  contactTitle: 'Let’s talk about home',
  marquee: brand.tagline,
  copyright: `Copyright © ${brand.name} ${new Date().getFullYear()}`,
}
