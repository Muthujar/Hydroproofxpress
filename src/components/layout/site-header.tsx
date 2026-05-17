"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerNavLinks } from "@/constants/nav";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({ link }: { link: { href: string; title: string } }) {
  const pathname = usePathname();
  const active = isNavActive(pathname, link.href);

  return (
    <li>
      <Link
        href={link.href}
        className={cn(
          "rounded-full px-3.5 py-2 text-sm font-medium tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40",
          active
            ? "bg-primary/14 text-primary shadow-sm shadow-primary/10"
            : "text-foreground/78 hover:bg-background hover:text-foreground"
        )}
        aria-current={active ? "page" : undefined}
      >
        {link.title}
      </Link>
    </li>
  );
}

function MobileNavLink({
  link,
  onNavigate,
}: {
  link: { href: string; title: string };
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const active = isNavActive(pathname, link.href);

  return (
    <SheetClose asChild>
      <Link
        href={link.href}
        className={cn(
          "flex min-h-[48px] touch-manipulation items-center rounded-xl px-3 py-3 transition-colors hover:bg-muted/80",
          active ? "bg-primary/10 font-semibold text-primary" : "text-foreground"
        )}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
      >
        {link.title}
      </Link>
    </SheetClose>
  );
}

export function SiteHeader({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn("sticky top-0 z-50 border-b border-border/80", className)}
    >
      <div className="hidden border-b border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-[13px] text-slate-400 sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="font-medium tracking-tight text-slate-500">
            {siteConfig.publicDomain}
          </span>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-1">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:underline"
            >
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="font-semibold text-slate-200 transition-colors hover:text-amber-300 focus-visible:outline-none focus-visible:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-border/60 bg-background/95 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] backdrop-blur-md supports-[backdrop-filter]:bg-background/88">
        <div className="mx-auto flex h-16 max-w-7xl min-w-0 items-center justify-between gap-2 px-3 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group min-w-0 shrink rounded-lg px-1 py-1.5 pe-2 transition-colors [overflow-wrap:anywhere] hover:bg-muted/70 lg:max-w-[min(100%,26rem)]"
        >
          <p className="font-heading leading-snug tracking-tight">
            <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
              <span className="font-semibold text-primary group-hover:text-primary/85 sm:text-lg lg:text-xl">
                {siteConfig.name}
              </span>
              <span className="hidden shrink-0 text-muted-foreground sm:inline" aria-hidden>
                —
              </span>
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-muted-foreground sm:text-[0.78rem] sm:normal-case sm:tracking-normal lg:text-[0.82rem]">
                {siteConfig.headerSubtitle}
              </span>
            </span>
          </p>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <div className="rounded-full border border-border/55 bg-muted/50 p-1 shadow-inner shadow-black/[0.03]">
            <ul className="flex items-center gap-0.5 text-[15px]" role="list">
            {headerNavLinks.map((link) => (
              <DesktopNavLink key={link.href} link={link} />
            ))}
          </ul>
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            className="hidden md:inline-flex rounded-full border-0 bg-amber-500 px-5 font-semibold text-slate-950 shadow-md shadow-amber-900/15 transition-[transform,box-shadow] hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-900/20"
            size="sm"
            asChild
          >
            <Link href="/contact">Enquiry Now</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="shrink-0 touch-manipulation lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex h-[100dvh] max-h-[100dvh] w-[min(22rem,calc(100vw-16px))] min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto border-l border-border/80 bg-gradient-to-b from-background to-muted/25 p-6 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-[calc(0.875rem+env(safe-area-inset-top,0px))]"
            >
              <SheetTitle className="pr-14 text-left text-lg leading-snug font-heading break-words">
                Menu
              </SheetTitle>
              <SheetDescription className="text-left text-sm text-muted-foreground">
                Waterproofing and moisture protection
              </SheetDescription>
              <div className="mt-8 flex flex-col gap-2 text-lg font-medium">
                {headerNavLinks.map((link) => (
                  <MobileNavLink key={link.href} link={link} onNavigate={() => setOpen(false)} />
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] touch-manipulation items-center justify-center rounded-xl bg-amber-500 px-5 py-3.5 text-center text-base font-semibold text-slate-950 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  >
                    Enquiry Now
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] touch-manipulation items-center justify-center rounded-xl bg-emerald-500 px-5 py-3.5 text-center text-base font-semibold text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  >
                    WhatsApp
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
