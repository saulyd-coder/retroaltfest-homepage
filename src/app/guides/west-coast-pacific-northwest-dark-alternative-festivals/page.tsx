import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

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
    <main className={styles.page}>
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">
            RetroAltFest
          </Link>
          <span className={styles.crumbDivider}>/</span>
          <Link href="/guides">
            Guides
          </Link>
        </nav>

        <section className={styles.masthead}>
          <span className={styles.mastheadTelemetry} aria-hidden="true" data-label="NT / REGION 03B" />
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Regional discovery guide</p>
            <h1 className={styles.mastheadTitle}>
              West Coast &amp; Pacific Northwest Dark Alternative Festivals
            </h1>
            <p className={styles.mastheadLead}>
              A curated regional route through active atlas records, recently active festival signals, and carefully caveated dark alternative source trails from Southern California to Portland, Seattle, and Vancouver.
            </p>
            <p className={styles.mastheadCopy}>
              This guide follows the darker side of the West Coast festival circuit, from Southern California’s active atlas anchors to the Pacific Northwest’s recently active darkwave, post-punk, EBM, and industrial corridor.
            </p>
            <p className={styles.mastheadCopy}>
              It is intentionally selective and source-aware. Some records are active atlas entries, some are recently active signals, and some are reference points whose next-edition details still need official confirmation. Treat this as a discovery route, not a live ticket calendar or location dataset.
            </p>
            <div className={styles.factGrid}>
              <AtlasFact label="Guide cards" value={`${guideCards.length} source-aware records`} />
              <AtlasFact label="Route" value="Southern California → Portland → Seattle → Vancouver" />
              <AtlasFact label="Main fresh signal" value="Recently active Verboden PNW corridor" />
            </div>
          </div>
        </section>

        <section className={styles.coverSection}>
          <p className={styles.sectionEyebrow}>What this guide covers</p>
          <h2 className={styles.sectionTitle}>
            A regional route, not another genre directory.
          </h2>
          <p className={styles.sectionDescription}>
            The route starts in Southern California, where active atlas records like Darker Waves and Just Like Heaven help readers enter the broader retro alternative circuit. From there, it moves north into the Pacific Northwest, where Vancouver, Seattle, and Portland form a source-backed but date-sensitive darkwave, EBM, post-punk, and industrial corridor.
          </p>
          <div className={styles.tagList}>
            {["Southern California", "Portland", "Seattle", "Vancouver", "darkwave", "post-punk", "EBM", "industrial", "retro alternative"].map((tag) => (
              <span key={tag} className={styles.tag}>
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
          startIndex={1}
        />

        <GuideSection
          eyebrow="Pacific Northwest corridor"
          title="Verboden and Mechanismus give the guide its strongest regional value."
          description="Vancouver, Seattle, and Portland form the heart of this page as a recently active, source-backed darkwave, post-punk, EBM, industrial, and dark electronic corridor. Keep the cities separate, keep the dates cautious, and do not treat any of these records as location-ready."
          records={pnwCards}
          startIndex={4}
        />

        <section className={styles.sourceSection}>
          <p className={styles.sourceEyebrow}>Source status</p>
          <h2 className={styles.sectionTitle}>
            Official sources first, then careful public wording.
          </h2>
          <p className={styles.sectionDescription}>
            RetroAltFest separates active atlas records from tracked signals and reference points. Official sources come first, and festival records are not treated as location-ready until place details are verified separately.
          </p>
          <Link className={styles.sourceLink} href="/verification">
            How RetroAltFest verifies festival status
          </Link>
        </section>

        <section className={styles.heldBackSection} data-held-back-leads>
          <p className={styles.sectionEyebrow}>Still being watched</p>
          <h2 className={styles.sectionTitle}>
            Useful leads, but not public guide cards yet.
          </h2>
          <div className={styles.spokaneNote} data-spokane-context>
            <p>
              Spokane has an official-linked Verboden Showcase source trail, but it should stay a related signal rather than a full guide card until the relationship model is clearer and a future edition is officially announced.
            </p>
          </div>
          <p className={styles.sectionDescription}>
            The following names remain useful research leads, historical references, or background context. They are held out of the public card set because the current source trail is past, weak, inaccessible, secondary-only, or not specific enough for current visitor-facing recommendations.
          </p>
          <ul className={styles.heldBackList}>
            {heldBackLeads.map((lead) => (
              <li key={lead.name} className={styles.heldBackItem}>
                <span className={styles.heldBackName}>{lead.name}</span>
                <span className={styles.heldBackReason}>{lead.reason}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.relatedSection}>
          <p className={styles.sourceEyebrow}>Related paths</p>
          <h2 className={styles.sectionTitle}>
            Keep the regional route distinct from the scene guides.
          </h2>
          <p className={styles.sectionDescription}>
            The Goth &amp; Darkwave guide is scene-first. The Industrial, EBM &amp; Dark Electronic guide is sound-first. The New Wave, Post-Punk &amp; Retro Alternative guide is genre-and-era focused. This page is region-first: a careful coastal path from retro alternative Southern California into the darker Pacific Northwest corridor.
          </p>
          <div className={styles.pathLinks}>
            <Link className={styles.secondaryPath} href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className={styles.secondaryPath} href={industrialEbmGuidePath}>
              Read the Industrial / EBM guide
            </Link>
            <Link className={styles.secondaryPath} href={retroAlternativeGuidePath}>
              Read the Retro Alternative guide
            </Link>
            <Link className={styles.primaryPath} href="/festivals">
              Browse the festival atlas
            </Link>
          </div>
        </section>

        <div className={styles.relatedPaths} data-discovery-links>
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
        </div>
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
  startIndex,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideCard[];
  startIndex: number;
}) {
  return (
    <section className={styles.guideSection} data-guide-section={eyebrow}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>
      </div>

      <div className={styles.recordList}>
        {records.map((record, index) => (
          <FestivalGuideCard key={record.slug} record={record} recordIndex={startIndex + index} />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({ record, recordIndex }: { record: GuideCard; recordIndex: number }) {
  const isActive = Boolean(record.atlasPath);

  return (
    <article className={`${styles.festivalRecord} ${isActive ? styles.activeRecord : styles.referenceRecord}`} data-festival-record={record.slug}>
      <span className={styles.recordIndex} aria-hidden="true" data-index={String(recordIndex).padStart(2, "0")} />
      <div className={styles.recordHeader}>
        <div>
          <p className={styles.recordLocation}>
            {record.city} · {record.region} · {record.country}
          </p>
          <h3 className={styles.recordTitle}>{record.festivalName}</h3>
        </div>
        <span className={styles.recordStatus}>
          {record.label}
        </span>
      </div>

      <p className={styles.sceneFit}>Scene fit: {record.sceneFit.join(" · ")}</p>
      <p className={styles.recordSummary}>{record.whyItMatters}</p>

      <dl className={styles.factList}>
        <RecordFact label="What we’ve confirmed" value={record.confirmed} />
        <RecordFact label="What we’re still checking" value={record.checking} />
      </dl>

      <div className={styles.tagList}>
        {record.sceneFit.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.recordLinks}>
        {record.atlasPath ? (
          <Link className={styles.atlasLink} href={record.atlasPath}>
            View atlas entry
          </Link>
        ) : null}
        <a className={styles.officialLink} href={record.officialUrl} target="_blank" rel="noreferrer">
          Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
        </a>
        <p className={styles.sourceCount}>Sources checked: {record.sourceUrls.length} official or reliable pages.</p>
      </div>
    </article>
  );
}

function AtlasFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <p className={styles.factLabel}>{label}</p>
      <p className={styles.factValue}>{value}</p>
    </div>
  );
}

function RecordFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.factLabel}>{label}</dt>
      <dd className={styles.factValue}>{value}</dd>
    </div>
  );
}
