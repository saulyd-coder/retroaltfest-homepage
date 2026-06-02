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
    "A curated, source-aware RetroAltFest guide to North American industrial, EBM, dark electronic, synth, post-industrial, and darkwave-overlap festival signals.",
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
  recordType: "city_level" | "content_only" | "multi_city_parent" | "historical_reference" | "bridge_overlap";
  industrialEbmRelevance: string;
  contentRole: "core_anchor" | "caveated_candidate" | "multi_city_parent" | "historical_reference" | "bridge_overlap";
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
    contentRole: "core_anchor",
    sceneFit: "Industrial, EBM-adjacent, dark electronic, post-industrial, and post-punk-adjacent.",
    statusLabel: "core anchor / source-backed",
    summary:
      "Cold Waves gives this guide its clearest industrial center of gravity, connecting dark electronic discovery to Chicago’s industrial and post-industrial lineage.",
    sourceCaveat:
      "Keep the guide copy focused on its industrial and dark electronic role; deeper event details need their own verification pass before publication.",
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
    contentRole: "core_anchor",
    sceneFit: "Darkwave, EBM, industrial, synth, and post-punk.",
    statusLabel: "core anchor / source-backed",
    summary:
      "Terminus Festival gives the page a Canadian anchor and reflects how industrial, EBM, synth, darkwave, and post-punk often overlap in real festival programming.",
    sourceCaveat:
      "Use city-level context only for this first draft; deeper logistics belong in a later source check, not this article packet.",
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
    mapDisplayCategory: "date_pending",
    recordType: "content_only",
    industrialEbmRelevance: "Strong industrial and dark electronic fit with current-status caveat.",
    contentRole: "caveated_candidate",
    sceneFit: "Industrial, EBM, dark electro, and dark electronic.",
    statusLabel: "caveated candidate / date-pending / content-only",
    summary:
      "Mechanismus has the right genre center for this guide and is strongly tied to industrial and dark electronic scene-building in Seattle.",
    sourceCaveat:
      "Current-cycle confidence needs a cleaner source pass before this becomes a current or map-forward record.",
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
    mapDisplayCategory: "needs_review",
    recordType: "multi_city_parent",
    industrialEbmRelevance: "Industrial-adjacent dark electronic and Pacific Northwest corridor signal.",
    contentRole: "multi_city_parent",
    sceneFit: "Darkwave, post-punk, synth, industrial-overlap, goth, and dark electronic.",
    statusLabel: "multi_city_parent / needs child-location cleanup before map use",
    summary:
      "Verboden belongs here as a dark electronic and industrial-overlap corridor signal, not as a pure industrial/EBM anchor.",
    sourceCaveat:
      "Treat Verboden as a parent record until each child location has its own source-validated record.",
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
    verificationStatus: "historical_reference",
    mapDisplayCategory: "historical_reference",
    recordType: "historical_reference",
    industrialEbmRelevance: "Goth/industrial historical-overlap reference.",
    contentRole: "historical_reference",
    sceneFit: "Goth, industrial, dark alternative, and metal-adjacent.",
    statusLabel: "historical/reference / needs-review",
    summary:
      "Dark Force Fest has real goth and industrial relevance, but it should remain a context record unless a fresh future edition is verified.",
    sourceCaveat:
      "Do not present this record as a current industrial/EBM anchor in this version.",
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
    recordType: "bridge_overlap",
    industrialEbmRelevance: "Electronic/goth-darkwave bridge; not core Industrial/EBM.",
    contentRole: "bridge_overlap",
    sceneFit: "Electronic, post-punk, goth, and darkwave.",
    statusLabel: "overlap / bridge only",
    summary:
      "Absolution Fest helps explain the overlap between darkwave, electronic, goth, and post-punk discovery, but it is not a core Industrial/EBM anchor.",
    sourceCaveat:
      "Keep this mention light so the page stays distinct from the existing Goth & Darkwave guide.",
  },
];

const statusLabels = [
  {
    label: "core anchor",
    description: "A record with strong source support and a clear industrial, EBM, or dark electronic center of gravity.",
  },
  {
    label: "caveated candidate",
    description: "A relevant scene candidate with current-status or data-readiness caveats still visible.",
  },
  {
    label: "overlap / bridge",
    description: "A record that mainly belongs to another dark alternative lane but helps explain genre overlap.",
  },
  {
    label: "multi_city_parent",
    description: "A multi-location parent record that should not be simplified into one atlas location before child records exist.",
  },
  {
    label: "historical/reference",
    description: "A meaningful scene record used for context rather than as a current anchor.",
  },
  {
    label: "needs_review",
    description: "A record with source or status uncertainty that needs another verification pass before deeper atlas use.",
  },
  {
    label: "excluded for now",
    description: "A researched candidate intentionally left out of public V1 because source confidence is not strong enough.",
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
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Source-aware guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Industrial, EBM &amp; Dark Electronic Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              RetroAltFest tracks North American industrial, EBM, dark electronic, synth, post-industrial, and darkwave-overlap festival signals through official and source-aware records.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This is a curated first draft, not a full directory. Core anchors are separated from caveated candidates, bridge records, historical references, and researched names held back from public V1.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Public records" value={`${allPublicRecords.length} source-aware examples`} />
              <AtlasFact label="Core anchors" value="Cold Waves · Terminus" />
              <AtlasFact label="Scope" value="Industrial / EBM / dark electronic" />
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Core industrial / dark electronic anchors"
          title="Two records carry the strongest signal for this first version."
          description="Cold Waves and Terminus are the cleanest anchors for a source-aware Industrial, EBM & Dark Electronic guide. They are the only records eligible for a later city-level map QA pass."
          records={coreAnchors}
        />

        <GuideSection
          eyebrow="Useful candidates with caveats"
          title="Strong scene fit, but labels stay visible."
          description="Mechanismus and Verboden are useful to readers, but each needs visible caveats before deeper atlas use."
          records={caveatedCandidates}
        />

        <GuideSection
          eyebrow="Historical/reference and overlap records"
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
            Triton Festival was researched but is excluded from public V1 pending stronger source and status confidence. It should not appear as a public festival card or supporting example until a later verification pass improves confidence.
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
            This guide will expand only as more North American industrial, EBM, dark electronic, and post-industrial festival records become source-backed enough to publish. RetroAltFest’s goal is not to inflate the list quickly; it is to keep core anchors, overlap records, historical signals, and deeper atlas readiness clearly separated.
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
        <span className="font-semibold text-white">Source-aware caveat: </span>{record.sourceCaveat}
      </p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <AtlasFact label="Verification" value={statusLabel(record.verificationStatus)} />
        <AtlasFact label="Display category" value={statusLabel(record.mapDisplayCategory)} />
        <AtlasFact label="Content role" value={statusLabel(record.contentRole)} />
        <AtlasFact label="Record type" value={statusLabel(record.recordType)} />
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

function statusLabel(status: string) {
  return status
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
