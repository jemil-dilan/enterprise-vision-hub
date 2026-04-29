## Plan: Add founder portrait to "Fondateur & Directeur Général"

Currently, the founder is represented by a circular badge with the initials "DC" in two places:
1. **Home page** — `src/components/FounderTeamSection.tsx` (in the founder quote card)
2. **Team page** — `src/pages/Team.tsx` (in the founder vision section)

I will replace these "DC" placeholders with the uploaded portrait so the founder is clearly visible across the site.

### Steps

1. **Save the uploaded photo into the project**
   - Copy `user-uploads://image-2.png` to `src/assets/founder-portrait.png` so it is bundled and optimized by Vite.

2. **Update `src/components/FounderTeamSection.tsx` (home page)**
   - Import the portrait as an ES6 module.
   - Replace the small "DC" gradient circle with a larger, prominent portrait:
     - Rounded portrait (e.g., ~160px circular or rounded-2xl) centered above the role label.
     - Subtle ring/border in primary color and soft shadow for elegance.
     - `object-cover object-top` to keep the face well framed.
   - Keep the existing quote, role, and "D&C Agro" caption underneath.

3. **Update `src/pages/Team.tsx` (founder section)**
   - Import the same portrait.
   - Replace the "DC" circle with a larger version of the portrait (e.g., ~200px) for a hero-style founder card.
   - Maintain layout, quote and styling consistency with the home page.

4. **Polish**
   - Add a soft `gradient-primary` background ring or backdrop behind the portrait for brand cohesion.
   - Ensure responsive behavior (smaller on mobile, larger on desktop).
   - Add `loading="lazy"` and a descriptive `alt` like "Fondateur & Directeur Général de D&C Agro".

### Files touched
- New: `src/assets/founder-portrait.png`
- Edited: `src/components/FounderTeamSection.tsx`
- Edited: `src/pages/Team.tsx`

No translation, routing, or backend changes are needed.
