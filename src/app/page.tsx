import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ContactSectionHome } from "@/components/home/contact-section";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Waterproofing & leak repair",
  path: "/",
  description:
    "Dry terraces, bathrooms, roofs, tanks, walls, and basements—with inspection-led scopes and workmanship warranty where agreed.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseSection />
      <ProcessTimeline compact />
      <ContactSectionHome />
    </>
  );
}
