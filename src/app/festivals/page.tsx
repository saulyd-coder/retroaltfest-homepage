import type { Metadata } from "next";
import Link from "next/link";
import { FestivalDirectoryBrowser } from "@/components/festivals/FestivalDirectoryBrowser";
import styles from "@/components/festivals/FestivalDirectory.module.css";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { publicFestivalDirectoryItems } from "@/lib/public-festivals";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Festival atlas directory",
  description:
    "Browse the RetroAltFest curated atlas of goth, darkwave, industrial, post-punk, synthpop, EDM, and underground alternative festivals.",
  path: "/festivals",
  keywords: ["festival atlas", "goth festivals", "darkwave festivals", "industrial festivals", "EDM festivals"],
});

const discoveryLinks = [
  {
    href: "/guides/north-american-goth-darkwave-festivals",
    label: "Goth & Darkwave guide",
    description: "Start with the dark-scene foundation route for goth, darkwave, post-punk, and related festival context.",
  },
  {
    href: "/guides/industrial-ebm-dark-electronic-festivals-north-america",
    label: "Industrial & EBM guide",
    description: "Follow the heavier industrial, EBM, post-industrial, and dark electronic discovery lane.",
  },
  {
    href: "/guides/new-wave-post-punk-retro-alternative-festivals-north-america",
    label: "New Wave & Post-Punk guide",
    description: "Explore the broader retro alternative path across new wave, post-punk, and 80s-adjacent festival worlds.",
  },
  {
    href: "/guides/west-coast-pacific-northwest-dark-alternative-festivals",
    label: "West Coast / PNW guide",
    description: "Use the regional route for Southern California, Pacific Northwest, and nearby dark alternative context.",
  },
  {
    href: "/suggest",
    label: "Suggest a festival for review",
    description: "Share a festival lead, correction, or official source for manual review before anything changes publicly.",
  },
];

export default function FestivalsPage() {
  return (
    <main className={styles.page}>
      <Header />
      <div className={styles.paperEdge} aria-hidden="true" />
      <div className={styles.towerBeacon} aria-hidden="true" />

      <div className={styles.content}>
        <header className={styles.masthead}>
          <div className={styles.mastheadCopy}>
            <p className={styles.eyebrow}>Curated festival atlas</p>
            <h1>Browse dark alternative festivals by scene, region, and status.</h1>
            <p className={styles.intro}>
              A lightweight directory layer for the RetroAltFest atlas. Search the seed records, filter by genre or verification state,
              and open each festival detail page for official sources and editorial context.
            </p>
            <div className={styles.mastheadLinks}>
              <Link href="/verification" className={styles.secondaryLink}>
                What these status labels mean <span aria-hidden="true">→</span>
              </Link>
              <Link href="/suggest" className={styles.secondaryLink}>
                Missing a festival? Suggest a source-backed lead <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </header>

        <FestivalDirectoryBrowser festivals={publicFestivalDirectoryItems} />

        <div className={styles.discoveryShell}>
          <DiscoveryLinks
            eyebrow="Keep exploring"
            title="Not sure which scene lane fits?"
            description="Use the guide routes to narrow the atlas by scene or region, or send a source-backed lead for manual review."
            links={discoveryLinks}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
