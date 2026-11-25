# Footer reference audit: Sujimoto Group

The site footer (`src/components/layout/SiteFooter.tsx`, content in `src/content/footer.ts`)
follows the footer of the Sujimoto Group website. Only the footer uses this reference; every
other part of the site still follows Palton Morgan (see the homepage and About audits).

- **Reference:** https://sujimotonig.com/ (homepage; About, Contact and Blog pages checked)
- **Audited:** 25 November 2026, with Playwright in Chromium at 1920, 1440, 1024, 768 and 390 px
- **Method:** computed styles and element geometry read from the live page, the stylesheet
  rules that target the footer, and screenshots of the footer region at each width. The intro
  video overlay and fixed background video were hidden before the screenshots were taken.
- **Copied:** layout, proportions, type scale and interaction only. No code, copy, logo,
  icons or images were taken from the reference.

## 1. Observed structure

The footer is identical on every page checked. It has two parts:

1. **Contact band**, the element directly above `<footer>`: two equal panels side by side.
   - Left (`#1d1d20`): "Follow Us" heading and a centred row of six social icons.
   - Right (`#2b292d`): "Let's Talk" heading and a copper outline pill button, "Enquiries".
2. **Footer** (`#141414`): four columns in a 1300 px container, then a copyright bar.
   - Brand: the logo (image 168 px wide) with an uppercase descriptor line below it.
   - Useful links: three text links.
   - Office: address, phone and email, each with a small leading icon.
   - Careers: one sentence and a white outline pill button, "Explore careers".
   - Copyright bar: a 1 px white/50 % hairline, then the copyright line.

## 2. Measurements (1440 px)

| Element | Observed |
| --- | --- |
| Band | 400 px tall; each panel 50 %; padding 140 px top and bottom, 70 px sides; content centred |
| Band heading | Serif display face, 30 px / 33 px, weight 500, white; 20 px above, 10 px below |
| Band icons | 21 px glyphs, 10.5 px padding (42 px targets), about 53 px apart; `#f0f0f0`, gold on hover, 0.3 s |
| Band button | Starts 30 px below the heading |
| Footer | 409 px tall; padding 70 px top and bottom; container 1300 px, centred |
| Grid | `auto auto auto auto`, resolving to 256 / 146 / 311 / 587 px (19.7 / 11.3 / 23.9 / 45.2 %); no column gap |
| Column title | 14 px / 20 px, weight 500, uppercase, letter-spacing 1 px, `#f0f0f0`, 28 px below |
| Links and text | 14 px / 20 px, 14 px apart (rows at 48, 82 and 116 px below the title); links `#cfcfcf`, text `#f0f0f0` |
| Link hover | Colour turns gold (`#b56350`); no underline |
| Logo | Visual centre about 62 px below the column titles; descriptor line 122 px below them |
| Pill button | 37 px tall, padding 9.5 × 28 px, 11.2 px uppercase, weight 500, letter-spacing 3 px, 1 px border, radius 50 px |
| Pill hover | A circle of the border colour grows from the centre (`scale(0)` to `scale(1.2)`, 0.3 s, `cubic-bezier(.35,.755,.42,.95)`); text turns dark (white pill) or white (copper pill) |
| Copyright bar | 70 px above, hairline `rgba(255,255,255,.5)`, 28 px padding, 14 px text `#e0e0e0` |
| Body font | Inter in the CSS, but it is never loaded, so the system sans-serif renders |
| Focus | Browser default outline only |

## 3. Responsive behaviour

| Width | Observed |
| --- | --- |
| 1920 | Same as 1440, with the 1300 px container centred (310 px margins) |
| 1440 | As measured above |
| 1024 | Same 4-column layout, but the container loses its side padding: content touches the viewport edges and the Office and Careers columns run into each other. This is a defect in the reference |
| ≤ 860 (768, 390) | Everything stacks. Band panels are full width with 42 × 28 px padding (about 210 px each). Footer padding 42 × 28 px. Columns become one column 28 px apart; a white/50 % hairline separates the brand block from the link groups. Logo above the descriptor, no overlap |
| 390 | Same as 768. The page as a whole overflows horizontally by 14 px, but the overflow is not caused by the footer |

## 4. Interaction and motion

- Link and icon hover: colour change only.
- Pill buttons: the radial fill described above.
- No entrance or scroll-triggered animation in the band or footer (none of the theme scripts
  target it).

## 5. Products Palace adaptation

| Reference | Products Palace | Why |
| --- | --- | --- |
| "Follow Us" + social icons | "Follow us" + icons, **only for profiles with a confirmed URL** | No real profile URLs exist yet (`socials` in `site.ts` are all `#`). Until one does, the panel shows **"Our first address"** and a white pill, **Find your place**, linking to the homepage's first-address section |
| "Let's Talk" + Enquiries pill | **"Let’s talk about home"** + the **register-interest form**: a pill email field and an accent pill, *Register interest*, with the existing note below | Register interest is the site's single primary action, and every *Register your interest* link targets this panel (`#contact`). There is no enquiries page to link to |
| Logo + "Redefining Luxury Living" | Products Palace logo (light tone, links home) + the official tagline **Luxury, for a purpose.** (uppercased by CSS only) | Brand identity |
| Useful links: Blog, Contact, Privacy Policy | **Home, About us, Our promise** | Only routes that exist. The privacy policy will be added when the page exists |
| Office: address, phone, email | **Lagos, Nigeria** only | Email and phone are unconfirmed, so they are `null` in `contact` and not rendered. They appear automatically once set |
| Careers + "Explore careers" | **Your next chapter**: "You’ve worked hard for this life. Picture a home that gives you room to live it." + **Who we build for** | No careers programme. The column becomes the brand invitation and leads to the households section |
| ©2026 Sujimoto Group… | **Copyright © Products Palace 2026** | Existing approved line |

### Visual mapping

| Reference | Products Palace |
| --- | --- |
| `#1d1d20` / `#2b292d` / `#141414` | `ink-900` / `ink-800` / `ink-950` (same brightness steps, warmer) |
| Serif heading (SangBleu, 30 px, weight 500) | `font-display` (Newsreader), 30 px, weight 400 |
| Inter / system sans, 14 px | Manrope, 14 px |
| Copper (`#b56350`) hover and button | Brass `accent`; text on the brass fill is `ink-950` for contrast |
| `#f0f0f0`, `#cfcfcf`, `#e0e0e0` | `white/95`, `white/80`, `white/90` |
| Grid 19.7 / 11.3 / 23.9 / 45.2 % | `19fr 10fr 23fr 48fr` with a 24 px gap: the columns start at the same points, and the gap stops columns touching at 1024 px |

### New styles

| Addition | File | Notes |
| --- | --- | --- |
| `--ease-pill` | `src/styles/theme.css` | `cubic-bezier(.35,.755,.42,.95)`, the reference's button easing |
| `btn-pill` | `src/styles/utilities.css` | Rounded outline button with the radial hover fill. Set `--pill-color` (outline, text, fill) and `--pill-hover-fg` (text on the fill). It is the only rounded button on the site: everywhere else buttons stay square |
| Removed: `text-outline` | `src/styles/utilities.css` | Only the old footer marquee used it |

No colour, font, spacing or container tokens were added or changed.

## 6. Comparison results (after refinement)

Element offsets below are measured from the top of the column titles.

| Measure (1440 px) | Reference | Products Palace |
| --- | --- | --- |
| Band height | 400 px (410 at 1024) | 409 px |
| Footer height | 409 px | 409 px |
| Column title x | 330 / 481 / 778 px | 321 / 470 / 781 px |
| Link rows | 48 / 82 / 116 px | 48 / 82 / 116 px |
| Logo visual centre / tagline | ≈ 62 / 122 px | 60 / 120 px |
| Pill button | 82 px, 37 × 213 px | 82 px, 38 × 209 px |
| Hairline / copyright | 220 / 251 px | 220 / 249 px |

Refinements made after the first comparison: column titles were rendering in the serif display
face (they are `h2`s) and now use the sans; link rows were 44 px apart because of the body line
height and now sit 34 px apart; the band was 461 px tall because of the register note, so its
bottom padding was reduced; the column ratios were tuned to match the reference start points;
a fourth link that duplicated the band's link was removed; the grid has the reference's 150 px
minimum row height; mobile spacing between column groups was matched.

### Remaining differences (intentional)

- **Register panel:** holds a form instead of a single button, so on stacked layouts it is
  taller (about 335 px instead of 204 px).
- **Follow panel:** shows the first-address link until a social profile is confirmed.
- **Gutters:** the site's own gutter (18 px at 390 px, 32 px from 1200 px) instead of the
  reference's 28 px on mobile, so the footer lines up with the page above it.
- **Breakpoint:** the layout stacks below 1024 px instead of 860 px. The reference's 4-column
  layout between 861 and 1023 px is cramped and its gutters disappear; ours keeps gutters and
  gaps at every width.
- **Type, colour and logo:** Products Palace fonts, brass accent and logo.
- **Focus:** the site's 2 px brass focus ring instead of the browser default.
- **Touch target:** pill buttons are 38 px tall (reference 37 px); social icons, when shown,
  are 44 px.

## 7. Missing or unconfirmed information

| Item | Where | Effect today |
| --- | --- | --- |
| Social profile URLs | `socials` in `site.ts` | Follow panel shows the first-address fallback |
| Email address (proposed: hello@productspalace.com) | `contact.email` | Not shown |
| Phone number | `contact.phone` | Not shown |
| Full office address | `contact.addresses` | Only "Lagos, Nigeria" is shown |
| Privacy policy page | `footer.links` | Not linked |
| Register-interest backend | `RegisterPanel` in `SiteFooter.tsx` | Validates and confirms locally only |
