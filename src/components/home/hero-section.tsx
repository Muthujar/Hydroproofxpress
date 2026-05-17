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
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=72"
        alt=""
        priority
        fill
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[50%_45%]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/96 via-[#0f2742]/82 to-[#041018]/90"
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
              Fix the leak for good—not{" "}
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                a quick paint job
              </span>
              .
            </h1>
            <p className="max-w-md text-[1.0625rem] leading-[1.55] text-slate-100/95 [overflow-wrap:anywhere] sm:max-w-lg sm:text-[1.125rem]">
              We find where the water comes in, explain the plan in plain words, then seal and test so it stays dry.
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
              variant="outline"
              className="w-full touch-manipulation border-2 border-white/90 bg-white/5 text-[1.04rem] text-white backdrop-blur-[2px] hover:bg-white/15 hover:text-white sm:w-auto"
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
