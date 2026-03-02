export type PainPoint = {
  title: string;
  description: string;
};

export type Solution = {
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

export type Industry = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  painPoints: PainPoint[];
  solutions: Solution[];
  faqs: FAQ[];
  reviews: Review[];
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "saas-startups",
    title: "Webflow for SaaS Startups",
    headline: "A marketing site that converts — built for the speed SaaS startups need.",
    description:
      "SaaS startups need to move fast: landing pages for every campaign, a blog that builds organic, a pricing page that actually converts. Webflow is the stack that lets you do all of it without engineering resources.",
    painPoints: [
      {
        title: "Your marketing site is bottlenecked by engineering",
        description:
          "Every landing page, every copy tweak, every A/B test goes through the eng queue. By the time it ships, the campaign is over.",
      },
      {
        title: "Your blog isn't driving organic traffic",
        description:
          "You're publishing, but with no SEO structure, no internal linking strategy, and no schema — Google doesn't know what you're about.",
      },
      {
        title: "The site doesn't match the product's quality",
        description:
          "Your product is polished. Your marketing site looks like it was shipped in a weekend — because it was.",
      },
      {
        title: "You can't move fast enough to test messaging",
        description:
          "Positioning shifts quarterly in early-stage SaaS. Your site needs to keep up, not lag three sprints behind.",
      },
    ],
    solutions: [
      {
        title: "Webflow lets marketing own the site",
        description:
          "Once the Webflow site is built properly, your marketing team can edit copy, add pages, and manage the blog without touching engineering. No deployments, no PRs.",
      },
      {
        title: "CMS built for SEO from day one",
        description:
          "Blog CMS with proper slug structure, meta fields, canonical URLs, and schema markup. The technical SEO foundation that compound interest is built on.",
      },
      {
        title: "Design quality that matches your product",
        description:
          "Pixel-perfect implementation from your Figma designs, with micro-interactions and animation polish that signals craft to every visitor.",
      },
      {
        title: "Launch in weeks, not quarters",
        description:
          "Most SaaS marketing sites go from kickoff to launch in 2–4 weeks. No sprint dependencies, no eng tickets.",
      },
    ],
    faqs: [
      {
        question: "Do we need a designer before working with you?",
        answer:
          "Not necessarily. If you have brand guidelines and a rough direction, I can work from wireframes or reference sites. For teams without an in-house designer, I can recommend design partners I trust.",
      },
      {
        question: "Can we run A/B tests on a Webflow site?",
        answer:
          "Yes — through tools like Convert, VWO, or Google Optimize. I'll set up the Webflow site with proper class naming conventions and CMS structure to make testing straightforward.",
      },
      {
        question: "How do we handle localization if we expand internationally?",
        answer:
          "Webflow has built-in localization support for multi-language sites. I'll architect the site from the start with localization in mind if that's on your roadmap.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "Webflow integrates with Zapier, Make, HubSpot, Intercom, Segment, Hotjar, and hundreds of other tools via embed code or native integrations. I'll configure the integrations your stack needs.",
      },
      {
        question: "What happens when we raise our Series A and want a full redesign?",
        answer:
          "Webflow is fully redesignable without a rebuild — new pages, new styles, new sections all layer on top of the existing structure. The CMS content and SEO equity carry forward.",
      },
    ],
    reviews: [
      {
        name: "Jason K.",
        role: "Head of Marketing",
        company: "B2B SaaS (Seed stage)",
        quote:
          "We went from a half-built Next.js site that engineering couldn't prioritize to a fully launched Webflow site in three weeks. Our marketing team now ships new landing pages daily.",
      },
      {
        name: "Alicia R.",
        role: "Co-founder",
        company: "SaaS Startup",
        quote:
          "Chintan understood what we needed before we finished explaining it. The site positions us exactly where we want to be — and we can actually update it ourselves.",
      },
    ],
    relatedServices: [
      "webflow-development",
      "cms-architecture",
      "gsap-animations",
    ],
  },
  {
    slug: "design-agencies",
    title: "Webflow for Design Agencies",
    headline: "A Webflow development partner who makes your designs look exactly right.",
    description:
      "Design agencies need a Webflow developer who can execute at the same level the design was created — pixel-perfect, interaction-aware, and delivered on time. That's the standard I hold myself to.",
    painPoints: [
      {
        title: "Freelancers who can't match design quality",
        description:
          "You've handed off beautiful Figma files and gotten back sites that look 80% right — wrong spacing, wrong animations, cut corners in the details your clients will notice.",
      },
      {
        title: "Missed deadlines that embarrass you with clients",
        description:
          "A late developer creates a late project, which creates a difficult client conversation that isn't your fault. You need someone who delivers when they say they will.",
      },
      {
        title: "No reliable Webflow developer on your bench",
        description:
          "When a client asks for Webflow, you don't want to scramble for a new developer every time. You want someone you can count on, project after project.",
      },
      {
        title: "Developers who need hand-holding on interactions",
        description:
          "You've designed thoughtful micro-interactions and animation sequences. You need a developer who reads the design and knows what to build — not one who needs every hover state described in words.",
      },
    ],
    solutions: [
      {
        title: "Pixel-perfect implementation, every time",
        description:
          "I match your designs to the pixel — spacing, typography, animation timing, hover states. If something is ambiguous in the Figma file, I'll flag it before assuming.",
      },
      {
        title: "Timeline commitments you can put in your SOW",
        description:
          "I give realistic timelines at scoping and I hit them. If something changes, I communicate early — not at the deadline.",
      },
      {
        title: "A white-label development partner",
        description:
          "I work under your agency's brand when needed. Clients see your agency — I'm the execution layer. Slack, Loom, Notion — whatever your workflow, I adapt.",
      },
      {
        title: "Interaction fluency from the start",
        description:
          "I read Figma prototypes and motion specs without needing them decoded. If you've designed a scroll animation or a hover sequence, I'll build it right the first time.",
      },
    ],
    faqs: [
      {
        question: "Do you work white-label?",
        answer:
          "Yes — I work under your agency's brand when needed. No direct client contact unless you want me involved. NDAs are standard.",
      },
      {
        question: "What's your availability for ongoing agency projects?",
        answer:
          "I maintain capacity for 1–2 agency partnerships at a time. Retainer arrangements are available for agencies who need regular development support across multiple client projects.",
      },
      {
        question: "How do you handle design files that aren't fully specced?",
        answer:
          "I'll flag gaps before building. I'd rather spend 30 minutes in a design review than build something wrong and rebuild it. I also know the common design patterns well enough to make sensible assumptions when needed.",
      },
      {
        question: "Do you have experience with complex animation briefs?",
        answer:
          "Yes — GSAP ScrollTrigger, page transitions, staggered reveals, SVG path animations, and custom hover states are all in scope. If you have a motion spec, I can execute it.",
      },
      {
        question: "Can you handle rush projects?",
        answer:
          "Sometimes — it depends on my current schedule. Reach out with your timeline and I'll give you an honest answer. Rush projects carry a priority rate.",
      },
    ],
    reviews: [
      {
        name: "Nina J.",
        role: "Creative Director",
        company: "Design Agency",
        quote:
          "We've cycled through five Webflow developers in two years. Chintan is the first one who actually reads the design file. We don't need to explain what we want — he just builds it.",
      },
      {
        name: "Marcus T.",
        role: "Agency Principal",
        company: "Boutique Design Studio",
        quote:
          "Reliable, meticulous, easy to work with. Chintan is our go-to for every Webflow project. Clients love the output and we look good.",
      },
    ],
    relatedServices: [
      "webflow-development",
      "framer-development",
      "gsap-animations",
    ],
  },
  {
    slug: "vc-backed-startups",
    title: "Webflow for VC-Backed Startups",
    headline: "Ship a site worthy of your raise — without waiting on engineering.",
    description:
      "After raising, you need a site that reflects the company you're building. Webflow gives VC-backed startups the speed to iterate on messaging, the design quality to attract enterprise buyers, and the independence to move without engineering bandwidth.",
    painPoints: [
      {
        title: "Your site doesn't match the company you pitched",
        description:
          "Investors saw a vision. The current site shows something earlier. The gap creates credibility problems with enterprise prospects and recruits.",
      },
      {
        title: "Engineering is all-in on the product",
        description:
          "Post-raise, every engineer is on the roadmap. There's no capacity for marketing site updates, let alone a rebuild — and the site stays frozen for 6 months.",
      },
      {
        title: "Messaging changes faster than the site does",
        description:
          "You're finding ICP, refining positioning, and updating pitch decks weekly. The site needs to keep up — without a pull request every time.",
      },
      {
        title: "You need to look enterprise-ready before you are",
        description:
          "Enterprise buyers judge book covers. A polished, fast, well-structured site signals operational maturity. An outdated one undermines your sales deck.",
      },
    ],
    solutions: [
      {
        title: "Design and build in parallel",
        description:
          "I work from your brand guidelines or Figma files and can start building while design is still in review. Fast iteration cycles, not sequential handoffs.",
      },
      {
        title: "Marketing owns the site, engineering owns the product",
        description:
          "Post-launch, your growth and marketing team updates the site without engineering tickets. New landing pages, updated copy, new case studies — all in Webflow.",
      },
      {
        title: "Messaging-first architecture",
        description:
          "The Webflow CMS is structured to support messaging experiments — different hero copy variants, modular sections that can be reordered, landing pages for different ICPs.",
      },
      {
        title: "Enterprise-grade performance and design",
        description:
          "Fast load times, clean URL structure, schema markup, and design quality that holds up in a demo to a Fortune 500 procurement team.",
      },
    ],
    faqs: [
      {
        question: "We just raised — how fast can you start?",
        answer:
          "Typically I can start within 1–2 weeks of scoping. If you have a hard deadline (board review, conference, launch event), tell me upfront and I'll tell you honestly if it's achievable.",
      },
      {
        question: "Can Webflow scale to enterprise-level complexity?",
        answer:
          "For marketing sites, yes — with some design for scale. For product-adjacent tools like documentation sites, help centers, or developer portals, there are better-suited platforms I can recommend.",
      },
      {
        question: "We want separate landing pages for multiple ICPs — is that possible?",
        answer:
          "Absolutely. I'll build a CMS-driven landing page system where your team can create new ICP-specific pages by filling in a template — no developer needed.",
      },
      {
        question: "Do you work with Series A or later companies?",
        answer:
          "Yes — I work with startups across stages, from pre-launch to Series B. Later-stage companies often need more complex CMS architecture, integration work, and localization — all in scope.",
      },
      {
        question: "Can you integrate with our CRM and marketing stack?",
        answer:
          "Yes — HubSpot, Salesforce, Intercom, Segment, and others integrate with Webflow via embed code or native form connections. I'll configure the integrations your team needs.",
      },
    ],
    reviews: [
      {
        name: "David L.",
        role: "CEO",
        company: "Series A SaaS",
        quote:
          "We raised our Series A and our site was an embarrassment. Chintan rebuilt it in three weeks. Our first enterprise demo after launch, the prospect commented on the site. That's the kind of signal that matters.",
      },
      {
        name: "Sophia W.",
        role: "VP Marketing",
        company: "VC-backed startup",
        quote:
          "Finally a site that matches our pitch deck. Chintan understood startup velocity — we gave him loose direction on a Friday and had a staging preview by Tuesday.",
      },
    ],
    relatedServices: [
      "webflow-development",
      "cms-architecture",
      "wordpress-to-webflow",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
