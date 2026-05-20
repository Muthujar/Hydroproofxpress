import { FlaskConical, ShieldCheck, Users, type LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

type CredentialTone = "sky" | "teal" | "amber";

const credentials: readonly {
  icon: LucideIcon;
  title: string;
  text: string;
  tone: CredentialTone;
}[] = [
  {
    icon: FlaskConical,
    title: "Industry approved materials",
    text: "Certified and tested waterproofing products from leading manufacturers.",
    tone: "sky",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    text: "Fully licensed contractor with comprehensive insurance coverage.",
    tone: "teal",
  },
  {
    icon: Users,
    title: "Trained professionals",
    text: "Regular training and certification from material manufacturers.",
    tone: "amber",
  },
];

const toneStyles: Record<
  CredentialTone,
  {
    cell: string;
    cellHover: string;
    icon: string;
    iconHover: string;
    marker: string;
    topGlow: string;
    ripple: string;
    chipHover: string;
  }
> = {
  sky: {
    cell: "lg:bg-sky-50/55",
    cellHover: "group-hover:bg-sky-50/75",
    icon: "bg-gradient-to-br from-sky-50 to-sky-100/90 text-sky-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_2px_10px_-3px_rgba(56,189,248,0.28)] ring-sky-200/70",
    iconHover: "group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_20px_-4px_rgba(56,189,248,0.45)] group-hover:ring-sky-300/80",
    marker: "bg-sky-400",
    topGlow: "from-transparent via-sky-400/75 to-transparent",
    ripple: "text-sky-400/15",
    chipHover:
      "hover:border-sky-200/90 hover:shadow-[0_4px_16px_-4px_rgba(56,189,248,0.22),inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:ring-sky-200/40",
  },
  teal: {
    cell: "lg:bg-teal-50/50",
    cellHover: "group-hover:bg-teal-50/72",
    icon: "bg-gradient-to-br from-teal-50 to-teal-100/90 text-teal-700 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_2px_10px_-3px_rgba(45,212,191,0.26)] ring-teal-200/70",
    iconHover: "group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_20px_-4px_rgba(45,212,191,0.42)] group-hover:ring-teal-300/80",
    marker: "bg-teal-500",
    topGlow: "from-transparent via-teal-400/75 to-transparent",
    ripple: "text-teal-400/15",
    chipHover:
      "hover:border-teal-200/90 hover:shadow-[0_4px_16px_-4px_rgba(45,212,191,0.2),inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:ring-teal-200/40",
  },
  amber: {
    cell: "lg:bg-amber-50/55",
    cellHover: "group-hover:bg-amber-50/75",
    icon: "bg-gradient-to-br from-amber-50 to-amber-100/90 text-amber-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_2px_10px_-3px_rgba(251,191,36,0.24)] ring-amber-200/70",
    iconHover: "group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_20px_-4px_rgba(251,191,36,0.38)] group-hover:ring-amber-300/80",
    marker: "bg-amber-500",
    topGlow: "from-transparent via-amber-400/75 to-transparent",
    ripple: "text-amber-400/15",
    chipHover:
      "hover:border-amber-200/90 hover:shadow-[0_4px_16px_-4px_rgba(251,191,36,0.18),inset_0_1px_0_0_rgba(255,255,255,0.95)] hover:ring-amber-200/40",
  },
};

const materialBrands = [
  "BASF Construction Chemicals",
  "STP Limited",
  "Fosroc Chemicals",
  "Pidilite Industries",
  "Asian Paints SmartCare",
  "Sika India",
] as const;

function CornerRipple({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute size-16 opacity-80", className)}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <circle cx="48" cy="48" r="18" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />
      <circle cx="48" cy="48" r="8" stroke="currentColor" strokeWidth="0.6" opacity="0.75" />
    </svg>
  );
}

export function CredentialsSection() {
  return (
    <section className="relative scroll-mt-28 max-sm:scroll-mt-36 overflow-hidden border-y border-slate-200/90 bg-[#e8eaee] py-10 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-200/35 via-[#e8eaee] to-slate-300/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_0%,rgba(56,189,248,0.1),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_100%,rgba(251,191,36,0.08),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Our credentials"
          title="Building trust through certified expertise"
          description={`${siteConfig.name} maintains high standards through approved materials, licensed crews, and manufacturer partnerships.`}
          compact
        />

        <FadeIn>
          <div className="relative overflow-hidden rounded-xl border border-white/70 bg-white/78 shadow-[0_22px_54px_-26px_rgba(15,23,42,0.22),0_0_0_1px_rgba(255,255,255,0.65)] ring-1 ring-slate-900/[0.04] backdrop-blur-md max-sm:overflow-x-hidden">
            {/* Ambient panel glow */}
            <div
              className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-sky-200/25 via-transparent to-amber-200/20 opacity-70 blur-[2px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-16 top-8 size-48 rounded-full bg-sky-300/20 blur-3xl max-sm:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-12 bottom-16 size-40 rounded-full bg-amber-300/15 blur-3xl max-sm:hidden"
              aria-hidden
            />

            {/* Ultra-light noise */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.028] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"
              aria-hidden
            />

            {/* Faint grid behind cards */}
            <div
              className="pointer-events-none absolute inset-x-0 top-1 bottom-[5.5rem] opacity-[0.045] [background-image:linear-gradient(rgba(15,23,42,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.55)_1px,transparent_1px)] [background-size:24px_24px]"
              aria-hidden
            />

            {/* Corner accents */}
            <div
              className="pointer-events-none absolute left-3 top-3 size-7 rounded-tl-md border-l border-t border-slate-400/30"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-3 top-3 size-7 rounded-tr-md border-r border-t border-slate-400/25"
              aria-hidden
            />

            <div className="relative flex h-1 shadow-[0_1px_12px_-2px_rgba(56,189,248,0.35)]" aria-hidden>
              <span className="flex-1 bg-gradient-to-r from-sky-300 to-sky-400" />
              <span className="flex-1 bg-gradient-to-r from-teal-400 to-teal-500" />
              <span className="flex-1 bg-gradient-to-r from-amber-300 to-amber-400" />
            </div>

            <ul className="relative grid min-w-0 lg:grid-cols-3">
              {credentials.map((item, index) => {
                const Icon = item.icon;
                const style = toneStyles[item.tone];
                const isLast = index === credentials.length - 1;

                return (
                  <li
                    key={item.title}
                    className={cn(
                      "group relative flex min-w-0 gap-3.5 p-4 transition-all duration-500 ease-out sm:p-5",
                      "hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-18px_rgba(15,23,42,0.18)] max-sm:hover:translate-y-0 max-sm:hover:shadow-none",
                      style.cell,
                      style.cellHover,
                      !isLast &&
                        "after:pointer-events-none after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-gradient-to-r after:from-transparent after:via-slate-300/75 after:to-transparent lg:after:bottom-5 lg:after:left-auto lg:after:right-0 lg:after:top-5 lg:after:h-[calc(100%-2.5rem)] lg:after:w-px lg:after:bg-gradient-to-b lg:after:from-transparent lg:after:via-slate-300/75 lg:after:to-transparent"
                    )}
                  >
                    {/* Per-cell top glow */}
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:inset-x-4",
                        style.topGlow
                      )}
                      aria-hidden
                    />

                    <CornerRipple className={cn("-bottom-4 -right-4 max-sm:-bottom-2 max-sm:-right-2 max-sm:size-12", style.ripple)} />

                    <span
                      className={cn(
                        "relative inline-flex size-9 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-500 group-hover:scale-[1.06] max-sm:group-hover:scale-100",
                        style.icon,
                        style.iconHover
                      )}
                    >
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="relative min-w-0">
                      <h3 className="flex items-center gap-2 font-heading text-[0.95rem] font-semibold leading-snug text-primary sm:text-base">
                        <span
                          className={cn(
                            "inline-block size-1.5 shrink-0 rounded-full shadow-[0_0_8px_-1px_currentColor]",
                            style.marker
                          )}
                          aria-hidden
                        />
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="relative bg-gradient-to-r from-sky-50/70 via-white/85 to-amber-50/70 px-4 py-3.5 backdrop-blur-sm sm:px-5 sm:py-4">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent"
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/70">
                Materials from leading brands
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {materialBrands.map((brand) => (
                  <li key={brand}>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700",
                        "shadow-[0_2px_8px_-3px_rgba(15,23,42,0.12),inset_0_1px_0_0_rgba(255,255,255,0.95)] ring-1 ring-slate-900/[0.03]",
                        "transition-all duration-300 ease-out hover:scale-[1.03] max-sm:hover:scale-100",
                        "hover:border-slate-300/90 hover:shadow-[0_6px_18px_-6px_rgba(15,23,42,0.16),inset_0_1px_0_0_rgba(255,255,255,1)]",
                        toneStyles.amber.chipHover
                      )}
                    >
                      {brand}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
