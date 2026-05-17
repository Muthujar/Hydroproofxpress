import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { FaqPreview } from "@/components/home/faq-preview";
import { ContactSectionHome } from "@/components/home/contact-section";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Waterproofing & leak repair",
  path: "/",
  description:
    "Dry terraces, bathrooms, roofs, tanks, cracked walls, and basements—in Hyderabad—with inspections and workmanship warranty where agreed.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ServicesPreview home />
      <WhyChooseSection />
      <ProcessTimeline compact />
      <TestimonialsCarousel variant="compact" />
      <FaqPreview />
      <ContactSectionHome />
    </>
  );
}
