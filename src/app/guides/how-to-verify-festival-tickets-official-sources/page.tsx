import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

const pagePath = "/guides/how-to-verify-festival-tickets-official-sources";

export const metadata: Metadata = buildMetadata({
  title: "How to Verify Festival Tickets and Official Sources",
  description:
    "A practical guide to checking festival dates, organizer websites, authorized ticket sellers, resale listings, and official sources before buying.",
  path: pagePath,
  type: "article",
  keywords: [
    "verify festival tickets",
    "official festival ticket source",
    "authorized festival ticket seller",
    "festival resale ticket checks",
    "festival ticket warning signs",
  ],
});

const hierarchy = [
  {
    level: "01",
    title: "Organizer-controlled source",
    copy: "Start with the festival website or another channel the organizer clearly controls. This is the best place to establish the current edition, location, dates, and official route to tickets.",
  },
  {
    level: "02",
    title: "Organizer-linked ticket path",
    copy: "Follow the ticket link from the organizer-controlled source. The destination may belong to another company, but the organizer’s link is the evidence that connects that seller to this event edition.",
  },
  {
    level: "03",
    title: "Venue and published support channels",
    copy: "A venue calendar or an authorized seller’s help channel can resolve a mismatch, especially when it confirms the same event name, year, date, and place.",
  },
  {
    level: "04",
    title: "Discovery leads",
    copy: "Search results, ads, reposts, screenshots, listings, and messages can point you toward an event. They should not control the decision when they conflict with the sources above.",
  },
];

const warningSignals = [
  {
    title: "Pressure replaces evidence",
    copy: "The seller insists that you pay immediately but will not give you enough time to compare the event details with official sources.",
  },
  {
    title: "The account cannot be traced",
    copy: "A newly created or look-alike social account claims to represent the organizer, but the festival website does not link back to it.",
  },
  {
    title: "Payment leaves the published path",
    copy: "You are asked to move the conversation or payment away from the channel where the listing began, reducing the record of what was promised.",
  },
  {
    title: "The price lacks believable context",
    copy: "A dramatic bargain or markup is presented without independently checkable details about the correct event, ticket type, or transfer terms.",
  },
  {
    title: "The details do not line up",
    copy: "The year, venue, city, date, ticket type, or event name differs from the current organizer and venue information.",
  },
  {
    title: "Proof is only a picture",
    copy: "A screenshot, barcode image, confirmation image, or copied email is offered as the only evidence. Images can be reused, altered, cancelled, or separated from transfer rules.",
  },
];

const checklist = [
  "Find an organizer-controlled website and confirm that it describes the current edition.",
  "Match the festival name, year, dates, city, and venue across the organizer and event page.",
  "Follow the official ticket path from the organizer’s source instead of starting with an ad or an isolated listing.",
  "Inspect the destination domain and confirm that the event details still match after every redirect.",
  "Read the refund, entry, name-change, and transfer terms that apply to this ticket type.",
  "For resale, confirm whether an organizer-linked transfer or resale process exists before considering an informal route.",
  "Use a payment method that leaves a traceable record, and do not move payment outside the published process.",
  "Save the receipt and confirmation, including the seller identity, event details, terms, and support channel.",
];

export default function TicketVerificationGuidePage() {
  return (
    <main
      className={styles.page}
      data-guide-family="night-transmission"
      data-article-contract="ticket-verification-reader-guide"
    >
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">RetroAltFest</Link>
          <span className={styles.crumbDivider} aria-hidden="true">/</span>
          <Link href="/guides">Guides</Link>
        </nav>

        <section className={styles.masthead} data-qa-section="hero">
          <span className={styles.mastheadTelemetry} aria-hidden="true" data-label="NT / SOURCE CHECK 05C.1" />
          <div className={styles.mastheadInner}>
            <p className={styles.mastheadLabel}>Reader field guide</p>
            <h1 className={styles.mastheadTitle}>
              How to Verify Festival Tickets and Official Sources
            </h1>
            <p className={styles.mastheadLead}>
              Before paying, trace the event from the organizer to the current edition and then to the authorized ticket path. A polished listing, familiar logo, or prominent search result is not the same as a source trail.
            </p>
            <p className={styles.mastheadCopy}>
              No checklist can guarantee that a ticket is valid. These checks can help reduce risk, reveal mismatched information, and give you a clear reason to pause before money changes hands.
            </p>
            <p className={styles.mastheadCopy}>
              This page teaches the reader’s pre-purchase checks. RetroAltFest’s editorial verification process is explained separately on the <Link href="/verification">Verification page</Link>.
            </p>
            <div className={styles.mastheadActions}>
              <a className={styles.primaryPath} href="#start-with-organizer">
                Begin the source check
              </a>
              <Link className={styles.secondaryPath} href="/verification">
                Read our editorial standards
              </Link>
            </div>
            <dl className={styles.factGrid}>
              <GuideFact label="Begin with" value="The organizer-controlled source" />
              <GuideFact label="Match" value="Edition · date · venue · seller" />
              <GuideFact label="If sources conflict" value="Pause rather than guess" />
            </dl>
          </div>
        </section>

        <nav className={styles.sectionNav} aria-label="Ticket verification guide sections">
          <p className={styles.sectionNavLabel}>Verification sequence</p>
          <div className={styles.sectionNavLinks}>
            <a href="#start-with-organizer">Organizer</a>
            <a href="#follow-ticket-path">Ticket path</a>
            <a href="#check-edition">Edition</a>
            <a href="#resale-risk">Resale</a>
            <a href="#warning-signals">Warning signals</a>
            <a href="#source-conflict">Conflicts</a>
            <a href="#pre-purchase-checklist">Checklist</a>
          </div>
        </nav>

        <section className={styles.guideSection} id="start-with-organizer" data-qa-section="organizer">
          <SectionHeading
            eyebrow="01 / Establish identity"
            title="Start with the organizer, not the ticket listing."
            copy="Your first task is to establish who controls the festival information today. Work outward from that source instead of trying to work backward from a seller, social post, search ad, or forwarded link."
          />
          <div className={styles.guidanceGrid}>
            <div className={styles.guidancePanel}>
              <h3>Locate the current festival website</h3>
              <p>
                Search for the festival, but inspect the destination before trusting it. Look for a site that consistently identifies the organizer or festival, uses a plausible domain, and presents the edition you intend to attend. An old site may still look official while describing a completed year.
              </p>
            </div>
            <div className={styles.guidancePanel}>
              <h3>Trace social accounts from the site</h3>
              <p>
                An account linked by the organizer’s website carries a stronger connection than an account found only through platform search. Compare names, posting history, linked domains, and edition details. A badge, follower count, or familiar artwork is not enough on its own.
              </p>
            </div>
            <div className={styles.guidancePanel}>
              <h3>Match the basic event facts</h3>
              <p>
                Confirm the current edition year, dates, city, venue, and event name. Small differences can be meaningful when festivals repeat annually, move venues, run warm-up events, or use similar branding across several listings.
              </p>
            </div>
            <div className={styles.guidancePanel}>
              <h3>Read status language carefully</h3>
              <p>
                “Returning,” “save the date,” and an archived lineup do not necessarily mean tickets are available for a future edition. Look for a current announcement and a current ticket route rather than filling in missing information yourself.
              </p>
            </div>
          </div>

          <div className={styles.hierarchy} data-source-hierarchy>
            <div className={styles.hierarchyHeader}>
              <p className={styles.sectionEyebrow}>Evidence hierarchy</p>
              <h3>Use the strongest connected source available.</h3>
            </div>
            <ol className={styles.hierarchyList}>
              {hierarchy.map((item) => (
                <li key={item.level}>
                  <span className={styles.hierarchyIndex} aria-hidden="true">{item.level}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.guideSection} id="follow-ticket-path" data-qa-section="ticket-path">
          <SectionHeading
            eyebrow="02 / Trace authorization"
            title="Follow the ticket path from the official festival source."
            copy="A seller can look professional without being connected to the edition you want. The useful evidence is the path from the organizer-controlled source to the seller and then to a matching event page."
          />
          <div className={styles.sequence} role="list" aria-label="Official ticket path sequence">
            <SequenceStep index="A" title="Begin on the festival site">
              Use the ticket link or ticket instructions published by the organizer for the current edition. Do not treat search-result position or an advertisement as proof of authorization.
            </SequenceStep>
            <SequenceStep index="B" title="Inspect the destination">
              Read the final domain carefully, especially after a redirect. Check that the destination identifies the same festival, year, venue, city, and dates. Similar names and copied artwork are not enough.
            </SequenceStep>
            <SequenceStep index="C" title="Read the terms before paying">
              Confirm the ticket type, entry conditions, refund language, name-change rules, delivery method, and support channel. Rules vary by organizer, seller, country, and ticket type.
            </SequenceStep>
          </div>
          <aside className={styles.calmNote}>
            <p className={styles.noteLabel}>A useful distinction</p>
            <p>
              “Official website” and “authorized ticket seller” may be different domains. That is normal when the organizer links directly to a ticketing service. The organizer’s current link is what connects the two.
            </p>
          </aside>
        </section>

        <section className={styles.guideSection} id="check-edition" data-qa-section="edition">
          <SectionHeading
            eyebrow="03 / Check time"
            title="Verify the edition, not just the festival name."
            copy="Annual branding makes stale information easy to mistake for current information. A correct festival name can still lead to the wrong year, venue, date, or ticket conditions."
          />
          <div className={styles.editionLedger}>
            <article>
              <p className={styles.ledgerLabel}>Page date</p>
              <h3>Look for the year in the content</h3>
              <p>Do not rely only on a copyright line or page title. Confirm that the main event information clearly names the current edition and its dates.</p>
            </article>
            <article>
              <p className={styles.ledgerLabel}>Archive clues</p>
              <h3>Notice completed-edition language</h3>
              <p>Past lineups, photo galleries, thank-you messages, and archived schedules can remain online. They provide history, not proof of a future event.</p>
            </article>
            <article>
              <p className={styles.ledgerLabel}>Link age</p>
              <h3>Re-enter through the current site</h3>
              <p>An old saved ticket link may still load. Return to the organizer’s current ticket page and confirm that it leads to the same destination.</p>
            </article>
            <article>
              <p className={styles.ledgerLabel}>Cross-check</p>
              <h3>Match venue and organizer details</h3>
              <p>If the venue calendar, organizer announcement, and seller page disagree, do not choose the version you prefer. Treat the mismatch as unresolved.</p>
            </article>
          </div>
        </section>

        <section className={styles.guideSection} id="resale-risk" data-qa-section="resale">
          <SectionHeading
            eyebrow="04 / Treat transfer as event-specific"
            title="Understand what resale can and cannot show you."
            copy="Resale is not one uniform system. Some events provide an organizer-linked resale or transfer process; others restrict names, transfers, barcodes, or entry conditions. Informal listings carry a different evidence trail."
          />
          <div className={styles.resaleColumns}>
            <div className={styles.resalePanel}>
              <p className={styles.panelSignal}>Stronger connection</p>
              <h3>Organizer-linked resale or transfer</h3>
              <p>
                Start by checking whether the current festival or authorized seller describes a resale, return, exchange, or transfer process. Follow that published process and read the conditions that apply to the exact ticket.
              </p>
            </div>
            <div className={styles.resalePanel}>
              <p className={styles.panelCaution}>More uncertainty</p>
              <h3>Informal resale communication</h3>
              <p>
                A message between individuals may not let you verify ownership, transfer eligibility, duplication, cancellation, or later use. Screenshots are not proof of a valid or transferable ticket.
              </p>
            </div>
          </div>
          <p className={styles.sectionDescription}>
            Transfer rules vary. A name on a ticket, a barcode image, a receipt image, or a convincing story does not establish that the ticket can be transferred or used by you. If the official terms are unclear, contact the organizer or authorized seller through a channel published on its own site.
          </p>
        </section>

        <section className={styles.guideSection} id="warning-signals" data-qa-section="warnings">
          <SectionHeading
            eyebrow="05 / Know when to pause"
            title="Warning signals matter most when they form a pattern."
            copy="One unusual detail may have an innocent explanation. Several mismatches, pressure tactics, and untraceable claims together are a stronger reason to stop and check again."
          />
          <div className={styles.warningGrid}>
            {warningSignals.map((signal, index) => (
              <article className={styles.warningPanel} key={signal.title}>
                <span className={styles.warningIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{signal.title}</h3>
                <p>{signal.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.guideSection} id="source-conflict" data-qa-section="conflict">
          <SectionHeading
            eyebrow="06 / Resolve disagreement"
            title="When sources disagree, pause rather than guess."
            copy="A conflict is not an invitation to average the answers. Go back to the controlling source, identify exactly what differs, and seek confirmation through a published channel."
          />
          <ol className={styles.conflictFlow}>
            <li><strong>Name the mismatch.</strong><span>Write down whether the conflict concerns the year, date, city, venue, seller, ticket type, transfer terms, or event status.</span></li>
            <li><strong>Return to the organizer-controlled source.</strong><span>Check the current event and ticket pages rather than an old bookmark, cached result, or repost.</span></li>
            <li><strong>Use connected confirmation.</strong><span>A venue listing or the authorized ticket partner may help when it matches the organizer and clearly describes the same edition.</span></li>
            <li><strong>Ask through published contact channels.</strong><span>Contact the organizer or authorized seller using details on its own site. Do not use contact information supplied only by the disputed seller.</span></li>
            <li><strong>Wait when the answer remains unclear.</strong><span>Missing out can feel frustrating, but uncertainty is not evidence. Do not turn an unresolved claim into a purchase decision.</span></li>
          </ol>
        </section>

        <section className={`${styles.guideSection} ${styles.checklistSection}`} id="pre-purchase-checklist" data-pre-purchase-checklist data-qa-section="checklist">
          <SectionHeading
            eyebrow="07 / Pre-purchase checklist"
            title="Run one calm check before paying."
            copy="This sequence is intentionally short enough to use while planning. It does not certify a ticket; it helps you preserve a connected record of what you checked."
          />
          <ol className={styles.checklist}>
            {checklist.map((item, index) => (
              <li key={item}>
                <span className={styles.checkNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.limitsSection} id="retroaltfest-limits" data-qa-section="limits">
          <p className={styles.sectionEyebrow}>08 / RetroAltFest limits</p>
          <h2 className={styles.sectionTitle}>What RetroAltFest can and cannot verify.</h2>
          <div className={styles.limitsGrid}>
            <div>
              <h3>What we can do</h3>
              <p>
                RetroAltFest can document festival information from sources we have reviewed, separate current records from reference context, and show our uncertainty when official sources do not confirm the next edition.
              </p>
            </div>
            <div>
              <h3>What we cannot do</h3>
              <p>
                RetroAltFest does not sell tickets, authenticate an individual ticket, guarantee entry, resolve a transaction, determine resale legality, or promise a refund. Ticket status and terms can change after our editorial check.
              </p>
            </div>
          </div>
          <Link className={styles.sourceLink} href="/verification">
            See RetroAltFest’s editorial verification standards
          </Link>
        </section>

        <section className={styles.continueSection} id="continue-exploring" data-qa-section="continue">
          <div className={styles.continueHeader}>
            <p className={styles.sectionEyebrow}>Continue exploring</p>
            <h2 className={styles.sectionTitle}>Keep discovery and verification connected.</h2>
          </div>
          <div className={styles.continueGrid}>
            <Link href="/verification">
              <span>Editorial standards</span>
              <strong>How RetroAltFest reviews festival sources</strong>
            </Link>
            <Link href="/festivals">
              <span>Active atlas</span>
              <strong>Browse source-aware festival records</strong>
            </Link>
            <Link href="/guides">
              <span>Discovery paths</span>
              <strong>Explore the current guide collection</strong>
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <header className={styles.sectionHeader}>
      <p className={styles.sectionEyebrow}>{eyebrow}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionDescription}>{copy}</p>
    </header>
  );
}

function GuideFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <dt className={styles.factLabel}>{label}</dt>
      <dd className={styles.factValue}>{value}</dd>
    </div>
  );
}

function SequenceStep({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <article className={styles.sequenceStep} role="listitem">
      <span className={styles.sequenceIndex} aria-hidden="true">{index}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
