/**
 * About page copy and data. Components render whatever is here, so copy can be
 * edited without touching layout.
 *
 * Source of truth: "Products Palace Brand Story". Voice rules: docs/brand-voice.md.
 * Section-by-section intent and unconfirmed items: docs/about-page-content.md.
 *
 * The homepage shows what life in a Products Palace home could feel like; this page
 * explains why the brand wants to make that life possible. Do not repeat homepage
 * copy here word for word.
 *
 * The pilot development is PLANNED: describe it with "will" / "planned", never as
 * built, open or occupied. The purpose and vision statements are PROPOSED wording
 * derived from the brand story, not approved corporate statements.
 */
import { aboutImages, aboutPeopleImages, type ImageAsset } from './assets'
import { brand } from './brand'
import { anchors, homeSection, onThisPage, registerInterest, type Link } from './site'

/** Section anchors on the About page. */
export const aboutAnchors = {
  top: 'top',
  story: 'our-story',
  belief: 'our-belief',
  purpose: 'our-purpose',
  lives: 'the-lives',
  promise: 'our-promise',
  firstAddress: 'first-address',
  closing: 'picture-it',
} as const

/** Mirrors the static tags in about/index.html (crawlers read those, not this). */
export const aboutMeta = {
  title: `About ${brand.name} | ${brand.tagline}`,
  description:
    'Why Products Palace exists: homes planned around peace, privacy, safety and unhurried time with the people you love. Our story, our idea of luxury, the lives we design around and our first address.',
  ogTitle: 'About Products Palace | Home should give something back.',
  ogDescription:
    'We believe a home should give back what a demanding life takes: peace, privacy and time with the people you love. Luxury, for a purpose.',
}

/* -------------------------------------------------------------------------- */
/* 1. Hero: recognition                                                        */
/* -------------------------------------------------------------------------- */

export const aboutHero = {
  kicker: `About ${brand.name}`,
  title: 'Home should give something back.',
  text: 'We build for the people who carry Lagos’s ambition, and for one belief: the home you work so hard for should return what the day takes from you.',
  image: aboutImages.hero,
}

/* -------------------------------------------------------------------------- */
/* 2. Our story: understanding                                                 */
/* -------------------------------------------------------------------------- */

export const ourStory = {
  kicker: 'Our story',
  title: ['It Began With ', 'One Honest Question'] as const,
  paragraphs: [
    'A Lagos day asks for everything: the early start, the long drive, the meetings that run late, the noise that follows you all the way to the gate. We know that day well, because we live it too. And we noticed how often home became one more thing to manage, instead of the place where the day finally lets go of you.',
    'So we began with a question: what should a home give back to the person who works this hard for it? Not more marble, or a chandelier to photograph. Peace. Safety. Privacy. Unhurried time with the people you love, and a quiet place to think about what comes next. Products Palace exists to answer that question, and everything we plan begins with it.',
  ],
  cta: { label: 'Who we build for', href: onThisPage(aboutAnchors.lives) } satisfies Link,
  image: aboutImages.story,
}

/* -------------------------------------------------------------------------- */
/* 3. Our belief: connection                                                   */
/* -------------------------------------------------------------------------- */

export const ourBelief = {
  kicker: 'Our belief',
  title: ['What We Mean by ', 'Luxury'] as const,
  paragraphs: [
    'The word has been worn thin. Too often it is used to say, without quite saying it, that one person is above another. That is not the luxury we believe in.',
    'To us, luxury is whatever makes a good life possible. The freedom to rest without one ear on the gate. The time to be present at dinner instead of in traffic. The privacy to grow, as a person, a couple or a family. The space to think clearly. And, after years of hard work, the chance to enjoy what that work has made possible.',
    'Exclusivity means something similar. A gate is not there to keep the world beneath you. It is there so children grow up among good influences, and so home can be a place of rest rather than a stage. Exclusive, for a reason.',
    'So we don’t treat luxury as the destination. It is the foundation: steady enough that you can stop guarding your peace and start living from it.',
  ],
  image: aboutImages.belief,
}

/* -------------------------------------------------------------------------- */
/* 4. Our purpose: connection (PROPOSED statements, see the docs)              */
/* -------------------------------------------------------------------------- */

export const ourPurpose = {
  /** Visually hidden section heading; the two cards carry the visible titles. */
  title: 'Our purpose and vision',
  statements: [
    {
      title: 'Our Purpose',
      text: 'To create homes that give back what a demanding life takes: peace, safety, privacy and unhurried time with the people you love.',
    },
    {
      title: 'Our Vision',
      text: 'Communities where ambition and a good home life support each other, and every season of life has room to grow.',
    },
  ],
}

/* -------------------------------------------------------------------------- */
/* 5. The lives we design around: imagination                                 */
/* -------------------------------------------------------------------------- */

export type Household = {
  person: string
  /** The season of life, shown as a small label. */
  season: string
  text: string
  /** The planned home that suits this household, from the brand story. Omitted when the story ties none. */
  home?: string
  image: ImageAsset
}

export const theLives = {
  title: 'The Lives We Design Around',
  intro: 'Every home we plan begins with a person and a season of life. These are the people we picture when we sit down to draw.',
  homeLabel: 'Planned for them',
  households: [
    {
      person: 'The one who is building',
      season: 'Focused professionals',
      text: 'You need a home that protects your focus. A quiet morning at the desk before the city wakes. An evening nobody interrupts, so the business plan, the exam or the promotion finally gets your full attention. Close enough to the city that the hours count, and calm enough to rest when the work is done.',
      image: aboutPeopleImages[0],
    },
    {
      person: 'The newlyweds',
      season: 'A new marriage',
      text: 'A new marriage needs room to grow without an audience. Your own front door, your own routines, and evenings that belong to the two of you: cooking together, talking late, learning how to become one household. Nobody drops in unannounced, and nobody’s opinion comes through the wall.',
      home: 'Two-bedroom maisonette',
      image: aboutPeopleImages[1],
    },
    {
      person: 'The growing family',
      season: 'Young children',
      text: 'Children need space to play, and parents need peace of mind while they do. A play area within sight of home, neighbours who share your values, and a room each child can make their own. The kind of place where Saturday traditions begin, and childhood happens close to the front door.',
      home: 'Three-bedroom maisonette',
      image: aboutPeopleImages[2],
    },
    {
      person: 'The family that has arrived',
      season: 'Generations together',
      text: 'This is the season of gathering. Room for your parents at Christmas, for the children home from school, for the friends who stay late. Trusted help close at hand, space for every guest’s car, and a home that feels like the reward for years of work, and the beginning of a family legacy.',
      home: 'Four-bedroom maisonette',
      image: aboutPeopleImages[3],
    },
  ] satisfies Household[],
}

/* -------------------------------------------------------------------------- */
/* 6. Our promise: reassurance                                                 */
/* -------------------------------------------------------------------------- */

export const ourPromise = {
  kicker: 'Our promise',
  title: ['The Conditions for a ', 'Good Life'] as const,
  intro: 'We don’t think of these as features. They are what we believe a good life needs, and five commitments we hold ourselves to in everything we plan.',
  /** Written as what we design for, never as guarantees. Same order as `promises` in brand.ts. */
  principles: [
    {
      principle: 'Safety',
      title: 'Rest without one ear on the gate.',
      text: 'A secure, managed community, planned so you can stop checking the locks twice and children can simply be children.',
    },
    {
      principle: 'Quietness',
      title: 'Stillness, by design.',
      text: 'Homes planned for calm, so rest comes easily, conversations are unhurried and focus doesn’t have to be fought for.',
    },
    {
      principle: 'Community',
      title: 'Neighbours who respect your privacy.',
      text: 'A small community of professionals and families who value courtesy and decency, and who may, over a Saturday game, become friends.',
    },
    {
      principle: 'Time',
      title: 'More evenings, less traffic.',
      text: 'Locations chosen with the commute in mind, because every hour saved on the road is an hour returned to the people you love.',
    },
    {
      principle: 'Lasting quality',
      title: 'Built to be lived in.',
      text: 'Homes built with care and integrity, intended to serve you well for years after the keys are handed over.',
    },
  ],
}

/* -------------------------------------------------------------------------- */
/* 7. Our first address: trust                                                 */
/* -------------------------------------------------------------------------- */

export const firstAddress = {
  kicker: 'Our first address',
  title: ['Every Promise Needs a ', 'First Proof'] as const,
  status: 'Planned pilot development',
  paragraphs: [
    'Our pilot development is where everything on this page is meant to become something you can walk through and live in. It will bring every household in this story together behind one gate.',
    'It is still being planned. We’ll share the location, the homes in full and the timeline once they are confirmed. For now, this is what we are planning, and why.',
  ],
  imageLabel: 'Planned',
  imageCaption: 'Illustrative image, not the development',
  image: aboutImages.firstAddress,
  /** Each planned feature, paired with the life it is meant to support. All from the brand story. */
  features: [
    { feature: 'Two, three and four-bedroom maisonettes', purpose: 'A home for each season of life, from a first home together to a house full of generations.' },
    { feature: 'Boys’ quarters with every home', purpose: 'Room for the help you rely on, without giving up your privacy.' },
    { feature: 'A padel court', purpose: 'The weekend game that turns neighbours into friends.' },
    { feature: 'A children’s play area', purpose: 'Somewhere to run, and to wobble on a first bicycle, within sight of home.' },
    { feature: 'Generous parking', purpose: 'Easy arrivals on ordinary evenings, and room for every guest when the family comes home.' },
    { feature: 'One protected, managed community', purpose: 'A gate that closes gently behind you, and quiet streets on the other side of it.' },
  ],
  link: { label: 'Find your place', href: homeSection(anchors.firstAddress) } satisfies Link,
}

/* -------------------------------------------------------------------------- */
/* 8. Closing: action                                                          */
/* -------------------------------------------------------------------------- */

export const aboutClosing = {
  title: ['What Will Your Home ', 'Give Back', '?'] as const,
  /** The invitation that closes the brand story. */
  quote: 'For now, we simply invite you to picture it. A gate that closes gently behind you. A street that knows your name. A home that gives you back to yourself, and to the people you love.',
  signature: brand.name,
  tagline: brand.tagline,
  cta: registerInterest,
}
