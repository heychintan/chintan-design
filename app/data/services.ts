export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Review = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type Service = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  keywords: string[];
  deliverables: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  reviews: Review[];
  relatedPosts: string[];
};

export const services: Service[] = [
  {
    slug: "webflow-development",
    title: "Webflow Development",
    headline: "Production-ready Webflow sites built for performance, SEO, and scale.",
    description:
      "Custom Webflow development for founders, product teams, and agencies. From marketing sites to CMS-driven blogs — built with intention, shipped fast.",
    keywords: ["webflow developer", "webflow expert", "hire webflow developer", "webflow development"],
    deliverables: [
      "Pixel-perfect implementation from Figma or design spec",
      "Fully responsive layouts (mobile, tablet, desktop)",
      "Webflow CMS setup with structured content model",
      "SEO foundations: meta, OG, sitemap, schema",
      "Performance-optimized asset delivery",
      "Interaction & animation polish",
      "Staging handoff + deployment checklist",
      "30-day post-launch support",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & scope",
        description:
          "We align on goals, pages, integrations, and timeline. I review your design files or build a brief together if you're starting from scratch.",
      },
      {
        step: 2,
        title: "Build & iterate",
        description:
          "I build in Webflow with weekly async updates. You review on staging and provide feedback — no long silences, no surprises.",
      },
      {
        step: 3,
        title: "QA & launch",
        description:
          "Full cross-browser and device QA, SEO checklist, and a clean handoff so your team can manage the site independently.",
      },
    ],
    faqs: [
      {
        question: "How long does a typical Webflow project take?",
        answer:
          "Most marketing sites take 2–4 weeks from kickoff to launch. Larger projects with custom animations, CMS, or complex integrations run 4–8 weeks. I'll give you a specific timeline during scoping.",
      },
      {
        question: "Do I need a Webflow account?",
        answer:
          "Yes — the final site lives under your Webflow account. I build on my account during development and transfer on launch. You'll need at least a Webflow Basic plan to host.",
      },
      {
        question: "Can you build from a Figma file?",
        answer:
          "Absolutely. Send me your Figma file and I'll handle the Webflow build. I also work from rough wireframes or brand guidelines if the design isn't fully finished.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "All projects include 30 days of post-launch support for bug fixes and minor adjustments. Ongoing retainer or hourly packages are available for continued development.",
      },
      {
        question: "Do you work with teams or just founders?",
        answer:
          "Both. I work directly with solo founders, in-house marketing teams, and as a development partner for design agencies. The workflow adapts to however your team operates.",
      },
    ],
    reviews: [
      {
        name: "Alex M.",
        role: "Founder",
        company: "SaaS Startup",
        quote:
          "Chintan took our Figma designs and turned them into a Webflow site that looked better than we imagined. Fast, communicative, and genuinely cares about the details.",
      },
      {
        name: "Sara P.",
        role: "Marketing Lead",
        company: "B2B SaaS",
        quote:
          "We've worked with several Webflow developers. Chintan is the first one who understood our CMS needs from day one and built a content model that actually makes sense for our team.",
      },
    ],
    relatedPosts: [
      "from-idea-to-published-claude-mcp-webflow-workflow",
    ],
  },
  {
    slug: "framer-development",
    title: "Framer Development",
    headline: "Framer sites with real interactivity — beyond what templates offer.",
    description:
      "Custom Framer development for brands that want more than a template. Interactive components, smooth animations, and CMS-powered content — all in Framer.",
    keywords: ["framer developer", "framer expert", "hire framer developer", "framer development"],
    deliverables: [
      "Custom Framer component development",
      "Advanced interactions and scroll animations",
      "Framer CMS integration and content model",
      "Responsive layout across all breakpoints",
      "Custom code overrides where needed",
      "Performance optimization",
      "Handoff with documentation",
    ],
    process: [
      {
        step: 1,
        title: "Design alignment",
        description:
          "We review your Figma or existing Framer file, agree on scope and interaction patterns, and define what needs custom code vs. native Framer components.",
      },
      {
        step: 2,
        title: "Component build",
        description:
          "I build each section and component with care — starting with structure, then adding interaction and animation refinement.",
      },
      {
        step: 3,
        title: "Review & publish",
        description:
          "You preview on staging, request adjustments, and I handle the Framer publish and domain setup.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between Framer and Webflow?",
        answer:
          "Framer is design-led with strong React-based interactivity and is excellent for visually bold, animation-forward sites. Webflow has a more mature CMS and is better for content-heavy sites. Both are great tools — the right choice depends on your priorities.",
      },
      {
        question: "Can I edit the site myself after launch?",
        answer:
          "Yes. Framer has a simple editing interface for content updates. I'll structure the site so your team can manage text, images, and CMS content without touching the design.",
      },
      {
        question: "Do you use Framer AI or build custom?",
        answer:
          "I build custom. Framer AI is useful for quick prototypes, but production sites need proper component architecture, responsive logic, and performance optimization — which requires building from the ground up.",
      },
      {
        question: "Can you add custom animations not available in Framer by default?",
        answer:
          "Yes — through Framer's code override system, I can add custom GSAP animations, Three.js, or any JavaScript-driven interaction that goes beyond Framer's built-in tools.",
      },
    ],
    reviews: [
      {
        name: "Priya K.",
        role: "Product Designer",
        company: "Design Agency",
        quote:
          "Chintan translated our complex Figma prototype into a fully working Framer site with all the micro-interactions intact. Exceptional attention to detail.",
      },
      {
        name: "James R.",
        role: "Co-founder",
        company: "VC-backed startup",
        quote:
          "We needed a Framer developer who could handle custom React components and animations. Chintan delivered exactly what we needed — on time and on spec.",
      },
    ],
    relatedPosts: [],
  },
  {
    slug: "wordpress-to-webflow",
    title: "WordPress to Webflow Migration",
    headline: "Leave WordPress behind. Move to Webflow without losing your content or SEO.",
    description:
      "Full WordPress to Webflow migration service — content migration, redirect mapping, SEO preservation, and a cleaner site on the other side.",
    keywords: [
      "wordpress to webflow migration",
      "migrate wordpress to webflow",
      "webflow migration",
    ],
    deliverables: [
      "Full content audit and migration plan",
      "All pages and posts migrated to Webflow CMS",
      "301 redirect mapping for all changed URLs",
      "SEO metadata preserved (titles, descriptions, canonicals)",
      "Image optimization and re-upload",
      "Design rebuild or theme translation in Webflow",
      "DNS cutover support",
      "Post-migration SEO monitoring checklist",
    ],
    process: [
      {
        step: 1,
        title: "Audit & plan",
        description:
          "I crawl your WordPress site, catalog all pages, posts, and media, and build a migration plan with redirect mapping and CMS schema design.",
      },
      {
        step: 2,
        title: "Build & migrate",
        description:
          "I rebuild the site design in Webflow, import all content into CMS collections, and set up all redirects before any DNS changes.",
      },
      {
        step: 3,
        title: "Cutover & verify",
        description:
          "DNS cutover during low-traffic hours, followed by a 48-hour monitoring period to catch any broken links or crawl issues.",
      },
    ],
    faqs: [
      {
        question: "Will I lose my Google rankings during migration?",
        answer:
          "Not if the migration is done properly. Proper 301 redirects preserve link equity, and we ensure all SEO metadata carries over. Most sites maintain rankings within 2–4 weeks.",
      },
      {
        question: "How long does a migration take?",
        answer:
          "Small sites (under 50 pages) typically take 1–2 weeks. Medium sites (50–200 pages) take 3–4 weeks. Large content archives with hundreds of posts take 6–8 weeks and may include phased migration.",
      },
      {
        question: "What about my WordPress plugins?",
        answer:
          "Most plugin functionality (SEO, forms, analytics, CRM integration) has a native Webflow equivalent or a simpler third-party solution. I'll audit your plugin list and recommend replacements during scoping.",
      },
      {
        question: "Do I need to cancel my WordPress hosting right away?",
        answer:
          "No — keep your WordPress site live until the Webflow site is fully tested and DNS has propagated. Usually 2–7 days after cutover you can cancel.",
      },
      {
        question: "Can you migrate a WooCommerce store?",
        answer:
          "Webflow Commerce is an option for simple product catalogues, but for complex stores I'd recommend evaluating Shopify instead. I can advise on the right path during scoping.",
      },
    ],
    reviews: [
      {
        name: "Tom H.",
        role: "Head of Marketing",
        company: "B2B SaaS",
        quote:
          "We had 180 blog posts on WordPress and were nervous about losing SEO. Chintan handled the entire migration — every redirect, every meta tag. Rankings held and the new Webflow site is night and day better.",
      },
      {
        name: "Lisa B.",
        role: "Founder",
        company: "Consultancy",
        quote:
          "Finally off WordPress. The migration was smooth, the new site is fast, and I can actually edit content myself without touching a plugin.",
      },
    ],
    relatedPosts: [],
  },
  {
    slug: "gsap-animations",
    title: "GSAP Web Animations",
    headline: "Scroll-driven animations and micro-interactions that make your site feel alive.",
    description:
      "GSAP animation development for Webflow, Framer, and custom sites. ScrollTrigger, timeline animations, hover states, and page transitions — built for performance.",
    keywords: [
      "gsap webflow animations",
      "gsap developer",
      "webflow animations",
      "scroll animations webflow",
    ],
    deliverables: [
      "GSAP ScrollTrigger scroll-driven animations",
      "Page transition sequences",
      "Hover and interaction micro-animations",
      "Text reveal and split animations",
      "SVG path animations",
      "Stagger animations for lists and grids",
      "Performance-optimized (will-change, GPU compositing)",
      "Documented custom code for easy maintenance",
    ],
    process: [
      {
        step: 1,
        title: "Animation brief",
        description:
          "We review reference sites and define an animation spec — what animates, when, at what speed, and with what easing. This prevents scope creep and aligns expectations.",
      },
      {
        step: 2,
        title: "Implementation",
        description:
          "I build animations via GSAP in Webflow custom code, Framer overrides, or a standalone JS file — depending on your stack.",
      },
      {
        step: 3,
        title: "Refinement & handoff",
        description:
          "We review animations on real devices and adjust timing, easing, and trigger points. Final code is documented and commented for your team.",
      },
    ],
    faqs: [
      {
        question: "Do GSAP animations hurt page performance?",
        answer:
          "Only if implemented poorly. I use GPU-composited properties (transform, opacity), will-change hints, and lazy initialization to ensure animations don't block the main thread. Core Web Vitals stay clean.",
      },
      {
        question: "Can you add GSAP to an existing Webflow site?",
        answer:
          "Yes — GSAP integrates with existing Webflow sites via custom code embeds. No rebuild required. I'll audit your existing setup and implement animations without disrupting the current design.",
      },
      {
        question: "What's the difference between Webflow Interactions and GSAP?",
        answer:
          "Webflow Interactions are great for simple triggers but have limited control over timing, sequencing, and complex scroll behavior. GSAP gives full programmatic control — essential for anything beyond basic fade/slide effects.",
      },
      {
        question: "Do you work on non-Webflow sites?",
        answer:
          "Yes — GSAP works on any web stack. I've implemented animations on Next.js, Framer, WordPress, and vanilla HTML sites.",
      },
    ],
    reviews: [
      {
        name: "Maya L.",
        role: "Creative Director",
        company: "Design Agency",
        quote:
          "The scroll animations Chintan built for our client's site won us the project renewal. The execution matched our vision perfectly — and the client thought we were geniuses.",
      },
      {
        name: "Chris D.",
        role: "Founder",
        company: "SaaS",
        quote:
          "We had tried to build GSAP animations in-house and it was a mess. Chintan rebuilt everything cleanly in a week and the site now loads faster than before.",
      },
    ],
    relatedPosts: [],
  },
  {
    slug: "cms-architecture",
    title: "CMS Architecture & Strategy",
    headline: "A content model that makes sense — for your editors and your roadmap.",
    description:
      "Webflow CMS architecture and strategy for teams who need to scale content without scaling complexity. Structure design, collection planning, and editor experience optimization.",
    keywords: [
      "webflow cms development",
      "webflow cms setup",
      "webflow cms architecture",
      "cms strategy",
    ],
    deliverables: [
      "Content audit of existing structure",
      "CMS schema design (collections, fields, references)",
      "Editor experience optimization (field labels, helper text)",
      "Multi-reference and conditional logic setup",
      "Template page design for all collection types",
      "Content migration from existing source",
      "Documentation: editor guide + content governance rules",
    ],
    process: [
      {
        step: 1,
        title: "Content audit",
        description:
          "We map all content types, relationships, and editorial workflows. I identify what's working, what's confusing, and what's missing.",
      },
      {
        step: 2,
        title: "Schema design",
        description:
          "I design the CMS schema — collections, field types, references — optimized for both editorial efficiency and front-end flexibility.",
      },
      {
        step: 3,
        title: "Build & document",
        description:
          "I implement the schema in Webflow, build all collection templates, and write an editor guide so your team can manage content confidently.",
      },
    ],
    faqs: [
      {
        question: "How do I know if my CMS architecture needs work?",
        answer:
          "Common signs: editors are confused about where to put content, you can't surface related items dynamically, your collection templates look inconsistent, or you're duplicating content across multiple collections.",
      },
      {
        question: "Can you restructure a CMS that's already in use?",
        answer:
          "Yes — though it requires planning. I'll design the new schema, migrate existing content, and update all template pages without taking the site down.",
      },
      {
        question: "How many CMS collections do I actually need?",
        answer:
          "Usually fewer than you think. Most sites need: Blog Posts, Projects/Case Studies, Team Members, and maybe Testimonials. I'll help you resist over-engineering the structure.",
      },
      {
        question: "Does Webflow CMS have limits?",
        answer:
          "Yes — Webflow CMS collections cap at 20,000 items per collection on Business plans. For most content sites this is more than enough, but if you have large product catalogues or user-generated content, I'll design accordingly.",
      },
    ],
    reviews: [
      {
        name: "Rachel T.",
        role: "Content Manager",
        company: "SaaS",
        quote:
          "Our Webflow CMS was a disaster — 12 collections, none of them connected properly. Chintan rebuilt it in two days and now our editors actually enjoy updating content.",
      },
      {
        name: "Dan W.",
        role: "Head of Growth",
        company: "Startup",
        quote:
          "We needed a CMS that could handle blog posts, case studies, and a resources hub — all dynamically interlinked. Chintan nailed the architecture and built the whole thing in Webflow in under a week.",
      },
    ],
    relatedPosts: [],
  },
  {
    slug: "webflow-to-nextjs",
    title: "Webflow to Next.js Migration",
    headline:
      "Move off Webflow into a Next.js stack you fully own — and maintain with AI.",
    description:
      "Migrate your Webflow site to Next.js with Sanity or Payload CMS, deployed on Vercel. Your team owns the code, edits content in a real CMS, and ships new pages with Claude or Codex — no seat pricing, no platform lock-in.",
    keywords: [
      "webflow to nextjs migration",
      "migrate webflow to next.js",
      "webflow to react",
      "webflow alternative developer",
      "ai native website stack",
    ],
    deliverables: [
      "Pixel-accurate rebuild of your Webflow site in Next.js (App Router)",
      "Sanity or Payload CMS with a content model matching your Webflow collections",
      "Full content migration — CMS items, assets, and redirects with zero data loss",
      "Design system with tokens and documented components AI tools can compose from",
      "CLAUDE.md / AGENTS.md project docs so Claude or Codex can maintain the site",
      "SEO parity: meta, schema markup, sitemap, llms.txt, 301 redirect map",
      "Deployment on Vercel with preview branches via GitHub",
      "Handoff session: how to edit content, and how to ship changes with AI",
    ],
    process: [
      {
        step: 1,
        title: "Audit & content model",
        description:
          "I map every page, CMS collection, and interaction in your Webflow site, then design the Next.js architecture and CMS schema to match — flagging anything worth simplifying along the way.",
      },
      {
        step: 2,
        title: "Rebuild & migrate",
        description:
          "I rebuild the site in Next.js with a tokenized design system, migrate all CMS content and assets programmatically, and wire up Sanity or Payload so editing feels as easy as Webflow.",
      },
      {
        step: 3,
        title: "SEO cutover & AI handoff",
        description:
          "Redirect map, schema, and sitemap go live so rankings carry over. You get project docs written for AI agents, plus a walkthrough of maintaining the site with Claude or Codex.",
      },
    ],
    faqs: [
      {
        question: "Why move from Webflow to Next.js at all?",
        answer:
          "Ownership and leverage. On Webflow you rent the platform — pricing, limits, and features are theirs. On Next.js you own the code in your GitHub, host anywhere, integrate anything, and use AI tools like Claude or Codex to build new pages and features at a fraction of ongoing agency cost.",
      },
      {
        question: "Will my team still be able to edit content without developers?",
        answer:
          "Yes. Sanity or Payload gives your team a visual editing experience for all content — posts, case studies, landing page copy. Structural changes (new sections, new page types) are where AI-assisted development takes over, using the design system I hand off.",
      },
      {
        question: "How do AI tools maintain the site after handoff?",
        answer:
          "The project ships with a documented design system, reusable components, and CLAUDE.md/AGENTS.md instructions. You (or anyone on your team) can ask Claude Code or Codex to 'create a pricing page using our design system' and get an on-brand result — the codebase is structured specifically for that.",
      },
      {
        question: "Will the migration hurt my SEO?",
        answer:
          "No — protecting rankings is a core deliverable. Every URL gets a 301 redirect or an exact-match route, meta and schema markup carry over (usually improved), and Next.js typically outperforms Webflow on Core Web Vitals.",
      },
      {
        question: "How long does a Webflow to Next.js migration take?",
        answer:
          "A typical marketing site with CMS migrates in 3–6 weeks depending on page count, collections, and animation complexity. You'll get a concrete timeline after the audit.",
      },
    ],
    reviews: [],
    relatedPosts: ["webflow-is-not-a-website-builder-anymore"],
  },
  {
    slug: "webflow-to-astro",
    title: "Webflow to Astro Migration",
    headline:
      "Content-heavy Webflow site? Astro makes it faster, cheaper, and yours.",
    description:
      "Migrate your Webflow site to Astro with Sanity CMS or content collections, deployed on Cloudflare or Netlify. Best-in-class performance for content and marketing sites — owned in your GitHub and maintained with AI tools.",
    keywords: [
      "webflow to astro migration",
      "migrate webflow to astro",
      "astro developer",
      "fastest website framework",
    ],
    deliverables: [
      "Full rebuild in Astro — zero-JS by default, islands only where needed",
      "Sanity CMS or Astro content collections matching your Webflow structure",
      "Complete content and asset migration with 301 redirect map",
      "Tokenized design system + component library documented for AI agents",
      "CLAUDE.md / AGENTS.md docs for AI-assisted maintenance",
      "SEO parity plus performance gains (Astro routinely hits 100 Lighthouse)",
      "Deployment on Cloudflare Pages or Netlify with GitHub CI",
      "Team handoff: content editing + shipping new pages with Claude/Codex",
    ],
    process: [
      {
        step: 1,
        title: "Audit & architecture",
        description:
          "I inventory your pages, collections, and interactions, then pick the right content approach — Sanity for editor-heavy teams, content collections for developer-lean setups.",
      },
      {
        step: 2,
        title: "Rebuild & migrate",
        description:
          "Astro rebuild with a shared design system, programmatic migration of all CMS content, and interactive islands only where your site genuinely needs JavaScript.",
      },
      {
        step: 3,
        title: "Cutover & handoff",
        description:
          "Redirects, schema, and sitemap ship with the launch. Your team gets AI-ready project docs and a walkthrough for maintaining and extending the site.",
      },
    ],
    faqs: [
      {
        question: "Astro or Next.js — which should I migrate to?",
        answer:
          "Astro if your site is mostly content: marketing pages, blog, docs, case studies. It ships almost no JavaScript, so it's faster by default and cheaper to host. Next.js if you need app-like features — dashboards, auth, heavy interactivity. I'll recommend one honestly during the audit.",
      },
      {
        question: "Can my team still edit content easily?",
        answer:
          "Yes. With Sanity you get a visual studio for all content. With content collections, editing is markdown files — which AI tools handle exceptionally well, so 'update the pricing page copy' becomes a one-line request to Claude.",
      },
      {
        question: "What happens to my Webflow animations?",
        answer:
          "Most Webflow interactions translate to CSS animations or lightweight GSAP — often smoother than the original. Anything complex gets rebuilt as an Astro island so it doesn't drag down the rest of the page.",
      },
      {
        question: "How long does it take?",
        answer:
          "Typical content sites migrate in 2–5 weeks. Large CMS libraries add time for migration scripting and QA, but the process is programmatic — not copy-paste.",
      },
    ],
    reviews: [],
    relatedPosts: [],
  },
  {
    slug: "wordpress-to-nextjs",
    title: "WordPress to Next.js Migration",
    headline:
      "Retire the plugin stack. Own a modern site that AI can maintain.",
    description:
      "Migrate your WordPress site to Next.js with Payload or Sanity CMS on Vercel or Cloudflare. No more plugin updates, security patches, or hosting bloat — a fast, secure, fully-owned site your team maintains with AI tools.",
    keywords: [
      "wordpress to nextjs migration",
      "migrate wordpress to next.js",
      "wordpress alternative",
      "headless wordpress migration",
    ],
    deliverables: [
      "Next.js rebuild of your full site — design refresh optional",
      "Payload or Sanity CMS replacing the WordPress admin",
      "Programmatic migration of posts, pages, media, categories, and authors",
      "301 redirect map covering every URL, including archive and tag pages",
      "Design system + AI-ready project docs (CLAUDE.md / AGENTS.md)",
      "SEO parity: meta, schema, sitemap, llms.txt",
      "Modern hosting on Vercel, Cloudflare, or Netlify — no server maintenance",
      "Team training on the new CMS and AI-assisted workflow",
    ],
    process: [
      {
        step: 1,
        title: "Export & audit",
        description:
          "I pull your full WordPress database and media library, map every content type and URL, and design the new content model — dropping the cruft that accumulated over the years.",
      },
      {
        step: 2,
        title: "Rebuild & migrate",
        description:
          "Next.js rebuild with a clean design system, scripted migration of all content into Payload or Sanity, and rebuilt forms, search, and integrations without plugins.",
      },
      {
        step: 3,
        title: "Cutover & handoff",
        description:
          "Redirects and SEO checks go live with the launch, DNS switches with zero downtime, and your team gets docs and training for the AI-native workflow.",
      },
    ],
    faqs: [
      {
        question: "What happens to my years of blog posts?",
        answer:
          "They migrate programmatically — posts, images, categories, authors, and publish dates all carry over. Migration is scripted and verified, not manual copy-paste, so 500 posts is as safe as 50.",
      },
      {
        question: "Do I lose the WordPress editor experience?",
        answer:
          "You trade it up. Payload and Sanity give you a cleaner, faster editing experience without the plugin clutter — and unlike WordPress, the front end can't be broken by an editor action or a plugin update.",
      },
      {
        question: "What about my plugins — forms, SEO, caching?",
        answer:
          "Most plugins exist to patch WordPress limitations. Forms become lightweight integrations, SEO is built into the framework, and caching is handled by the platform. Genuinely custom functionality gets rebuilt as first-class features.",
      },
      {
        question: "Is this cheaper to run than WordPress?",
        answer:
          "Almost always. Hosting drops to free-to-cheap tiers on Vercel or Cloudflare, and you stop paying for plugin licenses, security monitoring, and maintenance retainers. AI-assisted maintenance replaces most 'small change' agency invoices.",
      },
    ],
    reviews: [],
    relatedPosts: [],
  },
  {
    slug: "framer-to-nextjs",
    title: "Framer to Next.js Migration",
    headline:
      "Keep the polish, own the platform — Framer sites rebuilt in Next.js.",
    description:
      "Migrate your Framer site to Next.js with Sanity or Payload CMS. Keep the animations and design quality you love, gain code ownership, real CMS flexibility, and AI-assisted maintenance with Claude or Codex.",
    keywords: [
      "framer to nextjs migration",
      "migrate framer to next.js",
      "framer to react",
      "framer alternative",
    ],
    deliverables: [
      "Next.js rebuild preserving your Framer design and animation feel",
      "Framer Motion animations rebuilt natively (same library, full control)",
      "Sanity or Payload CMS for structured content beyond Framer's CMS limits",
      "Complete content and asset migration with redirect map",
      "Design system + AI-ready docs for ongoing maintenance",
      "SEO parity with improved Core Web Vitals",
      "Vercel deployment with GitHub previews",
      "Handoff and AI workflow training",
    ],
    process: [
      {
        step: 1,
        title: "Audit & motion inventory",
        description:
          "I catalog your pages, CMS collections, and every animation and interaction — Framer sites live on their motion design, so it gets mapped precisely before any rebuild starts.",
      },
      {
        step: 2,
        title: "Rebuild & migrate",
        description:
          "The site is rebuilt in Next.js using Framer Motion — the same animation engine Framer uses — so transitions and scroll effects survive the move. Content migrates into your new CMS.",
      },
      {
        step: 3,
        title: "Cutover & handoff",
        description:
          "SEO cutover with redirects and schema, then handoff with AI-ready docs so new sections match your design system and motion language.",
      },
    ],
    faqs: [
      {
        question: "Will my animations survive the migration?",
        answer:
          "Yes — this is the key advantage of Next.js for Framer migrations. Framer's animation engine is the open-source Framer Motion library, which works natively in Next.js. Your transitions are rebuilt with the same physics, plus finer control than Framer's UI exposes.",
      },
      {
        question: "Why leave Framer if the site looks great?",
        answer:
          "Teams usually hit one of three walls: CMS limits (relations, localization, scale), platform pricing as traffic grows, or wanting features Framer can't express. Migration keeps the design quality while removing the ceiling.",
      },
      {
        question: "How long does it take?",
        answer:
          "Most Framer sites migrate in 2–5 weeks. Motion-heavy sites sit at the upper end because animations are rebuilt deliberately, not approximated.",
      },
    ],
    reviews: [],
    relatedPosts: [],
  },
  {
    slug: "squarespace-wix-to-modern-stack",
    title: "Squarespace / Wix to Modern Stack",
    headline:
      "Graduate from site builders to a fast, owned, AI-maintainable website.",
    description:
      "Migrate your Squarespace or Wix site to Astro or Next.js with a modern CMS, hosted on Cloudflare or Vercel. Faster pages, real SEO control, no template ceiling — and a site your team extends with AI tools.",
    keywords: [
      "squarespace to astro",
      "wix to nextjs",
      "migrate squarespace website",
      "wix alternative for business",
    ],
    deliverables: [
      "Redesign-quality rebuild in Astro or Next.js (framework chosen per site)",
      "Sanity CMS or content collections for easy editing",
      "Full content and media migration with 301 redirects",
      "Design system tokens + documented components",
      "SEO foundations builders can't offer: schema, llms.txt, full meta control",
      "Hosting on Cloudflare or Vercel — typically cheaper than builder plans",
      "AI-ready project docs and handoff training",
    ],
    process: [
      {
        step: 1,
        title: "Audit & redesign scope",
        description:
          "Builder sites usually deserve a visual refresh on the way out. I audit content and SEO, then we agree whether this is a faithful rebuild or an upgrade.",
      },
      {
        step: 2,
        title: "Build & migrate",
        description:
          "The new site goes up in Astro or Next.js with a proper design system, and your content and media migrate over with URL mapping for every page.",
      },
      {
        step: 3,
        title: "Launch & handoff",
        description:
          "DNS cutover with redirects in place, SEO verification, and a handoff session covering content editing and AI-assisted changes.",
      },
    ],
    faqs: [
      {
        question: "My builder site 'works' — why migrate?",
        answer:
          "Speed, search, and ceiling. Builder sites carry heavy scripts that hurt Core Web Vitals, offer limited SEO and schema control, and cap what you can build. If the website matters to how you win customers, the platform eventually costs more than it saves.",
      },
      {
        question: "Will editing be harder than Squarespace or Wix?",
        answer:
          "Day-to-day editing stays simple — Sanity gives you a clean editing studio for text, images, and posts. What changes is the upside: new page types and features no longer hit a template wall.",
      },
      {
        question: "What does this cost to run?",
        answer:
          "Usually less than your builder subscription. Cloudflare and Vercel host sites like this free or nearly free, and the code is yours — no monthly platform fee to keep your own website online.",
      },
    ],
    reviews: [],
    relatedPosts: [],
  },
  {
    slug: "custom-website",
    title: "Custom Website Development",
    headline:
      "A custom-built site on an AI-native stack — designed, developed, and handed over ready to grow.",
    description:
      "Custom website design and development on Next.js or Astro with Sanity or Payload CMS. Built from scratch around your brand, with a design system and AI-ready docs so your site compounds instead of decaying.",
    keywords: [
      "custom website development",
      "nextjs developer",
      "astro developer",
      "custom web design and development",
      "ai native website",
    ],
    deliverables: [
      "Custom design — no templates — grounded in your brand",
      "Next.js or Astro build with a tokenized design system",
      "Sanity or Payload CMS structured around your actual content",
      "Component library documented so AI tools can build new sections on-brand",
      "SEO architecture from day one: schema, sitemap, llms.txt, AEO/GEO-ready",
      "Analytics and conversion tracking wired in",
      "GitHub + Vercel/Cloudflare deployment with preview environments",
      "CLAUDE.md / AGENTS.md docs + handoff training",
    ],
    process: [
      {
        step: 1,
        title: "Strategy & design",
        description:
          "We define positioning, pages, and content structure, then I design the site — design system first, pages second, so everything stays consistent as the site grows.",
      },
      {
        step: 2,
        title: "Build",
        description:
          "The design becomes a production codebase: tokens, components, CMS schema, and pages, with weekly staging reviews throughout.",
      },
      {
        step: 3,
        title: "Launch & compound",
        description:
          "Launch with full SEO foundations, then handoff: your team edits content in the CMS and ships new sections with AI tools that follow your design system automatically.",
      },
    ],
    faqs: [
      {
        question: "What makes a site 'AI-native'?",
        answer:
          "The codebase is structured for AI collaboration: a documented design system, consistent component patterns, and agent instructions (CLAUDE.md/AGENTS.md) checked into the repo. That means Claude or Codex can create a new landing page that genuinely matches your brand — not generic output.",
      },
      {
        question: "Next.js or Astro for my project?",
        answer:
          "Astro for content-led sites where speed is everything; Next.js when you need application features — auth, dashboards, personalization. I recommend based on your roadmap, not preference.",
      },
      {
        question: "Do you handle design too, or just development?",
        answer:
          "Both. Most projects are end-to-end: brand-grounded design in Figma, then the production build. If you already have a designer, I'll build from their files.",
      },
      {
        question: "What does a custom site cost?",
        answer:
          "More upfront than a template, less over time than a platform. Exact pricing depends on page count, CMS complexity, and design scope — you'll get a fixed quote after a scoping call.",
      },
    ],
    reviews: [],
    relatedPosts: ["the-website-is-the-pitch"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
