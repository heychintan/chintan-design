import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { CodeFormatter } from "./CodeFormatter";

export const metadata: Metadata = {
  title: "Code Formatter & Converter | Chintan Savaliya",
  description:
    "Free in-browser tool: format and minify JSON or HTML, and convert JSON to TypeScript interfaces. No uploads, no tracking.",
};

export default function CodeFormatterPage() {
  return (
    <div className="relative space-y-12 pb-24">
      <GridWrapper>
        <div className="mt-16 space-y-6 text-center">
          <SectionLabel index="01" title="Experiment" />
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            Code Formatter &amp; Converter
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-text-secondary">
            Paste JSON or HTML — format it, minify it, or convert JSON into
            TypeScript interfaces. Everything stays in your browser.
          </p>
        </div>
      </GridWrapper>
      <GridWrapper>
        <CodeFormatter />
      </GridWrapper>
    </div>
  );
}
