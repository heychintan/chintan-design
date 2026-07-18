import type { Metadata } from "next";
import Link from "next/link";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { experiments } from "app/data/experiments";

export const metadata: Metadata = {
  title: "Experiments | Chintan Savaliya",
  description:
    "Small tools and interactive experiments — color extractors, glass effect generators, code formatters, and more. Built with AI, free to use.",
};

export default function ExperimentsPage() {
  return (
    <div className="relative space-y-16 pb-24">
      <GridWrapper>
        <div className="mt-16 space-y-6 text-center">
          <SectionLabel index="01" title="Experiments" />
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Small tools, built for fun.
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-text-secondary">
            Interactive experiments and dev tools I&apos;ve built — end to end,
            with AI in the loop. Everything runs in your browser; nothing gets
            uploaded anywhere.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp) =>
            exp.status === "live" ? (
              <Link
                key={exp.slug}
                href={`/experiments/${exp.slug}`}
                className="group flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 transition-colors hover:border-indigo-500/50"
              >
                <ExperimentCardBody exp={exp} />
                <span className="mt-6 text-sm font-medium text-indigo-500">
                  Open tool →
                </span>
              </Link>
            ) : (
              <div
                key={exp.slug}
                className="flex flex-col rounded-2xl border border-dashed border-border-primary bg-bg-primary/50 p-6 opacity-80"
              >
                <ExperimentCardBody exp={exp} />
                <span className="mt-6 text-sm font-medium text-text-tertiary">
                  Coming soon
                </span>
              </div>
            ),
          )}
        </div>
      </GridWrapper>
    </div>
  );
}

function ExperimentCardBody({
  exp,
}: {
  exp: (typeof experiments)[number];
}) {
  return (
    <>
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mt-4 text-lg font-medium tracking-tight text-text-primary">
        {exp.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
        {exp.description}
      </p>
    </>
  );
}
