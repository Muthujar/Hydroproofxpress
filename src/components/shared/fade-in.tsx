"use client";

import type { PropsWithChildren } from "react";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}>;

export function FadeIn({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const reduce = mounted && !!prefersReducedMotion;

  const Comp = Tag === "section" ? motion.section : Tag === "li" ? motion.li : motion.div;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
