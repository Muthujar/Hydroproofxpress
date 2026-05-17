import type { Metadata } from "next";

import { buildPageMeta } from "@/lib/seo";
import { siteConfig } from "@/constants/site-config";

export const metadata: Metadata = buildPageMeta({
  title: "Privacy Policy",
  path: "/privacy",
  description: `Privacy policy describing how ${siteConfig.name} collects, uses, and protects personal data submitted through this website.`,
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[720px] space-y-8 px-4 py-20 text-[15px] leading-relaxed text-muted-foreground md:py-28">
      <h1 className="font-heading text-3xl text-primary md:text-4xl">Privacy policy</h1>
      <p className="text-sm text-primary/80">Effective date: 12 May 2026 · Review regularly for updates.</p>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Who we are</h2>
        <p>
          This website is operated by {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Contact:{" "}
          <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          , phone {siteConfig.phoneDisplay}.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">What we collect</h2>
        <p>
          When you submit an enquiry we collect the fields you provide (name, phone, service interest, location, message) plus
          technical details needed to keep the form secure (such as time sent and a hashed IP where stored).
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">How we use data</h2>
        <ul className="list-disc space-y-2 ps-7">
          <li>Respond to service requests and schedule inspections.</li>
          <li>Coordinate follow-ups through phone, WhatsApp Business, or email—only if you initiate contact.</li>
          <li>Keep records for warranty service and repeat visits.</li>
        </ul>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Lawful basis</h2>
        <p>
          We use your details to reply to service requests you send us and to prepare quotes—called “legitimate interest” under privacy law.
          If we ever send marketing, we will ask permission separately.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Retention</h2>
        <p>
          Enquiry records are retained for the duration needed to complete service delivery and satisfy warranty obligations,
          typically not exceeding seven (7) years unless a longer period is mandated by applicable law.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Third parties</h2>
        <p>
          Email delivery may rely on infrastructure providers (for example Resend, Inc.) operating under data processing
          agreements. Maps embeds may set cookies governed by Google&rsquo;s policies—disable third-party cookies in your browser
          if you prefer not to load them.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Your rights</h2>
        <p>
          Depending on where you live, you may ask to see, fix, delete, or export your personal data. Email
          your request to the address above and we will reply within the time the law allows.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="font-heading text-xl text-primary">Security</h2>
        <p>
          We use HTTPS, server-side checks, bot traps, and limited mailbox access. No web form is 100% risk-free—call us if you prefer not to send sensitive drawings online.
        </p>
      </section>
    </article>
  );
}
