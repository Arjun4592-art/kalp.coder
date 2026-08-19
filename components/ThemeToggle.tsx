"use client";

import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "./icons/Icons";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] ${className}`}
    >
      <SunIcon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          theme === "dark" ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 -rotate-90"
        }`}
      />
      <MoonIcon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          theme === "light" ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 rotate-90"
        }`}
      />
    </button>
  );
}
