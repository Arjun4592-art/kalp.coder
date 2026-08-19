"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

function parseStat(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, decimals: 0 };
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), suffix, decimals };
}

function Counter({ value }: { value: string }) {
  const { prefix, target, suffix, decimals } = parseStat(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reducedMotion) {
              setDisplay(target);
              return;
            }
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elevated)]">
      {/* subtle grid + glow backdrop to differentiate the strip from surrounding sections */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 px-6 py-8 text-center first:pt-0 sm:py-4"
            >
              <p className="font-display text-4xl font-semibold tabular-nums text-[var(--accent)] sm:text-5xl">
                <Counter value={stat.value} />
              </p>
              <p className="font-mono-brand text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
