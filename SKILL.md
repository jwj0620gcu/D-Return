---
name: mastercard-design
description: Use this skill to generate well-branded interfaces and assets for Mastercard, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content + visual fundamentals, iconography
- `colors_and_type.css` — drop-in token sheet (CSS vars + semantic classes); always link this first
- `assets/` — Mastercard logo files (full-color, white, ink wordmark)
- `preview/` — small reference cards (one per token group / component cluster)
- `ui_kits/marketing/` — JSX component recreation of the marketing surface (Nav, Hero, Portrait, OrbitalArc, Constellation, PillCarousel, GhostSection, Footer, CookieBanner, Buttons)
- `slides/` — none (no slide template was provided)

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view.

Hard rules to preserve the brand:
- Default body background is **`#F3F0EE` Canvas Cream** — never pure white
- Body text is **weight 450**, headlines weight 500 with **-2% letter-spacing**
- One typeface only: **MarkForMC**, falling back to **Sofia Sans** (Google Fonts)
- Three radii buckets — **20px** (buttons), **40px** (hero/large), **999px** (pill/nav). Avoid 8–12px
- **Signal Orange `#CF4500` is for consent/legal only** — never marketing CTAs
- Marketing CTAs are **Ink Black pills** (`#141413`, 20px radius)
- No emoji. No exclamation points. No second typeface. No programmatic gradients
- Eyebrow signal = accent dot + uppercase 14px/700/+4% tracking

If working on production code, copy assets and reference the rules in `README.md` to become an expert designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
