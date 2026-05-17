import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { buildPageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = buildPageMeta({
  title: "About us",
  path: "/about",
  description:
    "HydroProof XPress blends careful damp checks with practical site work across Hyderabad homes, shops, towers, and light industrial buildings.",
});

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl space-y-6 px-4 text-center sm:px-6 lg:max-w-[56rem]">
          <FadeIn className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Waterproofing with care
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-heading text-4xl tracking-tight text-primary sm:text-5xl md:text-[3.05rem]">
              Helping you stay calm when the first damp patch shows up.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {siteConfig.name} grew out of repair crews tired of redoing bad waterproofing. Today we bring inspection, written specs,
              photo logs, and simple handover notes—so societies and facility teams worry less each monsoon.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[920px] space-y-10 px-4 py-20 text-[17px] leading-relaxed text-muted-foreground md:py-28">
        <FadeIn className="space-y-6">
          <h2 className="font-heading text-2xl text-primary md:text-[1.8rem]">
            Clear damp readings—not guesswork
          </h2>
          <p>
            Every job starts with agreed readings and plain explanations—not rushed patching. Inspectors list risks,
            drying rules, scaffolding needs, resident messaging, and surface prep the maker requires.
          </p>
          <p>
            We work closely with trusted suppliers and keep fast-moving stock for polyurethane liquids, stretchy sheets,
            and cement-based toppings so tower schedules aren’t stuck waiting on materials.
          </p>
          <blockquote className="rounded-3xl border border-primary/22 bg-muted/60 p-10 text-xl font-medium text-primary italic">
            &ldquo;Honest paperwork outlasts every leak.&rdquo;
          </blockquote>
          <Button size="lg" asChild className="mt-2">
            <Link href="/contact">Talk to our estimates team</Link>
          </Button>
        </FadeIn>
      </section>
    </div>
  );
}
