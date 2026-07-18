import type { Metadata } from "next";
import { GridWrapper } from "@/app/components/GridWrapper";
import { SectionLabel } from "@/app/components/SectionLabel";
import { GlassEffect } from "./GlassEffect";

export const metadata: Metadata = {
  title: "Glass Effect Studio | Chintan Savaliya",
  description:
    "Free in-browser tool: apply frosted and fluted glass effects to any image with adjustable blur, stripe width, and direction — then copy the CSS.",
};

export default function GlassEffectPage() {
  return (
    <div className="relative space-y-12 pb-24">
      <GridWrapper>
        <div className="mt-16 space-y-6 text-center">
          <SectionLabel index="01" title="Experiment" />
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl">
            Glass Effect Studio
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-text-secondary">
            Frosted and fluted glass over any image. Tune the blur, stripe
            width, and direction with the handles — then copy the CSS straight
            into your project.
          </p>
        </div>
      </GridWrapper>
      <GridWrapper>
        <GlassEffect />
      </GridWrapper>
    </div>
  );
}
