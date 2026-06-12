# Lorewells — Content Map, Forms & Assets

*The production tracker. What copy already exists (and where it goes), what still needs writing, the form specs, and the asset checklist. Citations: §=`Lorewells Current.docx`.*

---

## 1. Existing copy → where it goes

You "distilled the content," so most of the site is a *placement* job, not a writing job.

| Source (§) | Content | Used in |
|---|---|---|
| §2 | Manifesto / core quote | Home 2, 3, 14; `/why-it-matters` framing |
| §3.1–3.9 | Research & social impact | `/why-it-matters` (full); Home 8 (condensed) |
| §4.3 | Who Lorewells serves | Home 9; `/organizations` 3 |
| §4.4 | Why organizations should fund | `/organizations` 3, 6 |
| §4.5 | Interview model + production quality | Home 6; `/organizations` 4; `/families` 4; `/about` |
| §4.6 | 10 interview categories | `/families` 3 |
| §4.7 | Final deliverables | Home 7; `/organizations` 6; `/families` 5 |
| §4.8 | Ownership & access models | `/organizations` 9 |
| §4.9–4.11 | Pilots, recommended pilot, funding ask, tiers | Home 10; `/organizations` 5, 8; `/give` |
| §4.12 | Founder credibility | Home 5; `/about` |
| §4.13 | Budget breakdown | `/organizations` 7 (where-it-goes); `/give` |
| §4.14 | Ethics | `/organizations` 10; `/families` 6; `/about` |
| §5, §5.1 | The apprenticeship | Home 13; `/about#apprenticeship` |
| §6 | Starter site copy (hero, steps) | Home 1, 6 |
| §7 | One-page proposal | `/organizations` proposal PDF |
| §9 | Reference notes | `/why-it-matters` footnotes |

---

## 2. New copy to write (the gap list)

Ordered by leverage. Status legend: ☐ to do.

| Priority | Item | Where | Notes |
|---|---|---|---|
| **P0** | **Brand-film script/VO** (2–3 min) | Home 4 | Highest-leverage asset. Manifesto-driven; uses Jacob's real b-roll. |
| **P0** | **`/families` page copy** (warm) | `/families` 1, 2, 7 | Softer register than anything in the doc today. Hero, "the ache," the gift. |
| **P1** | **Founder bio polish** for homepage proof | Home 5 | Tighten §4.12 to a punchy trust block + headline. |
| **P1** | **501(c)(3) trust line + "where it goes" intro** | Home 10; `/organizations` 7; `/give`; footer | One reusable sentence + the budget framing. |
| **P1** | **Founding-cohort microcopy** | Home 12; `/stories` | "First stories… room for one more." + reserved-tile metadata. |
| **P2** | **Door/section headlines marked [DRAFT]** | Home 4,5,7,9,10,11,12; page heroes | Finalize the ~12 drafted headlines in the specs. |
| **P2** | **Form success states** | all forms | See §3 below (drafted). |
| **P2** | **SEO/meta** (title, description, OG) | 4 ⭐ pages | Per page. |

---

## 3. Form specs (the doors)

Style (all): dark fields on `--ink`, `--bone` text, `--key` focus ring + label highlight; submit = primary gold button; inline validation; on-brand, directional success states (no generic "thank you").

### Partner inquiry — `/organizations`
| Field | Type | Required |
|---|---|---|
| Organization name | text | ✓ |
| Your name + role | text | ✓ |
| Email | email | ✓ |
| Approx. # of members | select/number | – |
| Interest | select: Sponsor one ($5K) / Pilot ($30K) / Legacy ($75K) / Not sure yet | – |
| Message | textarea | – |

**Success:** *"Thank you. We'll be in touch to start the conversation."*

### Preserve a story — `/families`
| Field | Type | Required |
|---|---|---|
| Your name | text | ✓ |
| Email | email | ✓ |
| Your relationship to them | text | ✓ |
| Who would you like to preserve? | text | – |
| Why now? | textarea | – |

**Success:** *"Your request is received. We'll reach out gently."*

### Nominate — `/nominate`
| Field | Type | Required |
|---|---|---|
| Who are you nominating? | text | ✓ |
| Why their story matters | textarea | ✓ |
| Your name + contact | text/email | ✓ |

**Success:** *"Your nomination is preserved. We'll be in touch."*

### Donate — `/give`
- Third-party embed `[CONFIRM processor]` (Donorbox / Givebutter / Stripe). Custom amount + the three tier presets + recurring option. Platform success + tax-receipt note.

> **Build-phase note:** form backend (e.g., a serverless handler, Formspark, or the CMS's forms), spam protection, and notification routing to Jacob's inbox are wiring tasks for the build, not this structure pass.

---

## 4. Asset checklist

| Asset | For | Status | Notes |
|---|---|---|---|
| **Brand/vision film** (2–3 min) | Home 4 | ☐ | The one real video. Strongly recommended for launch. |
| **Founder portrait** (warm key light) | Home 5; `/about` | ☐ | Real photo of Jacob. |
| **Craft/gear stills** | Home 5; `/about` | ☐ | Cameras, set, lighting — proof of capability. |
| **Existing portfolio clips** (cleared) | Home 4, 5 | ☐ | Oregon Discussion / Frontline / church work as honest sizzle. |
| **Founding-cohort placeholder portraits** (4:5, treated) | Home 12; `/stories` | ☐ | AI-generated, illustrative/reserved. No fake runtimes. |
| **Category b-roll/stills** | Home 9 | ☐ | Veterans / responders / elders / faith / community — treated. |
| **Wordmark / logo** | Global | ☐ | `LOREWELLS`, Newsreader or letterspaced mono (DF §7). |
| **One-page proposal PDF** | `/organizations` | ☐ | Built from §7. |
| **OG/social share images** | All ⭐ pages | ☐ | On-brand dark + key-light. |

---

## 5. What's deferred to the build phase

Not part of this structure pass — flagged so nothing's assumed done:
- Next.js + Tailwind implementation; tokens from `Lorewells_Design_Direction.md §11`.
- CMS-backed `/stories` collection (so Jacob adds films without code).
- Lightbox video component (brand film now; interviews later).
- Donation processor, form backend, email notifications, analytics events (`00_Siteplan_Overview.md → Measurement`).
- `prefers-reduced-motion`, captions/transcripts affordance, accessibility pass (DF §5, §10).
