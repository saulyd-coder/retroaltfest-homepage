import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/new-wave-post-punk-retro-alternative-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";
const industrialEbmGuidePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";

export const metadata: Metadata = buildMetadata({
  title: "New Wave, Post-Punk & Retro Alternative Festivals in North America",
  description:
    "A curated RetroAltFest guide to North American festivals where new wave, post-punk, 80s alternative, dark alternative, synthpop-adjacent nostalgia, and retro indie overlap.",
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
  venueName?: string;
  dateText?: string;
  officialUrl: string;
  sourceUrls: string[];
  genreTags: string[];
  guideRole: "strong_guide_fit" | "dates_not_announced_strong_guide_fit" | "related_festival";
  verificationStatus: "verified" | "dates_not_announced";
  sourceSufficiency: "strong";
  publicStatusLabel: string;
  publicV1Recommendation: "include_core" | "include_core_with_dates_not_announced_caveat" | "related_festival";
  overlapRisk: "low" | "medium" | "high";
  summary: string;
  sourceCaveat: string;
  duplicateRiskNotes: string;
  followUpNeeded: string;
};

const coreAnchors: GuideRecord[] = [
  {
    festivalName: "Darker Waves",
    slug: "darker-waves",
    city: "Huntington Beach",
    region: "California",
    country: "United States",
    venueName: "Huntington Beach City Beach",
    dateText: "November 14, 2026",
    officialUrl: "https://www.darkerwavesfest.com/",
    sourceUrls: ["https://www.darkerwavesfest.com/", "https://www.darkerwavesfest.com/lineup", "https://www.darkerwavesfest.com/tickets"],
    genreTags: ["new wave", "post-punk", "retro alternative", "80s alternative", "synthpop-adjacent", "darkwave-adjacent"],
    guideRole: "strong_guide_fit",
    verificationStatus: "verified",
    sourceSufficiency: "strong",
    publicStatusLabel: "Currently confirmed",
    publicV1Recommendation: "include_core",
    overlapRisk: "high",
    summary:
      "Darker Waves is the cleanest current anchor for this guide, with official sources supporting a North American festival where new wave, post-punk, 80s alternative, synthpop-adjacent, and dark alternative discovery overlap.",
    sourceCaveat:
      "Darker Waves also overlaps with goth and darkwave audiences, so this guide frames it through a retro alternative and new wave/post-punk lens.",
    duplicateRiskNotes:
      "Keep the copy focused on retro alternative, synth-era, and post-punk-adjacent discovery so the record does not duplicate the Goth & Darkwave guide.",
    followUpNeeded: "Recheck official homepage, lineup, and ticket source before publication.",
  },
  {
    festivalName: "Cruel World",
    slug: "cruel-world",
    city: "Pasadena",
    region: "California",
    country: "United States",
    venueName: "Brookside at the Rose Bowl",
    officialUrl: "https://cruelworldfest.com/",
    sourceUrls: ["https://cruelworldfest.com/", "https://cruelworldfest.com/lineup/", "https://cruelworldfest.com/general-info/", "https://cruelworldfest.com/passes/"],
    genreTags: ["new wave", "post-punk", "dark alternative", "80s alternative", "synthpop-adjacent", "retro alternative"],
    guideRole: "dates_not_announced_strong_guide_fit",
    verificationStatus: "dates_not_announced",
    sourceSufficiency: "strong",
    publicStatusLabel: "Dates not announced yet",
    publicV1Recommendation: "include_core_with_dates_not_announced_caveat",
    overlapRisk: "high",
    summary:
      "Cruel World is one of the strongest editorial matches for this guide because its official source history supports major overlap across classic alternative, new wave, post-punk, synthpop-adjacent, and dark alternative audiences.",
    sourceCaveat:
      "Cruel World is one of the strongest fits for this guide, but the next dates have not been announced yet. We do not add future-date, ticket, or edition claims until official sources are updated and re-verified.",
    duplicateRiskNotes:
      "Use Cruel World as a retro alternative and post-punk editorial anchor, not as a duplicate goth/darkwave listing.",
    followUpNeeded: "Recheck the official homepage, lineup, passes, and general-info pages for source-backed current/future date evidence.",
  },
];

const adjacentReferences: GuideRecord[] = [
  {
    festivalName: "Just Like Heaven",
    slug: "just-like-heaven",
    city: "Pasadena",
    region: "California",
    country: "United States",
    venueName: "Brookside at the Rose Bowl",
    dateText: "August 22, 2026",
    officialUrl: "https://justlikeheavenfest.com/",
    sourceUrls: ["https://justlikeheavenfest.com/", "https://justlikeheavenfest.com/lineup/", "https://justlikeheavenfest.com/festival-info/", "https://justlikeheavenfest.com/passes"],
    genreTags: ["indie nostalgia", "blog-era indie", "retro alternative-adjacent", "dance-party adjacent", "alternative nostalgia"],
    guideRole: "related_festival",
    verificationStatus: "verified",
    sourceSufficiency: "strong",
    publicStatusLabel: "Related festival to know",
    publicV1Recommendation: "related_festival",
    overlapRisk: "low",
    summary:
      "Just Like Heaven belongs here only as an adjacent retro alternative reference: a broader indie and blog-era nostalgia signal for readers exploring beyond the core new wave/post-punk lane.",
    sourceCaveat:
      "Just Like Heaven is included as related retro indie and nostalgia discovery, not as a core new wave or post-punk festival.",
    duplicateRiskNotes:
      "The main risk is scope creep, not duplicate dark-scene content; keep it outside the core anchor section.",
    followUpNeeded: "Keep this record in a clearly labeled adjacent section.",
  },
  {
    festivalName: "Riot Fest",
    slug: "riot-fest",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    venueName: "Douglass Park",
    dateText: "September 18–20, 2026",
    officialUrl: "https://riotfest.org/",
    sourceUrls: ["https://riotfest.org/", "https://riotfest.org/chicago/lineup/", "https://riotfest.org/chicago/tickets/", "https://www.tixr.com/groups/riotfest/events/riot-fest-2026-158068"],
    genreTags: ["punk", "alternative", "broad retro alternative", "post-punk-adjacent", "legacy alternative"],
    guideRole: "related_festival",
    verificationStatus: "verified",
    sourceSufficiency: "strong",
    publicStatusLabel: "Related festival to know",
    publicV1Recommendation: "related_festival",
    overlapRisk: "medium",
    summary:
      "Riot Fest is useful as a broad alternative discovery reference where readers may sometimes find legacy alternative, punk, post-punk-adjacent, or retro discovery threads.",
    sourceCaveat:
      "Riot Fest is included as a broad related festival to know, not as a core new wave or post-punk festival. Keep the framing broad, careful, and lineup-dependent.",
    duplicateRiskNotes:
      "Riot Fest could fit many future RetroAltFest guides; keep it light here so this page does not become a general alternative festival guide.",
    followUpNeeded: "Use only in the adjacent references section.",
  },
];

const statusLabels = [
  {
    label: "A strong fit for this guide",
    description: "A festival whose official sources or reliable history strongly support the guide’s new wave, post-punk, and retro alternative angle.",
  },
  {
    label: "Currently confirmed",
    description: "Official sources currently support the date or status shown in this guide.",
  },
  {
    label: "Dates not announced yet",
    description: "A strong fit for the guide, but the next dates have not been announced yet.",
  },
  {
    label: "Related festival to know",
    description: "A broader indie, punk, nostalgia, or alternative festival that helps discovery without becoming a core new wave/post-punk listing.",
  },
  {
    label: "Not included yet",
    description: "A researched lead kept out of this first guide because the fit is too broad, too weak, or better suited to another guide.",
  },
];

const heldBackLeads = ["Kilby Block Party", "Best Friends Forever Fest", "When We Were Young"];
const allPublicRecords = [...coreAnchors, ...adjacentReferences];

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
          <span className="text-[var(--raf-text-muted)]">Guides</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              New Wave, Post-Punk &amp; Retro Alternative Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              A curated path through North American festivals where new wave, post-punk, 80s alternative, dark alternative, and retro indie nostalgia overlap.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This guide follows festivals with meaningful overlap across new wave, post-punk, 80s alternative, dark alternative crossover, synthpop-adjacent nostalgia, and retro alternative discovery. Some are strong fits for this lane; others are related festivals to know for broader alternative discovery.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This is a curated starting point, not an exhaustive directory. RetroAltFest keeps uncertainty visible in plain English so dates-not-announced-yet listings, related festivals, and possible future additions do not blur into currently confirmed festival cards.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide records" value={`${allPublicRecords.length} checked examples`} />
              <AtlasFact label="Strongest fits" value="Darker Waves · Cruel World" />
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
            This page focuses on festivals with reliable source trails across new wave, post-punk, 80s alternative, dark alternative crossover, synthpop-adjacent nostalgia, and retro indie/alternative overlap. It does not treat every related indie, punk, or nostalgia festival as a core new wave/post-punk event.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["new wave", "post-punk", "80s alternative", "dark alternative crossover", "synthpop-adjacent nostalgia", "retro indie/alternative overlap"].map((tag) => (
              <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <GuideSection
          eyebrow="Strongest guide fits"
          title="Two records carry the clearest public signal."
          description="Darker Waves is currently confirmed. Cruel World is one of the strongest fits for this guide, but its next dates have not been announced yet."
          records={coreAnchors}
          emphasized
        />

        <GuideSection
          eyebrow="Related retro alternative references"
          title="Useful discovery references, not core new wave/post-punk festivals."
          description="Just Like Heaven and Riot Fest are included as related festivals to know, helping readers find broader retro or legacy alternative discovery without turning this into a general alternative festival page."
          records={adjacentReferences}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Possible future additions</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reviewed, but not included in this first guide.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            Kilby Block Party, Best Friends Forever Fest, and When We Were Young were reviewed as possible leads, but they stay out of this first guide. Their fit is either too broad, too date-uncertain, or better suited to another RetroAltFest guide lane.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {heldBackLeads.map((lead) => (
              <li key={lead} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
                <span className="font-display text-lg font-semibold text-white">{lead}</span>
                <span className="mt-2 block">Possible future addition, but not included for this guide angle yet.</span>
              </li>
            ))}
          </ul>
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
            Keep the overlap useful without blurring the guides.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            For darker scene-specific discovery, use the North American Goth & Darkwave Festivals guide. For heavier dark electronic, industrial, and EBM-focused discovery, use the Industrial, EBM & Dark Electronic Festivals in North America guide. This page stays centered on retro alternative, new wave, post-punk, 80s alternative, and adjacent nostalgia.
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

      <div className={`mt-7 grid gap-5 ${emphasized ? "lg:grid-cols-2" : "lg:grid-cols-2 xl:grid-cols-2"}`}>
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
          {record.publicStatusLabel}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-white">Scene fit: {record.genreTags.join(" · ")}</p>
      <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{record.summary}</p>
      <p className="mt-4 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Curator note: </span>{record.sourceCaveat}
      </p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <AtlasFact label="What we’ve confirmed" value={confirmedNote(record)} />
        <AtlasFact label="What we’re still checking" value={checkingNote(record)} />
      </dl>

      <p className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Guide angle: </span>{record.duplicateRiskNotes}
      </p>
      <p className="mt-3 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">What we’re watching: </span>{record.followUpNeeded}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.genreTags.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <a className="inline-flex break-words text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.officialUrl} target="_blank" rel="noreferrer">
          Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
        </a>
        <p className="text-xs leading-5 text-[var(--raf-text-dim)]">Sources checked: {record.sourceUrls.length} official or reliable pages.</p>
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

function confirmedNote(record: GuideRecord) {
  if (record.verificationStatus === "verified") {
    return "Official or reliable sources support this listing.";
  }

  return "The festival is a strong fit for this guide, but the next dates have not been announced yet.";
}

function checkingNote(record: GuideRecord) {
  if (record.verificationStatus === "dates_not_announced") {
    return "Dates have not been announced yet.";
  }

  if (record.guideRole === "related_festival") {
    return "Included as a related festival to know, not as a core new wave or post-punk listing.";
  }

  return "We’re not placing this on the future map until location details are verified.";
}
