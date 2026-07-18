import { GridWrapper } from "./GridWrapper";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    step: 1,
    title: "Brief & scope",
    description:
      "We align on goals, deliverables, and timeline. No ambiguity, no surprise scope changes.",
  },
  {
    step: 2,
    title: "Build & iterate",
    description:
      "Weekly async updates on staging. You review and give feedback throughout — not just at the end.",
  },
  {
    step: 3,
    title: "Launch & handoff",
    description:
      "Full QA, launch support, and a clean handoff so your team owns the site going forward.",
  },
];

export function ProcessSection() {
  return (
    <section className="relative -mx-4 space-y-10 bg-[#17181F] px-4 py-14 md:space-y-16 md:py-20 lg:-mx-8 lg:px-8">
      <div className="space-y-4 text-balance">
        <GridWrapper>
          <SectionLabel index="03" title="Process" tone="dark" />
        </GridWrapper>
        <GridWrapper>
          <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
            Three steps from brief to launch
          </h2>
        </GridWrapper>
      </div>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-3 font-mono text-sm text-indigo-400">
                  {String(item.step).padStart(2, "0")}
                </div>
                <h3 className="text-base font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GridWrapper>
    </section>
  );
}
