"use client";

import { useState } from "react";
import { GridWrapper } from "./GridWrapper";

const faqs = [
  {
    question: "What types of websites do you build?",
    answer:
      "I specialize in marketing sites, landing pages, and CMS-powered platforms for SaaS startups, design agencies, and VC-backed companies. Most projects are built on Webflow or Framer, with custom GSAP animations and SEO foundations included. I also offer AEO/GEO optimization for AI search visibility and programmatic SEO for scaling organic traffic.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most marketing sites take 3\u20136 weeks from kickoff to launch. Migrations from WordPress typically take 4\u20138 weeks depending on content volume. Rush timelines are available \u2014 I\u2019ve shipped full sites in under 2 weeks when needed.",
  },
  {
    question: "Do you work with design files or handle design too?",
    answer:
      "Both. I can build pixel-perfect from your Figma designs, or handle the full design-to-development process. About half my clients come with designs; the other half start from a brief and I design in-browser.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes 30 days of post-launch support. After that, your team owns the site \u2014 I document everything and do a handoff walkthrough. Many clients keep me on retainer for ongoing iterations.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Most projects range from $3,000\u2013$15,000 depending on scope. I price per project, not hourly. You\u2019ll get a fixed quote before we start \u2014 no surprises.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-primary">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <h3 className="text-sm font-medium text-text-primary md:text-base">
          {question}
        </h3>
        <span className="ml-4 flex-shrink-0 text-text-tertiary">
          <svg
            className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-sm leading-relaxed text-text-secondary">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="relative space-y-10 md:space-y-16">
      <div className="space-y-4 text-balance">
        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>FAQ</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
            Questions founders usually ask
          </h2>
        </GridWrapper>
      </div>

      <GridWrapper>
        <div className="mx-auto max-w-3xl py-8 md:py-10">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </GridWrapper>
    </section>
  );
}
