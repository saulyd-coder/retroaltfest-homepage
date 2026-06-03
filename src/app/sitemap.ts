import type { MetadataRoute } from "next";
import { featuredFestivals, festivalSlug } from "@/lib/festivals";

const SITE_URL = "https://retroaltfest.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/festivals`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guides`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/guides/north-american-goth-darkwave-festivals`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/industrial-ebm-dark-electronic-festivals-north-america`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/new-wave-post-punk-retro-alternative-festivals-north-america`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/guides/west-coast-pacific-northwest-dark-alternative-festivals`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const festivalRoutes: MetadataRoute.Sitemap = featuredFestivals.map((festival) => ({
    url: `${SITE_URL}/festivals/${festivalSlug(festival)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...festivalRoutes];
}
