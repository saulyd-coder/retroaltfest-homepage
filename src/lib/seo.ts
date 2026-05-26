import type { Metadata } from "next";

export const siteUrl = "https://retroaltfest.com";
export const siteName = "RetroAltFest";
export const defaultOgImage = "/og-preview.png";

const defaultDescription =
  "RetroAltFest is a curated atlas of goth, darkwave, industrial, synthpop, post-punk, EDM, and alternative festivals.";

export type BuildMetadataInput = {
  title: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  keywords?: string[];
  image?: {
    url?: string;
    alt?: string;
  };
  index?: boolean;
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  type = "website",
  keywords = [],
  image,
  index = true,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = image?.url || defaultOgImage;
  const ogImageAlt = image?.alt || "RetroAltFest dark alternative festival atlas preview";

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: ["RetroAltFest", ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index,
      follow: index,
    },
  };
}
