"use client";

import { useEffect, useRef, useState } from "react";
import { WebIcon, RocketIcon, ApiIcon } from "./icons/Icons";

type Line = { prompt?: boolean; text: string; success?: boolean };

const lines: Line[] = [
  { prompt: true, text: "kalpcoder new your-idea" },
  { text: "→ scoping requirements" },
  { text: "→ designing the experience" },
  { text: "→ building in sprints" },
  { prompt: true, text: "kalpcoder deploy" },
  { text: "✓ shipped on time, on budget", success: true },
];

export default function TerminalHero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion.current) {
      setLineIndex(lines.length - 1);
      setCharIndex(lines[lines.length - 1].text.length);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;
    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 32);
      return () => clearTimeout(t);
    }
    const pause = lineIndex === lines.length - 1 ? 2200 : 420;
    const t = setTimeout(() => {
      if (lineIndex === lines.length - 1) {
        setLineIndex(0);
        setCharIndex(0);
      } else {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }
    }, pause);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  return (
    <div className="relative">
      <div className="ambient-glow" />

      {/* floating pipeline badges */}
      <div className="pointer-events-none absolute -right-3 -top-6 z-20 hidden flex-col gap-3 sm:flex">
        <FloatingBadge icon={WebIcon} label="Design" style={{ animationDelay: "0s" }} />
      </div>
      <div className="pointer-events-none absolute -left-6 top-1/3 z-20 hidden sm:block">
        <FloatingBadge icon={ApiIcon} label="Build" style={{ animationDelay: "1.2s" }} />
      </div>
      <div className="pointer-events-none absolute -right-8 bottom-6 z-20 hidden sm:block">
        <FloatingBadge icon={RocketIcon} label="Ship" style={{ animationDelay: "0.6s" }} />
      </div>

      <div className="relative z-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono-brand text-xs text-[var(--text-muted)]">
            kalpcoder — build.sh
          </span>
        </div>
        <div className="min-h-[260px] px-5 py-6 font-mono-brand text-sm leading-7 sm:text-[15px]">
          {lines.slice(0, lineIndex).map((l, i) => (
            <TerminalLine key={i} line={l} full />
          ))}
          <TerminalLine
            line={{ ...lines[lineIndex], text: lines[lineIndex].text.slice(0, charIndex) }}
            caret
          />
        </div>
      </div>
    </div>
  );
}

function TerminalLine({
  line,
  caret,
  full,
}: {
  line: Line;
  caret?: boolean;
  full?: boolean;
}) {
  return (
    <div className={line.success ? "text-[var(--accent)]" : "text-[var(--text)]"}>
      {line.prompt && <span className="text-[var(--accent-2)]">$ </span>}
      {!line.prompt && !line.success && <span className="text-[var(--text-muted)]">{"  "}</span>}
      <span>{line.text}</span>
      {caret && !full && <span className="caret">&nbsp;</span>}
    </div>
  );
}

function FloatingBadge({
  icon: Icon,
  label,
  style,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{ animation: "float 5s ease-in-out infinite", ...style }}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/90 px-3.5 py-2 shadow-lg backdrop-blur"
    >
      <Icon className="h-4 w-4 text-[var(--accent)]" />
      <span className="font-mono-brand text-xs text-[var(--text-muted)]">{label}</span>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}
