import Link from "next/link";

import { faqs } from "@/constants/faq";

import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function FaqPreview() {
  const preview = faqs.slice(0, 3);

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <SectionHeader eyebrow="Common questions" title="Straight answers." compact />
        <FaqAccordion items={preview} />
        <FadeIn delay={0.05} className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" asChild className="px-10">
            <Link href="/faq">Browse all FAQs</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
