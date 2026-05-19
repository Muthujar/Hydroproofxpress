"use server";

import { Resend } from "resend";

import { enquirySchema, type EnquiryInput } from "@/schemas/enquiry";
import { siteConfig } from "@/constants/site-config";

export type EnquiryActionResult =
  | { ok: true; message: string }
  | {
      ok: false;
      message: string;
      fieldErrors?: Partial<Record<keyof EnquiryInput | "root", string[]>>;
    };

function formatHtml(data: EnquiryInput): string {
  const origin = siteConfig.url.replace(/\/$/, "");
  const logoUrl = `${origin}${siteConfig.logo.src}`;

  const rows = `
    <div style="margin-bottom:24px;">
      <img src="${logoUrl}" alt="${escapeHtml(siteConfig.name)}" width="220" height="147" style="display:block;height:auto;max-width:220px;width:220px;" />
    </div>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Service key:</strong> ${escapeHtml(data.serviceType)}</p>
    <p><strong>Location:</strong> ${escapeHtml(data.location)}</p>
    <p><strong>Message:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="font-size:12px;color:#64748b;">Submitted via ${siteConfig.name} website form.</p>
  `;

  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif">${rows}</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitEnquiry(payload: unknown): Promise<EnquiryActionResult> {
  if (typeof payload !== "object" || payload === null) {
    return { ok: false, message: "Invalid submission." };
  }

  const record = payload as Record<string, unknown>;
  const honeypot = typeof record.website === "string" ? record.website.trim() : "";
  if (honeypot.length > 0) {
    return { ok: true, message: "Thanks — we will respond shortly." };
  }

  delete record.website;
  delete record.honeypotWebsite;

  const parsed = enquirySchema.safeParse(record);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors as Partial<
      Record<keyof EnquiryInput | "root", string[]>
    >;
    return {
      ok: false,
      message: "Please review the highlighted fields.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.ENQUIRY_EMAIL_TO?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !toEmail || !fromEmail) {
    return {
      ok: false,
      message:
        "Email delivery is not configured yet. WhatsApp us or call — we respond fast.",
      fieldErrors: { root: ["Missing mail configuration on server"] },
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `New waterproofing enquiry — ${data.name}`,
    html: formatHtml(data),
  });

  if (error) {
    return {
      ok: false,
      message: "Unable to queue email right now. Please call or WhatsApp while we investigate.",
      fieldErrors: {
        root: [error.message],
      },
    };
  }

  return {
    ok: true,
    message: "Received. Our team will call you shortly.",
  };
}
