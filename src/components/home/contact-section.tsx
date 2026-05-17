import Link from "next/link";
import { MapPin } from "lucide-react";

import { ContactEnquiryForm } from "@/components/forms/contact-enquiry-form";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/constants/site-config";

export function ContactSectionHome() {
  return (
    <section id="enquiry" className="scroll-mt-28 bg-muted/40 py-12 md:py-16">
      <div className="mx-auto grid min-w-0 max-w-[120rem] gap-10 px-4 sm:grid-cols-2 sm:gap-14 sm:px-6 lg:grid-cols-[1fr_1.08fr] lg:gap-x-16 lg:px-10">
        <FadeIn className="min-w-0 space-y-7">
          <SectionHeader
            eyebrow="Get in touch"
            title="Tell us what you’re seeing—we’ll reply with next steps."
            compact
          />
          <div className="space-y-3 text-muted-foreground leading-relaxed text-[1.04rem]">
            <div className="flex min-w-0 gap-3 text-foreground">
              <MapPin className="size-7 shrink-0 text-primary" aria-hidden />
              <p className="[overflow-wrap:anywhere]">
                <span className="font-semibold text-primary">Studio:</span> {siteConfig.address.street},{" "}
                {siteConfig.address.city}
              </p>
            </div>
            <p>WhatsApp photos of damp patches? Mention society name or tower so we send the right team.</p>
          </div>
          <Link href="/contact" className="text-[1rem] font-semibold text-primary underline-offset-4 hover:underline">
            Full contact page →
          </Link>
          <div className="aspect-[21/12] min-h-[200px] w-full overflow-hidden rounded-xl border-2 border-border shadow-lg">
            <iframe
              title="HydroProof XPress hub map"
              src={siteConfig.address.mapEmbedUrl}
              loading="lazy"
              className="h-full min-h-[200px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.06} className="min-w-0">
          <div className="rounded-2xl border-2 border-border bg-card p-6 shadow-xl shadow-black/[0.05] sm:p-7 md:p-9">
            <p className="mb-6 text-[1.04rem] leading-relaxed text-muted-foreground md:text-[1.06rem]">
              Rough timelines help—even on-and-off leaks need tracing before new coats go up.
            </p>
            <ContactEnquiryForm />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
