"use client";

import { useEffect, useRef, useState } from "react";

type Step = {
  step: string;
  title: string;
  body: string;
};

export default function ScrollTimeline({ steps }: { steps: Step[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [fillPercent, setFillPercent] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Grow the connecting line as the user scrolls through the section
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const viewportAnchor = window.innerHeight * 0.6;
        const total = rect.height + viewportAnchor - window.innerHeight * 0.15;
        const scrolled = viewportAnchor - rect.top;
        const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
        setFillPercent(pct);
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Mark each step "active" once it has scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) {
            setActiveIndex((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* track */}
      <div
        aria-hidden
        className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-[var(--border)] sm:block"
      />
      {/* animated fill */}
      <div
        aria-hidden
        className="absolute left-[27px] top-2 hidden w-px bg-[var(--accent)] transition-[height] duration-200 ease-out sm:block"
        style={{ height: `calc(${fillPercent}% - 8px)` }}
      />

      <ol className="space-y-10">
        {steps.map((step, i) => {
          const isActive = i <= activeIndex;
          return (
            <li
              key={step.step}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8"
            >
              <div
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border font-mono-brand text-lg font-semibold transition-all duration-500 ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg)] scale-100 shadow-[0_0_0_4px_rgba(163,230,53,0.15)]"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--accent)] scale-90 opacity-60"
                }`}
              >
                {step.step}
              </div>
              <div
                className={`flex-1 rounded-2xl border p-6 transition-all duration-500 ${
                  isActive
                    ? "border-[var(--border)] bg-[var(--card)] translate-x-0 opacity-100"
                    : "border-[var(--border)]/60 bg-[var(--card)]/40 translate-x-0 opacity-50 sm:translate-x-2"
                }`}
              >
                <h2 className="font-display text-xl font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
