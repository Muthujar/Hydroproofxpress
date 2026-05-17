import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  /** Tighter margins for condensed home sections */
  compact?: boolean;
  /** On dark section backgrounds (e.g. slate band) */
  tone?: "default" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  compact = false,
  tone = "default",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "min-w-0 space-y-4",
        align === "center" ? "max-w-4xl" : "max-w-3xl",
        compact ? "mb-8" : "mb-11",
        align === "center" &&
          "mx-auto flex min-w-0 flex-col items-center justify-center text-center"
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.16em] md:text-[0.95rem]",
            tone === "dark" ? "text-amber-400/95" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "break-words font-heading text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-tight",
          tone === "dark" ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty leading-relaxed [overflow-wrap:anywhere]",
            compact ? "text-[1.05rem] md:max-w-2xl md:text-[1.1rem]" : "text-[1.0625rem] md:text-[1.125rem]",
            tone === "dark" ? "text-slate-400" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
