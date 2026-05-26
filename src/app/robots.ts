import type { MetadataRoute } from "next";

const SITE_URL = "https://retroaltfest.com";
const SITEMAP_URL = "https://retroaltfest.com/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: SITEMAP_URL,
    host: SITE_URL,
  };
}
