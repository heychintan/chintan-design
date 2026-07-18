import Link from "next/link";
import type { Metadata } from "next";
import { services } from "app/data/services";
import { siteMetadata } from "app/data/siteMetadata";
import { JsonLd } from "app/components/JsonLd";
import {
  buildBreadcrumbSchema,
  buildGraph,
} from "app/lib/schema";
import { SectionTitlePill } from "app/components/SectionTitlePill";

export const metadata: Metadata = {
  title: "Web Development & Migration Services | Chintan Savaliya",
  description:
    "Webflow & Framer development, plus migrations to AI-native stacks — Next.js, Astro, Sanity, Payload CMS. Own your website and maintain it with AI.",
  openGraph: {
    title: "Web Development & Migration Services | Chintan Savaliya",
    description:
      "Webflow & Framer development, plus migrations to AI-native stacks — Next.js, Astro, Sanity, Payload CMS.",
  },
};

const migrationSlugs = new Set([
  "webflow-to-nextjs",
  "webflow-to-astro",
  "wordpress-to-nextjs",
  "framer-to-nextjs",
  "squarespace-wix-to-modern-stack",
  "custom-website",
]);

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 transition-colors hover:border-indigo-500/50"
    >
      <h3 className="text-lg font-medium text-text-primary transition-colors group-hover:text-indigo-500">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
        {service.description}
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
  );
}

const processSteps = [
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
      "Weekly async updates on staging. You review and provide feedback throughout — not just at the end.",
  },
  {
    step: 3,
    title: "Launch & handoff",
    description:
      "Full QA, launch support, and a clean handoff so your team owns the site going forward.",
  },
];

export default function ServicesPage() {
  const schema = buildGraph([
    {
      "@type": "Service",
      name: "Webflow & Framer Development Services",
      description:
        "Custom Webflow and Framer development for founders, product teams, and agencies.",
      provider: {
        "@type": "Person",
        name: "Chintan Savaliya",
        url: siteMetadata.siteUrl,
      },
      areaServed: "Worldwide",
    },
    buildBreadcrumbSchema([
      { name: "Home", url: siteMetadata.siteUrl },
      { name: "Services", url: `${siteMetadata.siteUrl}/services` },
    ]),
  ]);

  return (
    <>
      <JsonLd schema={schema} />
      <div className="mx-auto max-w-6xl space-y-24 py-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <SectionTitlePill title="Services" />
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
            Websites built — and platforms outgrown
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
            Webflow &amp; Framer builds for teams who love their platform — and
            migrations to an AI-native stack (Next.js, Astro, Sanity, Payload)
            for teams ready to own their site outright.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about#contact"
              className="rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-primary hover:opacity-90 transition-opacity"
            >
              Book a call
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border-primary px-6 py-3 text-sm font-medium text-text-primary hover:bg-bg-primary/50 transition-colors"
            >
              View projects
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">
              Design &amp; build
            </h2>
            <p className="text-sm text-text-secondary">
              Full-service builds on the platforms your team already uses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => !migrationSlugs.has(s.slug))
              .map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
          </div>
        </section>

        {/* Migration Services Grid */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">
              Migrations to an AI-native stack
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-text-secondary">
              Move off Webflow, WordPress, Framer, Squarespace, or Wix into a
              stack you own — Next.js or Astro, Sanity or Payload CMS, deployed
              on Vercel, Cloudflare, or Netlify. Built with a documented design
              system so your team maintains and extends the site with AI tools
              like Claude and Codex.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => migrationSlugs.has(s.slug))
              .map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">How I work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map(({ step, title, description }) => (
              <div key={step} className="space-y-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                  {step}
                </div>
                <h3 className="font-medium text-text-primary">{title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border-primary bg-bg-primary p-10 text-center space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Ready to start?
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Tell me about your project and I&apos;ll get back to you within 24 hours with a scoping
            outline.
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
