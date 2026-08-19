import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons/Icons";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on process, engineering decisions, and building software with startups and businesses.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="From the Team"
        title="Notes on building software"
        description="Process, engineering decisions, and the occasional opinion."
      />

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-3 py-8">
                <div className="flex flex-wrap items-center gap-3 font-mono-brand text-xs text-[var(--text-muted)]">
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--accent)]">
                    {post.tag}
                  </span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)] sm:text-3xl">
                  {post.title}
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)]">
                  Read article
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
