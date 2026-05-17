"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/constants/site-config";
import { FadeIn } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

/** Reusable stripe CTA blocks for lead-gen */
export function CtaBanner({
  title,
  description,
  primaryLabel = "Book a free damp check",
  secondaryLabel = "WhatsApp for an estimate",
  className,
}: CtaBannerProps) {
  return (
    <FadeIn className={cn("", className)} as="section">
      <div className="mx-auto max-w-5xl px-5 py-9 sm:px-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-14 lg:gap-20">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl tracking-tight text-slate-50 sm:text-[1.92rem] md:text-[2.2rem]">
              {title}
            </h2>
            <p className="max-w-xl text-pretty text-[1rem] leading-relaxed text-slate-200 sm:text-[1.06rem]">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row lg:justify-end">
            <Button
              size="lg"
              className="h-auto min-h-[3rem] whitespace-normal bg-cyan-400 px-6 text-[15px] font-semibold text-slate-950 hover:bg-cyan-300 md:max-w-none"
              asChild
            >
              <Link href="/contact">
                {primaryLabel}
                <ArrowRight className="ml-2 size-4 shrink-0 opacity-95" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto min-h-[3rem] border-white/80 bg-transparent text-[15px] font-semibold text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
                {secondaryLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
