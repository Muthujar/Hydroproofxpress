import type { Metadata } from "next";

import { ProjectGallery } from "@/components/home/project-gallery";
import { buildPageMeta } from "@/lib/seo";

export const metadata: Metadata = buildPageMeta({
  title: "Gallery",
  path: "/gallery",
  description:
    "Site photos from terrace, bathroom, crack injection, and exterior waterproofing work across Bengaluru South.",
});

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-muted/45 px-4 py-14 text-center md:py-16">
        <h1 className="font-heading text-3xl text-primary md:text-[2.5rem]">Gallery</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Real project photos—terrace membranes, bathroom sealing, crack injection, and exterior coatings.
        </p>
      </section>
      <ProjectGallery />
    </div>
  );
}
