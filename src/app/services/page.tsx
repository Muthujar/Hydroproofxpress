import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

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
          <h1 className="font-heading text-3xl text-primary sm:text-4xl md:text-[2.75rem]">Our services</h1>
          <p className="text-lg text-muted-foreground">
            Each service comes with inspection checklists, scaffolding assumptions, safe-product notes, drying waits,
            water-test rules where needed, and handover notes tailored to your society or builder format.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeader eyebrow="What we fix" title="Leaks we handle every week." />
        <ul className="mt-14 grid list-none grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {services.map((svc, idx) => {
            const Ico = SERVICE_ICONS[svc.iconKey];
            return (
              <li key={svc.slug} className="min-w-0">
                <FadeIn delay={(idx % 3) * 0.05}>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border-2 border-border bg-card shadow-lg shadow-black/[0.06]">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group relative block aspect-[16/10] shrink-0 overflow-hidden bg-muted"
                    >
                      <Image
                        src={svc.imageSrc}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width:640px) 100vw, (max-width:1280px) 50vw, 33vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"
                        aria-hidden
                      />
                      <span className="absolute bottom-3 left-3 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                        <Ico className="size-6 shrink-0" aria-hidden />
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                      <div className="space-y-2">
                        <h2 className="font-heading text-xl leading-snug text-primary [overflow-wrap:anywhere] sm:text-[1.35rem]">
                          {svc.title}
                        </h2>
                        <p className="text-[0.98rem] leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
                          {svc.shortDesc}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground/90 [overflow-wrap:anywhere]">
                        {svc.description}
                      </p>
                      <Button className="mt-auto w-full sm:w-max" asChild>
                        <Link href={`/services/${svc.slug}`}>
                          Full details
                          <ArrowRight className="ml-2 size-4 shrink-0" aria-hidden />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
