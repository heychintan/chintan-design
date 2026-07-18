import { GridWrapper } from "@/app/components/GridWrapper";
import { projects } from "app/data/projects";

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
