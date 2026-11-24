# Homepage asset manifest

Every homepage image, film and logo is referenced from **`src/content/assets.ts`**. To replace an
asset, drop the final file into `public/assets/…` and change the `src` (and `width`/`height`, and
`position` if the crop needs it) of that entry. No component or layout changes are needed as long
as the aspect ratio below is respected (every slot uses `object-fit: cover` unless noted).

Temporary photography comes from Unsplash (Unsplash License: free commercial use, no attribution
required) and lives in `public/assets/placeholders/`. Placeholder logos are original SVG wordmarks.
Nothing was taken from the reference website.

Status key: **TEMP** = placeholder in use · **MISSING** = slot falls back to a placeholder until supplied.

## Brand

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `logo` | Header, sticky header, mobile bar, menu, footer | `src/components/ui/Logo.tsx` (arch mark + wordmark) | Primary logo, light and dark versions | Vector | ≈ 4.4 : 1 lock-up | SVG | Vertically centred; sized by font-size of the wrapper | TEMP |
| `logo-loader` | Loader | Inline SVG + text in `index.html` (`#app-loader`) | Same logo, light version | Vector, rendered ~120 px wide | ≈ 4.4 : 1 | Inline SVG | Centred in 120 px ring | TEMP (update together with `Logo.tsx`) |
| `logo-mark` | First-address card badge, film corner badge, moment cards, exclusivity statement | `LogoMark` in `Logo.tsx` | Brand symbol only | Vector | 1 : 1 | SVG | Top-right of first-address images, top-left of film | TEMP |
| `favicon` | Browser tab | `public/favicon.svg` (Vite default) | Brand favicon | 32 px + 180 px touch icon | 1 : 1 | SVG + PNG | n/a | MISSING |

## Hero

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `hero-film` | Hero background (≥ 768 px) | none: `heroFilm.src` is `undefined`, so the slideshow plays instead | Brand film, muted loop, 15–30 s (no burned-in copy: the headline is HTML and sits bottom-left) | 1920 × 1080 (also 1280 × 720 encode) | 16 : 9 | MP4 (H.264) + WebM, ≤ 8 MB | Cover; keep key subject in central 60 % (cropped to 4:3 on tablets) | MISSING |
| `hero-01` | Hero slideshow / film poster | `placeholders/hero/hero-01.jpg` | Hero still (also the video poster) | 2400 × 1350 | 16 : 9 | WebP/AVIF + JPG | Cover, centre; mobile crops to ≈ 0.9 : 1 | TEMP |
| `hero-02` … `hero-04` | Hero slideshow (phones, and desktop until the film exists) | `placeholders/hero/hero-0{2,3,4}.jpg` | 3 further hero stills | 2400 × 1350 | 16 : 9 | WebP/AVIF + JPG | Cover, centre | TEMP |

## About

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio (desktop tile) | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `about-01` | Mosaic, top-left (7/12 cols, 38 % height) | `placeholders/about/lifestyle-01.jpg` | Lifestyle photo | 1000 × 600 | ≈ 1.68 : 1 | WebP + JPG | `center 48%` | TEMP |
| `about-02` | Mosaic, top-right (5/12) | `placeholders/about/lifestyle-02.jpg` | Interior detail | 720 × 600 | ≈ 1.19 : 1 | WebP + JPG | centre | TEMP |
| `about-03` | Mosaic, bottom-left (4/12, 62 %) | `placeholders/about/lifestyle-03.jpg` | Portrait lifestyle photo | 520 × 900 | ≈ 0.58 : 1 | WebP + JPG | centre | TEMP |
| `about-04` | Mosaic, bottom-right (8/12) | `placeholders/about/lifestyle-04.jpg` | Wide amenity photo | 1000 × 860 | ≈ 1.17 : 1 | WebP + JPG | `center 55%` | TEMP |

The mosaic height is fixed per breakpoint (590 / 510 / 420 / 340 px), so tiles crop; keep subjects central.

## Seasons of life (people carousel)

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `people-building` | Slide 1: the one who is building | `placeholders/process/step-02.jpg` | A professional at a desk by a window, at home and calm | 1400 × 1220 | ≈ 1.15 : 1 (desktop); crops to ≈ 0.5 : 1 on tablet and ≈ 1 : 1 on phones | WebP + JPG | Cover, `center 35%`; image slowly zooms to 107 % | TEMP |
| `people-newlyweds` | Slide 2: the newlyweds | `placeholders/about/lifestyle-03.jpg` | A couple cooking together on a Friday night | 1400 × 1220 | as above | WebP + JPG | Cover, centre | TEMP |
| `people-family` | Slide 3: the growing family | `placeholders/process/step-04.jpg` | A child on a bicycle in a safe shared space, parents nearby | 1400 × 1220 | as above | WebP + JPG | Cover, centre | TEMP |
| `people-arrived` | Slide 4: the family that has arrived | `placeholders/expertise/film-poster.jpg` | Three generations gathered at home | 1400 × 1220 | as above | WebP + JPG | Cover, centre | TEMP |

Lifestyle photography of Nigerian households suits this section far better than architecture.

## Expertise

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `expertise-film` | Clipped film panel (background loop) and lightbox | none: `expertiseFilm.src` is `undefined`; poster is shown and the lightbox shows a placeholder notice | Brand / amenities film | 1920 × 1080 | 16 : 9 (panel is ≈ 1.86 : 1 desktop, ≈ 0.9 : 1 phone) | MP4 + WebM | Cover, centre | MISSING |
| `expertise-film-poster` | Film poster | `placeholders/expertise/film-poster.jpg` | Still from the film | 1920 × 1080 | 16 : 9 | WebP + JPG | Cover, centre | TEMP |

## Our promise

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `promise-safety` … `promise-quality` | Five promise cards (decorative, under a dark gradient), same order as `promises` in `src/content/brand.ts` | `hero/hero-01.jpg`, `about/lifestyle-02.jpg`, `projects/project-03.jpg`, `about/lifestyle-03.jpg`, `projects/project-04.jpg` | One photo per promise: arrival at the gate · a quiet room · neighbours together · dinner at home · a crafted detail | 640 × 900 | ≈ 0.7 : 1 (≈ 0.55 : 1 in the 5-column desktop grid) | WebP + JPG | Cover, centre; text sits on the lower half | TEMP |

## Our first address

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `address-homes`, `address-community`, `address-arrival` | Three first-address cards | `projects/project-05.jpg`, `news/news-03.jpg`, `process/step-04.jpg` | Official renders: a maisonette exterior · the padel court / play area · the arrival court and parking | 1048 × 676 | 1.55 : 1 (`--aspect-news`) | WebP + JPG | Cover, centre; keep the top-right corner clear for the badge | TEMP |

**Accuracy:** the brand story plans no swimming pool. Several placeholders (the hero slides and
two of the about mosaic tiles) show pools. Replace them before launch so the imagery does not
promise an amenity that is not planned.
