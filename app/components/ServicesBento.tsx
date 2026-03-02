"use client";

import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";
import React from "react";

const services = [
  { label: "Web Design", desc: "Figma-first, conversion-focused" },
  { label: "Webflow Dev", desc: "Fast, scalable, team-editable" },
  { label: "Framer Dev", desc: "Interactive, high-fidelity sites" },
  { label: "AEO / GEO", desc: "Rank in ChatGPT, Claude, Gemini" },
  { label: "Programmatic SEO", desc: "Scale organic growth at speed" },
  { label: "AI & Automations", desc: "Streamline workflows with AI" },
];

export function ServicesBento({ linkTo }: { linkTo?: string }) {
  return (
    <BentoCard height="h-[300px]" linkTo={linkTo}>
      <div className="flex h-full flex-col">
        <div className="grid grid-cols-2 gap-2">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
              className="flex flex-col rounded-xl border border-border-primary bg-bg-secondary px-3 py-2.5"
            >
              <span className="text-sm font-medium text-text-primary">
                {service.label}
              </span>
              <span className="mt-0.5 text-xs text-text-secondary">
                {service.desc}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <h2 className="text-base font-medium">Services</h2>
          <p className="mt-1 text-text-secondary">
            Six ways I can help you build and grow.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
