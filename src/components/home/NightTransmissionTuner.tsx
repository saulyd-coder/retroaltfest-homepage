"use client";

import { useState } from "react";
import styles from "./NightTransmissionHero.module.css";

const genres = ["GOTH", "EBM", "SYNTH", "INDUSTRIAL"] as const;
type Genre = (typeof genres)[number];

export function NightTransmissionTuner() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>("EBM");

  return (
    <fieldset className={styles.tuner}>
      <legend>TUNE YOUR FREQUENCY</legend>
      <div className={styles.tunerRail} aria-hidden="true">
        {genres.map((genre) => <span key={genre} />)}
      </div>
      <div className={styles.tunerControls}>
        {genres.map((genre) => (
          <button
            type="button"
            aria-pressed={selectedGenre === genre}
            className={selectedGenre === genre ? styles.tunerSelected : undefined}
            onClick={() => setSelectedGenre(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
