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

const reasons: readonly {
  icon: LucideIcon;
  title: string;
  text: string;
  stripe: string;
  iconTint: string;
}[] = [
  {
    icon: HardHat,
    title: "Experienced crews on site",
    text: "Inspectors who match plans with where water really moves—clear updates for builders and housing societies.",
    stripe: "bg-sky-500",
    iconTint: "bg-sky-500/15 text-sky-800 dark:text-sky-200",
  },
  {
    icon: Sparkles,
    title: "Right products for your surface",
    text: "Layered waterproofing for your slab or outer wall—not thin shortcuts that peel after heavy rain.",
    stripe: "bg-cyan-500",
    iconTint: "bg-cyan-500/15 text-cyan-900 dark:text-cyan-200",
  },
  {
    icon: DollarSign,
    title: "Payments tied to progress",
    text: "You pay as agreed stages finish—often after leak checks—so billing stays predictable.",
    stripe: "bg-emerald-500",
    iconTint: "bg-emerald-500/15 text-emerald-900 dark:text-emerald-200",
  },
  {
    icon: BadgeCheck,
    title: "Warranty you can show",
    text: "Written workmanship cover plus branded materials where your project needs paperwork on file.",
    stripe: "bg-amber-500",
    iconTint: "bg-amber-500/15 text-amber-900 dark:text-amber-100",
  },
];

/** Squared bento tiles — readable at a glance */
export function WhyChooseSection() {
  return (
    <section className="bg-muted/50 py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-[120rem] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Why HydroProof XPress"
          title="Straight talk, solid proof"
          description="Photos while we work, drying records, and a clear finish checklist—so sign-off is stress-free."
          compact
        />
        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
          {reasons.map((r, idx) => {
            const Ico = r.icon;
            return (
              <FadeIn key={r.title} delay={(idx % 2) * 0.05}>
                <div
                  className={cn(
                    "relative flex h-full min-h-[210px] flex-col rounded-xl border-2 border-border bg-card",
                    "pt-px pl-[3px] shadow-[0_10px_40px_-18px_rgba(15,40,71,0.38)] transition-[transform,box-shadow] duration-200",
                    "hover:-translate-y-0.5 hover:shadow-[0_14px_44px_-16px_rgba(15,40,71,0.42)] md:min-h-[228px]"
                  )}
                >
                  <div
                    className={cn("absolute inset-y-3 left-0 w-1.5 rounded-r-sm shadow-sm", r.stripe)}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col p-6 pl-8">
                    <div
                      className={cn(
                        "mb-4 inline-flex size-14 shrink-0 items-center justify-center rounded-lg border border-border/80",
                        r.iconTint
                      )}
                    >
                      <Ico className="size-7" aria-hidden />
                    </div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]">
                      {r.title}
                    </h3>
                    <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground text-[1.05rem] md:text-[1.08rem]">
                      {r.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
