import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/north-american-goth-darkwave-festivals";

export const metadata: Metadata = buildMetadata({
  title: "North American Goth & Darkwave Festivals | RetroAltFest Guide",
  description:
    "A curated, source-aware guide to North American goth, darkwave, post-punk, industrial, synth, and adjacent alternative festivals.",
  path: pagePath,
  type: "article",
  keywords: [
    "North American goth festivals",
    "darkwave festivals",
    "post-punk festivals",
    "industrial festivals North America",
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
  recordType: "city_level" | "multi_city_parent" | "support_reference" | "adjacent_reference";
  sceneFit: string;
  statusLabel: string;
  summary: string;
  sourceCaveat: string;
};

const coreFestivals: GuideRecord[] = [
  {
    festivalName: "Absolution Fest",
    slug: "absolution-fest",
    city: "Tampa",
    region: "Florida",
    country: "United States",
    genreTags: ["goth", "darkwave", "post-punk", "electronic"],
    officialUrl: "https://www.absolutionfest.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "confirmed_upcoming",
    recordType: "city_level",
    sceneFit: "Goth, darkwave, post-punk, and electronic.",
    statusLabel: "Confirmed upcoming",
    summary:
      "Absolution Fest gives the guide a strong Southeast anchor while staying close to the center of RetroAltFest’s dark-scene focus.",
    sourceCaveat:
      "Use the official festival source as the publishing baseline; do not add schedule, venue, ticket, or address details unless separately verified.",
  },
  {
    festivalName: "A Murder of Crows",
    slug: "a-murder-of-crows",
    city: "New York City",
    region: "New York",
    country: "United States",
    genreTags: ["goth", "post-punk"],
    officialUrl: "http://www.amurderofcrowsfestival.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "confirmed_upcoming",
    recordType: "city_level",
    sceneFit: "Goth and post-punk.",
    statusLabel: "Confirmed upcoming",
    summary:
      "A Murder of Crows is a clean East Coast fit: focused, urban, and directly relevant to goth and post-punk discovery.",
    sourceCaveat:
      "Keep the record tied to official festival or organizer sources; do not add venue, ticket, or lineup claims beyond what the source supports.",
  },
  {
    festivalName: "Cold Waves",
    slug: "cold-waves",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    genreTags: ["industrial", "EBM", "dark electronic", "post-punk-adjacent"],
    officialUrl: "https://coldwaves.net/",
    verificationStatus: "verified",
    mapDisplayCategory: "confirmed_upcoming",
    recordType: "city_level",
    sceneFit: "Industrial, EBM, dark electronic, and post-punk-adjacent.",
    statusLabel: "Confirmed upcoming",
    summary:
      "Cold Waves brings industrial and dark electronic weight to the guide and gives the first packet a major Midwest anchor.",
    sourceCaveat:
      "Label it with industrial and dark electronic emphasis rather than forcing it into a pure goth or darkwave category.",
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
    sceneFit: "Darkwave, EBM, industrial, synth, and post-punk.",
    statusLabel: "Confirmed upcoming",
    summary:
      "Terminus Festival adds a strong Canadian darkwave and industrial signal, expanding the guide beyond a US-only view.",
    sourceCaveat:
      "Cite official or organizer-controlled sources; avoid address, logistics, or ticket prompts in this first guide draft.",
  },
];

const multiCityFestivals: GuideRecord[] = [
  {
    festivalName: "Verboden Music Festival",
    slug: "verboden-music-festival",
    city: "multi-city",
    region: "BC / OR / WA",
    country: "Canada / United States",
    genreTags: ["post-punk", "darkwave", "synth", "industrial", "goth", "dark electronic"],
    officialUrl: "https://verbodenfestival.com/",
    verificationStatus: "verified",
    mapDisplayCategory: "needs_review",
    recordType: "multi_city_parent",
    sceneFit: "Post-punk, darkwave, synth, industrial, goth, and dark electronic.",
    statusLabel: "source-backed multi-city parent / needs child-location cleanup before map use",
    summary:
      "Verboden is useful for the future atlas because it describes a Pacific Northwest and Western Canada dark-scene corridor rather than one simple location.",
    sourceCaveat:
      "Treat Verboden as a parent record. Child city records should wait until each city or location is source-validated.",
  },
];

const supportFestivals: GuideRecord[] = [
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
    recordType: "support_reference",
    sceneFit: "Goth, industrial, dark alternative, and metal-adjacent.",
    statusLabel: "Historical/reference / needs review",
    summary:
      "Dark Force Fest remains a valuable Northeast dark alternative signal, but this packet should not present it as a current upcoming listing.",
    sourceCaveat:
      "Keep it as historical or needs-review context until a fresh official active-edition confirmation exists.",
  },
  {
    festivalName: "Cruel World",
    slug: "cruel-world",
    city: "Pasadena",
    region: "California",
    country: "United States",
    genreTags: ["new wave", "post-punk", "goth-adjacent", "synthpop-adjacent", "alternative"],
    officialUrl: "https://cruelworldfest.com/",
    verificationStatus: "date_pending",
    mapDisplayCategory: "date_pending",
    recordType: "adjacent_reference",
    sceneFit: "New wave, post-punk, goth-adjacent, synthpop-adjacent, and alternative.",
    statusLabel: "Adjacent / date pending",
    summary:
      "Cruel World is a major adjacent gateway for the wider dark alternative audience, not a core underground goth/darkwave example.",
    sourceCaveat:
      "Do not describe it as confirmed upcoming unless a current official date is announced.",
  },
];

const statusLabels = [
  {
    label: "Confirmed upcoming",
    description: "Official or organizer-controlled sources support an active upcoming cycle.",
  },
  {
    label: "Date pending",
    description: "The festival is relevant, but no current upcoming date is confirmed from an acceptable source.",
  },
  {
    label: "Historical/reference",
    description: "The record has scene value but is being used for context, not as a current upcoming listing.",
  },
  {
    label: "Needs review",
    description: "Recurrence, timing, location model, or active status needs another verification pass before map use.",
  },
  {
    label: "Adjacent",
    description: "The event is relevant to dark alternative discovery but broader than the core goth/darkwave focus.",
  },
];

const allRecords = [...coreFestivals, ...multiCityFestivals, ...supportFestivals];

export default function NorthAmericanGothDarkwaveGuidePage() {
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
              North American Goth &amp; Darkwave Festivals: A Curated Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              RetroAltFest tracks dark festival discovery across North America with a source-aware lens: goth, darkwave, post-punk, synth, industrial, new wave, and adjacent alternative scenes are included only when records can be tied back to official or organizer-controlled sources.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This first draft is a curated starting point, not a hype list or exhaustive calendar. Status labels stay visible so confirmed, pending, historical, and adjacent records do not blur together.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Approved records" value={`${allRecords.length} source-aware examples`} />
              <AtlasFact label="Map discipline" value="No coordinates or geocoding" />
              <AtlasFact label="Scope" value="North America first" />
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Core confirmed/upcoming festivals"
          title="Four clean city-level examples for the first guide."
          description="These records are the strongest core examples for the initial article and later city-level directory workflow. Exact venue-level mapping is intentionally out of scope for this draft."
          records={coreFestivals}
        />

        <GuideSection
          eyebrow="Multi-city dark scene festivals to watch"
          title="Parent records need a different data model."
          description="Multi-city festivals can be valuable for discovery, but they should not be compressed into one simple location record."
          records={multiCityFestivals}
        />

        <GuideSection
          eyebrow="Adjacent and historical/reference signals"
          title="Useful context, clearly separated from core confirmed records."
          description="These records can support the article’s discovery logic, but they should not be treated as confirmed upcoming core goth/darkwave entries."
          records={supportFestivals}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Status labels</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels festival status
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
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Closing note</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The atlas expands only as sources hold.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            This guide will expand as RetroAltFest verifies more North American dark festival records from official, organizer, venue, ticketing, or other credible sources. The goal is not to publish the biggest list quickly; it is to build a trustworthy discovery layer where each record is labeled clearly before it enters deeper atlas workflows.
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
        <AtlasFact label="Map category" value={statusLabel(record.mapDisplayCategory)} />
        <AtlasFact label="Record type" value={statusLabel(record.recordType)} />
        <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Official source</dt>
          <dd className="mt-2 break-words text-sm leading-6 text-white">
            <a className="transition hover:text-[var(--raf-cyan)]" href={record.officialUrl} target="_blank" rel="noreferrer">
              {record.officialUrl.replace(/^https?:\/\//, "")}
            </a>
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.genreTags.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
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
