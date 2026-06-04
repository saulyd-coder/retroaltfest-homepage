import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";

export const metadata: Metadata = buildMetadata({
  title: "Industrial, EBM & Dark Electronic Festivals in North America | RetroAltFest",
  description:
    "A curated RetroAltFest guide to North American industrial, EBM, dark electronic, synth, post-industrial, and darkwave-overlap festival signals, checked against official or reliable sources.",
  path: pagePath,
  type: "article",
  keywords: [
    "industrial festivals North America",
    "EBM festivals",
    "dark electronic festivals",
    "post-industrial festivals",
    "dark alternative festivals",
  ],
});

type GuideRecord = {
  festivalName: string;
  slug: string;
  city: string;
  region: string;
  country: string;
  genreTags: string[];
  officialUrl: string;
  verificationStatus: string;
  mapDisplayCategory: string;
  recordType: "city_level" | "content_only" | "multi_city_parent" | "contextual_reference" | "scene_overlap";
  industrialEbmRelevance: string;
  contentRole: "strong_guide_fit" | "useful_candidate" | "multi_city_parent" | "contextual_reference" | "scene_overlap";
  sceneFit: string;
  statusLabel: string;
  summary: string;
  sourceCaveat: string;
};

const coreAnchors: GuideRecord[] = [
  {
    festivalName: "Cold Waves",
    slug: "cold-waves",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    genreTags: ["industrial", "EBM-adjacent", "dark electronic", "post-industrial"],
    officialUrl: "https://coldwaves.net/",
    verificationStatus: "verified",
    mapDisplayCategory: "confirmed_upcoming",
    recordType: "city_level",
    industrialEbmRelevance: "Core industrial and dark electronic anchor.",
    contentRole: "strong_guide_fit",
    sceneFit: "Industrial, EBM-adjacent, dark electronic, post-industrial, and post-punk-adjacent.",
    statusLabel: "A strong fit for this guide",
    summary:
      "Cold Waves gives this guide its clearest industrial center of gravity, connecting dark electronic discovery to Chicago’s industrial and post-industrial lineage.",
    sourceCaveat:
      "Official sources support this listing. Deeper event details should get their own source check before appearing here.",
  },
  {
    festivalName: "Terminus Festival",
    slug: "terminus-festival",
    city: "Calgary",
    region: "Alberta",
    country: "Canada",
    genreTags: ["darkwave", "EBM", "industrial", "synth", "post-punk"],
    officialUrl: "https://terminus-festival.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "confirmed_upcoming",
    recordType: "city_level",
    industrialEbmRelevance: "Core/near-core EBM, industrial, and darkwave anchor.",
    contentRole: "strong_guide_fit",
    sceneFit: "Darkwave, EBM, industrial, synth, and post-punk.",
    statusLabel: "A strong fit for this guide",
    summary:
      "Terminus Festival gives the page a Canadian anchor and reflects how industrial, EBM, synth, darkwave, and post-punk often overlap in real festival programming.",
    sourceCaveat:
      "Official sources support the city-level context. Logistics and venue-level details need a separate source check before future map placement.",
  },
];

const caveatedCandidates: GuideRecord[] = [
  {
    festivalName: "Mechanismus",
    slug: "mechanismus",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    genreTags: ["industrial", "EBM", "dark electro", "dark electronic"],
    officialUrl: "https://www.mechanismus.net/",
    verificationStatus: "partially_verified",
    mapDisplayCategory: "dates_not_announced",
    recordType: "content_only",
    industrialEbmRelevance: "Strong industrial and dark electronic fit with current-status caveat.",
    contentRole: "useful_candidate",
    sceneFit: "Industrial, EBM, dark electro, and dark electronic.",
    statusLabel: "Worth watching — dates not announced yet",
    summary:
      "Mechanismus has the right genre center for this guide and is strongly tied to industrial and dark electronic scene-building in Seattle.",
    sourceCaveat:
      "Worth watching, with a few current-cycle details still being checked. For now, it belongs in the guide rather than on the future map.",
  },
  {
    festivalName: "Verboden Music Festival",
    slug: "verboden-music-festival",
    city: "multi-city",
    region: "BC / OR / WA",
    country: "Canada / United States",
    genreTags: ["darkwave", "post-punk", "synth", "industrial-overlap", "goth", "dark electronic"],
    officialUrl: "https://verbodenfestival.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "details_being_checked",
    recordType: "multi_city_parent",
    industrialEbmRelevance: "Industrial-adjacent dark electronic and Pacific Northwest corridor signal.",
    contentRole: "multi_city_parent",
    sceneFit: "Darkwave, post-punk, synth, industrial-overlap, goth, and dark electronic.",
    statusLabel: "Multi-city festival",
    summary:
      "Verboden belongs here as a dark electronic and industrial-overlap corridor signal, not as a pure industrial/EBM anchor.",
    sourceCaveat:
      "This festival spans multiple cities, so we’re still checking the city-by-city details before treating it as map-ready.",
  },
];

const referenceRecords: GuideRecord[] = [
  {
    festivalName: "Dark Force Fest",
    slug: "dark-force-fest",
    city: "Parsippany",
    region: "New Jersey",
    country: "United States",
    genreTags: ["goth", "industrial", "dark alternative", "metal-adjacent"],
    officialUrl: "https://darkforcefest.com/",
    verificationStatus: "contextual_reference",
    mapDisplayCategory: "contextual_reference",
    recordType: "contextual_reference",
    industrialEbmRelevance: "Goth/industrial historical-overlap reference.",
    contentRole: "contextual_reference",
    sceneFit: "Goth, industrial, dark alternative, and metal-adjacent.",
    statusLabel: "Background/reference listing",
    summary:
      "Dark Force Fest has real goth and industrial relevance, but it should remain a context record unless a fresh future edition is verified.",
    sourceCaveat:
      "Useful background for the scene, but not currently confirmed as an upcoming industrial or EBM anchor.",
  },
  {
    festivalName: "Absolution Fest",
    slug: "absolution-fest",
    city: "Tampa",
    region: "Florida",
    country: "United States",
    genreTags: ["electronic", "post-punk", "goth", "darkwave"],
    officialUrl: "https://www.absolutionfest.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "not_map_ready",
    recordType: "scene_overlap",
    industrialEbmRelevance: "Electronic/goth-darkwave bridge; not core Industrial/EBM.",
    contentRole: "scene_overlap",
    sceneFit: "Electronic, post-punk, goth, and darkwave.",
    statusLabel: "Related festival to know",
    summary:
      "Absolution Fest helps explain the overlap between darkwave, electronic, goth, and post-punk discovery, but it is not a core Industrial/EBM anchor.",
    sourceCaveat:
      "This is included for context as a related dark-scene connection, not as a core Industrial or EBM example.",
  },
];

const statusLabels = [
  {
    label: "A strong fit for this guide",
    description: "A festival with strong source support and a clear industrial, EBM, or dark electronic center of gravity.",
  },
  {
    label: "Worth watching",
    description: "A relevant scene candidate with details still being checked.",
  },
  {
    label: "Related festival to know",
    description: "A festival that mainly belongs to another dark alternative lane but helps explain genre overlap.",
  },
  {
    label: "Multi-city festival",
    description: "A festival that spans multiple cities and needs city-by-city review before future map use.",
  },
  {
    label: "Background/reference listing",
    description: "A meaningful scene record used for context rather than as a current anchor.",
  },
  {
    label: "Still checking details",
    description: "A record with source or status uncertainty that needs another verification pass before deeper use.",
  },
  {
    label: "Not included yet",
    description: "A researched candidate left out of this first guide because source confidence is not strong enough.",
  },
];

const allPublicRecords = [...coreAnchors, ...caveatedCandidates, ...referenceRecords];

export default function IndustrialEbmDarkElectronicGuidePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-42 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      <Header />

      <article className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16">
        <nav className="mb-8 font-mono text-xs uppercase tracking-[0.24em] text-[var(--raf-text-dim)]" aria-label="Breadcrumb">
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/">
            RetroAltFest
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <span className="text-[var(--raf-text-muted)]">Guides</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Industrial, EBM &amp; Dark Electronic Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              Start here for North American festivals where industrial, EBM, dark electronic, synth, post-industrial, and darkwave-overlap scenes come into focus.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This is a curated starting point, not a full directory. We separate currently confirmed examples from useful leads, related scene connections, background listings, and names that still need stronger sources.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide records" value={`${allPublicRecords.length} checked examples`} />
              <AtlasFact label="Strongest fits" value="Cold Waves · Terminus" />
              <AtlasFact label="Scope" value="Industrial / EBM / dark electronic" />
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Strong industrial / dark electronic fits"
          title="Two records carry the clearest signal for this first guide."
          description="Cold Waves and Terminus are the clearest fits here. They are the only records in this guide ready for a later city-level map review, once location details are verified."
          records={coreAnchors}
        />

        <GuideSection
          eyebrow="Useful candidates with caveats"
          title="Strong scene fit, with details still clearly marked."
          description="Mechanismus and Verboden are useful to readers, but each still needs plain-language caveats before deeper atlas or map use."
          records={caveatedCandidates}
        />

        <GuideSection
          eyebrow="Background and related listings"
          title="Context records, not core Industrial/EBM anchors."
          description="These records help explain the wider dark alternative ecosystem while keeping this guide distinct from the Goth & Darkwave page."
          records={referenceRecords}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Held back from this version</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Triton Festival is excluded for now.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            Triton Festival was researched but is not included in this first guide because the source and status confidence are not strong enough yet. It should stay out of public festival cards until a later verification pass improves confidence.
          </p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Guide labels</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels this guide
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {statusLabels.map((status) => (
              <div key={status.label} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
                <h3 className="font-display text-xl font-semibold text-white">{status.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--raf-text-muted)]">{status.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Related paths</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Follow the overlap without blurring the labels.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            This guide pairs with the existing Goth & Darkwave guide while keeping Industrial, EBM, and dark electronic discovery distinct.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className="raf-button-primary px-5 py-3 text-sm font-black text-[#050507]" href="/festivals">
              Browse the festival atlas
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-black/25 p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Closing note</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The industrial atlas expands only as sources hold.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            This guide will expand only as more North American industrial, EBM, dark electronic, and post-industrial festivals have enough official or reliable source support to publish. RetroAltFest’s goal is not to inflate the list quickly; it is to keep confirmed festivals, related records, background listings, and future map candidates clearly separated.
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}

function GuideSection({
  eyebrow,
  title,
  description,
  records,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
}) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 leading-8 text-[var(--raf-text-muted)]">{description}</p>
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        {records.map((record) => (
          <FestivalGuideCard key={record.slug} record={record} />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({ record }: { record: GuideRecord }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-[var(--raf-border-soft)] bg-[linear-gradient(180deg,rgba(17,12,30,0.82),rgba(4,4,8,0.9))] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.045] sm:p-6">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--raf-text-dim)]">
            {record.city} · {record.region} · {record.country}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">{record.festivalName}</h3>
        </div>
        <span className="max-w-full rounded-full border border-[var(--raf-border)] bg-white/[0.055] px-3 py-1 text-right font-mono text-[11px] font-semibold leading-5 text-[var(--raf-cyan)] sm:max-w-[18rem]">
          {record.statusLabel}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-white">Scene fit: {record.sceneFit}</p>
      <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{record.summary}</p>
      <p className="mt-4 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Curator note: </span>{record.sourceCaveat}
      </p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <AtlasFact label="What we’ve confirmed" value={confirmedNote(record)} />
        <AtlasFact label="What we’re still checking" value={checkingNote(record)} />
      </dl>

      <p className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Industrial / EBM relevance: </span>{record.industrialEbmRelevance}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.genreTags.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <a className="mt-5 inline-flex break-words text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.officialUrl} target="_blank" rel="noreferrer">
        Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
      </a>
    </article>
  );
}

function AtlasFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-white">{value}</p>
    </div>
  );
}

function confirmedNote(record: GuideRecord) {
  if (record.verificationStatus === "verified") {
    return "Official or reliable sources support this listing.";
  }

  if (record.verificationStatus === "contextual_reference") {
    return "Useful background for the scene, but not currently confirmed as upcoming.";
  }

  return "Some details are confirmed, but the current festival cycle still needs a cleaner source check.";
}

function checkingNote(record: GuideRecord) {
  if (record.recordType === "multi_city_parent") {
    return "We’re still checking city-by-city details before treating this as map-ready.";
  }

  if (record.mapDisplayCategory === "dates_not_announced") {
    return "Dates have not been announced yet.";
  }

  if (record.mapDisplayCategory === "not_map_ready") {
    return "Ready to mention in the guide, but not ready for the future map yet.";
  }

  if (record.mapDisplayCategory === "contextual_reference") {
    return "Fresh current-status confirmation is needed before this becomes a current listing.";
  }

  return "Venue-level map placement waits until location details are verified.";
}
