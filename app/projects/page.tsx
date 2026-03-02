import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

interface Project {
  title: string;
  year: string;
  description: string;
  bullets: string[];
  category: string;
  images: string[];
  url: string;
}

const projects: Project[] = [
  {
    title: "daydream",
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
    url: "https://daydream.com",
  },
  {
    title: "Luzia",
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
  },
  {
    title: "Xref",
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
  },
  {
    title: "MD101",
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
    url: "https://md101.io",
  },
  {
    title: "Queensland Basketball",
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
    url: "https://queenslandbball.com.au",
  },
  {
    title: "The Smart Property",
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
    url: "https://thesmartproperty.com.au",
  },
];

export default function ProjectPage() {
  return (
    <div className="relative space-y-20 pb-20">
      <title>Projects | Chintan Savaliya</title>
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A few things I&apos;ve built.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-text-secondary">
          Seven years of Webflow and Framer projects — startups, SaaS tools,
          communities, and brand sites for founders who care about quality.
        </p>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl space-y-24 py-8 md:py-12">
        {projects.map((project, idx) => (
          <div key={project.title} className="space-y-8">
            {/* Images */}
            <div className="grid grid-cols-1 gap-3 px-0 md:grid-cols-2 md:px-6 lg:px-10">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl border border-border-primary bg-bg-secondary ${
                    i === 1 ? "hidden md:block" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-[280px] w-full object-cover object-top md:h-[340px]"
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="px-4 md:px-6 lg:px-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-2xl font-medium tracking-tight text-text-primary">
                  {project.title}
                </h2>
                <span className="text-sm text-text-secondary">
                  {project.year}
                </span>
                <span className="rounded-full border border-border-primary bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary">
                  {project.category}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
                {project.description}
              </p>

              <ul className="mt-5 max-w-2xl space-y-2">
                {project.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary"
                  >
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {project.title}
                <svg
                  width="3"
                  height="6"
                  viewBox="0 0 3 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0 0L3 3L0 6" />
                </svg>
              </a>
            </div>

            {idx < projects.length - 1 && (
              <div className="border-t border-border-primary/50 pt-0" />
            )}
          </div>
        ))}
        </div>
      </GridWrapper>
    </div>
  );
}
