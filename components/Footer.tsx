import Link from "next/link";
import { BracketLogo } from "./icons/Icons";
import { services } from "@/lib/content";

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold">
              <BracketLogo className="h-7 w-7" />
              <span>
                Kalp<span className="text-[var(--accent)]">Coder</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
              Code with Purpose. A full-service software development agency helping
              startups and businesses build digital products that actually work.
            </p>
            <div className="mt-6 flex gap-3 font-mono-brand text-xs text-[var(--text-muted)]">
              <span className="inline-flex h-2 w-2 items-center rounded-full bg-[var(--accent)]" />
              Available for new projects
            </div>
          </div>

          <div>
            <p className="font-mono-brand text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Quick Links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["About", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-brand text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Services
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-brand text-xs uppercase tracking-widest text-[var(--text-muted)]">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li>hello@kalpcoder.dev</li>
              <li>+91 00000 00000</li>
              <li>Remote-first · Serving clients worldwide</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>© {year} Kalp Coder. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[var(--accent)]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
