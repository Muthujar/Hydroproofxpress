"use client";

import * as React from "react";

import { animate } from "framer-motion";

import { cn } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.25,
  className,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [shown, setShown] = React.useState(0);
  const triggered = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !triggered.current) {
          triggered.current = true;
          const controls = animate(0, value, {
            duration,
            ease: "easeOut",
            onUpdate: (v: number) => setShown(Math.round(v)),
          });
          observer.disconnect();
          return () => controls.stop();
        }
      },
      { rootMargin: "0px", threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums tracking-tight", className)}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
