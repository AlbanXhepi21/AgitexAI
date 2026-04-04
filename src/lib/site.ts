/** Canonical site URL — used for SEO, Open Graph, and sitemap. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://agitexai.com";

/**
 * Base URL for resolving relative metadata (icons, OG images, etc.).
 * Without this, local dev would use SITE_URL and favicon links would point at production.
 */
export function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }
  return new URL(SITE_URL);
}

export const siteName = "AgitexAI";
export const siteDescription =
  "Enterprise AI solutions & AI development agency: AI agents, RAG pipeline development, voice AI & AI consulting for US & EU. Production-ready engineering from Tirana.";

/** Company profiles (footer, structured data) */
export const LINKEDIN_URL = "https://www.linkedin.com/company/agitexai/";
export const GITHUB_ORG_URL = "https://github.com/AgitexAI";
