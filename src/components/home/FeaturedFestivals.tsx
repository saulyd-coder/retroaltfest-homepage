import { featuredFestivals } from "@/lib/festivals";
import { FestivalCard } from "./FestivalCard";
import { SceneChips } from "./SceneChips";

export function FeaturedFestivals() {
  return (
    <section id="festivals" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-magenta)]">Featured festivals</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Start with 10 curated festivals.</h2>
        </div>
        <p className="max-w-xl text-[var(--raf-text-muted)]">
          Built for fewer dead ends. This homepage is wired to the initial JSON dataset and ready to expand into directory pages, filters, and a live map.
        </p>
      </div>

      <SceneChips />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredFestivals.map((festival) => (
          <FestivalCard key={festival.record_id} festival={festival} />
        ))}
      </div>
    </section>
  );
}
