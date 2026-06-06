import Link from "next/link";
import type { Metadata } from "next";
import { FestivalDirectoryBrowser } from "@/components/festivals/FestivalDirectoryBrowser";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { publicFestivalDirectoryItems } from "@/lib/public-festivals";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Festival atlas directory",
  description:
    "Browse the RetroAltFest curated atlas of goth, darkwave, industrial, post-punk, synthpop, EDM, and underground alternative festivals.",
  path: "/festivals",
  keywords: ["festival atlas", "goth festivals", "darkwave festivals", "industrial festivals", "EDM festivals"],
});

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
          <Link className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.22em] text-[var(--raf-cyan)] transition hover:text-white" href="/verification">
            What these status labels mean →
          </Link>
        </div>

        <FestivalDirectoryBrowser festivals={publicFestivalDirectoryItems} />

        <DiscoveryLinks
          eyebrow="Use guides for context"
          title="Not sure which scene lane fits?"
          description="The atlas shows current public records. The guides help you understand regional and genre pathways without pretending every related festival is an active atlas listing."
          links={[
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
          ]}
        />
      </section>

      <Footer />
    </main>
  );
}
