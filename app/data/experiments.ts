export interface Experiment {
  slug: string;
  title: string;
  description: string;
  status: "live" | "coming-soon";
  tags: string[];
}

export const experiments: Experiment[] = [
  {
    slug: "color-extractor",
    title: "Color Palette Extractor",
    description:
      "Upload any image and pull out its dominant colors as a copy-ready palette — hex codes included.",
    status: "live",
    tags: ["Canvas", "Design tooling"],
  },
  {
    slug: "glass-effect",
    title: "Glass Effect Studio",
    description:
      "Turn any image into frosted or fluted glass. Adjust blur, stripe width, and direction — then copy the CSS.",
    status: "live",
    tags: ["CSS", "backdrop-filter"],
  },
  {
    slug: "code-formatter",
    title: "Code Formatter & Converter",
    description:
      "Format and minify JSON or HTML, and convert JSON into TypeScript interfaces — all in the browser.",
    status: "live",
    tags: ["Dev tools", "TypeScript"],
  },
  {
    slug: "svg-animator",
    title: "SVG Animator",
    description:
      "Upload an SVG and generate a polished draw-on / stagger animation you can drop straight into your site.",
    status: "coming-soon",
    tags: ["SVG", "Animation"],
  },
  {
    slug: "3d-viewer",
    title: "3D Model Viewer",
    description:
      "A single-file 3D viewer — drop in a model, orbit, light it, and embed it anywhere.",
    status: "coming-soon",
    tags: ["Three.js", "3D"],
  },
  {
    slug: "site-configurator",
    title: "Website Cost Configurator",
    description:
      "Apple-style configurator for scoping a website build — pick pages, CMS, animations, and see the estimate change live.",
    status: "coming-soon",
    tags: ["Product", "Calculator"],
  },
];

export const liveExperiments = experiments.filter((e) => e.status === "live");
