import { Logo } from "./Logo";
import Link from "next/link";
import { SocialPill } from "./SocialPill";

interface FooterLink {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Hire",
    links: [
      { href: "/services", label: "Services" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/reviews", label: "Reviews" },
    ],
  },
  {
    title: "Work",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
      { href: "/toolbox", label: "Toolbox" },
    ],
  },
  {
    title: "Lab",
    links: [
      { href: "/lab", label: "The Lab" },
      { href: "/blog", label: "Blog" },
      { href: "/experiments", label: "Experiments" },
      { href: "/styleguide", label: "Style Guide" },
      { href: "/stats", label: "Stats" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        href: "mailto:hello@chintan.design",
        label: "Email me",
        isExternal: true,
      },
      {
        href: "https://cal.com/chintan/30min",
        label: "Book a call",
        isExternal: true,
      },
      { href: "/links", label: "Links" },
    ],
  },
];

export function Footer(): JSX.Element {
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    if (link.isExternal) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }
    return <Link href={link.href}>{link.label}</Link>;
  };

  return (
    <footer className="relative bg-[#17181F]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        {/* CTA — the site's biggest type */}
        <div className="space-y-6 border-b border-white/10 pb-14 md:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400 md:text-sm">
            <span className="text-indigo-400">08 —</span> Contact
          </p>
          <a
            href="mailto:hello@chintan.design"
            className="block max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] text-white transition-colors hover:text-indigo-400 md:text-8xl"
          >
            Have something to build?
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">
            hello@chintan.design · usually replies within a day
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-14 md:grid-cols-4 md:pt-20">
          {footerSections.map((section) => (
            <div key={section.title}>
              <span className="mb-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                {section.title}
              </span>
              <ul className="space-y-2 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li
                    className="transition-colors hover:text-white"
                    key={link.href}
                  >
                    {renderFooterLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Link className="inline-block" href="/">
              <Logo className="h-8 w-8 text-white" />
            </Link>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Chintan Savaliya — Based in India,
              building for the world.
            </p>
          </div>
          <SocialPill />
        </div>
      </div>
    </footer>
  );
}
