import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./SuggestPage.module.css";

const pagePath = "/suggest";
const suggestionFormUrl = "https://forms.gle/qhXiMRZbcihSue6z8";

export const metadata: Metadata = buildMetadata({
  title: "Suggest a Festival for Review",
  description:
    "Send RetroAltFest a source-backed suggestion for a festival, correction, or update. Suggestions are reviewed manually and are not automatically published.",
  path: pagePath,
  keywords: [
    "suggest a festival",
    "festival correction",
    "festival update",
    "source-backed festival suggestion",
    "RetroAltFest suggestions",
  ],
});

const suggestionTypes = [
  "A goth, darkwave, industrial, EBM, synthpop, post-punk, new wave, retro alternative, or adjacent festival we should look at",
  "A correction to an existing RetroAltFest festival page",
  "A new official date, ticketing, organizer, venue, or status source",
  "A historical or reference point that may help visitors understand the scene",
];

const usefulSources = [
  "Official festival website",
  "Organizer-controlled page or official social profile",
  "Official ticketing page",
  "Venue page connected to the event",
  "A public source that clearly explains the update or correction",
];

const reviewSteps = [
  "Suggestions are reviewed manually before anything changes on RetroAltFest.",
  "A suggestion may become an atlas entry, a source check, a reference point, or simply stay under review.",
  "Sending a lead does not guarantee a listing, page update, or public mention.",
  "Nothing submitted through the form is automatically published.",
];

export default function SuggestFestivalPage() {
  return (
    <main className={styles.page}>
      <Header />
      <div aria-hidden="true" className={styles.paperEdge} />
      <div aria-hidden="true" className={styles.towerBeacon} />

      <article className={styles.content}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">RetroAltFest</Link>
          <span>/ Suggest</span>
        </nav>

        <section className={styles.masthead}>
          <div className={styles.mastheadInner}>
            <p className={styles.telemetry}>Source-backed suggestion</p>
            <h1>Suggest a festival for review</h1>
            <p className={styles.intro}>
              Know a festival, correction, or official update RetroAltFest should look at? Send a source-backed suggestion and we’ll review it carefully before anything changes on the atlas.
            </p>
            <div className={styles.mastheadActions}>
              <a className={styles.primaryAction} href={suggestionFormUrl} target="_blank" rel="noopener noreferrer">
                Open the suggestion form
              </a>
              <span className={styles.actionNote}>The form opens in Google Forms.</span>
            </div>
          </div>
        </section>

        <section className={styles.splitGrid}>
          <article className={styles.panel}>
            <p className={styles.intakeEyebrow}>What to send</p>
            <h2>Useful leads, corrections, and updates are welcome.</h2>
            <ul className={styles.itemGrid}>
              {suggestionTypes.map((item) => (
                <li className={styles.sourceItem} key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={styles.panelAccent}>
            <p className={styles.guidanceEyebrow}>What helps review</p>
            <h2>Official sources make suggestions easier to check.</h2>
            <ul className={styles.itemGrid}>
              {usefulSources.map((source) => (
                <li className={styles.sourceItem} key={source}>{source}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className={styles.reviewPanel}>
          <div className={styles.sectionIntro}>
            <p className={styles.reviewEyebrow}>Before anything appears publicly</p>
            <h2>Suggestions are reviewed manually.</h2>
            <p>
              RetroAltFest is a curated festival atlas, not an auto-published directory. We check public sources first and keep uncertain information separate from source-supported atlas entries.
            </p>
          </div>
          <div className={styles.reviewGrid}>
            {reviewSteps.map((step) => (
              <p className={styles.reviewStep} key={step}>{step}</p>
            ))}
          </div>
        </section>

        <section className={styles.privacyGrid}>
          <article className={styles.privacyPanel}>
            <p className={styles.guidanceEyebrow}>Privacy note</p>
            <h2>Only share public information.</h2>
            <p>
              Please do not submit private, confidential, or unpublished information. Contact info is optional and only used if RetroAltFest needs to ask a follow-up question about your suggestion.
            </p>
          </article>

          <article className={styles.ctaPanel}>
            <p className={styles.intakeEyebrow}>Ready to share a lead?</p>
            <h2>Send the official source first.</h2>
            <p>
              The strongest suggestions include a festival name, public source link, basic region, and a short note explaining what RetroAltFest should review.
            </p>
            <a className={styles.primaryAction} href={suggestionFormUrl} target="_blank" rel="noopener noreferrer">
              Open the suggestion form
            </a>
            <p className={styles.formNote}>The form opens in Google Forms.</p>
          </article>
        </section>
      </article>

      <Footer />
    </main>
  );
}
