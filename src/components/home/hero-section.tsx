import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Droplets } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { FadeIn } from "@/components/shared/fade-in";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(74vh,800px)] overflow-hidden bg-primary">
      <Image
        src="https://images.unsplash.com/photo-1573497019940-1c28c88b33f9?auto=format&fit=crop&w=2400&q=70"
        alt=""
        priority
        fill
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[50%_40%]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#052132]/95 via-[#061f35]/75 to-[#041222]/82"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-w-0 max-w-[120rem] flex-col px-4 pb-14 pt-24 sm:px-6 lg:px-10 lg:pb-16 lg:pt-28">
        <FadeIn delay={0.05}>
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg border border-cyan-500/55 bg-black/38 px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-sm">
            <Droplets className="size-4 text-cyan-300 sm:size-[1.125rem]" aria-hidden />
            Homes • Offices • Quality-checked work
          </div>
          <div className="mt-9 min-w-0 max-w-4xl space-y-6">
            <h1 className="font-heading text-[2.125rem] font-semibold leading-[1.08] tracking-tight text-balance text-white [overflow-wrap:anywhere] sm:text-5xl sm:leading-[1.08] lg:text-[3.45rem] lg:leading-[1.06]">
              Fix leaks at the source—not{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                with quick paint fixes
              </span>
              .
            </h1>
            <p className="max-w-2xl min-w-0 text-pretty text-[1.1325rem] leading-relaxed text-slate-100 [overflow-wrap:anywhere] sm:text-xl md:text-[1.22rem]">
              {siteConfig.tagline} Site visits, proper slopes, and waterproofing choices explained in writing.
            </p>
          </div>
          <div className="mt-9 flex w-full max-w-xl min-w-0 flex-col gap-3.5 sm:flex-row sm:items-stretch sm:gap-4">
            <Button
              size="lg"
              className="w-full touch-manipulation border-0 bg-cyan-400 text-[1.0625rem] text-slate-950 shadow-[0_5px_0_0_rgba(15,118,148,0.55)] hover:bg-cyan-300 sm:w-auto"
              asChild
            >
              <Link href="/contact">
                Book a free damp check
                <ArrowRight className="ml-2 size-5 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full touch-manipulation border-2 border-white/90 bg-transparent text-[1.0625rem] text-white hover:bg-white/12 hover:text-white sm:w-auto"
              asChild
            >
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
                WhatsApp us
              </Link>
            </Button>
          </div>
          <dl className="mt-12 grid min-w-0 gap-7 sm:grid-cols-3">
            {[
              { k: "Response", v: "Usually within 24 hours" },
              { k: "How we work", v: "Layered waterproofing + checks at each stage" },
              { k: "Areas", v: "Teams across Hyderabad" },
            ].map((row) => (
              <div key={row.k}>
                <dt className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-cyan-200/98">
                  {row.k}
                </dt>
                <dd className="mt-1.5 text-[1.035rem] text-white/93">{row.v}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
