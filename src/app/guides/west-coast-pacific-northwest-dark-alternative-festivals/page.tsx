import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/west-coast-pacific-northwest-dark-alternative-festivals";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";
const industrialEbmGuidePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";
const retroAlternativeGuidePath = "/guides/new-wave-post-punk-retro-alternative-festivals-north-america";

export const metadata: Metadata = buildMetadata({
  title: "West Coast & Pacific Northwest Dark Alternative Festivals",
  description:
    "A curated RetroAltFest regional route through active atlas records, recently active festival signals, and carefully caveated dark alternative source trails from Southern California to Portland, Seattle, and Vancouver.",
  path: pagePath,
  type: "article",
  keywords: [
    "West Coast dark alternative festivals",
    "Pacific Northwest darkwave festivals",
    "Portland dark alternative festivals",
    "Seattle industrial festivals",
    "Vancouver darkwave festivals",
    "Southern California retro alternative festivals",
  ],
});

type GuideCard = {
  festivalName: string;
  slug: string;
  atlasPath?: string;
  city: string;
  region: string;
  country: string;
  officialUrl: string;
  sourceUrls: string[];
  sceneFit: string[];
  section: "Southern California anchors" | "Pacific Northwest corridor";
  label: string;
  whyItMatters: string;
  confirmed: string;
  checking: string;
};

type HeldBackLead = {
  name: string;
  reason: string;
};

const guideCards: GuideCard[] = [
  {
    festivalName: "Darker Waves",
    slug: "darker-waves",
    atlasPath: "/festivals/darker-waves",
    city: "Huntington Beach",
    region: "California",
    country: "United States",
    officialUrl: "https://www.darkerwavesfest.com/",
    sourceUrls: ["https://www.darkerwavesfest.com/", "https://www.darkerwavesfest.com/lineup"],
    sceneFit: ["retro alternative", "new wave", "post-punk", "synthpop", "dark nostalgia"],
    section: "Southern California anchors",
    label: "Active atlas route anchor",
    whyItMatters:
      "Darker Waves gives this route a beachside Southern California entry point where familiar alternative sounds can lead readers toward darker synth, post-punk, and new wave discovery.",
    confirmed:
      "Official festival sources support Darker Waves as a Huntington Beach festival and active RetroAltFest atlas record.",
    checking:
      "Artist names and lineup details should be checked directly against the current official lineup source before any public page names specific acts.",
  },
  {
    festivalName: "Cruel World",
    slug: "cruel-world",
    city: "Pasadena",
    region: "California",
    country: "United States",
    officialUrl: "https://cruelworldfest.com/",
    sourceUrls: ["https://cruelworldfest.com/", "https://cruelworldfest.com/general-info/"],
    sceneFit: ["dark alternative", "post-punk", "new wave", "synth", "goth-adjacent"],
    section: "Southern California anchors",
    label: "Pasadena reference point",
    whyItMatters:
      "Cruel World remains one of the most visible West Coast reference points for readers who find dark alternative music through the larger Southern California festival circuit.",
    confirmed: "Official sources support Cruel World’s Pasadena festival identity and Brookside at the Rose Bowl context.",
    checking:
      "The checked official pages did not confirm a future edition. Do not treat Cruel World as upcoming unless a new official announcement supports it.",
  },
  {
    festivalName: "Just Like Heaven",
    slug: "just-like-heaven",
    atlasPath: "/festivals/just-like-heaven",
    city: "Pasadena",
    region: "California",
    country: "United States",
    officialUrl: "https://www.justlikeheavenfest.com/",
    sourceUrls: ["https://www.justlikeheavenfest.com/"],
    sceneFit: ["indie nostalgia", "blog-era indie", "retro alternative", "related circuit"],
    section: "Southern California anchors",
    label: "Related festival to know",
    whyItMatters:
      "Just Like Heaven is useful here as a related festival to know, not as a darkwave or industrial anchor. It shows how Southern California’s retro alternative circuit stretches into broader indie and alternative memory.",
    confirmed: "Official festival sources support Just Like Heaven’s Pasadena context and active RetroAltFest atlas record.",
    checking:
      "Its dark alternative relevance should be handled lineup by lineup. Do not overstate it as a goth, darkwave, or industrial festival.",
  },
  {
    festivalName: "Verboden Music Festival — Vancouver",
    slug: "verboden-vancouver",
    city: "Vancouver",
    region: "British Columbia",
    country: "Canada",
    officialUrl: "https://verbodenfestival.com/",
    sourceUrls: ["https://verbodenfestival.com/", "https://vivenu.com/event/verboden-2026-vancouver-8pfyy0"],
    sceneFit: ["darkwave", "post-punk", "synth", "industrial", "goth", "EBM"],
    section: "Pacific Northwest corridor",
    label: "Recently active PNW corridor signal",
    whyItMatters:
      "Verboden Vancouver gives the northern end of the route a clear dark alternative identity, with darkwave, post-punk, synth, industrial, goth, and EBM in one connected festival universe.",
    confirmed:
      "Official and official-linked sources support Verboden’s Vancouver presence and a 2026 city event, with darkwave, post-punk, industrial, EBM, synth, and goth language in the source trail.",
    checking:
      "The 2026 dates have passed and the ticketing source contains one date-text inconsistency. Use date-neutral wording until a new official edition is announced.",
  },
  {
    festivalName: "Verboden Music Festival — Seattle",
    slug: "verboden-seattle",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    officialUrl: "https://verbodenfestival.com/",
    sourceUrls: ["https://verbodenfestival.com/", "https://vivenu.com/event/verboden-festival-2026-u0wef6"],
    sceneFit: ["darkwave", "post-punk", "EBM", "dark electronic", "PNW underground"],
    section: "Pacific Northwest corridor",
    label: "Recently active PNW corridor signal",
    whyItMatters:
      "Verboden Seattle connects Seattle’s dark alternative identity with a wider regional festival trail, making it useful for readers looking beyond single-city listings.",
    confirmed:
      "Official and official-linked sources support Verboden’s Seattle presence and a 2026 city event, with darkwave, post-punk, and EBM language in the source trail.",
    checking:
      "The checked ticketing page says sale ended. Do not say tickets are available or imply a future edition until official sources announce one.",
  },
  {
    festivalName: "Verboden Music Festival — Portland",
    slug: "verboden-portland",
    city: "Portland",
    region: "Oregon",
    country: "United States",
    officialUrl: "https://verbodenfestival.com/",
    sourceUrls: ["https://verbodenfestival.com/", "https://tickets.venuepilot.com/e/verboden-th-2026-05-28-the-coffin-portland-bd191b"],
    sceneFit: ["darkwave", "EBM", "post-punk", "dark electronic"],
    section: "Pacific Northwest corridor",
    label: "Recently active Oregon corridor signal",
    whyItMatters:
      "Verboden Portland gives the guide an Oregon foothold and helps make the Pacific Northwest section feel like a real route rather than a loose cluster.",
    confirmed:
      "Official and official-linked sources support Verboden’s Portland presence and a 2026 city event, with darkwave and EBM language in the source trail.",
    checking:
      "The 2026 event has passed and source date ranges vary slightly between the homepage and Portland ticketing page. Avoid exact future-date claims until a new official announcement appears.",
  },
  {
    festivalName: "Mechanismus",
    slug: "mechanismus",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    officialUrl: "https://www.mechanismus.net/",
    sourceUrls: ["https://www.mechanismus.net/", "https://www.mechanismus.net/upcoming-shows.html", "https://www.mechanismus.net/activities.html"],
    sceneFit: ["industrial", "dark electronic", "EBM-adjacent", "Seattle underground"],
    section: "Pacific Northwest corridor",
    label: "Caveated Seattle industrial signal",
    whyItMatters:
      "Mechanismus gives the Seattle portion of this guide a harder-edged industrial and dark electronic signal alongside Verboden’s darkwave and post-punk route.",
    confirmed:
      "Official sources support Mechanismus as a Seattle industrial music organization with annual festival identity and future activity polling.",
    checking:
      "Exact future festival dates, festival venue, tickets, and lineup are not confirmed on the checked official pages. Do not use one-off show details as festival details.",
  },
];

const southernCaliforniaCards = guideCards.filter((card) => card.section === "Southern California anchors");
const pnwCards = guideCards.filter((card) => card.section === "Pacific Northwest corridor");
const heldBackLeads: HeldBackLead[] = [
  {
    name: "Substance — Los Angeles",
    reason: "Held until usable current official or ticketing sources confirm city details.",
  },
  {
    name: "Substance — San Francisco",
    reason: "Held until usable current official or ticketing sources confirm a San Francisco record.",
  },
  {
    name: "The Vth Gathering / San Francisco World Goth Day Festival — Alameda",
    reason: "A 2025 Alameda / Bay Area event is source-supported, but no future edition was confirmed.",
  },
  {
    name: "Out From The Shadows — Portland",
    reason: "The official-looking site currently lacks festival details.",
  },
  {
    name: "West Coast Women’s Darkwave Festival — Oakland",
    reason: "Historical darkwave reference only for this version.",
  },
  {
    name: "Cloak & Dagger Festival — Los Angeles",
    reason: "Historical Los Angeles reference only for this version.",
  },
];

export default function WestCoastPacificNorthwestDarkAlternativeGuidePage() {
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
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Regional discovery guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              West Coast &amp; Pacific Northwest Dark Alternative Festivals
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              A curated regional route through active atlas records, recently active festival signals, and carefully caveated dark alternative source trails from Southern California to Portland, Seattle, and Vancouver.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This guide follows the darker side of the West Coast festival circuit, from Southern California’s active atlas anchors to the Pacific Northwest’s recently active darkwave, post-punk, EBM, and industrial corridor.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              It is intentionally selective and source-aware. Some records are active atlas entries, some are recently active signals, and some are reference points whose next-edition details still need official confirmation. Treat this as a discovery route, not a live ticket calendar or location dataset.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide cards" value={`${guideCards.length} source-aware records`} />
              <AtlasFact label="Route" value="Southern California → Portland → Seattle → Vancouver" />
              <AtlasFact label="Main fresh signal" value="Recently active Verboden PNW corridor" />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">What this guide covers</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A regional route, not another genre directory.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The route starts in Southern California, where active atlas records like Darker Waves and Just Like Heaven help readers enter the broader retro alternative circuit. From there, it moves north into the Pacific Northwest, where Vancouver, Seattle, and Portland form a source-backed but date-sensitive darkwave, EBM, post-punk, and industrial corridor.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Southern California", "Portland", "Seattle", "Vancouver", "darkwave", "post-punk", "EBM", "industrial", "retro alternative"].map((tag) => (
              <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <GuideSection
          eyebrow="Southern California anchors"
          title="The route starts with active atlas records and careful reference points."
          description="Darker Waves and Just Like Heaven are active atlas records that help anchor the Southern California side of the route. Cruel World remains a useful Pasadena reference point, but next-edition details should be checked from official sources before treating it as current or upcoming."
          records={southernCaliforniaCards}
        />

        <GuideSection
          eyebrow="Pacific Northwest corridor"
          title="Verboden and Mechanismus give the guide its strongest regional value."
          description="Vancouver, Seattle, and Portland form the heart of this page as a recently active, source-backed darkwave, post-punk, EBM, industrial, and dark electronic corridor. Keep the cities separate, keep the dates cautious, and do not treat any of these records as location-ready."
          records={pnwCards}
          emphasized
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Source status</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Official sources first, then careful public wording.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest separates active atlas records from tracked signals and reference points. Official sources come first, and festival records are not treated as location-ready until place details are verified separately.
          </p>
          <Link className="mt-6 inline-flex raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/verification">
            How RetroAltFest verifies festival status
          </Link>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Still being watched</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Useful leads, but not public guide cards yet.
          </h2>
          <div className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-5 text-sm leading-7 text-[var(--raf-text-muted)]">
            <p>
              Spokane has an official-linked Verboden Showcase source trail, but it should stay a related signal rather than a full guide card until the relationship model is clearer and a future edition is officially announced.
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The following names remain useful research leads, historical references, or background context. They are held out of the public card set because the current source trail is past, weak, inaccessible, secondary-only, or not specific enough for current visitor-facing recommendations.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {heldBackLeads.map((lead) => (
              <li key={lead.name} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
                <span className="font-display text-lg font-semibold text-white">{lead.name}</span>
                <span className="mt-2 block">{lead.reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Related paths</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Keep the regional route distinct from the scene guides.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The Goth &amp; Darkwave guide is scene-first. The Industrial, EBM &amp; Dark Electronic guide is sound-first. The New Wave, Post-Punk &amp; Retro Alternative guide is genre-and-era focused. This page is region-first: a careful coastal path from retro alternative Southern California into the darker Pacific Northwest corridor.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={industrialEbmGuidePath}>
              Read the Industrial / EBM guide
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={retroAlternativeGuidePath}>
              Read the Retro Alternative guide
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
  records: GuideCard[];
  emphasized?: boolean;
}) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 leading-8 text-[var(--raf-text-muted)]">{description}</p>
      </div>

      <div className={`mt-7 grid gap-5 ${emphasized ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
        {records.map((record) => (
          <FestivalGuideCard key={record.slug} record={record} emphasized={emphasized} />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({ record, emphasized }: { record: GuideCard; emphasized: boolean }) {
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
          {record.label}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-white">Scene fit: {record.sceneFit.join(" · ")}</p>
      <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{record.whyItMatters}</p>

      <dl className="mt-5 grid gap-3">
        <AtlasFact label="What we’ve confirmed" value={record.confirmed} />
        <AtlasFact label="What we’re still checking" value={record.checking} />
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.sceneFit.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        {record.atlasPath ? (
          <Link className="inline-flex text-sm font-semibold text-[var(--raf-magenta)] transition hover:text-white" href={record.atlasPath}>
            View atlas entry
          </Link>
        ) : null}
        <a className="block break-words text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.officialUrl} target="_blank" rel="noreferrer">
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
