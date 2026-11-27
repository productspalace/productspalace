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

## Additions made for the About page

No new colours, fonts or spacing tokens: the About page is built from the homepage system.

| Addition | Where | Use |
| --- | --- | --- |
| `--animate-mask-reveal`, `--animate-mask-zoom` (+ keyframes) | `theme.css` | Image entrance: the frame unmasks upwards (`clip-path`) while the image settles from `scale(1.12)`. The zoom uses `backwards` fill so hover transforms still work afterwards |
| `data-reveal="mask"` | `motion.css` | Put on an `overflow-hidden` image frame whose first child is the image. Off for reduced motion |
| `revealDelay(ms)` | `src/lib/reveal.ts` | Inline `--reveal-delay` style for `data-reveal` elements |
| `SocialRail` | `src/components/ui/SocialRail.tsx` | Extracted from the homepage hero; positioned per page with `className` |

**Reveal gotcha:** `useRevealOnScroll` adds `is-revealed` to the element directly. Never put
`data-reveal` on an element whose `className` React changes after mount (React would drop
`is-revealed`). Wrap it instead (see the numerals in `OurPeople.tsx`).

### Primitives (`src/styles/utilities.css`)

| Utility | Use |
| --- | --- |
| `kicker` + `kicker-rule` | Wide-tracked accent label with trailing hairline |
| `btn-ink` | Dark button, accent hairline; hover fill turns accent and wipes away |
| `btn-round` | 44 px round carousel arrow |
| `link-arrow` | Uppercase link with thick accent underline and nudging arrow |
| `scrollbar-none` | Hides scrollbars on snap tracks |

### Motion (`src/styles/motion.css`, `src/lib/`)

- `data-reveal="up" | "right"` + `--reveal-delay`: CSS entrance, triggered once by
  `useRevealOnScroll` (IntersectionObserver). Hidden only after JS adds `motion-ready`.
- GSAP (`src/lib/gsap.ts`) registers ScrollTrigger, SplitText and `useGSAP`; every GSAP effect
  is wrapped in `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.
- Lenis (`src/lib/smooth-scroll.ts`) smooths wheel scrolling, drives ScrollTrigger and exposes
  `scrollToTarget` / `setScrollLocked`. Disabled for reduced motion.

## Additions made for the footer

The footer follows a different reference (Sujimoto Group); details in `docs/footer-reference-audit.md`.

| Addition | Where | Use |
| --- | --- | --- |
| `--ease-pill` | `theme.css` | `cubic-bezier(.35,.755,.42,.95)`, pill button transitions |
| `btn-pill` | `utilities.css` | Rounded outline button; a circle of `--pill-color` grows from the centre on hover, text turns `--pill-hover-fg`. Footer only: buttons elsewhere stay square |
| `text-outline` (removed) | `utilities.css` | Was only used by the old footer marquee |

## Additions made for the selective refinement

Three sections take layout and motion patterns from Sujimoto (`docs/selective-ui-refinement.md`).
No colour, font or spacing tokens were added.

| Addition | Where | Use |
| --- | --- | --- |
| `useParallax()` + `PARALLAX_LAYER` | `src/hooks/useParallax.ts` | Image drift inside a fixed frame: put the returned ref and `PARALLAX_LAYER` on a layer inside a `relative overflow-hidden` frame. The layer is 120 % tall and travels ±10 % of the frame while the frame crosses the viewport (scrubbed). Off for reduced motion. Used by the belief band, the seasons image stack and the About promise band |
| `--animate-progress-fill` (+ keyframes) | `theme.css` | `scaleX(0 → 1)`, linear; the duration is set inline (seasons tabs use the 6 s autoplay interval) |

## UI registry

| Component | File | Notes |
| --- | --- | --- |
| `Logo`, `LogoMark` | `src/components/ui/Logo.tsx` | Temporary brand artwork, `tone="light" | "dark"` |
| `Icon` | `src/components/ui/Icon.tsx` | Arrows, close, play, pin, mail, phone, star, sparkle, diamond, quote, social glyphs |
| `AssetImage` | `src/components/ui/AssetImage.tsx` | Renders an `ImageAsset` from the registry |
| `SectionHeading`, `Highlight` | `src/components/ui/SectionHeading.tsx` | Kicker + H2; `effect="fade" | "split-scale"` |
| `CarouselNav` | `src/components/ui/CarouselNav.tsx` | Pill dots + round arrows |
| `useSnapTrack` | `src/hooks/useSnapTrack.ts` | Native scroll-snap track state |
| `useParallax` | `src/hooks/useParallax.ts` | In-frame image drift (see the selective refinement additions) |
| `Loader` | `src/components/layout/Loader.tsx` + `index.html` | Markup in HTML, exit timing in React |
| `SiteHeader`, `MobileMenu` | `src/components/layout/` | Transparent / sticky / mobile variants |
| `SiteFooter` | `src/components/layout/SiteFooter.tsx` | Sujimoto-referenced: follow / register band, four columns, copyright bar (see `docs/footer-reference-audit.md`) |
| `ScrollTopButton`, `CustomCursor` | `src/components/layout/` | Floating utilities |
| `Hero` | `src/components/home/Hero.tsx` | Film or slideshow, headline block, social rail, first-address highlights bar |
| `AboutSection` | `src/components/home/AboutSection.tsx` | Our story; includes the lifestyle mosaic |
| `ProjectShowcase` | `src/components/home/ProjectShowcase.tsx` | Seasons of life: autoplay slider, one household per slide; named household tabs with a progress rule from md (dashes on phones); drifting image stack |
| `ExpertiseSection`, `VideoLightbox` | `src/components/home/` | Luxury, redefined: image-led statement band (clip-open + drift, staggered H2 lines; film controls only once a film exists), pillars, exclusivity statement |
| `ProcessSection` | `src/components/home/ProcessSection.tsx` | Our promise: 5 photo cards (grid from `xl`) |
| `TestimonialsSection` | `src/components/home/TestimonialsSection.tsx` | The moment we build for: story-beat track |
| `NewsSection` | `src/components/home/NewsSection.tsx` | Our first address: planned-feature cards |
| `HomePage` | `src/pages/HomePage.tsx` | Section order |
| `SocialRail` | `src/components/ui/SocialRail.tsx` | "Follow us" rail on hero imagery (home and About) |
| `AboutHero` | `src/components/about/AboutHero.tsx` | Darkened banner photo, kicker, display H1, paragraph, social rail |
| `OurStory` | `src/components/about/OurStory.tsx` | Intro split: image 718 × 700 left / text right; bleeding image on tablets |
| `OurBelief` | `src/components/about/OurBelief.tsx` | Second split: inset text left / image 718 × 600 right |
| `OurPurpose` | `src/components/about/OurPurpose.tsx` | Two white statement cards with 3 px brass base rule (grey band) |
| `OurPeople` | `src/components/about/OurPeople.tsx` | Four households: sticky cross-fading image (desktop), numerals, per-household images below 1200 px |
| `OurPromise` | `src/components/about/OurPromise.tsx` | Dark promise band over one drifting photograph: five centred columns from xl (3 + 2 lg, 2 per row md, list on phones), brass initials in hairline circles, scroll-drawn hairline into the next section |
| `FirstAddress` | `src/components/about/FirstAddress.tsx` | Planned pilot: split with "Planned" chip and illustrative caption, six feature → purpose items |
| `AboutCTA` | `src/components/about/AboutCTA.tsx` | Closing quote block and register CTA |
| `AboutPage` | `src/pages/AboutPage.tsx` | About section order (grey band wraps purpose + people) |

Content and copy: `src/content/site.ts` (navigation, contact), `src/content/footer.ts` (footer), `src/content/home.ts`
(homepage), `src/content/about.ts` (About page) and `src/content/brand.ts` (reused brand messages);
see `docs/homepage-content.md`, `docs/about-page-content.md` and `docs/brand-voice.md`.
Assets: `src/content/assets.ts` (see `/asset-manifest.md`). Pages and routing: `docs/architecture.md`.
Component file names follow the reference layout; the table says what each now renders.
Reference audits: `docs/homepage-reference-audit.md`, `docs/about-reference-audit.md`, `docs/footer-reference-audit.md`.
