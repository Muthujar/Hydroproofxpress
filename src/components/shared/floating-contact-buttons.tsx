"use client";

import { MessageCircle, PhoneCall } from "lucide-react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { getWhatsAppUrl, siteConfig } from "@/constants/site-config";

export function FloatingActionCluster({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed z-[60] flex flex-col gap-3",
        "bottom-[max(1rem,env(safe-area-inset-bottom,0px))]",
        "left-[max(0.75rem,env(safe-area-inset-left,0px))]",
        "sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:left-[max(1.25rem,env(safe-area-inset-left,0px))]",
        className
      )}
      role="toolbar"
      aria-label="Quick contact actions"
    >
      <Link
        href={getWhatsAppUrl()}
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex size-[3.375rem] min-h-[52px] min-w-[52px] touch-manipulation items-center justify-center rounded-full bg-[#22c55e] text-white shadow-lg shadow-emerald-900/40 sm:size-14",
          "motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in motion-safe:duration-300",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        )}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-7" aria-hidden />
      </Link>
      <Link
        href={`tel:${siteConfig.phoneTel}`}
        prefetch={false}
        className={cn(
          "flex size-[3.375rem] min-h-[52px] min-w-[52px] touch-manipulation items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-slate-900/35 sm:size-14",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        )}
        aria-label="Call us now"
      >
        <PhoneCall className="size-7" aria-hidden />
      </Link>
    </div>
  );
}
