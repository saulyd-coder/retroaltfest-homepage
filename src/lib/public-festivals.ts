import {
  Festival,
  featuredFestivals,
  festivalSlug,
  formatLocation,
  getFestivalBySlug,
  getSimilarFestivals,
  genreLabel,
} from "@/lib/festivals";

export type PublicFestivalDirectoryItem = {
  id: string;
  slug: string;
  name: string;
  locationLabel: string;
  regionLabel: string;
  dateLabel: string;
  sceneTags: string[];
  statusLabel: string;
  searchText: string;
};

export type PublicFeaturedFestival = {
  id: string;
  slug: string;
  name: string;
  locationLabel: string;
  dateLabel: string;
  sceneTags: string[];
  statusLabel: string;
  summary: string;
  officialSiteUrl: string;
};

export type PublicFestivalDetail = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  whyItMatters: string;
  locationLabel: string;
  dateLabel: string;
  venueLabel: string;
  sceneTags: string[];
  statusLabel: string;
  sourceConfidenceLabel: string;
  coordinateLabel: "Not guessed" | "Location being checked" | "Ready for map placement";
  officialSiteUrl: string;
  sourceLinks: Array<{
    label: string;
    url: string;
    typeLabel: string;
  }>;
  verificationNote: string;
  mappingNote: string;
  similar: Array<{
    id: string;
    slug: string;
    name: string;
    locationLabel: string;
  }>;
  seoKeywords: string[];
};

const publicStatusLabels: Record<string, string> = {
  confirmed_current: "Confirmed current",
  confirmed_upcoming: "Confirmed upcoming",
  date_pending: "Dates not announced yet",
  needs_review: "Source check in progress",
  historical_reference: "Historical / reference",
};

const publicSourceConfidenceLabels: Record<string, string> = {
  high: "High",
  medium: "Medium",
  low: "Needs more checking",
};

const publicCoordinateLabels: Record<string, PublicFestivalDetail["coordinateLabel"]> = {
  not_geocoded: "Not guessed",
  needs_review: "Location being checked",
  verified: "Ready for map placement",
};

export const publicFestivalSlugs = featuredFestivals.map((festival) => festivalSlug(festival));

export const publicFestivalDirectoryItems = featuredFestivals.map(toPublicFestivalDirectoryItem);
export const publicFeaturedFestivals = featuredFestivals.map(toPublicFeaturedFestival);

export function getPublicFestivalDetailBySlug(slug: string) {
  const festival = getFestivalBySlug(slug);

  if (!festival) {
    return undefined;
  }

  return toPublicFestivalDetail(festival);
}

export function toPublicFestivalDirectoryItem(festival: Festival): PublicFestivalDirectoryItem {
  const sceneTags = festival.categories.map(genreLabel);
  const locationLabel = formatLocation(festival);
  const dateLabel = festival.date_text;
  const status = publicStatusLabel(festival.verification_status);

  return {
    id: festival.festival_id,
    slug: festivalSlug(festival),
    name: festival.festival_name,
    locationLabel,
    regionLabel: festival.country,
    dateLabel,
    sceneTags,
    statusLabel: status,
    searchText: [festival.festival_name, locationLabel, festival.venue_name, dateLabel, status, ...sceneTags]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  };
}

export function toPublicFeaturedFestival(festival: Festival): PublicFeaturedFestival {
  return {
    id: festival.festival_id,
    slug: festivalSlug(festival),
    name: festival.festival_name,
    locationLabel: formatLocation(festival),
    dateLabel: festival.date_text,
    sceneTags: festival.categories.map(genreLabel),
    statusLabel: publicStatusLabel(festival.verification_status),
    summary: festival.atlas_summary,
    officialSiteUrl: festival.official_url,
  };
}

export function toPublicFestivalDetail(festival: Festival): PublicFestivalDetail {
  const similar = getSimilarFestivals(festival).map((candidate) => ({
    id: candidate.festival_id,
    slug: festivalSlug(candidate),
    name: candidate.festival_name,
    locationLabel: formatLocation(candidate),
  }));

  return {
    id: festival.festival_id,
    slug: festivalSlug(festival),
    name: festival.festival_name,
    summary: festival.atlas_summary,
    whyItMatters: festival.why_it_matters,
    locationLabel: formatLocation(festival),
    dateLabel: festival.date_text,
    venueLabel: festival.venue_name,
    sceneTags: festival.categories.map(genreLabel),
    statusLabel: publicStatusLabel(festival.verification_status),
    sourceConfidenceLabel: publicSourceConfidenceLabel(festival.source_confidence),
    coordinateLabel: publicCoordinateLabel(festival.geocoding_confidence),
    officialSiteUrl: festival.official_url,
    sourceLinks: festival.source_links.map((source) => ({
      label: source.label,
      url: source.url,
      typeLabel: publicSourceTypeLabel(source.type),
    })),
    verificationNote: festival.data_quality_notes,
    mappingNote: festival.map_notes,
    similar,
    seoKeywords: [festival.festival_name, ...festival.genres, ...festival.categories, festival.city, festival.country],
  };
}

function publicStatusLabel(status: string) {
  return publicStatusLabels[status] ?? "Source check in progress";
}

function publicSourceConfidenceLabel(confidence: string) {
  return publicSourceConfidenceLabels[confidence] ?? "Source check in progress";
}

function publicCoordinateLabel(confidence: string): PublicFestivalDetail["coordinateLabel"] {
  return publicCoordinateLabels[confidence] ?? "Location being checked";
}

function publicSourceTypeLabel(type: string) {
  const labels: Record<string, string> = {
    official_site: "Official site",
    official_source: "Official source",
    lineup_or_dates: "Lineup or dates source",
    venue_or_location: "Venue/location source",
  };

  return labels[type] ?? "Source link";
}
