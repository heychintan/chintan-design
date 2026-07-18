import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { Button } from "@/app/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | Chintan Savaliya",
  description:
    "A four-step engagement model: scope, build, launch, handoff. Weekly async updates, AI-maintainable code, and a clean handoff your team owns.",
};

const steps = [
  {
    index: "01",
    title: "Scope & fixed quote",
    description:
      "We start with a free 30-minute call. You walk me through goals, content, and timeline; I come back with a written scope and a fixed price. No hourly billing, no surprise scope changes — if it's not in the scope doc, we talk before it's built.",
    meta: "1 call · fixed quote in 2–3 days",
  },
  {
    index: "02",
    title: "Build & iterate on staging",
    description:
      "You get a staging link in week one and weekly async updates from then on — short Loom walkthroughs, not meetings. Feedback lands throughout the build, not in one big reveal at the end.",
    meta: "weekly Looms · staging from week 1",
  },
  {
    index: "03",
    title: "QA & launch",
    description:
      "Cross-device and cross-browser QA, performance and SEO checks, analytics wired up, and a coordinated go-live. Launch day is a checklist, not a scramble.",
    meta: "full QA · zero-downtime go-live",
  },
  {
    index: "04",
    title: "Handoff & beyond",
    description:
      "You own everything. Webflow and Framer projects ship with Loom tutorials and an editable structure your team runs without me. Code projects ship with a documented design system and CLAUDE.md/AGENTS.md instructions — so Claude Code or Codex can build new on-brand pages for you long after handoff.",
    meta: "docs + training · optional retainer",
  },
];

const tooling = [
  {
    title: "AI-maintainable by design",
    description:
      "Code projects are structured so AI tools can safely extend them: documented components, design tokens, and agent instructions in the repo. 'Add a pricing page using our design system' becomes a one-line request.",
  },
  {
    title: "Async-first communication",
    description:
      "Loom walkthroughs, a shared doc for decisions, and email or Slack for everything else. Timezone gaps become an advantage — work moves while you sleep.",
  },
  {
    title: "You own the accounts",
    description:
      "Webflow, Framer, GitHub, Vercel, analytics — everything lives in accounts you control from day one. No hostage situations, ever.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="relative space-y-12 pb-20 md:space-y-16">
      <GridWrapper>
        <div className="mt-16 space-y-6">
          <SectionLabel index="01" title="How It Works" />
          <h1 className="max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl">
            Four steps. No surprises.
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-secondary">
            The same engagement model on every project — whether it&apos;s a
            Webflow marketing site or a Next.js migration. You always know
            what&apos;s happening, what&apos;s next, and what it costs.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <ul>
            {steps.map((step) => (
              <li
                key={step.index}
                className="grid grid-cols-1 gap-4 border-b border-border-primary py-8 first:border-t md:grid-cols-12 md:gap-8 md:py-10"
              >
                <span className="font-mono text-sm text-indigo-600 md:col-span-1">
                  {step.index}
                </span>
                <h2 className="text-2xl font-medium tracking-[-0.02em] text-text-primary md:col-span-4 md:text-3xl">
                  {step.title}
                </h2>
                <div className="space-y-3 md:col-span-7">
                  <p className="text-base leading-7 text-text-secondary">
                    {step.description}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
                    {step.meta}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </GridWrapper>

      {/* Tooling & comms — ink room */}
      <section className="-mx-4 space-y-10 bg-[#17181F] px-4 py-14 md:space-y-16 md:py-20 lg:-mx-8 lg:px-8">
        <GridWrapper>
          <div className="space-y-4">
            <SectionLabel index="02" title="The Working Setup" tone="dark" />
            <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
              Built to outlive the engagement
            </h2>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 py-4 md:grid-cols-3">
            {tooling.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-base font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </GridWrapper>
      </section>

      <GridWrapper>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 py-8 md:py-12">
          <SectionLabel index="03" title="Start" />
          <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
            Tell me what you&apos;re building.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="https://cal.com/chintan/30min">
              Book a free call
            </Button>
            <Link
              href="/pricing"
              className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-600 transition-colors hover:text-indigo-700"
            >
              See pricing →
            </Link>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
