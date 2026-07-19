"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./NightTransmissionSiteShell.module.css";

const routes = [
  { href: "/festivals", label: "Festivals" },
  { href: "/guides", label: "Guides" },
  { href: "/verification", label: "Verification" },
  { href: "/suggest", label: "Suggest" },
] as const;

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className={styles.mobileNavigation}>
      <button
        ref={triggerRef}
        className={styles.navigationToggle}
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.toggleMark} aria-hidden="true">
          <i />
          <i />
        </span>
        <span>Menu</span>
      </button>

      <nav
        id="site-mobile-navigation"
        className={styles.mobilePanel}
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {routes.map((route) => (
          <Link
            className={styles.mobileLink}
            href={route.href}
            key={route.href}
            onClick={() => setIsOpen(false)}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
