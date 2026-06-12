# Lorewells — Design Direction & System Spec

*For handoff into Claude Design (comps) → Claude Code / Cursor (build). This is the visual + interaction system, not the build. Premise: the site presents an established project with 3–5 finished films and abundant b-roll.*

---

## 0. Design Thesis

**"The lit room."** Lorewells lives in the dark interview room where one warm key light falls on the person telling their story. The site is predominantly dark and cinematic. Content **surfaces from black** as you scroll, the way a memory resolves. An **archival-catalog layer** — mono accession numbers, runtimes, dates, places — treats every ordinary life with the dignity of a catalogued record. The brand's "well" reads as *depth and warm light drawn up from darkness.*

One job for the homepage: **make a viewer believe this is a real, permanent, already-working archive — and make an organization or family want to be part of it.**

### Deliberate departures (hold the line against these)
The AI build tools default to a few looks for heritage/legacy briefs. We are explicitly *not* doing them:
- **Not** cream/parchment background with a high-contrast serif and a terracotta accent. (Reads light, new, and generic — the opposite of what we need.)
- **Not** centered-everything SaaS hero with a big stat + gradient. (Lorewells is editorial and cinematic, not a dashboard.)
- **Not** stock photography. Every image is warm documentary footage or a treated subject portrait. If a real asset doesn't exist for a slot, the slot uses grain + duotone + metadata, never a stock placeholder.

Dark is the primary mode. Light ("lifted") sections are the rare exception, used for emphasis — see §3.

---

## 1. Color System

Six tokens. Dark is the ground; gold is *light*, not decoration; bone is the rare lift.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#15110D` | Primary ground — the dark room. Warm near-black. |
| `--depth` | `#0F1C1A` | Alternate dark section — "well water," green-black. Adds depth without a new hue family. |
| `--key` | `#E0A94A` | **The accent.** Tungsten key-light gold. Glows, thin rules, small fills, primary buttons, focus rings, the lit headline. Treat it as *light*. |
| `--ember` | `#B5663A` | Secondary warm, used **sparingly** — a single small moment per section max (a rule, an active state). Optional; cut it before adding it. |
| `--bone` | `#ECE7DB` | Lifted archival paper (cool-warm, not cream). Body text on dark; background of rare "surfaced" inset sections. |
| `--mist` | `#A9A294` | Muted text/metadata on dark. Use for secondary/large text; keep body copy in `--bone` for contrast. |

**Usage rules**
- Default page is `--ink`. Alternate long sections to `--depth` for rhythm. Reserve `--bone` backgrounds for 1–2 "lifted" moments only (a pull-quote on paper, the founder's archive). Over-using bone collapses back into the default cream look.
- `--key` is the only saturated color most users notice. One gold gesture per section. Headlines can be `--bone` with a single gold element nearby, *or* gold themselves on emotional peaks — not both at once.
- Text contrast: `--bone` on `--ink`/`--depth` for all body (high contrast, AA+). `--key` on `--ink` for headings/large/UI only. `--ink` on `--key` for button labels. `--mist` only for metadata and large secondary text, never small body.

---

## 2. Typography

Three roles, each true to a different facet of the subject: the **book**, the **institution**, the **archive ledger**. All on Google Fonts (no licensing friction).

| Role | Face | Use |
|---|---|---|
| Display (the book) | **Newsreader** | Emotional headlines, pull-quotes, film subject names. Use the *italic* for tenderness ("…their stories die with them"). Weights 400/500. Editorial, bookish — chosen over Fraunces specifically to avoid the trendy high-contrast-serif default. |
| Body / UI (the institution) | **Hanken Grotesk** | Body copy, nav, buttons, labels, forms. Warm humanist grotesque — modern and *trustworthy*, which does the "legitimize" job a fragile all-serif site can't. Weights 400/500/600. |
| Metadata (the ledger) | **IBM Plex Mono** | Catalog IDs (`LW-003`), runtimes (`02:41:18`), dates, places, eyebrows, section numbers. Uppercase, letter-spaced. This is the archive's voice. |

**Type scale** (fluid; clamp min/preferred/max)

| Step | Size (clamp) | Face / treatment |
|---|---|---|
| Hero | `clamp(2.75rem, 7vw, 6.5rem)` | Newsreader 400/500, tight leading `1.02`, slight negative tracking |
| H1 | `clamp(2.25rem, 4.5vw, 3.75rem)` | Newsreader 500 |
| H2 | `clamp(1.75rem, 3vw, 2.5rem)` | Newsreader 500 |
| H3 | `1.375rem` | Hanken 600 |
| Body L | `1.1875rem` / leading `1.6` | Hanken 400 |
| Body | `1.0625rem` / leading `1.6` | Hanken 400 |
| Small | `0.9375rem` | Hanken 400/500 |
| Meta | `0.75rem`, tracking `0.14em`, uppercase | Plex Mono 500 |

**Treatment rules**
- Manifesto cadence: short declarative lines, generous line spacing, frequent line breaks for rhythm — set these as separate lines, not a justified block.
- Pull-quotes are oversized Newsreader italic with a single gold tick or rule. They are a primary design element, not decoration.
- Never set body copy in the serif. Serif = emotion and names; sans = everything functional; mono = facts.

---

## 3. Layout & Rhythm

- **Grid:** 12-col, max content width `1200–1280px`, wide outer margins. Editorial *asymmetry* is encouraged — offset headlines, films breaking the grid edge-to-edge. Avoid centering everything.
- **Spacing scale (8-based):** 8 / 16 / 24 / 40 / 64 / 96 / 128. Section vertical padding is large (`96–128px` desktop) — the brand voice is *unhurried*; let it breathe.
- **Section rhythm:** alternate `--ink` and `--depth` for most sections. Insert a `--bone` "lifted" section only 1–2× on the homepage, as a deliberate exhale (a quote, the founder). Films and b-roll go *full-bleed* against the dark; text content stays in the container.
- **Letterbox device (optional, hero + featured film only):** thin cinematic bars top/bottom of the hero film frame to signal "this is film." Don't overuse.

---

## 4. Signature Elements

Two, working together. These are the things the site is remembered by — build them well, keep everything else quiet.

**A. The key-light hero.** A dark void with a single off-center warm radial pool — a key light on an unseen subject — fine film grain over the whole frame, and the headline emerging *from* the dark (text-shadow softness, as if lit). Behind it, a slowed, muted b-roll loop at low opacity (the ambient room) under a dark gradient + grain for legibility. No bright UI chrome competing with it.

**B. The catalog metadata line.** Every film, and key sections, carry a mono accession line that dignifies the subject as a permanent record:
```
LW-003 · KOREA, 1951 · 02:41:18 · CENTRAL OREGON, OR
```
This single device does enormous work for the "established archive" feeling — it implies cataloguing, runtime, a real collection. Use it on film cards, the hero film, section eyebrows (`§ 02 — WHY IT MATTERS`), and the footer sitemap.

---

## 5. Motion

Restrained and purposeful — one orchestrated moment (hero), quiet reveals elsewhere.

- **Surfacing reveal:** on scroll-in, content fades up `~16px` and resolves from a slight blur to sharp over `600–800ms`, ease-out, staggered children `~80ms`. The "memory resolving" motif. Use on section entrances, not every element.
- **Hero:** grain always-on (very subtle); key light a slow opacity/scale "breathe"; b-roll slow playback, low opacity.
- **Film card hover:** poster warms (duotone shifts toward `--key`), play glyph draws in, runtime + chapter count surface. `200–300ms`.
- **Nav:** transparent over hero → solidifies to `--ink` with a hairline gold underglow on scroll.
- **`prefers-reduced-motion`:** kill b-roll (show a treated still), kill reveals (content static), keep hover color changes only. Required.

---

## 6. Imagery & Video Treatment (the established-archive engine)

This is the heart given the 3–5 films + b-roll premise.

**Treatment kit (applies to all footage/stills)**
- Warm duotone toward `--ink` shadows / `--key`–`--bone` highlights — unifies disparate footage into one collection.
- Film grain overlay, `~4–6%` opacity, on everything.
- Soft vignette + dark bottom gradient wherever text sits over image.
- Aspect ratios: **16:9** for film frames; **4:5 portrait** for subject posters (portrait = a person, intentional).

**Featured film (homepage, near top)**
- Large 16:9 or full-bleed frame, optional letterbox, treated poster, centered play affordance (thin gold ring + triangle), catalog metadata overlay bottom-left, subject name in Newsreader. Clicking opens a lightbox player. This is the proof asset — give it room.

**The Archive grid (3–5 films + room to grow)**
- 4:5 portrait posters in an asymmetric/editorial grid (not a uniform 3×). Each tile: treated portrait, grain, hover reveals runtime + chapter count, mono metadata line, subject name + one-line descriptor in serif.
- Include a final **"Founding Cohort — more stories being preserved"** tile so the collection reads as *alive and growing*, not finished. This sells "established" honestly.
- Index/Stories page = the same grid expanded, filterable by category (Veterans / First Responders / Elders / Faith / Community).

**B-roll (ambient texture)**
- Muted, low-opacity loops behind the hero and between major sections (section "interstitials"). Always under grain + dark gradient. Never competes with text; it's atmosphere — hands on a steering wheel, a wedding photo on a mantel, a porch, a ranch at dusk.
- Mobile: replace heavy loops with treated stills for performance.

**Direction for the real shoot + placeholder treatment**
- Subjects in warm documentary key light against dark. No cold/stock imagery, ever. Placeholders during build should be black frames with grain + the gold catalog line, *not* gray boxes — even empty states stay on-brand.

---

## 7. Component Specs

**Navigation** — transparent over hero; on scroll → `--ink` bar, hairline gold rule. Left: `LOREWELLS` wordmark (Newsreader or refined letterspaced mono). Center/right: lean links — Mission · Stories · Why It Matters · Partner. One primary CTA button: *Partner with us*. Mobile → full-screen `--ink` drawer.

**Buttons**
- Primary: `--key` fill, `--ink` text, no/low radius (`4px`), subtle gold glow on hover.
- Secondary: `--bone` hairline outline, `--bone` text, fills faint on hover.
- Ghost/text: gold text with animated underline. Labels are active verbs (*Partner with us*, *Preserve a story*, *Sponsor an interview*, *Nominate someone*).

**Film card** — see §6. States: rest (treated, metadata visible), hover (warm, runtime + chapters surface, play ring draws), focus (gold ring).

**Sponsorship tier cards** — three tiers, the **middle ($30K Central Oregon Veterans Pilot) emphasized** (gold top rule, slight lift, "Recommended" mono tag). Each: tier name (serif), price (large), one-line who-it's-for, plain-language deliverables, CTA. Dark cards on `--depth`.
```
$5,000            $30,000  ◆ RECOMMENDED        $75,000
One interview     Six-veteran pilot              Legacy collection
…                 …                              …
[Sponsor]         [Fund the pilot]               [Start a collection]
```

**Pull-quote** — oversized Newsreader italic, `--bone` or `--key`, single gold tick. Used for manifesto lines and the core quote.

**Family testimonial** — restrained: short serif quote, mono attribution (`— Susan R. · daughter`), optional small treated still. One, maybe two on the homepage. (Placeholder until real ones exist; keep tasteful, never put words in identifiable real people's mouths.)

**Forms — the two doors** — clearly separate intents:
- *Partner with us* (orgs): org name, role, members, interest. Qualifying, calm.
- *Preserve a story* (families): who, relationship, why now. Gentle, low-pressure.
- *Nominate someone*: one screen, minimal. Builds list + pipeline.
- Style: dark fields on `--ink`, `--bone` text, `--key` focus ring + label highlight. Submit = primary button; success state = directional, on-brand ("Your nomination is preserved. We'll be in touch.").

**Footer** — `--ink`, catalog-style sitemap (mono section numbers), the core quote in serif, contact, the two-door CTAs repeated, quiet legal line.

---

## 8. Homepage Section Order (long-scroll)

Message ladder: emotion → stakes → proof → how → why → who → ask. Order:

1. **Hero** — key-light + b-roll. *Every Person Is a Library.* Subline. Dual CTA (Partner / Preserve). Catalog line.
2. **The Stakes** — manifesto cadence, short lines, `--depth`. "When a person dies, we lose a library."
3. **Featured Film** — the proof asset, full-bleed, metadata, lightbox.
4. **The Archive** — 3–5 film grid + founding-cohort tile. The "established" moment.
5. **How It Works** — 5-step process, mono-numbered, restrained. Deliverables + production quality.
6. **Why It Matters** — research/social impact, condensed; credibility for funders. Optional lifted `--bone` inset with a key statistic-as-sentence (not a SaaS stat block — phrase it as language).
7. **Who We Serve** — veterans, first responders, elders, faith, community. Treated b-roll per category.
8. **Partner / Sponsor** — three tiers, pilot emphasized.
9. **For Families** — the warm door, softer register, *Preserve a story* CTA.
10. **Founder** — Jacob's credibility + craft (the proof substitute). A `--bone` lifted "archive card" treatment works here.
11. **The Apprenticeship** — brief supporting narrative: preserve one generation, train the next.
12. **Final CTA** — dark, the core quote, dual doors repeated.
13. **Footer.**

### Secondary pages
Stories/Archive (index), Why It Matters (full), For Organizations, For Families, About/Founder, The Apprenticeship, Contact/Nominate. All inherit the system; Stories is the priority secondary page.

### Key wireframes (ASCII, for Claude Design)
```
HERO
┌──────────────────────────────────────────────┐
│  LOREWELLS            Mission Stories … [Partner]│  ← transparent nav
│                                                │
│        ·  (warm key-light pool, off-center)    │
│        Every Person Is a Library.              │  ← Newsreader, lit
│        Lorewells preserves the stories,        │
│        memories, and wisdom of people through  │
│        long-form film.                         │
│        [ Partner with us ]  [ Preserve a story ]│
│  LW-ARCHIVE · CENTRAL OREGON · EST. ____        │  ← mono catalog line
│   (muted b-roll loop beneath, grain over all)  │
└──────────────────────────────────────────────┘

THE ARCHIVE  (asymmetric, portraits 4:5)
┌───────────┐ ┌───────────┐ ┌───────────┐
│  ▷        │ │  ▷        │ │  ▷        │
│ Earl      │ │ Marigold  │ │ James     │
│ Korea '51 │ │ A Rancher │ │ Vietnam   │
│ LW-003    │ │ LW-001    │ │ LW-004    │
│ 02:41:18  │ │ 01:58:40  │ │ 03:06:22  │
└───────────┘ └───────────┘ └───────────┘
┌───────────┐ ┌───────────────────────────┐
│  ▷ Ruth   │ │ Founding Cohort —          │
│ Faith     │ │ more stories being         │
│ LW-002    │ │ preserved.   [Nominate]    │
└───────────┘ └───────────────────────────┘

SPONSORSHIP (middle emphasized)
┌────────┐ ┌══════════┐ ┌────────┐
│ $5,000 │ ║ $30,000  ║ │ $75,000│
│ one    │ ║ PILOT ◆  ║ │ legacy │
│ [btn]  │ ║ [btn]    ║ │ [btn]  │
└────────┘ └══════════┘ └────────┘
```

---

## 9. Voice & Microcopy Direction

So the build tools write on-brand copy instead of filler:
- Reverent, plain, declarative. Manifesto rhythm (short lines). Urgency through **gravity, never gimmicks** — no countdowns, no scarcity, no exclamation hype. No emoji.
- Serif for emotion + names; mono for facts; sans for function.
- CTAs are active and specific: *Partner with us · Preserve a story · Sponsor an interview · Nominate someone · Fund the pilot.*
- Empty/success states stay directional and in-brand ("Your nomination is preserved.").

---

## 10. Accessibility & Quality Floor

- Text contrast AA (body `--bone` on dark passes comfortably; verify `--key` and `--mist` usages — confine `--mist` to large/secondary).
- Visible keyboard focus everywhere: `--key` ring.
- `prefers-reduced-motion` honored (§5).
- Semantic structure, real headings, descriptive alt text on every film poster (subject + descriptor).
- **Video captions + transcripts** — required for accessibility *and* perfectly on-brand: oral history is transcribed anyway. Surface a transcript affordance on the player.
- Responsive: hero scales, archive grid → single column, tiers stack (pilot first), nav → drawer, b-roll → stills on mobile.

---

## 11. Token Block (paste into Claude Code / Cursor)

```css
:root {
  /* color */
  --ink:    #15110D;
  --depth:  #0F1C1A;
  --key:    #E0A94A;
  --ember:  #B5663A;
  --bone:   #ECE7DB;
  --mist:   #A9A294;

  /* type */
  --font-display: "Newsreader", Georgia, serif;
  --font-body:    "Hanken Grotesk", system-ui, sans-serif;
  --font-mono:    "IBM Plex Mono", ui-monospace, monospace;

  /* scale (fluid) */
  --fs-hero: clamp(2.75rem, 7vw, 6.5rem);
  --fs-h1:   clamp(2.25rem, 4.5vw, 3.75rem);
  --fs-h2:   clamp(1.75rem, 3vw, 2.5rem);
  --fs-h3:   1.375rem;
  --fs-body-l: 1.1875rem;
  --fs-body:   1.0625rem;
  --fs-small:  0.9375rem;
  --fs-meta:   0.75rem;

  /* spacing (8-based) */
  --s-1: .5rem; --s-2: 1rem; --s-3: 1.5rem; --s-4: 2.5rem;
  --s-5: 4rem;  --s-6: 6rem; --s-7: 8rem;

  --maxw: 1280px;
  --radius: 4px;
  --grain-opacity: .05;
}
```
Map the same tokens into a Tailwind theme if building with Tailwind (`colors.ink`, `fontFamily.display`, etc.).

---

## 12. Build Handoff Notes

- **In Claude Design:** generate the hero, the archive grid, and the sponsorship section first from §4, §6, §8 — those three carry the identity. Iterate the hero until the key-light + grain + b-roll feels like a lit room, not a dark SaaS page.
- **In Claude Code / Cursor:** a custom cinematic build points to **Next.js + Tailwind** (tokens above as theme), with a lightbox video component and a CMS-backed Stories collection so Jacob can add films without code. *Tradeoff flagged earlier:* if Jacob must self-manage with zero dev, a premium template platform is faster but will fight this dark cinematic system — the custom route is what makes "the lit room" possible.
- **Keep flexible:** number of films, category filters, tier copy, and the founding-cohort tile (so the archive can grow).
- **Don't let the tools drift:** if a comp comes back cream + centered + terracotta, it's reverted to default — point it back to §0 and §1.

---

*Open items before build that affect content, not design: legal/financial structure (donation language), confirmed film assets + metadata, and platform/maintenance owner. Design system holds regardless of those answers.*
