# Homepage reference audit

Reference: `https://paltonmorgan.com/` (homepage only), inspected on 24 Nov 2026 with headless Chrome
(Playwright) at 1920, 1440, 1024, 768 and 390 px. Measurements below come from the live DOM
(`getBoundingClientRect`, `getComputedStyle`), the site's loaded stylesheets and the observed
runtime behaviour. Nothing proprietary (code, copy, logos, media) was copied into this project;
only layout, proportions, timing and interaction patterns were reproduced.

Stack observed: WordPress + Elementor theme, GSAP 3 + ScrollTrigger + SplitText, Lenis smooth
scroll, Swiper, a custom cursor script.

## 1. Loading screen

| Property | Observed |
| --- | --- |
| Layer | `position: fixed`, full viewport, `#000`, z-index above everything |
| Ring | 120 × 120 px circle, centred, `box-shadow: inset 0 0 0 1px rgba(255,255,255,.1)` |
| Spinner | 30 × 120 px masked slice of a 120 px circle with a white→transparent vertical gradient and a 1 px rim; rotates `360deg` in `1.2s linear infinite` around the ring centre |
| Logo | Centred inside the ring, 40 px tall |
| Exit | On `window.load` + 60 ms the loader gets `is-loaded` → `opacity: 0; visibility: hidden` over `0.6s cubic-bezier(.645,.045,.355,1)` |
| Scroll lock | None (`body { overflow: hidden auto }` throughout) |
| Entrance | The page is already rendered underneath; the right-hand social rail plays `fadeInRight` (300 ms delay). No other hero entrance. |
| Note | The reference waits for *every* asset (`load` fired at 20–35 s in tests). We cap this. |

## 2. Header

**Desktop ≥ 1200 px, at top of page (transparent, over the hero)**
- Three zones on a 1300 px container: nav left (x = 70), logo centred (179 × 54), actions right.
- Nav: 5 items, sans 500, 14 px, white, ~44 px gaps. Active item underlined; hover → gold.
- Actions: WhatsApp glyph (28 px, white) + gold CTA "GET IN TOUCH" (≈179 × 40, uppercase, tracked ~2 px, dark text).

**Sticky header (desktop)** — a second header, fixed, white, 64 px tall:
- Slides in from `translateY(-120%)` once `scrollY > 30`, `0.6s cubic-bezier(.24,.74,.58,1)`; slides out when back above 30 px.
- Layout changes: logo left (170 px wide), nav centred (dark text), WhatsApp + CTA right.

**< 1200 px** — a white mobile bar, 90 px tall, fixed: logo left (139 × 42 at x = 15), 3-line burger right
(lines of different length). Burger opens a full-width white panel (`0.25s` ease `(.645,.045,.355,1)`)
with a grey square close button top-right, logo, search field and a divider-separated list (14 px,
active item gold, chevron toggles for sub-menus).

## 3. Section sequence (1440 px, document height ≈ 8 150 px)

| # | Section | y / height | Key structure |
| --- | --- | --- | --- |
| 1 | Hero | 0 / 100 vh | Full-bleed background **video** (`object-fit: cover`). No visible headline (copy is in the film). Vertical "Follow us" rail at right (rotated label, rule, 5 social glyphs, x ≈ 1388, y 250–500). |
| 1a | Stats bar | bottom 105 px of hero | 4 equal cells, `rgba(0,0,0,.35)` + backdrop blur, 1 px light dividers. Serif numerals ≈ 30 px with gold "+", uppercase serif labels ≈ 11 px, very wide tracking. Desktop only. |
| 2 | About | 795 px | Left col 520 px: kicker (gold, uppercase, ~0.4 em tracking, hairline extending right), H2 serif 300 at 4 vw (57.6 px) with one gold highlighted word, two paragraphs (16 px / 1.62, warm brown), dark button with gold 1 px border (226 × 54). Right: 645 × 590 mosaic on a 12-col grid, rows 38 % / 62 %, 5 px gaps: [7 cols][5 cols] / [4 cols][8 cols]. |
| 3 | Project showcase | 1 100 px | Light-grey panel (#eeedea) inset 10 px from viewport edges. Header row: kicker "Our projects — The collection" with 28 px gold rule, one-line H2 (`clamp(2rem,4vw,4rem)`, second clause gold), right link "Explore all projects →" with 2 px gold underline. Stage: 56 % image / 44 % white info panel, min-height 610, soft shadow. Image: label chip top-left (blurred dark, pulsing gold dot), footer caption bottom-left, gradient shade. Info: "Featured development" + slowly rotating gold star, location (gold, pin icon), H3 serif ≈ 60 px, 52 × 3 gold rule, description, 2-col details (Price from / Property type) with top hairline, full-width gold CTA bar with arrow, footer row. Controls: 5 dash buttons (3 px bars, active gold) left, 2 × 54 px round arrow buttons right. |
| 4 | Expertise | 1 660 px | Background `linear-gradient(#3a3b3a 0%, #000 15%)`. "Expertise" H2 (white) + H3 tagline 36 px. Hairline, then 4 pillars (gold diamond icon, uppercase tracked title, 16 px light text, bottom hairline, gold top hairline). Then a 1300 × 700 rounded **video** panel with a corner brand mark and a centred blurred play button (opens lightbox). Then row "© 2014 — 2026" / "Member companies" and a row of 6 member-company logos (each duplicated for a vertical hover roll). |
| 5 | Process | 970 px | Background #f5f5f5. Kicker + H2. 4 cards (310 × 440, radius 10, 20 px gaps): photo background, dark gradient overlay, gold numeral (38 px bold) top, serif title 32 px + 17 px description at bottom; image zooms 1.06 on hover. Below: centred 32 px line "…journey. Get in touch" (underlined link). |
| 6 | Testimonials | 720 px | White. Kicker + H2. Horizontal track of 640 px cards (20 px gaps), alternating white (with shadow) / black. Five gold stars, 20 px quote, serif name 17 px, role in muted/gold, large quote glyph bottom-right. Nav: pill dots (8 px → 24 px active, gold) + 44 px round gold-outline arrows (disabled 35 % opacity). |
| 7 | News | 990 px | Background #f5f5f5. Kicker + H2 (2 lines, 774 px) + dark "More news" button right. 3 white cards (radius 10, 10 px inner padding): image 393 × 254 radius 10 with brand mark top-right, category pill + date, serif bold 24 px title, gold "Read more". |
| 8 | Footer | 1 010 px | Newsletter band (sand gradient fading to black): "Stay *Informed*" 32 px, description, email field + black "Subscribe" button on the right. Black footer: white logo + 18 px blurb + gold social glyphs; columns Quick links (2 sub-columns), Subsidiaries, Contact (gold icons, addresses, e-mail, phone, office hours). Giant outlined brand name (gold 1 px stroke, ≈ 190 px) marquee. Bottom row: copyright left, grey social glyphs right. |

Global: content container 1300 px (70 px side space at 1440), serif headings weight 300,
sans body 16 px. Floating scroll-to-top: 46 px dark circle with gold progress ring, fixed bottom-right,
appears after scrolling. Custom cursor on desktop: ~80 px translucent gold disc following the pointer.

## 4. Motion inventory

| Effect | Where | Observed parameters |
| --- | --- | --- |
| `fadeInUp` | Kickers, headings, paragraphs, buttons | `translate3d(0,100%,0)` + opacity 0 → none, 1 s, CSS `ease`, delays 400 / 500 ms, fires once when entering viewport |
| `fadeInRight` | Social rail | `translate3d(100%,0,0)` → none, 1 s, 300 ms delay |
| Split words scale | "Expertise", News H2 | Words split; even words start at `scale(0)`, odd at `scale(2)`, opacity 0 → 1, GSAP default tween, `start: top 86%`, plays once |
| Zoom-clipped film | Expertise video | `clip-path: inset(0 5%)`, `scale(.86)` → `inset(0)`, `scale(1)`, `sine.inOut`, scrub 1, triggered when the panel top reaches 450 px from viewport top |
| Scrubbed rise | Testimonial cards | `y: 10vw, opacity 0` → `0, 1`, stagger .5, scrub 2.5, `top 30%` → `bottom bottom` |
| Showcase slider | Projects | Autoplay 6 s, pauses on hover / hidden tab, swipe on touch. Info block re-enters `translateY(18px)` → 0, .6 s. Image fades (.45 s) then slow zoom to 1.07 over 6 s |
| Hero slideshow | Mobile hero | Fade, 1 000 ms transition, 4 000 ms per slide, loop |
| Image hover zoom | About mosaic | `scale(1.055)`, 1.1 s `cubic-bezier(.2,.7,.2,1)` |
| Card hover zoom | Process | `scale(1.06)`, .8 s ease |
| Button hover | Dark/gold buttons | Fill wipes away (brush-mask sprite, .7 s `steps(29)`) leaving a gold outline + dark text |
| Logo roll | Member companies | Logo duplicated vertically; hover rolls to the copy |
| Marquee | Footer brand name | Endless horizontal loop ≈ 100 px/s |
| Header | Sticky header | See §2 |
| Gold pulse / star spin | Showcase | Dot `box-shadow` pulse 2 s; star rotates 25 s linear |

`prefers-reduced-motion` disables the CSS keyframe animations on the reference.

## 5. Responsive transformations

| Width | Behaviour |
| --- | --- |
| 1920 | Same as 1440 with the 1300 px container centred (310 px side space); H2 caps at 64 px. |
| 1024 | Mobile header (90 px). Hero 614 px tall (video), no stats bar, rail kept. About stacks: text full width then mosaic full width (≈ 510 px tall). Showcase H2 wraps, stage 52/48. Pillars 2 × 2. Process cards become a horizontal scroll-snap track (2 per view) with dots + arrows. Testimonial cards ≈ 770 px wide. News 3 columns. Footer columns compress. |
| 768 | Hero ≈ 820 px tall. H2 32 px. Showcase keeps side-by-side stage with taller image. Pillars 2 × 2. News 2 columns. |
| 390 | Hero becomes a 422 px **image slideshow** (no video, no rail). Showcase stage stacks (350 px image, info below). Pillars 1 column. Process track 84 % card width. Testimonial cards ≈ 300 px. News 1 column. Newsletter stacks. Footer stacks. Never horizontal overflow at any width. |
