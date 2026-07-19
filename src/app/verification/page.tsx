import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./VerificationPage.module.css";

const pagePath = "/verification";

const verificationMetadata = buildMetadata({
  title: "How RetroAltFest Verifies Festivals | RetroAltFest",
  description:
    "Learn how RetroAltFest reviews festival sources, labels upcoming and date-pending events, and keeps the festival directory trustworthy before adding records to maps or guides.",
  path: pagePath,
  keywords: [
    "festival verification",
    "verified festival directory",
    "festival status labels",
    "RetroAltFest verification",
    "festival source checks",
  ],
});

export const metadata: Metadata = {
  ...verificationMetadata,
  title: {
    absolute: "How RetroAltFest Verifies Festivals | RetroAltFest",
  },
};

const statusLabels = [
  {
    label: "Confirmed upcoming",
    meaning: "The festival has current official information for an upcoming edition.",
    use: "Use this when dates or event status are backed by official or strong public sources.",
  },
  {
    label: "Dates not announced yet",
    meaning: "The festival appears active or culturally relevant, but the next edition is not confirmed.",
    use: "Use this when the event matters, but current dates are not available from strong sources.",
  },
  {
    label: "Source check in progress",
    meaning: "RetroAltFest is still reviewing sources before treating the listing as confirmed.",
    use: "Use this for promising leads that need another public source before stronger placement.",
  },
  {
    label: "Historical / reference",
    meaning: "The event is useful for scene context, but is not presented as a current confirmed festival.",
    use: "Use this when a festival belongs in a guide as context rather than a live listing.",
  },
  {
    label: "Location needs review",
    meaning: "The event has venue, city, or multi-city uncertainty that needs another source.",
    use: "Use this when location details should be checked before a map placement is shown.",
  },
  {
    label: "Not ready for map placement yet",
    meaning: "The festival may still be useful in a guide or directory, but the location confidence is not strong enough for a public pin.",
    use: "Use this to avoid guessed, stale, or misleading map points.",
  },
];

const sourceExamples = [
  "Official festival website",
  "Organizer page or official social profile",
  "Venue page",
  "Official ticketing page",
  "Reputable publication or partner page clearly tied to the event",
];

export default function VerificationPage() {
  const statusToneClasses = [
    styles.statusVerified,
    styles.statusCaution,
    styles.statusChecking,
    styles.statusReference,
    styles.statusChecking,
    styles.statusCaution,
  ];

  return (
    <main className={styles.page}>
      <Header />
      <div aria-hidden="true" className={styles.paperEdge} />
      <div aria-hidden="true" className={styles.towerBeacon} />

      <article className={styles.content}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">RetroAltFest</Link>
          <span>/ Verification</span>
        </nav>

        <section className={styles.masthead}>
          <div className={styles.mastheadInner}>
            <p className={styles.telemetry}>Verified before mapped</p>
            <h1>How RetroAltFest verifies festivals</h1>
            <p className={styles.intro}>
              A careful festival atlas should tell you what is confirmed, what is still forming, and what needs another source before it appears as a confident listing or map point.
            </p>
            <div className={styles.mastheadActions}>
              <Link className={styles.primaryAction} href="/festivals">
                Browse festivals
              </Link>
              <Link className={styles.secondaryAction} href="/guides">
                Read guides
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.trustGrid} aria-label="How RetroAltFest verifies festivals">
          <article className={styles.panel}>
            <p className={styles.eyebrow}>The short version</p>
            <h2>Trust starts with source clarity.</h2>
            <ul className={styles.bullets}>
              <li>RetroAltFest looks for official or credible sources before presenting an event as confirmed.</li>
              <li>If dates, location, or status are unclear, the page should say so plainly.</li>
              <li>Map placement comes after source confidence, not before.</li>
            </ul>
          </article>

          <article className={styles.panelAccent}>
            <p className={styles.eyebrow}>What it means</p>
            <h2>A map pin implies confidence.</h2>
            <p>
              RetroAltFest avoids sending visitors toward stale, guessed, or ambiguous festival information. Some events may appear in a guide before they belong on a map because they are useful scene references, but location-based discovery should stay careful.
            </p>
          </article>
        </section>

        <section className={styles.statusSection} aria-labelledby="status-labels-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Status labels</p>
            <h2 id="status-labels-heading">What RetroAltFest labels mean</h2>
            <p>
              Festival information changes. These labels help visitors understand whether an event is confirmed, still being checked, useful as background, or waiting on clearer location details.
            </p>
          </div>

          <div className={styles.statusGrid}>
            {statusLabels.map((status, index) => (
              <article className={`${styles.statusPanel} ${statusToneClasses[index]}`} key={status.label}>
                <span className={styles.statusLabel}>
                  <span aria-hidden="true" className={styles.statusMarker} />
                  {status.label}
                </span>
                <p>{status.meaning}</p>
                <p>{status.use}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sourcesGrid}>
          <article className={styles.panel}>
            <p className={styles.eyebrow}>Good source examples</p>
            <h2>What counts as a useful source?</h2>
            <ul className={styles.sourceList}>
              {sourceExamples.map((source) => (
                <li className={styles.sourceItem} key={source}>
                  {source}
                </li>
              ))}
            </ul>
          </article>

          <article className={`${styles.panel} ${styles.cautionPanel}`}>
            <p className={styles.eyebrow}>Why some listings are incomplete</p>
            <h2>Careful does not always mean complete.</h2>
            <div className={styles.proseGrid}>
              <p>Dates may not be announced yet, a festival may move venues or cities, or a multi-city event may need separate location checks.</p>
              <p>Some dark alternative scenes are small, irregular, or regional. RetroAltFest would rather show uncertainty than make a confident-looking claim too early.</p>
            </div>
          </article>
        </section>

        <section className={styles.ctaPanel}>
          <div>
            <p className={styles.eyebrow}>Help improve the atlas</p>
            <h2>Have a festival lead or correction?</h2>
            <p>
              If you know a festival, correction, or official update RetroAltFest should review, send a source-backed suggestion. Suggestions are checked manually and are not automatically published.
            </p>
          </div>
          <Link className={styles.ctaAction} href="/suggest">
            Suggest a festival for review
          </Link>
        </section>

        <section className={styles.closing}>
          <p>
            RetroAltFest is built to help people discover dark, alternative, retro, and electronic festival worlds without pretending every lead is equally confirmed.
          </p>
          <div className={styles.closingActions}>
            <Link className={styles.secondaryAction} href="/festivals">
              Explore festival atlas
            </Link>
            <Link className={styles.secondaryAction} href="/guides">
              Explore guides
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
