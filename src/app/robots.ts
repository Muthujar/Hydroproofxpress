import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";

export default function robots(): MetadataRoute.Robots {
  const base =
    typeof siteConfig.url === "string" && siteConfig.url.startsWith("http")
      ? siteConfig.url.replace(/\/$/, "")
      : process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
