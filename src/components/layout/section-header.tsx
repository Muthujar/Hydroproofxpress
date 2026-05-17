import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Tighter margins for condensed home sections */
  compact?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  compact = false,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-3xl min-w-0 space-y-4",
        compact ? "mb-8" : "mb-11",
        align === "center" &&
          "mx-auto flex min-w-0 flex-col items-center justify-center text-center"
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary md:text-[0.95rem]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="break-words font-heading text-[1.75rem] font-semibold tracking-tight text-primary sm:text-4xl md:text-[2.5rem] md:leading-tight">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-pretty leading-relaxed text-muted-foreground [overflow-wrap:anywhere]",
            compact ? "text-[1.05rem] md:max-w-2xl md:text-[1.1rem]" : "text-[1.0625rem] md:text-[1.125rem]"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
