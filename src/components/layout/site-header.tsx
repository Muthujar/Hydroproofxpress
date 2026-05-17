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
import { mainNavLinks } from "@/constants/nav";
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
          "relative transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline",
          active ? "text-primary" : "text-foreground/80"
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
          "flex min-h-[48px] touch-manipulation items-center border-b border-border py-3",
          active ? "font-semibold text-primary" : "text-foreground"
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
      className={cn(
        "sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-[120rem] min-w-0 items-center justify-between gap-2 px-3 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="min-w-0 max-w-[min(100%,calc(100vw-7.75rem))] shrink sm:max-w-md lg:max-w-xl"
        >
          <span className="font-heading line-clamp-2 text-[0.9375rem] font-semibold leading-snug tracking-tight text-primary [overflow-wrap:anywhere] sm:text-lg sm:leading-tight lg:text-xl">
            {siteConfig.name}
          </span>
          <span className="ml-0 mt-0.5 block text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground sm:ml-2 sm:mt-0 sm:inline sm:text-xs sm:normal-case">
            Waterproofing
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-8 text-[15px] font-medium tracking-tight" role="list">
            {mainNavLinks.map((link) => (
              <DesktopNavLink key={link.href} link={link} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="hidden shadow-sm shadow-cyan-900/10 md:inline-flex" size="sm" asChild>
            <Link href="/contact">Free inspection</Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hidden border-primary/30 sm:inline-flex"
            asChild
          >
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              WhatsApp
            </Link>
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
              className="flex h-[100dvh] max-h-[100dvh] w-[min(22rem,calc(100vw-16px))] min-w-0 flex-col gap-3 overflow-x-hidden overflow-y-auto border-l p-6 pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))] pt-[calc(0.875rem+env(safe-area-inset-top,0px))]"
            >
              <SheetTitle className="pr-14 text-left text-lg leading-snug font-heading break-words">
                Menu
              </SheetTitle>
              <SheetDescription className="text-left text-sm text-muted-foreground">
                Waterproofing and moisture protection
              </SheetDescription>
              <div className="mt-8 flex flex-col gap-6 text-lg font-medium">
                {mainNavLinks.map((link) => (
                  <MobileNavLink key={link.href} link={link} onNavigate={() => setOpen(false)} />
                ))}
                <SheetClose asChild>
                  <Link
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[48px] touch-manipulation items-center justify-center rounded-xl bg-emerald-500 px-5 py-3.5 text-center text-base font-semibold text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  >
                    WhatsApp us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
