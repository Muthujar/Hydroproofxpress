import { siteConfig } from "@/constants/site-config";

/** LocalBusiness + WebSite structured data — inject once (server-safe) */
export function LocalBusinessSchema() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        image: `${siteConfig.url.replace(/\/$/, "")}/opengraph-image`,
        url: siteConfig.url.replace(/\/$/, ""),
        telephone: siteConfig.phoneTel,
        description: siteConfig.description,
        email: siteConfig.email,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Hyderabad Metropolitan Region",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "15:00",
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        priceRange: "₹₹–₹₹₹",
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.4304",
          longitude: "78.3489",
        },
      },
      {
        "@type": "WebSite",
        url: siteConfig.url.replace(/\/$/, ""),
        name: siteConfig.name,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url.replace(/\/$/, ""),
        },
      },
    ],
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph),
      }}
    />
  );
}
