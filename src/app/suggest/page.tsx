import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/suggest";
const suggestionFormUrl = "https://forms.gle/qhXiMRZbcihSue6z8";

export const metadata: Metadata = buildMetadata({
  title: "Suggest a Festival for Review | RetroAltFest",
  description:
    "Send RetroAltFest a source-backed suggestion for a festival, correction, or update. Suggestions are reviewed manually and are not automatically published.",
  path: pagePath,
  keywords: [
    "suggest a festival",
    "festival correction",
    "festival update",
    "source-backed festival suggestion",
    "RetroAltFest suggestions",
  ],
});

const suggestionTypes = [
  "A goth, darkwave, industrial, EBM, synthpop, post-punk, new wave, retro alternative, or adjacent festival we should look at",
  "A correction to an existing RetroAltFest festival page",
  "A new official date, ticketing, organizer, venue, or status source",
  "A historical or reference point that may help visitors understand the scene",
];

const usefulSources = [
  "Official festival website",
  "Organizer-controlled page or official social profile",
  "Official ticketing page",
  "Venue page connected to the event",
  "A public source that clearly explains the update or correction",
];

const reviewSteps = [
  "Suggestions are reviewed manually before anything changes on RetroAltFest.",
  "A suggestion may become an atlas entry, a source check, a reference point, or simply stay under review.",
  "Sending a lead does not guarantee a listing, page update, or public mention.",
  "Nothing submitted through the form is automatically published.",
];

export default function SuggestFestivalPage() {
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
          <span>/ Suggest</span>
        </nav>

        <section className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(168,85,247,0.22)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(217,70,239,0.22),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.16),transparent_26%)]" />
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Source-backed suggestion</p>
          <h1 className="mt-5 max-w-5xl text-balance font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Suggest a festival for review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
            Know a festival, correction, or official update RetroAltFest should look at? Send a source-backed suggestion and we’ll review it carefully before anything changes on the atlas.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a className="raf-button-primary px-5 py-3" href={suggestionFormUrl} target="_blank" rel="noopener noreferrer">
              Open the suggestion form
            </a>
            <span className="text-sm leading-6 text-[var(--raf-text-dim)]">The form opens in Google Forms.</span>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[var(--raf-border)] bg-black/25 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">What to send</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Useful leads, corrections, and updates are welcome.</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--raf-text-muted)]">
              {suggestionTypes.map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--raf-border-soft)] bg-white/[0.035] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-[var(--raf-cyan)]/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(217,70,239,0.08),rgba(0,0,0,0.34))] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">What helps review</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Official sources make suggestions easier to check.</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--raf-text-muted)]">
              {usefulSources.map((source) => (
                <li key={source} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 px-4 py-3">
                  {source}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(23,17,39,0.78),rgba(5,5,9,0.9))] p-6 sm:p-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-warning)]">Before anything appears publicly</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Suggestions are reviewed manually.</h2>
            <p className="mt-4 text-base leading-7 text-[var(--raf-text-muted)]">
              RetroAltFest is a curated festival atlas, not an auto-published directory. We check public sources first and keep uncertain information separate from source-supported atlas entries.
            </p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {reviewSteps.map((step) => (
              <p key={step} className="rounded-[1.5rem] border border-[var(--raf-border-soft)] bg-white/[0.035] p-5 text-sm leading-6 text-[var(--raf-text-muted)]">
                {step}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[var(--raf-border)] bg-black/25 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Privacy note</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Only share public information.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--raf-text-muted)]">
              Please do not submit private, confidential, or unpublished information. Contact info is optional and only used if RetroAltFest needs to ask a follow-up question about your suggestion.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[var(--raf-border-soft)] bg-[linear-gradient(135deg,rgba(168,85,247,0.12),rgba(34,211,238,0.08),rgba(0,0,0,0.34))] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Ready to share a lead?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Send the official source first.</h2>
            <p className="mt-5 text-base leading-7 text-[var(--raf-text-muted)]">
              The strongest suggestions include a festival name, public source link, basic region, and a short note explaining what RetroAltFest should review.
            </p>
            <a className="raf-button-primary mt-6 px-5 py-3" href={suggestionFormUrl} target="_blank" rel="noopener noreferrer">
              Open the suggestion form
            </a>
            <p className="mt-3 text-sm text-[var(--raf-text-dim)]">The form opens in Google Forms.</p>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
