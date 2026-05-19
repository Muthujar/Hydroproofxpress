import { siteConfig } from "@/constants/site-config";

function siteOrigin(): string {
  return siteConfig.url.replace(/\/$/, "");
}

/** LocalBusiness + WebSite structured data — inject once (server-safe) */
export function LocalBusinessSchema() {
  const origin = siteOrigin();
  const logoUrl = `${origin}${siteConfig.logo.src}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        image: logoUrl,
        logo: logoUrl,
        url: origin,
        telephone: siteConfig.phoneTel,
        description: siteConfig.description,
        email: siteConfig.email,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Bengaluru South & Kanakapura corridor",
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
          latitude: siteConfig.address.latitude,
          longitude: siteConfig.address.longitude,
        },
      },
      {
        "@type": "WebSite",
        url: origin,
        name: siteConfig.name,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: origin,
          logo: logoUrl,
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
