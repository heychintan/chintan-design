import Link from "next/link";
import { featuredProjects } from "app/data/projects";
import { ProjectIndexList } from "./ProjectIndexList";

export function FeaturedProjects() {
  return (
    <div className="mx-auto max-w-6xl py-8 md:py-10">
      <ProjectIndexList projects={featuredProjects} />
      <div className="mt-8">
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}
