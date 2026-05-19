import {
  BadgeCheck,
  DollarSign,
  HardHat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { cn } from "@/lib/utils";

type AccentKey = "sky" | "teal" | "emerald" | "amber";

const accentStyles: Record<
  AccentKey,
  {
    stripe: string;
    icon: string;
    border: string;
    bar: string;
  }
> = {
  sky: {
    stripe: "from-sky-400 via-sky-500 to-sky-700",
    icon: "bg-sky-950/50 text-sky-400",
    border: "border-slate-500/35 hover:border-sky-500/35",
    bar: "bg-sky-400",
  },
  teal: {
    stripe: "from-cyan-400 via-teal-500 to-teal-700",
    icon: "bg-teal-950/50 text-teal-400",
    border: "border-slate-500/35 hover:border-teal-500/35",
    bar: "bg-teal-400",
  },
  emerald: {
    stripe: "from-emerald-400 via-emerald-500 to-emerald-700",
    icon: "bg-emerald-950/50 text-emerald-400",
    border: "border-slate-500/35 hover:border-emerald-500/35",
    bar: "bg-emerald-400",
  },
  amber: {
    stripe: "from-amber-400 via-amber-500 to-amber-700",
    icon: "bg-amber-950/40 text-amber-400",
    border: "border-slate-500/35 hover:border-amber-500/35",
    bar: "bg-amber-400",
  },
};

const reasons: readonly {
  icon: LucideIcon;
  title: string;
  text: string;
  accent: AccentKey;
}[] = [
  {
    icon: HardHat,
    title: "Experienced crews on site",
    text: "Inspectors who match plans with where water really moves—clear updates for builders and housing societies.",
    accent: "sky",
  },
  {
    icon: Sparkles,
    title: "Right products for your surface",
    text: "Layered waterproofing for your slab or outer wall—not thin shortcuts that peel after heavy rain.",
    accent: "teal",
  },
  {
    icon: DollarSign,
    title: "Payments tied to progress",
    text: "You pay as agreed stages finish—often after leak checks—so billing stays predictable.",
    accent: "emerald",
  },
  {
    icon: BadgeCheck,
    title: "Warranty you can show",
    text: "Written workmanship cover plus branded materials where your project needs paperwork on file.",
    accent: "amber",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden border-y border-border bg-[#eef4fb] py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-[#eef4fb] to-[#e4edf7]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_10%_-10%,rgba(56,189,248,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_95%_110%,rgba(251,191,36,0.1),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary shadow-sm backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-amber-500" aria-hidden />
            4 reasons homeowners pick us
          </span>
        </div>

        <SectionHeader
          align="center"
          eyebrow="Why HydroProof XPress"
          title="Straight talk, solid proof"
          description="Photos while we work, drying records, and a clear finish checklist—so sign-off is stress-free."
          compact
        />

        <div className="grid min-w-0 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-6">
          {reasons.map((r, idx) => {
            const Ico = r.icon;
            const style = accentStyles[r.accent];
            return (
              <FadeIn key={r.title} delay={(idx % 2) * 0.05} className="h-full">
                <article
                  className={cn(
                    "flex h-full overflow-hidden rounded-2xl border bg-gradient-to-br from-[#2b4358] via-[#334d63] to-[#253948]",
                    "shadow-[0_12px_32px_-20px_rgba(15,23,42,0.4)]",
                    "transition-[border-color] duration-300",
                    style.border
                  )}
                >
                  <div
                    className={cn(
                      "w-1.5 shrink-0 bg-gradient-to-b sm:w-2",
                      style.stripe
                    )}
                    aria-hidden
                  />

                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "inline-flex size-11 shrink-0 items-center justify-center rounded-lg",
                          style.icon
                        )}
                      >
                        <Ico className="size-5" aria-hidden />
                      </div>

                      <div className="min-w-0 flex-1 pt-0.5">
                        <span
                          className={cn("mb-2 block h-0.5 w-8 rounded-full", style.bar)}
                          aria-hidden
                        />
                        <h3 className="font-heading text-lg font-semibold tracking-tight text-white text-balance md:text-xl">
                          {r.title}
                        </h3>
                        <p className="mt-2.5 text-pretty text-[0.98rem] leading-relaxed text-slate-300/95">
                          {r.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
