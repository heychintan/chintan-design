import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { Button } from "@/app/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Chintan Savaliya",
  description:
    "Fixed project pricing from $3,000. Landing pages, full marketing sites, and migrations to an AI-native Next.js stack — plus an ongoing retainer.",
};

const bands = [
  {
    index: "01",
    title: "Landing page or small site",
    price: "from $3,000",
    description:
      "A high-converting landing page or a compact marketing site (up to ~5 pages) in Webflow or Framer. Design, build, QA, and launch.",
    includes: ["Design & build", "CMS if needed", "Analytics + SEO basics"],
  },
  {
    index: "02",
    title: "Full marketing site",
    price: "from $6,000",
    description:
      "A complete site with CMS, reusable component system, and team training — structured so your team ships new pages without a developer.",
    includes: ["Style guide + components", "CMS architecture", "Loom training"],
  },
  {
    index: "03",
    title: "Migration to AI-native stack",
    price: "from $8,000",
    description:
      "Webflow, Framer, or WordPress to Next.js with a real CMS, deployed on Vercel. Your team owns the code and extends it with Claude or Codex.",
    includes: ["1:1 design fidelity", "CMS + content migration", "CLAUDE.md agent docs"],
  },
  {
    index: "04",
    title: "Web app or AI product",
    price: "from $10,000",
    description:
      "Tools, dashboards, and AI-powered products — scoped as a v1 that ships, not a spec that doesn't. Fixed quote after a scoping call.",
    includes: ["Product scoping", "Design + full-stack build", "Launch support"],
  },
];

const faqs = [
  {
    q: "Why fixed pricing instead of hourly?",
    a: "You're buying an outcome, not hours. A fixed quote means the risk of estimation sits with me, and you can budget before we start. If scope changes mid-project, we re-quote the change — nothing is billed silently.",
  },
  {
    q: "What do the “from” prices depend on?",
    a: "Page count, CMS complexity, custom interactions, and content migration volume. After a 30-minute scoping call you get a written fixed quote in 2–3 days.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — a monthly retainer for updates, new pages, and improvements after launch. Retainers are scoped per client based on expected volume; most start around $1,500/month.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative space-y-12 pb-20 md:space-y-16">
      <GridWrapper>
        <div className="mt-16 space-y-6">
          <SectionLabel index="01" title="Pricing" />
          <h1 className="max-w-3xl text-balance text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-text-primary md:text-7xl">
            Fixed quotes. No meter running.
          </h1>
          <p className="max-w-xl text-base leading-7 text-text-secondary">
            Most projects land between $3,000 and $15,000. Every engagement is
            priced per project, agreed before work starts — these bands show
            where yours will likely sit.
          </p>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto max-w-6xl py-8 md:py-12">
          <ul>
            {bands.map((band) => (
              <li
                key={band.index}
                className="grid grid-cols-1 gap-4 border-b border-border-primary py-8 first:border-t md:grid-cols-12 md:gap-8 md:py-10"
              >
                <span className="font-mono text-sm text-indigo-600 md:col-span-1">
                  {band.index}
                </span>
                <div className="md:col-span-5">
                  <h2 className="text-2xl font-medium tracking-[-0.02em] text-text-primary md:text-3xl">
                    {band.title}
                  </h2>
                  <p className="mt-1 font-mono text-sm uppercase tracking-[0.14em] text-indigo-600">
                    {band.price}
                  </p>
                </div>
                <div className="space-y-4 md:col-span-6">
                  <p className="text-base leading-7 text-text-secondary">
                    {band.description}
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {band.includes.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </GridWrapper>

      {/* FAQ */}
      <GridWrapper>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-8 md:grid-cols-12 md:py-12">
          <div className="md:col-span-5">
            <SectionLabel index="02" title="Pricing FAQ" />
          </div>
          <div className="space-y-8 md:col-span-7">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border-primary pb-6">
                <h3 className="text-base font-medium text-text-primary">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </GridWrapper>

      <GridWrapper>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 py-8 md:py-12">
          <SectionLabel index="03" title="Next Step" />
          <h2 className="max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-text-primary md:text-5xl">
            Get your fixed quote.
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" href="https://cal.com/chintan/30min">
              Book a free call
            </Button>
            <Link
              href="/how-it-works"
              className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-600 transition-colors hover:text-indigo-700"
            >
              How it works →
            </Link>
          </div>
        </div>
      </GridWrapper>
    </div>
  );
}
