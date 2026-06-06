import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";

export const metadata: Metadata = buildMetadata({
  title: "Industrial, EBM & Dark Electronic Festivals in North America | RetroAltFest",
  description:
    "A source-aware North American guide to industrial, EBM, dark electronic, post-industrial, synth, darkwave-overlap, and related dark alternative festival signals checked against official or organizer-controlled sources.",
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
  atlasPath?: string;
  city: string;
  region: string;
  country: string;
  genreTags: string[];
  officialUrl?: string;
  industrialEbmRelevance: string;
  sceneFit: string;
  statusLabel: string;
  summary: string;
  sourceCaveat: string;
  sourceSupport: string;
  recheckDetails: string;
};

const activeAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Cold Waves",
    atlasPath: "/festivals/cold-waves",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    genreTags: ["industrial", "post-industrial", "EBM-adjacent", "dark electronic", "goth-adjacent"],
    officialUrl: "https://coldwaves.net/",
    industrialEbmRelevance: "Core industrial / dark electronic atlas record.",
    sceneFit: "Industrial, post-industrial, EBM-adjacent, dark electronic, and goth-adjacent.",
    statusLabel: "Core industrial / dark electronic atlas record",
    summary:
      "Cold Waves is the clearest industrial/dark electronic anchor for this guide, with official 2026 site and ticketing support for Chicago dates in September.",
    sourceCaveat:
      "RetroAltFest does not overclaim every act as industrial or EBM. Lineup and day-by-day details should be checked against the official source before being repeated in detail.",
    sourceSupport: "Official 2026 festival and ticketing sources support the Chicago date context used here.",
    recheckDetails: "Specific daily programming, venues, and logistics should be verified from official sources before travel planning.",
  },
  {
    festivalName: "Terminus Festival",
    atlasPath: "/festivals/terminus-festival",
    city: "Calgary",
    region: "Alberta",
    country: "Canada",
    genreTags: ["darkwave", "EBM", "industrial", "synth", "post-punk", "dark electronic"],
    officialUrl: "https://terminus-festival.com/",
    industrialEbmRelevance: "Core industrial / EBM / dark electronic atlas record.",
    sceneFit: "Darkwave, EBM, industrial, synth, post-punk, and dark electronic.",
    statusLabel: "Core industrial / EBM atlas record",
    summary:
      "Terminus Festival is a strong Canadian industrial, EBM, dark electronic, darkwave, synth, and post-punk atlas link for this guide, with official 2026 ticketing support for July 23–26 in Calgary.",
    sourceCaveat:
      "The official site uses image-heavy assets, so RetroAltFest avoids full poster or lineup transcription unless separately verified from readable official sources.",
    sourceSupport: "Official and ticketing sources support the 2026 Calgary date context used here.",
    recheckDetails: "Poster, lineup, venue, and day-by-day logistics should be checked against official sources before being repeated in detail.",
  },
];

const relatedOverlapRecords: GuideRecord[] = [
  {
    festivalName: "Absolution Fest",
    atlasPath: "/festivals/absolution-fest",
    city: "Tampa",
    region: "Florida",
    country: "United States",
    genreTags: ["electronic", "post-punk", "goth", "darkwave"],
    officialUrl: "https://www.absolutionfest.com/",
    industrialEbmRelevance: "Related dark-scene overlap; not a core Industrial/EBM anchor.",
    sceneFit: "Electronic, post-punk, goth, and darkwave.",
    statusLabel: "Related dark-scene overlap",
    summary:
      "Absolution Fest is a related dark-scene atlas link for readers whose industrial/dark electronic interests overlap with electronic, goth, darkwave, and post-punk programming.",
    sourceCaveat:
      "Event status is strong, but the genre fit for this page is adjacent. RetroAltFest does not frame Absolution Fest as a core industrial festival or primary EBM anchor.",
    sourceSupport: "Official sources support Absolution Fest as an active RetroAltFest atlas record in a neighboring dark-scene lane.",
    recheckDetails: "Industrial/EBM-specific claims should not be added unless later official copy supports that framing.",
  },
];

const trackedSignals: GuideRecord[] = [
  {
    festivalName: "Mechanismus",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    genreTags: ["industrial", "EBM", "dark electro", "dark electronic"],
    officialUrl: "https://www.mechanismus.net/",
    industrialEbmRelevance: "Tracked Seattle industrial scene signal.",
    sceneFit: "Industrial, EBM, dark electro, and dark electronic.",
    statusLabel: "Tracked Seattle industrial scene signal",
    summary:
      "Mechanismus is a Seattle industrial-scene organizer and festival signal worth tracking; current official sources support the industrial focus, but not a confirmed future festival date or ticketed festival edition yet.",
    sourceCaveat:
      "RetroAltFest keeps Mechanismus caveated because a strong scene fit is not the same as a confirmed future festival edition.",
    sourceSupport: "Official sources support the industrial focus and ongoing scene activity.",
    recheckDetails: "A future festival date, festival venue, festival ticketing, and festival lineup need official confirmation before stronger travel-planning language is used.",
  },
  {
    festivalName: "Verboden Music Festival",
    city: "Portland / Seattle / Vancouver / Spokane corridor",
    region: "OR / WA / BC",
    country: "United States / Canada",
    genreTags: ["darkwave", "post-punk", "synth", "industrial-overlap", "goth", "dark electronic"],
    officialUrl: "https://verbodenfestival.com/",
    industrialEbmRelevance: "Recently active corridor signal with industrial and dark electronic overlap.",
    sceneFit: "Post-punk, darkwave, synth, industrial-overlap, goth, grunge overlap, and dark electronic.",
    statusLabel: "Recently active corridor signal",
    summary:
      "Verboden is a multi-city PNW dark alternative corridor signal with post-punk, darkwave, synth, industrial, goth, and grunge overlap; the checked 2026 edition is now past, so it should be referenced cautiously until a future cycle is officially announced.",
    sourceCaveat:
      "Because the checked edition spanned multiple cities and has passed, RetroAltFest does not flatten Verboden into one venue or treat it as a current travel-planning lead.",
    sourceSupport: "Official 2026 multi-city source support exists for Portland, Seattle, Vancouver, and Spokane.",
    recheckDetails: "Future-edition status and city-specific details should be checked separately before current-cycle language is used.",
  },
];

const referenceRecords: GuideRecord[] = [
  {
    festivalName: "Dark Force Fest",
    city: "Parsippany",
    region: "New Jersey",
    country: "United States",
    genreTags: ["goth", "industrial", "dark alternative", "metal-adjacent"],
    officialUrl: "https://darkforcefest.com/",
    industrialEbmRelevance: "Reference/background signal with goth and industrial relevance.",
    sceneFit: "Goth, industrial, dark alternative, and metal-adjacent.",
    statusLabel: "Reference/background signal",
    summary:
      "Dark Force Fest has goth/industrial relevance and an official 2026 source trail, but the currently published 2026 dates have passed, so keep it as background/reference until a future edition is officially announced.",
    sourceCaveat:
      "A passed source-supported date is useful context, but it is not a current industrial or EBM anchor for this guide.",
    sourceSupport: "Official May 1–3, 2026 source support was found during the refresh.",
    recheckDetails: "A future edition needs official confirmation before any travel-planning or current-status language is used.",
  },
];

const heldRecords = [
  {
    festivalName: "Triton Festival",
    note: "Triton Festival remains held from this guide because current official source support was not strong enough in this refresh.",
  },
];

const statusLabels = [
  {
    label: "Core industrial / dark electronic atlas record",
    description: "Used for Cold Waves, where official sources support a current industrial and dark electronic guide card with a RetroAltFest atlas link.",
  },
  {
    label: "Core industrial / EBM atlas record",
    description: "Used for Terminus Festival, where official and ticketing sources support a current industrial, EBM, dark electronic, and darkwave-overlap guide card.",
  },
  {
    label: "Related dark-scene overlap",
    description: "Used for Absolution Fest because it is a linked atlas record in a neighboring goth, darkwave, electronic, and post-punk lane, not a core Industrial/EBM anchor.",
  },
  {
    label: "Tracked scene signal",
    description: "Used when the scene fit is strong but a future festival date or edition still needs official confirmation.",
  },
  {
    label: "Recently active corridor signal",
    description: "Used when official sources support a recent multi-city edition, but the checked dates have passed and a future cycle needs rechecking.",
  },
  {
    label: "Held until source support improves",
    description: "Used for researched names that should not receive public festival-card treatment in this refresh.",
  },
];

const allPublicRecords = [...activeAtlasRecords, ...relatedOverlapRecords, ...trackedSignals, ...referenceRecords];

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
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/guides">
            Guides
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <span className="text-[var(--raf-text-muted)]">Industrial / EBM / Dark Electronic</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Industrial, EBM &amp; Dark Electronic Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              Start here for North American industrial, EBM, post-industrial, and dark electronic festival discovery.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              RetroAltFest separates active atlas records with current source support from related dark-scene overlap, recently active corridor signals, and reference records that need a future source refresh. We keep caveats visible because industrial and dark alternative events often overlap across goth, darkwave, synth, post-punk, and regional scenes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="raf-button-primary" href="/verification">
                See how RetroAltFest verifies festival records
              </Link>
              <Link className="raf-button-secondary" href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className="raf-button-secondary" href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide records" value={`${allPublicRecords.length} checked examples`} />
              <AtlasFact label="Core atlas links" value="Cold Waves · Terminus" />
              <AtlasFact label="Scope" value="Industrial / EBM / dark electronic" />
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Active industrial / dark electronic atlas records"
          title="Core active atlas records with current source support."
          description="Cold Waves and Terminus Festival are the two core Industrial/EBM/dark electronic cards in this refresh, and they are the only core records with direct atlas CTAs here."
          records={activeAtlasRecords}
        />

        <GuideSection
          eyebrow="Related dark-scene overlap"
          title="A linked atlas record for adjacent scene overlap."
          description="Absolution Fest is included as a related dark-scene bridge for readers whose industrial and dark electronic interests overlap with goth, darkwave, electronic, and post-punk programming."
          records={relatedOverlapRecords}
        />

        <GuideSection
          eyebrow="Caveated scene signals to recheck before travel planning"
          title="Strong industrial and dark-electronic signals, clearly caveated."
          description="Mechanismus and Verboden matter to this scene, but neither receives a RetroAltFest festival detail CTA in this guide refresh."
          records={trackedSignals}
        />

        <GuideSection
          eyebrow="Reference and background signal"
          title="Useful context, not a current anchor."
          description="Dark Force Fest stays as background/reference because the official 2026 dates checked in this refresh have passed."
          records={referenceRecords}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Held from public card treatment</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Triton Festival stays held for now.
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-8 text-[var(--raf-text-muted)]">
            {heldRecords.map((record) => (
              <p key={record.festivalName}>{record.note}</p>
            ))}
            <p>
              The refresh did not find usable current official future festival date, venue, lineup, or ticketing support, so Triton should not appear as a public festival card or linked detail route.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Guide labels</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels this guide
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest keeps source caveats visible so readers can tell active atlas records from related overlap, recently active signals, and records still waiting on stronger official support.
          </p>
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
            This guide pairs with the existing Goth &amp; Darkwave guide while keeping Industrial, EBM, and dark electronic discovery distinct.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className="raf-button-primary px-5 py-3 text-sm font-black text-[#050507]" href="/festivals">
              Browse the festival atlas
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/verification">
              How RetroAltFest handles source checks
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-black/25 p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Closing note</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The industrial guide expands only as sources hold.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            This guide will expand only as more North American industrial, EBM, dark electronic, and post-industrial festivals have enough official or reliable source support to publish. RetroAltFest’s goal is not to inflate the list quickly; it is to keep source-supported records, related overlap, and background references clearly separated.
          </p>
        </section>

        <DiscoveryLinks
          title="Choose your next discovery path."
          description="Use this guide as one route into the atlas, then continue into the full directory, the guide hub, or the source-check notes behind RetroAltFest records."
          links={[
            {
              href: "/guides",
              label: "Back to all guides",
              description: "Compare the current Goth & Darkwave, Industrial / EBM, New Wave / Post-Punk, and West Coast / PNW guide routes.",
            },
            {
              href: "/festivals",
              label: "Browse current atlas records",
              description: "Open the active festival atlas and follow only source-backed internal detail links.",
            },
            {
              href: "/verification",
              label: "See how source checks work",
              description: "Review how RetroAltFest separates confirmed records from reference signals and related context.",
            },
          ]}
        />
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
          <FestivalGuideCard key={record.festivalName} record={record} />
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
        <AtlasFact label="What sources support" value={record.sourceSupport} />
        <AtlasFact label="What to recheck" value={record.recheckDetails} />
        {record.officialUrl ? (
          <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Official source</dt>
            <dd className="mt-2 break-words text-sm leading-6 text-white">
              <a className="transition hover:text-[var(--raf-cyan)]" href={record.officialUrl} target="_blank" rel="noreferrer">
                {record.officialUrl.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        ) : null}
        {record.atlasPath ? (
          <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">RetroAltFest atlas</dt>
            <dd className="mt-2 text-sm leading-6 text-white">
              <Link className="font-semibold transition hover:text-[var(--raf-cyan)]" href={record.atlasPath}>
                View atlas record
              </Link>
            </dd>
          </div>
        ) : null}
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
