import type { Metadata } from "next";

import { faqs } from "@/constants/faq";

import { FaqAccordion } from "@/components/shared/faq-accordion";
import { buildPageMeta } from "@/lib/seo";
import { FadeIn } from "@/components/shared/fade-in";

export const metadata: Metadata = buildPageMeta({
  title: "FAQ",
  path: "/faq",
  description:
    "Answers about visit timing, warranties, bathroom tiles, materials, drying time, and payments for HydroProof XPress clients.",
});

export default function FaqPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-20 text-center md:py-24">
        <h1 className="font-heading text-3xl text-primary sm:text-4xl md:text-[2.75rem]">Straight answers</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Still unsure? WhatsApp site photos—our team explains choices in plain words before you pay a start deposit.
        </p>
      </section>
      <FadeIn className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <FaqAccordion items={faqs} />
      </FadeIn>
    </div>
  );
}
