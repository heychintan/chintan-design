# chintan.design — Brand Differentiation & Content Structure

Goal: stop looking like a themed Blogfolio and start looking like a one-person studio.
The skeleton (Next.js, accent-token system, bento components, Geist) stays. The *shape* of
the site — layout rhythm, typography scale, motion, and content architecture — changes.

## Where we stand

The current site inherits Braydon's DNA: centered single column, pill section titles,
symmetric bento grids, everything the same width, everything fades in the same way.
It's clean but reads "template" because every section has the same silhouette. The
strongest assets already here: a real accent-switching token system, working
`/experiments` tools, a live `/styleguide`, real client logos and reviews, and a strong
service/migration story. The redesign should make those the identity, not sidebar features.

## What each reference actually teaches (and what we steal)

**Innovatemap** — positions like a product firm, not a portfolio. Services are framed as
*outcomes for a company stage* ("bring a product to market", "scale what works").
Steal: outcome-first service naming and a services index that reads as a decision tree,
not a menu of tech stacks.

**Paper Tiger** — motion as brand. Page loads choreograph: wordmark first, then headline
lines slide up staggered, then media. Big caps, tight leading, few words.
Steal: one signature load sequence reused everywhere (mask-reveal headline lines +
delayed media), and ALL-CAPS section labels in mono replacing the pill titles.

**Pact** — the work index is a typographic list, not a card grid. Rows of project names
at display size; hover swaps a floating preview image. Grid breaks: text columns start at
different x-positions, images bleed off-edge.
Steal: `/projects` becomes an index list with hover previews; kill the uniform card grid.
Introduce a 12-col grid where sections deliberately start at col 2/4/6 instead of centered.

**OH MY** — personality through interaction: cursor-aware elements, sections with their
own background color fields so scrolling feels like passing through rooms.
Steal: full-bleed background shifts between sections (white → ink → accent-tinted) instead
of one endless white page; playful hover states on the experiments cards.

**IDEO** — credibility architecture. Content is organized by *questions clients have*,
not by artifact type. Long-form thinking sits next to work as first-class content.
Steal: a Resources hub that merges blog + experiments + styleguide under one "lab" idea;
case studies framed as problem → decision → outcome with a metrics line.

**Awsmd** — case studies as scenes: each project gets a full-viewport intro with its own
palette pulled from the work, and metrics up front (↑ conversion, ships, users).
Steal: per-project accent theming (the accent-token system makes this nearly free —
`data-accent` per case study), and a stats strip on every case study.

**Flowout (content model)** — productized-agency IA: Services, Expertise, How it works,
Pricing, Work, Reviews, Resources. Every service page answers: what, for whom, process,
proof, price, FAQ.
Steal: the IA below, plus a real "How it works" and visible pricing anchors.

## Differentiation thesis

Everyone else's agency site is a brochure. This site is a **working instrument**: the
theme switcher, the styleguide, the experiments are live proof that the person builds.
Lean into "the site is the pitch" (already a blog post title — make it the brand idea).

Signature moves that no template has:
1. **Accent system as brand** — visitors can re-skin the site; case studies each ship
   with their own accent. The violet is the default voice, not the cage.
2. **Instrument panel typography** — huge Geist headlines (clamp 3.5–7rem, -0.03em),
   ALL-CAPS Geist Mono labels with index numbers (`01 — SERVICES`), no pills.
3. **Rooms, not sections** — background color fields change per section; the footer is
   an ink-black room with the site's biggest type.
4. **Index lists over card grids** — projects and services as display-size rows with
   hover media; bentos survive only on the about page.

## Content architecture (target IA)

```
/                 Hero (outcome statement) → proof strip (logos+metrics) → selected work
                  (index list) → services (decision tree) → how it works → reviews → CTA room
/services         Two tracks: "Design & build" / "Migrate to AI-native stack"
/services/[slug]  What → who it's for → process → proof (related project) → pricing anchor → FAQ
/how-it-works     NEW: 4-step engagement model, tooling (Claude/Codex-maintainable code), comms
/pricing          NEW: project bands + retainer; kills "contact for quote" friction
/projects         Index list w/ hover previews → /projects/[slug] case-study scenes (per-accent)
/reviews          Exists; add source links + per-service filtering
/lab              Umbrella for /experiments + /styleguide + /blog ("proof I build")
/about            Bento survives here (human room)
```

## Motion plan (one system, three moments)

- **Load**: headline lines mask-reveal upward with 60ms stagger; media fades+scales 1.02→1
  after text. One shared variant set in `app/lib/motion.ts` — never per-page ad-hoc.
- **Scroll**: sections reveal once (no re-trigger), background color fields crossfade via
  `useInView` on section wrappers. Index rows get a subtle x-shift on enter.
- **Hover**: project rows — title skews to accent + floating preview follows cursor;
  buttons — accent fill wipes from left; experiment cards — playful (tilt/shadow pop).
- Respect `prefers-reduced-motion` globally.

## Phasing

1. **Type + labels pass** — display scale, mono index labels, kill pills. (1 PR, all pages)
2. **Home restructure** — rooms, proof strip, index-list selected work. (1 PR)
3. **Projects index + case-study scenes** with per-project accent. (1 PR)
4. **How-it-works + pricing pages** (content from services.ts FAQ material). (1 PR)
5. **Lab umbrella + nav/footer rework.** (1 PR)
6. **Motion system pass** last, once layouts are stable. (1 PR)
