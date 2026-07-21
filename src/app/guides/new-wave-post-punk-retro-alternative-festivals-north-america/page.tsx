import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { DiscoveryLinks } from "@/components/site/DiscoveryLinks";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

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
    <main className={styles.page}>
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article
        className={styles.content}
        data-article-contract="5d85dd89e20d653d151ed20a7752270b9eb79b73ed99526db011927480b7ac62"
        data-heading-contract="1-12-25"
        data-link-contract="27"
        data-record-contract="1-core-2-adjacent-2-reference"
        data-faq-contract="6"
      >
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">
            RetroAltFest
          </Link>
          <span className={styles.crumbDivider}>/</span>
          <Link href="/guides">
            Guides
          </Link>
        </nav>

        <section className={styles.masthead}>
          <span className={styles.mastheadTelemetry} aria-hidden="true" data-label="NT / CHANNEL 03D" />
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Curated scene guide</p>
            <h1 className={styles.mastheadTitle}>
              New Wave, Post-Punk &amp; Retro Alternative Festivals in North America
            </h1>
            <p className={styles.mastheadLead}>
              Start here for North American new wave, post-punk, retro alternative, synth-era, and related indie-nostalgia festival discovery.
            </p>
            <p className={styles.mastheadCopy}>
              This guide is for listeners coming from new wave, synthpop, post-punk, 80s alternative, goth-adjacent sounds, indie memory, and darker dance-floor culture who want a careful doorway into festival discovery.
            </p>
            <p className={styles.mastheadCopy}>
              RetroAltFest separates source-supported active atlas records from adjacent links and reference points. We would rather label uncertainty clearly than imply ticketing, artist bookings, or festival pages that official sources do not support.
            </p>
            <div className={styles.pathLinks}>
              <Link className={styles.primaryPath} href="/verification">
                See how RetroAltFest verifies festival records
              </Link>
              <Link className={styles.secondaryPath} href="/festivals">
                Browse the festival atlas
              </Link>
              <Link className={styles.secondaryPath} href="/guides">
                Explore more guides
              </Link>
            </div>
            <div className={styles.factGrid}>
              <AtlasFact label="Guide examples" value={`${allPublicRecords.length} source-aware examples`} />
              <AtlasFact label="Primary atlas path" value="Darker Waves" />
              <AtlasFact label="Scope" value="New wave / post-punk / retro alternative" />
            </div>
          </div>
        </section>

        <section className={styles.infoGrid} data-info-grid>
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

        <section className={styles.dispatchSection} data-dispatch-section>
          <p className={styles.sectionEyebrow}>Where to start</p>
          <h2 className={styles.sectionTitle}>
            Choose the lane that matches your listening history.
          </h2>
          <div className={styles.dispatchGrid}>
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

        <section className={styles.vibeSection} data-vibe-section>
          <p className={styles.sectionEyebrow}>Scene and vibe notes</p>
          <h2 className={styles.sectionTitle}>
            Retro alternative is a family tree, not a clean shelf label.
          </h2>
          <p className={styles.sectionDescription}>
            The lane is retro alternative first, with visible overlap across new wave, post-punk, synthpop, darkwave-adjacent sounds, indie nostalgia, and broader alternative festivals. RetroAltFest keeps those overlaps useful without pretending every event belongs equally in the same scene.
          </p>
          <div className={styles.vibeGrid}>
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
          startIndex={1}
          variant="core"
          emphasized
        />

        <GuideSection
          eyebrow="Related active atlas records"
          title="Nearby atlas links for retro alternative and post-punk-adjacent discovery."
          description="Just Like Heaven and The New Colossus Festival are useful active atlas paths when their guide fit is labeled carefully: adjacent retro alternative / indie nostalgia for Just Like Heaven, and emerging post-punk-adjacent discovery for The New Colossus."
          records={adjacentAtlasRecords}
          startIndex={2}
          variant="adjacent"
        />

        <GuideSection
          eyebrow="Reference points, not active atlas links here"
          title="Familiar names can explain the lane without getting fake detail pages."
          description="Cruel World and Riot Fest can be useful scene context, but this page does not link them as active RetroAltFest atlas records. Reference value is not the same as active atlas treatment."
          records={[...referenceRecords, ...broadRelatedRecords]}
          startIndex={4}
          variant="reference"
        />

        <section className={styles.boundarySection} data-boundary-section>
          <p className={styles.sectionEyebrow}>Why some names are not linked</p>
          <h2 className={styles.sectionTitle}>
            RetroAltFest does not create festival pages just to fill space.
          </h2>
          <p className={styles.sectionDescription}>
            Some festivals are meaningful reference points for new wave, post-punk, and retro alternative listeners, but they are not active RetroAltFest atlas links on this page. That distinction protects visitors from dead ends and keeps the atlas tied to source-supported records.
          </p>
          <p className={styles.sectionDescription}>
            When a name is discussed as context, the guide should make that clear. When a name receives a public RetroAltFest festival page, it should be because the record belongs in the active atlas and has passed the site’s source-aware review.
          </p>
        </section>

        <section className={styles.statusSection} data-status-ledger>
          <p className={styles.sectionEyebrow}>Guide labels</p>
          <h2 className={styles.sectionTitle}>
            How RetroAltFest labels this guide
          </h2>
          <p className={styles.sectionDescription}>
            RetroAltFest keeps source caveats visible so readers can tell active atlas records from adjacent discovery and reference context.
          </p>
          <div className={styles.statusGrid}>
            {statusLabels.map((status) => (
              <div key={status.label} className={styles.statusDefinition}>
                <h3>{status.label}</h3>
                <p>{status.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection} data-faq-registry>
          <p className={styles.sourceEyebrow}>Short FAQ</p>
          <h2 className={styles.sectionTitle}>
            Quick answers for careful festival discovery.
          </h2>
          <div className={styles.faqGrid}>
            <FaqItem question="Are these all active RetroAltFest festival pages?" answer="No. The guide includes active atlas links and reference points. Only source-supported active atlas records receive RetroAltFest festival detail links." />
            <FaqItem question="Why are some familiar festivals mentioned but not linked?" answer="A festival can be useful context without being an active atlas record here. RetroAltFest avoids fake detail pages for reference-only names." />
            <FaqItem question="What counts as new wave or post-punk for this guide?" answer="The guide focuses on festival discovery where new wave, post-punk, synth-era, retro alternative, darkwave-adjacent, or indie nostalgia sounds meaningfully overlap." />
            <FaqItem question="Is this a full list of every related festival?" answer="No. It is a curated, source-aware starting point that favors trust and usefulness over scale." />
            <FaqItem question="How is this different from the goth and darkwave guide?" answer="This page leans more toward new wave, post-punk, retro alternative, synth-era, and indie nostalgia. The goth and darkwave guide stays closer to darker scene-specific discovery." />
            <FaqItem question="How does RetroAltFest verify festival information?" answer="RetroAltFest uses a source-aware process and explains the method on the verification page." href="/verification" linkLabel="Read verification notes" />
          </div>
        </section>

        <section className={styles.relatedPaths} data-related-paths>
          <p className={styles.sourceEyebrow}>Related RetroAltFest paths</p>
          <h2 className={styles.sectionTitle}>
            Keep the overlap useful without blurring the guides.
          </h2>
          <p className={styles.sectionDescription}>
            For darker scene-specific discovery, use the North American Goth & Darkwave Festivals guide. For heavier dark electronic, industrial, and EBM-focused discovery, use the Industrial, EBM & Dark Electronic Festivals in North America guide. For regional West Coast and Pacific Northwest exploration, use the regional dark alternative guide.
          </p>
          <div className={styles.relatedLinkGrid}>
            <Link href={gothDarkwaveGuidePath}>
              Read the Goth &amp; Darkwave guide
            </Link>
            <Link href={industrialEbmGuidePath}>
              Read the Industrial / EBM guide
            </Link>
            <Link href={westCoastGuidePath}>
              Read the West Coast / PNW guide
            </Link>
            <Link href="/festivals">
              Browse the festival atlas
            </Link>
          </div>
        </section>

        <div className={styles.discoveryShell} data-discovery-shell>
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
        </div>
      </article>

      <Footer />
    </main>
  );
}

type RecordVariant = "core" | "adjacent" | "reference";

function GuideSection({
  eyebrow,
  title,
  description,
  records,
  startIndex,
  variant,
  emphasized = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  records: GuideRecord[];
  startIndex: number;
  variant: RecordVariant;
  emphasized?: boolean;
}) {
  return (
    <section className={`${styles.guideSection} ${styles[variant]}`} data-guide-variant={variant}>
      <div className={styles.sectionIntro}>
        <p className={styles.sectionEyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{description}</p>
      </div>

      <div className={`${styles.recordGrid} ${emphasized ? styles.recordGridEmphasized : ""}`}>
        {records.map((record, index) => (
          <FestivalGuideCard
            key={record.slug}
            record={record}
            index={startIndex + index}
            variant={variant}
            emphasized={emphasized}
          />
        ))}
      </div>
    </section>
  );
}

function FestivalGuideCard({
  record,
  index,
  variant,
  emphasized,
}: {
  record: GuideRecord;
  index: number;
  variant: RecordVariant;
  emphasized: boolean;
}) {
  return (
    <article
      className={`${styles.festivalRecord} ${styles[variant]} ${emphasized ? styles.festivalRecordEmphasized : ""}`}
      data-festival-record={record.festivalName}
      data-record-variant={variant}
    >
      <span className={styles.recordIndex} aria-hidden="true" data-index={String(index).padStart(2, "0")} />
      <div className={styles.recordHeader}>
        <div className={styles.recordIdentity}>
          <p className={styles.recordLocation}>
            {record.city} · {record.region} · {record.country}
          </p>
          <h3>{record.festivalName}</h3>
        </div>
        <span className={styles.recordStatus}>
          {record.statusLabel}
        </span>
      </div>

      <p className={styles.sceneFit}>Scene fit: {record.sceneFit}</p>
      <p className={styles.recordCopy}>{record.summary}</p>
      <p className={styles.recordCopy}>{record.visitorFit}</p>
      <p className={styles.curatorNote}>
        <span className={styles.noteLabel}>Curator note: </span>{record.curatorNote}
      </p>

      <dl className={styles.recordFacts}>
        <AtlasFact label="Source-aware note" value={record.sourceNote} />
        <AtlasFact label="Still check officially" value={record.checkingText} />
      </dl>

      <p className={styles.guideAngle}>
        <span className={styles.noteLabel}>Guide angle: </span>{record.guideAngle}
      </p>

      <div className={styles.tagList}>
        {record.genreTags.map((tag) => (
          <span key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.recordLinks}>
        {record.atlasPath ? (
          <Link className={styles.atlasLink} href={record.atlasPath}>
            View atlas record
          </Link>
        ) : null}
        <a className={styles.officialLink} href={record.officialUrl} target="_blank" rel="noreferrer">
          Official source: {record.officialUrl.replace(/^https?:\/\//, "")}
        </a>
        <p className={styles.sourceCount}>Sources checked: {record.sourceUrls.length} official or organizer-controlled page.</p>
      </div>
    </article>
  );
}

function InfoPanel({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className={styles.infoPanel}>
      <p className={styles.sectionEyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.infoCopy}>{children}</div>
    </section>
  );
}

function StartCard({ title, description, href, linkLabel }: { title: string; description: string; href: string; linkLabel: string }) {
  return (
    <article className={styles.dispatchCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>
        {linkLabel}
      </Link>
    </article>
  );
}

function VibeNote({ title, description }: { title: string; description: string }) {
  return (
    <article className={styles.vibeCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function FaqItem({ question, answer, href, linkLabel }: { question: string; answer: string; href?: string; linkLabel?: string }) {
  return (
    <article className={styles.faqItem}>
      <h3>{question}</h3>
      <p>{answer}</p>
      {href && linkLabel ? (
        <Link href={href}>
          {linkLabel}
        </Link>
      ) : null}
    </article>
  );
}

function AtlasFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.atlasFact}>
      <p className={styles.factLabel}>{label}</p>
      <p className={styles.factValue}>{value}</p>
    </div>
  );
}
