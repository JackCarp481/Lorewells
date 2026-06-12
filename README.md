# Lorewells — Website Build Package

This folder is a complete, self-contained brief for building the **Lorewells** marketing website. It's organized for a coding agent (Cursor) to assemble the build by reconciling the **structure** (this siteplan) with the **look** (the design direction file).

**Lorewells** is a **pre-launch 501(c)(3) oral-history nonprofit** in Central Oregon — *"Every Person Is a Library."* It preserves the life stories of veterans, first responders, and elders through long-form cinematic film. The site is dark and cinematic ("the lit room"), serves **two equal audiences** (organizations/donors + families), and — because there are **no finished films yet** — earns trust through the founder, the craft, the research, and nonprofit transparency, not an existing archive.

---

## Read in this order

| # | File | What it is |
|---|---|---|
| 1 | **`README.md`** (this file) | Build brief + index + guardrails |
| 2 | **`Lorewells_Strategy.md`** | The *why* — conversion strategy, the dual-door logic, the trust thesis |
| 3 | **`Lorewells_Design_Direction.md`** | The *look* — colors, type, motion, components, treatment. **Authoritative for visual design.** |
| 4 | **`Lorewells_Siteplan/`** | The *structure* — the executable specs (see below) |
| 5 | **`Lorewells_Content_Source.md`** | The *words* — canonical copy the specs cite as "§ N" |
| 6 | **`tokens.css`** | Paste-ready design tokens (mirrors Design Direction §11) |
| 7 | `Lorewells Current.docx` | Original source — use the `.md` extraction (#5) instead |

### Inside `Lorewells_Siteplan/`
- **`00_Siteplan_Overview.md`** — sitemap, global nav/footer, the 3 conversion paths, measurement plan, open items
- **`01_Homepage_Spec.md`** — the 15-section homepage, copy slotted into every section
- **`02_Secondary_Pages.md`** — full specs for `/organizations` + `/families`, outlines for the rest
- **`03_Content_Map_and_Forms.md`** — copy→slot map, the new-copy task list, all 4 form specs, asset checklist

> Visual comps are being produced separately in **Claude Design**. `Lorewells_Design_Direction.md` is the authoritative visual spec — reconcile any comp against it.

---

## Recommended stack

- **Next.js (App Router) + Tailwind CSS** (per Design Direction §12).
- **Fonts (Google):** Newsreader (display), Hanken Grotesk (body/UI), IBM Plex Mono (metadata).
- Import **`tokens.css`** into `globals.css` and map into the Tailwind theme, e.g.:
  ```js
  // tailwind.config — theme.extend
  colors: { ink:'#15110D', depth:'#0F1C1A', key:'#E0A94A', ember:'#B5663A', bone:'#ECE7DB', mist:'#A9A294' },
  fontFamily: { display:['Newsreader','serif'], body:['"Hanken Grotesk"','system-ui'], mono:['"IBM Plex Mono"','monospace'] },
  ```
- **Lightbox video** component (brand film now; interviews later). **CMS-backed `/stories`** is a later phase so Jacob can add films without code.

---

## Build order

- **Phase 0 — Scaffold.** Next.js + Tailwind, fonts, `tokens.css` → theme, global layout (nav + footer per `00_`), section rhythm (`--ink`/`--depth` alternation), grain + "surfacing" reveal utilities, and `prefers-reduced-motion` (Design Direction §5, §10).
- **Phase 1 — Homepage.** Build the 15 sections in order from `01_Homepage_Spec.md`. The identity carriers are the **hero** (key-light), the **proof block (#5)**, and the **two doors (#10/#11)** — build those well first.
- **Phase 2 — The two ⭐ pages.** `/organizations` and `/families` from `02_` — this is where conversions close.
- **Phase 3 — Remaining pages.** `/why-it-matters`, `/about`, `/stories`, `/nominate`, `/give`, `/contact`.
- **Phase 4 — Forms + integrations.** The 4 forms (`03_`), donation embed, analytics events (`00_` → Measurement).

---

## Guardrails — do not drift

- **Hold the "deliberate departures" (Design Direction §0).** NOT cream/parchment + terracotta; NOT a centered SaaS hero with a stat+gradient; NO stock photography. Dark is the default; `--bone` "lifted" sections are rare (1–2 on the homepage).
- **Honesty (this brand lives or dies on it).** No play button that implies a finished film — a placeholder either opens the real brand film or carries honest preview microcopy. Placeholder catalog metadata reads `… · FOUNDING · RESERVED`, **never** fake runtimes like `02:41:18`. No fabricated testimonials.
- **One primary CTA per page**, mapped to a real conversion (`00_` → conversion paths).
- **501(c)(3) "tax-deductible" language ships only once the EIN is confirmed** — until then use the `[CONFIRM]` placeholder.

---

## Stub these (no real asset yet)

- **Brand film** (Home #4) → lightbox with a treated poster + honest microcopy until the real 2–3 min film exists.
- **Founding-cohort portraits** → treated AI-generated placeholders, "reserved" framing.
- **EIN, donation processor, form backend** → config/env stubs (`[CONFIRM]` in the specs).

---

## Open items needing a human (from `00_` → Open items)

1. Confirm the **501(c)(3) is active + the EIN**.
2. Pick the **donation processor** (Donorbox / Givebutter / Stripe).
3. Produce the **brand film** (highest-leverage asset).
4. **Clear** which existing portfolio clips can be used as proof/sizzle.
5. Sign off on the **honesty/placeholder approach**.
