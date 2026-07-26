import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

const pagePath = "/guides/european-goth-darkwave-industrial-festivals";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";
const industrialEbmGuidePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";

export const metadata: Metadata = buildMetadata({
  title: "Selected Goth, Darkwave & Industrial Festivals in Europe",
  description:
    "A source-aware guide to selected European goth, darkwave, industrial, EBM, and post-punk festivals documented by RetroAltFest.",
  path: pagePath,
  type: "article",
  keywords: [
    "selected European goth festivals",
    "European darkwave festivals",
    "European industrial festivals",
    "European EBM festivals",
    "European post-punk festivals",
    "dark alternative festivals Europe",
  ],
});

type FestivalProfile = {
  festivalName: string;
  slug: string;
  atlasPath: string;
  city: string;
  country: string;
  dateText: string;
  format: string;
  sceneFit: string;
  statusLabel: string;
  statusKind: "current" | "historical";
  orientation: string;
  difference: string;
  verificationNote: string;
  comparisonSummary: string;
};

const festivalProfiles: FestivalProfile[] = [
  {
    festivalName: "Wave-Gotik-Treffen",
    slug: "wave-gotik-treffen",
    atlasPath: "/festivals/wave-gotik-treffen",
    city: "Leipzig",
    country: "Germany",
    dateText: "14–17 May 2027",
    format: "City-spanning, multi-venue gathering",
    sceneFit: "Goth · darkwave · industrial · post-punk · broad dark alternative",
    statusLabel: "Confirmed upcoming",
    statusKind: "current",
    orientation:
      "Wave-Gotik-Treffen turns Leipzig into the festival setting rather than containing the experience inside one site. Its official information describes a distributed gathering across about 50 venues, so the route through clubs, halls, cultural spaces, and the city itself is part of what distinguishes it.",
    difference:
      "Start here when the multi-venue format is the main attraction and a broad dark-alternative spectrum matters more than a single tightly defined sound. It is the clearest contrast in this guide to the airfield, academy, park, and castle settings below.",
    verificationNote:
      "The 34th edition is officially announced for 14–17 May 2027. RetroAltFest preserves the Leipzig-wide model rather than reducing the festival to one venue.",
    comparisonSummary: "The widest geographic footprint in this selected set, spread across Leipzig venues.",
  },
  {
    festivalName: "M’era Luna Festival",
    slug: "mera-luna-festival",
    atlasPath: "/festivals/mera-luna-festival",
    city: "Hildesheim",
    country: "Germany",
    dateText: "8–9 August 2026",
    format: "Large destination festival at an airfield",
    sceneFit: "Goth · darkwave · industrial · synthpop · metal · dark alternative",
    statusLabel: "Confirmed upcoming",
    statusKind: "current",
    orientation:
      "M’era Luna concentrates a broad dark-alternative program at Airfield Hildesheim Drispenstedt. Compared with the city-spanning shape of Wave-Gotik-Treffen, its identity is easier to read as a destination festival weekend centered on a defined festival site.",
    difference:
      "Its scene range crosses goth, darkwave, industrial, synthpop, metal, and adjacent dark alternative. That makes it useful when a reader wants a broad mixed-scene setting without making a narrow industrial or post-punk preference the only deciding factor.",
    verificationNote:
      "The official festival sources support 8–9 August 2026 and Airfield Hildesheim Drispenstedt. The edition is currently documented as confirmed upcoming.",
    comparisonSummary: "A broad mixed-scene destination weekend centered on the Hildesheim airfield.",
  },
  {
    festivalName: "Infest Festival",
    slug: "infest-festival",
    atlasPath: "/festivals/infest-festival",
    city: "Manchester",
    country: "United Kingdom",
    dateText: "21–23 August 2026",
    format: "Focused venue-based gathering",
    sceneFit: "EBM · industrial · noise · synthpop · darkwave · post-punk",
    statusLabel: "Confirmed upcoming",
    statusKind: "current",
    orientation:
      "Infest offers the most concentrated industrial-and-EBM starting point in this group. Its documented Manchester setting is Manchester Academy at The University of Manchester Students’ Union, giving the guide a focused venue-based format rather than another open festival campus or city-wide route.",
    difference:
      "The supported scene mix includes EBM, industrial, noise, synthpop, darkwave, and post-punk. Readers drawn first to harder electronic and industrial currents can use Infest as the clearest sound-led comparison before opening the festival-specific record.",
    verificationNote:
      "Official sources support Infest 2026 for 21–23 August at the documented Manchester venue. No edition after 2026 is implied here.",
    comparisonSummary: "The most directly industrial-and-EBM-focused option in a concentrated venue setting.",
  },
  {
    festivalName: "NCN Festival / Nocturnal Culture Night",
    slug: "ncn-festival-nocturnal-culture-night",
    atlasPath: "/festivals/ncn-festival-nocturnal-culture-night",
    city: "Deutzen",
    country: "Germany",
    dateText: "4–6 September 2026; separate warm-up on 3 September",
    format: "Scene-centered festival in a park setting",
    sceneFit: "Goth · darkwave · industrial · synthpop · post-punk · dark alternative",
    statusLabel: "Confirmed upcoming",
    statusKind: "current",
    orientation:
      "NCN brings a wide nocturnal-culture mix into Kulturpark Deutzen near Leipzig. The park setting and scene-centered identity make it a useful middle path between a tightly venue-based gathering and the much wider urban footprint of Wave-Gotik-Treffen.",
    difference:
      "Its documented mix covers goth, darkwave, industrial, synthpop, post-punk, and broader dark alternative. Choose this profile when the appeal lies in several connected scenes sharing one concentrated setting rather than a single genre lane.",
    verificationNote:
      "The festival dates are 4–6 September 2026. The official source identifies a warm-up on 3 September separately, so this guide does not merge that date into the festival span or imply an edition after 2026.",
    comparisonSummary: "A mixed-scene park gathering with a separately identified warm-up date.",
  },
  {
    festivalName: "Castle Party Festival",
    slug: "castle-party-festival",
    atlasPath: "/festivals/castle-party-festival",
    city: "Bolków",
    country: "Poland",
    dateText: "16–19 July 2026",
    format: "Castle-centered destination context",
    sceneFit: "Goth · darkwave · industrial · post-punk · dark alternative",
    statusLabel: "Historical/reference — Castle Party Festival 2026 took place 16–19 July 2026.",
    statusKind: "historical",
    orientation:
      "Castle Party remains useful here because Bolków Castle shows how strongly a European dark-alternative festival can be defined by place. Its 2026 edition belongs in the comparison as documented context, not as a currently announced future option.",
    difference:
      "Use this record to understand the castle-centered destination format and to continue into the supported history of the 2026 edition. It is deliberately separated from the four current records so atmosphere does not blur temporal status.",
    verificationNote:
      "No later edition announcement was found on the checked official pages. That absence does not establish cancellation or non-return, and this guide does not present Castle Party as an upcoming planning option.",
    comparisonSummary: "Historical/reference context for a place-led festival at Bolków Castle.",
  },
];

const currentProfiles = festivalProfiles.filter((profile) => profile.statusKind === "current");
const historicalProfiles = festivalProfiles.filter((profile) => profile.statusKind === "historical");

const formatPaths = [
  {
    title: "City-spanning and multi-venue",
    festival: "Wave-Gotik-Treffen",
    copy: "The festival footprint extends across Leipzig. Movement between venues and city spaces is part of the documented format, so it should not be compared as though it were one enclosed festival site.",
  },
  {
    title: "Large destination festival",
    festival: "M’era Luna Festival",
    copy: "The Hildesheim airfield creates a defined destination-weekend setting for a broad mixture of goth, darkwave, industrial, synthpop, metal, and adjacent dark alternative.",
  },
  {
    title: "Focused venue-based gathering",
    festival: "Infest Festival",
    copy: "The Manchester Academy setting gives Infest a concentrated shape, while its supported EBM, industrial, noise, synthpop, darkwave, and post-punk range makes the sound emphasis unusually clear.",
  },
  {
    title: "Scene-centered park setting",
    festival: "NCN Festival",
    copy: "Kulturpark Deutzen brings several related nocturnal scenes into one focused setting. It offers a different sense of scale and movement from both the city-wide and academy-based formats.",
  },
];

const scenePaths = [
  {
    title: "Goth and darkwave",
    copy: "All four current records can open this path, but they do so differently: through a city-wide gathering, an airfield destination, a harder electronic venue program, or a mixed-scene park setting.",
  },
  {
    title: "Industrial and EBM",
    copy: "Infest is the most directly focused starting point in this selection. Wave-Gotik-Treffen, M’era Luna, and NCN widen that path into broader dark-alternative programming without becoming interchangeable.",
  },
  {
    title: "Post-punk and adjacent dark alternative",
    copy: "Wave-Gotik-Treffen, Infest, and NCN carry documented post-punk relevance, while the wider set shows how that sound can sit alongside goth, darkwave, synthpop, industrial, and other adjacent currents.",
  },
  {
    title: "Broad mixed-scene programming",
    copy: "M’era Luna and NCN are useful comparison points when range matters. Their formats remain distinct: one is an airfield destination weekend, while the other is rooted in the Kulturpark Deutzen setting.",
  },
];

export default function EuropeanGothDarkwaveIndustrialFestivalsGuidePage() {
  return (
    <main className={styles.page} data-guide-family="night-transmission">
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">RetroAltFest</Link>
          <span className={styles.crumbDivider} aria-hidden="true">/</span>
          <Link href="/guides">Guides</Link>
        </nav>

        <section className={styles.masthead}>
          <span className={styles.mastheadTelemetry} aria-hidden="true" data-label="NT / EUROPE 05B.1" />
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Selected regional transmission</p>
            <h1 className={styles.mastheadTitle}>
              Selected Goth, Darkwave &amp; Industrial Festivals in Europe
            </h1>
            <p className={styles.mastheadLead}>
              A curated starting point for comparing documented European festival experiences across goth, darkwave, industrial, EBM, post-punk, and adjacent dark alternative scenes.
            </p>
            <p className={styles.mastheadCopy}>
              This is not a complete list of every European dark-alternative festival. It is a deliberately selected route through the current RetroAltFest records whose source state and festival format can be described carefully today.
            </p>
            <p className={styles.mastheadCopy}>
              Use it to decide whether a city-spanning gathering, an airfield destination, a focused venue program, or a scene-centered park setting sounds closer to the experience you want. Then open the individual atlas record before making plans.
            </p>
            <div className={styles.mastheadActions}>
              <Link className={styles.primaryPath} href="/festivals">
                Browse the Festival Directory
              </Link>
              <Link className={styles.secondaryPath} href="#quick-orientation">
                Start with quick orientation
              </Link>
            </div>
            <div className={styles.factGrid}>
              <GuideFact label="Current records" value="Four source-supported festival profiles" />
              <GuideFact label="Reference context" value="One completed 2026 edition, clearly separated" />
              <GuideFact label="Guide lens" value="Region first · format and scene second" />
            </div>
          </div>
        </section>

        <nav className={styles.sectionNav} aria-label="Guide sections">
          <p className={styles.sectionNavLabel}>Tune this guide</p>
          <div className={styles.sectionNavLinks}>
            <a href="#quick-orientation">Quick orientation</a>
            <a href="#festival-format">Festival format</a>
            <a href="#scene-emphasis">Scene emphasis</a>
            <a href="#festival-profiles">Festival profiles</a>
            <a href="#comparison">Comparison</a>
            <a href="#verification-note">Verification note</a>
          </div>
        </nav>

        <section className={styles.guideSection} id="quick-orientation">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Quick orientation</p>
            <h2 className={styles.sectionTitle}>Four current records, plus one clearly historical reference.</h2>
            <p className={styles.sectionDescription}>
              The current route begins with Wave-Gotik-Treffen in Leipzig, M’era Luna in Hildesheim, Infest in Manchester, and NCN in Deutzen. Each has a source-supported upcoming edition, but the experiences are structurally different enough that a simple genre list would hide the useful part of the comparison.
            </p>
            <p className={styles.sectionDescription}>
              Castle Party appears separately as historical/reference context for its completed 2026 edition at Bolków Castle. It is not blended into the current set and should not be read as an announced future travel option. Dates, locations, and status should always be checked again against official sources before planning.
            </p>
          </div>
          <div className={styles.orientationGrid}>
            {currentProfiles.map((profile) => (
              <Link className={styles.orientationLink} href={profile.atlasPath} key={profile.slug}>
                <span>{profile.festivalName}</span>
                <small>{profile.format}</small>
              </Link>
            ))}
            {historicalProfiles.map((profile) => (
              <Link className={`${styles.orientationLink} ${styles.orientationHistorical}`} href={profile.atlasPath} key={profile.slug}>
                <span>{profile.festivalName}</span>
                <small>Historical/reference context</small>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.guideSection} id="festival-format">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Choose by festival format</p>
            <h2 className={styles.sectionTitle}>Start with how you want the festival to feel in space.</h2>
            <p className={styles.sectionDescription}>
              Genre overlap is only part of the decision. These records range from a festival distributed across a city to gatherings centered on an airfield, academy, or park. The format changes how a reader should compare them before any artist-level details enter the picture.
            </p>
          </div>
          <div className={styles.choiceGrid}>
            {formatPaths.map((path, index) => (
              <article className={styles.choicePanel} key={path.title}>
                <span className={styles.choiceIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.choiceFestival}>{path.festival}</p>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.guideSection} id="scene-emphasis">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Choose by scene emphasis</p>
            <h2 className={styles.sectionTitle}>Use the scene mix as guidance, not a rigid ranking.</h2>
            <p className={styles.sectionDescription}>
              The supported tags overlap, but the emphasis shifts. A reader beginning with industrial and EBM may enter through a different record than someone seeking the broadest goth and darkwave gathering. These pathways summarize the documented scene fit without claiming that any festival belongs to only one lane.
            </p>
          </div>
          <div className={styles.sceneGrid}>
            {scenePaths.map((path) => (
              <article className={styles.scenePanel} key={path.title}>
                <h3>{path.title}</h3>
                <p>{path.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.guideSection} id="festival-profiles">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Festival profiles</p>
            <h2 className={styles.sectionTitle}>Read the difference before following the detail route.</h2>
            <p className={styles.sectionDescription}>
              These profiles are editorial orientation, not replacements for the festival records. Each one names the documented format, broad scene fit, current public status, and the source caveat that most affects how it should be understood.
            </p>
          </div>
          <div className={styles.recordList}>
            {festivalProfiles.map((profile, index) => (
              <FestivalProfileCard key={profile.slug} profile={profile} recordIndex={index + 1} />
            ))}
          </div>
        </section>

        <section className={styles.guideSection} id="comparison" data-comparison-framework>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Comparison framework</p>
            <h2 className={styles.sectionTitle}>Compare format, scene emphasis, and status without scoring festivals.</h2>
            <p className={styles.sectionDescription}>
              There is no winner here. The useful choice depends on whether the reader prioritizes geographic footprint, a concentrated setting, a particular sound emphasis, or a currently documented edition. Every row keeps its status in text so the distinction never depends on color alone.
            </p>
          </div>
          <div className={styles.comparisonGrid} role="list" aria-label="Selected festival comparison">
            {festivalProfiles.map((profile) => (
              <article className={`${styles.comparisonItem} ${profile.statusKind === "historical" ? styles.comparisonHistorical : ""}`} role="listitem" key={profile.slug}>
                <div className={styles.comparisonHeader}>
                  <h3>{profile.festivalName}</h3>
                  <span>{profile.statusKind === "current" ? "Current record" : "Historical/reference"}</span>
                </div>
                <dl className={styles.comparisonFacts}>
                  <ComparisonFact label="Country / city" value={`${profile.country} · ${profile.city}`} />
                  <ComparisonFact label="Format" value={profile.format} />
                  <ComparisonFact label="Broad scene fit" value={profile.sceneFit} />
                  <ComparisonFact label="Current public status" value={profile.statusLabel} />
                </dl>
                <p className={styles.comparisonSummary}>{profile.comparisonSummary}</p>
                <Link className={styles.atlasLink} href={profile.atlasPath}>
                  Read the {profile.festivalName} festival record
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.verificationSection} id="verification-note">
          <p className={styles.sourceEyebrow}>Planning and verification note</p>
          <h2 className={styles.sectionTitle}>Official sources remain controlling.</h2>
          <p className={styles.sectionDescription}>
            Festival dates, locations, and edition states can change. RetroAltFest separates confirmed upcoming records from historical/reference context, preserves uncertainty when a later edition is not announced, and links each profile to a deeper festival-specific page. Recheck the current official sources shown on that record before using any date or location for planning.
          </p>
          <p className={styles.sectionDescription}>
            This guide is a regional discovery layer over a small, documented set. It does not convert source gaps into assumptions, imply that any festival will necessarily return, or turn a completed edition into an upcoming recommendation.
          </p>
          <Link className={styles.sourceLink} href="/verification">
            See how RetroAltFest verifies festival records
          </Link>
        </section>

        <div className={styles.relatedPaths} data-discovery-links>
          <DiscoveryLinks
            title="Continue exploring RetroAltFest."
            description="Move from this selected European route into the current atlas view, compare scene-first North American guides, or review the source method behind every status label."
            links={[
              {
                href: "/festivals",
                label: "Browse the Festival Directory",
                description: "Explore all current RetroAltFest atlas records and open their festival-specific source notes.",
              },
              {
                href: "/guides",
                label: "Return to the Guides Hub",
                description: "Compare the currently published regional and scene-first discovery routes.",
              },
              {
                href: gothDarkwaveGuidePath,
                label: "Read the Goth & Darkwave guide",
                description: "Continue through a scene-first North American route built around goth and darkwave discovery.",
              },
              {
                href: industrialEbmGuidePath,
                label: "Read the Industrial / EBM guide",
                description: "Compare a sound-first North American route focused on industrial, EBM, and dark electronic records.",
              },
              {
                href: "/verification",
                label: "Review the verification method",
                description: "See how current, uncertain, and historical/reference festival states are kept distinct.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </main>
  );
}

function FestivalProfileCard({ profile, recordIndex }: { profile: FestivalProfile; recordIndex: number }) {
  const isHistorical = profile.statusKind === "historical";

  return (
    <article
      className={`${styles.festivalRecord} ${isHistorical ? `${styles.historicalRecord} ${styles.referenceRecord}` : styles.currentRecord}`}
      data-festival-record={profile.slug}
      data-record-variant={profile.statusKind}
    >
      <span className={styles.recordIndex} aria-hidden="true" data-index={String(recordIndex).padStart(2, "0")} />
      <div className={styles.recordHeader}>
        <div>
          <p className={styles.recordLocation}>{profile.city} · {profile.country}</p>
          <h3 className={styles.recordTitle}>{profile.festivalName}</h3>
        </div>
        <span className={styles.recordStatus}>{profile.statusLabel}</span>
      </div>
      <p className={styles.recordFormat}>{profile.format}</p>
      <p className={styles.sceneFit}>Scene fit: {profile.sceneFit}</p>
      <p className={styles.recordSummary}>{profile.orientation}</p>
      <p className={styles.recordSummary}>{profile.difference}</p>
      <dl className={styles.factList}>
        <ComparisonFact label="Documented edition" value={profile.dateText} />
        <ComparisonFact label="Source-aware note" value={profile.verificationNote} />
      </dl>
      <Link className={styles.atlasLink} href={profile.atlasPath}>
        Read the {profile.festivalName} festival record
      </Link>
    </article>
  );
}

function GuideFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <p className={styles.factLabel}>{label}</p>
      <p className={styles.factValue}>{value}</p>
    </div>
  );
}

function ComparisonFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.factLabel}>{label}</dt>
      <dd className={styles.factValue}>{value}</dd>
    </div>
  );
}
