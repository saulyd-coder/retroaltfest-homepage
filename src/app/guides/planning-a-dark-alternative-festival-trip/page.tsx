import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

const pagePath = "/guides/planning-a-dark-alternative-festival-trip";

export const metadata: Metadata = buildMetadata({
  title: "Planning a Dark Alternative Festival Trip",
  description:
    "Plan a dark alternative festival trip after choosing an event: confirm the edition, interpret its footprint, choose a search area, plan late returns, and preserve flexibility.",
  path: pagePath,
  type: "article",
  keywords: [
    "dark alternative festival trip planning",
    "festival trip feasibility",
    "multi-venue festival travel planning",
    "late-night festival return planning",
    "festival accommodation search area",
  ],
});

const planningRecord = [
  {
    label: "Edition identity",
    question: "Which current edition are you planning around?",
    output: "Name, year, dates, and current status from an organizer-controlled source.",
  },
  {
    label: "Event anchor",
    question: "Where does the program actually operate?",
    output: "Confirmed venue, site, or venue network—plus anything still unresolved.",
  },
  {
    label: "Operating span",
    question: "When does your intended experience begin and end?",
    output: "The first obligation and final programmed location that matter to you each day.",
  },
  {
    label: "Separate components",
    question: "Are warm-ups or side events part of your trip?",
    output: "Separate dates, locations, access conditions, and a clear include-or-skip decision.",
  },
];

const footprintModes = [
  {
    signal: "One primary anchor",
    title: "Single-site",
    copy: "One confirmed site can simplify the trip brief, but it does not prove short transitions or a quick exit. Use the published entrance and the final area you plan to leave—not the geographic middle—as the practical anchor for arrival and return decisions.",
    decision: "Test the route to the real entrance and from the likely final exit.",
  },
  {
    signal: "Movement joins the timetable",
    title: "Multi-venue",
    copy: "A multi-venue program has no automatic center. Match the venues to the parts you actually intend to attend, identify the final event location each night, and leave uncertainty visible when the organizer has not yet published a complete current venue sequence.",
    decision: "Treat every meaningful transition as part of the schedule.",
  },
  {
    signal: "Repeated return pressure",
    title: "Multi-day or late-running",
    copy: "A repeated late-night return can matter more than a short inbound trip on opening day. Service patterns, accommodation access hours, and the final activity can differ by night, so one successful route check should not be copied across the whole weekend without review.",
    decision: "Confirm each night against its own final stop and operating hours.",
  },
  {
    signal: "Separate planning object",
    title: "Warm-up or side event",
    copy: "A connected name does not establish the same date, venue, or access. Keep a warm-up or side event outside the main trip span until the organizer confirms its relationship to the festival and you decide that it belongs in your plan.",
    decision: "Do not extend the trip around an unconfirmed component.",
  },
];

const arrivalDepartureSteps = [
  {
    marker: "A",
    title: "Name the first obligation",
    copy: "Use the first part you genuinely plan to attend—not simply the first published time. Registration, wristband collection, or another access step may be earlier or elsewhere, but include it only when current organizer information makes it relevant to you.",
  },
  {
    marker: "B",
    title: "Build the arrival window",
    copy: "Compare the consequences of delay with the uncertainty in your inbound journey. Earlier arrival can create room for disruption; it is an option to evaluate, not a universal rule or a promise that every problem disappears.",
  },
  {
    marker: "C",
    title: "Name the final commitment",
    copy: "Work backward from the final activity you intend to attend, its actual location, the time needed to leave the event environment, and any next-day obligation. Do not let a headline closing time stand in for your own final stop.",
  },
  {
    marker: "D",
    title: "Build the departure window",
    copy: "Compare final-night and next-day departure without assuming that storage, late checkout, or an easy transfer exists. If the plan depends on one of those conditions, keep it unresolved until the actual reservation or responsible source confirms it.",
  },
];

const searchAreaMethod = [
  {
    number: "01",
    title: "Confirm the current footprint",
    copy: "Begin with the current venue or venue network. A stored festival location can orient you, but it should not silently become a live logistics fact.",
  },
  {
    number: "02",
    title: "Mark the last stop by night",
    copy: "The most prominent venue may not be the place you leave. Use the final programmed location in your plan as a return anchor for that night.",
  },
  {
    number: "03",
    title: "Test operating times",
    copy: "Compare expected event exit with current information from the responsible public transport operator. Leave time for exit without presenting a guaranteed duration.",
  },
  {
    number: "04",
    title: "Compare the real journey",
    copy: "Straight-line distance hides entrances, station access, transfers, barriers, and operating hours. Compare the journey that matters without treating this guide as a route recommendation.",
  },
  {
    number: "05",
    title: "Read the applicable terms",
    copy: "Late access, cancellation, changes, and storage are not confirmed until the actual reservation terms say so. Do not generalize one reservation to another.",
  },
  {
    number: "06",
    title: "Recheck while options remain",
    copy: "Refresh venue, schedule, organizer, and transport facts before a change deadline and before departure. A useful area should remain workable when a change-sensitive detail moves.",
  },
];

const returnSequence = [
  "Identify the final event location you expect to leave on each relevant night.",
  "Use the current event schedule, then allow for the fact that leaving the event takes time.",
  "Check final departures, night service, and disruption notices through the responsible transport authority or operator.",
  "Check organizer or venue instructions for road restrictions and designated pickup areas when those details are officially published.",
  "Treat on-demand transport supply, timing, and cost as uncertain rather than as a guaranteed fallback.",
  "Confirm accommodation access hours through the terms or published channel connected to the actual reservation.",
  "Repeat the check after any schedule, venue, or service change and again close to travel.",
];

const flexibilityControls = [
  {
    label: "Change-sensitive fact",
    title: "Keep uncertainty attached to the decision",
    copy: "If a venue, schedule, warm-up, or side event is not settled, record what remains open and the date by which the answer would change your plan. Do not upgrade silence into confidence.",
  },
  {
    label: "Reservation terms",
    title: "Compare flexibility, not just the headline choice",
    copy: "Consider whether a reservation can be cancelled or changed while important festival facts remain unsettled. Flexible terms may not exist and may not be the least expensive; the applicable terms control the real decision.",
  },
  {
    label: "Decision point",
    title: "Know when flexibility stops helping",
    copy: "Record cancellation or change deadlines alongside the unresolved fact. A flexible choice is useful only when you know when to recheck and what evidence would make you proceed or pause.",
  },
  {
    label: "Fallback category",
    title: "Preserve options without pretending they are guaranteed",
    copy: "A fallback can be a later departure window, a different search-area criterion, or a decision to skip a separate component. It should not depend on unconfirmed service, availability, or a promised financial outcome.",
  },
];

const confirmationSteps = [
  "Confirm the exact edition, dates, current status, venue or venue network, and any separate warm-up or side-event dates.",
  "Confirm that your festival access is usable; use the ticket-verification guide rather than repeating seller or resale checks here.",
  "Confirm the accommodation reservation, address used in the plan, access hours, and cancellation or change deadline.",
  "Confirm the inbound journey against the first event obligation that matters to you.",
  "Confirm the final event location and late-night return process for every night in your plan.",
  "Refresh the official schedule, venue notices, organizer updates, and relevant accessibility information.",
  "Refresh official transport disruption information and an official forecast close to departure.",
  "Check the appropriate official government source for documents connected to your traveler profile and journey.",
  "Keep essential addresses, confirmation details, and published contact routes usable if connectivity is limited.",
  "Resolve conflicts or preserve flexibility; never convert a missing answer into a confirmed fact.",
];

const outcomes = [
  {
    state: "Proceed",
    signal: "Material facts confirmed",
    copy: "The current edition and footprint are clear, the arrival and departure plan works, each late return has been checked, and no important dependency is being hidden.",
  },
  {
    state: "Proceed flexibly",
    signal: "Workable with a decision point",
    copy: "The trip appears feasible, but a change-sensitive item remains. You have kept a clear recheck date and enough flexibility to change course if the controlling information shifts.",
  },
  {
    state: "Pause",
    signal: "Material fact unresolved",
    copy: "An edition, venue, access, return, document, or reservation condition remains unclear or conflicts with another controlling source. Stop the affected commitment rather than guessing.",
  },
];

export default function DarkAlternativeFestivalTripPlanningPage() {
  return (
    <main
      className={styles.page}
      data-guide-family="night-transmission"
      data-article-contract="dark-alternative-trip-feasibility-guide"
    >
      <span className={styles.paperEdge} aria-hidden="true" />
      <span className={styles.towerBeacon} aria-hidden="true" />

      <Header />

      <article className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">RetroAltFest</Link>
          <span className={styles.crumbDivider} aria-hidden="true">/</span>
          <Link href="/guides">Guides</Link>
          <span className={styles.crumbDivider} aria-hidden="true">/</span>
          <span aria-current="page">Trip planning</span>
        </nav>

        <header className={styles.masthead}>
          <div className={styles.mastheadGrid} aria-hidden="true" />
          <div className={styles.transmissionLabel}>
            <span>Trip-feasibility transmission</span>
            <span>Post-selection sequence / 01–08</span>
          </div>
          <p className={styles.kicker}>The festival is chosen. Now test the journey.</p>
          <h1>Planning a Dark Alternative Festival Trip</h1>
          <p className={styles.dek}>
            You have already selected a festival. This guide helps you test whether the journey around that current edition can work before travel choices become difficult to change—without naming places to stay, choosing transport for you, or pretending incomplete details are settled.
          </p>
          <dl className={styles.signalStrip}>
            <GuideFact label="Starting point" value="One selected festival edition" />
            <GuideFact label="Core decision" value="Is this trip feasible?" />
            <GuideFact label="Finish line" value="Proceed · proceed flexibly · pause" />
          </dl>
        </header>

        <aside className={styles.boundaryPanel} aria-label="Trip-planning guide boundary">
          <p className={styles.panelLabel}>Boundary / offsite feasibility only</p>
          <p>
            This page turns festival operating facts into trip decisions. It does not authenticate a ticket, recommend a provider or destination, prescribe a route, quote prices, or replace the organizer, venue, transport authority, reservation terms, or official government source that controls a changing fact.
          </p>
        </aside>

        <section className={styles.section} id="current-edition-record" data-qa-section="current-edition-record">
          <SectionHeading
            index="01"
            eyebrow="Establish the planning object"
            title="Build a current-edition record before building the trip."
            copy="The useful starting point is not the festival name by itself. It is the exact edition, operating footprint, and time span that your journey must support."
          />
          <div className={styles.proseGrid}>
            <div className={styles.prose}>
              <p>
                Begin with an organizer-controlled source and write down the current edition, dates, venue or venue network, and current status. Separate <strong>confirmed facts</strong> from <strong>unresolved facts</strong>. If the organizer has announced dates but not a complete venue list or schedule, keep those fields open. A blank field is more useful than a confident assumption built from a past edition.
              </p>
              <p>
                This is a narrow edition check, not a repeat of the purchase process. If you still need to establish whether a seller or resale path connects to the organizer, use the <Link href="/guides/how-to-verify-festival-tickets-official-sources">festival ticket and official-source verification guide</Link>. Return here when the edition and your access path are clear enough to test the trip around them.
              </p>
              <p>
                Define the experience you intend to have. A festival may contain several days, venues, warm-ups, or separately accessed side events, while your plan uses only part of that program. Record the first obligation and final programmed location that matter to you on each day. That personal scope keeps the logistics test tied to your actual trip rather than to every possible event component.
              </p>
            </div>
            <FieldNote label="Trip brief rule" title="Facts, choices, and open questions are different things.">
              The organizer can confirm how an edition operates. You decide which parts you intend to attend. An unresolved venue, schedule, or access detail stays marked for a later source refresh; it should not silently become a booking assumption.
            </FieldNote>
          </div>
          <div className={styles.recordGrid} role="list" aria-label="Current-edition planning record">
            {planningRecord.map((item) => (
              <article className={styles.recordCard} key={item.label} role="listitem">
                <p className={styles.cardLabel}>{item.label}</p>
                <h3>{item.question}</h3>
                <p>{item.output}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={styles.section}
          id="event-footprint"
          data-qa-section="event-footprint"
          data-event-footprint-framework
        >
          <SectionHeading
            index="02"
            eyebrow="Read the event as a logistics system"
            title="Let the footprint shape the plan."
            copy="Single-site and multi-venue festivals can share a scene while producing completely different movement, search-area, and return decisions."
          />
          <p className={styles.sectionLead}>
            Classify only what current official information supports. A venue field in a directory does not prove that every part of an edition takes place there. Use the organizer’s current venue list and program when available, and keep the classification provisional when important pieces are missing.
          </p>
          <div className={styles.footprintGrid} role="list" aria-label="Event footprint planning modes">
            {footprintModes.map((mode, index) => (
              <article className={styles.footprintCard} key={mode.title} role="listitem">
                <span className={styles.cardIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.cardLabel}>{mode.signal}</p>
                <h3>{mode.title}</h3>
                <p>{mode.copy}</p>
                <strong>{mode.decision}</strong>
              </article>
            ))}
          </div>
          <aside className={styles.signalNote}>
            <p className={styles.panelLabel}>Footprint check</p>
            <p>
              Concentrated does not mean small. Distributed does not mean impossible. The decision comes from the venue sequence you intend to use, the opening and closing pattern, the final stop each night, and the official services operating when you need them.
            </p>
          </aside>
        </section>

        <section className={styles.section} id="arrival-departure" data-qa-section="arrival-departure">
          <SectionHeading
            index="03"
            eyebrow="Choose the travel envelope"
            title="Build arrival and departure around consequences—not optimism."
            copy="A useful buffer reflects what happens if the journey runs late and what the final night asks of you. It is not one universal number."
          />
          <div className={styles.sequence} role="list" aria-label="Arrival and departure planning sequence">
            {arrivalDepartureSteps.map((step) => (
              <SequenceStep key={step.marker} marker={step.marker} title={step.title}>
                {step.copy}
              </SequenceStep>
            ))}
          </div>
          <div className={styles.windowGrid}>
            <div>
              <p className={styles.cardLabel}>Arrival margin</p>
              <h3>What would you lose if the inbound journey slipped?</h3>
              <p>
                Compare same-day and earlier arrival against the first activity that matters, any published collection or registration step, and the reliability you can reasonably establish for the journey. More time can reduce one kind of pressure while adding another commitment; choose deliberately.
              </p>
            </div>
            <div>
              <p className={styles.cardLabel}>Departure margin</p>
              <h3>What must remain possible after the final night?</h3>
              <p>
                Compare a late departure with a next-day option against final programming, event exit, the condition of your return plan, accommodation access, checkout, and any unconfirmed baggage arrangement. No one answer fits every schedule or traveler.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.section}
          id="accommodation-search-area"
          data-qa-section="accommodation-search-area"
          data-accommodation-search-method
        >
          <SectionHeading
            index="04"
            eyebrow="Define criteria before looking at listings"
            title="Choose an accommodation search area—not a recommended property."
            copy="The goal is to identify one or more areas that fit the event footprint and your real return needs. RetroAltFest does not name a best area."
          />
          <div className={styles.proseGrid}>
            <div className={styles.prose}>
              <p>
                Start with the current event anchor, then test it against the final event location each night. A place that appears close to an opening venue may be poorly aligned with the last stop in a multi-venue program. A place near a station may reduce one transfer while adding another. These are tradeoffs to compare, not universal rankings.
              </p>
              <p>
                Avoid using “central,” “near,” “convenient,” or “transit-connected” as conclusions without naming the criterion and time. Central to a main station is not necessarily central to the venue network. Near in straight-line distance does not establish a workable entrance-to-door journey. A daytime connection does not establish a late-night return.
              </p>
              <p>
                Your output can include more than one search area while details are still changing. Define each by explicit conditions: which venue or final stop it serves, how many transfers the current plan involves, whether access works after the expected return, and which unresolved fact could change the choice. This keeps the method useful without turning it into destination advice.
              </p>
            </div>
            <FieldNote label="Area definition" title="Use criteria a changing edition cannot easily hide.">
              Compare the event anchor, final nightly stops, station access, transfer complexity, accommodation access hours, and flexibility. Do not infer suitability from a neighborhood label or a short-looking line between two points.
            </FieldNote>
          </div>
          <ol className={styles.methodList}>
            {searchAreaMethod.map((step) => (
              <li key={step.number}>
                <span className={styles.methodIndex} aria-hidden="true">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="late-night-return" data-qa-section="late-night-return">
          <SectionHeading
            index="05"
            eyebrow="Test the final leg first"
            title="Treat the late-night return as a booking criterion."
            copy="A trip can look easy until the last programmed location, event exit, final service, and accommodation access are placed on the same timeline."
          />
          <div className={styles.proseGrid}>
            <div className={styles.prose}>
              <p>
                Begin at the place you expect to leave, not at the festival’s headline address. For a multi-venue edition, that point may change every night. Compare the current schedule with final departures and service notices from the responsible public transport operator. Include time to leave the event environment, but do not turn an estimate into a guaranteed duration.
              </p>
              <p>
                Read organizer or venue instructions when they publish road restrictions, entrance changes, or designated pickup areas. Treat on-demand transport as uncertain: supply, waiting time, pickup location, and cost can change. A useful fallback is a category of action you understand, not a promise that a particular service will appear.
              </p>
              <p>
                Check the other end of the journey as well. Confirm accommodation access hours and late-arrival conditions through the actual reservation terms. A workable ride to a locked entrance is not a complete return plan. Repeat this process after schedule or venue changes and close enough to travel for operator information to be current.
              </p>
            </div>
            <FieldNote label="Return test" title="The final listed departure is not automatically your final usable one.">
              The useful comparison includes event exit, the journey to the stop or station, service conditions, transfer requirements, and access at the destination. If one link remains unconfirmed, keep the return provisional.
            </FieldNote>
          </div>
          <ol className={styles.returnSequence}>
            {returnSequence.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="preserve-flexibility" data-qa-section="preserve-flexibility">
          <SectionHeading
            index="06"
            eyebrow="Keep change from becoming a trap"
            title="Preserve flexibility while important facts can still move."
            copy="Flexibility is not a slogan and it does not promise a refund. It is a way to keep an unresolved event fact from forcing an irreversible travel decision too early."
          />
          <div className={styles.flexibilityGrid}>
            {flexibilityControls.map((control) => (
              <article key={control.title}>
                <p className={styles.cardLabel}>{control.label}</p>
                <h3>{control.title}</h3>
                <p>{control.copy}</p>
              </article>
            ))}
          </div>
          <aside className={styles.cautionPanel}>
            <p className={styles.panelLabel}>Terms control the outcome</p>
            <p>
              Consider refundable, cancellable, or changeable conditions where they are available and relevant, but read the terms attached to the exact choice. Conditions differ, deadlines matter, and no general guide can promise availability, a change, or a financial result.
            </p>
          </aside>
        </section>

        <section className={styles.documentSection} id="official-document-sources" data-qa-section="official-document-sources">
          <p className={styles.documentLabel}>Official-document caution</p>
          <h2>Use the government source that applies to your journey.</h2>
          <p>
            Travel-document and border requirements can depend on nationality, residence, destination, transit route, and travel date. Check the appropriate current official government source for your circumstances and recheck before departure. This reminder is not visa or legal advice, does not determine eligibility, and cannot promise entry.
          </p>
        </section>

        <section
          className={`${styles.section} ${styles.confirmationSection}`}
          id="trip-confirmation"
          data-qa-section="trip-confirmation"
          data-static-trip-confirmation
        >
          <SectionHeading
            index="07"
            eyebrow="Resolve the trip—not every possible question"
            title="Build the trip-confirmation record."
            copy="The finish line is a documented decision based on the parts of the current edition you intend to use. Run one final confirmation before departure."
          />
          <ol className={styles.confirmationList}>
            {confirmationSteps.map((step, index) => (
              <li key={step}>
                <span className={styles.confirmationIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <div className={styles.finalRefresh}>
            <p className={styles.panelLabel}>Final source refresh</p>
            <p>
              Use organizer-controlled information for edition, venues, schedules, warm-ups, side events, and operational updates. Use official venue information for venue-specific access, the responsible operator for current transport, an official meteorological source for conditions, an official government source for documents, and the actual reservation terms for that booking. If sources conflict, resolve the conflict or keep the affected decision flexible.
            </p>
          </div>
          <div className={styles.outcomeGrid} role="list" aria-label="Trip-feasibility outcomes">
            {outcomes.map((outcome, index) => (
              <article className={styles.outcomeCard} key={outcome.state} role="listitem" data-outcome={outcome.state.toLowerCase().replaceAll(" ", "-")}>
                <span className={styles.outcomeSignal} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p className={styles.cardLabel}>{outcome.signal}</p>
                <h3>{outcome.state}</h3>
                <p>{outcome.copy}</p>
              </article>
            ))}
          </div>
          <aside className={styles.handoffPanel}>
            <p className={styles.panelLabel}>Next handoff / event readiness</p>
            <p>
              Once the trip itself is workable, use the <Link href="/guides/first-time-dark-alternative-festival-guide">First-Time Dark Alternative Festival Guide</Link> for conditions, sound, stamina, venue rules, onsite movement, and event-day preparation. That is a different decision from confirming the journey around the edition.
            </p>
          </aside>
        </section>

        <section className={styles.continueSection} id="continue-exploring" data-qa-section="continue-exploring">
          <div className={styles.continueHeader}>
            <p className={styles.sectionEyebrow}>08 / Continue exploring</p>
            <h2 className={styles.sectionTitle}>Keep discovery, trip feasibility, and source clarity connected.</h2>
          </div>
          <div className={styles.continueGrid}>
            <Link href="/festivals">
              <span>Active atlas</span>
              <strong>Return to source-aware festival records</strong>
            </Link>
            <Link href="/verification">
              <span>Editorial standards</span>
              <strong>See how RetroAltFest reviews sources</strong>
            </Link>
            <Link href="/guides">
              <span>Guide collection</span>
              <strong>Choose another practical or discovery path</strong>
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy: string }) {
  return (
    <header className={styles.sectionHeader}>
      <span className={styles.sectionIndex} aria-hidden="true">{index}</span>
      <div>
        <p className={styles.sectionEyebrow}>{eyebrow}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionDescription}>{copy}</p>
      </div>
    </header>
  );
}

function GuideFact({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.fact}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function FieldNote({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <aside className={styles.fieldNote}>
      <p className={styles.fieldLabel}>{label}</p>
      <h3>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

function SequenceStep({ marker, title, children }: { marker: string; title: string; children: React.ReactNode }) {
  return (
    <article className={styles.sequenceStep} role="listitem">
      <span className={styles.sequenceIndex} aria-hidden="true">{marker}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
