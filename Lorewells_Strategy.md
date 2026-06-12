# Lorewells — Marketing Site: Strategy & Siteplan

*Scope of this engagement: **strategy + site structure (IA) only.** Visual design is being produced separately in Claude Design; the build (Next.js + Tailwind per the design file) is deferred. This document is structure-first by design.*

---

## Context

**Lorewells** (Jacob McLane, Central Oregon) is a pre-launch **501(c)(3)** oral-history preservation project — *"Every Person Is a Library."* It preserves the life stories of veterans, first responders, elders, and community figures through long-form cinematic interviews. The emotional engine is the core line: *"The greatest tragedy is not that people die. The greatest tragedy is when their stories die with them."*

Two strong source documents already exist:
- **`Lorewells Current.docx`** — the master content doc (manifesto, research/impact, funding proposal, tiers, founder bio, starter copy). Rich, conversion-ready copy.
- **`Lorewells_Design_Direction.md`** — "the lit room" visual system. Excellent and build-ready.

The gap this plan fills: a **conversion-oriented site structure** that (a) works **pre-launch with no real films**, (b) routes **two equal audiences** (orgs + families) cleanly, and (c) leans on the **501(c)(3)** status — translating the existing content and design system into a high-converting information architecture.

**The defining constraint:** the design file assumes an *established archive of 3–5 finished films*. There is none. So the site cannot borrow trust from a body of work — it must **manufacture trust from the founder, the craft, the research, and the nonprofit status**, and convert by **earning a conversation**, not by closing a $30K check on the page.

---

## Part 1 — Strategy

### 1.1 What "high-converting" actually means here

This is **not** e-commerce checkout. Nobody wires $30,000 from a cold homepage. The realistic conversions, in order of friction:

| Conversion | Friction | Audience | Where it closes |
|---|---|---|---|
| **Nominate someone** | Lowest | Anyone | On-site form (list/pipeline fuel) |
| **Donate / sponsor $5K** | Low–med | Families, individual donors | On-site (donation embed) |
| **Family inquiry** ("preserve a story") | Medium | Families | Form → human follow-up |
| **Org partner inquiry** ($30K/$75K) | High | Orgs/donors | Form → **conversation** → close offline |

**Implication:** the site is a **lead-generation + credibility + small-gift engine**. Its job is to earn the *inquiry* and the *nomination*, and to make the big asks legible enough that a human conversation can close them. We optimize for **qualified leads, nominations, and gifts** — not page-level transactions. Every page gets **one primary CTA** mapped to one of the rows above.

### 1.2 Trust is the bottleneck — the founder is the proof

Desire is already handled — the manifesto is genuinely moving. The thing standing between a visitor and action is **belief**: *Is this real? Can he actually deliver? Where does my money go?*

With no archive to point to, trust must come from five substitute sources, all of which Lorewells genuinely has:

1. **Founder credibility** — Jacob's real résumé: co-founder/producer of *Oregon Discussion* (a leading Oregon political podcast), media for *Frontline Outfitting* (nonprofit serving first responders/veterans), creative/media lead at *Shiloh Ranch Church*. This is real, verifiable, on-theme proof.
2. **Production capability** — the concrete kit (3× Canon R5C, cinema rigs, RØDECaster, 32-bit float audio, 4K) and the precise process. Specificity signals competence.
3. **His existing portfolio as the "b-roll"** — Jacob's *current* documentary/interview work (not Lorewells-branded) is the honest sizzle that proves the craft.
4. **The research/social-impact body** — Duke & Fivush, McAdams, oral-history institutions, life-review research. Credibility for funders.
5. **501(c)(3) + transparency** — registered nonprofit, tax-deductible, and a public "here's exactly where your $5,000 goes" breakdown (the doc already has the budget).

> **Key structural move:** the design file places the Founder at section #10. For a no-archive, trust-first site, **proof must come earlier**. We elevate founder + capability into the upper-middle of the homepage as the load-bearing trust moment.

### 1.3 The dual-door solution: shared funnel → clean fork

"Equal: orgs + families" is the hardest brief — a muddled message converts *neither*. The structural answer:

- **One shared emotional top-of-funnel.** Everyone needs the same manifesto, stakes, and "why it matters." Don't fork too early.
- **One clear fork, mid-to-lower page.** Two visually distinct, parallel "door" blocks — **Partner / Sponsor** (orgs) and **Preserve a Story** (families) — each with its own promise, proof, and CTA.
- **Two dedicated landing pages** (`/organizations`, `/families`) where the real conversion happens, each tuned to one audience. The homepage *routes*; the door pages *close*.
- **Persistent dual CTA** in the nav/hero so a visitor who already knows their door can skip the funnel.

This keeps the shared story intact while giving each audience an uncontaminated path.

### 1.4 Audience → message → offer map

| | **Organizations / Donors** | **Families** |
|---|---|---|
| Who | Veterans orgs, first-responder nonprofits, historical societies, churches, foundations, hospice | Adult children/grandchildren of aging parents; individuals |
| Core motivation | Honor members *while living*; preserve institutional/community memory; visible impact | Don't lose Mom/Dad's voice; "before it's too late" |
| Primary message | *"Honor them while they're still here. Preserve six stories that would otherwise be lost — and give your community a permanent archive."* | *"Sit your grandchildren down with your father, decades from now. Preserve his story while he can still tell it."* |
| Offer | **$30K pilot** (flagship) · $5K one · $75K legacy | **$5K** preserve one story |
| Proof they need | Founder competence, deliverables, 501(c)(3) transparency, "where the money goes," founding-partner naming | Dignity/reverence, gentleness, ethics (consent, boundaries), what they receive |
| Primary CTA | *Partner with us* / *Fund the pilot* → inquiry | *Preserve a story* → gentle inquiry |
| Register | Confident, civic, fundable | Warm, unhurried, low-pressure |

### 1.5 Turn the weakness into the offer: the "Founding Cohort"

Don't fake an established archive. **Lean into being first.** Reframe pre-launch as scarcity-through-meaning (on-brand: "gravity, not gimmicks"):

- The homepage "archive" becomes **"The Founding Cohort — the first stories we preserve,"** with placeholder/illustrative tiles framed as **reserved / in production**, not finished films.
- Donors get **founding-partner / naming** significance ("help preserve the *first six*").
- Catalog metadata on placeholders reads **`EST. 2026 · FOUNDING COHORT · RESERVED`** — *not* fake runtimes like `02:41:18`, which would imply a finished interview that doesn't exist.

This is honest, and early-adopter/founding-member psychology converts.

### 1.6 The 501(c)(3) advantage

Surface it deliberately — tax-deductibility is a top donor motivator:
- A persistent trust line: *"Lorewells is a registered 501(c)(3). Your gift is tax-deductible."*
- A **"Where your money goes"** transparency block using the existing budget breakdown (§4.13 of the doc). Transparency → trust → conversion.
- Frame the $5K/$30K/$75K as **gifts/sponsorships** (a 501(c)(3) giving frame), not a service purchase.

### 1.7 Honesty = brand integrity (an explicit guardrail)

The source doc repeatedly stresses **dignity and honesty**. Two rules the structure must enforce:
- **Play buttons must not deceive.** A play affordance on a placeholder should either (a) open the **one real brand/sizzle film** (recommended), or (b) carry honest microcopy ("A preview of the work — our first interviews begin with the pilot"). Never a dead button on a fake person's "finished" interview.
- **No fabricated testimonials.** Until real ones exist, carry the *research* and *founder proof*; never put words in an identifiable person's mouth.

### 1.8 How we'll measure it

So "high-converting" is real, instrument the funnel (GA4 or Plausible + form events):
- **Primary events:** partner-inquiry submit, family-inquiry submit, nomination submit, donation start/complete.
- **Routing health:** hero dual-CTA clicks, scroll-depth-to-fork, For-Orgs vs For-Families page entries, tier-card views.
- **Engagement:** brand-film play rate + completion.
- First job after launch: watch the **fork** (are both doors getting traffic?) and **A/B the hero CTA**.

---

## Part 2 — Siteplan (information architecture)

### 2.1 Sitemap

| Page | Priority | Job | Primary CTA |
|---|---|---|---|
| `/` Home | ⭐ | Shared funnel → fork; route both audiences | Dual: Partner / Preserve |
| `/organizations` For Organizations | ⭐ | Close orgs/donors: tiers, pilot, deliverables, 501(c)(3) transparency | Partner inquiry / Fund the pilot |
| `/families` For Families | ⭐ | Close families: gentle, $5K, process, what you receive | Preserve a story (inquiry) |
| `/why-it-matters` Why It Matters | High | Research/impact; funder credibility | Contextual → both doors |
| `/about` About / Founder | High | Jacob's credibility, ethics, apprenticeship summary | Partner / Preserve |
| `/stories` The Collection | Med | Founding cohort now; real films later | Nominate |
| `/nominate` Nominate | Med | Lowest-friction list/pipeline builder | Submit nomination |
| `/give` Donate / Sponsor | Med | 501(c)(3) giving: tiers, where-money-goes, embed | Donate |
| `/contact` Contact | Low | Catch-all | Message |

*MVP merge options:* `/give` can live inside `/organizations`; `/apprenticeship` can fold into `/about`; `/nominate` + `/contact` can share one forms page. The four ⭐ pages are non-negotiable.

### 2.2 Homepage structure (long-scroll)

Message ladder: **emotion → stakes → hope → proof → process → credibility → fork → invitation → ask.**

| # | Section | Job | Source copy | Primary CTA |
|---|---|---|---|---|
| 1 | **Hero** | Emotion + dual CTA + honest founding catalog line | Tagline + subline (§6) | Partner · Preserve |
| 2 | **The Stakes** | "When a person dies, we lose a library" | Manifesto (§2) | — |
| 3 | **The Turn** | Hope: "for the first time, we *can* preserve a life" | Manifesto (§2) | — |
| 4 | **The Vision Film** | The one real asset: 2–3 min brand film (Jacob's real b-roll + manifesto VO) | New (script) | Play |
| 5 | **Why This Is Real** | **PROOF (elevated):** founder + cinema kit + 501(c)(3) | §4.12 | → About |
| 6 | **How It Works** | 5 steps; reduce process uncertainty | §6 / §4.5 | — |
| 7 | **What You Receive** | Concrete deliverables = trust | §4.7 | — |
| 8 | **Why It Matters** | Research/impact, condensed (a "lifted" inset) | §3 | → Why It Matters |
| 9 | **Who We Serve** | Veterans · first responders · elders · faith · community | §4.3 | — |
| 10 | **Door A — Partner / Sponsor** | Orgs: 3 tiers, **pilot emphasized**, tax-deductible, where-money-goes | §4.9–4.13 | Fund the pilot → /organizations |
| 11 | **Door B — For Families** | Warm door: preserve a story, $5K, gentle | §4.4 / new | Preserve a story → /families |
| 12 | **The Founding Cohort** | Honest placeholder "archive" = invitation to be first | New microcopy | Nominate |
| 13 | **The Apprenticeship** | Secondary mission = bonus funder value | §5 | — |
| 14 | **Final CTA** | Core quote + both doors repeated | §2 / §7 | Partner · Preserve |
| 15 | **Footer** | Catalog-style sitemap, 501(c)(3) line, contact, both doors | — | Both |

**Deltas from your design file (and why):**
- **Elevated Founder/proof from #10 → #5.** With no archive, founder credibility is the load-bearing trust moment and can't wait until the bottom.
- **"Featured Film" → "The Vision Film" (#4)** and **"The Archive" → "The Founding Cohort" (#12).** No finished interviews exist; these become the brand film + an honest invitation.
- **Added "What You Receive" (#7).** Deliverable transparency is a major trust/conversion driver for both doors.
- **Sharpened the fork (#10/#11)** into two explicit, parallel doors routing to dedicated pages.
- Everything else aligns with your section order and design system.

### 2.3 Priority page structures

**`/organizations` (the org close):** hero (honor-them-while-living) → the partnership model → **the three tiers, pilot emphasized** → "What your organization receives" (§4.4) → **Where your money goes** (§4.13 budget) → 501(c)(3) + ethics → founding-partner framing → **Partner inquiry form** (qualifying) → secondary: download the one-page proposal (§7) as a PDF.

**`/families` (the family close):** hero (warm, "preserve his story while he can still tell it") → how it works (gentle, §4.5) → what your family receives (§4.7) → reverence & ethics (consent, boundaries, dignity — §4.14) → $5K framed as a gift → **Family inquiry form** (low-pressure: who, relationship, why now). Softer register throughout.

### 2.4 Conversion paths (the three journeys)

1. **Organization/donor:** Home (emotion → proof → fork) → Door A → `/organizations` → tiers + transparency → **Partner inquiry** → human follow-up → close offline.
2. **Family:** Home → Door B → `/families` → gentle process + ethics → **Family inquiry** (or direct $5K gift).
3. **Nominator (cross-cutting, lowest friction):** any entry → Founding Cohort / `/nominate` → **nomination** → pipeline that feeds both doors over time.

### 2.5 Forms & the two doors (structural)

| Form | Fields | Success state (directional, on-brand) |
|---|---|---|
| **Partner inquiry** (orgs) | Org, role, # members, interest/tier, message | "Thank you. We'll be in touch to start the conversation." |
| **Preserve a story** (families) | Your name, relationship, who, why now | "Your request is received. We'll reach out gently." |
| **Nominate** (minimal) | Nominee, why, your contact | "Your nomination is preserved. We'll be in touch." |
| **Donate** (501(c)(3)) | Embed (Donorbox / Givebutter / Stripe) | Platform default + thank-you + tax-receipt note |

Style per design file §7: dark fields, `--bone` text, `--key` focus ring. **Integrations (donation processor, form backend, email) are build-phase items — specced structurally here, not wired now.**

---

## Part 3 — Content mapping (existing → slots; gaps to write)

You "distilled the content," so most copy exists. Mapping + gaps:

**Ready to place (from `Lorewells Current.docx`):** manifesto (§2), all impact/research (§3), full proposal + tiers + budget + deliverables (§4), apprenticeship (§5), starter site copy (§6), one-pager (§7), founder bio (§4.12).

**New copy to write (the gap list):**
- **Brand-film script/VO** (2–3 min) — highest-leverage new asset.
- **`/families` warm page** — register is softer than anything in the doc today.
- **Founder bio polish** for the elevated homepage proof slot.
- **501(c)(3) trust line + "Where your money goes"** microcopy.
- **Founding-cohort / placeholder microcopy** (honest "reserved / in production").
- **Form fields + success states** (mostly in design file §7 — finalize).
- **SEO/meta** (titles, descriptions, OG) for the four ⭐ pages.

---

## Part 4 — Asset & placeholder strategy

- **One real video to make:** a 2–3 min **brand/manifesto film** from Jacob's existing b-roll + VO. This single asset does the work the missing archive can't, and it's within reach pre-launch. Everything else can be placeholder.
- **AI-generated portraits** = treated, on-brand placeholders for the Founding Cohort, framed as illustrative/reserved.
- **Play buttons** route to the brand film *or* carry honest preview microcopy — never a dead button implying a finished interview (see §1.7).
- **Catalog metadata** on placeholders uses `EST. 2026 · FOUNDING · RESERVED`, **not** fake runtimes.
- **Jacob's existing portfolio clips** (cleared for use) can seed the "Why this is real" proof and the brand film.

---

## Handoff & what's deferred

- **To Claude Design (you):** this structure + the homepage/section breakdown and copy slots feed your comps. Hold the line against the design file's "deliberate departures."
- **Deferred to build phase:** Next.js + Tailwind implementation, CMS-backed Stories collection (so Jacob adds films without code), lightbox video, donation-processor + form-backend + analytics integrations.

---

## Open items / decisions needed (before build, not before design)

1. **501(c)(3) status confirmation** — registered now, or pending? Governs whether we can state "tax-deductible" and show an EIN. (You selected 501(c)(3); confirm it's *active*.)
2. **Donation processor** — Donorbox / Givebutter / Stripe (affects the `/give` embed).
3. **Brand film** — is Jacob able to cut the 2–3 min vision film for launch? (Strongly recommended.)
4. **Portfolio clearance** — which existing clips can we use as proof/sizzle?
5. **Honesty pass** — confirm the placeholder/play-button approach in §1.7 is acceptable to Jacob.

---

## Verification (how we validate the siteplan)

Since the deliverable is structure (not code), "verification" = review against conversion + brand criteria:

- **Per-page CTA test:** every page has exactly one primary CTA mapped to a §1.1 conversion.
- **Fork test:** both doors are reachable within one scroll of the shared funnel and lead to dedicated pages.
- **Trust-load test:** founder/craft/research/501(c)(3) proof appears *before* the first ask.
- **Honesty test:** no placeholder implies a finished film exists; no fabricated testimonials.
- **5-second test:** a cold reader can state what Lorewells is and which door is theirs.
- **Stakeholder review with Jacob:** accuracy of all credibility claims, 501(c)(3) status, asset availability.
- **Post-build (later):** instrument the §1.8 events; watch fork balance; A/B the hero CTA.

---

## Next steps (what executing this plan produces)

On approval, the "strategy + siteplan now" deliverables are:
1. **Finalized sitemap** (§2.1) as a clean reference.
2. **Homepage section spec** (§2.2) — structure + copy slots, ready for Claude Design.
3. **`/organizations` + `/families` page specs** (§2.3).
4. **Content map** (§3) — existing copy slotted + the new-copy task list.
5. **Form specs** (§2.5).

Build (Next.js + Tailwind), visual comps (Claude Design), and integrations remain separate, later phases.
