import { trustStats } from "@/constants/stats";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function TrustIndicators() {
  return (
    <div className="border-y border-primary/14 bg-muted/55">
      <div className="mx-auto grid min-w-0 max-w-[120rem] gap-x-10 gap-y-9 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-10">
        {trustStats.map((row) => (
          <figure key={row.label} className="space-y-1">
            <p className="text-[2.05rem] font-semibold tracking-tight text-primary sm:text-[2.35rem] md:text-[2.55rem]">
              <AnimatedCounter value={row.value} suffix={row.suffix} />
            </p>
            <figcaption className="max-w-[18rem] text-[0.988rem] leading-snug text-muted-foreground md:text-[1.035rem]">
              {row.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
