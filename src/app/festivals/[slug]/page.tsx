import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPublicFestivalDetailBySlug,
  publicFestivalSlugs,
} from "@/lib/public-festivals";
import { buildMetadata } from "@/lib/seo";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const dynamicParams = false;

type FestivalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicFestivalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: FestivalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const festival = getPublicFestivalDetailBySlug(slug);

  if (!festival) {
    return {
      title: "Festival not found",
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: `${festival.name} festival guide`,
    description: festival.summary,
    path: `/festivals/${festival.slug}`,
    type: "article",
    keywords: festival.seoKeywords,
    image: {
      alt: `${festival.name} on the RetroAltFest atlas`,
    },
  });
}

export default async function FestivalDetailPage({ params }: FestivalPageProps) {
  const { slug } = await params;
  const festival = getPublicFestivalDetailBySlug(slug);

  if (!festival) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      <Header />

      <article className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16">
        <nav className="mb-8 font-mono text-xs uppercase tracking-[0.24em] text-[var(--raf-text-dim)]" aria-label="Breadcrumb">
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/">
            RetroAltFest
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <span className="text-[var(--raf-text-muted)]">Festival atlas</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
            <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated atlas entry</p>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
                {festival.name}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
                {festival.summary}
              </p>

              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <AtlasFact label="Location" value={festival.locationLabel} />
                <AtlasFact label="Dates" value={festival.dateLabel} />
                <AtlasFact label="Venue" value={festival.venueLabel} />
              </dl>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(23,17,39,0.78),rgba(5,5,9,0.9))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--raf-text-dim)]">Verification</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--raf-text-muted)]">
              <p>
                <span className="text-white">Status:</span> {festival.statusLabel}
              </p>
              <p>
                <span className="text-white">Source confidence:</span> {festival.sourceConfidenceLabel}
              </p>
              <p>
                <span className="text-white">Location confidence:</span> {festival.coordinateLabel}
              </p>
            </div>
            <Link className="mt-5 inline-flex w-full justify-center rounded-full border border-[var(--raf-cyan)]/25 bg-[var(--raf-cyan)]/10 px-5 py-3 text-center text-sm font-bold text-[var(--raf-cyan)] transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/50 hover:text-white" href="/verification">
              How verification works
            </Link>
            <a className="mt-3 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-[#050507] transition hover:-translate-y-0.5 hover:bg-[var(--raf-cyan)]" href={festival.officialSiteUrl} target="_blank" rel="noreferrer">
              Visit official site
            </a>
          </aside>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Editorial context</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Why this festival matters</h2>
              <p className="mt-5 leading-8 text-[var(--raf-text-muted)]">{festival.whyItMatters}</p>
            </section>

            <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/25 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Verification notes</h2>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--raf-text-muted)] md:grid-cols-2">
                <p>{festival.verificationNote}</p>
                <p>{festival.mappingNote}</p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Official sources</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {festival.sourceLinks.map((source) => (
                  <a key={source.url} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/30 p-4 text-sm text-[var(--raf-text-muted)] transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/40 hover:text-white" href={source.url} target="_blank" rel="noreferrer">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-cyan)]">{source.typeLabel}</span>
                    <span className="mt-2 block font-semibold">{source.label}</span>
                    <span className="mt-2 block break-words text-[var(--raf-text-dim)]">{source.url}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/30 p-5">
              <h2 className="font-display text-2xl font-semibold text-white">Genre tags</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {festival.sceneTags.map((genre) => (
                  <span key={genre} className="raf-chip rounded-full px-3 py-1 text-xs">
                    {genre}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/30 p-5">
              <h2 className="font-display text-2xl font-semibold text-white">Similar festivals</h2>
              <div className="mt-4 space-y-3">
                {festival.similar.map((similar) => (
                  <Link key={similar.id} className="block rounded-2xl border border-[var(--raf-border-soft)] bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.06]" href={`/festivals/${similar.slug}`}>
                    <span className="block font-display text-lg font-semibold text-white">{similar.name}</span>
                    <span className="mt-1 block text-sm text-[var(--raf-text-muted)]">{similar.locationLabel}</span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>
      </article>

      <Footer />
    </main>
  );
}

function AtlasFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-white">{value}</dd>
    </div>
  );
}
