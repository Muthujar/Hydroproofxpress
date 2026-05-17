import Link from "next/link";

import { Mail, MapPin, Phone } from "lucide-react";

import { mainNavLinks } from "@/constants/nav";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/gallery" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function SiteFooter({ className }: { className?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("border-t border-border bg-slate-950 text-slate-200", className)}>
      <div className="mx-auto max-w-[120rem] min-w-0 px-4 pb-[calc(7.75rem+env(safe-area-inset-bottom,0px))] pt-14 sm:px-6 sm:pb-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="font-heading text-2xl font-semibold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-full text-pretty text-sm leading-relaxed text-slate-400 [overflow-wrap:anywhere]">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-cyan-300"
              >
                <Phone className="size-4 text-cyan-400" aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-cyan-300"
              >
                <Mail className="size-4 text-cyan-400" aria-hidden />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400" aria-hidden />
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.region} {siteConfig.address.postalCode}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="sm" className="shadow shadow-cyan-900/25" asChild>
                <Link href="/contact">Book inspection</Link>
              </Button>
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-100 hover:bg-slate-800" asChild>
                <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {col.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
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
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="[overflow-wrap:anywhere]">
            &copy; {year} {siteConfig.name}. All rights reserved. Branding illustrative — customise for your entity.
          </p>
          <nav aria-label="Footer quick links">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {mainNavLinks.slice(0, 4).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-slate-300">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
