# Hero Design QA

## Comparison target

- Source visual truth: `/Users/chadstroud/.codex/generated_images/019fafd6-1975-78b0-8fa5-2d763d3c7edf/call_Je5AbZAzStDLqXwT8O2v6rNH.png`
- Desktop implementation: `/tmp/rapidfire-hero-desktop-v3.png`
- Mobile implementation: `/tmp/rapidfire-hero-mobile-v2.png`
- Combined desktop comparison: `/tmp/rapidfire-desktop-comparison-final.png`
- Route and state: homepage `/`, default hero state after entrance animation

## Viewport and normalization

- Source pixels: 1536 × 1060.
- Desktop implementation: 1440 × 1024 pixels at a 1440 × 1024 CSS viewport and 1× density.
- The source was proportionally contained in a 1440 × 1024 frame before comparison. The implementation was captured at the same frame size.
- Mobile implementation: 390 × 844 pixels at a 390 × 844 CSS viewport and 1× density.
- Additional responsive checks: 320 × 700 and 768 × 900. Neither produced horizontal overflow.

## Full-view comparison evidence

The final side-by-side comparison confirms the same dominant composition: dark topographic field, oversized two-line cream headline, orange vertical rule, mission copy, two CTA buttons, angled olive split, full-height Rachel portrait, and bottom olive metrics rail. Major region boundaries, content order, color balance, button placement, and the portrait focal point align with the source.

The implementation intentionally keeps the existing 64px production navigation rather than copying the slightly taller generated navigation. The mobile layout is an authored responsive adaptation because the desktop diagonal split cannot remain legible at phone width.

## Focused-region evidence

A separate focused crop was not needed. The 2880 × 1024 combined comparison keeps the headline, mission, buttons, portrait, split edge, navigation, and statistics large enough to inspect directly. The 390 × 844 capture was reviewed independently for mobile crop, text wrapping, touch targets, and information order.

## Required fidelity surfaces

- Fonts and typography: Bebas Neue and Inter match the existing product system. The display type uses a restrained horizontal scale to closely match the source’s taller condensed lettering. Heading hierarchy, line breaks, mission wrapping, and metric weights are preserved.
- Spacing and layout rhythm: Desktop content, split edge, portrait, actions, and bottom rail align closely with the reference. Mobile uses a photo-first stack, two touch-sized actions, and a compact proof rail without overflow.
- Colors and visual tokens: The implementation uses the existing charcoal, military olive, cream, and orange tokens. Contrast remains strong across the texture and photography.
- Image quality and asset fidelity: The real `meet-rachel.jpg` portrait and existing vector logo are used. A dedicated generated WebP texture supplies the topographic detail and orange dust without CSS-drawn replacement art.
- Copy and content: All original hero copy, both destinations, and all three statistics are preserved verbatim.

## Comparison history

### Pass 1

- P1: The headline was materially smaller than the selected visual.
- P2: The diagonal split sat too far left at the bottom, reducing the copy field.
- P2: The statistics rail was too wide and too shallow.
- Fixes: increased the display scale, shifted the portrait panel and split, narrowed and deepened the statistics rail, and adjusted desktop content margins.
- Post-fix evidence: `/tmp/rapidfire-hero-desktop-v2.png`

### Pass 2

- P2: The headline remained vertically compressed, which pulled the mission and buttons too high.
- Fixes: increased the headline’s vertical scale and line height while preserving its source-like width.
- Post-fix evidence: `/tmp/rapidfire-hero-desktop-v3.png` and `/tmp/rapidfire-desktop-comparison-final.png`

### Final pass

- No actionable P0, P1, or P2 visual differences remain.
- P3: The generated mockup uses a slightly taller custom condensed display face; the production implementation uses the project’s real Bebas Neue font with calibrated horizontal scaling.

## Interaction and browser checks

- Shop Merch destination verified as `https://rapidfirerachel.printful.me/`.
- Check the Arsenal destination verified as `/arsenal`.
- Mobile navigation menu opened and closed successfully.
- Responsive layout checked at 320px, 390px, 768px, and 1440px widths.
- Production type-check and build passed.
- Browser console checked. No hero-specific errors were present. The pre-existing homepage Sanity recent-post request logged a network error in local development and is unrelated to this hero change.

## Implementation checklist

- [x] Faithful desktop composition.
- [x] Purpose-built mobile layout.
- [x] Real photography and brand logo.
- [x] Accessible heading, descriptive image text, focus states, and reduced-motion support.
- [x] Working hero actions and mobile navigation.
- [x] No horizontal overflow at tested breakpoints.

final result: passed
