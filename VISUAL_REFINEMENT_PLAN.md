# RetroAltFest Visual Refinement Plan

## UI refinement recommendations

The homepage should keep its current structure and deepen the mood through layers, not new product complexity.

1. Hero atmosphere
   - Add a slow ambient haze layer behind the hero.
   - Keep the headline area clear and high-contrast.
   - Use restrained cyberpunk energy through cyan/violet light, not loud gradients.

2. Background system
   - Improve the grid with secondary point texture.
   - Add very low-opacity grain and scanlines.
   - Layer radial light fields behind content instead of placing decorative elements inside text blocks.

3. Festival cards
   - Give cards a subtle editorial glow and top-edge light on hover.
   - Add a small verification glyph to support the trustworthy/curated identity.
   - Keep genre badges secondary and readable.

4. Map preview
   - Treat it as a discovery atlas, not a utility map.
   - Use pulsing nodes and thin connection arcs.
   - Preserve the “no fake precision” positioning.

5. Typography refinement
   - Preserve the existing hierarchy.
   - Slightly tighten card title tracking and improve vertical rhythm.
   - Keep body copy spacious and readable.

## Implementation plan

1. Add global CSS utilities for atmosphere:
   - `.ambient-haze`
   - `.grain-field`
   - `.atlas-node`
   - `.connection-arc`
   - `.verification-glyph`

2. Add three lightweight CSS keyframes:
   - `raf-drift` for slow haze movement.
   - `raf-pulse` for atlas nodes.
   - `raf-grain` for nearly invisible texture drift.

3. Update components without changing page structure:
   - `page.tsx`: add background atmosphere layers.
   - `Hero.tsx`: deepen Nocturnal Atlas panel with haze, grain, pulsing nodes, and connection arcs.
   - `FestivalCard.tsx`: add editorial glow, verification glyph, and smoother hover behavior.
   - `MapPreview.tsx`: add atmospheric layers, pulsing region nodes, and discovery-style connection arcs.

## Tailwind/React implementation suggestions

- Keep components as server components; no client-side JavaScript is needed.
- Prefer CSS classes in `globals.css` for repeated atmospheric behavior.
- Use Tailwind utilities for spacing, layout, and one-off visual treatments.
- Avoid adding animation libraries or map dependencies for the MVP.
- Keep the JSON seed-data integration exactly as-is.

## Animation recommendations

MVP-safe animation rules:

- Slow only: 4.8s to 26s loops.
- Low opacity only: atmosphere should be felt more than seen.
- Transform/opacity only: no layout-affecting animation.
- Respect `prefers-reduced-motion` globally.
- Avoid flashy neon flicker, glitch effects, gaming HUD effects, or constant movement near body text.

## Performance considerations

- No new dependencies.
- No canvas, WebGL, Lottie, video, or large images.
- CSS-only motion using transform and opacity.
- Small number of animated elements.
- Existing static prerender remains valid.
- Atmospheric effects are decorative and do not block content.

## Updated component recommendations

MVP-safe component updates:

- `Hero`: keep copy/CTA unchanged; deepen the Nocturnal Atlas visual.
- `FestivalCard`: add verification glyph and stronger editorial hover states.
- `MapPreview`: keep placeholder semantics; make it feel more like a living atlas.
- `globals.css`: centralize atmospheric classes and motion rules.

## MVP-safe upgrades

Safe now:

- Ambient haze layer.
- Subtle grain texture.
- Improved grid depth.
- Pulsing atlas nodes.
- Editorial card hover states.
- Verification glyph on cards/status badges.
- Visual plan documentation.

## Future enhancements

Save for later:

- Real map tiles.
- Geocoded child venue records.
- Festival detail pages.
- Search/filter state.
- Real submission form and review queue.
- OG/social image generation.
- Advanced scroll-driven motion.
- CMS/admin workflow.
