"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./NightTransmissionHero.module.css";

const routes = [
  { href: "/festivals", label: "FESTIVALS" },
  { href: "/guides", label: "GUIDES" },
  { href: "/verification", label: "VERIFICATION" },
  { href: "/suggest", label: "SUGGEST" },
] as const;

export function NightTransmissionNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navigationShell}>
      <button
        type="button"
        className={styles.navigationToggle}
        aria-expanded={isOpen}
        aria-controls="night-transmission-routes"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true" className={styles.navigationToggleMark}>
          <i />
          <i />
        </span>
        <span>MENU</span>
      </button>
      <nav
        id="night-transmission-routes"
        className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ""}`}
        aria-label="Homepage navigation"
      >
        {routes.map((route) => (
          <Link href={route.href} onClick={() => setIsOpen(false)} key={route.href}>
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
