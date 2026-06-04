import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/verification";

const verificationMetadata = buildMetadata({
  title: "How RetroAltFest Verifies Festivals | RetroAltFest",
  description:
    "Learn how RetroAltFest reviews festival sources, labels upcoming and date-pending events, and keeps the festival directory trustworthy before adding records to maps or guides.",
  path: pagePath,
  keywords: [
    "festival verification",
    "verified festival directory",
    "festival status labels",
    "RetroAltFest verification",
    "festival source checks",
  ],
});

export const metadata: Metadata = {
  ...verificationMetadata,
  title: {
    absolute: "How RetroAltFest Verifies Festivals | RetroAltFest",
  },
};

const statusLabels = [
  {
    label: "Confirmed upcoming",
    meaning: "The festival has current official information for an upcoming edition.",
    use: "Use this when dates or event status are backed by official or strong public sources.",
  },
  {
    label: "Dates not announced yet",
    meaning: "The festival appears active or culturally relevant, but the next edition is not confirmed.",
    use: "Use this when the event matters, but current dates are not available from strong sources.",
  },
  {
    label: "Source check in progress",
    meaning: "RetroAltFest is still reviewing sources before treating the listing as confirmed.",
    use: "Use this for promising leads that need another public source before stronger placement.",
  },
  {
    label: "Historical / reference",
    meaning: "The event is useful for scene context, but is not presented as a current confirmed festival.",
    use: "Use this when a festival belongs in a guide as context rather than a live listing.",
  },
  {
    label: "Location needs review",
    meaning: "The event has venue, city, or multi-city uncertainty that needs another source.",
    use: "Use this when location details should be checked before a map placement is shown.",
  },
  {
    label: "Not ready for map placement yet",
    meaning: "The festival may still be useful in a guide or directory, but the location confidence is not strong enough for a public pin.",
    use: "Use this to avoid guessed, stale, or misleading map points.",
  },
];

const sourceExamples = [
  "Official festival website",
  "Organizer page or official social profile",
  "Venue page",
  "Official ticketing page",
  "Reputable publication or partner page clearly tied to the event",
];

export default function VerificationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[var(--raf-violet)]/18 blur-3xl" />

      <Header />

      <article className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-text-dim)]">
          <Link href="/" className="transition hover:text-[var(--raf-cyan)]">
            RetroAltFest
          </Link>
          <span>/ Verification</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(168,85,247,0.22)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(217,70,239,0.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.16),transparent_26%)]" />
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Verified before mapped</p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            How RetroAltFest verifies festivals
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
            A careful festival atlas should tell you what is confirmed, what is still forming, and what needs another source before it appears as a confident listing or map point.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="raf-button-primary px-5 py-3" href="/festivals">
              Browse festivals
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-white" href="/guides">
              Read guides
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--raf-border)] bg-black/25 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">The short version</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Trust starts with source clarity.</h2>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[var(--raf-text-muted)]">
              <li>RetroAltFest looks for official or credible sources before presenting an event as confirmed.</li>
              <li>If dates, location, or status are unclear, the page should say so plainly.</li>
              <li>Map placement comes after source confidence, not before.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--raf-cyan)]/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(217,70,239,0.08),rgba(0,0,0,0.34))] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">What it means</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">A map pin implies confidence.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--raf-text-muted)]">
              RetroAltFest avoids sending visitors toward stale, guessed, or ambiguous festival information. Some events may appear in a guide before they belong on a map because they are useful scene references, but location-based discovery should stay careful.
            </p>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="status-labels-heading">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Status labels</p>
            <h2 id="status-labels-heading" className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
              What RetroAltFest labels mean
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--raf-text-muted)]">
              Festival information changes. These labels help visitors understand whether an event is confirmed, still being checked, useful as background, or waiting on clearer location details.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {statusLabels.map((status) => (
              <article key={status.label} className="rounded-[1.75rem] border border-[var(--raf-border-soft)] bg-[linear-gradient(180deg,rgba(30,22,48,0.58),rgba(255,255,255,0.024))] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
                <span className="inline-flex rounded-full border border-[var(--raf-cyan)]/25 bg-[var(--raf-cyan)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-cyan)]">
                  {status.label}
                </span>
                <p className="mt-4 text-sm leading-6 text-[var(--raf-text)]">{status.meaning}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">{status.use}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-[var(--raf-border)] bg-black/25 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Good source examples</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">What counts as a useful source?</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--raf-text-muted)]">
              {sourceExamples.map((source) => (
                <li key={source} className="rounded-2xl border border-[var(--raf-border-soft)] bg-white/[0.035] px-4 py-3">
                  {source}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(23,17,39,0.78),rgba(5,5,9,0.9))] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Why some listings are incomplete</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Careful does not always mean complete.</h2>
            <div className="mt-5 grid gap-4 text-base leading-7 text-[var(--raf-text-muted)] md:grid-cols-2">
              <p>Dates may not be announced yet, a festival may move venues or cities, or a multi-city event may need separate location checks.</p>
              <p>Some dark alternative scenes are small, irregular, or regional. RetroAltFest would rather show uncertainty than make a confident-looking claim too early.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[var(--raf-border)] bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(34,211,238,0.08),rgba(0,0,0,0.34))] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Help improve the atlas</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Have a festival lead or correction?</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--raf-text-muted)]">
                RetroAltFest will eventually support cleaner submissions. For now, join the discovery digest and keep an eye on the atlas as the source-checking loop expands.
              </p>
            </div>
            <Link className="raf-button-primary w-fit px-5 py-3" href="/#waitlist">
              Join the waitlist
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[var(--raf-border-soft)] bg-black/30 p-6 text-center sm:p-8">
          <p className="mx-auto max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest is built to help people discover dark, alternative, retro, and electronic festival worlds without pretending every lead is equally confirmed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-white" href="/festivals">
              Explore festival atlas
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-white" href="/guides">
              Explore guides
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
