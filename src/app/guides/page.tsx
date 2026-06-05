import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides";

const guidesMetadata = buildMetadata({
  title: "RetroAltFest Guides | Goth, Darkwave, Industrial & Retro Alternative Festivals",
  description:
    "Browse curated RetroAltFest guides to goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals, with clear notes on what is confirmed and what is still being checked.",
  path: pagePath,
  keywords: [
    "RetroAltFest guides",
    "goth festival guides",
    "darkwave festival guides",
    "industrial EBM festivals",
    "post-punk festivals",
    "new wave festivals",
    "retro alternative festivals",
  ],
});

export const metadata: Metadata = {
  ...guidesMetadata,
  title: {
    absolute: "RetroAltFest Guides | Goth, Darkwave, Industrial & Retro Alternative Festivals",
  },
};

type GuideCard = {
  title: string;
  href: string;
  role: string;
  description: string;
  tags: string[];
  accent: "cyan" | "magenta" | "violet";
};

const guides: GuideCard[] = [
  {
    title: "West Coast & Pacific Northwest Dark Alternative Festivals",
    href: "/guides/west-coast-pacific-northwest-dark-alternative-festivals",
    role: "regional West Coast / PNW discovery guide",
    description:
      "Regional discovery across Southern California and the Pacific Northwest, with active atlas anchors, recently active corridor signals, and source-aware caveats.",
    tags: ["West Coast", "Pacific Northwest", "dark alternative", "regional route"],
    accent: "cyan",
  },
  {
    title: "North American Goth & Darkwave Festivals",
    href: "/guides/north-american-goth-darkwave-festivals",
    role: "dark-scene foundation guide",
    description:
      "A curated path into North American goth, darkwave, post-punk, and related dark alternative festival discovery.",
    tags: ["goth", "darkwave", "post-punk", "dark alternative"],
    accent: "magenta",
  },
  {
    title: "Industrial, EBM & Dark Electronic Festivals in North America",
    href: "/guides/industrial-ebm-dark-electronic-festivals-north-america",
    role: "industrial / dark-electronic companion guide",
    description:
      "A careful guide to industrial, EBM, post-industrial, and dark electronic festival signals across North America.",
    tags: ["industrial", "EBM", "dark electronic", "post-industrial"],
    accent: "violet",
  },
  {
    title: "New Wave, Post-Punk & Retro Alternative Festivals in North America",
    href: "/guides/new-wave-post-punk-retro-alternative-festivals-north-america",
    role: "broader retro-alternative discovery guide",
    description:
      "A curated guide to festivals where new wave, post-punk, 80s alternative, dark alternative, and retro indie nostalgia overlap.",
    tags: ["new wave", "post-punk", "80s alternative", "retro alternative"],
    accent: "cyan",
  },
];

const accentClass: Record<GuideCard["accent"], string> = {
  cyan: "border-[var(--raf-cyan)]/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.13),rgba(168,85,247,0.08),rgba(0,0,0,0.34))] text-[var(--raf-cyan)]",
  magenta:
    "border-[var(--raf-magenta)]/30 bg-[linear-gradient(135deg,rgba(217,70,239,0.13),rgba(168,85,247,0.08),rgba(0,0,0,0.34))] text-[var(--raf-magenta)]",
  violet:
    "border-[var(--raf-violet)]/35 bg-[linear-gradient(135deg,rgba(124,58,237,0.14),rgba(217,70,239,0.08),rgba(0,0,0,0.34))] text-[var(--raf-violet-light)]",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.2),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.12),transparent_30%),var(--raf-black)] text-[var(--raf-text)]">
      <Header />

      <article className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-text-dim)]">
          <Link href="/" className="transition hover:text-[var(--raf-cyan)]">
            RetroAltFest
          </Link>
          <span>/Guides</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2.25rem] border border-[var(--raf-border)] bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(217,70,239,0.24),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(34,211,238,0.16),transparent_24%)]" />
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Festival guides by scene</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            RetroAltFest Guides
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--raf-text)]">
            Start here for curated paths into goth, darkwave, industrial, EBM, post-punk, new wave, and retro alternative festivals.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--raf-text-muted)]">
            These guides are intentionally selective: we check official or reliable sources, separate confirmed events from events still being checked, and avoid pretending every related festival belongs in the same lane.
          </p>
          <Link className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.22em] text-[var(--raf-cyan)] transition hover:text-white" href="/verification">
            How RetroAltFest handles source checks →
          </Link>
        </section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="RetroAltFest curated scene guides">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className={`group flex min-h-full flex-col rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/50 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--raf-cyan)] ${accentClass[guide.accent]}`}
            >
              <span className="w-fit rounded-full border border-current/30 bg-black/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em]">
                curated guide
              </span>
              <span className="mt-5 block font-display text-3xl font-semibold leading-tight tracking-tight text-white">
                {guide.title}
              </span>
              <span className="mt-3 block text-sm uppercase tracking-[0.2em] text-current/90">{guide.role}</span>
              <span className="mt-4 block flex-1 text-base leading-7 text-[var(--raf-text-muted)]">{guide.description}</span>
              <span className="mt-5 flex flex-wrap gap-2">
                {guide.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-[var(--raf-text)]">
                    {tag}
                  </span>
                ))}
              </span>
              <span className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-[0.24em] text-white">
                Read guide <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-[var(--raf-border)] bg-black/25 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">How to read these guides</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Curated lanes, not exhaustive directories.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--raf-text-muted)]">
              RetroAltFest guides are designed as restrained discovery paths. When a festival sits outside the core lane, we label it as a related festival to know, a dates-not-announced-yet note, or a possible future addition instead of forcing it into a public card.
            </p>
          </div>

          <Link
            href="/festivals"
            className="rounded-[2rem] border border-[var(--raf-cyan)]/25 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(217,70,239,0.08),rgba(0,0,0,0.34))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--raf-cyan)] sm:p-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Related path</span>
            <span className="mt-3 block font-display text-3xl font-semibold tracking-tight text-white">Browse the festival atlas</span>
            <span className="mt-4 block text-base leading-7 text-[var(--raf-text-muted)]">
              Move from editorial guides into the curated festival directory when you want the current atlas records.
            </span>
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
