"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { publicFeaturedFestivals, type PublicFeaturedFestival } from "@/lib/public-festivals";
import styles from "./NightTransmissionHero.module.css";

const posterSpecs = [
  { slug: "absolution-fest", surface: "poster-orbital-magenta.webp", signal: "01" },
  { slug: "terminus-festival", surface: "poster-tunnel-cyan.webp", signal: "02" },
  { slug: "cold-waves", surface: "poster-waveform-violet.webp", signal: "03" },
] as const;

const frequencies = ["GOTH", "EBM", "SYNTH", "INDUSTRIAL"] as const;

function requireFestival(slug: string): PublicFeaturedFestival {
  const festival = publicFeaturedFestivals.find((candidate) => candidate.slug === slug);

  if (!festival) {
    throw new Error(`Night Transmission requires active atlas festival: ${slug}`);
  }

  return festival;
}

const posterFestivals = posterSpecs.map((spec) => ({
  ...spec,
  festival: requireFestival(spec.slug),
}));

export function NightTransmissionHero() {
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]>("EBM");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.hero} aria-labelledby="night-transmission-title">
      <picture className={styles.environment}>
        <source media="(max-width: 767px)" srcSet="/night-transmission/environment-mobile.webp" />
        <img
          src="/night-transmission/environment-desktop.webp"
          alt=""
          width="1672"
          height="941"
          fetchPriority="high"
        />
      </picture>
      <Image
        className={styles.wetGround}
        src="/night-transmission/wet-ground.webp"
        alt=""
        aria-hidden="true"
        width="1672"
        height="763"
      />
      <div className={styles.legibilityWash} aria-hidden="true" />
      <div className={styles.signalLines} aria-hidden="true" />
      <div className={styles.leftScale} aria-hidden="true">
        <span>81</span>
        <span>23</span>
        <span>05</span>
      </div>
      <div className={styles.signalReadout} aria-hidden="true">
        <span>SIGNAL: A/73</span>
        <span>BAND: NIGHT</span>
        <span>SCAN: ACTIVE</span>
      </div>
      <span className={styles.towerFrequency} aria-hidden="true">DARK / ALT</span>
      <span className={styles.crosshair} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="RetroAltFest home">
          <span aria-hidden="true">◆</span>
          RETROALTFEST
        </Link>
        <button
          type="button"
          className={styles.mobileNavToggle}
          aria-expanded={menuOpen}
          aria-controls="night-transmission-nav"
          aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="night-transmission-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main navigation"
        >
          <Link href="/festivals" onClick={() => setMenuOpen(false)}>FESTIVALS</Link>
          <Link href="/guides" onClick={() => setMenuOpen(false)}>GUIDES</Link>
          <Link href="/festivals" onClick={() => setMenuOpen(false)}>ATLAS</Link>
          <Link href="/verification" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        </nav>
      </header>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>SOURCE-AWARE DARK FESTIVAL DISCOVERY</p>
        <h1 id="night-transmission-title" className={styles.title}>
          <span>THE UNDERGROUND</span>
          {" "}
          <span>IS STILL ALIVE.</span>
        </h1>
        <p className={styles.supporting}>New wave. Goth. Darkwave. EBM. Industrial. Synthpop.</p>
        <Link href="/festivals" className={styles.cta}>
          <span>ENTER THE ATLAS</span>
          <span aria-hidden="true">→</span>
        </Link>
        <span className={styles.ctaReflection} aria-hidden="true" />
      </div>

      <fieldset className={styles.tuner}>
        <legend>TUNE YOUR FREQUENCY</legend>
        <div className={styles.rail} aria-hidden="true" />
        <div className={styles.frequencyButtons}>
          {frequencies.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={frequency === item}
              onClick={() => setFrequency(item)}
            >
              <span aria-hidden="true" />
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <div className={styles.posterDeck} role="list" aria-label="Featured active atlas records">
        {posterFestivals.map(({ festival, surface, signal }, index) => (
          <article className={`${styles.poster} ${styles[`poster${index + 1}`]}`} role="listitem" key={festival.id}>
            <span className={styles.contactShadow} aria-hidden="true" />
            <span className={styles.posterReflection} aria-hidden="true" />
            <Link href={`/festivals/${festival.slug}`} className={styles.posterLink}>
              <Image
                className={styles.posterSurface}
                src={`/night-transmission/${surface}`}
                alt=""
                aria-hidden="true"
                width="640"
                height="1280"
              />
              <span className={styles.posterWear} aria-hidden="true" />
              <span className={styles.posterContent}>
                <span className={styles.posterMeta}>
                  <span>SIGNAL {signal}</span>
                  <span>{festival.statusLabel}</span>
                </span>
                <span className={styles.posterName}>{festival.name}</span>
                <span className={styles.posterRule} aria-hidden="true" />
                <span className={styles.posterLocation}>{festival.locationLabel}</span>
                <span className={styles.posterDate}>{festival.dateLabel}</span>
                <span className={styles.posterTags}>{festival.sceneTags.slice(0, 3).join(" · ")}</span>
                <span className={styles.posterAction}>VIEW ATLAS ENTRY →</span>
              </span>
            </Link>
          </article>
        ))}
      </div>

      <p className={styles.artworkNote}>RetroAltFest-generated visual surfaces — not official festival artwork.</p>
      <div className={styles.discovery} aria-hidden="true">
        <div className={styles.discoveryLabel}>
          <span>FESTIVAL DISCOVERY</span>
          <i />
        </div>
        <div className={styles.discoveryPreviews}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
