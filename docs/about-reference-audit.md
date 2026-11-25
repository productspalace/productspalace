# About page reference audit

Reference: `https://paltonmorgan.com/about-us`, inspected on 24 Nov 2026 with headless Chromium
(Playwright 1.62) at 1920 × 1080, 1440 × 900, 1024 × 768, 768 × 1024 and 390 × 844.
Measurements come from the rendered DOM (`getBoundingClientRect`, `getComputedStyle`), the page's
Elementor animation settings (`data-settings`) and screenshots taken at load, after 1.5 s, after
5 s and after scrolling through the page. Nothing proprietary (code, copy, photographs, logos) was
copied; only layout, proportions, timing and interaction patterns were used.

Each finding is marked **Observed** (measured or seen) or **Inferred** (our reading or
recommendation). The homepage audit (`docs/homepage-reference-audit.md`) covers the shared
header, loader, footer and floating utilities. The About page reuses all of them unchanged.

## 1. Page entrance and navigation

| Aspect | Finding | Status |
| --- | --- | --- |
| Navigation model | Multi-page WordPress site: clicking *About* is a full document load (`/about-us`), not a client-side route change | Observed |
| Loader | The same loader as the homepage (black layer, ring, logo) paints first and fades once `window.load` fires. At 1.5 s the page was still under the loader | Observed |
| Exit transition on the old page | None. The browser simply unloads it | Observed |
| Entrance after the loader | Hero kicker + H1 (one widget) and paragraph play `fadeInUp` with 400 ms delay; the social rail plays `fadeInRight` with 300 ms delay | Observed |
| Header | Same transparent desktop header over the hero; the *About* item is underlined (active state). Below 1200 px: the 90 px white bar | Observed |
| Scroll position | Lands at the top (`scrollY 0`) | Observed |
| Sticky header after scrolling | Not captured on this page (our automated scroll may not have triggered it). The homepage behaviour is assumed to apply | Inferred |

## 2. Section sequence (1440 px, document height 4 706 px)

| # | Section | y / height | Structure | Status |
| --- | --- | --- | --- | --- |
| 1 | Hero banner | 0 / 666 | Full-width photo, `background-size: cover`, darkened by an overlay (≈ 50–60 %). Padding 245 / 15 / 121. Left column on the 1300 px container: kicker (12 px, weight 500, 5.4 px tracking ≈ 0.45 em, gold), H1 80 px serif weight 300, line-height 1, tracking −0.02 em, then paragraph 16 px / 25.9 px at 80 % white, max 500 px wide. Social rail on the right (x ≈ 1388, y 345–565) | Observed |
| 2 | Intro split | 666 / 780 | Image 718 × 700 at x = 55 (80 px top padding, flush to section bottom). Text column 532 px at x = 853: kicker with hairline to the column end, H2 57.6 px (4 vw) on two lines with a gold highlighted phrase, two 16 px paragraphs (500 px wide, warm brown), dark 228 × 54 button with gold hairline | Observed |
| 3 | Second split ("journey") | 1 446 / 853 | Text column 482 px at x = 105 (35 px inset), H2 130 px below the section top, no kicker, four paragraphs. Image 718 × 600 at x = 667 (80 px top padding), `object-position: 50% 100%` | Observed |
| 4a | Grey band: statement cards | 2 298 / 429 | Page background `#f5f5f5`. Two white cards 491.5 × 269 centred with a 4 px gap, padding 48 / 40, square corners, no shadow, 3 px gold bottom border (two different golds). H3 40 px serif 300 centred; text 20 px / 32.4 px centred, max 412 px | Observed |
| 4b | Grey band: values | 2 727 / 490 | Image 502 × 400 left (x = 70). H3 40 px at x = 602, then three entries led by a single 56 px gold serif letter (x = 617) with 16 px text beside it (x = 679, 676 px wide) and a bold lead phrase | Observed |
| 5 | Closing quote ("commitment") | 3 217 / 502 | White. Large pale quote glyph top-left. H2 57.6 px centred with a gold phrase. Italic 19.2 px / 28.8 px quote, 1 100 px wide, centred. Name 16 px uppercase, 4.8 px tracking, gold; role 15 px muted | Observed |
| 6 | Footer | | Identical to the homepage (newsletter band, columns, outlined marquee) | Observed. Since replaced site-wide by the Sujimoto-referenced footer (`docs/footer-reference-audit.md`) |

At 1920 px the same layout centres on the 1300 px container; H2s cap at 64 px, the H1 stays 80 px.

## 3. Typography

| Role | 1920 | 1440 | 1024 | 768 | 390 | Status |
| --- | --- | --- | --- | --- | --- | --- |
| H1 (serif 300) | 80 | 80 | 66.6 | 49.9 | 44.8 | Observed |
| H2 (serif 300) | 64 | 57.6 | 41 | 32 | 32 | Observed |
| H3 card / values title | 40 | 40 | 40 | 40 | 40 | Observed |
| Values initials | 56 | 56 | 56 | 56 | 56 | Observed |
| Body | 16 / 1.62 | same | same | same | same | Observed |
| Card text | 20 / 1.62 | same | same | same | same | Observed |
| Kicker | 12 px, 0.45 em tracking, uppercase, weight 500 | | | | | Observed |

## 4. Imagery

- Every image is a square-cornered `object-fit: cover` crop. There are no rounded corners on this page
  (unlike the homepage cards). **Observed**
- Images do not animate on entry. Only text widgets carry Elementor animations. **Observed**
- No parallax, scrubbed or pinned effects; no ScrollTrigger instances were registered on the page. **Observed**
- Hover zoom on images could not be confirmed in automated testing. **Not measured**

## 5. Motion inventory

| Effect | Where | Parameters | Status |
| --- | --- | --- | --- |
| `fadeInUp` | Kickers + headings, paragraphs, cards, values entries, quote | CSS, 1 s `ease`, delay 400 ms (500 ms for the button), once, on entering the viewport | Observed |
| `fadeInRight` | Social rail | 1 s, 300 ms delay | Observed |
| Loader fade | Every page load | See homepage audit | Observed |

## 6. Responsive transformations

| Width | Behaviour | Status |
| --- | --- | --- |
| 1024 | Mobile header (90 px). Hero 466 px. Intro split flips: text left (370 px), image right 584 × 700 running to the viewport edge. Second split stacks: text, then image 584 × 600 (≈ 57 %). Cards stay side by side. Values stack: list, then image 380 × 400 | Observed |
| 768 | Hero 449 px. Intro split still side by side with the image bleeding right (431 × 700); text **centred**. Second split stacked, image 431 × 600. Cards side by side | Observed |
| 390 | Hero 418 px, no social rail. Everything stacks and centres. Intro and second-split images become full-bleed 390 × 400. Cards stack. Values centred with the initial above the text; image 360 × 200 | Observed |
| All | No horizontal overflow | Observed |

## 7. What the reference relies on that Products Palace cannot use

| Reference content | Why it cannot be used | Adaptation |
| --- | --- | --- |
| Founding year, staff numbers, units delivered, locations under construction | No such facts exist for Products Palace (content accuracy rules) | The second split carries the brand's belief about luxury instead |
| Vision / mission statements | Products Palace has no approved statements | Same card pattern, with **proposed** purpose and vision wording (flagged in `docs/about-page-content.md`) |
| Values acrostic | Not part of the brand story | The pattern carries the four households ("the lives we design around") |
| Executive's signed quote | No named executives may be invented | The brand story's closing invitation, signed by the brand with the tagline |
| Board of directors button | No such page | Button scrolls to the households on the same page |

## 8. Recommendations applied (inferred)

1. Use the same multi-page model, so the shared loader replays on each page and metadata is static.
2. Keep the reference's banner → split → split → grey band → closing quote rhythm, then add two
   sections the brand story requires (promise, first address), built from the same patterns.
3. Keep text left-aligned on tablets and phones: the homepage never centres body copy, and long
   centred paragraphs are harder to read. This is a deliberate deviation.
4. Add one restrained image entrance (a mask that opens upwards while the image settles from a
   slight zoom). The reference has none; it is an addition, gated by `prefers-reduced-motion`.
