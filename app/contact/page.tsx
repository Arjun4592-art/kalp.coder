import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building — book a free 30-minute consultation with Kalp Coder.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Have a project in mind?"
        description="Tell us what you're building — we'll tell you honestly whether it makes sense, what it'll take, and how we can help."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono-brand text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Direct Contact
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold">Prefer to talk directly?</h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Email us or call — we&apos;re happy to jump on a quick call
                before any paperwork.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 space-y-4 text-sm">
                <ContactRow label="Email" value="hello@kalpcoder.dev" />
                <ContactRow label="Phone" value="+91 00000 00000" />
                <ContactRow label="Availability" value="Remote-first · Async-friendly across time zones" />
                <ContactRow label="Response time" value="Within one business day" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  We sign an NDA before any detailed discussion — your idea
                  and data stay confidential from the first call.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-[var(--border)] pb-4">
      <span className="font-mono-brand text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
        {label}
      </span>
      <span className="font-medium text-[var(--text)]">{value}</span>
    </div>
  );
}
