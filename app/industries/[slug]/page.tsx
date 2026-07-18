import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { industries, getIndustryBySlug } from "app/data/industries";
import { services } from "app/data/services";
import { siteMetadata } from "app/data/siteMetadata";
import { JsonLd } from "app/components/JsonLd";
import {
  buildFaqSchema,
  buildBreadcrumbSchema,
  buildGraph,
} from "app/lib/schema";
import { ReviewCard } from "app/components/ReviewCard";
import { SectionLabel } from "app/components/SectionLabel";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: `${industry.title} | Chintan Savaliya`,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | Chintan Savaliya`,
      description: industry.description,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const relatedServiceData = services.filter((s) =>
    industry.relatedServices.includes(s.slug)
  );

  const schema = buildGraph([
    {
      "@type": "Service",
      name: industry.title,
      description: industry.description,
      url: `${siteMetadata.siteUrl}/industries/${industry.slug}`,
      provider: {
        "@type": "Person",
        name: "Chintan Savaliya",
        url: siteMetadata.siteUrl,
      },
      areaServed: "Worldwide",
    },
    buildFaqSchema(industry.faqs),
    buildBreadcrumbSchema([
      { name: "Home", url: siteMetadata.siteUrl },
      { name: "Industries", url: `${siteMetadata.siteUrl}/industries` },
      {
        name: industry.title,
        url: `${siteMetadata.siteUrl}/industries/${industry.slug}`,
      },
    ]),
  ]);

  return (
    <>
      <JsonLd schema={schema} />
      <div className="space-y-24 py-16">
        {/* Hero */}
        <section className="space-y-6">
          <nav className="text-sm text-text-secondary">
            <Link href="/industries" className="hover:text-text-primary">
              Industries
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-primary">{industry.title}</span>
          </nav>
          <h1 className="max-w-3xl text-balance text-4xl font-medium tracking-tight text-text-primary md:text-5xl">
            {industry.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-text-secondary">
            {industry.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about#contact"
              className="rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-bg-primary hover:opacity-90 transition-opacity"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border-primary px-6 py-3 text-sm font-medium text-text-primary hover:bg-bg-primary/50 transition-colors"
            >
              View services
            </Link>
          </div>
        </section>

        {/* Pain Points */}
        <section className="space-y-8">
          <SectionLabel index="01" title="The problem" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            What your team is dealing with
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industry.painPoints.map((point, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border-primary bg-bg-primary p-6 space-y-2"
              >
                <h3 className="font-medium text-text-primary">{point.title}</h3>
                <p className="text-sm leading-6 text-text-secondary">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions */}
        <section className="space-y-8">
          <SectionLabel index="02" title="How Webflow helps" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            The right tool for the job
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.solutions.map((solution, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-text-primary">{solution.title}</h3>
                  <p className="text-sm leading-6 text-text-secondary">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        {relatedServiceData.length > 0 && (
          <section className="space-y-8">
            <SectionLabel index="03" title="Services" />
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">
              Relevant services for your team
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServiceData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-2xl border border-border-primary bg-bg-primary p-6 space-y-2 transition-colors hover:border-indigo-500/50"
                >
                  <h3 className="font-medium text-text-primary group-hover:text-indigo-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-text-secondary line-clamp-2">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        {industry.reviews.length > 0 && (
          <section className="space-y-8">
            <SectionLabel index="04" title="Reviews" />
            <h2 className="text-2xl font-medium tracking-tight text-text-primary">
              From teams like yours
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {industry.reviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="space-y-6">
          <SectionLabel index="05" title="FAQ" />
          <h2 className="text-2xl font-medium tracking-tight text-text-primary">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-border-primary">
            {industry.faqs.map((faq, i) => (
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
            Let&apos;s build something great
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Tell me about your project and I&apos;ll reply within 24 hours with a scoping outline.
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
