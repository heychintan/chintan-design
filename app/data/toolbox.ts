type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
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
    imgSrc: "/webflow_logo.png",
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
    imgSrc: "/spline_logo.png",
    link: "https://spline.design/",
  },
  {
    title: "JavaScript",
    imgSrc: "/javascript_logo.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Fillout",
    imgSrc: "/fillout_logo.png",
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
  },
  {
    title: "Magic Keyboard",
    description:
      "Apple's wireless keyboard — minimal, precise, and pairs perfectly with the workflow.",
    link: "https://www.apple.com/shop/product/MMMR3LL/A/magic-keyboard-with-touch-id-and-numeric-keypad-for-mac-models-with-apple-silicon-us-english-black",
  },
  {
    title: "External Monitor",
    description:
      "A 27-inch 4K display for detailed design reviews and extended sessions.",
    link: "https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2722de/apd/210-ayif/monitors-monitor-accessories",
  },
];

export { hardwareData, softwareData };
