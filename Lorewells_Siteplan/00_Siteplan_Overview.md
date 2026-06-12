# Lorewells — Siteplan Overview

*The master map. Read this first, then `01_Homepage_Spec.md`, `02_Secondary_Pages.md`, `03_Content_Map_and_Forms.md`. Pairs with `Lorewells_Design_Direction.md` (the visual system) — this doc is **structure**, that doc is **look**.*

---

## Strategy in brief

Lorewells is **pre-launch with no finished films**, serving **two equal audiences** (organizations/donors + families), as a **501(c)(3)**. Five strategic decisions drive every page:

1. **Lead-gen, not checkout.** Nobody wires $30K from a cold page. The site earns *inquiries, nominations, and gifts*; big asks close in conversation. Every page has **one primary CTA**.
2. **Trust is the bottleneck → the founder is the proof.** No archive to borrow trust from, so credibility comes from Jacob's real portfolio, his cinema craft, the research base, and 501(c)(3) transparency. Proof appears **before the first ask**.
3. **Shared funnel → clean fork.** One shared emotional story up top; one clear split into two parallel doors; two dedicated pages that close each audience. The homepage *routes*; the door pages *close*.
4. **"Founding Cohort" turns pre-launch into the offer.** Be among the first six — honest scarcity-through-meaning, no fake archive.
5. **Honesty = brand.** No play button implies a finished film; no fabricated testimonials; placeholders are clearly "reserved / in production."

---

## Sitemap

| # | Page | Path | Priority | Job | Primary CTA |
|---|---|---|---|---|---|
| 1 | Home | `/` | ⭐ Launch | Shared funnel → fork | Dual: Partner / Preserve |
| 2 | For Organizations | `/organizations` | ⭐ Launch | Close orgs/donors | Partner inquiry / Fund the pilot |
| 3 | For Families | `/families` | ⭐ Launch | Close families | Preserve a story |
| 4 | Why It Matters | `/why-it-matters` | High | Funder credibility (research) | → both doors |
| 5 | About / Founder | `/about` | High | Founder + ethics + apprenticeship | Partner / Preserve |
| 6 | The Collection | `/stories` | Med | Founding cohort now, films later | Nominate |
| 7 | Nominate | `/nominate` | Med | Lowest-friction pipeline | Submit nomination |
| 8 | Give / Donate | `/give` | Med | 501(c)(3) giving + transparency | Donate |
| 9 | Contact | `/contact` | Low | Catch-all | Message |

**Launch-minimum = the 3 ⭐ pages + a nominate form.** Everything else can ship in a fast-follow.
**MVP merges:** `/give` can live inside `/organizations`; `/nominate` + `/contact` can share one page; the apprenticeship can fold into `/about`.

---

## Global navigation

- **State over hero:** transparent → solidifies to `--ink` with a hairline gold rule on scroll (design file §7).
- **Left:** `LOREWELLS` wordmark → `/`.
- **Center/right (lean):** Mission (`/#stakes` or `/about`) · Stories (`/stories`) · Why It Matters (`/why-it-matters`) · Partner (`/organizations`).
- **Persistent primary CTA:** **`Partner with us`** button (the higher-value door). Families door is reachable via the hero's secondary CTA and the in-page fork, so the nav stays uncluttered while both doors are always one action away.
- **Mobile:** full-screen `--ink` drawer; CTA pinned.

> **Dual-door nav note:** keeping *one* CTA in the nav (Partner) avoids a cluttered two-button header. The Families path is guaranteed exposure through the hero secondary CTA (§Homepage 1) and the in-page Door B (§Homepage 11). If post-launch data shows families under-converting, promote a second nav CTA.

---

## Global footer

Catalog-styled (mono section numbers), `--ink`:
- **Wordmark** + the core quote in serif: *"The greatest tragedy is not that people die. The greatest tragedy is when their stories die with them."*
- **Sitemap** in mono catalog style (e.g., `01 · MISSION  02 · STORIES  03 · WHY IT MATTERS  04 · PARTNER  05 · FOR FAMILIES  06 · NOMINATE`).
- **Both door CTAs repeated:** `Partner with us` · `Preserve a story`.
- **501(c)(3) line:** *"Lorewells is a registered 501(c)(3) nonprofit. Contributions are tax-deductible to the extent allowed by law."* + EIN `[CONFIRM]`.
- Contact email, location (Central Oregon), quiet legal line.

---

## The three conversion paths

1. **Organization / donor**
   `/` (emotion → proof → fork) → **Door A** → `/organizations` (tiers + where-money-goes + 501c3) → **Partner inquiry** → human follow-up → close offline. Secondary exit: download the one-page proposal PDF.

2. **Family**
   `/` → **Door B** → `/families` (gentle process + ethics + what you receive) → **Preserve-a-story inquiry**, or a direct `$5,000` gift via `/give`.

3. **Nominator** (cross-cutting, lowest friction — feeds both doors over time)
   Any entry → **Founding Cohort** block or `/nominate` → **nomination** → pipeline.

---

## Measurement (so "high-converting" is real)

Instrument with GA4 or Plausible + form-submit events. Track from day one:

| Tier | Events |
|---|---|
| **Primary conversions** | `partner_inquiry_submit`, `family_inquiry_submit`, `nomination_submit`, `donation_start`, `donation_complete` |
| **Routing health** | `hero_cta_partner_click`, `hero_cta_family_click`, `scroll_depth_to_fork`, `/organizations` vs `/families` entries, `tier_card_view` |
| **Engagement** | `brand_film_play`, `brand_film_complete` |

**First post-launch jobs:** (1) check the **fork balance** — are both doors getting traffic and conversions? (2) **A/B the hero** headline/CTA. (3) watch where the org path stalls before inquiry.

---

## Open items (carried from the plan — owner: Jacob/you)

1. **501(c)(3) status** — confirm *active* + EIN before stating "tax-deductible" publicly.
2. **Donation processor** — Donorbox / Givebutter / Stripe (drives the `/give` embed).
3. **Brand film** — can Jacob cut the 2–3 min vision film for launch? (Strongly recommended — it's the highest-leverage asset.)
4. **Portfolio clearance** — which existing clips can seed proof + the brand film.
5. **Honesty pass** — confirm placeholder/play-button approach (no fake runtimes; reserved framing).
