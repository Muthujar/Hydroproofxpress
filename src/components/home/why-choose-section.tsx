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

/** Same four accent hues — rim light + icon glow on dark cards (section band is light) */
const reasons: readonly {
  icon: LucideIcon;
  title: string;
  text: string;
  topBar: string;
  /** Colored lift on hover */
  hoverGlow: string;
  iconBox: string;
  iconGlow: string;
}[] = [
  {
    icon: HardHat,
    title: "Experienced crews on site",
    text: "Inspectors who match plans with where water really moves—clear updates for builders and housing societies.",
    topBar: "from-sky-400 via-sky-500 to-sky-600",
    hoverGlow: "group-hover:shadow-[0_0_48px_-8px_rgba(14,165,233,0.35)]",
    iconBox:
      "border-sky-400/35 bg-slate-800/80 text-sky-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(14,165,233,0.35)]",
    iconGlow: "shadow-[0_0_24px_-4px_rgba(56,189,248,0.45)]",
  },
  {
    icon: Sparkles,
    title: "Right products for your surface",
    text: "Layered waterproofing for your slab or outer wall—not thin shortcuts that peel after heavy rain.",
    topBar: "from-cyan-400 via-teal-500 to-teal-700",
    hoverGlow: "group-hover:shadow-[0_0_48px_-8px_rgba(34,211,238,0.3)]",
    iconBox:
      "border-cyan-400/35 bg-slate-800/80 text-cyan-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(34,211,238,0.3)]",
    iconGlow: "shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)]",
  },
  {
    icon: DollarSign,
    title: "Payments tied to progress",
    text: "You pay as agreed stages finish—often after leak checks—so billing stays predictable.",
    topBar: "from-emerald-400 via-emerald-500 to-emerald-800",
    hoverGlow: "group-hover:shadow-[0_0_48px_-8px_rgba(52,211,153,0.28)]",
    iconBox:
      "border-emerald-400/35 bg-slate-800/80 text-emerald-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(16,185,129,0.3)]",
    iconGlow: "shadow-[0_0_24px_-4px_rgba(52,211,153,0.38)]",
  },
  {
    icon: BadgeCheck,
    title: "Warranty you can show",
    text: "Written workmanship cover plus branded materials where your project needs paperwork on file.",
    topBar: "from-amber-400 via-amber-500 to-amber-700",
    hoverGlow: "group-hover:shadow-[0_0_48px_-8px_rgba(251,191,36,0.32)]",
    iconBox:
      "border-amber-400/40 bg-slate-800/80 text-amber-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_-8px_rgba(251,191,36,0.28)]",
    iconGlow: "shadow-[0_0_24px_-4px_rgba(251,191,36,0.4)]",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative scroll-mt-28 border-t border-border/80 bg-muted/50 py-16 md:py-24">
      {/* Light-band depth — subtle wash + fine grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-25%,rgba(59,130,246,0.06),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:20px_20px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Why HydroProof XPress"
          title="Straight talk, solid proof"
          description="Photos while we work, drying records, and a clear finish checklist—so sign-off is stress-free."
          compact
        />
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 sm:gap-6">
          {reasons.map((r, idx) => {
            const Ico = r.icon;
            return (
              <FadeIn key={r.title} delay={(idx % 2) * 0.05}>
                <div
                  className={cn(
                    "group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-slate-700/85 dark:border-slate-600/45",
                    "bg-gradient-to-b from-slate-900/95 to-slate-950 dark:from-slate-950 dark:to-[#020617]",
                    "shadow-[0_24px_60px_-28px_rgba(0,0,0,0.75),inset_0_1px_0_0_rgba(255,255,255,0.05)]",
                    "transition-[transform,box-shadow,border-color] duration-300",
                    "hover:-translate-y-1 hover:border-slate-500/80",
                    r.hoverGlow
                  )}
                >
                  <div
                    className={cn("h-1.5 w-full bg-gradient-to-r", r.topBar)}
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04]" aria-hidden />

                  <div className="relative flex flex-1 flex-col p-6 pt-5 sm:p-7">
                    <div
                      className={cn(
                        "mb-5 inline-flex size-14 shrink-0 items-center justify-center rounded-xl border backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]",
                        r.iconBox,
                        r.iconGlow
                      )}
                    >
                      <Ico className="size-7" aria-hidden />
                    </div>
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-white md:text-[1.32rem]">
                      {r.title}
                    </h3>
                    <p className="mt-3 flex-1 text-pretty text-[1.0425rem] leading-relaxed text-slate-400 md:text-[1.065rem]">
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
