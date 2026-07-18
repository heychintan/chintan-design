import { GridWrapper } from "@/app/components/GridWrapper";
import { ProjectIndexList } from "@/app/components/ProjectIndexList";
import { SectionLabel } from "@/app/components/SectionLabel";
import { projects } from "app/data/projects";

export default function ProjectPage() {
  return (
    <div className="relative space-y-12 pb-20 md:space-y-16">
      <title>Projects | Chintan Savaliya</title>
      <GridWrapper>
        <div className="mt-16 space-y-6">
          <SectionLabel index="01" title="Selected Work" />
          <h1 className="max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl">
            A few things I&apos;ve built.
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-secondary">
            Seven years of Webflow and Framer projects — startups, SaaS tools,
            communities, and brand sites for founders who care about quality.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <ProjectIndexList projects={projects} />
        </div>
      </GridWrapper>
    </div>
  );
}
