/**
 * Brand identity and messaging that is reused across the site (header, footer,
 * metadata, several homepage sections). Source of truth: "Products Palace Brand
 * Story" (Lagos, 2026). Voice and rules: docs/brand-voice.md.
 *
 * Keep this file for messages that genuinely repeat. Section-specific copy lives
 * in ./home.ts.
 */

export const brand = {
  name: 'Products Palace',
  /** Official tagline. Do not paraphrase. */
  tagline: 'Luxury, for a purpose.',
  /** Small descriptor under the wordmark in the temporary logo lock-up. */
  descriptor: 'Real Estate',
  /** Closing line, adapted from the final page of the brand story. */
  closing: 'A home that gives you back to yourself, and to the people you love.',
  /** Pairs with the tagline when the idea of exclusivity is addressed. */
  exclusivity: 'Exclusive, for a reason.',
}

export type BrandPromise = { title: string; text: string }

/**
 * The five promises ("What you can count on"). Written as commitments the brand
 * designs for, not as guarantees.
 */
export const promises: BrandPromise[] = [
  {
    title: 'Safety you can feel',
    text: 'A secure, managed community, so you stop checking the locks twice and children are free to be children.',
  },
  {
    title: 'Quiet you can hear',
    text: 'Homes planned for stillness, so rest, focus and conversation come easily.',
  },
  {
    title: 'Neighbours you would choose',
    text: 'A small community of professionals and families who value privacy, courtesy and the same decent things you do.',
  },
  {
    title: 'Time you get back',
    text: 'Locations chosen with the commute in mind. Hours saved on the road are hours returned to your family.',
  },
  {
    title: 'Quality that lasts',
    text: 'Homes built with care and integrity, to serve you well long after the keys are handed over.',
  },
]
