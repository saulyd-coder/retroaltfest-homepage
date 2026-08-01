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
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import styles from "./FestivalDetail.module.css";

export const dynamicParams = false;

const FESTIVAL_DETAIL_REFERENCE_SLUG = "mera-luna-festival";
const NIGHT_TRANSMISSION_DETAIL_SLUGS: readonly string[] = Object.freeze([
  FESTIVAL_DETAIL_REFERENCE_SLUG,
  "darker-waves",
  "ncn-festival-nocturnal-culture-night",
  "levitation",
  "a-murder-of-crows-xi-nyc-goth-post-punk-festival",
  "the-new-colossus-festival",
]);
const GENERIC_GUIDE_DISCOVERY_LINK = Object.freeze({
  href: "/guides",
  label: "Read curated guides",
});
const FESTIVAL_DETAIL_GUIDE_LINKS: Readonly<Record<string, Readonly<{ href: string; label: string }>>> = Object.freeze({
  "mera-luna-festival": Object.freeze({
    href: "/guides/first-time-dark-alternative-festival-guide",
    label: "First-Time Dark Alternative Festival Guide",
  }),
  "ncn-festival-nocturnal-culture-night": Object.freeze({
    href: "/guides/first-time-dark-alternative-festival-guide",
    label: "First-Time Dark Alternative Festival Guide",
  }),
  "darker-waves": Object.freeze({
    href: "/guides/new-wave-post-punk-retro-alternative-festivals-north-america",
    label: "New Wave, Post-Punk & Retro Alternative Guide",
  }),
  "a-murder-of-crows-xi-nyc-goth-post-punk-festival": Object.freeze({
    href: "/guides/north-american-goth-darkwave-festivals",
    label: "North American Goth & Darkwave Guide",
  }),
});
const festivalMetadataTitleOverrides: Readonly<Record<string, string>> = {
  [FESTIVAL_DETAIL_REFERENCE_SLUG]: "M'era Luna Festival guide",
  "a-murder-of-crows-xi-nyc-goth-post-punk-festival": "A Murder of Crows XI NYC Goth & Post-punk Festival guide",
  "the-new-colossus-festival": "The New Colossus Festival guide",
};
const PHASE4A_MAIN_CONTENT_HASH = "76c758093ac2f0188e28f9661519d6455421c4d07720ab251d0744d14bd2af9d";
const PHASE4A_ARTICLE_CONTENT_HASH = "bd142ffcd3a4f0c9fcfb73842e57b951707ff02b0d226a47f4c9767a5d6942a4";
const BROWSER_MAIN_CONTENT_HASH = "fa42f02e5dcf6c0f6b8cebe6a44e84d95b4ab5a01f9ac0f3ab362b127d4c7fbf";
const BROWSER_ARTICLE_CONTENT_HASH = "47c19a387a3e3221f71de39df46d2c47dc424d345c4256f44682600096d61591";

function referenceClass(enabled: boolean, legacyClass: string, referenceClassName: string) {
  return enabled ? `${legacyClass} ${referenceClassName}` : legacyClass;
}

const detailPagePolish: Record<
  string,
  {
    metadataTitle: string;
    metadataDescription: string;
    heroSummary: string;
    sourceAwareNote: string;
    verificationHighlights: string[];
    faq: {
      question: string;
      answer: string;
    };
  }
> = {
  "absolution-fest": {
    metadataTitle: "Absolution Fest 2026 — Tampa Goth, Darkwave & Post-Punk Festival",
    metadataDescription:
      "Source-aware RetroAltFest notes for Absolution Fest 2026 in Tampa, Florida, scheduled for October 1–3 with official and organizer-controlled source support.",
    heroSummary:
      "Absolution Fest 2026 is scheduled for October 1–3, 2026 in Tampa, Florida, with official and organizer-controlled sources supporting the current date and city details. RetroAltFest keeps venue and map certainty cautious until each location detail is rechecked.",
    sourceAwareNote:
      "For current ticket and event details, check the official Absolution Fest site and the official-site-linked Eventbrite listing. RetroAltFest summarizes the source trail, but the organizer-controlled pages remain the best place for updates.",
    verificationHighlights: [
      "Official sources support Absolution Fest 2026 for October 1–3, 2026.",
      "Official sources place the event in Tampa, Florida.",
      "The organizer-controlled ticket page lists The Orpheum in Tampa, FL.",
      "Venue and map certainty stay cautious until rechecked for any future placement work.",
    ],
    faq: {
      question: "Is Absolution Fest 2026 officially announced?",
      answer:
        "Yes. Official and organizer-controlled sources support Absolution Fest 2026 for October 1–3, 2026 in Tampa, Florida. The official-site-linked Eventbrite listing names The Orpheum in Tampa, FL; visitors should check the official festival site and Eventbrite for the latest ticket and event details.",
    },
  },
};

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

  const polish = detailPagePolish[festival.slug];

  return buildMetadata({
    title: polish?.metadataTitle ?? festivalMetadataTitleOverrides[festival.slug] ?? `${festival.name} festival guide`,
    description: polish?.metadataDescription ?? festival.summary,
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
  const festival = getPublicFestivalDetailBySlug(slug) ?? notFound();

  const polish = detailPagePolish[festival.slug];
  const heroSummary = polish?.heroSummary ?? festival.summary;
  const isMeraLunaReferenceRoute = festival.slug === FESTIVAL_DETAIL_REFERENCE_SLUG;
  const usesNightTransmissionPresentation = NIGHT_TRANSMISSION_DETAIL_SLUGS.includes(festival.slug);
  const guideDiscoveryLink = FESTIVAL_DETAIL_GUIDE_LINKS[festival.slug] ?? GENERIC_GUIDE_DISCOVERY_LINK;

  const discoveryLinks = (
    <DiscoveryLinks
      title="Continue exploring RetroAltFest."
      description="Move from this source-checked atlas entry into the full directory, the guide hub, or the verification notes that explain the trust layer behind each record."
      links={[
        {
          href: "/festivals",
          label: "Browse all atlas records",
          description: "Return to the current 15-record festival atlas and compare records by scene, region, and status.",
        },
        {
          href: guideDiscoveryLink.href,
          label: guideDiscoveryLink.label,
          description: "Use scene and regional guides for context around goth, darkwave, industrial, EBM, new wave, and post-punk discovery.",
        },
        {
          href: "/verification",
          label: "See source-check notes",
          description: "Learn how RetroAltFest labels confirmation, uncertainty, and location confidence before deeper discovery steps.",
        },
      ]}
    />
  );

  return (
    <main
      className={referenceClass(usesNightTransmissionPresentation, "relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]", styles.referencePage)}
      data-festival-detail-reference={usesNightTransmissionPresentation ? "night-transmission" : undefined}
      data-phase4a-main-contract={isMeraLunaReferenceRoute ? PHASE4A_MAIN_CONTENT_HASH : undefined}
      data-browser-main-contract={isMeraLunaReferenceRoute ? BROWSER_MAIN_CONTENT_HASH : undefined}
    >
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      {usesNightTransmissionPresentation ? (
        <>
          <div className={styles.paperEdge} data-detail-decoration="paper-edge" aria-hidden="true" />
          <div className={styles.towerBeacon} data-detail-decoration="tower" aria-hidden="true" />
        </>
      ) : null}

      <Header />

      <article
        className={referenceClass(usesNightTransmissionPresentation, "relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16", styles.content)}
        data-phase4a-article-contract={isMeraLunaReferenceRoute ? PHASE4A_ARTICLE_CONTENT_HASH : undefined}
        data-browser-article-contract={isMeraLunaReferenceRoute ? BROWSER_ARTICLE_CONTENT_HASH : undefined}
      >
        <nav className={referenceClass(usesNightTransmissionPresentation, "mb-8 font-mono text-xs uppercase tracking-[0.24em] text-[var(--raf-text-dim)]", styles.breadcrumb)} aria-label="Breadcrumb">
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/">
            RetroAltFest
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <span className="text-[var(--raf-text-muted)]">Festival atlas</span>
        </nav>

        <section className={referenceClass(usesNightTransmissionPresentation, "grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start", styles.masthead)} data-detail-section={usesNightTransmissionPresentation ? "masthead" : undefined}>
          <div className={referenceClass(usesNightTransmissionPresentation, "relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10", styles.mastheadPanel)}>
            <div className={referenceClass(usesNightTransmissionPresentation, "map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl", styles.mastheadBloom)} />
            <div className={referenceClass(usesNightTransmissionPresentation, "relative z-10", styles.mastheadCopy)}>
              <p className={referenceClass(usesNightTransmissionPresentation, "font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]", styles.telemetry)}>Curated atlas entry</p>
              <h1 className={referenceClass(usesNightTransmissionPresentation, "mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl", styles.title)}>
                {festival.name}
              </h1>
              <p className={referenceClass(usesNightTransmissionPresentation, "mt-5 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl", styles.summary)}>
                {heroSummary}
              </p>

              <dl className={referenceClass(usesNightTransmissionPresentation, "mt-8 grid gap-3 sm:grid-cols-3", styles.factGrid)} data-detail-section={usesNightTransmissionPresentation ? "essential-facts" : undefined}>
                <AtlasFact label="Location" value={festival.locationLabel} referenceMode={usesNightTransmissionPresentation} />
                <AtlasFact label="Dates" value={festival.dateLabel} referenceMode={usesNightTransmissionPresentation} />
                <AtlasFact label="Venue" value={festival.venueLabel} referenceMode={usesNightTransmissionPresentation} />
              </dl>
            </div>
          </div>

          <aside className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(180deg,rgba(23,17,39,0.78),rgba(5,5,9,0.9))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.36)]", styles.statusLedger)} data-detail-section={usesNightTransmissionPresentation ? "status-verification" : undefined}>
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
            <Link className={referenceClass(usesNightTransmissionPresentation, "mt-5 inline-flex w-full justify-center rounded-full border border-[var(--raf-cyan)]/25 bg-[var(--raf-cyan)]/10 px-5 py-3 text-center text-sm font-bold text-[var(--raf-cyan)] transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/50 hover:text-white", styles.verificationLink)} href="/verification">
              How verification works
            </Link>
            <a className={referenceClass(usesNightTransmissionPresentation, "mt-3 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-[#050507] transition hover:-translate-y-0.5 hover:bg-[var(--raf-cyan)]", styles.officialCta)} data-detail-action={usesNightTransmissionPresentation ? "official-site" : undefined} href={festival.officialSiteUrl} target="_blank" rel="noreferrer">
              Visit official site
            </a>
          </aside>
        </section>

        <section className={referenceClass(usesNightTransmissionPresentation, "mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]", styles.bodyGrid)}>
          <div className={referenceClass(usesNightTransmissionPresentation, "space-y-8", styles.mainColumn)}>
            <section className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8", styles.contentPanel)} data-detail-section={usesNightTransmissionPresentation ? "editorial-context" : undefined}>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Editorial context</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Why this festival matters</h2>
              <p className="mt-5 leading-8 text-[var(--raf-text-muted)]">{festival.whyItMatters}</p>
            </section>

            <section className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/25 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8", styles.contentPanel)} data-detail-section={usesNightTransmissionPresentation ? "source-verification-explanation" : undefined}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Verification notes</h2>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--raf-text-muted)] md:grid-cols-2">
                <p>{festival.verificationNote}</p>
                <p>{festival.mappingNote}</p>
              </div>
            </section>

            {polish ? (
              <section className="rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(180deg,rgba(14,26,38,0.62),rgba(0,0,0,0.32))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Source-aware status</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">Current source check</h2>
                <p className="mt-5 leading-8 text-[var(--raf-text-muted)]">{polish.sourceAwareNote}</p>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--raf-text-muted)] md:grid-cols-2">
                  {polish.verificationHighlights.map((highlight) => (
                    <li key={highlight} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8", styles.sourcesPanel)} data-detail-section={usesNightTransmissionPresentation ? "official-sources" : undefined}>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Official sources</h2>
              <div className={referenceClass(usesNightTransmissionPresentation, "mt-5 grid gap-3 sm:grid-cols-2", styles.sourceGrid)}>
                {festival.sourceLinks.map((source) => (
                  <a key={source.url} className={referenceClass(usesNightTransmissionPresentation, "rounded-2xl border border-[var(--raf-border-soft)] bg-black/30 p-4 text-sm text-[var(--raf-text-muted)] transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/40 hover:text-white", styles.sourceLink)} href={source.url} target="_blank" rel="noreferrer">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-cyan)]">{source.typeLabel}</span>
                    <span className="mt-2 block font-semibold">{source.label}</span>
                    <span className="mt-2 block break-words text-[var(--raf-text-dim)]">{source.url}</span>
                  </a>
                ))}
              </div>
            </section>

            {polish ? (
              <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/25 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Quick answer</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">{polish.faq.question}</h2>
                <p className="mt-5 leading-8 text-[var(--raf-text-muted)]">{polish.faq.answer}</p>
              </section>
            ) : null}
          </div>

          <aside className={referenceClass(usesNightTransmissionPresentation, "space-y-8", styles.sideRail)}>
            <section className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/30 p-5", styles.sidePanel)} data-detail-section={usesNightTransmissionPresentation ? "genres-scenes" : undefined}>
              <h2 className="font-display text-2xl font-semibold text-white">Genre tags</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {festival.sceneTags.map((genre) => (
                  <span key={genre} className={referenceClass(usesNightTransmissionPresentation, "raf-chip rounded-full px-3 py-1 text-xs", styles.genreTag)}>
                    {genre}
                  </span>
                ))}
              </div>
            </section>

            <section className={referenceClass(usesNightTransmissionPresentation, "rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-black/30 p-5", styles.sidePanel)} data-detail-section={usesNightTransmissionPresentation ? "related-festivals" : undefined}>
              <h2 className="font-display text-2xl font-semibold text-white">Similar festivals</h2>
              <div className="mt-4 space-y-3">
                {festival.similar.map((similar) => (
                  <Link key={similar.id} className={referenceClass(usesNightTransmissionPresentation, "block rounded-2xl border border-[var(--raf-border-soft)] bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.06]", styles.relatedLink)} href={`/festivals/${similar.slug}`}>
                    <span className="block font-display text-lg font-semibold text-white">{similar.name}</span>
                    <span className="mt-1 block text-sm text-[var(--raf-text-muted)]">{similar.locationLabel}</span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </section>

        {usesNightTransmissionPresentation ? <div className={styles.discoveryShell} data-detail-section="discovery-links">{discoveryLinks}</div> : discoveryLinks}
      </article>

      <Footer />
    </main>
  );
}

function AtlasFact({ label, value, referenceMode = false }: { label: string; value: string; referenceMode?: boolean }) {
  return (
    <div className={referenceClass(referenceMode, "rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4", styles.fact)}>
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-white">{value}</dd>
    </div>
  );
}
