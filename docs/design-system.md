# Design system notes and UI registry

The global system lives in `src/styles/` (`theme.css` tokens, `base.css` elements,
`utilities.css` primitives). This file records what the homepage build added and where every
homepage component lives.

## Additions made for the homepage

### Tokens (`src/styles/theme.css`)

| Token | Value | Why |
| --- | --- | --- |
| `--ease-header` | `cubic-bezier(.24,.74,.58,1)` | Sticky header slide-in |
| `--spacing-header-mobile` | `5.625rem` (90 px) | Fixed bar below 1200 px; utility `h-header-mobile` |
| `--spacing-header-sticky` | `4rem` (64 px) | Condensed desktop header; utility `h-header-sticky` |
| `--aspect-news` | `1048 / 676` | News card images; utility `aspect-news` |
| `--breakpoint-laptop` | `64.0625rem` (1025 px) | Originally where the 4 process cards became a grid (the 5 promise cards now switch at `xl`); kept for future use. A token (not `min-[1025px]:`) keeps media-query order correct in Tailwind v4 |
| `--animate-fade-in-up` / `--animate-fade-in-right` | 1 s `ease` | Scroll-reveal entrances |
| `--animate-text-enter` | .6 s | Showcase info re-entry |
| `--animate-gold-pulse` | 2 s | Showcase label dot |
| `--animate-spin-slow` | 25 s linear | Showcase sparkle |

`--ease-luxe` already matched the reference's loader/menu easing exactly and is reused.

### Primitives (`src/styles/utilities.css`)

| Utility | Use |
| --- | --- |
| `kicker` + `kicker-rule` | Wide-tracked accent label with trailing hairline |
| `btn-ink` | Dark button, accent hairline; hover fill turns accent and wipes away |
| `btn-round` | 44 px round carousel arrow |
| `link-arrow` | Uppercase link with thick accent underline and nudging arrow |
| `text-outline` | Outlined display type (`--outline-color` to override) |
| `scrollbar-none` | Hides scrollbars on snap tracks |

### Motion (`src/styles/motion.css`, `src/lib/`)

- `data-reveal="up" | "right"` + `--reveal-delay`: CSS entrance, triggered once by
  `useRevealOnScroll` (IntersectionObserver). Hidden only after JS adds `motion-ready`.
- GSAP (`src/lib/gsap.ts`) registers ScrollTrigger, SplitText and `useGSAP`; every GSAP effect
  is wrapped in `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.
- Lenis (`src/lib/smooth-scroll.ts`) smooths wheel scrolling, drives ScrollTrigger and exposes
  `scrollToTarget` / `setScrollLocked`. Disabled for reduced motion.

## UI registry

| Component | File | Notes |
| --- | --- | --- |
| `Logo`, `LogoMark` | `src/components/ui/Logo.tsx` | Temporary brand artwork, `tone="light" | "dark"` |
| `Icon` | `src/components/ui/Icon.tsx` | Arrows, close, play, pin, mail, phone, star, sparkle, diamond, quote, social glyphs |
| `AssetImage` | `src/components/ui/AssetImage.tsx` | Renders an `ImageAsset` from the registry |
| `SectionHeading`, `Highlight` | `src/components/ui/SectionHeading.tsx` | Kicker + H2; `effect="fade" | "split-scale"` |
| `CarouselNav` | `src/components/ui/CarouselNav.tsx` | Pill dots + round arrows |
| `useSnapTrack` | `src/hooks/useSnapTrack.ts` | Native scroll-snap track state |
| `Loader` | `src/components/layout/Loader.tsx` + `index.html` | Markup in HTML, exit timing in React |
| `SiteHeader`, `MobileMenu` | `src/components/layout/` | Transparent / sticky / mobile variants |
| `SiteFooter` | `src/components/layout/SiteFooter.tsx` | Newsletter, columns, marquee, bottom bar |
| `ScrollTopButton`, `CustomCursor` | `src/components/layout/` | Floating utilities |
| `Hero` | `src/components/home/Hero.tsx` | Film or slideshow, headline block, social rail, first-address highlights bar |
| `AboutSection` | `src/components/home/AboutSection.tsx` | Our story; includes the lifestyle mosaic |
| `ProjectShowcase` | `src/components/home/ProjectShowcase.tsx` | Seasons of life: autoplay slider, one household per slide |
| `ExpertiseSection`, `VideoLightbox` | `src/components/home/` | Luxury, redefined: pillars, clipped film, exclusivity statement |
| `ProcessSection` | `src/components/home/ProcessSection.tsx` | Our promise: 5 photo cards (grid from `xl`) |
| `TestimonialsSection` | `src/components/home/TestimonialsSection.tsx` | The moment we build for: story-beat track |
| `NewsSection` | `src/components/home/NewsSection.tsx` | Our first address: planned-feature cards |
| `HomePage` | `src/pages/HomePage.tsx` | Section order |

Content and copy: `src/content/home.ts` (homepage) and `src/content/brand.ts` (reused brand messages);
see `docs/homepage-content.md` and `docs/brand-voice.md`. Assets: `src/content/assets.ts` (see `/asset-manifest.md`).
Component file names follow the reference layout; the table says what each now renders.
Reference audit: `docs/homepage-reference-audit.md`.
