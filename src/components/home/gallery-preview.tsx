import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/constants/gallery";

export function GalleryPreview() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-10">
        <SectionHeader
          eyebrow="Field evidence"
          title="Measured before-and-after deltas your board can trust."
          description="Each capture is labelled with curing stage, QA owner, and sign-off timestamps — illustrative gallery until your project photography populates automatically."
        />
        <div className="grid gap-10 xl:grid-cols-3">
          {featuredProjects.map((proj, idx) => (
            <FadeIn key={proj.id} delay={(idx % 3) * 0.06}>
              <figure className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-lg shadow-black/10">
                <figcaption className="px-2 font-semibold text-primary">{proj.title}</figcaption>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Before
                    </p>
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                      <Image src={proj.beforeSrc} alt="" loading="lazy" fill sizes="320px" className="object-cover" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      After
                    </p>
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
                      <Image src={proj.afterSrc} alt="" loading="lazy" fill sizes="320px" className="object-cover" />
                    </div>
                  </div>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12 flex justify-center" delay={0.12}>
          <Button size="lg" variant="secondary" className="px-10" asChild>
            <Link href="/gallery">Explore full archive</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
