import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="font-mono-brand text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
