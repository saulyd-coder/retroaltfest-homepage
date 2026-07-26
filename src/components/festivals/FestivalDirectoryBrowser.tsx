"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PublicFestivalDirectoryItem } from "@/lib/public-festivals";
import styles from "./FestivalDirectory.module.css";

type FestivalDirectoryBrowserProps = {
  festivals: PublicFestivalDirectoryItem[];
};

const preferredSceneOrder = ["Darkwave", "Goth", "Industrial", "Synthpop", "Post-punk", "Electronic", "Alternative"];

export function FestivalDirectoryBrowser({ festivals }: FestivalDirectoryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sceneFilter, setSceneFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const disclosureRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const syncDisclosure = () => {
      if (disclosureRef.current) {
        disclosureRef.current.dataset.disclosureReady = "true";
        disclosureRef.current.open = !mobileQuery.matches;
      }
    };

    syncDisclosure();
    mobileQuery.addEventListener("change", syncDisclosure);
    return () => mobileQuery.removeEventListener("change", syncDisclosure);
  }, []);

  const sceneOptions = useMemo(
    () =>
      Array.from(new Set(festivals.flatMap((festival) => festival.sceneTags))).sort((left, right) => {
        const leftRank = preferredSceneOrder.indexOf(left);
        const rightRank = preferredSceneOrder.indexOf(right);
        return (leftRank === -1 ? Number.POSITIVE_INFINITY : leftRank) -
          (rightRank === -1 ? Number.POSITIVE_INFINITY : rightRank) || left.localeCompare(right);
      }),
    [festivals],
  );

  const regionOptions = useMemo(
    () => Array.from(new Set(festivals.map((festival) => festival.regionLabel))).sort((a, b) => a.localeCompare(b)),
    [festivals],
  );

  const statusOptions = useMemo(
    () => Array.from(new Set(festivals.map((festival) => festival.statusLabel))).sort((a, b) => a.localeCompare(b)),
    [festivals],
  );

  const filteredFestivals = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return festivals.filter((festival) => {
      const matchesSearch = !normalizedSearch || festival.searchText.includes(normalizedSearch);
      const matchesScene = sceneFilter === "all" || festival.sceneTags.includes(sceneFilter);
      const matchesRegion = regionFilter === "all" || festival.regionLabel === regionFilter;
      const matchesStatus = statusFilter === "all" || festival.statusLabel === statusFilter;

      return matchesSearch && matchesScene && matchesRegion && matchesStatus;
    });
  }, [festivals, regionFilter, sceneFilter, searchQuery, statusFilter]);

  const activeFilters = [
    searchQuery ? { label: "Search", value: searchQuery } : null,
    sceneFilter !== "all" ? { label: "Scene", value: sceneFilter } : null,
    regionFilter !== "all" ? { label: "Region", value: regionFilter } : null,
    statusFilter !== "all" ? { label: "Status", value: statusFilter } : null,
  ].filter((filter): filter is { label: string; value: string } => filter !== null);
  const hasActiveFilters = activeFilters.length > 0;

  function resetFilters() {
    setSearchQuery("");
    setSceneFilter("all");
    setRegionFilter("all");
    setStatusFilter("all");
  }

  return (
    <section className={styles.directory} aria-labelledby="festival-directory-heading">
      <div className={styles.signalDivider} aria-hidden="true">
        <span />
        <b>RA / FILTER ARRAY</b>
        <span />
      </div>

      <div className={styles.controlPanel} data-active={hasActiveFilters ? "true" : "false"}>
        <div className={styles.controlHeading}>
          <div>
            <p className={styles.telemetry}>Search and filter the public atlas</p>
            <h2 id="festival-directory-heading">Festival directory</h2>
          </div>
          <div className={styles.controlState}>
            <span className={styles.stateMarker} aria-hidden="true">{hasActiveFilters ? "◆" : "◇"}</span>
            <span>{hasActiveFilters ? "FILTERS ACTIVE" : "NO FILTERS APPLIED"}</span>
          </div>
        </div>

        <details className={styles.filterDisclosure} open ref={disclosureRef}>
          <summary className={styles.filterSummary} aria-label="Filter festivals">
            <span>Filter festivals</span>
            <span className={styles.summaryState} aria-hidden="true">
              {hasActiveFilters ? `${activeFilters.length} ACTIVE` : "OPEN ARRAY"}
            </span>
          </summary>

          <div className={styles.disclosureContent}>
            <div className={styles.controls}>
              <label className={`${styles.control} ${styles.searchControl}`}>
                <span>Search by festival or location</span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search a name or city"
                />
              </label>

              <label className={styles.control}>
                <span>Scene</span>
                <select value={sceneFilter} onChange={(event) => setSceneFilter(event.target.value)}>
                  <option value="all">All scenes</option>
                  {sceneOptions.map((scene) => (
                    <option value={scene} key={scene}>
                      {scene}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.control}>
                <span>Region</span>
                <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
                  <option value="all">All regions</option>
                  {regionOptions.map((region) => (
                    <option value={region} key={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </label>

              <label className={styles.control}>
                <span>Status</span>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option value="all">All statuses</option>
                  {statusOptions.map((status) => (
                    <option value={status} key={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className={styles.filterReadout} aria-live="polite">
              <p className={styles.resultCount}>
                Showing {filteredFestivals.length} of {festivals.length} source-aware atlas records.
              </p>

              <div className={styles.filterChips} aria-label="Active filters">
                {hasActiveFilters ? (
                  activeFilters.map((filter) => (
                    <span key={filter.label}>
                      <b aria-hidden="true">■</b>
                      {filter.label}: {filter.value}
                    </span>
                  ))
                ) : (
                  <span>
                    <b aria-hidden="true">□</b>
                    Unfiltered directory
                  </span>
                )}
              </div>

              <button type="button" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          </div>
        </details>

        <p className={styles.mobileResultCount} aria-live="polite">
          Showing {filteredFestivals.length} of {festivals.length} source-aware atlas records.
        </p>
      </div>

      <div className={styles.resultsHeader}>
        <p className={styles.telemetry}>Source-aware atlas records</p>
        <span>{filteredFestivals.length} results</span>
      </div>

      <div className={styles.slabGrid}>
        {filteredFestivals.map((festival, index) => (
          <article className={styles.slab} key={festival.id}>
            <div className={styles.slabIndex} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </div>

            <div className={styles.slabBody}>
              <div className={styles.slabMeta}>
                <span>{festival.id}</span>
                <span>{festival.statusLabel}</span>
              </div>

              <h3>{festival.name}</h3>

              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>{festival.locationLabel}</dd>
                </div>
                <div>
                  <dt>Date</dt>
                  <dd>{festival.dateLabel}</dd>
                </div>
              </dl>

              <div className={styles.tags} aria-label={`Genres for ${festival.name}`}>
                {festival.sceneTags.slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link href={`/festivals/${festival.slug}`} aria-label={`View ${festival.name} atlas entry`}>
                View atlas entry <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredFestivals.length === 0 ? (
        <div className={styles.emptyState} role="status">
          <span aria-hidden="true">×</span>
          <p>No festivals match the current filters. Try a different search or reset the directory.</p>
          <button type="button" onClick={resetFilters}>
            Reset and show all festivals
          </button>
        </div>
      ) : null}
    </section>
  );
}
