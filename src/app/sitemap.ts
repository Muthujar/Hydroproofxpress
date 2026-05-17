import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site-config";
import { services } from "@/constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    typeof siteConfig.url === "string" && siteConfig.url.startsWith("http")
      ? siteConfig.url.replace(/\/$/, "")
      : "http://localhost:3000";

  const routes = [
    "/",
    "/services",
    "/about",
    "/contact",
    "/gallery",
    "/testimonials",
    "/faq",
    "/privacy",
  ];

  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    priority: path === "/" ? 1 : 0.76,
    changeFrequency: "weekly",
  }));

  const servicesEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...servicesEntries];
}
