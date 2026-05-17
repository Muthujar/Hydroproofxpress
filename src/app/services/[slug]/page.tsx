import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getServiceBySlug, SERVICE_ICONS, services } from "@/constants/services";
import { buildPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/layout/cta-banner";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return buildPageMeta({
    title: svc.title,
    path: `/services/${slug}`,
    description: svc.shortDesc,
  });
}

export default async function ServiceDetailPage(props: Props) {
  const { slug } = await props.params;
  const svc = getServiceBySlug(slug);

  if (!svc) notFound();

  const Ico = SERVICE_ICONS[svc.iconKey];

  return (
    <article className="bg-background">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={svc.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/94 to-transparent" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-[120rem] px-4 py-24 sm:px-6 lg:flex lg:items-center lg:gap-10 lg:px-10 lg:py-36">
          <span className="mb-8 flex size-16 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-xl lg:mb-0">
            <Ico className="size-9" aria-hidden />
          </span>
          <div className="max-w-4xl space-y-4">
            <p className="text-xs uppercase tracking-[0.24em] text-primary/85">Service overview</p>
            <h1 className="font-heading text-4xl text-primary md:text-[2.82rem] md:leading-snug">{svc.title}</h1>
            <p className="text-lg text-muted-foreground">{svc.shortDesc}</p>
            <Button size="lg" asChild className="mt-4 shadow-md">
              <Link href={`/contact?service=${encodeURIComponent(svc.slug)}`}>Request inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[56rem] space-y-12 px-4 py-20 text-[17px] leading-relaxed text-muted-foreground md:py-28">
        <p>{svc.description}</p>
        <div>
          <h2 className="font-heading mb-5 text-xl text-primary">What you get</h2>
          <ul className="space-y-5">
            {svc.highlights.map((h) => (
              <li key={h} className="flex gap-5">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-[120rem] px-4 lg:mb-28 lg:px-10">
        <CtaBanner
          title="Compare this service with your drawings"
          description="Send sketches or consultant notes—we confirm the waterproofing approach fits before quoting crew dates."
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#062c4a] via-[#0b3d66] to-[#062c4a] shadow-2xl shadow-cyan-950/25 md:rounded-[2.5rem]"
        />
      </section>
    </article>
  );
}
