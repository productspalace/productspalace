# Homepage content

The implemented homepage copy: section by section, with the purpose and intended feeling of each.
The copy itself lives in `src/content/home.ts` (homepage) and `src/content/brand.ts` (reused
brand messages). This document explains it; if the two disagree, the code is current.
Voice rules: `docs/brand-voice.md`.

The layout follows the reference homepage (`docs/homepage-reference-audit.md`). Each layout slot
now carries one step of the Products Palace story:

| # | Slot (component) | Anchor | Story step | Visitor should feel |
| --- | --- | --- | --- | --- |
| 1 | Hero (`Hero.tsx`) | `#top` | Recognition | "They understand the life I'm working towards." |
| 2 | Our story (`AboutSection.tsx`) | `#about` | Connection | "That's the question I've been asking about my home." |
| 3 | Seasons of life (`ProjectShowcase.tsx`) | `#people` | Imagination | "That's me, or who I'm becoming." |
| 4 | Luxury, redefined (`ExpertiseSection.tsx`) | `#belief` | Aspiration and belief | "That's what luxury should mean." |
| 5 | Our promise (`ProcessSection.tsx`) | `#promise` | Reassurance | "I know what I can count on." |
| 6 | The moment (`TestimonialsSection.tsx`) | `#moment` | Imagination (the emotional peak) | "I want to come home like that." |
| 7 | Our first address (`NewsSection.tsx`) | `#first-address` | Trust | "This is real, and it's coming." |
| 8 | Footer (`SiteFooter.tsx`) | `#contact` | Action | "I'd like to hear first." |

Component file names still follow the reference layout so history stays readable. What each one
renders is defined by its content object.

---

## Global

| Element | Copy |
| --- | --- |
| `<title>` | Products Palace \| Luxury, for a purpose. |
| Meta description | Homes planned for peace, privacy and unhurried time with the people you love. Two, three and four-bedroom maisonettes behind one gate. Luxury, for a purpose. |
| Open Graph | Title as above; description "A home for the life you're working towards. Two, three and four-bedroom maisonettes behind one gate." |
| Navigation | Our story · Who we build for · Our promise · The homes |
| Header CTA | Register interest → `#contact` |
| Loader | Logo only (no copy), `aria-label` "Loading Products Palace" |
| Logo descriptor | Real Estate (temporary lock-up; see the asset manifest) |

## 1. Hero: recognition

- **Purpose:** first impression. Name the visitor's aspiration before anything about property.
- **Brand principle:** the home exists to serve the life, not the reverse.
- **Eyebrow:** Luxury, for a purpose.
- **Headline (H1):** A home for the life you’re working towards.
- **Supporting copy (from 768 px):** Homes planned for peace at the end of the day, privacy to
  grow, and unhurried time with the people you love.
- **CTAs:** Register your interest → `#contact` · Who we build for → `#people` (from 768 px)
- **Highlights bar (desktop):** *Planned for our first address* · 2 · 3 · 4: Bedroom
  maisonettes · Boys’ quarters: With every home · Padel court: And a play area · One gate: A
  managed community
- **Layout note:** the reference has no visible headline. One was added (bottom-left, with
  legibility gradients), because the brand's first words carry the recognition step. The bar
  that used to hold invented statistics now holds facts from the brand story, labelled as
  planned.

## 2. Our story: connection

- **Purpose:** why Products Palace exists. The human problem, not a company profile.
- **Brand principle:** "What does a home owe the person who works this hard?"
- **Kicker:** Our story
- **Title:** A Home That **Owes You** Something.
- **Body:**
  1. Lagos rewards ambition, and asks a great deal of the people who carry it. The professional
     who leaves before sunrise and returns after dark. The young couple protecting a new marriage
     from a city that never stops talking. The parents who wonder what their children are
     absorbing beyond the gate. We know these people well, because we are these people.
  2. So we began with one honest question: what does a home owe the person who works this hard?
     Not more marble, or a bigger chandelier to photograph. It owes you peace, safety and
     unhurried time with the people you love. Everything we build is our answer.
- **CTA:** Who we build for → `#people`

## 3. Seasons of life: imagination

- **Purpose:** the visitor finds their own household and pictures a specific moment in the home.
- **Brand principle:** "Every home we create begins with a person and a season of life."
- **Kicker:** Our people — Seasons of life
- **Title:** Every Home Begins **With a Person.**
- **Header link:** Find your place → `#first-address`
- **Panel label:** Picture it · **Footer:** Designed around real lives · 01 / 04 counter
- **Slide CTA:** Register your interest → `#contact`
- **Details labels:** The home · What it makes possible

| Household | Moment | Title | Story | The home | What it makes possible |
| --- | --- | --- | --- | --- | --- |
| The one who is building | Sunday afternoon | Room to hear yourself think. | Half the city is at an owambe. You’re at the desk by the window, tea going cold. Nobody is knocking, no generator is roaring next door, and for the first time all week you can think clearly about the dream you haven’t told anyone yet. | Two, three or four bedrooms | Focus, rest and calm |
| The newlyweds | Friday night | Just the two of you. | Neither of you wants to go out. The drive home was short, and dinner is something you’re cooking together, badly and happily. Nobody drops in unannounced. Years from now, you’ll call these the good old days. | Two-bedroom maisonette | Privacy to grow together |
| The growing family | Saturday morning | The childhood you promised them. | Your son wobbles past on a bicycle a little too big for him, and you don’t worry: you know every child in the play area and every parent watching from its edge. Upstairs, your daughter has covered her own bedroom door with drawings. | Three-bedroom maisonette | Room for each child to grow |
| The family that has arrived | Christmas Eve | Room for everyone you love. | Your parents are settled in the guest room and the children are home from school. Every car has found a space. In the kitchen, someone is laughing too loudly over the jollof, and you think: this is what all those years of work were for. | Four-bedroom maisonette | Generations under one roof |

The "Price from" and "Property type" fields were removed; no prices exist.

## 4. Luxury, redefined: belief

- **Purpose:** state the philosophy that sets the brand apart from status-led luxury.
- **Brand principle:** luxury is the foundation, not the destination; exclusivity has a reason.
- **Title:** Luxury, Redefined.
- **Subtitle:** Not the destination. The firm ground you stand on while you build what truly matters.
- **Pillars:** Security: The kind that lets a mother sleep through the night. · Stillness: Room
  to finish the brief at home without fighting for silence. · Time: Minutes won back from traffic
  and spent at the dinner table instead. · Privacy: A protected community, so home is a place to
  rest, not a stage to perform on.
- **Film:** "Play the Products Palace brand film" (placeholder until a film exists).
- **Statement** (replaces the reference's member-company logos): *On exclusivity:* We don’t
  close the gate to feel above the world outside it. We close it so parents can choose the
  influences around their children, and home can be a place of rest. Signed: *Exclusive, for a
  reason. Luxury, for a purpose.*

## 5. Our promise: reassurance

- **Purpose:** turn the philosophy into five concrete commitments.
- **Brand principle:** "We do not think of these as features. They are the conditions for a good life."
- **Kicker:** Our promise · **Title:** What You Can Count On
- **Cards** (from `promises` in `brand.ts`):
  1. Safety you can feel: A secure, managed community, so you stop checking the locks twice and children are free to be children.
  2. Quiet you can hear: Homes planned for stillness, so rest, focus and conversation come easily.
  3. Neighbours you would choose: A small community of professionals and families who value privacy, courtesy and the same decent things you do.
  4. Time you get back: Locations chosen with the commute in mind. Hours saved on the road are hours returned to your family.
  5. Quality that lasts: Homes built with care and integrity, to serve you well long after the keys are handed over.
- **Closing line:** Not features, but the conditions for a good life. *See where they begin* → `#first-address`
- **Layout note:** five cards instead of four. They form a five-column grid from 1200 px; below
  that, the existing snap track is used.

## 6. The moment we build for: imagination (the emotional peak)

- **Purpose:** the founding image of the brand, told slowly. It replaces the reference's
  testimonials: there are no residents yet, so there are no quotes or ratings.
- **Brand principle:** "That moment is the reason Products Palace exists."
- **Kicker:** The moment we build for · **Title:** A Quarter Past Seven, on a Weekday Evening
- **Beats:**
  - 7:15 pm, The gate: The traffic is behind you now. The gate opens, and the guard greets you by name.
  - 7:16 pm, The threshold: Somewhere between the car door and the front door, the day lets go of you.
  - 7:18 pm, The quiet: Inside, the house is quiet in the way you hoped it would be. Upstairs, a child is reading aloud to no one in particular.
  - 7:19 pm, Home: Someone has left a light on for you. You set your bag down, and notice you’ve finally stopped carrying the day in your shoulders.
- **Closing line:** That moment is the reason Products Palace exists.

## 7. Our first address: trust

- **Purpose:** show the first proof, honestly labelled as planned. It replaces the reference's
  news articles.
- **Brand principle:** "Every promise needs a first proof."
- **Kicker:** Our first address · **Title:** Where the Story Begins
- **Intro:** Every promise needs a first proof. Our pilot development will bring every household
  in this story together behind one gate. We’ll share the full details of the homes in time. For
  now, picture it.
- **CTA:** Register your interest → `#contact`
- **Cards** (each marked *Planned*):
  - The homes: A maisonette for every season of life. Two, three and four-bedroom maisonettes,
    each with its own boys’ quarters, so the help you rely on is close at hand and your privacy
    stays your own.
  - Community: Weekends that turn neighbours into friends. A padel court for the Saturday game,
    and a play area where children can run within sight of home.
  - Arriving: Room for every car, and every guest. Generous parking, so arriving home is never
    the hardest part of the day, even when the whole family comes for Christmas.

## 8. Footer: action

- **Register band:** Register Your **Interest**. "Be among the first to hear as the details of our
  first address are shared. Only what matters, and only when there is something worth saying."
  Field "Your email address", button "Register interest", confirmation "Thank you. We’ll be in
  touch as the details are shared."
- **Brand line:** A home that gives you back to yourself, and to the people you love.
- **Columns:** Explore (site anchors + privacy policy) · What you can count on (the five
  promises) · Let’s talk about home (contact)
- **Marquee:** Luxury, for a purpose.

---

## Content requiring confirmation

| Item | Where | Status |
| --- | --- | --- |
| Register-interest form has no backend; it only shows a confirmation locally | `SiteFooter.tsx` | Needs a submission endpoint (CRM, email service) before launch |
| Office address (only "Lagos, Nigeria" is shown) | `contact.addresses` | PLACEHOLDER |
| Phone number (`+234 000 000 0000`) | `contact.phone` | PLACEHOLDER |
| Email address (`hello@productspalace.com`) | `contact.email` | Confirm the mailbox exists |
| Office hours (Mon – Fri, 9am – 5pm) | `contact.hours` | PLACEHOLDER |
| WhatsApp link | `contact.whatsapp` | PLACEHOLDER |
| Social profile URLs and which networks are used | `socials` | PLACEHOLDER |
| Privacy policy page | `footer.quickLinks` | Page does not exist yet |
| Whether the first development is in Lagos | Not stated on the site; the brand story implies Lagos but does not say so | Confirm before naming a location |
| Location and commute claims ("locations chosen with the commute in mind") | Promise 4 | From the brand story; confirm for the specific site |
| "Managed community" and the guard in the 7:15 pm scene | Hero bar, promises, moment | From the brand story; confirm how security will be run |
| Whether every home size suits "the one who is building" | Seasons of life, slide 1 | The brand story does not tie this household to a size |
| Brand film | Belief section | MISSING: the lightbox shows a placeholder notice |
| All photography | `src/content/assets.ts` | TEMP stock. Several images show **swimming pools**, which are not planned; replace them before launch |
| Final logo and the "Real Estate" descriptor | `Logo.tsx`, `index.html` loader | TEMP |
