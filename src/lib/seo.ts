import type { Metadata } from "next";

import { siteConfig } from "@/constants/site-config";

const siteUrl =
  typeof siteConfig.url === "string" &&
  siteConfig.url.startsWith("http") &&
  !siteConfig.url.includes("localhost")
    ? siteConfig.url
    : process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "http://localhost:3000";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Waterproofing & leak repair`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "waterproofing",
    "terrace leakage",
    "basement waterproofing",
    "roof coating",
    "bathroom seepage",
    "residential waterproofing",
    "wall and slab leaks",
    "polyurethane waterproofing",
    "commercial waterproofing contractors",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: siteConfig.logo.iconSrc, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Waterproofing & leak repair`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function buildPageMeta(args: {
  title: string;
  description?: string;
  path: string;
}): Metadata {
  const url = new URL(args.path, siteUrl);
  const description = args.description ?? siteConfig.description;
  const title = `${args.title}`;
  const titleWithBrand = `${args.title}`;

  return {
    title: titleWithBrand,
    description,
    alternates: { canonical: args.path === "/" ? siteUrl : url.toString() },
    openGraph: {
      title,
      description,
      url: url.toString(),
    },
    twitter: {
      title,
      description,
    },
  };
}
