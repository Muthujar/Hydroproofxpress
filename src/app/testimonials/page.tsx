import type { Metadata } from "next";

import { testimonials } from "@/constants/testimonials";

import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Testimonials",
  path: "/testimonials",
  description:
    "Homeowners, facility teams, and partners on careful leak tracing, tidy finishes, and monsoon-ready results from HydroProof XPress.",
});

export default function TestimonialsPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-20 text-center md:py-24">
        <h1 className="font-heading text-4xl text-primary md:text-[2.75rem]">Trust earned after heavy rain</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Quotes tie back to dated photos, drying notes, and formal sign-offs—not anonymous praise.
          ({testimonials.length} featured stories on this page.)
        </p>
      </section>
      <TestimonialsCarousel />
    </div>
  );
}
