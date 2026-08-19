import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import ScrollTimeline from "@/components/ScrollTimeline";
import { process } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "A clear, seven-step process from discovery call to launch and long-term support.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A clear process from day one"
        description="No confusing jargon, no disappearing after the contract is signed. Just a clear process from day one."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <ScrollTimeline steps={process} />

        <Reveal delay={120}>
          <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 text-center">
            <h2 className="font-display text-2xl font-semibold">Ready to start step one?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[var(--text-muted)]">
              A free discovery call is all it takes to find out if we&apos;re
              the right fit for your project.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/contact">Book Your Discovery Call</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
