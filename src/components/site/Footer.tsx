import Link from "next/link";
import styles from "./NightTransmissionSiteShell.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSignal} aria-hidden="true">
        <span />
        <span className={styles.footerSignalLine} />
        <span />
      </div>

      <div className={styles.footerInner}>
        <div className={styles.footerIdentity}>
          <p className={styles.footerWordmark}>RetroAltFest</p>
          <p className={styles.footerStatement}>Curated dark alternative festival discovery. Verified before mapped.</p>
          <p className={styles.footerTelemetry}>MVP atlas · official-source first · no guessed pins</p>
        </div>

        <nav className={styles.footerNavigation} aria-label="Footer navigation">
          <Link className={styles.footerLink} href="/festivals">Festival atlas</Link>
          <Link className={styles.footerLink} href="/guides">Guides</Link>
          <Link className={styles.footerLink} href="/verification">Verification</Link>
          <Link className={styles.footerLink} href="/suggest">Suggest a festival</Link>
        </nav>
      </div>
    </footer>
  );
}
