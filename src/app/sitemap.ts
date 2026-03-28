import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishedSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
