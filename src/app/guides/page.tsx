import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuidesHub.module.css";

const pagePath = "/guides";

const guidesMetadata = buildMetadata({
  title: "RetroAltFest Guides | Goth, Darkwave, Industrial & Retro Alternative Festivals",
  description:
    "Browse curated RetroAltFest guides to goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals, with clear notes on what is confirmed and what is still being checked.",
  path: pagePath,
  keywords: [
    "RetroAltFest guides",
    "goth festival guides",
    "darkwave festival guides",
    "industrial EBM festivals",
    "post-punk festivals",
    "new wave festivals",
    "retro alternative festivals",
  ],
});

export const metadata: Metadata = {
  ...guidesMetadata,
  title: {
    absolute: "RetroAltFest Guides | Goth, Darkwave, Industrial & Retro Alternative Festivals",
  },
};

type GuideCard = {
  title: string;
  href: string;
  role: string;
  description: string;
  tags: string[];
  accent: "cyan" | "magenta" | "violet";
};

const guides: GuideCard[] = [
  {
    title: "West Coast & Pacific Northwest Dark Alternative Festivals",
    href: "/guides/west-coast-pacific-northwest-dark-alternative-festivals",
    role: "regional West Coast / PNW discovery guide",
    description:
      "Regional discovery across Southern California and the Pacific Northwest, with active atlas anchors, recently active corridor signals, and source-aware caveats.",
    tags: ["West Coast", "Pacific Northwest", "dark alternative", "regional route"],
    accent: "cyan",
  },
  {
    title: "Selected Goth, Darkwave & Industrial Festivals in Europe",
    href: "/guides/european-goth-darkwave-industrial-festivals",
    role: "selected European regional discovery guide",
    description:
      "A source-aware starting point to selected European goth, darkwave, industrial, EBM, post-punk, and adjacent dark-alternative festivals.",
    tags: ["Europe", "goth / darkwave", "industrial / EBM", "post-punk"],
    accent: "violet",
  },
  {
    title: "North American Goth & Darkwave Festivals",
    href: "/guides/north-american-goth-darkwave-festivals",
    role: "dark-scene foundation guide",
    description:
      "A curated path into North American goth, darkwave, post-punk, and related dark alternative festival discovery.",
    tags: ["goth", "darkwave", "post-punk", "dark alternative"],
    accent: "magenta",
  },
  {
    title: "Industrial, EBM & Dark Electronic Festivals in North America",
    href: "/guides/industrial-ebm-dark-electronic-festivals-north-america",
    role: "industrial / dark-electronic companion guide",
    description:
      "A careful guide to industrial, EBM, post-industrial, and dark electronic festival signals across North America.",
    tags: ["industrial", "EBM", "dark electronic", "post-industrial"],
    accent: "violet",
  },
  {
    title: "New Wave, Post-Punk & Retro Alternative Festivals in North America",
    href: "/guides/new-wave-post-punk-retro-alternative-festivals-north-america",
    role: "broader retro-alternative discovery guide",
    description:
      "A curated guide to festivals where new wave, post-punk, 80s alternative, dark alternative, and retro indie nostalgia overlap.",
    tags: ["new wave", "post-punk", "80s alternative", "retro alternative"],
    accent: "cyan",
  },
  {
    title: "How to Verify Festival Tickets and Official Sources",
    href: "/guides/how-to-verify-festival-tickets-official-sources",
    role: "practical ticket-verification guide",
    description:
      "A practical pre-purchase guide to checking current-edition festival dates, organizer websites, authorized ticket paths, resale listings, and official sources before paying. These checks cannot establish that a ticket is authentic.",
    tags: ["pre-purchase checks", "official sources", "ticket paths", "resale caution"],
    accent: "magenta",
  },
  {
    title: "First-Time Dark Alternative Festival Guide",
    href: "/guides/first-time-dark-alternative-festival-guide",
    role: "post-selection festival preparation guide",
    description:
      "A practical guide for preparing after you choose a festival, covering event formats, clothing and conditions, hearing and energy, schedules and movement, venue rules, solo attendance, and week-of rechecks.",
    tags: ["event preparation", "conditions", "venue rules", "week-of checks"],
    accent: "cyan",
  },
];

function issueNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function GuidesPage() {
  const [featured, ...remainingGuides] = guides;

  return (
    <main className={styles.page}>
      <Header />

      <div className={styles.paperEdge} aria-hidden="true" />
      <div className={styles.towerBeacon} aria-hidden="true" />

      <article className={styles.content}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/">RetroAltFest</Link>
          <span>/Guides</span>
        </nav>

        <header className={styles.masthead}>
          <div className={styles.mastheadCopy}>
            <p className={styles.telemetry}>
              <span aria-hidden="true">◆</span> Festival guides by scene
            </p>
            <h1>RetroAltFest Guides</h1>
            <p className={styles.intro}>
              Start here for curated paths into goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals.
            </p>
            <p className={styles.trustCopy}>
              These guides are intentionally selective: we check official or reliable sources, separate confirmed events from events still being checked, and avoid pretending every related festival belongs in the same lane.
            </p>
            <Link className={styles.sourceLink} href="/verification">
              How RetroAltFest handles source checks <span aria-hidden="true">→</span>
            </Link>
          </div>

          <nav className={styles.issueIndex} aria-label="Guide issue index">
            {guides.map((guide, index) => {
              const number = issueNumber(index);
              return (
                <a key={guide.href} href={`#guide-${number}`}>
                  <span>{number}</span>
                  <b>{guide.title}</b>
                </a>
              );
            })}
          </nav>
        </header>

        <article className={styles.featured} data-accent={featured.accent} id="guide-01" aria-labelledby="featured-guide-title">
          <div className={styles.featuredCopy}>
            <div className={styles.storyMeta}>
              <span>Issue 01</span>
              <span>curated guide</span>
              <span>{featured.role}</span>
            </div>
            <h2 id="featured-guide-title">{featured.title}</h2>
            <p>{featured.description}</p>
            <ul className={styles.tags} aria-label={`Themes for ${featured.title}`}>
              {featured.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
            <Link href={featured.href}>
              Read guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        <div className={styles.sectionDivider} aria-hidden="true">
          <span />
          <b>Curated guide index</b>
          <em>02—07</em>
        </div>

        <section className={styles.guideList} aria-label="RetroAltFest curated scene guides">
          {remainingGuides.map((guide, index) => {
            const number = issueNumber(index + 1);
            return (
              <article className={styles.guideRow} data-accent={guide.accent} id={`guide-${number}`} key={guide.href}>
                <div className={styles.guideNumber} aria-hidden="true">{number}</div>
                <div className={styles.guideBody}>
                  <p className={styles.guideRole}>
                    <span>Issue {number}</span>
                    <span>curated guide</span>
                    <span>{guide.role}</span>
                  </p>
                  <h2>{guide.title}</h2>
                  <p>{guide.description}</p>
                  <ul className={styles.tags} aria-label={`Themes for ${guide.title}`}>
                    {guide.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                <Link href={guide.href} aria-label={`Read ${guide.title}`}>
                  <span>Read guide</span>
                  <b aria-hidden="true">↗</b>
                </Link>
              </article>
            );
          })}
        </section>

        <section className={styles.closingGrid}>
          <div className={styles.editorialNote}>
            <p className={styles.closingLabel}>How to read these guides</p>
            <h2>Curated lanes, not exhaustive directories.</h2>
            <p>
              RetroAltFest guides are designed as restrained discovery paths. When a festival sits outside the core lane, we label it as a related festival to know, a dates-not-announced-yet note, or a possible future addition instead of forcing it into a public card.
            </p>
          </div>

          <Link href="/festivals" className={styles.atlasLink}>
            <span className={styles.atlasLabel}>Related path</span>
            <strong>Browse the festival atlas</strong>
            <span className={styles.atlasDescription}>
              Move from editorial guides into the curated festival directory when you want the current atlas records.
            </span>
            <b aria-hidden="true">→</b>
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
