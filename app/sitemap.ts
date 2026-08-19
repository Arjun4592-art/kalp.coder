import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";

const routes = [
  "",
  "/services",
  "/how-we-work",
  "/portfolio",
  "/testimonials",
  "/about",
  "/blog",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kalpcoder.dev";
  const now = new Date();

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
