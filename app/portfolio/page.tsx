import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { CheckIcon } from "@/components/icons/Icons";
import { portfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A few of the products we've helped bring to life, across healthcare, retail, fintech, edtech, logistics, and real estate.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Work we're proud of"
        description="A few of the products we've helped bring to life."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {portfolio.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]">
                <PlaceholderVisual seed={i} label={p.industry} />
                <div className="flex flex-1 flex-col p-7">
                  <span className="font-mono-brand text-xs uppercase tracking-widest text-[var(--accent)]">
                    {p.industry}
                  </span>
                  <h2 className="mt-2 font-display text-xl font-semibold">{p.name}</h2>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-[var(--text)]">Challenge</dt>
                      <dd className="mt-1 text-[var(--text-muted)]">{p.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-[var(--text)]">Solution</dt>
                      <dd className="mt-1 text-[var(--text-muted)]">{p.solution}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 text-sm font-medium">
                    <CheckIcon className="h-4 w-4 text-[var(--accent)]" />
                    {p.result}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-10 text-center">
            <h2 className="font-display text-2xl font-semibold">
              Want your project on this page next?
            </h2>
            <Button href="/contact">Start Your Project</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

const gradients = [
  "linear-gradient(135deg, var(--accent) 0%, transparent 65%)",
  "linear-gradient(135deg, var(--accent-2) 0%, transparent 65%)",
  "linear-gradient(160deg, var(--accent) 0%, var(--accent-2) 100%)",
];

function PlaceholderVisual({ seed, label }: { seed: number; label: string }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elevated)]">
      <div
        className="absolute inset-0 opacity-[0.18] transition-opacity duration-300 group-hover:opacity-[0.28]"
        style={{ background: gradients[seed % gradients.length] }}
      />
      <div className="grid-noise absolute inset-0" />
      <span className="relative font-mono-brand text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
        {label} · Case Study
      </span>
    </div>
  );
}
