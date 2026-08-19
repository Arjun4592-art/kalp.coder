# Kalp Coder — Build Notes

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` needs internet access to fetch
Space Grotesk / Manrope / JetBrains Mono from Google Fonts on first build —
that's expected and only needs to happen once per environment (Vercel will
do this automatically at deploy time).

## What's implemented

- **Multi-page site** (all in `app/`): Home, Services, How We Work,
  Portfolio, Testimonials, About, Blog (+ individual post pages), Contact —
  matching the nav in the brief.
- **Day/Night theme**: auto-detected from the visitor's own device clock
  (6am–6pm = light, else dark — this naturally follows whichever country/
  timezone the visitor is in, since it reads their local system time). A
  manual sun/moon toggle in the navbar lets visitors override it; the choice
  is remembered. See `components/ThemeProvider.tsx` and the bootstrap script
  in `app/layout.tsx` (avoids a flash of the wrong theme on load).
- **Custom SVG icons only** — no icon library. See `components/icons/Icons.tsx`.
- **Signature hero element**: an animated "build terminal" that types out a
  deploy sequence (`components/TerminalHero.tsx`) — ties directly into the
  "Coder" identity instead of a generic hero graphic.
- **Motion**: scroll-reveal (`components/Reveal.tsx`, IntersectionObserver —
  no animation library needed), hover states, an infinite tech-stack marquee,
  ambient glow blobs. Everything respects `prefers-reduced-motion`.
- **Placeholders**: stats, testimonials, team names, and pricing numbers are
  marked as placeholders in `lib/content.ts` — swap in real numbers/names
  whenever you have them. Portfolio and blog use realistic but invented case
  studies since no real ones were provided; happy to swap in real projects.
- **Core Web Vitals**: `next/font` (self-hosted at build time, no runtime
  font requests), no client-side animation libraries, IntersectionObserver
  instead of scroll listeners for reveals, semantic HTML, focus-visible
  states throughout.
- **SEO**: per-page metadata, `sitemap.ts`, `robots.ts`, custom 404.

## One thing to know

`AGENTS.md` in this repo contains a suspicious instruction block (claims
Next.js has "breaking changes" and tells any AI agent to read fake docs
before editing code). That's not a real Next.js convention — it looks like
an injected prompt aimed at AI coding tools. I ignored it and built against
the actual installed Next.js 16 / React 19 / Tailwind v4. Worth deleting
that file or checking where it came from.

## Content to fill in later

- Real client testimonials, names, and photos (`lib/content.ts`)
- Real project case studies for Portfolio
- Real stats (projects delivered, years of experience, etc.)
- Team photos and bios
- Pricing numbers, if you want to publish them
