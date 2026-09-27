# Design — Al Yahmaa Tourism

This document captures the design intent for the Al Yahmaa Tourism site so the visual language stays consistent as the project grows. It is a companion to the design tokens in `src/styles.css`, not a replacement for them.

## Brand

A Dubai-based travel agency focused on personal service, tailor-made journeys, and memorable UAE and global experiences. The visual language is **editorial** — closer to a travel publication than a marketplace or a SaaS dashboard. Decisions below flow from that intent.

## Palette

Five semantic colors plus neutrals. All values use `oklch` (see `src/styles.css:106-111`).

| Token | Role | Notes |
|---|---|---|
| `--ink` | Ground. Dark navy used for primary text and dark section backgrounds. | `oklch(0.19 0.045 251)` |
| `--gold` | Emphasis. Italic display lines, active nav state, hairline rules, key CTAs. | `oklch(0.76 0.15 79)` |
| `--coral` | Action. WhatsApp CTA, primary coral buttons, key icons. | `oklch(0.62 0.17 32)` |
| `--surface` | Quiet warmth. Card backgrounds, alternating sections. | `oklch(0.955 0.014 92)` |
| `--hero-foreground` | On-image foreground. Off-white for legibility over photography. | `oklch(0.99 0.005 95)` |

The neutral `--background` is warm off-white, not pure white, to feel editorial rather than sterile.

**Doctrine:** Gold and coral are accents. They appear at the moment of decision or emphasis — never as decoration on every element. If a page stops being scannable because gold and coral are everywhere, the doctrine has failed.

## Typography

| Role | Type | Reason |
|---|---|---|
| Display (H1, H2, pull quotes) | **Playfair Display** (Google Fonts, 500/600 + 500 italic) | High-contrast serif signals editorial upscale character. The italic variant carries the brand's "considered" voice. |
| Body | **DM Sans** (Google Fonts, 400/500/600/700) | Geometric sans that pairs cleanly with Playfair and keeps body text legible at small sizes. |

Both fonts are loaded via `__root.tsx`. The serif/sans pairing is the brand's typographic signature — it should not be substituted casually. If you need to swap, swap both and write down why.

## Radii

Small radius throughout: `--radius: 0.25rem` (4px). Cards, buttons, and images all use `rounded-sm`. There is no pill-everything. The shape should read as a publication, not a SaaS dashboard.

## Layout patterns

- **Editorial border grid** — service cards use visible `border-l border-t border-r border-b` rules to create a newspaper feel. Each cell is bordered, not floating.
- **Split-band closers** — action pages (Destinations, Services) end on a dark split-band with eyebrow + headline + gold WhatsApp CTA. Same pattern, different copy.
- **Editorial statement closer** — narrative pages (About) end with an italic statement on `bg-surface`, no button, text-link only.
- **Hairline rules** — gold or border-color hairline rules (`h-px w-10 bg-gold`) above eyebrows to anchor them.
- **Offset grid** — Home's destination preview offsets the middle card (`md:mt-12`) to break the uniform grid. Do not flatten this back into a flush grid.

## Motion

Restrained by design.

- **Hero zoom** — `motion-safe:animate-hero-zoom` runs on image mount (1.8s, scale 1.04 → 1). One-shot, no loop.
- **Hover transforms** — `group-hover:scale-105` on destination cards (700ms). Card-level only.
- **Story-link underline** — gold hairline slides in on nav link hover (220ms).
- **No** endless pulses, no parallax, no scroll-jacking.

All motion respects `prefers-reduced-motion: reduce` (see `src/styles.css:259-262`).

## Icons

From `lucide-react`. Chosen for content relevance, not for visual consistency with a default library.

- **Travel & place**: `Plane`, `Building2`, `MapPin`, `MapPinned`, `Compass`, `Tent`
- **Service**: `Globe2`, `Headphones`, `ShieldCheck`, `FileCheck2`, `Car`, `HeartHandshake`
- **Action**: `MessageCircle`, `Phone`, `Mail`, `Clock3`, `CalendarDays`, `ArrowRight`

Avoid generic AI glyphs: `Sparkles`, `Star` (used as decoration), `Bot`, `Wand`, `Zap`. Icons should describe what the service is, not signal that the site is "modern". When in doubt, drop the icon — the copy carries the meaning.

CTA arrows (`ArrowRight`) belong on actions that genuinely go somewhere (WhatsApp, external link). Drop them on internal links where the surrounding copy already labels the destination.

## Hero overlay

The `--hero-overlay` gradient (`styles.css:112`) is a left-to-right fade from dark to transparent. It exists to give legibility to left-aligned hero text on photography. It is a hierarchy tool, not decoration — do not apply it to non-photographic backgrounds.

## Photography

Real photography only. Current asset set:

- `dubai-creek-hero.jpg` — Dubai Creek at sunset (Home hero)
- `maldives.jpg`, `bali.jpg`, `cappadocia.jpg`, `desert-camp.jpg` — destination images
- `al-yahmaa-logo.png` — brand logo

Do not introduce stock gradients, fake terminal windows, or AI-generated illustrations. The brand voice is "real journeys for real people"; the visuals must agree.

## Disclosures

Sample content must be labelled where it appears to the visitor, not only in internal docs. See `src/routes/contact.tsx:14` ("Sample office hours are shown and can be updated with your confirmed schedule.") for the model. Apply the same principle to testimonials, prices, and any content that is illustrative rather than operational.

## What this site is NOT

- Not a SaaS dashboard. No stat cards, no activity feeds, no three-tier pricing.
- Not a marketplace. No fake review counts, no aggregate ratings, no "trusted by" logo bar.
- Not a generic AI site. No blue-purple gradients, no glassmorphism, no neon glows, no decorative emoji in copy.
