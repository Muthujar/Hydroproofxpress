import type { Metadata } from "next";

import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Testimonials",
  path: "/testimonials",
  description:
    "What builders, facility teams, and homeowners say about HydroProof XPress inspection-led waterproofing.",
});

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-14 text-center md:py-16">
        <h1 className="font-heading text-3xl text-primary md:text-[2.5rem]">Testimonials</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Sample feedback styled for marketing—replace with verified client quotes when you collect them.
        </p>
      </section>
      <TestimonialsCarousel />
    </div>
  );
}
