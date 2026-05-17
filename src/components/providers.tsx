"use client";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
      {children}
      <Toaster position="top-center" richColors closeButton theme="light" />
    </ThemeProvider>
  );
}
