import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { services } from "@/constants/services";
import { cn } from "@/lib/utils";

import { footerQuickLinks } from "@/constants/nav";

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
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-900/85">{label}</p>
      <div className="text-sm text-slate-100">{children}</div>
    </div>
  );
}

export function SiteFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-[#3d6283]/40 bg-gradient-to-b from-[#2a4f72] via-[#234a6a] to-[#1c3d58] text-slate-100",
        className
      )}
    >
      <div className="mx-auto max-w-[120rem] min-w-0 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] pt-8 sm:px-6 sm:pb-8 lg:px-10 lg:pt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-4 lg:space-y-4">
            <div>
              <Link
                href="/"
                className="inline-flex transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400/50"
              >
                <BrandLogo size="footer" />
              </Link>
              <p className="mt-2 max-w-md text-sm leading-snug text-slate-200/85">{siteConfig.tagline}</p>
            </div>
            <div className="space-y-4">
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
                <div className="flex flex-col gap-2">
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
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900/85">Quick links</h2>
            <ul className="mt-3 flex flex-col gap-0.5 text-sm">
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex min-h-[44px] items-center text-slate-100/90 [overflow-wrap:anywhere] hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Our services — single list on mobile/tablet */}
          <nav aria-label="Our services" className="sm:col-span-1 lg:hidden">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900/85">Our services</h2>
            <ul className="mt-3 flex flex-col gap-0.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex min-h-[44px] items-center text-slate-100/90 [overflow-wrap:anywhere] hover:text-white focus-visible:outline-none focus-visible:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="flex min-h-[44px] items-center font-medium text-amber-300 hover:text-amber-200 focus-visible:outline-none focus-visible:underline"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Our services — 3 columns on desktop */}
          {serviceChunks.map((chunk, colIndex) => (
            <nav
              key={colIndex}
              aria-label={`Our services (${String(colIndex + 1)})`}
              className="hidden sm:col-span-1 lg:col-span-2 lg:block"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-900/85">Our services</h2>
              <ul className="mt-3 flex flex-col gap-0.5 text-sm">
                {chunk.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex min-h-[44px] items-center text-slate-100/90 [overflow-wrap:anywhere] hover:text-white focus-visible:outline-none focus-visible:underline"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                {colIndex === serviceChunks.length - 1 ? (
                  <li>
                    <Link
                      href="/services"
                      className="flex min-h-[44px] items-center font-medium text-amber-300 hover:text-amber-200 focus-visible:outline-none focus-visible:underline"
                    >
                      View all services
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 border-t border-[#4a7394]/35 pt-5 text-center text-xs text-slate-300/75 sm:text-left">
          <p className="[overflow-wrap:anywhere]">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
