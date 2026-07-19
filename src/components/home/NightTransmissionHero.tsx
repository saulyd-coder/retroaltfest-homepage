import Link from "next/link";
import { Barlow_Condensed } from "next/font/google";
import {
  publicFeaturedFestivals,
  type PublicFeaturedFestival,
} from "@/lib/public-festivals";
import styles from "./NightTransmissionHero.module.css";
import { NightTransmissionNav } from "./NightTransmissionNav";
import { NightTransmissionTuner } from "./NightTransmissionTuner";

const nightTransmissionHeadline = Barlow_Condensed({
  variable: "--font-night-transmission-headline",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

type PosterTreatment = {
  slug: "terminus-festival" | "absolution-fest" | "cold-waves";
  signal: string;
  position: "front" | "rear" | "right";
  motif: "tunnel" | "orbital" | "waveform";
};

const posterTreatments: PosterTreatment[] = [
  {
    slug: "terminus-festival",
    signal: "SIGNAL 02",
    position: "front",
    motif: "tunnel",
  },
  {
    slug: "absolution-fest",
    signal: "SIGNAL 01",
    position: "rear",
    motif: "orbital",
  },
  {
    slug: "cold-waves",
    signal: "SIGNAL 03",
    position: "right",
    motif: "waveform",
  },
];

function requireFestival(slug: PosterTreatment["slug"]) {
  const festival = publicFeaturedFestivals.find((candidate) => candidate.slug === slug);

  if (!festival) {
    throw new Error(`Night Transmission homepage requires active atlas festival: ${slug}`);
  }

  return festival;
}

const posters = posterTreatments.map((treatment) => ({
  treatment,
  festival: requireFestival(treatment.slug),
}));

export function NightTransmissionHero() {
  return (
    <section
      className={`${styles.hero} ${nightTransmissionHeadline.variable}`}
      aria-labelledby="night-transmission-title"
    >
      <div className={styles.stage}>
        <div className={styles.environment} aria-hidden="true">
          <div className={styles.environmentPlate} />
          <div className={styles.precisionPlate} />
          <div className={styles.sharedCyanLight} />
          <div className={styles.sharedMagentaLight} />
          <div className={styles.atmosphericVeil} />
        </div>

        <div className={styles.ground} aria-hidden="true">
          <div className={styles.groundPlate} />
          <div className={styles.groundDarkener} />
          <div className={styles.puddleBreakup} />
          <div className={styles.ctaReflection} />
          <div className={`${styles.posterPool} ${styles.poolTerminus}`} />
          <div className={`${styles.posterPool} ${styles.poolAbsolution}`} />
          <div className={`${styles.posterPool} ${styles.poolColdWaves}`} />
          <div className={`${styles.posterReflection} ${styles.reflectionTerminus}`} />
          <div className={`${styles.posterReflection} ${styles.reflectionAbsolution}`} />
          <div className={`${styles.posterReflection} ${styles.reflectionColdWaves}`} />
          <div className={styles.brokenStreaks} />
        </div>

        <header className={styles.header}>
          <Link className={styles.wordmark} href="/" aria-label="RetroAltFest home">
            <span aria-hidden="true">◆</span>
            RETROALTFEST
          </Link>
          <NightTransmissionNav />
        </header>

        <div className={styles.copyBlock}>
          <h1 id="night-transmission-title" className={styles.headline}>
            <span>THE UNDERGROUND</span>
            <span>IS STILL ALIVE.</span>
          </h1>
          <p className={styles.supportingCopy}>
            New wave. Goth. Darkwave. EBM. Industrial. Synthpop.
          </p>
          <Link className={styles.cta} href="/festivals">
            <span>ENTER THE ATLAS</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <NightTransmissionTuner />

        <ol className={styles.posterStage} aria-label="Featured source-supported festivals">
          {posters.map(({ treatment, festival }) => (
            <li
              className={`${styles.posterSlot} ${styles[`posterSlot_${treatment.position}`]}`}
              key={treatment.slug}
            >
              <PosterSlab festival={festival} treatment={treatment} />
            </li>
          ))}
        </ol>

        <div className={styles.telemetry} aria-hidden="true">
          <span className={styles.leftRule} />
          <span className={styles.targetMark} />
          <span className={styles.signalThread} />
          <span className={styles.readout}>SIGNAL: A/73<br />FREQ: 102.7 FM<br />BAND: NIGHT</span>
        </div>

        <p className={styles.artDisclaimer}>
          RetroAltFest house visuals — not official festival artwork.
        </p>

        <div className={styles.discoveryTransition} aria-hidden="true">
          <span>FESTIVAL DISCOVERY</span>
        </div>

        <div className={styles.finish} aria-hidden="true" />
      </div>
    </section>
  );
}

function PosterSlab({
  festival,
  treatment,
}: {
  festival: PublicFeaturedFestival;
  treatment: PosterTreatment;
}) {
  const genreLabel = festival.sceneTags.slice(0, 4).join(" · ");

  return (
    <article
      className={`${styles.poster} ${styles[`poster_${treatment.motif}`]}`}
      aria-label={`${festival.name} source-supported atlas entry`}
    >
      <Link
        className={styles.posterLink}
        href={`/festivals/${festival.slug}`}
        aria-label={`View ${festival.name} atlas entry`}
      >
        <span className={styles.posterPaper} aria-hidden="true" />
        <span className={styles.posterMotif} aria-hidden="true" />
        <span className={styles.posterInk} aria-hidden="true" />
        <span className={styles.posterScratches} aria-hidden="true" />
        <span className={styles.posterEdgeLight} aria-hidden="true" />
        <span className={styles.posterContent}>
          <span className={styles.posterKicker}>
            <span aria-hidden="true">{treatment.signal}</span>
            <span>{festival.statusLabel}</span>
          </span>
          <span className={styles.posterName}>{festival.name}</span>
          <span className={styles.posterRule} aria-hidden="true" />
          <span className={styles.posterLocation}>{festival.locationLabel}</span>
          <span className={styles.posterDate}>{festival.dateLabel}</span>
          <span className={styles.posterGenres}>{genreLabel}</span>
          <span className={styles.posterAction}>VIEW ATLAS ENTRY →</span>
        </span>
      </Link>
    </article>
  );
}
