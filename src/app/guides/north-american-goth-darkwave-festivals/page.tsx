import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/north-american-goth-darkwave-festivals";

export const metadata: Metadata = buildMetadata({
  title: "North American Goth & Darkwave Festivals | RetroAltFest Guide",
  description:
    "A source-aware North American guide to goth, darkwave, post-punk, industrial, synth, and related dark alternative festivals checked against official or organizer-controlled sources.",
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
  atlasPath?: string;
  city: string;
  region: string;
  country: string;
  genreTags: string[];
  officialUrl: string;
  sceneFit: string;
  statusLabel: string;
  summary: string;
  sourceCaveat: string;
  confirmedDetails: string;
  recheckDetails: string;
};

const activeAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Absolution Fest",
    atlasPath: "/festivals/absolution-fest",
    city: "Tampa",
    region: "Florida",
    country: "United States",
    genreTags: ["goth", "darkwave", "post-punk", "electronic"],
    officialUrl: "https://www.absolutionfest.com/",
    sceneFit: "Goth, darkwave, post-punk, and electronic.",
    statusLabel: "Active atlas record with 2026 source support",
    summary:
      "Absolution Fest is a source-supported active atlas record for Tampa’s goth, darkwave, post-punk, and electronic scene, with 2026 dates confirmed by official and ticketing sources.",
    sourceCaveat:
      "RetroAltFest keeps venue, address, schedule, and ticket-tier details conservative unless those details are supported by the source trail being checked.",
    confirmedDetails: "Official and ticketing sources support the 2026 date/status used for this guide card.",
    recheckDetails: "Specific venue, address, schedule, and ticket-tier details need their own source check before travel planning.",
  },
  {
    festivalName: "A Murder of Crows XI NYC Goth & Post-punk Festival",
    atlasPath: "/festivals/a-murder-of-crows-xi-nyc-goth-post-punk-festival",
    city: "New York City",
    region: "New York",
    country: "United States",
    genreTags: ["goth", "post-punk"],
    officialUrl: "http://www.amurderofcrowsfestival.com/",
    sceneFit: "Goth and post-punk.",
    statusLabel: "Active atlas record with 2026 source support",
    summary:
      "A Murder of Crows XI NYC Goth & Post-punk Festival is a source-supported active atlas record for New York’s goth and post-punk scene, with 2026 dates and multi-venue structure confirmed by The Red Party’s official page.",
    sourceCaveat:
      "The public title is aligned with the active atlas slug. Because this is a multi-night, multi-venue festival, RetroAltFest does not flatten the event into one simple venue claim.",
    confirmedDetails: "The Red Party’s official page supports the 2026 dates and multi-venue structure.",
    recheckDetails: "Night-by-night venues, lineups, and ticket details should be checked at the official source before planning around them.",
  },
  {
    festivalName: "Cold Waves",
    atlasPath: "/festivals/cold-waves",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    genreTags: ["industrial", "EBM", "dark electronic", "post-punk-adjacent"],
    officialUrl: "https://coldwaves.net/",
    sceneFit: "Industrial, EBM, dark electronic, and post-punk-adjacent.",
    statusLabel: "Active atlas record with 2026 source support",
    summary:
      "Cold Waves is a source-supported active atlas record and a major Chicago industrial / dark electronic anchor, with 2026 dates and official ticket links published by the festival.",
    sourceCaveat:
      "RetroAltFest frames Cold Waves through its industrial, dark electronic, post-industrial, and goth-adjacent role instead of forcing it into a pure goth festival lane.",
    confirmedDetails: "Official festival sources support the 2026 dates and official ticket links referenced for this guide card.",
    recheckDetails: "Multi-night venue details and individual event logistics should be verified at the official source before travel planning.",
  },
  {
    festivalName: "Terminus Festival",
    atlasPath: "/festivals/terminus-festival",
    city: "Calgary",
    region: "Alberta",
    country: "Canada",
    genreTags: ["darkwave", "EBM", "industrial", "synth", "post-punk"],
    officialUrl: "https://terminus-festival.com/",
    sceneFit: "Darkwave, EBM, industrial, synth, and post-punk.",
    statusLabel: "Active atlas record with 2026 source support",
    summary:
      "Terminus Festival is a source-supported active atlas record for Calgary’s darkwave, EBM, industrial, synth, and post-punk scene, with 2026 date and venue support from official and ticketing sources.",
    sourceCaveat:
      "The official site can be image-heavy, so RetroAltFest keeps poster, lineup, and logistics details restrained unless the text source trail clearly supports them.",
    confirmedDetails: "Official and ticketing sources support the 2026 date and venue context used here.",
    recheckDetails: "Poster, lineup, and day-by-day logistics should be checked against official sources before being repeated in detail.",
  },
];

const referenceSignals: GuideRecord[] = [
  {
    festivalName: "Dark Force Fest",
    city: "Parsippany",
    region: "New Jersey",
    country: "United States",
    genreTags: ["goth", "industrial", "dark alternative", "metal-adjacent"],
    officialUrl: "https://darkforcefest.com/",
    sceneFit: "Goth, industrial, dark alternative, and metal-adjacent.",
    statusLabel: "Reference signal — checked 2026 dates have passed",
    summary:
      "Dark Force Fest remains a Northeast goth/industrial reference signal, but the official 2026 dates checked here have passed; recheck official sources before treating it as a future edition.",
    sourceCaveat:
      "This guide keeps Dark Force Fest separate from source-supported guide cards because a passed date is not the same as a confirmed future edition.",
    confirmedDetails: "Official May 1–3, 2026 dates were found during the source check.",
    recheckDetails: "Future-edition status needs a fresh official confirmation before any travel-planning language.",
  },
  {
    festivalName: "Cruel World",
    city: "Pasadena",
    region: "California",
    country: "United States",
    genreTags: ["new wave", "post-punk", "goth-adjacent", "synthpop-adjacent", "alternative"],
    officialUrl: "https://cruelworldfest.com/",
    sceneFit: "New wave, post-punk, goth-adjacent, synthpop-adjacent, and alternative.",
    statusLabel: "Related gateway — future date not confirmed",
    summary:
      "Cruel World is a recognizable Southern California retro-alternative and post-punk-adjacent reference point; current official sources did not confirm a future edition in this check.",
    sourceCaveat:
      "RetroAltFest treats Cruel World as a related gateway for dark alternative discovery, not as a core goth/darkwave guide card.",
    confirmedDetails: "The official site was checked for future-edition support.",
    recheckDetails: "A future date needs official confirmation before this can be framed as a travel-planning lead.",
  },
  {
    festivalName: "Verboden Music Festival",
    city: "Vancouver / Seattle / Portland / Spokane corridor",
    region: "BC / WA / OR",
    country: "Canada / United States",
    genreTags: ["post-punk", "darkwave", "synth", "industrial", "goth", "dark electronic"],
    officialUrl: "https://verbodenfestival.com/",
    sceneFit: "Post-punk, darkwave, synth, industrial, goth, and dark electronic.",
    statusLabel: "Recently active corridor signal — recheck future edition",
    summary:
      "Verboden Music Festival is a recently active PNW / Western Canada dark alternative corridor signal with official-source support for a 2026 multi-city edition; future-edition status should be rechecked before any current-edition or atlas-link language.",
    sourceCaveat:
      "Because the 2026 edition was multi-city and the checked dates have passed, RetroAltFest keeps Verboden as a corridor reference rather than collapsing the cities into one simple listing.",
    confirmedDetails: "Official-source support exists for a May 28–31, 2026 multi-city edition.",
    recheckDetails: "Each city should be checked separately before future-edition or source-supported atlas language is used.",
  },
];

const allRecords = [...activeAtlasRecords, ...referenceSignals];

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
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/guides">
            Guides
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <span className="text-[var(--raf-text-muted)]">North American Goth &amp; Darkwave</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              North American Goth &amp; Darkwave Festivals: A Curated Guide
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              This guide highlights North American goth and darkwave festival records that RetroAltFest can describe from official or organizer-controlled sources.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              Some entries are active atlas records with current 2026 source support; others are kept as reference signals when their next edition is not yet confirmed. We keep source caveats visible because RetroAltFest is built around verified-before-mapped discovery, not guessed dates, ticket claims, or location shortcuts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="raf-button-primary" href="/verification">
                See how RetroAltFest handles verification
              </Link>
              <Link className="raf-button-secondary" href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className="raf-button-secondary" href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide records" value={`${allRecords.length} checked examples`} />
              <AtlasFact label="Active atlas links" value={`${activeAtlasRecords.length} source-supported records`} />
              <AtlasFact label="Scope" value="North America first" />
            </div>
          </div>
        </section>

        <GuideSection
          eyebrow="Source-supported active atlas records"
          title="Four active atlas records with current source support."
          description="These are the guide cards with direct RetroAltFest atlas links. Each one is tied to official or organizer-controlled 2026 source support rather than a broad page-level status claim."
          records={activeAtlasRecords}
        />

        <GuideSection
          eyebrow="Reference signals to recheck before travel planning"
          title="Tracked dark-scene signals and related references."
          description="These entries matter to the North American dark alternative landscape, but they are intentionally not active-linked as atlas detail records in this guide refresh."
          records={referenceSignals}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Status language</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels this guide
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <StatusCard
              label="Active atlas record with 2026 source support"
              description="Used only for the four linked guide cards where official or organizer-controlled sources support the current date/status shown here."
            />
            <StatusCard
              label="Reference signal"
              description="Used for a scene-relevant event that should be rechecked before travel planning, especially when checked dates have passed or the next edition is not confirmed."
            />
            <StatusCard
              label="Related gateway"
              description="Used for a broader retro-alternative or post-punk-adjacent event that helps readers understand the scene without treating it as a core goth/darkwave listing."
            />
            <StatusCard
              label="Recently active corridor signal"
              description="Used when official sources support recent activity across multiple cities, but future-edition status needs another check before active atlas language."
            />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Closing note</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The atlas expands only as sources hold.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest keeps caveats visible so readers can tell the difference between active atlas records, recently active signals, and related reference points. The goal is not to publish the biggest list quickly; it is to build a trustworthy discovery layer where each festival is labeled clearly before it enters deeper location review.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="raf-button-primary" href="/verification">
              How RetroAltFest verifies festival records
            </Link>
            <Link className="raf-button-secondary" href="/festivals">
              Open the current atlas
            </Link>
          </div>
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
        <AtlasFact label="What sources support" value={record.confirmedDetails} />
        <AtlasFact label="What to recheck" value={record.recheckDetails} />
        <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Official source</dt>
          <dd className="mt-2 break-words text-sm leading-6 text-white">
            <a className="transition hover:text-[var(--raf-cyan)]" href={record.officialUrl} target="_blank" rel="noreferrer">
              {record.officialUrl.replace(/^https?:\/\//, "")}
            </a>
          </dd>
        </div>
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

function StatusCard({ label, description }: { label: string; description: string }) {
  return (
    <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
      <h3 className="font-display text-xl font-semibold text-white">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--raf-text-muted)]">{description}</p>
    </div>
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
