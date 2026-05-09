# Mastercard Marketing — UI Kit

A pixel-targeted recreation of the public mastercard.com marketing surface, built as small JSX components on top of `colors_and_type.css`.

## Files

- `index.html` — interactive demo. Boots the floating nav, a hero, a constellation of service portraits with orbital arcs, a pill-shaped story carousel, the ghost watermark section, and the ink footer. The cookie consent banner appears on first load.
- `Nav.jsx` — floating pill nav (logo, links, search).
- `Hero.jsx` — hero stadium media frame with eyebrow + headline + CTA pair.
- `EyebrowSection.jsx` — section opener (accent dot + uppercase label + headline).
- `Portrait.jsx` — circular service portrait with satellite CTA + label below.
- `OrbitalArc.jsx` — the thin Light Signal Orange curved arc that connects portraits.
- `Constellation.jsx` — composes 3 portraits + 2 arcs into the asymmetric service grid.
- `PillCarousel.jsx` — full-pill (999px) story card with chip + oversized inline CTA.
- `GhostSection.jsx` — cream-on-cream watermark headline behind a portrait.
- `Footer.jsx` — ink surface, 4-col link grid, country pill, social row.
- `CookieBanner.jsx` — bottom consent strip using Signal Orange.
- `Buttons.jsx` — `IconButton`, `PrimaryButton`, `SecondaryButton`, `ConsentButton`, `Satellite`.

## Usage

These components reference CSS variables from `../../colors_and_type.css`. Open `index.html` directly to see the interactive prototype.

## Coverage notes & gaps

- **Service imagery is illustrated with CSS gradients**, not photographic. The real site uses warm-orange editorial photography masked to circles; we substitute a layered radial-gradient that captures the warm-canvas-fade-into-photo feel without inventing a fake photo.
- **No video** in the hero — the 40px-radius dark frame stands in.
- **Search expansion**, full mobile menu, and locale switcher are visual-only (clicking them flashes a placeholder state).
- **The orbital arcs are static SVG** — the real site's arcs feel hand-drawn with subtle imperfection. Ours is one cubic Bezier per arc.
