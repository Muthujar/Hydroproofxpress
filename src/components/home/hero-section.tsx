import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Droplets } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { FadeIn } from "@/components/shared/fade-in";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(62vh,640px)] overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
        aria-hidden
      />
      <Image
        src="/hero.png"
        alt=""
        priority
        fill
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[28%_center]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0f2742]/72 to-[#041018]/35"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/88 via-transparent to-[#041018]/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-6xl flex-col items-start px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
        <FadeIn delay={0.05} className="w-full">
          <div className="inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-lg border border-amber-400/50 bg-black/38 px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-100/95 shadow-[inset_0_1px_0_0_rgba(251,191,36,0.12)] backdrop-blur-sm sm:px-3.5 sm:text-sm">
            <Droplets className="size-4 shrink-0 text-amber-300 sm:size-[1.125rem]" aria-hidden />
            <span className="text-white/90">{siteConfig.publicDomain}</span>
            <span className="text-white/35" aria-hidden>
              ·
            </span>
            <span className="text-white/88">Leaks fixed right</span>
          </div>
          <div className="mt-8 w-full min-w-0 max-w-xl space-y-4 text-left sm:mt-9 sm:max-w-2xl sm:space-y-5">
            <h1 className="font-heading text-[2rem] font-semibold leading-[1.12] tracking-tight text-balance text-white [overflow-wrap:anywhere] sm:text-[2.5rem] sm:leading-[1.1] lg:text-[3rem] lg:leading-[1.08]">
              Find where it leaks.{" "}
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Fix it for good.
              </span>
            </h1>
            <p className="max-w-md text-[1.0625rem] leading-[1.55] text-slate-100/95 [overflow-wrap:anywhere] sm:max-w-xl sm:text-[1.125rem]">
              Inspection-led waterproofing for terraces, bathrooms, roofs, tanks, and basements—we trace the
              source, explain the scope clearly, apply the right system, and test before handover.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:mt-9 sm:max-w-lg sm:flex-row sm:items-center sm:gap-4">
            <Button
              size="lg"
              className="w-full touch-manipulation border-0 bg-amber-400 text-[1.04rem] font-semibold text-slate-950 shadow-[0_4px_0_0_rgba(180,83,9,0.5)] hover:bg-amber-300 sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Book a free check
                <ArrowRight className="ml-2 size-5 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              className="w-full touch-manipulation border-0 bg-emerald-500 text-[1.04rem] font-semibold text-white shadow-[0_4px_0_0_rgba(4,120,87,0.55)] hover:bg-emerald-400 sm:w-auto"
              asChild
            >
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
                WhatsApp
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
