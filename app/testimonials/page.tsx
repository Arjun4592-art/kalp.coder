import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { StarIcon } from "@/components/icons/Icons";
import { testimonials, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What our clients say about working with Kalp Coder.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="What Clients Say"
        title="Real results from real clients"
        description="Explore how we've helped businesses achieve measurable growth."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7">
                <div className="flex gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono-brand text-[11px] text-[var(--accent)]">
                    {t.result}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-[var(--accent)] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Ready to be our next success story?
          </h2>
          <div className="mt-7 flex justify-center">
            <Button href="/contact">Start Your Project</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
