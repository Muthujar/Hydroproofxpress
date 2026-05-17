import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { ContactEnquiryForm } from "@/components/forms/contact-enquiry-form";
import { FadeIn } from "@/components/shared/fade-in";
import { buildPageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/constants/site-config";

export const metadata: Metadata = buildPageMeta({
  title: "Contact",
  path: "/contact",
  description:
    "Call or WhatsApp HydroProof XPress for bookings, quotes, society coordination, photo uploads, and urgent leaks across Hyderabad.",
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/50 py-20 md:py-24">
        <div className="mx-auto max-w-[840px] space-y-6 px-4 text-center lg:max-w-[60rem]">
          <FadeIn>
            <h1 className="font-heading text-4xl tracking-tight text-primary sm:text-5xl md:text-[2.85rem]">
              Inspectors, quotes team, and site leads—one inbox.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              Prefer a call? Dial direct. Prefer chat? WhatsApp damp photos—we suggest suitable waterproofing before teams roll in.
            </p>
          </FadeIn>
        </div>
      </section>
      <div className="mx-auto grid max-w-[1100px] gap-14 px-4 py-20 md:grid-cols-2 lg:gap-20 lg:px-8">
        <FadeIn className="space-y-8">
          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm hover:border-primary/40"
            >
              <Phone className="size-7 shrink-0 text-primary" aria-hidden />
              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Call desk</p>
                <p className="font-heading text-xl text-primary">{siteConfig.phoneDisplay}</p>
              </div>
            </a>
            <Button variant="outline" className="w-full md:w-max" asChild>
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
                WhatsApp us
              </Link>
            </Button>
          </div>
          <address className="not-italic">
            <p className="mb-4 flex gap-4 text-muted-foreground">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.region}{" "}
                {siteConfig.address.postalCode}
                <br />
                {siteConfig.address.country}
              </span>
            </p>
            <div className="aspect-[21/13] overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Service hub map"
                src={siteConfig.address.mapEmbedUrl}
                loading="lazy"
                className="min-h-[220px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </address>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
            <h2 className="font-heading mb-8 text-xl text-primary">Project enquiry</h2>
            <ContactEnquiryForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
