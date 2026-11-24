/**
 * Central asset registry for the homepage.
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

export const projectImages: ImageAsset[] = [
  img('project-01', 'projects/project-01.jpg', 'The Crescent Residences, villa exterior with pool', 1400, 1220),
  img('project-02', 'projects/project-02.jpg', 'Palace Gardens Villas, white villa with infinity pool', 1400, 1220),
  img('project-03', 'projects/project-03.jpg', 'Meridian Tower, apartment facade against a blue sky', 1400, 1220),
  img('project-04', 'projects/project-04.jpg', 'The Linden Lofts, contemporary apartment block', 1400, 1220),
  img('project-05', 'projects/project-05.jpg', 'Harbour View Homes, modern family house', 1400, 1220),
]

export const expertiseFilm: VideoAsset = {
  id: 'expertise-film',
  src: undefined,
  poster: img('expertise-film-poster', 'expertise/film-poster.jpg', 'Living room interior from the Products Palace brand film', 1920, 1080),
}

export const processImages: ImageAsset[] = [
  img('process-01', 'process/step-01.jpg', 'Residence exterior with pool', 640, 900),
  img('process-02', 'process/step-02.jpg', 'Advisor meeting a client', 640, 900),
  img('process-03', 'process/step-03.jpg', 'Handshake over a signed agreement', 640, 900),
  img('process-04', 'process/step-04.jpg', 'Family home ready to move into', 640, 900),
]

export const newsImages: ImageAsset[] = [
  img('news-01', 'news/news-01.jpg', 'City towers seen from street level', 1048, 676),
  img('news-02', 'news/news-02.jpg', 'Team presenting during a workshop', 1048, 676),
  img('news-03', 'news/news-03.jpg', 'Apartment buildings among trees', 1048, 676),
]

/** Member-company logos. White artwork on transparent, shown on black. */
export const memberLogos: ImageAsset[] = [
  img('logo-homes', 'logos/palace-homes.svg', 'Palace Homes', 200, 60),
  img('logo-capital', 'logos/palace-capital.svg', 'Palace Capital', 200, 60),
  img('logo-build', 'logos/palace-build.svg', 'Palace Build', 200, 60),
  img('logo-estates', 'logos/palace-estates.svg', 'Palace Estates', 200, 60),
  img('logo-living', 'logos/palace-living.svg', 'Palace Living', 200, 60),
  img('logo-ventures', 'logos/palace-ventures.svg', 'Palace Ventures', 200, 60),
]
