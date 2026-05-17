export const siteConfig = {
  name: "HydroProof XPress",
  /** Shown inline with name in header: "Name — …" */
  headerSubtitle: "The waterproofing specialists",
  tagline: "Professional waterproofing • Leak checks • Repairs backed by warranty",
  description:
    "We waterproof homes and businesses—terraces, roofs, basements, water tanks, bathrooms, and outer walls. Every job is inspected, planned properly, and covered by workmanship warranty where agreed.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Public hostname for display (header bar, copy). Does not affect routing. */
  publicDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? "hydroproofxpress.com",
  /** E.164 without + shown to users — update for production */
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  /** WhatsApp number digits only including country code, no symbols */
  whatsappPhoneDigits: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "919876543210",
  whatsappPrefillMessage: "Hi, I need help with waterproofing.",
  email: process.env.NEXT_PUBLIC_SITE_EMAIL ?? "hydroproofxpress@gmail.com",
  /** Second inbox (optional) — omit from env if you only use one address */
  secondaryEmail: process.env.NEXT_PUBLIC_SITE_EMAIL_SECONDARY?.trim() || undefined,
  address: {
    street: "42 Business Park Rd, Jubilee Hills",
    city: "Hyderabad",
    region: "Telangana",
    postalCode: "500033",
    country: "India",
    /** Center for Maps embed — adjust coordinates */
    mapEmbedUrl:
      process.env.NEXT_PUBLIC_MAP_EMBED_URL ??
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4896!2d78.389!3d17.446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzQ2LjAiTiA3OMKwMjMnMjAuNCJF!5e0!3m2!1sen!2sin!4v1710000000000",
  },
} as const;

export function getWhatsAppUrl(): string {
  const text = encodeURIComponent(siteConfig.whatsappPrefillMessage);
  return `https://wa.me/${siteConfig.whatsappPhoneDigits}?text=${text}`;
}
