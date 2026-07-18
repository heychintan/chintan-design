import type { Metadata } from "next";
import Link from "next/link";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { Button } from "@/app/components/Button";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Style Guide | Chintan Savaliya",
  description:
    "Design tokens, typography, and component library powering chintan.design.",
  robots: { index: false },
};

const accentShades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

const baseColors = [
  { name: "bg-primary", className: "bg-bg-primary", value: "#F7F7F8" },
  { name: "border-primary", className: "bg-border-primary", value: "#D6DADE" },
  { name: "dark-primary", className: "bg-dark-primary", value: "#3C3C3F" },
  { name: "text-primary", className: "bg-text-primary", value: "slate-900" },
  { name: "text-secondary", className: "bg-text-secondary", value: "#5E5F6E" },
  { name: "text-tertiary", className: "bg-text-tertiary", value: "#A5AEB8" },
];

const typeScale = [
  {
    label: "Page title / h1",
    className:
      "text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]",
    sample: "A few things I've built.",
    usage: "text-4xl md:text-6xl font-medium tracking-tighter",
  },
  {
    label: "Section heading / h2",
    className:
      "text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl",
    sample: "Real results from real projects",
    usage: "text-3xl md:text-4xl font-medium tracking-tighter",
  },
  {
    label: "Card heading / h3",
    className: "text-lg font-medium tracking-tight text-text-primary",
    sample: "Webflow to Next.js Migration",
    usage: "text-lg font-medium tracking-tight",
  },
  {
    label: "Body",
    className: "text-base leading-7 text-text-secondary",
    sample:
      "Web developer & product builder for founders and teams — from marketing sites to web apps and AI-powered products.",
    usage: "text-base leading-7 text-text-secondary",
  },
  {
    label: "Small / meta",
    className: "text-sm leading-6 text-text-secondary",
    sample: "Weekly async updates on staging throughout the build.",
    usage: "text-sm leading-6 text-text-secondary",
  },
  {
    label: "Caption / tertiary",
    className: "text-xs text-text-tertiary",
    sample: "7+ years experience · 50+ websites shipped",
    usage: "text-xs text-text-tertiary",
  },
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-1 border-b border-border-primary/50 pb-4">
        <h2 className="text-2xl font-medium tracking-tight text-text-primary">
          {title}
        </h2>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
      {children}
    </section>
  );
}

function UsageNote({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-white px-2 py-1 font-mono text-xs text-text-secondary ring-1 ring-border-primary">
      {children}
    </code>
  );
}

export default function StyleGuidePage() {
  return (
    <div className="relative space-y-16 pb-24">
      <GridWrapper>
        <div className="mt-16 space-y-6 text-center">
          <SectionLabel index="01" title="Style Guide" className="justify-center" />
          <h1 className="mx-auto max-w-2xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl">
            One system, every page.
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-text-secondary">
            The tokens, type, and components this site is built from. Grab
            anything here when creating new sections or layouts — everything is
            accent-aware and follows the active color theme.
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-text-secondary">Try an accent:</span>
            <ThemeSwitcher inline />
          </div>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-4xl space-y-20">
          <Section
            title="Accent scale"
            description="CSS variables --accent-50 … --accent-950, exposed as Tailwind indigo-* and accent tokens. These swatches update live with the theme switcher."
          >
            <div className="grid grid-cols-6 gap-2 md:grid-cols-11">
              {accentShades.map((shade) => (
                <div key={shade} className="space-y-1.5 text-center">
                  <div
                    className="h-12 w-full rounded-lg ring-1 ring-black/5"
                    style={{ backgroundColor: `rgb(var(--accent-${shade}))` }}
                  />
                  <span className="block font-mono text-[10px] text-text-tertiary">
                    {shade}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <UsageNote>text-indigo-600 → accent</UsageNote>
              <UsageNote>bg-accent / bg-accent-light</UsageNote>
              <UsageNote>hover:text-indigo-700 → accent-dark</UsageNote>
            </div>
          </Section>

          <Section
            title="Base colors"
            description="Neutral tokens defined in tailwind.config.ts. Use these — never raw gray-* values — so pages stay consistent."
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {baseColors.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center gap-3 rounded-xl border border-border-primary bg-white p-3"
                >
                  <div
                    className={`h-10 w-10 shrink-0 rounded-lg ring-1 ring-black/5 ${color.className}`}
                  />
                  <div className="min-w-0">
                    <p className="truncate font-mono text-xs text-text-primary">
                      {color.name}
                    </p>
                    <p className="font-mono text-[10px] text-text-tertiary">
                      {color.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Typography"
            description="Geist Sans throughout (Geist Mono for code). Headings use tracking-tighter; body copy uses text-secondary."
          >
            <div className="space-y-8">
              {typeScale.map((t) => (
                <div key={t.label} className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-text-tertiary">
                      {t.label}
                    </span>
                    <UsageNote>{t.usage}</UsageNote>
                  </div>
                  <p className={t.className}>{t.sample}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Buttons & labels"
            description="Button component (app/components/Button.tsx) with three variants, plus the mono section label used above every section heading."
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <SectionLabel index="01" title="Section Label" />
            </div>
            <div className="flex flex-wrap gap-2">
              <UsageNote>{`<Button variant="primary|secondary|outline">`}</UsageNote>
              <UsageNote>{`<SectionLabel index="01" title="..." />`}</UsageNote>
            </div>
          </Section>

          <Section
            title="Links & accents"
            description="Inline links and section eyebrows use the accent color with a darker hover state."
          >
            <div className="space-y-3">
              <div className="text-sm font-medium text-indigo-600">
                <span>Section Eyebrow</span>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
              >
                View all projects →
              </a>
              <ul className="max-w-md space-y-2">
                <li className="flex items-start gap-2.5 text-sm leading-6 text-text-secondary">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                  Bullet list item with accent dot marker
                </li>
              </ul>
            </div>
          </Section>

          <Section
            title="Cards"
            description="The two workhorse surfaces: bordered content card and hover-elevated link card. Radius is rounded-2xl, border is border-primary."
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border-primary bg-bg-primary p-6">
                <h3 className="text-lg font-medium text-text-primary">
                  Content card
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  Static surface for grouped content. bg-bg-primary + border +
                  rounded-2xl + p-6.
                </p>
              </div>
              <a
                href="#"
                className="group flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 transition-colors hover:border-indigo-500/50"
              >
                <h3 className="text-lg font-medium text-text-primary transition-colors group-hover:text-indigo-500">
                  Link card
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                  Interactive surface. Border and title shift to accent on
                  hover.
                </p>
                <span className="mt-4 text-sm font-medium text-indigo-500">
                  Learn more →
                </span>
              </a>
            </div>
          </Section>

          <Section
            title="Section pattern"
            description="Every page section follows the same skeleton: eyebrow → heading → content inside GridWrapper. Copy this when adding new sections."
          >
            <pre className="overflow-x-auto rounded-xl bg-white p-4 font-mono text-xs leading-6 text-text-secondary ring-1 ring-border-primary">
              {`<section className="relative space-y-10 md:space-y-16">
  <div className="space-y-4 text-balance">
    <GridWrapper>
      <div className="text-center text-sm font-medium text-indigo-600">
        <span>Eyebrow</span>
      </div>
    </GridWrapper>
    <GridWrapper>
      <h2 className="mx-auto max-w-lg text-center text-3xl font-medium
                     leading-10 tracking-tighter text-text-primary md:text-4xl">
        Section heading
      </h2>
    </GridWrapper>
  </div>
  <GridWrapper>{/* content, mx-auto max-w-6xl py-8 md:py-10 */}</GridWrapper>
</section>`}
            </pre>
          </Section>

          <div className="rounded-2xl border border-border-primary bg-bg-primary p-8 text-center">
            <p className="text-sm leading-6 text-text-secondary">
              Component source lives in{" "}
              <code className="font-mono text-xs">app/components/</code>; tokens
              in <code className="font-mono text-xs">tailwind.config.ts</code>{" "}
              and <code className="font-mono text-xs">app/globals.css</code>.
              Bento cards, review cards, and section components are all reusable
              — see{" "}
              <Link
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                the home page
              </Link>{" "}
              for them in context.
            </p>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
