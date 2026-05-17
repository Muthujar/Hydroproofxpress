"use client";

import { X } from "lucide-react";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";
import { cn } from "@/lib/utils";

export function EmergencyBanner({ className }: { className?: string }) {
  const [dismissed, setDismissed] = React.useState(false);

  return dismissed ? null : (
    <aside
      className={cn(
        "border-b border-cyan-500/35 bg-gradient-to-r from-slate-900 via-[#082f52] to-slate-900 text-[13px] text-slate-100 sm:text-sm",
        className
      )}
      role="region"
      aria-label="Emergency leak response banner"
    >
      <div className="relative mx-auto max-w-[120rem] px-4 py-3.5 pb-4 pr-14 pt-14 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:px-6 sm:pb-5 sm:pr-6 sm:pt-12 lg:px-10">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className={cn(
            "absolute right-3 top-3 flex items-center justify-center rounded-lg text-slate-200 hover:bg-white/15 hover:text-white",
            "min-h-[44px] min-w-[44px]",
            "sm:right-6 sm:top-3 lg:right-10"
          )}
        >
          <X className="size-5" />
        </button>
        <p className="text-balance text-center leading-snug sm:max-w-none">
          <span className="font-semibold text-cyan-200">Leak emergency?</span>{" "}
          <span className="text-white/95">Teams on standby—call or WhatsApp for quick advice.</span>
        </p>
        <div className="mt-3 flex w-full flex-col gap-2.5 sm:mt-0 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link
            href={`tel:${siteConfig.phoneTel}`}
            className="touch-manipulation text-center text-sm font-semibold underline decoration-cyan-300/70 underline-offset-[3px] hover:text-cyan-50 active:text-cyan-100 sm:text-left"
            prefetch={false}
          >
            {siteConfig.phoneDisplay}
          </Link>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="h-11 min-h-[44px] w-full touch-manipulation bg-cyan-400 text-sm font-semibold text-slate-900 hover:bg-cyan-300 sm:h-9 sm:min-h-0 sm:w-auto"
            asChild
          >
            <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" prefetch={false}>
              WhatsApp us
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
