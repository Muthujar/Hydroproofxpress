/**
 * Brigade Meadows service hub — Kanakapura Main Rd, Kaggalipura, Bengaluru 560082.
 * Coordinates verified via OSM (Brigade Meadows, Udayapura). Address-only geocoding
 * often resolves to the wrong "No.122" or a different Kaggalipura in Karnataka.
 */
const SERVICE_HUB_COORDS = {
  latitude: 12.812785,
  longitude: 77.508481,
  zoom: 16,
} as const;

/** Google Place ID for Brigade Meadows (Kanakapura Main Rd entrance). */
const SERVICE_HUB_PLACE_ID = "ChIJfQ7Eyg9BrjsRc0TvCT0qejc";

function buildMapEmbedUrl(): string {
  const { latitude, longitude, zoom } = SERVICE_HUB_COORDS;
  return `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=${zoom}&output=embed`;
}

function resolveMapEmbedUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_MAP_EMBED_URL?.trim();
  if (fromEnv && !fromEnv.includes("PASTE_YOUR_EMBED")) {
    return fromEnv;
  }

  return buildMapEmbedUrl();
}

export function getMapDirectionsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${SERVICE_HUB_COORDS.latitude},${SERVICE_HUB_COORDS.longitude}&query_place_id=${SERVICE_HUB_PLACE_ID}`;
}

function digitsOnly(value: string | undefined): string {
  return (value ?? "").replace(/\D/g, "");
}

function formatIndiaPhoneDisplay(digits: string): string {
  if (digits.startsWith("91") && digits.length === 12) {
    const local = digits.slice(2);
    return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
  }
  return digits ? `+${digits}` : "";
}

const whatsappPhoneDigits =
  digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_PHONE) || "919876543210";

const phoneDigits =
  digitsOnly(process.env.NEXT_PUBLIC_PHONE) || whatsappPhoneDigits;

const phoneTel = `+${phoneDigits}`;
const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() ||
  formatIndiaPhoneDisplay(phoneDigits);

export const siteConfig = {
  name: "HydroProof XPress",
  logo: {
    src: "/hpxpress_logo.png",
    width: 1536,
    height: 1024,
    /** Square crop of the pin/house mark — favicons & compact placements */
    iconSrc: "/logo-icon.png",
    iconSize: 512,
  },
  /** Shown inline with name in header: "Name — …" */
  headerSubtitle: "The waterproofing specialists",
  tagline: "Professional waterproofing • Leak checks • Repairs backed by warranty",
  description:
    "We waterproof homes and businesses—terraces, roofs, basements, water tanks, bathrooms, and outer walls. Every job is inspected, planned properly, and covered by workmanship warranty where agreed.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Public hostname for display (header bar, copy). Does not affect routing. */
  publicDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "hydroproofxpress.com",
  phoneDisplay,
  phoneTel,
  /** WhatsApp number digits only including country code, no symbols */
  whatsappPhoneDigits,
  whatsappPrefillMessage: "Hi, I need help with waterproofing.",
  email: process.env.NEXT_PUBLIC_SITE_EMAIL ?? "hydroproofxpress@gmail.com",
  /** Second inbox (optional) — omit from env if you only use one address */
  secondaryEmail: process.env.NEXT_PUBLIC_SITE_EMAIL_SECONDARY?.trim() || undefined,
  address: {
    street:
      "No.122, Saalu Hunase Village, Opp. Anjaneya Temple, Udayapura Post, Kanakapura Main Rd",
    city: "Kaggalipura",
    region: "Karnataka",
    postalCode: "560082",
    country: "India",
    /** Brigade Meadows — Kanakapura Main Rd, Kaggalipura */
    latitude: String(SERVICE_HUB_COORDS.latitude),
    longitude: String(SERVICE_HUB_COORDS.longitude),
    mapEmbedUrl: resolveMapEmbedUrl(),
    mapDirectionsUrl: getMapDirectionsUrl(),
  },
} as const;

export function getWhatsAppUrl(): string {
  const text = encodeURIComponent(siteConfig.whatsappPrefillMessage);
  return `https://wa.me/${siteConfig.whatsappPhoneDigits}?text=${text}`;
}
