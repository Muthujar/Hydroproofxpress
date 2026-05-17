import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { ContactEnquiryForm } from "@/components/forms/contact-enquiry-form";
import { FadeIn } from "@/components/shared/fade-in";
import { siteConfig, getWhatsAppUrl } from "@/constants/site-config";
import { buildPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildPageMeta({
  title: "Contact",
  path: "/contact",
  description:
    "Book a damp check or ask about terrace, bathroom, roof, and basement waterproofing—call, WhatsApp, or use the form.",
});

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-14 text-center md:py-16">
        <h1 className="font-heading text-3xl text-primary md:text-[2.5rem]">Contact</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Call, WhatsApp site photos, or send the form—we’ll route the right crew.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
          </Button>
          <Button variant="outline" asChild>
            <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
              WhatsApp
            </Link>
          </Button>
        </div>
      </section>
      <div className="mx-auto grid min-w-0 max-w-[120rem] gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-x-14 lg:px-10">
        <FadeIn className="min-w-0 space-y-6">
          <div className="flex min-w-0 gap-3 text-foreground">
            <MapPin className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden />
            <p className="text-[1.04rem] leading-relaxed [overflow-wrap:anywhere]">
              <span className="font-semibold text-primary">{siteConfig.name}</span>
              <br />
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
          </div>
          <p className="text-muted-foreground">
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <div className="aspect-[21/12] min-h-[200px] w-full overflow-hidden rounded-xl border border-border shadow-md">
            <iframe
              title="Service area map"
              src={siteConfig.address.mapEmbedUrl}
              loading="lazy"
              className="h-full min-h-[200px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.05} className="min-w-0">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
            <ContactEnquiryForm />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
