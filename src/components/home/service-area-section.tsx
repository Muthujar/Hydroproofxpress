import { MapPinned } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { serviceAreas } from "@/constants/regions";

export function ServiceAreaSection() {
  return (
    <section className="border-y border-primary/18 bg-[#eaf2fb] py-20 md:py-24 dark:bg-muted/55">
      <div className="mx-auto grid max-w-[120rem] gap-12 px-4 sm:gap-16 lg:grid-cols-[1fr_360px] lg:items-start lg:px-10 lg:gap-24 lg:gap-x-36">
        <FadeIn className="max-w-xl space-y-4">
          <SectionHeader
            eyebrow="Service areas"
            title="Hyderabad first—we can reach nearby cities too."
            description="We keep rolls, pumps, and testing kits ready locally so premium complexes aren’t delayed waiting on supplies."
          />
        </FadeIn>
        <FadeIn delay={0.06}>
          <ul className="space-y-6 rounded-3xl border border-border bg-background/92 p-8 shadow-xl shadow-black/10">
            <li className="flex gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <MapPinned className="size-7" aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-primary">Areas we cover often</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground text-[15px]">
                  {serviceAreas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
