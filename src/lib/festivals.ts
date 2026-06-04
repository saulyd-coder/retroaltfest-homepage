import seedData from "@/data/seed_festivals_10.json";

export type Festival = (typeof seedData.festivals)[number];
export type FestivalDirectoryRecord = Pick<
  Festival,
  | "record_id"
  | "festival_id"
  | "slug"
  | "festival_name"
  | "city"
  | "state_region"
  | "country"
  | "venue_name"
  | "date_text"
  | "genres"
  | "categories"
  | "verification_status"
>;

export const festivalSeed = seedData;
export const featuredFestivals = seedData.festivals;
export const festivalDirectoryRecords: FestivalDirectoryRecord[] = featuredFestivals.map(
  ({
    record_id,
    festival_id,
    slug,
    festival_name,
    city,
    state_region,
    country,
    venue_name,
    date_text,
    genres,
    categories,
    verification_status,
  }) => ({
    record_id,
    festival_id,
    slug,
    festival_name,
    city,
    state_region,
    country,
    venue_name,
    date_text,
    genres,
    categories,
    verification_status,
  }),
);
export const categoryFilters = ["darkwave", "goth", "industrial", "synthpop", "post-punk", "EDM", "alternative"];
export const sceneFilters = categoryFilters;

export const homepageStats = [
  { label: "Curated records", value: seedData.metadata.record_count.toString() },
  { label: "Source confidence", value: "High" },
  { label: "Coordinates", value: "Not guessed" },
];

export function festivalSlug(festival: Pick<Festival, "slug" | "festival_id">) {
  return festival.slug || festival.festival_id;
}

export function getFestivalBySlug(slug: string) {
  return featuredFestivals.find((festival) => festivalSlug(festival) === slug);
}

export function getSimilarFestivals(festival: Festival, limit = 3) {
  const preferredIds = new Set(festival.similar_festival_ids);
  const preferred = featuredFestivals.filter((candidate) => preferredIds.has(candidate.festival_id));

  if (preferred.length >= limit) {
    return preferred.slice(0, limit);
  }

  const fallback = featuredFestivals
    .filter((candidate) => candidate.festival_id !== festival.festival_id && !preferredIds.has(candidate.festival_id))
    .map((candidate) => ({
      festival: candidate,
      score:
        candidate.genres.filter((genre) => festival.genres.includes(genre)).length +
        (candidate.country === festival.country ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .map(({ festival: candidate }) => candidate);

  return [...preferred, ...fallback].slice(0, limit);
}

export function formatLocation(festival: Pick<Festival, "city" | "state_region" | "country">) {
  return [festival.city, festival.state_region, festival.country].filter(Boolean).join(" · ");
}

export function statusLabel(status: string) {
  return status
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function genreLabel(genre: string) {
  const normalized = genre.trim();
  const knownLabels: Record<string, string> = {
    ebm: "EBM",
    synthpop: "Synthpop",
    "post-punk": "Post-punk",
    darkwave: "Darkwave",
    goth: "Goth",
    industrial: "Industrial",
    synth: "Synth",
    edm: "EDM",
    alternative: "Alternative",
    "dark alternative": "Dark alternative",
    "underground alternative": "Underground alternative",
  };

  return knownLabels[normalized.toLowerCase()] || normalized.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function mapPreviewLabel(festival: Festival) {
  const country = festival.country;

  if (country === "United States") return "USA";
  if (country === "United States / Canada") return "US / CA";
  if (country === "United Kingdom") return "UK";

  return country;
}
