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
    topGlow: string;
    iconWrap: string;
    iconGlow: string;
    ripple: string;
    wash: string;
    hoverRing: string;
    hoverShadow: string;
  }
> = {
  sky: {
    topGlow: "from-transparent via-sky-400/90 to-transparent",
    iconWrap: "bg-sky-400/10 ring-sky-400/25",
    iconGlow: "bg-sky-400/25 shadow-[0_0_48px_-6px_rgba(56,189,248,0.55)]",
    ripple: "text-sky-400/20",
    wash: "from-sky-400/[0.07] via-transparent to-transparent",
    hoverRing: "group-hover:ring-sky-400/30",
    hoverShadow: "group-hover:shadow-[0_28px_56px_-16px_rgba(56,189,248,0.22),0_16px_40px_-20px_rgba(15,23,42,0.55)]",
  },
  teal: {
    topGlow: "from-transparent via-blue-400/90 to-transparent",
    iconWrap: "bg-blue-400/10 ring-blue-400/25",
    iconGlow: "bg-blue-400/25 shadow-[0_0_48px_-6px_rgba(96,165,250,0.5)]",
    ripple: "text-blue-400/20",
    wash: "from-blue-400/[0.07] via-transparent to-transparent",
    hoverRing: "group-hover:ring-blue-400/30",
    hoverShadow: "group-hover:shadow-[0_28px_56px_-16px_rgba(96,165,250,0.2),0_16px_40px_-20px_rgba(15,23,42,0.55)]",
  },
  emerald: {
    topGlow: "from-transparent via-indigo-400/90 to-transparent",
    iconWrap: "bg-indigo-400/10 ring-indigo-400/25",
    iconGlow: "bg-indigo-400/25 shadow-[0_0_48px_-6px_rgba(129,140,248,0.48)]",
    ripple: "text-indigo-400/20",
    wash: "from-indigo-400/[0.07] via-transparent to-transparent",
    hoverRing: "group-hover:ring-indigo-400/30",
    hoverShadow: "group-hover:shadow-[0_28px_56px_-16px_rgba(129,140,248,0.18),0_16px_40px_-20px_rgba(15,23,42,0.55)]",
  },
  amber: {
    topGlow: "from-transparent via-cyan-400/90 to-transparent",
    iconWrap: "bg-cyan-400/10 ring-cyan-400/25",
    iconGlow: "bg-cyan-400/25 shadow-[0_0_48px_-6px_rgba(34,211,238,0.45)]",
    ripple: "text-cyan-400/20",
    wash: "from-cyan-400/[0.07] via-transparent to-transparent",
    hoverRing: "group-hover:ring-cyan-400/30",
    hoverShadow: "group-hover:shadow-[0_28px_56px_-16px_rgba(34,211,238,0.16),0_16px_40px_-20px_rgba(15,23,42,0.55)]",
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

function WaterRipple({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute size-36 max-sm:size-24", className)}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
      <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <circle cx="60" cy="60" r="24" stroke="currentColor" strokeWidth="0.75" opacity="0.65" />
      <circle cx="60" cy="60" r="10" stroke="currentColor" strokeWidth="0.75" opacity="0.8" />
    </svg>
  );
}

function GlassReasonCard({
  reason,
  staggered,
}: {
  reason: (typeof reasons)[number];
  staggered: boolean;
}) {
  const Ico = reason.icon;
  const style = accentStyles[reason.accent];

  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-[28px] max-sm:rounded-[22px]",
        "border border-blue-500/20 bg-gradient-to-br from-[#0a1628] via-[#0c1d38] to-[#081428]",
        "shadow-[0_20px_50px_-24px_rgba(8,22,48,0.55),0_8px_24px_-12px_rgba(15,23,42,0.35)]",
        "ring-1 ring-blue-400/15 transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:border-blue-400/35 max-sm:hover:translate-y-0",
        style.hoverRing,
        style.hoverShadow,
        staggered && "lg:mt-10"
      )}
    >
      {/* Glowing top accent */}
      <div
        className={cn(
          "absolute inset-x-6 top-0 h-px bg-gradient-to-r opacity-70 transition-opacity duration-500 group-hover:opacity-100",
          style.topGlow
        )}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/[0.06] to-transparent opacity-80"
        aria-hidden
      />

      {/* Glass reflection — top-left */}
      <div
        className="pointer-events-none absolute -left-6 -top-10 size-40 rounded-full bg-white/[0.07] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-24 w-2/5 bg-gradient-to-br from-white/[0.12] via-white/[0.03] to-transparent"
        aria-hidden
      />

      {/* Diagonal wash */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100",
          style.wash
        )}
        aria-hidden
      />

      {/* Minimal geometric grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:28px_28px]"
        aria-hidden
      />

      <WaterRipple className={cn("-bottom-6 -right-6 max-sm:-bottom-3 max-sm:-right-3", style.ripple)} />

      <div className="relative flex min-w-0 flex-col p-5 sm:p-7 md:p-8">
        <div className="relative mb-5 inline-flex size-16 items-center justify-center sm:mb-6 sm:size-[4.25rem]">
          <span
            className={cn(
              "absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:scale-110",
              style.iconGlow
            )}
            aria-hidden
          />
          <span
            className={cn(
              "relative inline-flex size-16 items-center justify-center rounded-2xl ring-1 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03] max-sm:group-hover:scale-100 sm:size-[4.25rem]",
              style.iconWrap
            )}
          >
            <Ico className="size-7 max-sm:size-6 text-white/95" aria-hidden />
          </span>
        </div>

        <h3 className="font-heading text-xl font-semibold tracking-tight text-white text-balance sm:text-[1.35rem]">
          {reason.title}
        </h3>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-400/95 sm:text-[0.9375rem]">
          {reason.text}
        </p>
      </div>
    </article>
  );
}

export function WhyChooseSection() {
  return (
    <section className="relative scroll-mt-28 max-sm:scroll-mt-36 overflow-hidden border-y border-border bg-[#eef4fb] py-16 max-sm:py-10 md:py-24">
      {/* Section atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-[#eef4fb] to-[#e4edf7]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_10%_-10%,rgba(56,189,248,0.1),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_95%_110%,rgba(251,191,36,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(135deg,rgba(15,37,54,0.03)_25%,transparent_25%,transparent_50%,rgba(15,37,54,0.03)_50%,rgba(15,37,54,0.03)_75%,transparent_75%,transparent)] [background-size:48px_48px]"
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

        <div className="grid min-w-0 items-start gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {reasons.map((r, idx) => (
            <FadeIn key={r.title} delay={(idx % 2) * 0.06} className="min-w-0">
              <GlassReasonCard reason={r} staggered={idx % 2 === 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
