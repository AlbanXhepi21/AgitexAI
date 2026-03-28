import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { getPublishedSlugs, getPostBySlug } from "@/lib/blog";
import { MarkdownBody } from "@/components/blog/MarkdownBody";
import { SITE_URL, siteName } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post || post.meta.draft) {
    return { title: "Not found" };
  }
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.meta.title} | ${siteName}`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post || post.meta.draft) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    author: {
      "@type": "Organization",
      name: post.meta.author ?? siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto max-w-[720px] px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-bright)] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            All articles
          </Link>

          <span className="section-label">Insights</span>
          <h1 className="font-display font-bold text-[clamp(28px,4vw,42px)] text-[var(--text-primary)] leading-tight">
            {post.meta.title}
          </h1>
          <p className="mt-3 text-[13px] text-[var(--text-tertiary)] flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden />
              <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
            </span>
            {post.meta.author && (
              <span className="text-[var(--text-secondary)]">{post.meta.author}</span>
            )}
          </p>

          <div className="mt-10">
            <MarkdownBody content={post.content} />
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--text-secondary)]">
              Questions about this topic?{" "}
              <Link href="/#contact" className="text-[var(--accent-bright)] hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
