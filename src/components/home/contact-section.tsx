import { ContactEnquiryForm } from "@/components/forms/contact-enquiry-form";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/constants/site-config";

export function ContactSectionHome() {
  return (
    <section
      id="enquiry"
      className="relative scroll-mt-28 max-sm:scroll-mt-36 overflow-hidden border-t border-border/80 bg-[#eef4fb] py-10 md:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-[#eef4fb] to-[#e4edf7]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(56,189,248,0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          eyebrow="Get in touch"
          title="Tell us what you're seeing—we'll reply with next steps."
          description="Share your building details and what you're noticing—we'll route the right crew across Bengaluru South."
          compact
        />

        <div className="mt-8 grid min-w-0 gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-md shadow-slate-900/[0.04]">
              <iframe
                title="HydroProof XPress service area map"
                src={siteConfig.address.mapEmbedUrl}
                loading="lazy"
                className="aspect-[16/9] min-h-[220px] w-full border-0 lg:min-h-[280px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.05} className="min-w-0">
            <div className="rounded-2xl border border-border/80 bg-white p-5 shadow-lg shadow-slate-900/[0.06] sm:p-7">
              <h3 className="font-heading text-lg font-semibold text-primary">Send an enquiry</h3>
              <p className="mt-1.5 mb-6 text-sm leading-relaxed text-muted-foreground">
                Phone, building or area, and what you&apos;re seeing—we&apos;ll match it to the right crew.
              </p>
              <ContactEnquiryForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
