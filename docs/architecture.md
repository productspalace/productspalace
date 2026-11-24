# Architecture

Vite 8 + React 19 + TypeScript, Tailwind CSS v4, GSAP 3 (ScrollTrigger, SplitText) and Lenis.
No router library: the site is a **multi-page build**, like the reference site.

## Pages and routing

| Page | URL | HTML entry | React page |
| --- | --- | --- | --- |
| Home | `/` | `index.html` (`<body data-page="home">`) | `src/pages/HomePage.tsx` |
| About | `/about/` | `about/index.html` (`<body data-page="about">`) | `src/pages/AboutPage.tsx` |

- Every page is its own HTML document. Both load the same script (`src/main.tsx`), which reads
  `data-page` (via `src/lib/page.ts`) and renders that page inside the shared shell (`src/App.tsx`:
  loader, header, footer, scroll-to-top, cursor).
- **Why not client-side routing:** the reference navigates between pages with full loads and
  replays its loader each time. Separate documents also give each page static `<title>`,
  description and Open Graph tags that crawlers and link previews can read without running
  JavaScript, and direct URLs, refresh and back/forward work natively. It needs no extra
  dependency.
- `vite.config.ts` lists the pages (`build.rollupOptions.input`). Two small plugins live there:
  - `html-partials` replaces `<!-- @partial name -->` with `src/partials/name.html`. The shared head
    (favicon, viewport, critical loader CSS, fonts) and the loader markup are written once.
  - `page-trailing-slash` redirects `/about` → `/about/` in `vite` and `vite preview`, so the dev
    server's fallback never serves the homepage for it.
- **Hosting:** serve `dist/` as static files. The host must serve `about/index.html` for `/about/`
  and should redirect `/about` to `/about/` (the default on Netlify, Vercel, Cloudflare Pages,
  GitHub Pages and nginx with `try_files $uri $uri/ =404`). No SPA rewrite is needed.

### Adding a page

1. Create `<page>/index.html` (copy `about/index.html`; change `data-page`, title, meta, preload).
2. Add it to `pages` in `vite.config.ts`, to `PageId` and `routes` in `src/content/site.ts`, and to
   the `pages` map in `src/main.tsx` (and `currentPage` in `src/lib/page.ts`).
3. Put its copy in `src/content/<page>.ts` and its sections in `src/components/<page>/`.

## Links, anchors and scrolling

- `src/content/site.ts` builds every cross-page link: `routes.about`, `homeSection('promise')`
  → `/#promise`, `onThisPage('contact')` → `#contact` (the footer exists on every page).
- `useAnchorScroll` (in `App`) intercepts clicks on links to the **current document** (`#x`, or
  `/#x` while on the homepage, or a link to the page itself) and scrolls with Lenis, clearing the
  fixed header. Links to other pages navigate normally. After the loader has gone it also scrolls
  to any `#hash` the page was opened with (e.g. arriving at `/#promise` from the About page).
  Targets with `tabindex` (the skip link's `<main>`) receive focus.
- Active navigation: `NavLink.page` + `ariaCurrent()` set `aria-current="page"`.
- Scroll restoration on back/forward is the browser's own.

## Loading and motion

- One loader for every page (`src/partials/loader.html` + `src/components/layout/Loader.tsx`):
  `window.load` (capped at 3.5 s) + 60 ms, then a 0.6 s fade. It runs on every page load, as on
  the reference; there are no client-side route changes for it to cover.
- `useRevealOnScroll(entered)` starts the `data-reveal` entrances only once the loader has left,
  so each page's hero animates in view. Variants: `up`, `right`, `mask` (image frames).
- GSAP effects are wrapped in `gsap.matchMedia('(prefers-reduced-motion: no-preference)')` and
  cleaned up by `useGSAP`. Lenis is disabled for reduced motion.

## Source layout

```text
index.html, about/index.html     page entries (static metadata)
vite.config.ts                   pages, html partials, trailing-slash redirect
src/
  main.tsx                       picks the page for this document
  App.tsx                        shared shell
  partials/                      head.html, loader.html (injected at build)
  pages/                         HomePage.tsx, AboutPage.tsx (section order only)
  components/
    layout/                      SiteHeader, MobileMenu, SiteFooter, Loader, ScrollTopButton, CustomCursor
    ui/                          Logo, Icon, AssetImage, SectionHeading, CarouselNav, SocialRail
    home/                        homepage sections
    about/                       About sections
  content/
    site.ts                      routes, anchors, navigation, socials, contact, footer
    brand.ts                     reused brand messages (tagline, promises)
    home.ts, about.ts            page copy
    assets.ts                    every image / film reference
  hooks/                         useAnchorScroll, useRevealOnScroll, useScrolledPast, useSnapTrack
  lib/                           gsap.ts, smooth-scroll.ts, page.ts, reveal.ts
  styles/                        theme.css (tokens), base.css, utilities.css, motion.css
```

The project keeps content in `src/content/*.ts` (not `constants/*.js`) and styles in `src/styles/`
(not `lib/index.css`); new work follows those existing conventions.
