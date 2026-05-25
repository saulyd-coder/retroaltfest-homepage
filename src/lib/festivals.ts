import seedData from "@/data/seed_festivals_10.json";

export type Festival = (typeof seedData.festivals)[number];

export const festivalSeed = seedData;
export const featuredFestivals = seedData.festivals;
export const sceneFilters = ["goth", "darkwave", "industrial", "post-punk", "synthpop", "EBM"];

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

export function formatLocation(festival: Festival) {
  return [festival.city, festival.state_region, festival.country].filter(Boolean).join(" · ");
}

export function statusLabel(status: string) {
  return status.replaceAll("_", " ");
}

export function mapPreviewLabel(festival: Festival) {
  const country = festival.country;

  if (country === "United States") return "USA";
  if (country === "United States / Canada") return "US / CA";
  if (country === "United Kingdom") return "UK";

  return country;
}
