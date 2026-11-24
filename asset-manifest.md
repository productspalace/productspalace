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
| `logo-mark` | News card badge, film corner badge | `LogoMark` in `Logo.tsx` | Brand symbol only | Vector | 1 : 1 | SVG | Top-right of news images, top-left of film | TEMP |
| `favicon` | Browser tab | `public/favicon.svg` (Vite default) | Brand favicon | 32 px + 180 px touch icon | 1 : 1 | SVG + PNG | n/a | MISSING |

## Hero

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `hero-film` | Hero background (≥ 768 px) | none: `heroFilm.src` is `undefined`, so the slideshow plays instead | Brand film, muted loop, 15–30 s, copy burned in if desired | 1920 × 1080 (also 1280 × 720 encode) | 16 : 9 | MP4 (H.264) + WebM, ≤ 8 MB | Cover; keep key subject in central 60 % (cropped to 4:3 on tablets) | MISSING |
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

## Project showcase

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `project-01` … `project-05` | Showcase stage image (one per project, see `showcase.projects` in `src/content/home.ts`) | `placeholders/projects/project-0{1..5}.jpg` | Official render or photo per development | 1400 × 1220 | ≈ 1.15 : 1 (desktop); crops to ≈ 0.5 : 1 on tablet and ≈ 1 : 1 on phones | WebP + JPG | Cover, centre; image slowly zooms to 107 % | TEMP |

Project names, prices, locations and descriptions in `src/content/home.ts` are placeholders too.

## Expertise

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `expertise-film` | Clipped film panel (background loop) and lightbox | none: `expertiseFilm.src` is `undefined`; poster is shown and the lightbox shows a placeholder notice | Brand / amenities film | 1920 × 1080 | 16 : 9 (panel is ≈ 1.86 : 1 desktop, ≈ 0.9 : 1 phone) | MP4 + WebM | Cover, centre | MISSING |
| `expertise-film-poster` | Film poster | `placeholders/expertise/film-poster.jpg` | Still from the film | 1920 × 1080 | 16 : 9 | WebP + JPG | Cover, centre | TEMP |
| `logo-homes`, `logo-capital`, `logo-build`, `logo-estates`, `logo-living`, `logo-ventures` | Member companies row | `placeholders/logos/palace-*.svg` | Member-company logos, light versions for a black background | Vector, artboard 200 × 60 | ≈ 3.3 : 1 artboard (logos sit inside, `object-fit: contain`) | SVG | Centred | TEMP |

## Process

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `process-01` … `process-04` | Step cards (background under a dark gradient) | `placeholders/process/step-0{1..4}.jpg` | One photo per step | 640 × 900 | ≈ 0.7 : 1 | WebP + JPG | Cover, centre; text sits on the lower half | TEMP |

## News

| ID | Section | Temporary asset | Required final asset | Recommended size | Ratio | Format | Positioning | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `news-01` … `news-03` | News card images | `placeholders/news/news-0{1..3}.jpg` | Article featured images (normally from the CMS) | 1048 × 676 | 1.55 : 1 (`--aspect-news`) | WebP + JPG | Cover, centre; keep the top-right corner clear for the badge | TEMP |
