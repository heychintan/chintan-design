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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
