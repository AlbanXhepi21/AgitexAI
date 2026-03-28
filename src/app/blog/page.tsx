import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { siteName } from "@/lib/site";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights & articles",
  description:
    "AI engineering notes, RAG and production lessons, and project updates from the AgitexAI team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Insights & articles | ${siteName}`,
    description:
      "Practical posts on AI agents, RAG, data pipelines, and cloud delivery.",
    url: "/blog",
  },
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto max-w-[1140px] px-6">
        <span className="section-label">Insights</span>
        <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-[var(--text-primary)] max-w-2xl">
          Articles & updates
        </h1>
        <p className="mt-4 text-[17px] text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          AI discoveries, production lessons, and project notes — written for
          builders and buyers who care about outcomes, not buzzwords.
        </p>

        <ul className="mt-14 space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)]"
              >
                <div>
                  <h2 className="font-display font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-bright)] transition-colors">
                    {post.meta.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-2xl">
                    {post.meta.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.meta.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[rgba(45,122,224,0.08)] text-[var(--accent-bright)] border border-[rgba(45,122,224,0.12)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] shrink-0 font-mono">
                  <Calendar className="w-4 h-4" aria-hidden />
                  <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
                  <ArrowRight className="w-4 h-4 text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="mt-12 text-[var(--text-secondary)]">
            No posts yet. Add Markdown files under{" "}
            <code className="font-mono text-[var(--accent-bright)]">content/blog/</code>
            .
          </p>
        )}
      </div>
    </main>
  );
}
