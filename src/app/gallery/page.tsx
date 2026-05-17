import type { Metadata } from "next";
import Image from "next/image";

import { featuredProjects } from "@/constants/gallery";
import { SectionHeader } from "@/components/layout/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Project gallery",
  path: "/gallery",
  description:
    "Before and after photos from terrace fixes, parking decks, and bathrooms—sample shots matching HydroProof XPress photo standards.",
});

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 py-20 md:py-24">
        <div className="mx-auto max-w-[960px] space-y-5 px-4 text-center">
          <h1 className="font-heading text-4xl text-primary md:text-[2.75rem]">Photos that tell the story</h1>
          <p className="text-lg text-muted-foreground">
            Each shot is logged with batch numbers, humidity readings, and technician sign-off inside our project tool.
            Swap these stock images for your own once site clearance allows.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[120rem] gap-12 px-4 py-20 sm:px-6 lg:flex lg:items-start lg:gap-16 lg:px-10 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:max-w-sm lg:shrink-0">
          <SectionHeader
            eyebrow="Before / after"
            title="Pictures you can share in meetings."
            description="Close-ups cover expansion joints, drain fixes, and overlap strips—not random wide shots."
          />
        </div>
        <div className="mt-12 grid flex-1 gap-12 lg:mt-0">
          {featuredProjects.map((proj, idx) => (
            <FadeIn key={proj.id} delay={(idx % 2) * 0.05}>
              <figure className="space-y-4 rounded-3xl border border-border bg-card p-4 shadow-xl">
                <figcaption className="px-3 font-semibold text-primary">{proj.title}</figcaption>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Before repair
                    </p>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
                      <Image src={proj.beforeSrc} alt="" loading="lazy" fill className="object-cover" sizes="540px" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      After drying + final checks
                    </p>
                    <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted">
                      <Image src={proj.afterSrc} alt="" loading="lazy" fill className="object-cover" sizes="540px" />
                    </div>
                  </div>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
