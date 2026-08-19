import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import WhyTimeline from "@/components/WhyTimeline";
import { whyChooseUs, team, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kalp Coder is a small, senior team of developers, designers, and problem-solvers building software with purpose.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="We build software that shouldn't be complicated to get"
        description="A team of developers, designers, and problem-solvers who believe good software starts with understanding the problem — not the tech stack."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-[var(--text)]">
            We&apos;ve worked with early-stage founders building their first
            MVP and established businesses looking to modernize their
            systems — and in every project, our job is the same: understand
            the problem deeply, then build the simplest, most reliable
            solution for it.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            We&apos;re not a factory that churns out templated websites.
            Every project starts with a conversation about your business,
            not your tech stack.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-semibold text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow="The Team"
            title="The people behind Kalp Coder"
            description="A small, senior team — not a call center with a sales rep between you and your developers."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name + i} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-soft)] font-display text-xl font-semibold text-[var(--accent)]">
                    {member.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{member.name}</h3>
                  <p className="mt-0.5 font-mono-brand text-xs text-[var(--accent)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Why Kalp Coder" title="Why businesses work with us" align="center" />
        <WhyTimeline items={whyChooseUs} />
        <Reveal delay={200}>
          <div className="mt-14 flex justify-center">
            <Button href="/contact">Let&apos;s talk about your project</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}