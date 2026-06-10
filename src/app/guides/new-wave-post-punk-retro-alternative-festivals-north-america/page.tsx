import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";

const pagePath = "/guides/new-wave-post-punk-retro-alternative-festivals-north-america";
const gothDarkwaveGuidePath = "/guides/north-american-goth-darkwave-festivals";
const industrialEbmGuidePath = "/guides/industrial-ebm-dark-electronic-festivals-north-america";
const westCoastGuidePath = "/guides/west-coast-pacific-northwest-dark-alternative-festivals";

export const metadata: Metadata = buildMetadata({
  title: "New Wave, Post-Punk & Retro Alternative Festivals in North America",
  description:
    "A curated RetroAltFest guide to North American festivals where new wave, post-punk, retro alternative, synth-era, indie nostalgia, and emerging alternative discovery overlap.",
  path: pagePath,
  type: "article",
  keywords: [
    "new wave festivals North America",
    "post-punk festivals North America",
    "retro alternative festivals",
    "80s alternative festivals",
    "dark alternative festivals",
  ],
});

type GuideRecord = {
  festivalName: string;
  slug: string;
  city: string;
  region: string;
  country: string;
  officialUrl: string;
  sourceUrls: string[];
  atlasPath?: string;
  genreTags: string[];
  statusLabel: string;
  sceneFit: string;
  summary: string;
  visitorFit: string;
  curatorNote: string;
  sourceNote: string;
  checkingText: string;
  guideAngle: string;
};

const activeAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Darker Waves",
    slug: "darker-waves",
    city: "Huntington Beach",
    region: "California",
    country: "United States",
    officialUrl: "https://www.darkerwavesfest.com/",
    sourceUrls: ["https://www.darkerwavesfest.com/"],
    atlasPath: "/festivals/darker-waves",
    genreTags: ["new wave", "synth-era", "darkwave-adjacent", "retro alternative", "synthpop-adjacent"],
    statusLabel: "Source-supported active atlas record",
    sceneFit: "new wave, synth-era, darkwave-adjacent, retro alternative, and synthpop-adjacent discovery",
    summary:
      "Darker Waves is the clearest active atlas anchor for this guide because it sits close to the new wave, synth-era, retro alternative, and dark-leaning nostalgia lane.",
    visitorFit:
      "Start here if your taste runs toward the Depeche Mode, New Order, The Cure, Pet Shop Boys, Erasure, and dark dance-floor side of retro alternative culture.",
    curatorNote:
      "RetroAltFest treats this as the core active card for this guide, while keeping artist, schedule, and ticket details with official sources unless those facts are refreshed separately.",
    sourceNote: "The public atlas page exists because the record has source support inside the RetroAltFest active atlas.",
    checkingText: "Specific artist bookings and event logistics should be checked at the official source before travel planning.",
    guideAngle: "Core source-supported atlas entry for the new wave / retro alternative lane.",
  },
];

const adjacentAtlasRecords: GuideRecord[] = [
  {
    festivalName: "Just Like Heaven",
    slug: "just-like-heaven",
    city: "Pasadena",
    region: "California",
    country: "United States",
    officialUrl: "https://justlikeheavenfest.com/",
    sourceUrls: ["https://justlikeheavenfest.com/"],
    atlasPath: "/festivals/just-like-heaven",
    genreTags: ["retro alternative", "indie nostalgia", "blog-era indie", "alternative memory", "adjacent discovery"],
    statusLabel: "Related active atlas record",
    sceneFit: "retro alternative, indie nostalgia, blog-era indie, and alternative memory",
    summary:
      "Just Like Heaven is useful for readers exploring the indie-nostalgia and retro alternative orbit around this guide, without treating it as a core post-punk or new wave festival.",
    visitorFit:
      "Use it as a path if listeners are coming from Interpol, Yeah Yeah Yeahs, The Strokes, Franz Ferdinand, and the blog-era alternative side of the family tree.",
    curatorNote:
      "The atlas link is active, but the scene fit is adjacent. Keeping that distinction prevents this guide from becoming a general indie nostalgia directory.",
    sourceNote: "RetroAltFest links it because it is already part of the active atlas, not because every act or stage fits this exact guide lane.",
    checkingText: "Specific artist bookings and event logistics should stay with official sources unless separately refreshed.",
    guideAngle: "Related active atlas record for nearby retro alternative and indie-nostalgia discovery.",
  },
  {
    festivalName: "The New Colossus Festival",
    slug: "the-new-colossus-festival",
    city: "New York City",
    region: "New York",
    country: "United States",
    officialUrl: "https://www.newcolossusfestival.com/",
    sourceUrls: ["https://www.newcolossusfestival.com/"],
    atlasPath: "/festivals/the-new-colossus-festival",
    genreTags: ["emerging alternative", "indie", "post-punk-adjacent", "new-music discovery", "multi-venue festival"],
    statusLabel: "Related active atlas record",
    sceneFit: "emerging alternative, indie, post-punk-adjacent, and new-music discovery",
    summary:
      "The New Colossus Festival belongs here as a bridge into emerging alternative and post-punk-adjacent discovery, not as a classic new wave nostalgia anchor.",
    visitorFit:
      "Choose this path if your taste runs toward newer bands, international discovery, post-punk-adjacent guitar music, and the exploratory side of alternative festivals.",
    curatorNote:
      "The festival helps this page serve visitors who want discovery beyond legacy nostalgia while still staying near the retro alternative and post-punk conversation.",
    sourceNote: "RetroAltFest links it as an active atlas record with a useful adjacent role for this guide.",
    checkingText: "Treat it as a broader discovery festival and avoid simplifying it to a single-scene event.",
    guideAngle: "Related active atlas record for emerging post-punk-adjacent discovery.",
  },
];

const referenceRecords: GuideRecord[] = [
  {
    festivalName: "Cruel World",
    slug: "cruel-world",
    city: "Pasadena",
    region: "California",
    country: "United States",
    officialUrl: "https://cruelworldfest.com/",
    sourceUrls: ["https://cruelworldfest.com/"],
    genreTags: ["classic alternative", "new wave", "post-punk", "synthpop-adjacent", "dark alternative"],
    statusLabel: "Reference point, not an active atlas link here",
    sceneFit: "classic alternative, new wave, post-punk, synthpop-adjacent, and dark alternative history",
    summary:
      "Cruel World remains a strong reference point for this guide’s retro alternative and post-punk lane, but RetroAltFest does not link it as an active atlas record here.",
    visitorFit:
      "It is useful context for listeners coming from Siouxsie and the Banshees, Bauhaus, Echo & the Bunnymen, Tears for Fears, and other darker or synth-linked alternative touchstones.",
    curatorNote:
      "The editorial fit is strong, but this page avoids treating reference signals like active atlas records.",
    sourceNote: "A familiar name can be scene-relevant without receiving a RetroAltFest detail link.",
    checkingText: "Official future-edition details would need a separate source review before active treatment.",
    guideAngle: "Reference signal only; no RetroAltFest detail link.",
  },
];

const broadRelatedRecords: GuideRecord[] = [
  {
    festivalName: "Riot Fest",
    slug: "riot-fest",
    city: "Chicago",
    region: "Illinois",
    country: "United States",
    officialUrl: "https://riotfest.org/",
    sourceUrls: ["https://riotfest.org/"],
    genreTags: ["punk", "alternative", "legacy alternative", "post-punk-adjacent", "broad related signal"],
    statusLabel: "Broad related reference point",
    sceneFit: "punk, legacy alternative, broad alternative, and occasional post-punk-adjacent discovery",
    summary:
      "Riot Fest can be useful context where punk, legacy alternative, and post-punk-adjacent discovery overlap, but its scope is wider than this guide’s main lane.",
    visitorFit:
      "Use it as a nearby reference point if your taste runs toward broader alternative and punk-rooted festival culture rather than a focused new wave or post-punk guide path.",
    curatorNote:
      "RetroAltFest keeps the mention light here and does not turn it into an active guide card or festival-detail CTA.",
    sourceNote: "Related context is not the same as an active RetroAltFest atlas page.",
    checkingText: "Any specific artist, schedule, or ticket claim would require a separate source check.",
    guideAngle: "Broad related reference only; no RetroAltFest detail link.",
  },
];

const statusLabels = [
  {
    label: "Source-supported active atlas record",
    description: "A RetroAltFest atlas entry with a public festival detail page and source support inside the active atlas.",
  },
  {
    label: "Related active atlas record",
    description: "An active atlas entry that helps discovery in a nearby lane without becoming the core new wave or post-punk anchor.",
  },
  {
    label: "Reference point",
    description: "A familiar or scene-relevant festival name that helps readers understand the lane, but does not receive an active RetroAltFest detail link here.",
  },
  {
    label: "Broad related context",
    description: "A wider punk, indie, nostalgia, or alternative event that may matter to readers without defining this guide’s main lane.",
  },
];

const allPublicRecords = [...activeAtlasRecords, ...adjacentAtlasRecords, ...referenceRecords, ...broadRelatedRecords];

export default function NewWavePostPunkRetroAlternativeGuidePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--raf-black)] text-[var(--raf-text)]">
      <div className="ambient-haze pointer-events-none absolute -inset-28 opacity-90" />
      <div className="nocturnal-grid pointer-events-none absolute inset-0 opacity-42 mix-blend-screen" />
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />
      <div className="grain-field pointer-events-none absolute inset-0 opacity-[0.06]" />

      <Header />

      <article className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-16">
        <nav className="mb-8 font-mono text-xs uppercase tracking-[0.24em] text-[var(--raf-text-dim)]" aria-label="Breadcrumb">
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/">
            RetroAltFest
          </Link>
          <span className="mx-3 text-[var(--raf-violet)]">/</span>
          <Link className="transition hover:text-[var(--raf-cyan)]" href="/guides">
            Guides
          </Link>
        </nav>

        <section className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.2)] bg-[linear-gradient(145deg,rgba(35,24,57,0.82),rgba(8,7,14,0.92)_58%,rgba(3,3,6,0.96))] p-6 shadow-[0_34px_120px_rgba(0,0,0,0.55),0_0_70px_rgba(88,28,135,0.16)] sm:p-8 lg:p-10">
          <div className="map-panel-bloom pointer-events-none absolute -inset-16 opacity-55 blur-2xl" />
          <div className="relative z-10 max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Curated scene guide</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              New Wave, Post-Punk &amp; Retro Alternative Festivals in North America
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
              Start here for North American new wave, post-punk, retro alternative, synth-era, and related indie-nostalgia festival discovery.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              This guide is for listeners coming from new wave, synthpop, post-punk, 80s alternative, goth-adjacent sounds, indie memory, and darker dance-floor culture who want a careful doorway into festival discovery.
            </p>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
              RetroAltFest separates source-supported active atlas records from adjacent links and reference points. We would rather label uncertainty clearly than imply ticketing, artist bookings, or festival pages that official sources do not support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/verification">
                See how RetroAltFest verifies festival records
              </Link>
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <AtlasFact label="Guide examples" value={`${allPublicRecords.length} source-aware examples`} />
              <AtlasFact label="Primary atlas path" value="Darker Waves" />
              <AtlasFact label="Scope" value="New wave / post-punk / retro alternative" />
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <InfoPanel eyebrow="Who this guide is for" title="A doorway for retro alternative listeners who know the borders are blurry.">
            <p>
              Use this page if your taste runs toward new wave hooks, synth-era melancholy, darker guitar lines, post-punk atmosphere, indie nostalgia, or festival-scale alternative culture that brushes against goth and darkwave without always living there.
            </p>
            <p>
              The point is not to flatten those scenes into one bucket. It is to help visitors find useful starting points while keeping source support, guide fit, and uncertainty visible.
            </p>
          </InfoPanel>

          <InfoPanel eyebrow="How to use this guide" title="Start with the atlas links, then use reference points as context.">
            <p>
              Active atlas links go to public RetroAltFest festival pages. Reference points help explain the scene lane, but they do not receive fake detail pages just because the name is familiar.
            </p>
            <p>
              For current artist, schedule, location, and ticket details, use the official festival source linked from each card. RetroAltFest keeps this page focused on discovery and context.
            </p>
          </InfoPanel>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Where to start</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Choose the lane that matches your listening history.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <StartCard
              title="New wave, synth-era, and dark dance-floor memory"
              description="Start with Darker Waves if your taste runs toward synthpop, 80s alternative, and darkwave-adjacent nostalgia."
              href="/festivals/darker-waves"
              linkLabel="Open Darker Waves"
            />
            <StartCard
              title="Indie nostalgia and retro alternative overlap"
              description="Use Just Like Heaven as an adjacent active atlas path for blog-era indie, alternative memory, and retro festival discovery."
              href="/festivals/just-like-heaven"
              linkLabel="Open Just Like Heaven"
            />
            <StartCard
              title="Emerging alternative and post-punk-adjacent discovery"
              description="Use The New Colossus Festival when you want newer bands, international discovery, and post-punk-adjacent scenes."
              href="/festivals/the-new-colossus-festival"
              linkLabel="Open The New Colossus Festival"
            />
            <StartCard
              title="Darker scene-specific paths"
              description="If you want the goth, darkwave, industrial, or EBM side, continue into the related RetroAltFest guides."
              href={gothDarkwaveGuidePath}
              linkLabel="Read the Goth & Darkwave guide"
            />
            <StartCard
              title="Full active atlas browsing"
              description="Use the festival directory when you want the full set of source-supported active RetroAltFest records."
              href="/festivals"
              linkLabel="Browse the atlas"
            />
            <StartCard
              title="Source-aware method"
              description="Use the verification page when you want to understand why some names are linked and others stay as context."
              href="/verification"
              linkLabel="Read the verification notes"
            />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Scene and vibe notes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Retro alternative is a family tree, not a clean shelf label.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            The lane is retro alternative first, with visible overlap across new wave, post-punk, synthpop, darkwave-adjacent sounds, indie nostalgia, and broader alternative festivals. RetroAltFest keeps those overlaps useful without pretending every event belongs equally in the same scene.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <VibeNote title="New wave and synthpop nostalgia" description="Listeners coming from Depeche Mode, New Order, Pet Shop Boys, Erasure, or The Cure may find the strongest doorway through synth-era and dark dance-floor festival contexts." />
            <VibeNote title="Post-punk and darker guitar overlap" description="Sounds adjacent to Joy Division, The Chameleons, Bauhaus, Echo & the Bunnymen, and The Sound help explain why some darker alternative festivals sit near this guide." />
            <VibeNote title="Indie and blog-era alternative memory" description="Fans of Interpol, Yeah Yeah Yeahs, The Strokes, and Franz Ferdinand may connect through retro alternative and indie nostalgia rather than classic new wave." />
            <VibeNote title="Darkwave and club-culture edges" description="Clan of Xymox, Drab Majesty, Boy Harsher-style dark electronic references, dark disco, electroclash, and EBM-adjacent DJ culture sit near the borders of this guide." />
          </div>
        </section>

        <GuideSection
          eyebrow="Source-supported active atlas record"
          title="Darker Waves is the active guide anchor."
          description="Darker Waves is the core source-supported atlas card in this guide. Other linked records are useful adjacent paths, not the central new wave / retro alternative anchor."
          records={activeAtlasRecords}
          emphasized
        />

        <GuideSection
          eyebrow="Related active atlas records"
          title="Nearby atlas links for retro alternative and post-punk-adjacent discovery."
          description="Just Like Heaven and The New Colossus Festival are useful active atlas paths when their guide fit is labeled carefully: adjacent retro alternative / indie nostalgia for Just Like Heaven, and emerging post-punk-adjacent discovery for The New Colossus."
          records={adjacentAtlasRecords}
        />

        <GuideSection
          eyebrow="Reference points, not active atlas links here"
          title="Familiar names can explain the lane without getting fake detail pages."
          description="Cruel World and Riot Fest can be useful scene context, but this page does not link them as active RetroAltFest atlas records. Reference value is not the same as active atlas treatment."
          records={[...referenceRecords, ...broadRelatedRecords]}
        />

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Why some names are not linked</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            RetroAltFest does not create festival pages just to fill space.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            Some festivals are meaningful reference points for new wave, post-punk, and retro alternative listeners, but they are not active RetroAltFest atlas links on this page. That distinction protects visitors from dead ends and keeps the atlas tied to source-supported records.
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            When a name is discussed as context, the guide should make that clear. When a name receives a public RetroAltFest festival page, it should be because the record belongs in the active atlas and has passed the site’s source-aware review.
          </p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">Guide labels</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How RetroAltFest labels this guide
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            RetroAltFest keeps source caveats visible so readers can tell active atlas records from adjacent discovery and reference context.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {statusLabels.map((status) => (
              <div key={status.label} className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
                <h3 className="font-display text-xl font-semibold text-white">{status.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--raf-text-muted)]">{status.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Short FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Quick answers for careful festival discovery.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <FaqItem question="Are these all active RetroAltFest festival pages?" answer="No. The guide includes active atlas links and reference points. Only source-supported active atlas records receive RetroAltFest festival detail links." />
            <FaqItem question="Why are some familiar festivals mentioned but not linked?" answer="A festival can be useful context without being an active atlas record here. RetroAltFest avoids fake detail pages for reference-only names." />
            <FaqItem question="What counts as new wave or post-punk for this guide?" answer="The guide focuses on festival discovery where new wave, post-punk, synth-era, retro alternative, darkwave-adjacent, or indie nostalgia sounds meaningfully overlap." />
            <FaqItem question="Is this a full list of every related festival?" answer="No. It is a curated, source-aware starting point that favors trust and usefulness over scale." />
            <FaqItem question="How is this different from the goth and darkwave guide?" answer="This page leans more toward new wave, post-punk, retro alternative, synth-era, and indie nostalgia. The goth and darkwave guide stays closer to darker scene-specific discovery." />
            <FaqItem question="How does RetroAltFest verify festival information?" answer="RetroAltFest uses a source-aware process and explains the method on the verification page." href="/verification" linkLabel="Read verification notes" />
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[rgba(34,211,238,0.18)] bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-6 sm:p-8 lg:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">Related RetroAltFest paths</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Keep the overlap useful without blurring the guides.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-[var(--raf-text-muted)]">
            For darker scene-specific discovery, use the North American Goth & Darkwave Festivals guide. For heavier dark electronic, industrial, and EBM-focused discovery, use the Industrial, EBM & Dark Electronic Festivals in North America guide. For regional West Coast and Pacific Northwest exploration, use the regional dark alternative guide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={industrialEbmGuidePath}>
              Read the Industrial / EBM guide
            </Link>
            <Link className="raf-button-secondary px-5 py-3 text-sm font-semibold text-white" href={westCoastGuidePath}>
              Read the West Coast / PNW guide
            </Link>
            <Link className="raf-button-primary px-5 py-3 text-sm font-black text-[#050507]" href="/festivals">
              Browse the festival atlas
            </Link>
          </div>
        </section>

        <DiscoveryLinks
          title="Choose your next discovery path."
          description="Use this guide as one route into the atlas, then continue into the active record view, the guide hub, or the source-check notes behind RetroAltFest records."
          links={[
            {
              href: "/guides",
              label: "Back to all guides",
              description: "Compare the current Goth & Darkwave, Industrial / EBM, New Wave / Post-Punk, and West Coast / PNW guide routes.",
            },
            {
              href: "/festivals",
              label: "Browse active atlas records",
              description: "Open the festival atlas and follow only source-backed internal detail links.",
            },
            {
              href: "/verification",
              label: "See how source checks work",
              description: "Review how RetroAltFest separates active records from reference signals and related context.",
            },
          ]}
        />
      </article>

      <Footer />
    </main>
  );
}

function GuideSection({
  eyebrow,
  title,
  description,
  records,
  emphasized = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
  emphasized?: boolean;
}) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.5),rgba(255,255,255,0.024))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 leading-8 text-[var(--raf-text-muted)]">{description}</p>
      </div>

      <div className={`mt-7 grid gap-5 ${emphasized ? "lg:grid-cols-1" : "lg:grid-cols-2 xl:grid-cols-2"}`}>
        {records.map((record) => (
          <FestivalGuideCard key={record.slug} record={record} emphasized={emphasized} />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({ record, emphasized }: { record: GuideRecord; emphasized: boolean }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/40 hover:bg-white/[0.045] sm:p-6 ${emphasized ? "border-[rgba(34,211,238,0.22)] bg-[linear-gradient(180deg,rgba(17,12,30,0.92),rgba(4,4,8,0.9))]" : "border-[var(--raf-border-soft)] bg-black/30"}`}>
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--raf-text-dim)]">
            {record.city} · {record.region} · {record.country}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">{record.festivalName}</h3>
        </div>
        <span className="max-w-full rounded-full border border-[var(--raf-border)] bg-white/[0.055] px-3 py-1 text-left font-mono text-[11px] font-semibold leading-5 text-[var(--raf-cyan)] sm:max-w-[22rem]">
          {record.statusLabel}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-white">Scene fit: {record.sceneFit}</p>
      <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{record.summary}</p>
      <p className="mt-4 leading-7 text-[var(--raf-text-muted)]">{record.visitorFit}</p>
      <p className="mt-4 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Curator note: </span>{record.curatorNote}
      </p>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2">
        <AtlasFact label="Source-aware note" value={record.sourceNote} />
        <AtlasFact label="Still check officially" value={record.checkingText} />
      </dl>

      <p className="mt-5 rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4 text-sm leading-6 text-[var(--raf-text-muted)]">
        <span className="font-semibold text-white">Guide angle: </span>{record.guideAngle}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {record.genreTags.map((tag) => (
          <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        {record.atlasPath ? (
          <Link className="inline-flex text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.atlasPath}>
            View atlas record
          </Link>
        ) : null}
        <a className="inline-flex break-words text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={record.officialUrl} target="_blank" rel="noreferrer">
          Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
        </a>
        <p className="text-xs leading-5 text-[var(--raf-text-dim)]">Sources checked: {record.sourceUrls.length} official or organizer-controlled page.</p>
      </div>
    </article>
  );
}

function InfoPanel({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(18,13,30,0.74),rgba(0,0,0,0.38))] p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-magenta)]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-[var(--raf-text-muted)]">{children}</div>
    </section>
  );
}

function StartCard({ title, description, href, linkLabel }: { title: string; description: string; href: string; linkLabel: string }) {
  return (
    <article className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-5">
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">{description}</p>
      <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={href}>
        {linkLabel}
      </Link>
    </article>
  );
}

function VibeNote({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-5">
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">{description}</p>
    </article>
  );
}

function FaqItem({ question, answer, href, linkLabel }: { question: string; answer: string; href?: string; linkLabel?: string }) {
  return (
    <article className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-5">
      <h3 className="font-display text-xl font-semibold text-white">{question}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">{answer}</p>
      {href && linkLabel ? (
        <Link className="mt-4 inline-flex text-sm font-semibold text-[var(--raf-cyan)] transition hover:text-white" href={href}>
          {linkLabel}
        </Link>
      ) : null}
    </article>
  );
}

function AtlasFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--raf-border-soft)] bg-black/25 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-white">{value}</p>
    </div>
  );
}
