# Portfolio Finalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Finalize chintan.design Next.js portfolio: standardized theme system with user-switchable accent colors, projects featured on home, style guide + component library page, AI-native migration service pages, experiments section with working tools, repositioned copy (web developer / product builder), and page-level audit fixes.

**Architecture:** Accent color becomes a set of CSS custom properties on `:root`, mapped into Tailwind tokens. A client-side `ThemeSwitcher` writes `data-accent` to `<html>` and persists to localStorage (inline script in layout prevents flash). Content stays in `app/data/*.ts` modules. New routes: `/styleguide`, `/experiments`, `/experiments/[tool]`. Migration services extend existing `app/data/services.ts` shape.

**Tech Stack:** Next.js 15 App Router, Tailwind 3.4 (CSS-var-backed tokens), framer-motion, existing component library.

> **Status (2026-07-18):** Tasks 1–8 executed and committed on
> `heychintan/portfolio-sanity-cms-integration`. Open follow-ups live in
> `docs/audit-findings.md` and `docs/visual-placeholders.md`.

## Global Constraints

- Accent tokens: `--accent`, `--accent-light`, `--accent-dark`, `--accent-text` on `:root`, overridden per `data-accent` value.
- Accent presets: violet `#6C47FF` (default), blue `#0099FF`, emerald `#059669`, orange `#EA580C`, rose `#E11D48`, slate `#334155`.
- localStorage key: `accent-theme`. No flash on load (inline script before paint).
- All raw `indigo-*` / hardcoded purple classes on touched pages migrate to accent tokens.
- Positioning copy: "web developer & product builder" (not Webflow-only), keep Webflow/Framer as services.
- No new heavy deps. No Sanity (branch name is stale — repo uses Supabase + Velite; leave as-is).
- Commit after each task. `npm run build` must pass at each commit.

---

### Task 1: Accent token system + theme switcher
**Files:** Modify `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/components/Navbar.tsx`. Create `app/components/ThemeSwitcher.tsx`.
- [ ] Define CSS vars in globals.css for 6 presets under `html[data-accent="..."]`, default on `:root`
- [ ] Map Tailwind: `accent: "rgb(var(--accent) / <alpha-value>)"` etc. Keep `purple-primary` as alias to accent var (backwards compat)
- [ ] `ThemeSwitcher.tsx`: row of color circles (popover in navbar), click → `document.documentElement.dataset.accent`, persist localStorage
- [ ] Inline `<script>` in layout head reads localStorage before paint
- [ ] Verify: build passes, toggle persists across navigation
- [ ] Commit

### Task 2: Extract projects data + feature on home
**Files:** Create `app/data/projects.ts`. Modify `app/projects/page.tsx`, `app/page.tsx`. Create `app/components/FeaturedProjects.tsx`.
- [ ] Move hardcoded project array from projects page to `app/data/projects.ts` with `featured` flag
- [ ] `FeaturedProjects` home section: visuals-first grid using existing `public/projects/*` images, links to /projects
- [ ] Place after hero, before services bento on home
- [ ] Commit

### Task 3: Repositioning copy pass
**Files:** Modify `app/data/siteMetadata.ts`, `app/page.tsx` (hero), `app/about/page.tsx`.
- [ ] Hero + meta: "web developer & product builder" positioning, 7 yrs experience, web apps/tools/AI products
- [ ] Commit

### Task 4: Migration services (AI-native stack)
**Files:** Modify `app/data/services.ts`, `app/services/page.tsx`.
- [ ] Add services: `webflow-to-nextjs`, `webflow-to-astro`, `wordpress-to-nextjs`, `framer-to-nextjs`, `squarespace-wix-to-nextjs`, `custom-website`. Each: SEO title/description, who-it's-for (own your site, maintain with Claude/Codex, Sanity/Payload CMS, Vercel/Cloudflare/Netlify), process steps, FAQ
- [ ] Group services page: "Design & Build" vs "Migrations to AI-native stack"
- [ ] Commit

### Task 5: Style guide + component library page
**Files:** Create `app/styleguide/page.tsx` (+ section components as needed).
- [ ] Sections: color tokens (live accent-aware swatches), typography scale, spacing, buttons, pills, cards/bentos, section patterns — each rendered live from real components with usage notes
- [ ] Link in footer
- [ ] Commit

### Task 6: Experiments section
**Files:** Create `app/data/experiments.ts`, `app/experiments/page.tsx`, `app/experiments/color-extractor/page.tsx`, `app/experiments/glass-effect/page.tsx`, `app/experiments/code-formatter/page.tsx` (+ client components).
- [ ] Index page with cards (working tools + "coming soon" entries: SVG animator, 3D viewer, PDF analyzer, pricing configurator)
- [ ] Color extractor: upload image → canvas sampling → palette with copyable hex
- [ ] Glass effect: upload image → frosted/fluted glass CSS overlay with sliders (blur, stripe width, direction) → CSS copy
- [ ] Code formatter: JSON/HTML pretty-print + minify + JSON→TS interface
- [ ] Nav link
- [ ] Commit per tool

### Task 7: Page audit + fixes
**Files:** Audit via screenshots (dev server + browser), fix in place.
- [ ] Audit home, projects, services, about, experiments for alignment/spacing/hierarchy/leftover Braydon content
- [ ] Fix top issues; document rest in `docs/audit-findings.md` with visual-placeholder suggestions per page
- [ ] Commit

### Task 8: Visuals + SVG graphics
**Files:** Create branded SVG components/assets for service + migration pages; placeholder specs where generation tools needed.
- [ ] Migration diagram SVG (Webflow → AI-native stack) in accent colors
- [ ] Per-service abstract SVG art (consistent style)
- [ ] `docs/visual-placeholders.md`: page-by-page list of recommended visuals to generate in Figma/Paper
- [ ] Commit
