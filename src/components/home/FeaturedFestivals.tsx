import Link from "next/link";
import { publicFeaturedFestivals } from "@/lib/public-festivals";
import { FestivalCard } from "./FestivalCard";
import { SceneChips } from "./SceneChips";

export function FeaturedFestivals() {
  return (
    <section id="festivals" className="mx-auto max-w-7xl px-5 py-16 max-[430px]:px-[16px] sm:px-8">
      <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-magenta)]">Featured festivals</p>
          <h2 className="mt-3 min-w-0 max-w-full font-display text-4xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] [word-break:normal] sm:text-5xl">Start with 15 curated festivals.</h2>
        </div>
        <p className="max-w-xl text-[var(--raf-text-muted)]">
          Built for fewer dead ends. This homepage is wired to a public-safe festival layer and ready to expand into directory pages, filters, and a careful travel atlas.
        </p>
      </div>

      <SceneChips />

      <Link
        href="/guides"
        className="mb-6 grid min-w-0 max-w-full gap-4 rounded-[1.75rem] border border-[var(--raf-border-soft)] bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(34,211,238,0.08),rgba(0,0,0,0.34))] p-5 transition duration-300 max-[430px]:p-[16px] hover:-translate-y-1 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--raf-cyan)] md:grid-cols-[1fr_auto] md:items-center"
      >
        <span className="min-w-0 max-w-full [overflow-wrap:anywhere] [word-break:normal]">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--raf-cyan)]">Curated scene guides</span>
          <span className="mt-2 block min-w-0 max-w-full font-display text-3xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] [word-break:normal]">Explore RetroAltFest Guides</span>
          <span className="mt-2 block min-w-0 max-w-3xl text-sm leading-6 text-[var(--raf-text-muted)] [overflow-wrap:anywhere] [word-break:normal]">
            Start with curated guides for regional West Coast / PNW discovery, goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festival paths.
          </span>
          <span className="mt-4 flex flex-wrap gap-2">
            {[
              "West Coast / PNW",
              "Goth & Darkwave",
              "Industrial / EBM",
              "New Wave / Post-Punk",
            ].map((label) => (
              <span key={label} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-[var(--raf-text)]">
                {label}
              </span>
            ))}
          </span>
        </span>
        <span className="inline-flex min-w-0 max-w-full items-center font-mono text-xs uppercase tracking-[0.24em] text-white [overflow-wrap:anywhere] [word-break:normal]">
          Browse guides <span aria-hidden="true" className="ml-2">→</span>
        </span>
      </Link>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {publicFeaturedFestivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </section>
  );
}
