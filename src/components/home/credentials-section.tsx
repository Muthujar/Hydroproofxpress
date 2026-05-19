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
  { cell: string; icon: string; marker: string }
> = {
  sky: {
    cell: "lg:bg-sky-50/55",
    icon: "bg-sky-100 text-sky-700",
    marker: "bg-sky-400",
  },
  teal: {
    cell: "lg:bg-teal-50/50",
    icon: "bg-teal-100 text-teal-700",
    marker: "bg-teal-500",
  },
  amber: {
    cell: "lg:bg-amber-50/55",
    icon: "bg-amber-100 text-amber-800",
    marker: "bg-amber-500",
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

export function CredentialsSection() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden border-y border-slate-200/90 bg-[#e8eaee] py-10 md:py-14">
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
          <div className="overflow-hidden rounded-xl border border-slate-300/70 bg-white/95 shadow-sm">
            <div className="flex h-1" aria-hidden>
              <span className="flex-1 bg-sky-400" />
              <span className="flex-1 bg-teal-500" />
              <span className="flex-1 bg-amber-400" />
            </div>

            <ul className="grid min-w-0 divide-y divide-slate-200/90 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {credentials.map((item) => {
                const Icon = item.icon;
                const style = toneStyles[item.tone];

                return (
                  <li
                    key={item.title}
                    className={cn("flex min-w-0 gap-3.5 p-4 sm:p-5", style.cell)}
                  >
                    <span
                      className={cn(
                        "inline-flex size-9 shrink-0 items-center justify-center rounded-lg",
                        style.icon
                      )}
                    >
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="flex items-center gap-2 font-heading text-[0.95rem] font-semibold leading-snug text-primary sm:text-base">
                        <span
                          className={cn("inline-block size-1.5 shrink-0 rounded-full", style.marker)}
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

            <div className="border-t border-slate-200/90 bg-gradient-to-r from-sky-50/70 via-white to-amber-50/70 px-4 py-3.5 sm:px-5 sm:py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/70">
                Materials from leading brands
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {materialBrands.map((brand) => (
                  <li key={brand}>
                    <span className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/95 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/[0.03] sm:px-3.5 sm:py-1.5 sm:text-sm">
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
