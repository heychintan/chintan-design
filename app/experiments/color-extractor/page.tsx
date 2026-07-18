import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { ColorExtractor } from "./ColorExtractor";

export const metadata: Metadata = {
  title: "Color Palette Extractor | Chintan Savaliya",
  description:
    "Free in-browser tool: upload any image and extract its dominant colors as a copy-ready hex palette.",
};

export default function ColorExtractorPage() {
  return (
    <div className="relative space-y-12 pb-24">
      <GridWrapper>
        <div className="mt-16 space-y-6 text-center">
          <SectionLabel index="01" title="Experiment" />
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            Color Palette Extractor
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-text-secondary">
            Drop in an image, get its dominant colors. Click any swatch to copy
            the hex. Everything runs locally in your browser.
          </p>
        </div>
      </GridWrapper>
      <GridWrapper>
        <ColorExtractor />
      </GridWrapper>
    </div>
  );
}
