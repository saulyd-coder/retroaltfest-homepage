import type { Metadata } from "next";
import { FestivalDirectoryBrowser } from "@/components/festivals/FestivalDirectoryBrowser";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { featuredFestivals } from "@/lib/festivals";

export const metadata: Metadata = {
  title: "Festival atlas directory",
  description:
    "Browse the RetroAltFest curated atlas of goth, darkwave, industrial, post-punk, synthpop, EBM, and underground alternative festivals.",
  alternates: {
    canonical: "/festivals",
  },
  openGraph: {
    title: "RetroAltFest festival atlas directory",
    description:
      "A static-first searchable directory of source-aware dark alternative festival records.",
    url: "/festivals",
    siteName: "RetroAltFest",
    type: "website",
  },
};

export default function FestivalsDirectoryPage() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-42 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      <Header />

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:pb-28 lg:pt-18">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-[var(--raf-cyan)]">Curated festival atlas</p>
          <h1 className="mt-5 text-balance font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Browse dark alternative festivals by scene, region, and status.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
            A lightweight directory layer for the RetroAltFest atlas. Search the seed records, filter by genre or verification state, and open each festival detail page for official sources and editorial context.
          </p>
        </div>

        <FestivalDirectoryBrowser festivals={featuredFestivals} />
      </section>

      <Footer />
    </main>
  );
}
