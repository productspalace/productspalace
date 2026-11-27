# About page content

The implemented About page copy: section by section, with the purpose and intended feeling of
each. The copy lives in `src/content/about.ts` (and the shared brand messages in
`src/content/brand.ts`). This document explains it; if the two disagree, the code is current.
Voice rules: `docs/brand-voice.md`. Layout reference: `docs/about-reference-audit.md`.

## Storytelling strategy

The homepage shows what life in a Products Palace home could feel like. The About page explains
**why** the brand wants to make that life possible. It takes the visitor through seven steps, one
per section, and it deepens the homepage rather than repeating it: no headline or paragraph is
reused word for word.

| # | Section (component) | Anchor | Story step | Visitor should feel | Brand story source |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero (`AboutHero.tsx`) | `#top` | Recognition | "That's what I want from my home." | Our Story |
| 2 | Our story (`OurStory.tsx`) | `#our-story` | Understanding | "They know my day, and they started from the right question." | Prologue, Our Story |
| 3 | Our belief (`OurBelief.tsx`) | `#our-belief` | Connection | "That's what luxury should mean." | Our Belief |
| 4 | Purpose and vision (`OurPurpose.tsx`) | `#our-purpose` | Connection | "I know what they are for." | Our Story, Our Belief (proposed wording) |
| 5 | The lives we design around (`OurPeople.tsx`) | `#the-lives` | Imagination | "That's me, or who I'm becoming." | Our People |
| 6 | Our promise (`OurPromise.tsx`) | `#our-promise` | Reassurance | "I know what I can count on, and it isn't overstated." | Our Promise |
| 7 | Our first address (`FirstAddress.tsx`) | `#first-address` | Trust | "This is honest: it's planned, and they say so." | Our First Address |
| 8 | Closing (`AboutCTA.tsx`) | `#picture-it` | Action | "I'd like to be part of this." | Closing invitation of the brand story |

## Global

| Element | Copy |
| --- | --- |
| URL | `/about/` (`/about` redirects in dev and preview; see `docs/architecture.md`) |
| `<title>` | About Products Palace \| Luxury, for a purpose. |
| Meta description | Why Products Palace exists: homes planned around peace, privacy, safety and unhurried time with the people you love. Our story, our idea of luxury, the lives we design around and our first address. |
| Open Graph title | About Products Palace \| Home should give something back. |
| Open Graph description | We believe a home should give back what a demanding life takes: peace, privacy and time with the people you love. Luxury, for a purpose. |
| Canonical / `og:url` | Not set: the production domain is not confirmed (placeholder comment in `about/index.html`) |
| Navigation | About (current page) · Who we build for · Our promise · The homes. The last three link to homepage sections |

## 1. Hero: recognition

- **Purpose:** name the visitor's hope for home before introducing the company.
- **Kicker:** About Products Palace
- **H1:** Home should give something back.
- **Supporting copy:** We build for the people who carry Lagos’s ambition, and for one belief: the
  home you work so hard for should return what the day takes from you.

## 2. Our story: understanding

- **Purpose:** why Products Palace exists, built on the realities of a Lagos working day.
- **Kicker:** Our story · **H2:** It Began With **One Honest Question**
- **Body:**
  1. A Lagos day asks for everything: the early start, the long drive, the meetings that run late,
     the noise that follows you all the way to the gate. We know that day well, because we live it
     too. And we noticed how often home became one more thing to manage, instead of the place
     where the day finally lets go of you.
  2. So we began with a question: what should a home give back to the person who works this hard
     for it? Not more marble, or a chandelier to photograph. Peace. Safety. Privacy. Unhurried time
     with the people you love, and a quiet place to think about what comes next. Products Palace
     exists to answer that question, and everything we plan begins with it.
- **CTA:** Who we build for → `#the-lives` (same page)

## 3. Our belief: connection

- **Purpose:** the brand's interpretation of luxury and exclusivity.
- **Kicker:** Our belief · **H2:** What We Mean by **Luxury**
- **Body:**
  1. The word has been worn thin. Too often it is used to say, without quite saying it, that one
     person is above another. That is not the luxury we believe in.
  2. To us, luxury is whatever makes a good life possible. The freedom to rest without one ear on
     the gate. The time to be present at dinner instead of in traffic. The privacy to grow, as a
     person, a couple or a family. The space to think clearly. And, after years of hard work, the
     chance to enjoy what that work has made possible.
  3. Exclusivity means something similar. A gate is not there to keep the world beneath you. It is
     there so children grow up among good influences, and so home can be a place of rest rather
     than a stage. Exclusive, for a reason.
  4. So we don’t treat luxury as the destination. It is the foundation: steady enough that you can
     stop guarding your peace and start living from it.

## 4. Purpose and vision: connection

> **PROPOSED wording, not approved corporate statements.** Both are derived from the brand story
> ("what does a home owe the person who works this hard?" and "every home begins with a person and
> a season of life"). Confirm or replace before launch.

- **Our Purpose:** To create homes that give back what a demanding life takes: peace, safety,
  privacy and unhurried time with the people you love.
- **Our Vision:** Communities where ambition and a good home life support each other, and every
  season of life has room to grow.
- Section heading (visually hidden): Our purpose and vision.

## 5. The lives we design around: imagination

- **Purpose:** each household recognises its own season of life through everyday moments, not
  demographics. New scenes; the homepage carousel uses the brand story's own scenes.
- **H2:** The Lives We Design Around
- **Intro:** Every home we plan begins with a person and a season of life. These are the people we
  picture when we sit down to draw.

| # | Household | Season | Copy | Planned for them |
| --- | --- | --- | --- | --- |
| 01 | The one who is building | Focused professionals | You need a home that protects your focus. A quiet morning at the desk before the city wakes. An evening nobody interrupts, so the business plan, the exam or the promotion finally gets your full attention. Close enough to the city that the hours count, and calm enough to rest when the work is done. | (none: the brand story ties this household to no size) |
| 02 | The newlyweds | A new marriage | A new marriage needs room to grow without an audience. Your own front door, your own routines, and evenings that belong to the two of you: cooking together, talking late, learning how to become one household. Nobody drops in unannounced, and nobody’s opinion comes through the wall. | Two-bedroom maisonette |
| 03 | The growing family | Young children | Children need space to play, and parents need peace of mind while they do. A play area within sight of home, neighbours who share your values, and a room each child can make their own. The kind of place where Saturday traditions begin, and childhood happens close to the front door. | Three-bedroom maisonette |
| 04 | The family that has arrived | Generations together | This is the season of gathering. Room for your parents at Christmas, for the children home from school, for the friends who stay late. Trusted help close at hand, space for every guest’s car, and a home that feels like the reward for years of work, and the beginning of a family legacy. | Four-bedroom maisonette |

**Interaction:** on desktop the image beside the list is sticky and cross-fades to the household
being read (or hovered). Below 1200 px each household shows its own image.

## 6. Our promise: reassurance

- **Purpose:** the five principles of the brand story as commitments the brand designs for, never
  as guarantees.
- **Kicker:** Our promise · **H2:** The Conditions for a **Good Life**
- **Intro:** We don’t think of these as features. They are what we believe a good life needs, and
  five commitments we hold ourselves to in everything we plan.

| Principle | Headline | Copy |
| --- | --- | --- |
| Safety | Rest without one ear on the gate. | A secure, managed community, planned so you can stop checking the locks twice and children can simply be children. |
| Quietness | Stillness, by design. | Homes planned for calm, so rest comes easily, conversations are unhurried and focus doesn’t have to be fought for. |
| Community | Neighbours who respect your privacy. | A small community of professionals and families who value courtesy and decency, and who may, over a Saturday game, become friends. |
| Time | More evenings, less traffic. | Locations chosen with the commute in mind, because every hour saved on the road is an hour returned to the people you love. |
| Lasting quality | Built to be lived in. | Homes built with care and integrity, intended to serve you well for years after the keys are handed over. |

**Layout (Nov 2026 refinement, `docs/selective-ui-refinement.md` §5.1):** the page's one dark band.
One photograph drifts under a deep ink tint; kicker, title and intro are centred; the five
principles sit in five columns from 1200 px (3 + 2 from 1024, 2 per row from 768, a left-aligned
list on phones), each with its brass initial in a hairline circle. A brass hairline is drawn down
from the band into "Our first address". Copy unchanged.

## 7. Our first address: trust

- **Purpose:** present the pilot as the planned, physical expression of the philosophy, and be
  explicit that it is not built.
- **Kicker:** Our first address · **H2:** Every Promise Needs a **First Proof**
- **Status pill:** Planned pilot development
- **Body:**
  1. Our pilot development is where everything on this page is meant to become something you can
     walk through and live in. It will bring every household in this story together behind one gate.
  2. It is still being planned. We’ll share the location, the homes in full and the timeline once
     they are confirmed. For now, this is what we are planning, and why.
- **Image:** chip "Planned", caption "Illustrative image, not the development".
- **Planned features → the life they support** (all from the brand story):

| Feature | Copy |
| --- | --- |
| Two, three and four-bedroom maisonettes | A home for each season of life, from a first home together to a house full of generations. |
| Boys’ quarters with every home | Room for the help you rely on, without giving up your privacy. |
| A padel court | The weekend game that turns neighbours into friends. |
| A children’s play area | Somewhere to run, and to wobble on a first bicycle, within sight of home. |
| Generous parking | Easy arrivals on ordinary evenings, and room for every guest when the family comes home. |
| One protected, managed community | A gate that closes gently behind you, and quiet streets on the other side of it. |

- **CTA:** Find your place → `/#first-address` (the homepage's first-address cards)

## 8. Closing: action

- **Purpose:** leave the visitor with the brand's central question, then one clear next step.
- **H2:** What Will Your Home **Give Back**?
- **Quote (the brand story's closing invitation):** “For now, we simply invite you to picture it. A
  gate that closes gently behind you. A street that knows your name. A home that gives you back to
  yourself, and to the people you love.”
- **Signature:** Products Palace · *Luxury, for a purpose.*
- **CTA:** Register your interest → `#contact` (the register form in this page's footer)

## Calls to action on this page

| Label | Destination | Works |
| --- | --- | --- |
| Who we build for | `#the-lives` (same page) | Smooth scroll |
| Find your place | `/#first-address` | Loads the homepage and scrolls to the section |
| Register your interest | `#contact` (footer on this page) | Smooth scroll to the form |
| Header *Register interest* | `#contact` | Same |

## Unconfirmed information

| Item | Where | Status |
| --- | --- | --- |
| Purpose and vision statements | Section 4 | PROPOSED wording; needs approval |
| "Lagos’s ambition" in the hero | Section 1 | The brand story is set in Lagos; the location of the first development is **not** stated anywhere on the page |
| "A secure, managed community" | Promise: Safety; feature list | From the brand story; confirm how security will be run |
| "Locations chosen with the commute in mind" | Promise: Time | From the brand story; confirm for the specific site |
| Location, home details, timeline of the pilot | Section 7 | Deliberately not stated ("once they are confirmed") |
| Register-interest form | Footer | Still has no backend (unchanged from the homepage) |
| All photography | `aboutImages`, `aboutPeopleImages` in `src/content/assets.ts` | TEMP placeholders; see `/asset-manifest.md` |
| Canonical URL / `og:url` | `about/index.html` | Needs the production domain |
