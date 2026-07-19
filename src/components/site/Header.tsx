import Link from "next/link";
import { SiteNavigation } from "./SiteNavigation";
import styles from "./NightTransmissionSiteShell.module.css";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <span className={styles.headerSignal} aria-hidden="true" />
      <div className={styles.headerInner}>
        <Link href="/" className={styles.wordmark} aria-label="RetroAltFest home">
          <span className={styles.wordmarkMark} aria-hidden="true">◆</span>
          <span className={styles.wordmarkText}>RetroAltFest</span>
          <span className={styles.wordmarkChannel} aria-hidden="true">Inner signal</span>
        </Link>

        <nav className={styles.desktopNavigation} aria-label="Main navigation">
          <Link className={styles.navigationLink} href="/festivals">Festivals</Link>
          <Link className={styles.navigationLink} href="/guides">Guides</Link>
          <Link className={styles.navigationLink} href="/verification">Verification</Link>
          <Link className={styles.suggestLink} href="/suggest">
            Suggest
          </Link>
        </nav>

        <SiteNavigation />
      </div>
    </header>
  );
}
