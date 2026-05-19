import Image from "next/image";

import { FadeIn } from "@/components/shared/fade-in";
import { galleryPhotos } from "@/constants/gallery";

/** Project photo grid for `/gallery`. */
export function ProjectGallery() {
  return (
    <section className="bg-background py-10 md:py-14" aria-label="Project photo gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
          {galleryPhotos.map((photo, idx) => (
            <FadeIn key={photo.id} delay={(idx % 4) * 0.04}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-black/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    loading={idx < 4 ? "eager" : "lazy"}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="border-t border-border/60 px-4 py-3.5 text-sm font-semibold leading-snug text-primary [overflow-wrap:anywhere]">
                  {photo.title}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
