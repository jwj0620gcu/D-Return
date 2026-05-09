# Mastercard Design System

A design system inspired by Mastercard's current marketing brand language — warm putty cream surfaces, oversized radii, circular portraits with orbital arcs, and one-font typography in MarkForMC (substituted with Sofia Sans here).

> **Source material:** distilled from `design-md/DESIGN.md` (an extracted brand-style document derived from the live mastercard.com experience). This design system should be treated as a *recreation for prototyping/design exploration*, not as official Mastercard brand guidelines.

---

## What Mastercard Is

Mastercard is a global payments network. The marketing surface positions itself less as "fintech" and more as an **editorial, institutional brand** — the visual language reads like a premium annual report or a magazine, not a banking dashboard. Three signature gestures define the brand:

1. **Warm cream canvas (`#F3F0EE`)** — never pure white. Every surface is tinted.
2. **Extreme radii** — buttons at 20px, hero frames at 40px, pill nav at 999px. The middle ground (8–12px) is intentionally absent.
3. **Circles in orbit** — service imagery is masked into perfect circles, connected by thin hand-drawn orange arcs, each circle carrying a small white "satellite" CTA on its perimeter.

### Surfaces represented
This system targets the **public marketing site** (mastercard.com) — the consumer-facing brand surface. It does NOT cover product UIs (the issuing-bank dashboards, developer portals, or merchant tools) which use a different, more utilitarian visual language.

---

## Index — files in this project

| File / folder | What's in it |
|---|---|
| `README.md` | This file. Brand context, content + visual fundamentals, iconography. |
| `SKILL.md` | Agent skill manifest — read this first if you're a Claude Skill loader. |
| `colors_and_type.css` | All design tokens — color, radius, spacing, elevation, type. Plus semantic classes (`.mc-h1`, `.mc-eyebrow`, `.mc-body`, …). |
| `assets/` | Logos, illustrations, icon sprites. |
| `preview/` | Small HTML cards used to populate the Design System review tab. Each renders one token group or one component cluster. |
| `ui_kits/marketing/` | Recreation of the public marketing site as JSX components + an interactive `index.html`. |

### Sources
- `design-md/DESIGN.md` — local mounted file (read-only). The 366-line distillation of Mastercard's current visual language.
- `VoltAgent/awesome-design-md` GitHub repo — the upstream of the above doc.

---

## Content Fundamentals

Mastercard's copy voice is **conversational-institutional** — confident enough to be the network behind 3 billion cards, warm enough to feel like a brand magazine.

### Tone
- **Soft confidence, not bombast.** Headlines are short, declarative, and quietly aspirational: *"Priceless possibilities."* / *"We're always here when you need us."*
- **Second person ("you/your") dominates** consumer marketing surfaces, addressing the reader as a partner rather than a customer.
- **Editorial cadence.** Sentences are short; paragraphs are 1–3 lines. Long technical paragraphs are reserved for legal/consent surfaces.

### Casing
- **Sentence case everywhere** — headlines, button labels, nav links. The only uppercase in the system is the **eyebrow label** (e.g., `• SERVICES`, `• SOLUTIONS`) at 14px, weight 700, with +4% tracking.
- **Title Case is rare** — generally only on the wordmark logotype itself.

### Voice patterns
- **"For ___" navigation:** the primary nav reads "For you", "For business", "For the world", "For innovators". A consistent prepositional opener that frames every audience as someone Mastercard is *for*.
- **Active and concrete CTA verbs:** *Learn more*, *Explore*, *Discover*, *Get in touch*. Avoid *Click here*, *Submit*, or anything passive.
- **"Priceless" is a load-bearing word** — Mastercard's 1997 tagline. Used sparingly but always with reverence; never ironic.

### What it never does
- **No emoji.** None. Anywhere. Even success/error states use icons or text, never emoji.
- **No exclamation points** in marketing copy. The brand is calm; volume isn't the trick.
- **No jargon.** "API", "issuer", "interchange" stay in developer/business surfaces — never on consumer marketing.
- **No hyperbole.** Avoid *amazing*, *incredible*, *revolutionary*. Replace with concrete benefit ("a card that works in 200 countries").
- **No personality emoji or brand mascot.** The Mastercard mark itself is the personality.

### Specific examples (copy patterns to imitate)
- **Hero headline:** *"Priceless possibilities, powered by you."* — 2-line, sentence case, ends with a period (not a `!`).
- **Section eyebrow:** `• SERVICES` — accent dot + uppercase + tight tracking.
- **CTA pair:** *Learn more* (primary, ink pill) / *Explore solutions* (secondary, outlined pill).
- **Footer headline:** *"We're always here when you need us."* — full conversational sentence, not a label like "Support".
- **Cookie banner:** *"We use cookies to give you the best experience."* — direct, second-person, no marketing flourish.

---

## Visual Foundations

### Color
- **Backgrounds.** `#F3F0EE` Canvas Cream is the default — never pure white. `#FCFBFA` Lifted Cream is one step up for nested raised surfaces. `#FFFFFF` is reserved for the floating nav pill and small satellite CTAs.
- **Text.** `#141413` Ink Black for everything important; `#696969` Slate Gray for muted/secondary.
- **CTAs.** Body-marketing CTAs are always **ink-on-cream pills** at 20px radius. The orange (`#CF4500`) is **only** for consent/legal/cookie actions. Mixing them is the most common branding mistake.
- **Logo colors.** `#EB001B` red and `#F79E1B` yellow appear *only* on the Mastercard mark — never as UI accent colors.
- **No programmatic gradients** anywhere. The only "gradient" feel comes from circular photo crops fading into the canvas, and from soft 48px-spread shadows.

### Type
- **One family.** MarkForMC for everything. (Sofia Sans is our open-source substitute — see "Font substitution" below.)
- **Weight 450 is the body weight** — softer than 400, firmer than 500. This is the most identity-defining typography choice in the system.
- **Headlines weight 500, letter-spacing -2%.** Tight tracking gives the editorial density.
- **Eyebrow at 14px / 700 / +4% tracking, uppercase, accent dot prefix** — the only uppercase in the system.

### Spacing
- **Base 8px scale**: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Section vertical padding** is generous: 96–128px desktop, 48–64px mobile.
- **Whitespace is structure** — empty cream is intentional. A typical service section is ~40% blank canvas at the top.

### Backgrounds
- **No full-bleed photography backgrounds.** Imagery is *contained* — masked into circles or pill cards, never used as a section bg.
- **No repeating patterns or textures.** The cream canvas itself is the texture.
- **No hand-drawn illustrations or doodles** — except for the one signature motif: thin (~1px) **orbital arcs** in Light Signal Orange (`#F37338`) that connect circular portraits across the page. These look hand-drawn (subtle irregularity), span up to full-viewport widths, and only appear in sections with circular portrait content.
- **Three surface tones build rhythm:** cream canvas → lifted cream → ink-black footer. That's the entire surface palette.

### Animation
- **Restrained.** No bounces, no spring physics, no parallax.
- **Fades + soft scale only.** Lazy-loaded images blur-up from a cream-tinted placeholder. Hover states are instant or use a 150–200ms ease-out.
- **No carousel auto-advance** — controls are explicit (left/right pill buttons or pagination dots).
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard ease-out) is the only curve in active use.

### Hover & press states
- **Buttons.** Hover: subtle darken or no change (the pill shape and color do the work). Press: tiny inward scale (`transform: scale(0.98)`) or 2px y-offset, never a separate hover variant.
- **Links.** Hover: color stays, underline appears or thickens (text-underline-offset 3px).
- **Cards / portraits.** Hover: imperceptibly increase shadow blur or scale by `1.02`. **Never** raise a hard drop shadow.
- **Satellite CTAs.** Hover: arrow icon translates 2–4px to the right (the only directional animation in the system).

### Borders
- **Buttons** use 1.5px solid Ink Black borders (matched to bg on primary so the edge is crisp without color contrast).
- **Inline surfaces** use 1px borders at low alpha (`rgba(20,20,19,0.12)`) when needed.
- **Footer divider** is 1px white at ~30% opacity on the ink footer.
- Borders are preferred over shadows for *functional* delineation (form inputs, dividers); shadows are only atmospheric.

### Shadows
- **Atmospheric, never directional.** Three documented levels:
  - L1 (`rgba(0,0,0,0.04) 0 4px 24px`) — floating nav pill.
  - L2 (`rgba(0,0,0,0.08) 0 24px 48px`) — hero media, elevated cards.
  - L3 (`rgba(0,0,0,0.25) 0 70px 110px`) — rare; dramatic feature tile.
- **No tight, hard-edged shadows.** Anything below 24px blur breaks the feel.

### Transparency / blur
- **Almost never.** No backdrop blur, no glassmorphism. The nav pill's "lift" is a solid white surface with a soft shadow, not a translucent overlay.
- The only transparency in the system is the footer's `rgba(255,255,255, 0.30)` divider line and the small `0.12` alpha border-soft.

### Layout rules
- **Floating nav pill** docks ~24px below the viewport top — never flush at y=0.
- **Asymmetric portrait placement** — service circles sit in varying grid positions, creating the "constellation" feel. Never on a strict grid.
- **Max content width ~1280px** with 48–100px gutters; content does not bleed to the viewport edge except for hero media.

### Corner radii — three buckets, no in-between
| Use | Radius |
|---|---|
| Tiny micro-chip details | 3–6px |
| Body CTAs (primary + secondary) | **20px** |
| Consent/orange pill, modal inner chips | 24px |
| **Hero media frames, large containers** | **40px** |
| Circular portraits, icon-only buttons | 50% |
| **Floating nav, full pills** | **999px / 1000px** |

The 8–12px range is **explicitly avoided** — it makes UI feel generic.

### Cards
- Most "cards" in the system aren't bordered rectangles — they're **pill-shaped media frames** (radius 1000px) or **40px-radius hero frames**.
- When a true rectangular card is needed: cream-lifted background, no border, very soft L2 shadow (24px blur, 8% alpha), 32–40px internal padding.

### Imagery vibe
- **Warm and editorial.** Subjects are often a single object (a card, a sunflower, a beverage, a person) on a warm/orange-leaning background, photographed to feel premium-magazine.
- **Never b&w, never cool/blue-tinted.** Cool imagery breaks the canvas warmth.
- **No grain or film stock affectations.** Imagery is clean and high-fidelity.
- **All service imagery is square-source, masked to circle.**

---

## Iconography

Mastercard's iconography is **sparse and functional**. The visual identity does most of the talking; icons are quiet utilities, not decorative elements.

### What's used
- **Stroke-style line icons** in the footer ("NEED HELP?" column has small support-bubble, card, map-pin, question-mark prefixes), all at ~16px, 1.5px stroke weight, currentColor.
- **Single-purpose UI glyphs:** an arrow (`→`) inside satellite CTAs, a magnifier in nav search, hamburger lines in mobile menu, chevrons in the country selector and footer accordions.
- **External-link marker:** a small upper-right arrow (`↗`) appended after footer links that go off-site.
- **Social icons** (LinkedIn, Facebook, X, YouTube) at the bottom of the footer — simple monochrome glyphs, white on ink.
- **The Mastercard mark itself** (red + yellow interlocking circles) is the single most-loaded brand asset — used in nav, footer, and as a favicon. It is *never* recolored, monochromed only when context demands (e.g., on the dark footer the wordmark is white but the circles stay full-color).

### What's NOT used
- **No emoji.** Anywhere.
- **No unicode chars as icons** (no `★`, `✓`, `→` baked into copy text). Arrows live inside satellite CTAs as proper SVG.
- **No filled/duotone icon styles.** Everything is mono-stroke or solid-1-color.
- **No animated icons** (Lottie, etc.).
- **No icon font** — icons are inline SVG.

### Practical guidance for prototypes
- The codebase did not provide a downloadable icon set. For prototypes, use **[Lucide](https://lucide.dev)** at 1.5px stroke — its geometric line aesthetic is the closest open match. Load via CDN: `https://unpkg.com/lucide@latest`.
- **Substitution flagged:** Lucide is not Mastercard's actual icon set; it's the closest open-source approximation. Replace if real assets become available.
- The arrow inside the satellite CTA is the one custom icon worth drawing inline as SVG (1.5px stroke, 24×24 viewBox, slight north-east lean).

### Logo files in `assets/`
- `mastercard-logo.svg` — full-color mark only (red + yellow interlocking circles)
- `mastercard-logo-white.svg` — mark + white wordmark (use on ink footer)
- `mastercard-wordmark.svg` — mark + ink wordmark (use on cream canvas)

---

## Font substitution — flag for the user

**MarkForMC is proprietary and not redistributable.** Sofia Sans (Google Fonts) is the closest open-source match and is in Mastercard's own declared fallback stack. This system uses **Sofia Sans at weights 400 / 450 / 500 / 700**, loaded from Google Fonts in `colors_and_type.css`.

Caveats vs the real MarkForMC:
- Slightly looser letter shapes; x-height is comparable.
- Weight 450 is supported by Sofia Sans's variable axis — preserves the signature soft-body weight.
- Apply `letter-spacing: -0.02em` on headlines to match MarkForMC's tighter tracking.

> **If you have access to MarkForMC `.woff2` files,** drop them in `fonts/` and add an `@font-face` block at the top of `colors_and_type.css` declaring the family `MarkForMC`. The CSS variables already list `MarkForMC` first in the stack, so it will take over automatically.

---

## How to use this system

1. **Link `colors_and_type.css`** at the top of any HTML file you create.
2. **Set `body { background: var(--bg); }`** — never pure white.
3. **Use the semantic type classes** (`.mc-h1`, `.mc-eyebrow`, `.mc-body`) or just write `h1`/`h2`/`h3` and they'll inherit the styled defaults.
4. **Reach for one of three radii** when in doubt: `var(--radius-btn)` (20px buttons), `var(--radius-hero)` (40px hero), `var(--radius-full)` (999px pill).
5. **Reserve `var(--accent)` (signal orange) for consent UI only.** Use `--mc-ink` for all marketing CTAs.
6. **Eyebrow + accent-dot is the section signal** — every major section starts with one.
