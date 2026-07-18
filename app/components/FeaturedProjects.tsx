"use client";

import { useState } from "react";
import Link from "next/link";
import { featuredProjects } from "app/data/projects";

export function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <div className="mx-auto max-w-6xl py-8 md:py-10">
      <ul
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setActive(null)}
      >
        {featuredProjects.map((project, i) => (
          <li key={project.title}>
            <Link
              href="/projects"
              onMouseEnter={() => setActive(i)}
              className="group flex items-baseline gap-4 border-b border-border-primary py-6 transition-colors first:border-t md:gap-8 md:py-8"
            >
              <span className="w-8 shrink-0 font-mono text-xs text-text-tertiary md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="flex-1 text-3xl font-medium tracking-[-0.03em] text-text-primary transition-all duration-300 group-hover:translate-x-2 group-hover:text-indigo-600 md:text-5xl">
                {project.title}
              </h3>
              <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-text-tertiary md:block">
                {project.category}
              </span>
              <span className="shrink-0 font-mono text-xs text-text-tertiary md:text-sm">
                {project.year}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Floating hover preview (desktop only) */}
      {active !== null && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-50 hidden overflow-hidden rounded-xl border border-border-primary shadow-2xl motion-safe:lg:block"
          style={{
            left: cursor.x + 28,
            top: cursor.y - 110,
            width: 320,
            height: 220,
          }}
        >
          <img
            src={featuredProjects[active].images[0]}
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}

      <div className="mt-8">
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-[0.14em] text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all projects →
        </Link>
      </div>
    </div>
  );
}
