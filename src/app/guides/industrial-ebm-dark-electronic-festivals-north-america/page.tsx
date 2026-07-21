import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

const pagePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";

export const metadata: Metadata = buildMetadata({
  title: "Industrial, EBM & Dark Electronic Festivals in North America",
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
    <main className={styles.page}>
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article
        className={styles.content}
        data-article-contract="de81cbdb5ec67509b1af3114b37b4d87d8a1dd32aa50ace7e5346fd299334732"
      >
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">
            RetroAltFest
          </Link>
          <span className={styles.crumbDivider}>/</span>
          <Link href="/guides">
            Guides
          </Link>
          <span className={styles.crumbDivider}>/</span>
          <span className={styles.crumbCurrent}>Industrial / EBM / Dark Electronic</span>
        </nav>

        <section className={styles.masthead}>
          <span className={styles.mastheadTelemetry} aria-hidden="true" data-label="NT / CHANNEL 03C" />
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Curated scene guide</p>
            <h1 className={styles.mastheadTitle}>
              Industrial, EBM &amp; Dark Electronic Festivals in North America
            </h1>
            <p className={styles.mastheadLead}>
              Start here for North American industrial, EBM, post-industrial, and dark electronic festival discovery.
            </p>
            <p className={styles.mastheadCopy}>
              RetroAltFest separates active atlas records with current source support from related dark-scene overlap, recently active corridor signals, and reference records that need a future source refresh. We keep caveats visible because industrial and dark alternative events often overlap across goth, darkwave, synth, post-punk, and regional scenes.
            </p>
            <div className={styles.pathLinks}>
              <Link className={styles.primaryPath} href="/verification">
                See how RetroAltFest verifies festival records
              </Link>
              <Link className={styles.secondaryPath} href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className={styles.secondaryPath} href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className={styles.factGrid}>
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
          startIndex={1}
          variant="active"
        />

        <GuideSection
          eyebrow="Related dark-scene overlap"
          title="A linked atlas record for adjacent scene overlap."
          description="Absolution Fest is included as a related dark-scene bridge for readers whose industrial and dark electronic interests overlap with goth, darkwave, electronic, and post-punk programming."
          records={relatedOverlapRecords}
          startIndex={3}
          variant="adjacent"
        />

        <GuideSection
          eyebrow="Caveated scene signals to recheck before travel planning"
          title="Strong industrial and dark-electronic signals, clearly caveated."
          description="Mechanismus and Verboden matter to this scene, but neither receives a RetroAltFest festival detail CTA in this guide refresh."
          records={trackedSignals}
          startIndex={4}
          variant="caveated"
        />

        <GuideSection
          eyebrow="Reference and background signal"
          title="Useful context, not a current anchor."
          description="Dark Force Fest stays as background/reference because the official 2026 dates checked in this refresh have passed."
          records={referenceRecords}
          startIndex={6}
          variant="reference"
        />

        <section className={styles.heldSection} data-held-boundary="triton-festival">
          <p className={styles.sectionEyebrow}>Held from public card treatment</p>
          <h2 className={styles.sectionTitle}>
            Triton Festival stays held for now.
          </h2>
          <div className={styles.heldCopy}>
            {heldRecords.map((record) => (
              <p key={record.festivalName}>{record.note}</p>
            ))}
            <p>
              The refresh did not find usable current official future festival date, venue, lineup, or ticketing support, so Triton should not appear as a public festival card or linked detail route.
            </p>
          </div>
        </section>

        <section className={styles.statusSection} data-status-ledger>
          <p className={styles.sectionEyebrow}>Guide labels</p>
          <h2 className={styles.sectionTitle}>
            How RetroAltFest labels this guide
          </h2>
          <p className={styles.sectionDescription}>
            RetroAltFest keeps source caveats visible so readers can tell active atlas records from related overlap, recently active signals, and records still waiting on stronger official support.
          </p>
          <div className={styles.statusGrid}>
            {statusLabels.map((status) => (
              <div key={status.label} className={styles.statusDefinition}>
                <h3>{status.label}</h3>
                <p>{status.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.relatedSection}>
          <p className={styles.relatedEyebrow}>Related paths</p>
          <h2 className={styles.sectionTitle}>
            Follow the overlap without blurring the labels.
          </h2>
          <p className={styles.sectionDescription}>
            This guide pairs with the existing Goth &amp; Darkwave guide while keeping Industrial, EBM, and dark electronic discovery distinct.
          </p>
          <div className={styles.pathLinks}>
            <Link className={styles.secondaryPath} href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className={styles.primaryPath} href="/festivals">
              Browse the festival atlas
            </Link>
            <Link className={styles.secondaryPath} href="/verification">
              How RetroAltFest handles source checks
            </Link>
          </div>
        </section>

        <section className={styles.closingSection}>
          <p className={styles.relatedEyebrow}>Closing note</p>
          <h2 className={styles.sectionTitle}>
            The industrial guide expands only as sources hold.
          </h2>
          <p className={styles.sectionDescription}>
            This guide will expand only as more North American industrial, EBM, dark electronic, and post-industrial festivals have enough official or reliable source support to publish. RetroAltFest’s goal is not to inflate the list quickly; it is to keep source-supported records, related overlap, and background references clearly separated.
          </p>
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

type GuideVariant = "active" | "adjacent" | "caveated" | "reference";

function GuideSection({
  eyebrow,
  title,
  description,
  records,
  startIndex,
  variant,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
  startIndex: number;
  variant: GuideVariant;
}) {
  const sectionClass = {
    active: styles.activeSection,
    adjacent: styles.adjacentSection,
    caveated: styles.caveatedSection,
    reference: styles.referenceSection,
  }[variant];

  return (
    <section className={`${styles.guideSection} ${sectionClass}`} data-guide-variant={variant}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>
      </div>

      <div className={styles.recordList}>
        {records.map((record, index) => (
          <FestivalGuideCard
            key={record.festivalName}
            record={record}
            recordIndex={startIndex + index}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({
  record,
  recordIndex,
  variant,
}: {
  record: GuideRecord;
  recordIndex: number;
  variant: GuideVariant;
}) {
  const recordClass = {
    active: styles.activeRecord,
    adjacent: styles.adjacentRecord,
    caveated: styles.caveatedRecord,
    reference: styles.referenceRecord,
  }[variant];

  return (
    <article className={`${styles.festivalRecord} ${recordClass}`} data-festival-record={record.festivalName}>
      <span className={styles.recordIndex} aria-hidden="true" data-index={String(recordIndex).padStart(2, "0")} />
      <div className={styles.recordHeader}>
        <div>
          <p className={styles.recordLocation}>
            {record.city} · {record.region} · {record.country}
          </p>
          <h3 className={styles.recordTitle}>{record.festivalName}</h3>
        </div>
        <span className={styles.recordStatus}>
          {record.statusLabel}
        </span>
      </div>

      <p className={styles.sceneFit}>Scene fit: {record.sceneFit}</p>
      <p className={styles.recordSummary}>{record.summary}</p>
      <p className={styles.curatorNote}>
        <span>Curator note: </span>{record.sourceCaveat}
      </p>

      <dl className={styles.factList}>
        <RecordFact label="What sources support" value={record.sourceSupport} />
        <RecordFact label="What to recheck" value={record.recheckDetails} />
        {record.officialUrl ? (
          <div className={`${styles.fact} ${styles.sourceFact}`}>
            <dt className={styles.factLabel}>Official source</dt>
            <dd className={styles.factValue}>
              <a className={styles.officialLink} href={record.officialUrl} target="_blank" rel="noreferrer">
                {record.officialUrl.replace(/^https?:\/\//, "")}
              </a>
            </dd>
          </div>
        ) : null}
        {record.atlasPath ? (
          <div className={`${styles.fact} ${styles.atlasFact}`}>
            <dt className={styles.factLabel}>RetroAltFest atlas</dt>
            <dd className={styles.factValue}>
              <Link className={styles.atlasLink} href={record.atlasPath}>
                View atlas record
              </Link>
            </dd>
          </div>
        ) : null}
      </dl>

      <p className={styles.relevanceNote}>
        <span>Industrial / EBM relevance: </span>{record.industrialEbmRelevance}
      </p>

      <div className={styles.tagList}>
        {record.genreTags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
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
