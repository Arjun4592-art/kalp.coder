"use client";

import { useState } from "react";
import { ArrowIcon } from "./icons/Icons";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-sm font-semibold sm:text-base">{item.q}</span>
              <ArrowIcon
                className={`h-4 w-4 shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                  open ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 transition-all duration-300 ${
                open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid", gridTemplateColumns: "1fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
