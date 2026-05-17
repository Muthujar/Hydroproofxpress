import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

const quickLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy", href: "/privacy" },
];

function chunkIntoColumns<T>(items: readonly T[], columnCount: number): T[][] {
  if (items.length === 0) return [];
  const size = Math.ceil(items.length / columnCount);
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size) as T[]);
  }
  return out;
}

const serviceChunks = chunkIntoColumns(services, 3);

function LabeledBlock({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <div className="text-sm text-slate-200">{children}</div>
    </div>
  );
}

export function SiteFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border bg-slate-950 text-slate-200", className)}>
      <div className="mx-auto max-w-[120rem] min-w-0 px-4 pb-[calc(7.75rem+env(safe-area-inset-bottom,0px))] pt-14 sm:px-6 sm:pb-14 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Brand + contact */}
          <div className="space-y-8 sm:col-span-2 lg:col-span-4 lg:space-y-6">
            <div>
              <Link href="/" className="inline-block focus-visible:outline-none focus-visible:underline">
                <span className="font-heading text-2xl font-semibold tracking-tight text-white">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">{siteConfig.tagline}</p>
            </div>
            <div className="space-y-6">
              <LabeledBlock label="Phone number">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center gap-2 font-medium text-slate-100 transition-colors hover:text-amber-300"
                >
                  <Phone className="size-4 shrink-0 text-amber-400" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </LabeledBlock>
              <LabeledBlock label="E-mail">
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex flex-wrap items-center gap-2 break-all font-medium text-slate-100 transition-colors hover:text-amber-300"
                  >
                    <Mail className="size-4 shrink-0 text-amber-400" aria-hidden />
                    {siteConfig.email}
                  </a>
                  {siteConfig.secondaryEmail ? (
                    <a
                      href={`mailto:${siteConfig.secondaryEmail}`}
                      className="inline-flex flex-wrap items-center gap-2 break-all transition-colors hover:text-amber-300"
                    >
                      <Mail className="size-4 shrink-0 text-amber-400 opacity-75" aria-hidden />
                      <span className="text-slate-300">{siteConfig.secondaryEmail}</span>
                    </a>
                  ) : null}
                </div>
              </LabeledBlock>
              <LabeledBlock label="Address">
                <div className="inline-flex gap-3 text-slate-300">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-amber-400" aria-hidden />
                  <address className="not-italic leading-snug">
                    {siteConfig.address.street},<br />
                    {siteConfig.address.city} — {siteConfig.address.postalCode},{" "}
                    {siteConfig.address.region}, {siteConfig.address.country}.
                  </address>
                </div>
              </LabeledBlock>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <Link href="/contact" className="text-amber-300 hover:text-amber-200">
                Request inspection →
              </Link>
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="text-slate-400 hover:text-amber-300"
              >
                WhatsApp →
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="sm:col-span-1 lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick links</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-300 [overflow-wrap:anywhere] hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our services — repeated column pattern */}
          {serviceChunks.map((chunk, colIndex) => (
            <nav
              key={colIndex}
              aria-label={`Our services (${String(colIndex + 1)})`}
              className="sm:col-span-1 lg:col-span-2"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Our services</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {chunk.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-slate-300 [overflow-wrap:anywhere] hover:text-white focus-visible:outline-none focus-visible:underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                {colIndex === serviceChunks.length - 1 ? (
                  <li>
                    <Link
                      href="/services"
                      className="font-medium text-amber-300 hover:text-amber-200 focus-visible:outline-none focus-visible:underline"
                    >
                      View all services
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center text-xs text-slate-500 sm:text-left">
          <p className="[overflow-wrap:anywhere]">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
