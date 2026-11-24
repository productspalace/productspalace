/**
 * Homepage copy and data. Components render whatever is here, so copy can be
 * edited without touching layout. Values marked PLACEHOLDER are stand-ins that
 * must be confirmed by the business before launch.
 */
import { newsImages, processImages, projectImages, type ImageAsset } from './assets'

export type Link = { label: string; href: string }

export const brand = {
  name: 'Products Palace',
  tagline: 'Real Estate',
}

export const mainNav: Link[] = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Member Companies', href: '#companies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Media', href: '#news' },
]

export type SocialId = 'facebook' | 'x' | 'youtube' | 'instagram' | 'linkedin' | 'whatsapp'
export type SocialLink = { id: SocialId; label: string; href: string }

// PLACEHOLDER: replace '#' with the real profile URLs.
export const socials: SocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: '#' },
  { id: 'x', label: 'X', href: '#' },
  { id: 'youtube', label: 'YouTube', href: '#' },
  { id: 'instagram', label: 'Instagram', href: '#' },
  { id: 'linkedin', label: 'LinkedIn', href: '#' },
]

// PLACEHOLDER contact details.
export const contact = {
  cta: { label: 'Get in touch', href: '#contact' },
  whatsapp: { label: 'Chat with us on WhatsApp', href: '#contact' },
  addresses: ['12 Palace Avenue, Central Business District', '4 Riverside Close, Waterfront Quarter'],
  email: 'hello@productspalace.com',
  phone: '+1 (555) 010-2030',
  hours: { label: 'Office hours:', value: 'Mon – Sat, 8am – 6pm' },
}

// PLACEHOLDER figures.
export const heroStats = [
  { value: '1200', suffix: '+', label: 'Homes delivered' },
  { value: '18', suffix: '+', label: 'Completed developments' },
  { value: '350', suffix: '+', label: 'Team members' },
  { value: '6', suffix: '', label: 'Member companies' },
]

export const about = {
  kicker: 'About Products Palace',
  title: ['A Trusted Name in ', 'Luxury', ' Real Estate.'] as const,
  paragraphs: [
    'Products Palace develops and manages residences for people who expect more from the places they live. From the first sketch to the final handover, every home is shaped by careful planning, honest pricing and finishes chosen to last.',
    'Our portfolio spans waterfront apartments, garden villas and serviced residences in fast-growing city districts. Each project pairs contemporary architecture with everyday comfort, so homeowners and investors can commit with confidence.',
  ],
  cta: { label: 'Discover our story', href: '#expertise' },
}

export type Project = {
  tag: string
  location: string
  title: string
  description: string
  price: string
  type: string
  href: string
  image: ImageAsset
}

export const showcase = {
  kicker: ['Our projects', 'The collection'] as const,
  title: ['Remarkable Homes. ', 'Elevated Living.'] as const,
  link: { label: 'Explore all projects', href: '#projects' },
  imageCaption: 'Products Palace',
  infoLabel: 'Featured development',
  footer: ['Designed for exceptional living', 'PP'] as const,
  ctaLabel: 'Explore this project',
  /** Autoplay interval observed on the reference. */
  interval: 6000,
  // PLACEHOLDER projects, prices and descriptions.
  projects: [
    {
      tag: 'Waterfront living',
      location: 'Waterfront District',
      title: 'The Crescent Residences',
      description: 'Light-filled apartments set along the water, with private terraces, a residents’ lounge and a pool that faces the evening sun.',
      price: '$840,000',
      type: 'Premium Apartments',
      href: '#projects',
      image: projectImages[0],
    },
    {
      tag: 'Garden villas',
      location: 'Hillside Estate',
      title: 'Palace Gardens Villas',
      description: 'Detached villas wrapped in mature landscaping, each with a private pool, double-height living spaces and room for a growing family.',
      price: '$1,250,000',
      type: 'Luxury Villas',
      href: '#projects',
      image: projectImages[1],
    },
    {
      tag: 'Skyline homes',
      location: 'Central Business District',
      title: 'Meridian Tower',
      description: 'A slender residential tower with panoramic city views, concierge services and a sky garden shared by every resident.',
      price: '$620,000',
      type: 'Residences & Penthouses',
      href: '#projects',
      image: projectImages[2],
    },
    {
      tag: 'Urban lofts',
      location: 'Riverside Quarter',
      title: 'The Linden Lofts',
      description: 'Loft-style homes with generous ceiling heights and warm, practical interiors, a short walk from the riverside promenade.',
      price: '$480,000',
      type: 'Lofts & Duplexes',
      href: '#projects',
      image: projectImages[3],
    },
    {
      tag: 'Family homes',
      location: 'Harbour Bay',
      title: 'Harbour View Homes',
      description: 'A quiet, gated community of terraced and detached homes with green walkways, play areas and easy access to the coast.',
      price: '$560,000',
      type: 'Terraces & Detached Homes',
      href: '#projects',
      image: projectImages[4],
    },
  ] satisfies Project[],
}

export const expertise = {
  title: 'Expertise',
  subtitle: 'Where considered design meets dependable delivery.',
  pillars: [
    { title: 'Innovation', text: 'Forward-looking design that rethinks how people live, work and gather.' },
    { title: 'Integrity', text: 'Clear terms and open communication at every stage of ownership.' },
    { title: 'Excellence', text: 'Exacting standards from the first drawing to the final key.' },
    { title: 'Sustainability', text: 'Efficient buildings and communities designed to age well.' },
  ],
  filmLabel: 'Play the Products Palace brand film',
  membersMeta: '© 2016 — 2026', // PLACEHOLDER founding year
  membersTitle: 'Member Companies',
}

export const process = {
  kicker: 'How it works',
  title: 'Four Steps to Your New Home',
  steps: [
    { title: 'Explore', text: 'Browse our portfolio of residences and shortlist the developments that suit the way you live.', image: processImages[0] },
    { title: 'Consult', text: 'Meet a property advisor who walks you through available units, pricing and flexible payment plans.', image: processImages[1] },
    { title: 'Reserve', text: 'Secure your chosen home with a reservation while our legal team prepares the paperwork.', image: processImages[2] },
    { title: 'Move in', text: 'Complete your purchase, collect your keys and settle into a home finished with care.', image: processImages[3] },
  ],
  cta: { lead: 'Ready to take the first step?', label: 'Talk to our team', href: '#contact' },
}

// PLACEHOLDER testimonials: replace with approved client quotes.
export const testimonials = {
  kicker: 'Testimonials',
  title: 'Words From Our Homeowners',
  items: [
    {
      quote: '“From our first viewing to the day we collected our keys, the team kept every promise they made. Payments were flexible, updates were regular and the finish of our apartment is even better than the show unit. We would happily buy from them again.”',
      name: 'Adaeze O.',
      role: 'Homeowner',
    },
    {
      quote: '“As an investor I look closely at delivery timelines and build quality. Products Palace handed over on schedule, the documentation was clean and the units let quickly. It is rare to find a developer this organised and this transparent.”',
      name: 'Michael T.',
      role: 'Investor',
    },
    {
      quote: '“We were nervous about buying off-plan, but our advisor explained every step and never rushed us. Living here now, we notice the small details every day: the light, the storage, the quiet. It truly feels like home.”',
      name: 'Sarah K.',
      role: 'Resident',
    },
  ],
}

// PLACEHOLDER articles.
export const news = {
  kicker: 'News & insights',
  title: 'Stories, Updates and Insights From Our Team',
  cta: { label: 'More news', href: '#news' },
  readMore: 'Read more',
  posts: [
    { category: 'Buyer guide', date: 'Nov 18, 2026', title: 'What to Check Before Buying an Off-Plan Home', href: '#news', image: newsImages[0] },
    { category: 'Behind the build', date: 'Nov 12, 2026', title: 'Inside the Design Process for Meridian Tower', href: '#news', image: newsImages[1] },
    { category: 'Insights', date: 'Nov 5, 2026', title: 'Why Location Still Shapes Long-Term Property Value', href: '#news', image: newsImages[2] },
  ],
}

export const footer = {
  newsletter: {
    title: ['Stay ', 'Informed'] as const,
    text: 'Get new project launches, investor updates and lifestyle stories from Products Palace, straight to your inbox.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: 'Thank you. You are on the list.',
  },
  blurb: 'Thoughtfully designed residences, delivered with care and built to hold their value for years to come.',
  quickLinks: {
    title: 'Quick links',
    links: [
      { label: 'Home', href: '#top' },
      { label: 'About us', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Work with us', href: '#contact' },
      { label: 'Partner with us', href: '#contact' },
      { label: 'Contact', href: '#contact' },
      { label: 'Blog', href: '#news' },
      { label: 'News', href: '#news' },
      { label: 'Events', href: '#news' },
      { label: 'Privacy policy', href: '#top' },
    ] satisfies Link[],
  },
  subsidiaries: {
    title: 'Member companies',
    links: [
      { label: 'Palace Homes', href: '#companies' },
      { label: 'PP Capital', href: '#companies' },
      { label: 'Palace Estates', href: '#companies' },
      { label: 'Palace Living', href: '#companies' },
      { label: 'Build Contractors', href: '#companies' },
    ] satisfies Link[],
  },
  contactTitle: 'Catch us here',
  marquee: 'Products Palace',
  copyright: `Copyright © Products Palace ${new Date().getFullYear()}`,
}
