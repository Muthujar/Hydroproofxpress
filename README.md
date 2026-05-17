# HydroProof XPress marketing site

Production-oriented marketing site for a waterproofing contractor: lead capture, WhatsApp funnel, FAQ, galleries, testimonials, and Resend-backed enquiry email.

## Stack

Next.js App Router · TypeScript · Tailwind CSS v4 · ShadCN UI · Framer Motion · React Hook Form + Zod · Lucide icons · Sonner · Resend

## Local setup

```bash
npm install
cp .env.example .env.local   # customise values — see Env section
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (`https://your-domain.vercel.app`) for OG/sitemap/canonical URLs |
| `NEXT_PUBLIC_SITE_EMAIL` | Shown publicly in footer + structured data email |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Digits-only international number (`919876543210`) for WhatsApp deeplinks |
| `NEXT_PUBLIC_MAP_EMBED_URL` | `<iframe>` `src` from Google Maps “Embed” share |
| `RESEND_API_KEY` | Required to send enquiries with Resend |
| `RESEND_FROM_EMAIL` | Verified sender/domain in Resend (dev can use onboarding domain) |
| `ENQUIRY_EMAIL_TO` | Inbox receiving leads |

Lead email flow lives in [`src/actions/enquiry.ts`](src/actions/enquiry.ts). If inbound mail is blocked, inspect Resend dashboards for domain SPF/DKIM completion.

WhatsApp preset copy is wired from [`siteConfig.whatsappPrefillMessage`](src/constants/site-config.ts) and surfaced through [`getWhatsAppUrl()`](src/constants/site-config.ts).

## Scripts

| Script | Meaning |
| --- | --- |
| `npm run dev` | Local dev (`next dev`) |
| `npm run build` | Production build (`next build`) |
| `npm run start` | Serve built app |
| `npm run lint` | ESLint |

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com/).
2. Set **Framework Preset** to Next.js (automatic when `package.json` has `next`).
3. Paste env vars above in Project → Settings → Environment Variables (Production / Preview recommended).
4. Validate `RESEND_FROM_EMAIL` on a verified Resend sending domain — update DNS per Resend’s wizard.
5. Adjust `NEXT_PUBLIC_SITE_URL` to the production hostname so `robots.ts`, canonical tags, JSON-LD, and `sitemap.xml` resolve cleanly.
6. Trigger **Deploy**.

Optional: toggle **Fluid / Node** runtime under Project Settings if you need cron or longer server actions elsewhere (not currently required).

## Customize content

Centralised knobs live in [`src/constants/`](src/constants/) (`services`, FAQ, testimonials, hero copy). Replace Unsplash décor images with audited site photography when available.

Structured data resides in [`src/lib/structured-data.tsx`](src/lib/structured-data.tsx). Update postal + geo snippets when onboarding a new legal entity.

## Folder map

```
src/app/                – routes, OG image, robots, sitemap
src/actions/           – server actions (enquiry dispatch)
src/components/forms/    – enquiry form (hook form + suspense)
src/components/home/    – modular homepage sections
src/components/layout/  – navbar, footer, emergency strip, reusable CTA
src/components/shared/  – animations, FABs, FAQ accordion helpers
src/constants/          – services, FAQs, stats, geography
src/lib/               – seo helpers & JSON-LD
src/schemas/           – enquiry zod definitions
```

## Performance & Lighthouse

`next/image` handles remote décor assets from Unsplash with domain allow-listing (`next.config.ts`). Hero imagery is `priority`; remaining sections lazy-load naturally. Fonts load via Google (`DM Sans` body, `Outfit` headings).

## Legal

Privacy policy scaffold is illustrative—have counsel review jurisdiction-specific obligations before launching.
