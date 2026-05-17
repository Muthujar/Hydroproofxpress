"use client";

import { ArrowUp } from "lucide-react";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTopButton({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <Button
      size="icon"
      variant="secondary"
      aria-label="Back to top"
      className={cn(
        "fixed z-[60] size-12 min-h-[48px] min-w-[48px] touch-manipulation rounded-full border border-border shadow-md",
        "bottom-[calc(9rem+env(safe-area-inset-bottom,0px))]",
        "right-[max(0.75rem,env(safe-area-inset-right,0px))]",
        "sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))]",
        "sm:right-[max(1.25rem,env(safe-area-inset-right,0px))]",
        className
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp className="size-5" aria-hidden />
    </Button>
  );
}
