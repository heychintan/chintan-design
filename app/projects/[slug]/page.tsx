import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { projects } from "app/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — Case Study`;
  return {
    title: `${title} | Chintan Savaliya`,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: [{ url: `/api/og?title=${encodeURIComponent(title)}` }],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <div data-accent={project.accent} className="relative pb-20">
      {/* Scene intro — accent-tinted room */}
      <section className="-mx-4 bg-[rgb(var(--accent-50)/0.7)] px-4 pb-14 pt-16 md:pb-20 md:pt-24 lg:-mx-8 lg:px-8">
        <GridWrapper>
          <div className="space-y-6">
            <SectionLabel index={String(index + 1).padStart(2, "0")} title="Case Study" />
            <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-8xl">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary md:text-sm">
              <span>{project.category}</span>
              <span>{project.year}</span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 transition-colors hover:text-indigo-700"
              >
                Visit site →
              </a>
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* Images */}
      <GridWrapper>
        <div className="mx-auto max-w-6xl py-10 md:py-14">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((img, i) => (
              <div
                key={img}
                className={`overflow-hidden rounded-xl border border-border-primary bg-bg-secondary ${
                  i === 1 ? "hidden md:block" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="h-[280px] w-full object-cover object-top md:h-[380px]"
                />
              </div>
            ))}
          </div>
        </div>
      </GridWrapper>

      {/* Problem → decision → outcome */}
      <GridWrapper>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-8 md:grid-cols-12 md:py-12">
          <div className="md:col-span-5">
            <SectionLabel title="The Story" />
          </div>
          <p className="text-lg leading-8 text-text-secondary md:col-span-7">
            {project.description}
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-8 md:grid-cols-12 md:py-12">
          <div className="md:col-span-5">
            <SectionLabel title="Outcomes" />
          </div>
          <ul className="space-y-4 md:col-span-7">
            {project.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 border-b border-border-primary pb-4 text-base leading-7 text-text-secondary"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </GridWrapper>

      {/* Next project */}
      <GridWrapper>
        <div className="mx-auto max-w-6xl py-10 md:py-14">
          <Link href={`/projects/${next.slug}`} className="group block space-y-3">
            <SectionLabel title="Next Project" />
            <span className="block text-4xl font-medium tracking-[-0.03em] text-text-primary transition-all duration-300 group-hover:translate-x-2 group-hover:text-indigo-600 md:text-6xl">
              {next.title} →
            </span>
          </Link>
        </div>
      </GridWrapper>
    </div>
  );
}
