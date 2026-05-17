import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { services, SERVICE_ICONS } from "@/constants/services";

import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Waterproofing services",
  path: "/services",
  description:
    "Terraces, bathrooms, parking decks, roofs, tanks, cracked walls, basements, and outer-wall coatings—with checks and photo records end to end.",
});

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/55 py-20 md:py-24">
        <div className="mx-auto max-w-[940px] space-y-5 px-4 text-center">
          <h1 className="font-heading text-4xl text-primary md:text-[2.75rem]">Our services</h1>
          <p className="text-lg text-muted-foreground">
            Each service comes with inspection checklists, scaffolding assumptions, safe-product notes, drying waits, water-test rules where needed,
            and handover notes tailored to your society or builder format.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[120rem] px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <SectionHeader eyebrow="What we fix" title="Leaks we handle every week." />
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((svc, idx) => {
            const Ico = SERVICE_ICONS[svc.iconKey];
            return (
              <FadeIn key={svc.slug} delay={(idx % 2) * 0.06}>
                <article className="flex flex-col gap-6 overflow-hidden rounded-3xl border border-border shadow-lg shadow-black/10 md:flex-row">
                  <div className="relative aspect-[16/11] shrink-0 bg-muted md:aspect-auto md:h-auto md:w-[46%]">
                    <Image
                      src={svc.imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width:768px) 340px, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Ico className="size-7 shrink-0" aria-hidden />
                      </span>
                      <h2 className="font-heading text-2xl text-primary">{svc.title}</h2>
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted-foreground">{svc.description}</p>
                    <Button className="w-max" asChild>
                      <Link href={`/services/${svc.slug}`}>Full details</Link>
                    </Button>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </div>
  );
}
