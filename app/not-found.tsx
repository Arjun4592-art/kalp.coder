import Button from "@/components/Button";
import { BracketLogo } from "@/components/icons/Icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 text-center">
      <div className="ambient-glow" />
      <div className="relative">
        <BracketLogo className="mx-auto h-10 w-10 opacity-60" />
        <p className="mt-6 font-mono-brand text-sm text-[var(--accent)]">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          This route doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-[var(--text-muted)]">
          The page you&apos;re looking for was moved, renamed, or never
          built. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
