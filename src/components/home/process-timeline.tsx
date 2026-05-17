import { Search, Map, Wrench, ClipboardCheck, CloudRain } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";

type ProcessTimelineProps = {
  compact?: boolean;
};

const stepsFull = [
  {
    title: "Inspection",
    text: "We scan damp patterns, open small spots only when agreed, and note hidden pipes where needed.",
    icon: Search,
  },
  {
    title: "Understanding the problem",
    text: "We explain where water enters, how seasons affect it, and salt or coastal risks if relevant.",
    icon: Map,
  },
  {
    title: "Planning the fix",
    text: "Clear step-by-step plan, safety basics, and scaffolding or lift access agreed upfront.",
    icon: ClipboardCheck,
  },
  {
    title: "Doing the waterproofing",
    text: "Layers applied with drying times suited to weather—and photo updates if you want them.",
    icon: Wrench,
  },
  {
    title: "Final checks",
    text: "Water spray or flood tests where suitable, final walk-through, and a simple handover summary.",
    icon: CloudRain,
  },
] as const;

const stepsCompact = [
  {
    title: "Inspection",
    text: "Find damp zones, agree readings, and shield valuables if water is still spreading.",
    icon: Search,
  },
  {
    title: "Diagnosis",
    text: "Pinpoint entry paths and drying rules before any coating goes on.",
    icon: Map,
  },
  {
    title: "Plan & checks",
    text: "Written plan, scaffold if needed, staged water tests, and photos at handover.",
    icon: ClipboardCheck,
  },
] as const;

export function ProcessTimeline({ compact = false }: ProcessTimelineProps) {
  const steps = compact ? stepsCompact : [...stepsFull];

  return (
    <section className="relative scroll-mt-28 border-t border-border/80 bg-muted/35 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-amber-500/[0.05]"
        aria-hidden
      />
      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          title={compact ? "Simple steps from visit to finish" : "A clear process—no confusing jargon."}
          description={
            compact
              ? "Three steps from site visit to sign-off—nothing hidden."
              : "From first visit to final testing we explain things plainly so families, facility staff, and designers stay on the same page."
          }
          compact={compact}
        />
        <ol className="relative grid min-w-0 gap-9 border-l-2 border-primary/22 pl-9 sm:pl-10 md:gap-11 md:pl-11 lg:gap-12 lg:pl-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn
                as="li"
                key={step.title}
                delay={i * 0.04}
                className="relative min-w-0 list-none scroll-mt-28"
              >
                <span
                  className="absolute -left-[2.15rem] flex size-10 items-center justify-center rounded-[10px] bg-primary text-primary-foreground shadow-md shadow-cyan-900/40 sm:-left-[2.45rem] md:-left-[2.85rem] md:size-11 md:rounded-xl"
                  aria-hidden
                >
                  <Icon className="size-5 md:size-[1.25rem]" />
                </span>
                <div className="space-y-1">
                  <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/85">
                    Phase {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading break-words text-[1.375rem] tracking-tight text-primary md:text-[1.52rem]">
                    {step.title}
                  </h3>
                  <p className="max-w-3xl break-words text-[1.04rem] leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
