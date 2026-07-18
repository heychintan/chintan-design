# Site Audit — 2026-07-18

Full-page visual + content audit at 1440px. Fixed items are marked ✅; open items are recommendations.

## Fixed in this pass

- ✅ Home "Selected Work" section showed blog posts, not projects → now shows 4 featured projects with visuals; blog list relabeled "From the Blog".
- ✅ Purple was inconsistent (raw `indigo-*` classes + `#6C47FF` token mixed) → all mapped to one accent scale (`--accent-50…950`), switchable via navbar theme toggle, persisted in localStorage.
- ✅ Braydon Coyer logo (`bcoyerlogo_dark.svg`) still used in navbar + footer → replaced with Chintan C-monogram (`app/components/Logo.tsx`, accent-aware dot).
- ✅ Positioning was Webflow-only → hero, meta, schema, and footer updated to "web developer & product builder".
- ✅ Services page title/copy was Webflow-only → regrouped into "Design & build" + "Migrations to an AI-native stack".
- ✅ Migration service pages get a branded, accent-aware stack diagram instead of a text wall.

## Open findings (recommended next)

### Leftover template content (highest priority)
- `app/speaking/page.tsx` + `app/components/SpeakingBento.tsx` use **Braydon's photos** (`/braydon_speaking_*.jpeg` etc.). Page isn't linked in nav but is publicly routable. Either delete the route or replace with Chintan content.
- `app/connections/page.tsx` references Braydon. Same treatment.
- `app/api/og/route.tsx` uses `braydoncoyer_og_overlay.png` for OG images — replace overlay with own brand asset.
- `public/` still contains many `braydon_*` images — remove after the above.

### Text density
- **Projects page**: description + 3 bullets per project is heavy. Consider collapsing bullets behind a "Details" disclosure, or trimming each description to 2 sentences. The images carry the page.
- **Service detail pages**: FAQ answers run long; fine for SEO, but consider trimming deliverables to 6 per service.
- **About page**: reads well; long but intentional storytelling — leave.

### Consistency / hierarchy
- Home hero stats say "9 five-star reviews" while reviews page count may drift — single-source this from data.
- `app/links/page.tsx` and stats cards still use `indigo-*` (fine — remapped to accent) but a few use raw `gray-*` where `text-secondary`/`text-tertiary` tokens exist. Low priority.
- Mixed `<img>` vs `next/image` — projects and gallery use raw `<img>`. Consider `next/image` for LCP wins (needs width/height audit; do as its own pass).

### Build/dev
- `.env.local` contains placeholder Supabase values so local builds pass; real values live in Vercel. `/stats`, `/community-wall` need real env to show data locally.
- Changelog Velite collection defined but `content/changelog/` doesn't exist — Changelog page/bento renders empty. Either add entries or hide links.
