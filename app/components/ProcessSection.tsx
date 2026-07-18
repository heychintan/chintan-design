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
    <section className="relative space-y-10 md:space-y-16">
      <div className="space-y-4 text-balance">
        <GridWrapper>
          <SectionLabel index="03" title="Process" />
        </GridWrapper>
        <GridWrapper>
          <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
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
                className="rounded-2xl border border-border-primary bg-bg-primary p-6"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
                  {item.step}
                </div>
                <h3 className="text-base font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
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
