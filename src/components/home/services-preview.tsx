import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { SERVICE_ICONS, services } from "@/constants/services";
import { Button } from "@/components/ui/button";

type ServicesPreviewProps = {
  /** Lighter footprint on homepage */
  home?: boolean;
};

export function ServicesPreview({ home }: ServicesPreviewProps) {
  const list = home ? services.slice(0, 4) : services;

  return (
    <section id="services" className="scroll-mt-28 bg-background py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-[120rem] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="What we do best"
          title={home ? "Main waterproofing services" : "We trace leaks, then match the fix to your surface."}
          description={
            home
              ? "Four popular services—the full list is on the services page."
              : "From terraces to basements we use maker-approved methods with checks after wet work—not cosmetic touch-ups."
          }
          compact={home}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((service, i) => {
            const Icon = SERVICE_ICONS[service.iconKey];
            return (
              <FadeIn key={service.slug} delay={(i % 3) * 0.05}>
                <article>
                  <Card className="group h-full gap-0 overflow-hidden rounded-xl border-primary/22 py-0 transition-shadow hover:shadow-xl hover:shadow-cyan-950/12">
                    <div className="relative aspect-[16/10] w-full bg-muted">
                      <Image
                        src={service.imageSrc}
                        alt=""
                        loading="lazy"
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[480ms] group-hover/card:scale-[1.03]"
                      />
                      <div className="absolute inset-x-3 top-3 flex items-center gap-3 rounded-lg bg-black/56 px-3 py-2 text-white backdrop-blur-sm md:inset-x-4 md:top-4">
                        <Icon className="size-7 text-cyan-300" aria-hidden />
                        <p className="text-[0.975rem] font-semibold leading-tight">{service.title}</p>
                      </div>
                    </div>
                    <CardContent className="space-y-5 p-6">
                      <p className="text-[1.05rem] leading-relaxed text-muted-foreground">{service.shortDesc}</p>
                      <ul className="space-y-2 text-[0.975rem] text-foreground md:text-[1.02rem]">
                        {service.highlights.slice(0, home ? 2 : service.highlights.length).map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1.5 size-2 shrink-0 rounded-[2px] bg-accent" aria-hidden />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full gap-2" asChild>
                        <Link href={`/services/${service.slug}`}>
                          Learn more
                          <ArrowUpRight className="size-4" aria-hidden />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </article>
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={0.1} className="mt-10 text-center">
          <Button size="lg" asChild className="px-10">
            <Link href="/services">See all services</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
