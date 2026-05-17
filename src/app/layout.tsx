import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans } from "next/font/google";

import "./globals.css";

import { defaultMetadata } from "@/lib/seo";
import { LocalBusinessSchema } from "@/lib/structured-data";
import { Providers } from "@/components/providers";
import { EmergencyBanner } from "@/components/layout/emergency-banner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingActionCluster } from "@/components/shared/floating-contact-buttons";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top-button";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaf2fb" },
    { media: "(prefers-color-scheme: dark)", color: "#040b18" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable} scroll-smooth`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden bg-background antialiased">
        <LocalBusinessSchema />
        <Providers>
          <EmergencyBanner />
          <SiteHeader />
          <main className="min-w-0 flex-1">{children}</main>
          <SiteFooter />
          <FloatingActionCluster />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
