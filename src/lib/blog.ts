import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  description: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  /** Shorter string for `<title>` / sharing when `title` is long (on-page H1 stays `title`) */
  seoTitle?: string;
  /** Optional meta keywords for the post (in addition to site-level keywords) */
  keywords?: string[];
  author?: string;
  tags?: string[];
  /** Set true to hide from listing and sitemap */
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  meta: BlogFrontmatter;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content/blog");

function ensureDir(): void {
  if (!fs.existsSync(POSTS_DIR)) {
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
}

export function getPostSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const full = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: data as BlogFrontmatter,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null && !p.meta.draft)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
}

export function getLatestPosts(limit: number): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

/** Slugs that are published (not draft) — for sitemap and static generation */
export function getPublishedSlugs(): string[] {
  return getPostSlugs().filter((slug) => {
    const p = getPostBySlug(slug);
    return p !== null && !p.meta.draft;
  });
}
