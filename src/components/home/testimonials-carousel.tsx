"use client";

import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { testimonials } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsCarousel({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const compact = variant === "compact";

  return (
    <section
      className={cn("bg-[#f6f8fc]", compact ? "py-12 md:py-14" : "py-[4.25rem] md:py-[5.25rem]")}
    >
      <div className="mx-auto min-w-0 max-w-[120rem] px-4 sm:px-6 lg:px-10">
        <FadeIn>
          <SectionHeader
            eyebrow="Homeowners & building teams"
            title={
              compact
                ? "Results you can see"
                : "Smooth handovers—even when monsoon pushes every joint."
            }
            description={
              compact
                ? "Sample jobs — read more on Testimonials."
                : undefined
            }
            align="center"
            compact={compact}
          />
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="w-full min-w-0 overflow-x-clip px-0 sm:overflow-visible">
            <Carousel opts={{ align: "start", loop: true }} className="mx-auto w-full max-w-6xl min-w-0">
            <CarouselContent className="-ml-2 md:-ml-3">
              {testimonials.map((t) => (
                <CarouselItem
                  key={t.id}
                  className={cn(
                    "pl-2",
                    compact ? "basis-full md:basis-[90%]" : "basis-full md:basis-[85%] lg:basis-[70%]"
                  )}
                >
                  <blockquote
                    className={cn(
                      "mx-2 flex flex-col rounded-2xl border-2 border-border bg-background/96 shadow-lg shadow-black/[0.06] sm:mx-3",
                      compact ? "p-6 md:p-8" : "p-8 md:p-12"
                    )}
                  >
                    <div
                      className="mb-5 flex gap-1"
                      aria-label={`Rated ${String(t.rating)} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={`${t.id}-${i}`}
                          className="size-5 fill-amber-400 text-amber-400"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <p
                      className={cn(
                        "text-pretty leading-relaxed text-muted-foreground [overflow-wrap:anywhere]",
                        compact ? "text-[1.05rem] md:text-[1.12rem]" : "text-[1.1rem] md:text-[1.2rem]"
                      )}
                    >
                      “{t.quote}”
                    </p>
                    <footer className={cn("mt-6 space-y-0.5 font-medium text-primary", compact ? "text-[0.975rem]" : "text-[1rem]")}>
                      <cite className="not-italic">{t.name}</cite>
                      <p className="text-[0.95rem] font-normal text-muted-foreground">{t.role}</p>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="outline" className="-left-1 hidden lg:flex [&>svg]:size-7" aria-label="Previous testimonial" />
            <CarouselNext variant="outline" className="-right-1 hidden lg:flex [&>svg]:size-7" aria-label="Next testimonial" />
          </Carousel>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
