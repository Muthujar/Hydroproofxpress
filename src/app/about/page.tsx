import type { Metadata } from "next";
import Link from "next/link";

import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site-config";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "About us",
  path: "/about",
  description:
    "HydroProof XPress provides inspection-led waterproofing for homes and commercial buildings—with clear scopes and workmanship you can track.",
});

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="flex justify-center">
            <BrandLogo size="page" />
          </div>
          <h1 className="mt-6 font-heading text-3xl text-primary md:text-[2.5rem]">About {siteConfig.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We focus on tracing leaks properly—layered systems, drying windows that match real-world weather, and
            clear handovers. No mystery products: you know what goes on your slab or wall and why.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Request a visit</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">Our services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
