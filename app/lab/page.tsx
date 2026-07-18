import type { Metadata } from "next";
import Link from "next/link";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";

export const metadata: Metadata = {
  title: "Lab | Chintan Savaliya",
  description:
    "Writing, experiments, and the design system behind this site — live proof of how I build, not a brochure about it.",
};

const primary = [
  {
    index: "01",
    title: "Blog",
    href: "/blog",
    description: "Notes on web, design, and AI — how the work actually gets done.",
  },
  {
    index: "02",
    title: "Experiments",
    href: "/experiments",
    description: "Interactive tools built for fun and for clients — try them live.",
  },
  {
    index: "03",
    title: "Style Guide",
    href: "/styleguide",
    description: "This site's design system, rendered by itself. Switch the accent and watch it re-skin.",
  },
];

const secondary = [
  { title: "Toolbox", href: "/toolbox", description: "What I build with" },
  { title: "Stats", href: "/stats", description: "This site, measured" },
  { title: "Changelog", href: "/changelog", description: "What shipped here" },
  { title: "Community Wall", href: "/community-wall", description: "Leave a note" },
];

export default function LabPage() {
  return (
    <div className="relative space-y-12 pb-20 md:space-y-16">
      <GridWrapper>
        <div className="mt-16 space-y-6">
          <SectionLabel index="01" title="The Lab" />
          <h1 className="max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl">
            Proof I build, not just say.
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-secondary">
            This site is a working instrument — the writing, the experiments,
            and the design system are all live. Poke around.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <ul>
            {primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-4 border-b border-border-primary py-6 first:border-t md:gap-8 md:py-8"
                >
                  <span className="w-8 shrink-0 font-mono text-xs text-text-tertiary md:text-sm">
                    {item.index}
                  </span>
                  <h2 className="shrink-0 text-3xl font-medium tracking-[-0.03em] text-text-primary transition-all duration-300 group-hover:translate-x-2 group-hover:text-indigo-600 md:text-5xl">
                    {item.title}
                  </h2>
                  <p className="hidden flex-1 text-right text-sm leading-6 text-text-secondary md:block">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl space-y-8 py-8 md:py-12">
          <SectionLabel index="02" title="Also in the Lab" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-border-primary p-5 transition-colors hover:border-indigo-300"
              >
                <h3 className="text-base font-medium text-text-primary group-hover:text-indigo-600">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
