export interface Project {
  title: string;
  slug: string;
  accent: "violet" | "blue" | "emerald" | "orange" | "rose" | "slate";
  year: string;
  description: string;
  bullets: string[];
  category: string;
  images: string[];
  url: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "daydream",
    slug: "daydream",
    accent: "violet",
    year: "2025",
    description:
      "daydream's custom-built site was hard to maintain and even harder to scale. Their non-technical team couldn't touch it, and migrating a large content library felt daunting. We rebuilt everything in Webflow — migrated the full CMS, structured it for independence, and shipped on a tight timeline. Their team now manages content without a single developer in the loop.",
    bullets: [
      "Analysed and migrated their entire content library into Webflow CMS with zero data loss",
      "Built reusable, slot-based components so the team could create new pages independently",
      "Delivered a scalable site on a tight deadline — empowering the team to move fast without dev bottlenecks",
    ],
    category: "Webflow Development",
    images: ["/projects/daydream.webp", "/projects/daydream_2.webp"],
    url: "https://withdaydream.com/",
    featured: true,
  },
  {
    title: "Luzia",
    slug: "luzia",
    accent: "blue",
    year: "2026",
    description:
      "Luzia needed their redesign translated to Webflow in time for a New Year launch — no room for drift or delay. We built a comprehensive style guide with variables and reusable components, implemented purposeful GSAP scroll animations that make the site feel alive, and handed it over with Loom tutorials so their team could run independently.",
    bullets: [
      "Built a full style guide with variables and reusable components for fast, consistent iteration",
      "Implemented smooth GSAP scroll animations to make the site feel interactive and engaging",
      "Thorough QA across devices and browsers — delivered on deadline with team training included",
    ],
    category: "Webflow Development",
    images: ["/projects/luzia.jpg", "/projects/luzia_2.jpg"],
    url: "https://luzia.com",
    featured: true,
  },
  {
    title: "Xref",
    slug: "xref",
    accent: "emerald",
    year: "2024",
    description:
      "Xref's marketing site was inconsistent and developer-dependent. Every small update needed a ticket. We rebuilt it using a modified Client-First Webflow framework — slot-based layouts, reusable components, and custom Salesforce form integrations. Their team now builds new pages themselves.",
    bullets: [
      "Used modified Client-First framework to create reusable, scalable component system",
      "Built slot-based layouts so the client can build and update pages without dev involvement",
      "Developed custom HTML forms with advanced logic for seamless Salesforce integration",
    ],
    category: "Webflow Development",
    images: ["/projects/xref.jpg", "/projects/xref_2.jpg"],
    url: "https://xref.com",
    featured: true,
  },
  {
    title: "MD101",
    slug: "md101",
    accent: "rose",
    year: "2024",
    description:
      "MD101 had outgrown Substack and needed a real home — one that could handle blogs, community feeds, member profiles, and courses. We designed and built the full site, migrated all existing content, and hit a 98 Lighthouse score with full SEO/GEO optimisation including schema markup and llms.txt.",
    bullets: [
      "Designed and built custom Webflow CMS architecture for blogs, community feeds, and course modules",
      "Migrated all existing content and achieved a 98 Lighthouse score with full schema markup and llms.txt",
      "Modular, slot-based components — the non-technical team manages everything independently",
    ],
    category: "Web Design & Webflow Development",
    images: ["/projects/md101.jpg", "/projects/md101_2.webp"],
    url: "https://moderndata101.com/",
    featured: true,
  },
  {
    title: "Queensland Basketball",
    slug: "queensland-basketball",
    accent: "orange",
    year: "2023",
    description:
      "Queensland Basketball's WordPress site couldn't keep up — match results, team profiles, awards, campaigns all needed frequent updates and none were easy. We rebuilt in Webflow with a comprehensive CMS, hybrid mega navigation, calendar integration, newsletter tools, and filtering systems.",
    bullets: [
      "Comprehensive CMS for match results, team profiles, awards, campaigns, and events",
      "Hybrid mega navigation combining standard menu and mega menu for optimal UX",
      "Calendar, newsletter, maps, and filtering — content that used to take days now takes minutes",
    ],
    category: "Webflow Development",
    images: [
      "/projects/queensland-basketball.jpg",
      "/projects/queensland-basketball_2.jpg",
    ],
    url: "https://queensland.basketball/",
  },
  {
    title: "The Smart Property",
    slug: "the-smart-property",
    accent: "slate",
    year: "2023",
    description:
      "The Smart Property's WordPress site was slow, inflexible, and developer-dependent. We migrated everything to Webflow, redesigned for better user engagement, and built custom interactive features. Faster, cleaner, and a team that can finally manage their own site.",
    bullets: [
      "Full WordPress to Webflow migration with data integrity and minimal downtime",
      "Complete redesign for a fresh, user-friendly experience that drives engagement",
      "Custom interactive features — resulting in a faster, more scalable, visually polished site",
    ],
    category: "WordPress Migration & Webflow Development",
    images: ["/projects/smart-property.webp", "/projects/smart-property_2.webp"],
    url: "https://smartproperty.com/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
