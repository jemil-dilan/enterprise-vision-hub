---
name: Visual Theme
description: D&C brand palette (Bleu Nuit/Vert/Or), Syne+Inter typography, premium animations
type: design
---
# Visual Theme — D&C Agro

## Palette (HSL tokens in src/index.css)
- **Primary — Bleu Nuit** `#0F172A` (hsl 222 47% 11%) → header, footer, titres, CTA solides
- **Secondary — Vert D&C** `#1D9E75` (hsl 161 70% 37%) → boutons principaux, accents, focus
- **Accent — Or** `#D4A017` (hsl 41 79% 46%) → CTA premium, highlights, gradient gold
- **Background** `#F8FAFC` (hsl 210 40% 98%) blanc cassé
- **Muted** `#E2E8F0`, **Muted-fg** `#334155`

Gradients utilities: `gradient-primary`, `gradient-accent` (vert), `gradient-gold`. Glow: `shadow-glow`. Text: `text-gradient-gold`.

## Typography
- Headings: **Syne** 500-800 (`font-heading`)
- Body: **Inter** 400-700 (`font-body`)

## Style
- Border-radius base 0.625rem
- Heavy white space, premium clean look
- Linear/outlined icons (lucide)
- Animations: framer-motion, scroll-triggered, parallax glows via blurred radial gradients
- Floating WhatsApp FAB bottom-right (#25D366 gradient + ping ring)

## Watermark
Logo D&C en filigrane (3% opacity) en background fixe via `#root::before`.
