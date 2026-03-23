import { siteMetadata } from "app/data/siteMetadata";

type FAQ = { question: string; answer: string };

export type BlogPost = {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  categories: string[];
  faqs?: FAQ[];
};

export type ServiceData = {
  slug: string;
  title: string;
  description: string;
};

export type BreadcrumbItem = { name: string; url: string };

const SITE_URL = siteMetadata.siteUrl;
const AUTHOR_NAME = siteMetadata.author;
const AUTHOR_URL = SITE_URL;

export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${AUTHOR_URL}/#person`,
    name: AUTHOR_NAME,
    url: AUTHOR_URL,
    jobTitle: "Web Designer & Developer",
    description:
      "Web designer & developer building high-performance sites for startups and teams.",
    sameAs: [
      siteMetadata.twitter,
      siteMetadata.linkedin,
      siteMetadata.github,
      siteMetadata.webflow,
    ],
    image: {
      "@type": "ImageObject",
      url: `${AUTHOR_URL}/avatar.jpg`,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteMetadata.title,
    description: siteMetadata.description,
    publisher: { "@id": `${AUTHOR_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildProfilePageSchema() {
  return {
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${AUTHOR_NAME} — Web Designer & Developer`,
    description: siteMetadata.description,
    mainEntity: { "@id": `${AUTHOR_URL}/#person` },
  };
}

export function buildArticleSchema(post: BlogPost) {
  return {
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.summary,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@id": `${AUTHOR_URL}/#person` },
    publisher: { "@id": `${AUTHOR_URL}/#person` },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog/${post.slug}.jpeg`,
    },
    keywords: post.categories.join(", "),
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function buildFaqSchema(faqs: FAQ[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: ServiceData) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${AUTHOR_URL}/#person` },
    areaServed: "Worldwide",
    serviceType: service.title,
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildGraph(schemas: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
