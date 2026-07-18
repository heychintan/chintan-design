import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "app/data/services";
import { siteMetadata } from "app/data/siteMetadata";
import { JsonLd } from "app/components/JsonLd";
import {
  buildServiceSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildGraph,
} from "app/lib/schema";
import { ReviewCard } from "app/components/ReviewCard";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { MigrationDiagram } from "app/components/MigrationDiagram";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Chintan Savaliya`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Chintan Savaliya`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const schema = buildGraph([
    buildServiceSchema({
      slug: service.slug,
      title: service.title,
      description: service.description,
    }),
    buildFaqSchema(service.faqs),
    buildBreadcrumbSchema([
      { name: "Home", url: siteMetadata.siteUrl },
      { name: "Services", url: `${siteMetadata.siteUrl}/services` },
      {
        name: service.title,
        url: `${siteMetadata.siteUrl}/services/${service.slug}`,
      },
    ]),
  ]);

  return (
    <>
      <JsonLd schema={schema} />
      <div className="mx-auto max-w-6xl space-y-24 py-16">
        {/* Hero */}
        <section className="space-y-6">
          <nav className="text-sm text-text-secondary">
            <Link href="/services" className="hover:text-text-primary">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{service.title}</span>
          </nav>
          <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
            {service.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-text-secondary">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about#contact"
              className="rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-primary hover:opacity-90 transition-opacity"
            >
              Start a project
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-border-primary px-6 py-3 text-sm font-medium text-text-primary hover:bg-bg-primary/50 transition-colors"
            >
              See my work
            </Link>
          </div>
        </section>

        <MigrationDiagram slug={service.slug} />

        {/* Deliverables */}
        <section className="space-y-6">
          <SectionTitlePill title="What's included" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Everything in the engagement
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section className="space-y-8">
          <SectionTitlePill title="Process" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">How it works</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.process.map(({ step, title, description }) => (
              <div key={step} className="space-y-3 rounded-2xl border border-border-primary p-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                  {step}
                </div>
                <h3 className="font-medium text-text-primary">{title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        {service.reviews.length > 0 && (
          <section className="space-y-8">
            <SectionTitlePill title="Reviews" />
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">
              What clients say
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {service.reviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="space-y-6">
          <SectionTitlePill title="FAQ" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-border-primary">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-text-primary">
                  {faq.question}
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-text-secondary transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-3 leading-7 text-text-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border border-border-primary bg-bg-primary p-10 text-center space-y-4">
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Ready to get started?
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Send me a brief and I&apos;ll reply within 24 hours with a scoping outline and timeline.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-primary hover:opacity-90 transition-opacity"
          >
            Start a project
          </Link>
        </section>
      </div>
    </>
  );
}
