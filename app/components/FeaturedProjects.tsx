import Link from "next/link";
import { featuredProjects } from "app/data/projects";

export function FeaturedProjects() {
  return (
    <div className="mx-auto max-w-6xl py-8 md:py-10">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <li key={project.title} className="group">
            <Link href="/projects" className="block">
              <div className="overflow-hidden rounded-xl border border-border-primary">
                <img
                  src={project.images[0]}
                  alt={`${project.title} website`}
                  loading="lazy"
                  className="h-[240px] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] md:h-[300px]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between px-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-medium tracking-tight text-text-primary">
                    {project.title}
                  </h3>
                  <span className="text-sm text-text-secondary">
                    {project.category}
                  </span>
                </div>
                <span className="text-sm text-text-tertiary">
                  {project.year}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}
