import Link from "next/link";
import type { Metadata } from "next";
import { industries } from "app/data/industries";
import { siteMetadata } from "app/data/siteMetadata";
import { JsonLd } from "app/components/JsonLd";
import { buildBreadcrumbSchema, buildGraph } from "app/lib/schema";
import { SectionTitlePill } from "app/components/SectionTitlePill";

export const metadata: Metadata = {
  title: "Webflow Development by Industry | Chintan Savaliya",
  description:
    "Webflow development tailored for SaaS startups, design agencies, and VC-backed companies. Industry-specific expertise for teams who need more than a generic developer.",
  openGraph: {
    title: "Webflow Development by Industry | Chintan Savaliya",
    description:
      "Webflow development tailored for SaaS startups, design agencies, and VC-backed companies.",
  },
};

export default function IndustriesPage() {
  const schema = buildGraph([
    buildBreadcrumbSchema([
      { name: "Home", url: siteMetadata.siteUrl },
      { name: "Industries", url: `${siteMetadata.siteUrl}/industries` },
    ]),
  ]);

  return (
    <>
      <JsonLd schema={schema} />
      <div className="space-y-24 py-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <SectionTitlePill title="Industries" />
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
            Webflow development for the teams building the next generation of software
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
            Different industries have different needs. Browse by context to see how I work with
            your type of team.
          </p>
        </section>

        {/* Industry Cards */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 transition-colors hover:border-indigo-500/50"
            >
              <h2 className="text-lg font-medium text-text-primary group-hover:text-indigo-500 transition-colors">
                {industry.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                {industry.description}
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-indigo-500">
                Learn more
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border-primary bg-bg-primary p-10 text-center space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Not sure where you fit?
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Tell me about your project and I&apos;ll let you know if we&apos;re a good match.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-primary hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </>
  );
}
