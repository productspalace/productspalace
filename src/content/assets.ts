/**
 * Central asset registry for every page.
 *
 * Every image, video and logo the homepage renders is referenced from here, so a
 * final asset can be swapped by changing one path. Keep the documented aspect ratio
 * (see /asset-manifest.md) and the layout will not change.
 *
 * Temporary photography is from Unsplash (Unsplash License) and lives in
 * /public/assets/placeholders. Status for each entry is tracked in the manifest.
 */

export type ImageAsset = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  /** CSS object-position, used where the crop matters. */
  position?: string
}

export type VideoAsset = {
  id: string
  /** MP4/WebM source. Leave undefined until the final film exists: the poster/slides are shown instead. */
  src?: string
  poster: ImageAsset
}

const P = '/assets/placeholders'

const img = (id: string, src: string, alt: string, width: number, height: number, position?: string): ImageAsset => ({
  id,
  src: `${P}/${src}`,
  alt,
  width,
  height,
  position,
})

export const heroSlides: ImageAsset[] = [
  img('hero-01', 'hero/hero-01.jpg', 'Contemporary home with warm interior lighting at dusk', 1920, 1080),
  img('hero-02', 'hero/hero-02.jpg', 'Resort-style pool terrace beside a residence at twilight', 1920, 1080),
  img('hero-03', 'hero/hero-03.jpg', 'White villa with a long infinity pool', 1920, 1080),
  img('hero-04', 'hero/hero-04.jpg', 'Modern family villa with landscaped garden and pool', 1920, 1080),
]

export const heroFilm: VideoAsset = {
  id: 'hero-film',
  src: undefined,
  poster: heroSlides[0],
}

export const aboutGallery: ImageAsset[] = [
  img('about-01', 'about/lifestyle-01.jpg', 'Open staircase leading to a terrace with a pool view', 1000, 600, 'center 48%'),
  img('about-02', 'about/lifestyle-02.jpg', 'Calm bedroom with an upholstered headboard', 720, 600),
  img('about-03', 'about/lifestyle-03.jpg', 'Bright kitchen with a marble island', 520, 900),
  img('about-04', 'about/lifestyle-04.jpg', 'Tropical pool deck surrounded by palms', 1000, 860, 'center 55%'),
]

/**
 * "The lives we design around" carousel, one image per household (same order as
 * `people.stories` in home.ts). Placeholders reuse photos from other folders.
 */
export const peopleImages: ImageAsset[] = [
  img('people-building', 'process/step-02.jpg', 'A woman working at her laptop at a quiet desk', 640, 900, 'center 35%'),
  img('people-newlyweds', 'about/lifestyle-03.jpg', 'A bright kitchen with a marble island, set for cooking at home', 520, 900),
  img('people-family', 'process/step-04.jpg', 'A family house with a lawn and a wide driveway', 640, 900),
  img('people-arrived', 'expertise/film-poster.jpg', 'A spacious living room with room for the whole family to gather', 1920, 1080),
]

export const expertiseFilm: VideoAsset = {
  id: 'expertise-film',
  src: undefined,
  poster: img('expertise-film-poster', 'expertise/film-poster.jpg', 'A calm, sunlit living room', 1920, 1080),
}

/** "Our promise" cards (decorative, under a dark gradient), same order as `promises` in brand.ts. */
export const promiseImages: ImageAsset[] = [
  img('promise-safety', 'hero/hero-01.jpg', 'A home lit warmly at dusk', 1920, 1080),
  img('promise-quiet', 'about/lifestyle-02.jpg', 'A calm bedroom', 720, 600),
  img('promise-neighbours', 'projects/project-03.jpg', 'Homes with neighbouring balconies', 1400, 1220),
  img('promise-time', 'about/lifestyle-03.jpg', 'A kitchen ready for dinner at home', 520, 900),
  img('promise-quality', 'projects/project-04.jpg', 'Carefully detailed residential architecture', 1400, 1220),
]

/** "Our first address" cards, same order as `firstAddress.features` in home.ts. */
export const firstAddressImages: ImageAsset[] = [
  img('address-homes', 'projects/project-05.jpg', 'A modern two-storey home with a front lawn', 1400, 1220),
  img('address-community', 'news/news-03.jpg', 'Homes set among trees', 1048, 676),
  img('address-arrival', 'process/step-04.jpg', 'A home with a driveway and space to park', 640, 900),
]

/* -------------------------------------------------------------------------- */
/* About page (see /asset-manifest.md, "About page")                           */
/* -------------------------------------------------------------------------- */

/**
 * About page imagery. All TEMP: existing pool-free placeholders, re-used in the
 * slot whose moment they suit best. None of them show the Products Palace
 * development; the first-address image carries an "illustrative" caption.
 */
export const aboutImages = {
  hero: img('about-hero', 'expertise/film-poster.jpg', 'A calm, sunlit living room in the late afternoon', 1920, 1080, 'center 60%'),
  story: img('about-story', 'hero/hero-01.jpg', 'A home lit warmly at dusk, with the lights already on inside', 1920, 1080, '40% center'),
  belief: img('about-belief', 'about/lifestyle-02.jpg', 'A calm bedroom made up for a good night’s rest', 720, 600),
  firstAddress: img('about-first-address', 'news/news-03.jpg', 'Low-rise homes with balconies set among trees (illustrative)', 1048, 676),
}

/** "The lives we design around", one image per household (same order as `theLives.households` in about.ts). */
export const aboutPeopleImages: ImageAsset[] = [
  img('about-people-building', 'process/step-02.jpg', 'A woman working calmly at her laptop at a quiet desk', 640, 900, 'center 30%'),
  img('about-people-newlyweds', 'about/lifestyle-03.jpg', 'A bright kitchen ready for cooking dinner together', 520, 900),
  img('about-people-family', 'process/step-04.jpg', 'A family house with a lawn and a wide driveway', 640, 900),
  img('about-people-arrived', 'projects/project-05.jpg', 'A spacious two-storey family home with a front garden', 1400, 1220),
]
