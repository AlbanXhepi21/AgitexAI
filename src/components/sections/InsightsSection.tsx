import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getLatestPosts } from "@/lib/blog";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

export function InsightsSection() {
  const posts = getLatestPosts(3);

  return (
    <section id="insights" className="py-24 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border)] scroll-mt-24">
      <div className="container mx-auto max-w-[1140px] px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <SectionHeader
                label="Insights"
                title="Latest articles & updates"
                subtitle="RAG, agents, production lessons, and what we’re learning — same team as your build."
              />
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-bright)] hover:underline shrink-0 md:mb-2"
            >
              View all articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Reveal>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-card-hover)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2 text-[12px] font-mono text-[var(--text-tertiary)] mb-3">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-bright)] transition-colors leading-snug">
                    {post.meta.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 flex-1">
                    {post.meta.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-bright)]">
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="mt-8 text-[var(--text-secondary)] text-sm">
            Articles coming soon.{" "}
            <Link href="/blog" className="text-[var(--accent-bright)] hover:underline">
              Visit the blog
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
