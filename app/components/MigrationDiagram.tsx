const STACK_BY_SLUG: Record<
  string,
  { from: string; framework: string; cms: string; host: string }
> = {
  "webflow-to-nextjs": {
    from: "Webflow",
    framework: "Next.js",
    cms: "Sanity / Payload",
    host: "Vercel",
  },
  "webflow-to-astro": {
    from: "Webflow",
    framework: "Astro",
    cms: "Sanity / Collections",
    host: "Cloudflare / Netlify",
  },
  "wordpress-to-nextjs": {
    from: "WordPress",
    framework: "Next.js",
    cms: "Payload / Sanity",
    host: "Vercel / Cloudflare",
  },
  "framer-to-nextjs": {
    from: "Framer",
    framework: "Next.js",
    cms: "Sanity / Payload",
    host: "Vercel",
  },
  "squarespace-wix-to-modern-stack": {
    from: "Squarespace / Wix",
    framework: "Astro / Next.js",
    cms: "Sanity",
    host: "Cloudflare / Vercel",
  },
  "custom-website": {
    from: "Blank canvas",
    framework: "Next.js / Astro",
    cms: "Sanity / Payload",
    host: "Vercel / Cloudflare",
  },
};

export function MigrationDiagram({ slug }: { slug: string }) {
  const stack = STACK_BY_SLUG[slug];
  if (!stack) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border-primary bg-white p-6 md:p-8">
      <svg
        viewBox="0 0 720 220"
        className="w-full"
        role="img"
        aria-label={`Migration from ${stack.from} to ${stack.framework} with ${stack.cms}, hosted on ${stack.host}`}
      >
        <defs>
          <marker
            id="mig-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--accent))" />
          </marker>
          <pattern
            id="mig-hatch"
            width="6"
            height="6"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="#D6DADE" strokeWidth="1.5" />
          </pattern>
        </defs>

        {/* From box (old platform) */}
        <rect
          x="10"
          y="60"
          width="170"
          height="100"
          rx="16"
          fill="url(#mig-hatch)"
          stroke="#A5AEB8"
          strokeDasharray="6 4"
          strokeWidth="1.5"
        />
        <rect x="10" y="60" width="170" height="100" rx="16" fill="#F7F7F8" opacity="0.55" />
        <text
          x="95"
          y="105"
          textAnchor="middle"
          fontSize="16"
          fontWeight="500"
          fill="#5E5F6E"
        >
          {stack.from}
        </text>
        <text x="95" y="128" textAnchor="middle" fontSize="11" fill="#A5AEB8">
          rented platform
        </text>

        {/* Arrow with label */}
        <line
          x1="192"
          y1="110"
          x2="268"
          y2="110"
          stroke="rgb(var(--accent))"
          strokeWidth="2.5"
          markerEnd="url(#mig-arrow)"
        />
        <text
          x="232"
          y="95"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.08em"
          fill="rgb(var(--accent))"
        >
          MIGRATE
        </text>

        {/* Owned stack container */}
        <rect
          x="280"
          y="14"
          width="430"
          height="192"
          rx="20"
          fill="rgb(var(--accent-50))"
          stroke="rgb(var(--accent-200))"
          strokeWidth="1.5"
        />
        <text
          x="495"
          y="40"
          textAnchor="middle"
          fontSize="10"
          fontWeight="600"
          letterSpacing="0.12em"
          fill="rgb(var(--accent-700))"
        >
          YOUR OWNED STACK
        </text>

        {/* Stack cards */}
        {[
          { label: stack.framework, sub: "framework", x: 300 },
          { label: stack.cms, sub: "content", x: 440 },
          { label: stack.host, sub: "hosting", x: 580 },
        ].map((card) => (
          <g key={card.sub}>
            <rect
              x={card.x}
              y="56"
              width="110"
              height="72"
              rx="12"
              fill="white"
              stroke="rgb(var(--accent-300))"
              strokeWidth="1.5"
            />
            <text
              x={card.x + 55}
              y="88"
              textAnchor="middle"
              fontSize="11.5"
              fontWeight="600"
              fill="#0f172a"
            >
              {card.label}
            </text>
            <text
              x={card.x + 55}
              y="108"
              textAnchor="middle"
              fontSize="10"
              fill="#5E5F6E"
            >
              {card.sub}
            </text>
          </g>
        ))}

        {/* AI maintenance bar */}
        <rect
          x="300"
          y="146"
          width="390"
          height="42"
          rx="12"
          fill="rgb(var(--accent))"
        />
        <text
          x="495"
          y="172"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="white"
        >
          Maintained with AI — Claude Code · Codex · your design system
        </text>
      </svg>
    </div>
  );
}
