"use client";

import { BentoCard } from "./BentoCard";
import { motion } from "framer-motion";
import React from "react";

const snippets = [
  {
    name: "Janet Lee, Head of GTM @ daydream",
    quote: "He's really, really good at what he does.",
  },
  {
    name: "Akshay Rangasai, Appsmith",
    quote: "Impressive migration — crunched timelines, zero excuses.",
  },
  {
    name: "Chris d'Eon, The Smart Property",
    quote: "The result was even better than I thought possible.",
  },
];

export function ReviewsBento({ linkTo }: { linkTo?: string }) {
  return (
    <BentoCard height="h-[276px]" linkTo={linkTo}>
      <div className="flex h-full flex-col">
        <div className="flex flex-col gap-2.5 overflow-hidden">
          {snippets.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-border-primary bg-bg-secondary px-4 py-3"
            >
              <p className="text-sm text-text-secondary line-clamp-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-1 text-xs font-medium text-text-primary">
                — {item.name}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <h2 className="text-base font-medium">Client Reviews</h2>
          <p className="mt-1 text-text-secondary">
            Nine clients. Seven years. Zero ghosting.
          </p>
        </div>
      </div>
    </BentoCard>
  );
}
