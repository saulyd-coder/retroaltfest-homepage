"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { PublicFestivalDirectoryItem } from "@/lib/public-festivals";
import styles from "./FestivalDirectory.module.css";

type FestivalDirectoryBrowserProps = {
  festivals: PublicFestivalDirectoryItem[];
};

const preferredSceneOrder = ["Darkwave", "Goth", "Industrial", "Synthpop", "Post-punk", "Electronic", "Alternative"];
const MAX_COMPARE = 2;

export function FestivalDirectoryBrowser({ festivals }: FestivalDirectoryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sceneFilter, setSceneFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedFestivalIds, setSelectedFestivalIds] = useState<string[]>([]);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const disclosureRef = useRef<HTMLDetailsElement>(null);
  const comparisonHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);

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

  useEffect(() => {
    if (comparisonOpen) comparisonHeadingRef.current?.focus();
  }, [comparisonOpen]);

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

  const filteredFestivalIds = useMemo(
    () => new Set(filteredFestivals.map((festival) => festival.id)),
    [filteredFestivals],
  );
  const festivalById = useMemo(
    () => new Map(festivals.map((festival) => [festival.id, festival])),
    [festivals],
  );
  const selectedFestivals = selectedFestivalIds
    .map((festivalId) => festivalById.get(festivalId))
    .filter((festival): festival is PublicFestivalDirectoryItem => festival !== undefined);

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

  function toggleFestival(festivalId: string) {
    setSelectedFestivalIds((current) => {
      if (current.includes(festivalId)) {
        const next = current.filter((id) => id !== festivalId);
        if (comparisonOpen) {
          setComparisonOpen(false);
          requestAnimationFrame(() => resultsHeadingRef.current?.focus());
        }
        return next;
      }
      if (current.length >= MAX_COMPARE) return current;
      return [...current, festivalId];
    });
  }

  function removeFestival(festivalId: string) {
    setSelectedFestivalIds((current) => current.filter((id) => id !== festivalId));
    if (comparisonOpen) {
      setComparisonOpen(false);
      requestAnimationFrame(() => resultsHeadingRef.current?.focus());
    }
  }

  function clearComparison() {
    setSelectedFestivalIds([]);
    setComparisonOpen(false);
    requestAnimationFrame(() => resultsHeadingRef.current?.focus());
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
                  {sceneOptions.map((scene) => <option value={scene} key={scene}>{scene}</option>)}
                </select>
              </label>

              <label className={styles.control}>
                <span>Region</span>
                <select value={regionFilter} onChange={(event) => setRegionFilter(event.target.value)}>
                  <option value="all">All regions</option>
                  {regionOptions.map((region) => <option value={region} key={region}>{region}</option>)}
                </select>
              </label>

              <label className={styles.control}>
                <span>Status</span>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option value="all">All statuses</option>
                  {statusOptions.map((status) => <option value={status} key={status}>{status}</option>)}
                </select>
              </label>
            </div>

            <div className={styles.filterReadout} aria-live="polite">
              <p className={styles.resultCount}>Showing {filteredFestivals.length} of {festivals.length} source-aware atlas records.</p>
              <div className={styles.filterChips} aria-label="Active filters">
                {hasActiveFilters ? activeFilters.map((filter) => (
                  <span key={filter.label}><b aria-hidden="true">■</b>{filter.label}: {filter.value}</span>
                )) : <span><b aria-hidden="true">□</b>Unfiltered directory</span>}
              </div>
              <button type="button" onClick={resetFilters}>Reset filters</button>
            </div>
          </div>
        </details>

        <p className={styles.mobileResultCount} aria-live="polite">
          Showing {filteredFestivals.length} of {festivals.length} source-aware atlas records.
        </p>
      </div>

      <div className={styles.resultsHeader}>
        <h2 className={styles.telemetry} ref={resultsHeadingRef} tabIndex={-1}>Source-aware atlas records</h2>
        <span>{filteredFestivals.length} results</span>
      </div>

      {comparisonOpen && selectedFestivals.length === MAX_COMPARE ? (
        <section className={styles.comparePanel} aria-labelledby="festival-comparison-heading">
          <div className={styles.comparePanelHeading}>
            <div>
              <p className={styles.telemetry}>Two source-aware atlas records</p>
              <h2 id="festival-comparison-heading" ref={comparisonHeadingRef} tabIndex={-1}>Compare festivals</h2>
              <p>Review the published facts together. RetroAltFest does not rank or choose between festivals.</p>
            </div>
            <button type="button" className={styles.returnToResults} onClick={() => resultsHeadingRef.current?.focus()}>Return to results</button>
          </div>

          <div className={styles.comparisonGrid}>
            {selectedFestivals.map((festival) => (
              <article className={styles.comparisonFestival} key={festival.id}>
                <div className={styles.comparisonIdentity}>
                  <h3>{festival.name}</h3>
                  {!filteredFestivalIds.has(festival.id) ? <span>Not in current results</span> : null}
                </div>
                <dl>
                  <div><dt>Location</dt><dd>{festival.locationLabel}</dd></div>
                  <div><dt>Published dates</dt><dd>{festival.dateLabel}</dd></div>
                  <div><dt>Venue</dt><dd>{festival.venueLabel}</dd></div>
                  <div><dt>Scenes</dt><dd>{festival.sceneTags.join(" · ")}</dd></div>
                  <div><dt>Status</dt><dd>{festival.statusLabel}</dd></div>
                  <div><dt>Source confidence</dt><dd>{festival.sourceConfidenceLabel}</dd></div>
                  <div><dt>About</dt><dd>{festival.summary}</dd></div>
                </dl>
                <div className={styles.comparisonActions}>
                  <Link href={`/festivals/${festival.slug}`} aria-label={`View ${festival.name} atlas entry`}>
                    View {festival.name} atlas entry <span aria-hidden="true">↗</span>
                  </Link>
                  <button type="button" onClick={() => removeFestival(festival.id)} aria-label={`Remove ${festival.name} from comparison`}>Remove</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className={styles.slabGrid}>
        {filteredFestivals.map((festival, index) => {
          const selected = selectedFestivalIds.includes(festival.id);
          const atCapacity = !selected && selectedFestivalIds.length >= MAX_COMPARE;

          return (
            <article className={styles.slab} key={festival.id} data-compare-selected={selected ? "true" : "false"}>
              <div className={styles.slabIndex} aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <div className={styles.slabBody}>
                <div className={styles.slabMeta}><span>{festival.id}</span><span>{festival.statusLabel}</span></div>
                <label className={styles.compareControl} data-selected={selected ? "true" : "false"}>
                  <input
                    type="checkbox"
                    checked={selected}
                    disabled={atCapacity}
                    onChange={() => toggleFestival(festival.id)}
                    aria-label={`Compare ${festival.name}`}
                  />
                  <span>{selected ? "Selected to compare" : atCapacity ? "Remove one selection first" : "Add to compare"}</span>
                </label>
                <h3>{festival.name}</h3>
                <dl>
                  <div><dt>Location</dt><dd>{festival.locationLabel}</dd></div>
                  <div><dt>Date</dt><dd>{festival.dateLabel}</dd></div>
                </dl>
                <div className={styles.tags} aria-label={`Genres for ${festival.name}`}>
                  {festival.sceneTags.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link href={`/festivals/${festival.slug}`} aria-label={`View ${festival.name} atlas entry`}>
                  View atlas entry <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {filteredFestivals.length === 0 ? (
        <div className={styles.emptyState} role="status">
          <span aria-hidden="true">×</span>
          <p>No festivals match the current filters. Try a different search or reset the directory.</p>
          <button type="button" onClick={resetFilters}>Reset and show all festivals</button>
        </div>
      ) : null}

      {selectedFestivals.length > 0 ? (
        <aside className={styles.compareTray} aria-label="Festival comparison selection">
          <div>
            <p role="status" aria-live="polite" aria-atomic="true">
              {selectedFestivals.length === 1 ? "1 of 2 selected" : "2 of 2 selected"}
            </p>
            <ul>
              {selectedFestivals.map((festival) => (
                <li key={festival.id}>
                  <span>{festival.name}{!filteredFestivalIds.has(festival.id) ? " — Not in current results" : ""}</span>
                  <button type="button" onClick={() => removeFestival(festival.id)} aria-label={`Remove ${festival.name} from comparison`}>Remove</button>
                </li>
              ))}
            </ul>
            {selectedFestivals.length >= MAX_COMPARE ? <small>Remove one festival to compare another.</small> : <small>Select one more festival to compare.</small>}
          </div>
          <div className={styles.trayActions}>
            <button type="button" className={styles.compareButton} disabled={selectedFestivals.length !== MAX_COMPARE} onClick={() => setComparisonOpen(true)}>
              Compare 2 festivals
            </button>
            <button type="button" className={styles.clearCompare} onClick={clearComparison}>Clear comparison</button>
          </div>
        </aside>
      ) : null}
    </section>
  );
}
