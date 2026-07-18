"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, createElement } from "react";
import { EASE } from "../lib/motion";

type AnimatedTextProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
};

export function AnimatedText({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        ease: EASE,
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
