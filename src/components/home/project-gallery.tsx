import Image from "next/image";

import { FadeIn } from "@/components/shared/fade-in";
import { featuredProjects } from "@/constants/gallery";

/** Project photo grid for `/gallery` — no extra section title (page hero covers it). */
export function ProjectGallery() {
  return (
    <section className="bg-background py-10 md:py-14" aria-label="Before and after project photos">
      <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((proj, idx) => (
            <FadeIn key={proj.id} delay={(idx % 3) * 0.05}>
              <figure className="space-y-3 rounded-2xl border border-border bg-card p-3 shadow-md shadow-black/[0.06]">
                <figcaption className="px-1 font-semibold text-primary">{proj.title}</figcaption>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <p className="text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Before
                    </p>
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={proj.beforeSrc}
                        alt=""
                        loading="lazy"
                        fill
                        sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-center text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      After
                    </p>
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                      <Image
                        src={proj.afterSrc}
                        alt=""
                        loading="lazy"
                        fill
                        sizes="(min-width: 1280px) 28vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
