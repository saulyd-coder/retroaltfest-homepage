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
    "A curated RetroAltFest route through source-backed dark alternative festival signals from Southern California to Portland, Seattle, and Vancouver.",
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

const guideCards: GuideCard[] = [
  {
    festivalName: "Darker Waves",
    slug: "darker-waves",
    city: "Huntington Beach",
    region: "California",
    country: "United States",
    officialUrl: "https://www.darkerwavesfest.com/",
    sourceUrls: ["https://www.darkerwavesfest.com/", "https://www.darkerwavesfest.com/lineup"],
    sceneFit: ["retro alternative", "new wave", "post-punk", "synthpop", "dark nostalgia"],
    section: "Southern California anchors",
    label: "Southern California route anchor",
    whyItMatters:
      "Darker Waves gives this route a beachside Southern California entry point where familiar alternative sounds can lead readers toward darker synth, post-punk, and new wave discovery.",
    confirmed:
      "Official festival sources support Darker Waves as a Huntington Beach festival. The research packet also found official-source support for a 2026 date signal.",
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
    label: "Pasadena dark alternative reference point",
    whyItMatters:
      "Cruel World remains one of the most visible West Coast reference points for readers who find dark alternative music through the larger Southern California festival circuit.",
    confirmed: "Official sources support Cruel World’s Pasadena festival context and official festival identity.",
    checking:
      "Next-edition details should be checked before claiming current date status. RetroAltFest should not describe Cruel World as confirmed upcoming unless the official source trail clearly supports that at publication time.",
  },
  {
    festivalName: "Just Like Heaven",
    slug: "just-like-heaven",
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
    confirmed: "Official festival sources support Just Like Heaven’s Pasadena context and current official event information in the research packet.",
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
    label: "Northern corridor anchor",
    whyItMatters:
      "Verboden Vancouver gives the northern end of the route a clear dark alternative identity, with darkwave, post-punk, synth, industrial, goth, and EBM in one connected festival universe.",
    confirmed:
      "Official and official-linked sources support Verboden’s Vancouver presence. The research packet also found city-level and event-detail support from the linked ticketing source.",
    checking:
      "Ticket status, schedule details, and lineup information should be rechecked close to publication before adding specific claims beyond the source-supported city and festival context.",
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
    label: "Central PNW route stop",
    whyItMatters:
      "Verboden Seattle connects Seattle’s dark alternative identity with a wider regional festival trail, making it useful for readers looking beyond single-city listings.",
    confirmed:
      "Official and official-linked sources support Verboden’s Seattle presence. The research packet also noted source language around darkwave, post-punk, and EBM.",
    checking:
      "Ticket status and detailed schedule language should be rechecked before publication if the public page needs current sale status, set times, or artist-specific claims.",
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
    label: "Oregon corridor stop",
    whyItMatters:
      "Verboden Portland gives the guide an Oregon foothold and helps make the Pacific Northwest section feel like a real route rather than a loose cluster.",
    confirmed:
      "Official and official-linked sources support Verboden’s Portland presence. The research packet also noted darkwave and EBM language in the Portland source trail.",
    checking:
      "Full schedule, ticket status, and lineup details should be checked again before publication if the page needs anything more specific than the city and festival role.",
  },
  {
    festivalName: "Mechanismus",
    slug: "mechanismus",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    officialUrl: "https://www.mechanismus.net/",
    sourceUrls: ["https://www.mechanismus.net/", "https://www.mechanismus.net/upcoming-shows.html", "https://www.mechanismus.net/previous-bands.html"],
    sceneFit: ["industrial", "dark electronic", "EBM-adjacent", "Seattle underground"],
    section: "Pacific Northwest corridor",
    label: "Seattle industrial signal",
    whyItMatters:
      "Mechanismus gives the Seattle portion of this guide a harder-edged industrial and dark electronic anchor alongside Verboden’s darkwave and post-punk route.",
    confirmed:
      "Official sources support Mechanismus as a Seattle-based industrial music organization with annual festival identity and history.",
    checking:
      "Current festival-edition details are still being checked. Do not publish a current date, venue, ticket link, lineup, or edition-specific claim until official sources are refreshed and confirmed.",
  },
];

const southernCaliforniaCards = guideCards.filter((card) => card.section === "Southern California anchors");
const pnwCards = guideCards.filter((card) => card.section === "Pacific Northwest corridor");
const heldBackLeads = [
  "Substance — Los Angeles",
  "Substance — San Francisco",
  "The Vth Gathering / San Francisco World Goth Day Festival — Alameda",
  "Out From The Shadows — Portland",
  "West Coast Women’s Darkwave Festival — Oakland",
  "Cloak & Dagger Festival — Los Angeles",
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
              A curated route through source-backed dark alternative festival signals from Southern California to Portland, Seattle, and Vancouver.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This guide follows the darker side of the West Coast festival circuit, from Southern California’s retro alternative anchors to the Pacific Northwest’s darkwave, post-punk, EBM, and industrial corridor.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              It is intentionally selective. Some festivals are ready to include now, some are still being watched for next-edition details, and others are better treated as background context until the source trail is stronger.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide cards" value={`${guideCards.length} source-aware records`} />
              <AtlasFact label="Route" value="Southern California → Portland → Seattle → Vancouver" />
              <AtlasFact label="Main fresh signal" value="Verboden’s PNW corridor" />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">What this guide covers</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A regional route, not another genre directory.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The route starts in Southern California, where large retro alternative festivals help bring new wave, post-punk, synthpop, and darker nostalgia into a coastal festival frame. From there, it moves north into the Pacific Northwest, where Vancouver, Seattle, and Portland form a more concentrated darkwave, EBM, post-punk, and industrial discovery corridor.
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
          title="The route starts with retro alternative overlap."
          description="Darker Waves, Cruel World, and Just Like Heaven are handled as Southern California route context, not as recycled genre cards from the broader retro alternative guide."
          records={southernCaliforniaCards}
        />

        <GuideSection
          eyebrow="Pacific Northwest corridor"
          title="Verboden and Mechanismus give the guide its strongest regional value."
          description="Vancouver, Seattle, and Portland form the heart of this page: a source-aware darkwave, post-punk, EBM, industrial, and dark electronic route that should stay separate from any future map work until details are stronger."
          records={pnwCards}
          emphasized
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Still watching</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Useful leads, but not public guide cards yet.
          </h2>
          <div className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-5 text-sm leading-7 text-[var(--raf-text-muted)]">
            <p>
              Spokane remains a useful Verboden-related source trail to watch, but it should not become a standalone festival card until current status, event framing, and ticketing language are clearer.
            </p>
          </div>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The following names remain useful research leads, historical references, or background context, but they are held out of the public card set for this version:
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {heldBackLeads.map((lead) => (
              <li key={lead} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
                <span className="font-display text-lg font-semibold text-white">{lead}</span>
                <span className="mt-2 block">Held for more source cleanup before visitor-facing card treatment.</span>
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
