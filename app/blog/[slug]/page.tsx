import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { ArrowIcon } from "@/components/icons/Icons";
import { blogPosts } from "@/lib/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.body.split("\n\n");
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="grid-noise absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)]"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Back to blog
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono-brand text-xs text-[var(--text-muted)]">
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
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--text-muted)]">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg text-[var(--text)]" : ""}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        {related.length > 0 && (
          <Reveal delay={220}>
            <div className="mt-16 border-t border-[var(--border)] pt-10">
              <p className="font-mono-brand text-xs uppercase tracking-widest text-[var(--text-muted)]">
                Keep Reading
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--accent)]"
                  >
                    <h3 className="font-display text-sm font-semibold group-hover:text-[var(--accent)]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--text-muted)]">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={260}>
          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 text-center">
            <h2 className="font-display text-xl font-semibold">Have a project in mind?</h2>
            <Button href="/contact">Get a Free Consultation</Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
