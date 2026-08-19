import Link from "next/link";
import { ArrowIcon } from "./icons/Icons";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = true,
  className = "",
  type,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-text)] hover:bg-[var(--accent-strong)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_var(--accent)] active:translate-y-0",
    secondary:
      "border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] hover:-translate-y-0.5 bg-[var(--card)]",
    ghost:
      "text-[var(--text)] hover:text-[var(--accent)] px-2 py-1",
  };

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {content}
    </button>
  );
}
