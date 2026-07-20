import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

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
          <span className={styles.crumbDivider}>/</span>
          <span className={styles.crumbCurrent}>North American Goth &amp; Darkwave</span>
        </nav>

        <section className={styles.masthead}>
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Curated scene guide</p>
            <h1 className={styles.mastheadTitle}>
              North American Goth &amp; Darkwave Festivals: A Curated Guide
            </h1>
            <p className={styles.mastheadLead}>
              This guide highlights North American goth and darkwave festival records that RetroAltFest can describe from official or organizer-controlled sources.
            </p>
            <p className={styles.mastheadCopy}>
              Some entries are active atlas records with current 2026 source support; others are kept as reference signals when their next edition is not yet confirmed. We keep source caveats visible because RetroAltFest is built around verified-before-mapped discovery, not guessed dates, ticket claims, or location shortcuts.
            </p>
            <div className={styles.pathLinks}>
              <Link className={styles.primaryPath} href="/verification">
                See how RetroAltFest handles verification
              </Link>
              <Link className={styles.secondaryPath} href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className={styles.secondaryPath} href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className={styles.factGrid}>
              <AtlasFact label="Guide records" value={`${allRecords.length} checked examples`} />
              <AtlasFact label="Active atlas links" value={`${activeAtlasRecords.length} source-supported records`} />
              <AtlasFact label="Scope" value="North America first" />
            </div>
          </div>
        </section>

        <GuideSection
          id="active-atlas-records"
          eyebrow="Source-supported active atlas records"
          title="Four active atlas records with current source support."
          description="These are the guide cards with direct RetroAltFest atlas links. Each one is tied to official or organizer-controlled 2026 source support rather than a broad page-level status claim."
          records={activeAtlasRecords}
          startIndex={1}
          variant="active"
        />

        <GuideSection
          id="reference-signals"
          eyebrow="Reference signals to recheck before travel planning"
          title="Tracked dark-scene signals and related references."
          description="These entries matter to the North American dark alternative landscape, but they are intentionally not active-linked as atlas detail records in this guide refresh."
          records={referenceSignals}
          startIndex={5}
          variant="reference"
        />

        <section className={styles.statusSection} id="status-language">
          <p className={styles.statusEyebrow}>Status language</p>
          <h2 className={styles.sectionTitle}>
            How RetroAltFest labels this guide
          </h2>
          <div className={styles.statusGrid}>
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

        <section className={styles.closingSection} id="closing-note">
          <p className={styles.closingEyebrow}>Closing note</p>
          <h2 className={styles.sectionTitle}>
            The atlas expands only as sources hold.
          </h2>
          <p className={styles.closingCopy}>
            RetroAltFest keeps caveats visible so readers can tell the difference between active atlas records, recently active signals, and related reference points. The goal is not to publish the biggest list quickly; it is to build a trustworthy discovery layer where each festival is labeled clearly before it enters deeper location review.
          </p>
          <div className={styles.pathLinks}>
            <Link className={styles.primaryPath} href="/verification">
              How RetroAltFest verifies festival records
            </Link>
            <Link className={styles.secondaryPath} href="/festivals">
              Open the current atlas
            </Link>
          </div>
        </section>

        <div className={styles.relatedPaths} id="related-paths">
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
  id,
  eyebrow,
  title,
  description,
  records,
  startIndex,
  variant,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
  startIndex: number;
  variant: "active" | "reference";
}) {
  return (
    <section
      className={`${styles.guideSection} ${variant === "active" ? styles.activeSection : styles.referenceSection}`}
      id={id}
    >
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
  variant: "active" | "reference";
}) {
  return (
    <article
      className={`${styles.festivalRecord} ${variant === "active" ? styles.activeRecord : styles.referenceRecord}`}
    >
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
        <AtlasFact label="What sources support" value={record.confirmedDetails} />
        <AtlasFact label="What to recheck" value={record.recheckDetails} />
        <div className={`${styles.fact} ${styles.sourceFact}`}>
          <dt className={styles.factLabel}>Official source</dt>
          <dd className={styles.factValue}>
            <a className={styles.officialLink} href={record.officialUrl} target="_blank" rel="noreferrer">
              {record.officialUrl.replace(/^https?:\/\//, "")}
            </a>
          </dd>
        </div>
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

function StatusCard({ label, description }: { label: string; description: string }) {
  const isActive = label === "Active atlas record with 2026 source support";

  return (
    <div className={`${styles.statusCard} ${isActive ? styles.activeStatusCard : styles.contextStatusCard}`}>
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
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
