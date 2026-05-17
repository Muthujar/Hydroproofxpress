import { ImageResponse } from "next/og";

import { siteConfig } from "@/constants/site-config";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg,#0f2847 0%,#07243d 40%,#0b3d4d 100%)",
          color: "#f8fafc",
          padding: 56,
          fontFamily:
            "ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,sans-serif",
        }}
      >
        <div style={{ fontSize: 22, opacity: 0.85 }}>Dry builds • Checked workmanship</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, maxWidth: 820, lineHeight: 1.35, opacity: 0.92 }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            gap: 24,
          }}
        >
          <span style={{ color: "#5eeefa" }}>
            Leak checks • Written warranties
          </span>
          <span style={{ opacity: 0.75 }}>{siteConfig.phoneDisplay}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
