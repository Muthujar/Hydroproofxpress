import Link from "next/link";

import { ArrowRight, Rocket } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { services } from "@/constants/services";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Numbered text-only service tiles — dark band, 4-column grid on large screens (no photos). */
export function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 border-t border-white/10 bg-slate-950 py-16 md:py-20 lg:py-24"
    >
      {/* Reference-style: soft vertical waves / lines on the left */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(28%,220px)] opacity-[0.11]"
        aria-hidden
      >
        <svg
          className="h-full w-full text-white"
          viewBox="0 0 120 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M12 0 C 52 160 -28 320 12 480 C 52 640 -28 800 12 800"
            stroke="currentColor"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M38 0 C -8 200 78 400 38 600 C 2 720 58 800 38 800"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.65"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M62 0 C 98 180 26 360 62 520 C 102 700 34 800 62 800"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.45"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_-10%,rgba(251,191,36,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 shadow-inner shadow-black/20">
            <Rocket className="size-3.5 text-amber-400" aria-hidden />
            Discover what we offer
          </div>
          <h2 className="mt-6 font-heading text-[1.35rem] font-bold uppercase leading-tight tracking-tight text-white [text-wrap:balance] sm:text-2xl md:text-3xl lg:text-[2.15rem]">
            Waterproofing service by{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-slate-400 md:text-[1.06rem]">
            Inspection-led scopes across slabs, wet rooms, roofs, tanks, and walls—tap a number for the full
            checklist.
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {services.map((service, i) => (
            <li key={service.slug} className="min-w-0">
              <FadeIn delay={(i % 4) * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex h-full min-h-[148px] flex-col rounded-2xl border border-white/[0.08] bg-slate-900/85 p-6 transition-all duration-300",
                    "hover:border-amber-400/35 hover:bg-slate-900 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85)]"
                  )}
                >
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold tabular-nums text-slate-950 shadow-sm"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <h3 className="mt-5 text-left font-heading text-base font-semibold leading-snug text-white [text-wrap:balance] sm:text-[1.05rem]">
                    {service.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-amber-400/90">
                    Details
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </FadeIn>
            </li>
          ))}
          <li className="min-w-0">
            <FadeIn delay={0.12}>
              <Link
                href="/services"
                className={cn(
                  "group flex h-full min-h-[148px] flex-col rounded-2xl border border-amber-400/25 bg-slate-900/90 p-6 transition-all duration-300",
                  "hover:border-amber-400/50 hover:shadow-[0_20px_50px_-28px_rgba(251,191,36,0.12)]"
                )}
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold tabular-nums text-slate-950 shadow-sm"
                  aria-hidden
                >
                  08.
                </span>
                <h3 className="mt-5 text-left font-heading text-base font-semibold leading-snug text-white [text-wrap:balance] sm:text-[1.05rem]">
                  Every scope we cover—plus custom combinations
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-amber-400">
                  Full list
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </FadeIn>
          </li>
        </ul>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            asChild
            className="rounded-full border-0 bg-amber-500 px-10 font-semibold text-slate-950 shadow-lg shadow-amber-950/25 hover:bg-amber-400"
          >
            <Link href="/contact">
              Book a free check
              <ArrowRight className="ml-2 size-5" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
