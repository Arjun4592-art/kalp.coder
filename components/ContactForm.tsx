"use client";

import { useState } from "react";
import { CheckIcon } from "./icons/Icons";
import Button from "./Button";

const projectTypes = ["Website", "Mobile App", "Custom Software", "Other"];
const budgetRanges = ["Under ₹1L", "₹1L – ₹5L", "₹5L – ₹15L", "₹15L+", "Not sure yet"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // No backend is wired up yet — this simulates a submission so the
    // form's UX can be reviewed end to end.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] p-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold">Message received</h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
          Thanks for reaching out — we&apos;ll get back to you within one
          business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" type="text" required placeholder="Your full name" className="input" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@company.com" className="input" />
        </Field>
        <Field label="Phone (optional)" htmlFor="phone">
          <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className="input" />
        </Field>
        <Field label="Project Type" htmlFor="projectType">
          <select id="projectType" name="projectType" required defaultValue="" className="input">
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range (optional)" htmlFor="budget" className="sm:col-span-2">
          <select id="budget" name="budget" defaultValue="" className="input">
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Details" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're building..."
            className="input resize-none"
          />
        </Field>
      </div>

      <div className="mt-7">
        <Button type="submit" withArrow={false} className={submitting ? "opacity-70" : ""}>
          {submitting ? "Sending…" : "Book a Free Consultation"}
        </Button>
      </div>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--text);
          transition: border-color 0.2s ease;
        }
        .input::placeholder {
          color: var(--text-muted);
        }
        .input:focus {
          outline: none;
          border-color: var(--accent);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-[var(--text-muted)]">
        {label}
      </label>
      {children}
    </div>
  );
}
