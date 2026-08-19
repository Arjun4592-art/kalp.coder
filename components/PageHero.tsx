import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="grid-noise absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <span className="font-mono-brand text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
