# Homepage & Content Strategy Plan — chintan.design

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform chintan.design from a personal portfolio into a client-acquisition engine that attracts SaaS founders, design agencies, and VC-backed startups — with content optimized for both traditional SEO and AI search citation.

**Architecture:** Homepage restructure with new sections, site-wide copy alignment (platform-agnostic), content pillars mapped to buyer journey, and GEO optimization for AI discoverability.

**Tech Stack:** Next.js App Router, MDX blog, JSON-LD schema, Tailwind CSS

---

## Part 1: Strategic Analysis

### Who Chintan Should Attract

Based on services, reviews, and experience:

| Client Type | Why They Hire | What They Search | Content They Need |
|---|---|---|---|
| **SaaS Founders (Seed–Series B)** | Need a marketing site fast, can't wait on engineering | "hire webflow developer", "saas website developer" | Case studies with metrics, process clarity, speed proof |
| **Design Agencies** | Need reliable white-label dev partner | "webflow development partner", "white label webflow" | Portfolio quality, turnaround reliability, NDA comfort |
| **VC-Backed Startups** | Post-raise, need a site worthy of the brand | "startup website redesign", "webflow for startups" | Speed, enterprise feel, messaging-first architecture |
| **Marketing Teams** | Want AEO/SEO without hiring in-house | "aeo consultant", "programmatic seo service" | Methodology proof, citation data, ROI examples |

### Current Gaps

1. **No impact numbers on homepage** — 7 years, 50+ sites, 9 reviews exist but aren't surfaced as stats
2. **No process section** — clients need to see how working together actually works
3. **No client logos** — social proof from named companies (daydream, Appsmith, Xref, etc.)
4. **Content is Webflow-heavy** — 8/10 blog posts are Webflow-tagged; AEO/GEO and AI services have almost no content
5. **No case studies with results** — projects page shows screenshots but no measurable outcomes
6. **Schema/metadata still says "Webflow & Framer"** — contradicts new platform-agnostic positioning
7. **Footer still says "Webflow & Framer developer"** — inconsistent
8. **llms.txt is Webflow-specific** — hurts AI citability for broader services
9. **No "What is..." definition blocks** — zero AI-citable passages on homepage
10. **Homepage hero has no specific stats** — AI engines cite numbers 3x more than vague claims

---

## Part 2: Homepage Section Recommendations

### Current homepage flow:
1. Hero (profile + headline + subtitle)
2. Photo gallery
3. About section (bento grid: About Me, Toolbox, Services, Calendar)
4. Reviews (3 featured)
5. Selected Work (3 blog posts)
6. Explore (Changelog, Reviews, Stats)
7. Newsletter

### Recommended homepage flow:

```
1. HERO — Value prop + specific stats + CTA
2. PHOTO GALLERY — (keep as-is)
3. TRUST BAR — Client logos (6-8 named companies)
4. ABOUT SECTION — (keep bento grid, already updated)
5. RESULTS SECTION — 3 case study cards with measurable outcomes
6. PROCESS SECTION — How it works (3 steps)
7. REVIEWS — (keep, already updated)
8. BLOG / INSIGHTS — (keep, retitle)
9. FAQ SECTION — AI-citable Q&A block
10. NEWSLETTER — (keep)
```

### New sections to build:

---

### Section A: Trust Bar (Client Logos)

**Why:** Named client logos are the fastest trust signal. Every competitor has them. Chintan has worked with recognizable names but doesn't show them.

**Companies from reviews and projects:**
- daydream
- Appsmith
- Xref
- Luzia
- MD101
- Queensland Basketball
- The Smart Property
- CoS Network / Sylva

**Implementation:**
- Simple horizontal row of 6-8 grayscale logos
- Below the photo gallery, above the bento grid
- No heading needed — just logos
- On hover: logo gets color
- Mobile: horizontal scroll or 2-row grid

**Copy:** None needed. The logos speak for themselves.

---

### Section B: Results / Case Studies (Replace "Selected Work")

**Why:** "Selected Work" currently shows blog posts, not project results. Clients want to see measurable impact, not articles.

**Rename:** "Selected Work" → "Results"

**Content structure per card:**
```
[Project screenshot]
[Company name] — [Category]
[One-line result with specific number]
→ Read case study
```

**Example cards (based on existing project data + reviews):**

1. **daydream** — Webflow Development
   "Full CMS migration with slot-based components — team now ships pages without developer support."

2. **Appsmith** — WordPress to Webflow Migration
   "Migrated entire marketing site under crunched timelines — zero SEO traffic lost."

3. **MD101** — Web Design & Development
   "98 Lighthouse performance score with custom schema markup and blog migration from Substack."

**Action needed:** Create dedicated case study pages (`/projects/[slug]`) with:
- Challenge → Approach → Results structure
- Specific metrics (load time, traffic, conversion)
- Client quote embedded
- Before/after screenshots
- Timeline and scope

---

### Section C: Process Section ("How It Works")

**Why:** Removes uncertainty. Every service page has a 3-step process, but the homepage doesn't show it. This is the #1 thing clients scan for before booking a call.

**Structure:**

```
How it works
Three steps from brief to launch.

[1] Brief & Scope
We align on goals, deliverables, and timeline.
No ambiguity, no surprise scope changes.

[2] Build & Iterate
Weekly async updates on staging. You review
and give feedback throughout — not just at the end.

[3] Launch & Handoff
Full QA, launch support, and a clean handoff
so your team owns the site going forward.
```

**Design:** Three-column layout matching existing bento style. Each step in its own card with step number, title, and 1-2 line description. This data already exists in `app/services/page.tsx` → `processSteps`.

---

### Section D: FAQ Section (GEO-Optimized)

**Why:** FAQ sections are the single highest-impact GEO tactic. Webflow got 330+ new AI citations from FAQ sections on just 6 pages (Chintan's own blog post cites this). Yet the homepage has zero FAQ content.

**Questions to answer (based on what clients actually ask — from service page FAQs):**

```
Frequently Asked Questions

Q: What types of websites do you build?
A: I specialize in marketing sites, landing pages, and CMS-powered platforms
for SaaS startups, design agencies, and VC-backed companies. Most projects
are built on Webflow or Framer, with custom GSAP animations and SEO
foundations included. I also offer AEO/GEO optimization for AI search
visibility and programmatic SEO for scaling organic traffic.

Q: How long does a typical project take?
A: Most marketing sites take 3-6 weeks from kickoff to launch. Migrations
from WordPress typically take 4-8 weeks depending on content volume. Rush
timelines are available — I've shipped full sites in under 2 weeks when needed.

Q: Do you work with design files or handle design too?
A: Both. I can build pixel-perfect from your Figma designs, or handle the
full design-to-development process. About half my clients come with designs;
the other half start from a brief and I design in-browser.

Q: What happens after launch?
A: Every project includes 30 days of post-launch support. After that, your
team owns the site — I document everything and do a handoff walkthrough.
Many clients keep me on retainer for ongoing iterations.

Q: How much does a project cost?
A: Most projects range from $3,000-$15,000 depending on scope. I price
per project, not hourly. You'll get a fixed quote before we start —
no surprises.
```

**Schema:** Do NOT add FAQPage schema (per SEO skill: FAQ schema only for government/healthcare). Render as visible HTML with proper H3 headings for AI crawlability.

---

### Section E: Hero Stats Bar

**Why:** AI engines cite specific numbers 3x more. The hero currently has no data points.

**Add below the hero subtitle:**

```
7+ years experience  ·  50+ websites shipped  ·  9 five-star reviews
```

**Implementation:** Simple flex row of 3 stat items, styled as muted text below the subtitle. Animated with staggered fade-in (reuse AnimatedText component).

---

## Part 3: Site-Wide Consistency Updates

These areas still reference "Webflow & Framer" and need alignment with the new platform-agnostic positioning:

### Files to update:

| File | Current | Recommended |
|---|---|---|
| `app/data/siteMetadata.ts` → description | "Webflow & Framer developer specializing in..." | "Web designer & developer building high-performance sites for startups and teams." |
| `app/lib/schema.ts` → `buildPersonSchema()` jobTitle | "Webflow & Framer Developer" | "Web Designer & Developer" |
| `app/lib/schema.ts` → `buildPersonSchema()` description | "Webflow & Framer developer specializing in..." | Match siteMetadata.description |
| `app/lib/schema.ts` → `buildProfilePageSchema()` name | "Chintan Savaliya — Webflow & Framer Developer" | "Chintan Savaliya — Web Designer & Developer" |
| `app/components/Footer.tsx` → tagline | "Webflow & Framer developer crafting intentional websites. Based in India." | "Web designer & developer crafting intentional websites. Based in India." |
| `public/llms.txt` → title and body | Multiple "Webflow & Framer" references | Update to generalized positioning while keeping Webflow/Framer as platform expertise |
| `app/services/page.tsx` → metadata | "Webflow Development Services" | "Web Development Services" |

---

## Part 4: Content Strategy — Blog Pillars

### Current state:
- 10 posts total
- 8 tagged Webflow, 5 tagged AI, 3 tagged Design, 2 tagged AEO/GEO
- No content for: Programmatic SEO, AI & Automations services
- No how-to/tutorial content for clients
- No comparison/alternatives content

### Recommended pillars (4):

#### Pillar 1: Web Development for Startups (Searchable)
Target audience: SaaS founders and marketing leads evaluating developers

| Topic | Type | Target Keyword | Buyer Stage |
|---|---|---|---|
| How to Choose a Web Developer for Your SaaS Startup | Hub post | "hire web developer saas" | Consideration |
| Webflow vs Custom Code: When Each Makes Sense | Comparison | "webflow vs custom development" | Consideration |
| What a Marketing Site Redesign Actually Costs in 2026 | Guide | "website redesign cost" | Decision |
| Why Your Marketing Site Shouldn't Wait for Engineering | Thought leadership | "marketing site without engineering" | Awareness |
| The WordPress to Webflow Migration Checklist | Template | "wordpress to webflow migration" | Decision |

#### Pillar 2: AEO / GEO & AI Search Optimization (Searchable + Shareable)
Target audience: Marketing teams wanting AI visibility — this is a differentiator

| Topic | Type | Target Keyword | Buyer Stage |
|---|---|---|---|
| What Is Answer Engine Optimization? A Complete Guide | Hub post | "answer engine optimization", "AEO" | Awareness |
| How to Get Your Site Cited by ChatGPT, Perplexity, and Google AI | Guide | "AI search optimization" | Awareness |
| AEO Audit Checklist: 25 Things to Check | Template | "AEO audit" | Consideration |
| llms.txt Explained: The New Standard for AI Crawlers | Tutorial | "llms.txt" | Awareness |
| Programmatic SEO for SaaS: Scale Pages Without Thin Content | Guide | "programmatic SEO saas" | Consideration |

#### Pillar 3: Web Animations & Interactive Design (Searchable)
Target audience: Agencies and founders wanting premium feel

| Topic | Type | Target Keyword | Buyer Stage |
|---|---|---|---|
| GSAP Scroll Animations for Webflow: A Practical Guide | Tutorial | "gsap webflow tutorial" | Awareness |
| 10 Scroll Animation Patterns That Actually Convert | Listicle | "scroll animations examples" | Awareness |
| When to Use Animations (and When They Hurt Conversions) | Thought leadership | "web animation best practices" | Consideration |

#### Pillar 4: Behind the Build (Shareable)
Target audience: Founders and peers — builds trust and brand

| Topic | Type | Target Keyword | Buyer Stage |
|---|---|---|---|
| How I Built [Client]'s Site in 2 Weeks (Case Study) | Case study | n/a (shareable) | Decision |
| My Web Development Stack in 2026 | Behind-the-scenes | "webflow developer stack" | Awareness |
| What I Learned Building 50+ Websites | Reflection | n/a (shareable) | Awareness |

### Content priority order:
1. AEO/GEO content (differentiator, growing search volume, no competition)
2. Case studies with metrics (conversion content, builds trust)
3. Startup-focused guides (captures buyer-intent searches)
4. Animation tutorials (demonstrates expertise, attracts agency clients)

---

## Part 5: GEO Quick Wins (Apply Now)

These can be implemented immediately for AI search visibility:

### 1. Add self-contained definition block to About page
First 60 words should directly answer "Who is Chintan Savaliya?":
> "Chintan Savaliya is a web designer and developer with 7+ years of experience building marketing sites for SaaS startups, design agencies, and VC-backed companies. Based in India and working globally, he specializes in Webflow and Framer development, GSAP animations, CMS architecture, and AI search optimization (AEO/GEO)."

### 2. Update llms.txt to be platform-agnostic
Keep Webflow/Framer as platform expertise, but lead with generalized positioning.

### 3. Add specific stats to all service pages
Every service page should have a citable stat in the first paragraph:
- "Built 50+ Webflow sites since 2020"
- "Migrated 180+ blog posts in a single WordPress-to-Webflow project"

### 4. Add question-based H2s to blog posts
Change "The AEO Approach" → "What Is the AEO Approach That Gets AI Citations?"

### 5. Add publication dates visibly on all blog posts
AI engines weight freshness signals heavily.

---

## Part 6: Implementation Priority

### Phase 1: Quick wins (this week)
- [ ] Update siteMetadata, schema, footer, llms.txt (consistency)
- [ ] Add hero stats bar (7+ years, 50+ sites, 9 reviews)
- [ ] Add client logo trust bar
- [ ] Add process section to homepage
- [ ] Add FAQ section to homepage

### Phase 2: Content foundation (next 2 weeks)
- [ ] Create 3 case study pages with measurable results
- [ ] Replace "Selected Work" blog cards with case study cards
- [ ] Write "What Is Answer Engine Optimization?" hub post
- [ ] Write "How to Choose a Web Developer for Your SaaS" guide
- [ ] Add self-contained definition block to About page

### Phase 3: Content scaling (ongoing)
- [ ] Publish 2 AEO/GEO articles per month
- [ ] Create 1 case study per month from past/current projects
- [ ] Build programmatic SEO content (service + city pages if relevant)
- [ ] Add comparison pages (Webflow vs Framer, Webflow vs WordPress)

---

## Appendix: Bugs / Issues Found

1. **`/links` page** still has template placeholder copy referencing "Braydon" and `braydon@coyer.net` — update or remove
2. **Services link on ServicesBento** was pointing to `/projects` — should point to `/services` (already fixed in this session)
3. **`/changelog` page** is disallowed in robots.txt but linked from homepage "Explore" section — intentional?
