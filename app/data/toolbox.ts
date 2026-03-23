type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
  imgSrc?: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Webflow",
    imgSrc: "/assets/tool_webflow.jpg",
    link: "https://webflow.com/",
  },
  {
    title: "Framer",
    imgSrc: "/framer_logo.png",
    link: "https://www.framer.com/",
  },
  {
    title: "GSAP",
    imgSrc: "/gsap_logo.png",
    link: "https://gsap.com/",
  },
  {
    title: "Spline",
    imgSrc: "/assets/tool_spline.jpg",
    link: "https://spline.design/",
  },
  {
    title: "JavaScript",
    imgSrc: "/javascript_logo.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Fillout",
    imgSrc: "/assets/tool_fillout.png",
    link: "https://www.fillout.com/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "MacBook Pro (14 inch)",
    description:
      "My primary machine for design and development work. Fast, quiet, and reliable.",
    link: "https://www.apple.com/macbook-pro/",
    imgSrc: "/assets/macbook_pro.webp",
  },
  {
    title: "MX Keys Keyboard",
    description:
      "Logitech's low-profile mechanical keyboard — comfortable for long sessions with smart backlighting.",
    link: "https://www.logitech.com/en-us/products/keyboards/mx-keys-s.html",
    imgSrc: "/assets/mx-keys-keyboard.jpg",
  },
  {
    title: "MX Master 3 Mouse",
    description:
      "Ergonomic, precise, and the scroll wheel is unmatched. Essential for design work.",
    link: "https://www.logitech.com/en-us/products/mice/mx-master-3s.html",
    imgSrc: "/assets/mx-master-3-mouse.jpg",
  },
];

export { hardwareData, softwareData };
