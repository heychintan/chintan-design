# Visual Placeholders — what to generate, where it goes

Page-by-page list of visuals worth creating (Figma / Paper.design / AI image tools). Style anchor: light `#F7F7F8` background, accent-tinted (use the violet `#6C47FF` default — the site auto-recolors SVGs that use `rgb(var(--accent))`), soft 1px `#D6DADE` borders, rounded-2xl, Geist type.

## Already shipped (SVG, code-native, accent-aware)
- ✅ Migration stack diagram on all migration service pages (`MigrationDiagram.tsx`)
- ✅ C-monogram logo (`Logo.tsx`)

## Started in Paper.design (file: "chintan.design — Visual Assets")
https://app.paper.design/file/01KXTR0F3GWYAQRA1RYT603J8H
- ✅ OG/social template 1200×630 (monogram + headline + accent glow) — export and replace `braydoncoyer_og_overlay.png`
- ✅ Hero product strip 1600×640 (three tilted project photo cards: daydream, Xref, MD101) — export @2x for home hero

## Home
1. **Hero product strip** — replace/augment photo gallery with 3 floating browser-frame mockups of best work (daydream, Luzia, MD101) at a slight tilt. Generate in Paper.design as one wide PNG @2x, drop in `public/assets/`.
2. **Process section icons** — 3 small line icons (scope → build → launch), 2px stroke, accent terminal dot to match logo language.

## Services (design & build pages)
3. **Per-service header art** — abstract 16:9 SVGs, one per service, same grammar as MigrationDiagram (rounded cards + hatch pattern + accent line): e.g. Webflow = component slots snapping into a grid; GSAP = motion path with easing curve; CMS architecture = collection tree.

## Migration pages
4. **Before/after Lighthouse bar** — small comparison graphic (builder platform vs. Astro/Next scores). Can be coded as a component later; placeholder OK.
5. **"Own your stack" cost curve** — platform fees compounding vs. one-time build + AI maintenance. Simple 2-line chart, accent + gray.

## Projects
6. **Consistent device frames** — current screenshots mix laptop/tablet lifestyle photos and raw crops. Re-export all 6 projects in one browser-frame template (Paper.design: 1440px frame, subtle shadow, site cropped at hero) → visual rhythm on /projects and home grid.

## Experiments
7. **Tool OG cards** — 1200×630 OG image per live tool (title + micro-illustration of the tool UI) for link sharing.

## About
8. Good as is (personal photos work). Optional: small map pin illustration for "Based in India, building for the world."

## Blog
9. **Cover template** — one reusable cover layout (accent gradient + title + monogram) so posts without art don't look bare.

## OG / social
10. **New OG overlay** — replace `braydoncoyer_og_overlay.png` with monogram + name overlay, same dimensions, used by `app/api/og/route.tsx`.

### Suggested order
10 (OG overlay, removes wrong branding) → 6 (project frames) → 1 (hero strip) → 3 (service art) → rest.
