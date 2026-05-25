"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Festival, festivalSlug, formatLocation, statusLabel } from "@/lib/festivals";

type FestivalDirectoryBrowserProps = {
  festivals: Festival[];
};

const allOption = "all";

export function FestivalDirectoryBrowser({ festivals }: FestivalDirectoryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sceneFilter, setSceneFilter] = useState(allOption);
  const [regionFilter, setRegionFilter] = useState(allOption);
  const [statusFilter, setStatusFilter] = useState(allOption);

  const scenes = useMemo(() => uniqueSorted(festivals.flatMap((festival) => festival.genres)), [festivals]);
  const regions = useMemo(() => uniqueSorted(festivals.map((festival) => festival.country)), [festivals]);
  const statuses = useMemo(() => uniqueSorted(festivals.map((festival) => festival.verification_status)), [festivals]);

  const filteredFestivals = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return festivals.filter((festival) => {
      const searchableText = [
        festival.festival_name,
        festival.city,
        festival.state_region,
        festival.country,
        festival.venue_name,
        festival.date_text,
        ...festival.genres,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = query.length === 0 || searchableText.includes(query);
      const matchesScene = sceneFilter === allOption || festival.genres.includes(sceneFilter);
      const matchesRegion = regionFilter === allOption || festival.country === regionFilter;
      const matchesStatus = statusFilter === allOption || festival.verification_status === statusFilter;

      return matchesSearch && matchesScene && matchesRegion && matchesStatus;
    });
  }, [festivals, regionFilter, sceneFilter, searchQuery, statusFilter]);

  function resetFilters() {
    setSearchQuery("");
    setSceneFilter(allOption);
    setRegionFilter(allOption);
    setStatusFilter(allOption);
  }

  return (
    <section className="relative mt-10">
      <div className="rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(24,17,39,0.72),rgba(5,5,9,0.86))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.34)] sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_13rem_13rem_13rem]">
          <label className="block">
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Search by festival or location</span>
            <input
              className="w-full rounded-2xl border border-[var(--raf-border-soft)] bg-black/35 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--raf-text-dim)] focus:border-[var(--raf-cyan)]/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Try Leipzig, industrial, Chicago..."
            />
          </label>

          <FilterSelect label="Scene" value={sceneFilter} onChange={setSceneFilter} options={scenes} allLabel="All scenes" />
          <FilterSelect label="Region" value={regionFilter} onChange={setRegionFilter} options={regions} allLabel="All regions" />
          <FilterSelect label="Status" value={statusFilter} onChange={setStatusFilter} options={statuses} allLabel="All statuses" formatOption={statusLabel} />
        </div>

        <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--raf-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing <span className="font-semibold text-white">{filteredFestivals.length}</span> of <span className="font-semibold text-white">{festivals.length}</span> curated atlas records.
          </p>
          <button className="self-start rounded-full border border-[var(--raf-border-soft)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-text-muted)] transition hover:border-[var(--raf-cyan)]/50 hover:text-white sm:self-auto" type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      </div>

      {filteredFestivals.length > 0 ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {filteredFestivals.map((festival) => (
            <article key={festival.record_id} className="group relative overflow-hidden rounded-3xl border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(35,24,57,0.66),rgba(8,7,14,0.9))] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/45 sm:p-6">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/35 to-[var(--raf-ultraviolet)]/25 opacity-70" />
              <div className="relative z-10 flex h-full flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-text-dim)]">{festival.record_id}</span>
                    <span className="rounded-full border border-[var(--raf-border-soft)] bg-[var(--raf-verified)]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--raf-verified)]">
                      {statusLabel(festival.verification_status)}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                    {festival.festival_name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--raf-text-muted)]">{formatLocation(festival)}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--raf-text-dim)]">{festival.date_text}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {festival.genres.slice(0, 5).map((genre) => (
                      <span key={genre} className="rounded-full border border-[var(--raf-border-soft)] bg-black/25 px-3 py-1 text-xs text-[var(--raf-text-muted)]">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <Link className="shrink-0 rounded-full border border-[var(--raf-border)] px-4 py-2 text-center font-mono text-xs uppercase tracking-[0.18em] text-[var(--raf-cyan)] transition hover:border-[var(--raf-cyan)]/60 hover:bg-[var(--raf-cyan)]/10 hover:text-white" href={`/festivals/${festivalSlug(festival)}`}>
                  View entry
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/30 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-white">No festivals match those filters.</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--raf-text-muted)]">Try a broader scene, region, status, or location search. The atlas is intentionally small while the source-checking loop stays careful.</p>
          <button className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-black text-[#050507] transition hover:bg-[var(--raf-cyan)]" type="button" onClick={resetFilters}>
            Show all festivals
          </button>
        </div>
      )}
    </section>
  );
}

function FilterSelect({
  label,
  value,
  options,
  allLabel,
  onChange,
  formatOption = (option) => option,
}: {
  label: string;
  value: string;
  options: string[];
  allLabel: string;
  onChange: (value: string) => void;
  formatOption?: (option: string) => string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{label}</span>
      <select
        className="w-full rounded-2xl border border-[var(--raf-border-soft)] bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--raf-cyan)]/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value={allOption}>{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {formatOption(option)}
          </option>
        ))}
      </select>
    </label>
  );
}

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}
