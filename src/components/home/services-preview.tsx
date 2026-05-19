import Image from "next/image";
import Link from "next/link";

import { ArrowRight, LayoutGrid, Rocket } from "lucide-react";

import { FadeIn } from "@/components/shared/fade-in";
import { services } from "@/constants/services";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Service tiles with local photos — dark band, responsive grid. */
export function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 border-t border-white/10 bg-slate-950 py-10 md:py-12 lg:py-14"
    >
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300 shadow-inner shadow-black/20">
            <Rocket className="size-3 text-amber-400" aria-hidden />
            Discover what we offer
          </div>
          <h2 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-white [text-wrap:balance] sm:text-2xl lg:text-[1.85rem]">
            Waterproofing service by{" "}
            <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-[0.98rem]">
            Terraces, bathrooms, roofs, tanks, basements, and walls—tap a service for the full scope and
            checklist.
          </p>
        </header>

        <ul className="mt-8 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, i) => (
            <li key={service.slug} className="flex min-w-0">
              <FadeIn delay={(i % 3) * 0.04} className="flex min-w-0 flex-1">
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/85 transition-all duration-300",
                    "hover:border-amber-400/35 hover:shadow-[0_24px_56px_-28px_rgba(0,0,0,0.9)]"
                  )}
                >
                  <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden bg-slate-800">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent"
                      aria-hidden
                    />
                    <span
                      className="absolute left-2.5 top-2.5 flex size-8 items-center justify-center rounded-full bg-white/95 text-[11px] font-bold tabular-nums text-slate-950 shadow-md"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-heading text-[0.98rem] font-semibold leading-snug text-white [overflow-wrap:anywhere] sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-slate-400 [overflow-wrap:anywhere]">
                      {service.shortDesc}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[13px] font-semibold text-amber-400/90">
                      Details
                      <ArrowRight
                        className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
          <li className="flex min-w-0 sm:col-span-2 lg:col-span-1">
            <FadeIn delay={0.12} className="flex min-w-0 flex-1">
              <Link
                href="/services"
                className={cn(
                  "group flex min-h-full min-w-0 flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-4 sm:p-5 transition-all duration-300",
                  "hover:border-amber-400/50 hover:shadow-[0_24px_56px_-28px_rgba(251,191,36,0.15)]"
                )}
              >
                <div>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-400/25">
                    <LayoutGrid className="size-4" aria-hidden />
                  </span>
                  <h3 className="mt-3 font-heading text-[0.98rem] font-semibold leading-snug text-white [overflow-wrap:anywhere] sm:text-base">
                    View all services &amp; scopes
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-slate-400 [overflow-wrap:anywhere]">
                    Compare every service with photos, checklists, and enquiry options.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-amber-400">
                  Full services menu
                  <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </FadeIn>
          </li>
        </ul>

        <div className="mt-8 flex justify-center">
          <Button
            size="default"
            asChild
            className="rounded-full border-0 bg-amber-500 px-8 font-semibold text-slate-950 shadow-lg shadow-amber-950/25 hover:bg-amber-400"
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
