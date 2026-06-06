import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/new-wave-post-punk-retro-alternative-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";
const industrialEbmGuidePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";

export const metadata: Metadata = buildMetadata({
  title: "New Wave, Post-Punk & Retro Alternative Festivals in North America",
  description:
    "A curated RetroAltFest guide to North American festivals where new wave, post-punk, retro alternative, synth-era, indie nostalgia, and emerging alternative discovery overlap.",
  path: pagePath,
  type: "article",
  keywords: [
    "new wave festivals North America",
    "post-punk festivals North America",
    "retro alternative festivals",
    "80s alternative festivals",
    "dark alternative festivals",
  ],
});

type GuideRecord = {
  festivalName: string;
  slug: string;
  city: string;
  region: string;
  country: string;
  dateText?: string;
  officialUrl: string;
  sourceUrls: string[];
  atlasPath?: string;
  genreTags: string[];
  statusLabel: string;
  sceneFit: string;
  summary: string;
  curatorNote: string;
  confirmedText: string;
  checkingText: string;
  guideAngle: string;
};

const activeAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Darker Waves",
    slug: "darker-waves",
    city: "Huntington Beach",
    region: "California",
    country: "United States",
    dateText: "November 14, 2026",
    officialUrl: "https://www.darkerwavesfest.com/",
    sourceUrls: ["https://www.darkerwavesfest.com/", "https://www.darkerwavesfest.com/lineup", "https://www.darkerwavesfest.com/tickets"],
    atlasPath: "/festivals/darker-waves",
    genreTags: ["new wave", "synth", "darkwave-adjacent", "retro alternative", "synthpop-adjacent"],
    statusLabel: "Active atlas record with current source support",
    sceneFit: "new wave, synth, darkwave-adjacent, retro alternative, and synthpop-adjacent discovery",
    summary:
      "Darker Waves is the cleanest active atlas anchor for this guide: an official 2026 Huntington Beach festival where new wave, synth, darkwave-adjacent, and retro alternative discovery overlap.",
    curatorNote:
      "RetroAltFest keeps this as the only core active guide card here. Artist and day-by-day claims should stay with the official source unless they are refreshed separately.",
    confirmedText: "Official 2026 date and Huntington Beach festival identity are supported by the checked official source trail.",
    checkingText: "Lineup specifics should be rechecked before being repeated in detail.",
    guideAngle: "Core active atlas record with current source support.",
  },
];

const adjacentAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Just Like Heaven",
    slug: "just-like-heaven",
    city: "Pasadena",
    region: "California",
    country: "United States",
    dateText: "August 22, 2026",
    officialUrl: "https://justlikeheavenfest.com/",
    sourceUrls: ["https://justlikeheavenfest.com/", "https://justlikeheavenfest.com/lineup/", "https://justlikeheavenfest.com/festival-info/", "https://justlikeheavenfest.com/passes"],
    atlasPath: "/festivals/just-like-heaven",
    genreTags: ["retro alternative", "indie nostalgia", "blog-era indie", "2000s alternative", "adjacent discovery"],
    statusLabel: "Adjacent retro alternative discovery",
    sceneFit: "retro alternative, indie nostalgia, blog-era and 2000s alternative memory",
    summary:
      "Just Like Heaven is an active atlas link for adjacent retro alternative and indie nostalgia discovery, useful for readers exploring the wider orbit around new wave and post-punk without treating it as a core post-punk festival.",
    curatorNote:
      "The status is strong, but the guide fit is adjacent. Keep it near the lane without turning this page into a general indie-nostalgia directory.",
    confirmedText: "Official 2026 date and Pasadena festival identity are supported by the checked official source trail.",
    checkingText: "Keep the framing related rather than core new wave or core post-punk.",
    guideAngle: "Related active atlas record for nearby retro alternative and indie-nostalgia discovery.",
  },
  {
    festivalName: "The New Colossus Festival",
    slug: "the-new-colossus-festival",
    city: "New York City",
    region: "New York",
    country: "United States",
    dateText: "March 9–14, 2027",
    officialUrl: "https://www.newcolossusfestival.com/",
    sourceUrls: ["https://www.newcolossusfestival.com/", "https://www.newcolossusfestival.com/badges", "https://www.newcolossusfestival.com/past-line-up"],
    atlasPath: "/festivals/the-new-colossus-festival",
    genreTags: ["emerging alternative", "indie", "post-punk-adjacent", "new-music discovery", "multi-venue festival"],
    statusLabel: "Emerging post-punk-adjacent discovery",
    sceneFit: "emerging alternative, indie, post-punk-adjacent, and new-music discovery",
    summary:
      "The New Colossus Festival is a current active atlas link for emerging alternative and post-punk-adjacent discovery in New York City, with official 2027 dates confirmed; keep it framed as new-music discovery rather than classic new wave nostalgia.",
    curatorNote:
      "This is not a classic new wave nostalgia anchor. It belongs here as a useful active atlas bridge into emerging alternative and post-punk-adjacent discovery.",
    confirmedText: "Official 2027 dates and New York City festival identity are supported by the checked official source trail.",
    checkingText: "Treat it as a multi-venue parent festival and avoid single-venue simplification.",
    guideAngle: "Related active atlas record for emerging post-punk-adjacent discovery.",
  },
];

const referenceRecords: GuideRecord[] = [
  {
    festivalName: "Cruel World",
    slug: "cruel-world",
    city: "Pasadena",
    region: "California",
    country: "United States",
    officialUrl: "https://cruelworldfest.com/",
    sourceUrls: ["https://cruelworldfest.com/", "https://cruelworldfest.com/lineup", "https://cruelworldfest.com/past-lineups", "https://cruelworldfest.com/info"],
    genreTags: ["classic alternative", "new wave", "post-punk", "synthpop-adjacent", "dark alternative"],
    statusLabel: "Reference / date-not-announced signal",
    sceneFit: "classic alternative, new wave, post-punk, synthpop-adjacent, and dark alternative history",
    summary:
      "Cruel World remains one of the strongest reference points for this guide’s retro alternative and post-punk lane, but current official sources checked here did not confirm a specific future date; keep it date-not-announced until a clean official future edition is published.",
    curatorNote:
      "The editorial fit is strong, but the current public page should not present Cruel World as active, ticketed, or equivalent to atlas-backed records.",
    confirmedText: "Official sources support Pasadena identity and recent activity, not a clean future date for this guide refresh.",
    checkingText: "Recheck official date, edition, and logistics pages before any active treatment.",
    guideAngle: "Reference signal with future date not yet confirmed.",
  },
];

const broadRelatedRecords: GuideRecord[] = [
  {
    festivalName: "Riot Fest",
    slug: "riot-fest",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    dateText: "September 18–20, 2026",
    officialUrl: "https://riotfest.org/",
    sourceUrls: ["https://riotfest.org/", "https://riotfest.org/chicago/lineup/", "https://riotfest.org/chicago/tickets/"],
    genreTags: ["punk", "alternative", "legacy alternative", "post-punk-adjacent", "broad related signal"],
    statusLabel: "Broad related festival to know",
    sceneFit: "punk, legacy alternative, broad alternative, and occasional post-punk-adjacent discovery",
    summary:
      "Riot Fest has current official 2026 support, but for this guide it should remain a broad related festival to know, useful only where punk, legacy alternative, and post-punk-adjacent discovery overlap.",
    curatorNote:
      "The event status is strong, but the scope is wider than this guide. Keep it light and do not turn it into an active RetroAltFest atlas CTA here.",
    confirmedText: "Official 2026 date support exists, but the guide fit is broad.",
    checkingText: "Use only as a light related reference, not a core new wave or post-punk card.",
    guideAngle: "Broad related/overlap only; no RetroAltFest detail link.",
  },
];

const statusLabels = [
  {
    label: "Active atlas record with current source support",
    description: "A RetroAltFest atlas entry with current official or organizer-controlled source support and a public festival detail page.",
  },
  {
    label: "Related active atlas record",
    description: "An active atlas entry that helps discovery in a nearby lane without becoming the core new wave or post-punk anchor.",
  },
  {
    label: "Reference / date-not-announced signal",
    description: "A strong editorial fit where current official sources do not yet support a clean future date for active treatment.",
  },
  {
    label: "Broad related festival to know",
    description: "A wider punk, indie, nostalgia, or alternative event that may matter to readers without defining this guide’s main lane.",
  },
  {
    label: "Held until the guide fit is stronger",
    description: "A researched lead kept out of active treatment because the fit or source case is not strong enough for this exact guide angle.",
  },
];

const heldBackLeads = ["Kilby Block Party", "Best Friends Forever Fest", "When We Were Young"];
const allPublicRecords = [...activeAtlasRecords, ...adjacentAtlasRecords, ...referenceRecords, ...broadRelatedRecords];

export default function NewWavePostPunkRetroAlternativeGuidePage() {
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
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              New Wave, Post-Punk &amp; Retro Alternative Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              Start here for North American new wave, post-punk, retro alternative, synth-era, and related indie-nostalgia festival discovery.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              RetroAltFest separates active atlas records with current source support from adjacent retro alternative overlap, emerging post-punk-adjacent discovery, and reference records still waiting on clean future-date confirmation.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              We keep caveats visible because this lane overlaps with darkwave, synthpop, indie nostalgia, punk, and broader alternative festivals. RetroAltFest would rather label uncertainty clearly than imply dates, ticketing, or festival-detail pages that official sources do not support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/verification">
                See how RetroAltFest verifies festival records
              </Link>
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide records" value={`${allPublicRecords.length} checked examples`} />
              <AtlasFact label="Core atlas card" value="Darker Waves" />
              <AtlasFact label="Scope" value="New wave / post-punk / retro alternative" />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">What this guide covers</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The lane is retro alternative first, with visible overlap.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            This page focuses on festivals with reliable source trails across new wave, post-punk, synth-era nostalgia, dark alternative crossover, retro indie memory, and emerging alternative discovery. It does not treat every related indie, punk, or nostalgia festival as a core new wave/post-punk event.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["new wave", "post-punk", "synth-era", "retro alternative", "indie nostalgia", "emerging alternative"].map((tag) => (
              <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <GuideSection
          eyebrow="Core active atlas record with current source support"
          title="Darker Waves is the active guide anchor."
          description="Darker Waves is the only core active guide card in this refresh. Other linked records are useful adjacent paths, not core new wave/post-punk anchors."
          records={activeAtlasRecords}
          emphasized
        />

        <GuideSection
          eyebrow="Related and adjacent active atlas records"
          title="Nearby atlas links for retro alternative and post-punk-adjacent discovery."
          description="Just Like Heaven and The New Colossus Festival are useful active atlas paths when their guide fit is labeled carefully: adjacent retro alternative / indie nostalgia for Just Like Heaven, and emerging post-punk-adjacent discovery for The New Colossus."
          records={adjacentAtlasRecords}
        />

        <GuideSection
          eyebrow="Reference / date-not-announced signal"
          title="A strong guide fit waiting on clean future-date support."
          description="Cruel World matters to this lane, but it is not an active atlas record and should not be treated like Darker Waves until a clean official future edition is published."
          records={referenceRecords}
        />

        <GuideSection
          eyebrow="Broad related festival to know"
          title="Useful overlap, not a core RetroAltFest card."
          description="Riot Fest has current official source support, but its scope is broad. It stays light here as a related punk and legacy-alternative overlap signal, not an active atlas link."
          records={broadRelatedRecords}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Possible future additions</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reviewed, but not active guide cards here.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            Kilby Block Party, Best Friends Forever Fest, and When We Were Young were reviewed as possible leads, but they stay out of active treatment for this guide. Their fit is either too broad, too date-uncertain, or better suited to another RetroAltFest guide lane.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {heldBackLeads.map((lead) => (
              <li key={lead} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
                <span className="font-display text-lg font-semibold text-white">{lead}</span>
                <span className="mt-2 block">Held until the guide fit is stronger for this exact lane.</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Guide labels</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels this guide
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest keeps source caveats visible so readers can tell active atlas records from adjacent overlap, emerging discovery links, and reference records still waiting on clean future-date support.
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
            Keep the overlap useful without blurring the guides.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            For darker scene-specific discovery, use the North American Goth & Darkwave Festivals guide. For heavier dark electronic, industrial, and EBM-focused discovery, use the Industrial, EBM & Dark Electronic Festivals in North America guide. This page stays centered on retro alternative, new wave, post-punk, synth-era discovery, and adjacent nostalgia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={industrialEbmGuidePath}>
              Read the Industrial / EBM guide
            </Link>
            <Link className="raf-button-primary px-5 py-3 text-sm font-black text-[#050507]" href="/festivals">
              Browse the festival atlas
            </Link>
          </div>
        </section>

        <DiscoveryLinks
          title="Choose your next discovery path."
          description="Use this guide as one route into the atlas, then continue into the current record view, the guide hub, or the source-check notes behind RetroAltFest records."
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
  emphasized = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
  emphasized?: boolean;
}) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 leading-8 text-[var(--raf-text-muted)]">{description}</p>
      </div>

      <div className={`mt-7 grid gap-5 ${emphasized ? "lg:grid-cols-1" : "lg:grid-cols-2 xl:grid-cols-2"}`}>
        {records.map((record) => (
          <FestivalGuideCard key={record.slug} record={record} emphasized={emphasized} />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({ record, emphasized }: { record: GuideRecord; emphasized: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.045] sm:p-6 ${emphasized ? "border-[rgba(34,211,238,0.22)] bg-[linear-gradient(180deg,rgba(17,12,30,0.92),rgba(4,4,8,0.9))]" : "border-[var(--raf-border-soft)] bg-black/30"}`}>
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--raf-text-dim)]">
            {record.city} · {record.region} · {record.country}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">{record.festivalName}</h3>
        </div>
        <span className="max-w-full rounded-full border border-[var(--raf-border)] bg-white/[0.055] px-3 py-1 text-left font-mono text-[11px] font-semibold leading-5 text-[var(--raf-cyan)] sm:max-w-[22rem]">
          {record.statusLabel}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-white">Scene fit: {record.sceneFit}</p>
      <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{record.summary}</p>
      <p className="mt-4 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Curator note: </span>{record.curatorNote}
      </p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <AtlasFact label="What we’ve confirmed" value={record.confirmedText} />
        <AtlasFact label="What we’re still checking" value={record.checkingText} />
      </dl>

      <p className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Guide angle: </span>{record.guideAngle}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.genreTags.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {record.atlasPath ? (
          <Link className="inline-flex text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.atlasPath}>
            View atlas record
          </Link>
        ) : null}
        <a className="inline-flex break-words text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.officialUrl} target="_blank" rel="noreferrer">
          Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
        </a>
        <p className="text-xs leading-5 text-[var(--raf-text-dim)]">Sources checked: {record.sourceUrls.length} official or organizer-controlled pages.</p>
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
