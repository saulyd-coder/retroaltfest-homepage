import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { buildMetadata } from "@/lib/seo";
import styles from "./GuideArticle.module.css";

const pagePath = "/guides/first-time-dark-alternative-festival-guide";

export const metadata: Metadata = buildMetadata({
  title: "First-Time Dark Alternative Festival Guide",
  description:
    "Practical preparation for a first goth, darkwave, industrial, EBM, post-punk, new-wave, or adjacent dark-alternative festival.",
  path: pagePath,
  type: "article",
  keywords: [
    "first dark alternative festival",
    "goth festival preparation",
    "darkwave festival guide",
    "industrial festival first time",
    "festival readiness checklist",
  ],
});

const formatNotes = [
  {
    marker: "01",
    title: "Indoor and venue-based",
    signal: "Rooms, queues, sound, and temperature shifts",
    copy: "An indoor event may keep weather exposure short, but the experience can still involve long standing periods, warm rooms, loud amplified sound, stairs, cloakroom uncertainty, and repeated movement between stages. Check the venue layout and current entry rules rather than assuming a club night and a full festival use the same setup.",
  },
  {
    marker: "02",
    title: "Outdoor or open-air",
    signal: "Ground, weather, distance, and fewer controlled surfaces",
    copy: "Outdoor preparation begins with the ground and forecast, not a particular look. Sun, wind, rain, cold after dark, mud, dust, and long walks can change what feels comfortable. Use an official forecast and alert source near the event, then recheck close to departure because conditions can change.",
  },
  {
    marker: "03",
    title: "Mixed indoor and outdoor",
    signal: "Layering and transitions matter",
    copy: "A mixed site can move from a hot room to a cool outdoor area within minutes. A layer you can manage, footwear that works across surfaces, and a clear understanding of storage rules may matter more than packing extra items. Confirm whether the organizer lists lockers or a cloakroom; never assume either exists.",
  },
  {
    marker: "04",
    title: "Multi-venue or city-spanning",
    signal: "Movement becomes part of the schedule",
    copy: "When stages sit in separate venues, travel time can compete with performance time. Read the official schedule and map together. Note which transitions are realistic, what happens after the last set, and whether you need offline directions. A city-spanning format is not automatically walkable or continuously connected by transit.",
  },
];

const ruleChecks = [
  {
    title: "Bag and entry rules",
    copy: "Check size limits, prohibited items, search procedures, ticket display, age or ID requirements, and whether a bag slows a particular entrance. A bag accepted at one event may not be accepted at another.",
  },
  {
    title: "Re-entry and movement",
    copy: "Confirm whether leaving ends your admission for the day, whether multi-venue access uses a wristband or another process, and whether each room has its own capacity rules. Do not plan around re-entry unless the current event information confirms it.",
  },
  {
    title: "Cameras and photography",
    copy: "Read the organizer and venue camera policy. Even where a device is allowed, consent still matters when photographing or recording other attendees. A dramatic environment is not permission to treat people as scenery.",
  },
  {
    title: "Payment and storage",
    copy: "Check the event’s stated payment methods and whether lockers or a cloakroom are actually listed. Keep the plan flexible when the official information is silent instead of turning an unconfirmed convenience into a dependency.",
  },
  {
    title: "Accessibility information",
    copy: "Review the organizer and venue accessibility information and use the published contact channel when important details are unclear. Routes, viewing areas, seating, surfaces, toilets, transport, and assistance processes vary; a general guide cannot confirm what one event provides.",
  },
];

const readinessChecks = [
  "Confirm the current event edition, date, location, and whether the format is indoor, outdoor, mixed, single-site, multi-venue, or includes camping.",
  "Review the official schedule and map together, including realistic time for queues, breaks, and movement between rooms or venues.",
  "Check an official forecast and alert source near the event, then choose footwear and layers for the actual surfaces and conditions.",
  "Consider hearing protection suitable for amplified music, and decide where you can take a quieter break if you need one.",
  "Identify the event’s stated water and food access, then plan breaks and pacing around your own needs without trying to see everything.",
  "Read the current bag, re-entry, camera, payment, locker or cloakroom, age or ID, accessibility, and ticket-display rules.",
  "Prepare your phone for a long day: charge it, consider backup power, and save the official schedule, map, ticket-access details, and essential directions for offline use.",
  "Choose an easy-to-describe public meeting point and agree on what to do if messages are delayed or the group separates.",
  "Plan arrival, movement, and the return trip using official venue and operator information, including a backup for a missed final connection.",
  "Recheck official event, venue, forecast, and transport updates during the week of the event and again before leaving.",
];

export default function FirstTimeDarkAlternativeFestivalGuidePage() {
  return (
    <main
      className={styles.page}
      data-guide-family="night-transmission"
      data-article-contract="first-time-dark-alternative-preparation-guide"
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
          <span aria-current="page">First time</span>
        </nav>

        <header className={styles.masthead}>
          <div className={styles.mastheadGrid} aria-hidden="true" />
          <div className={styles.transmissionLabel}>
            <span>Field transmission</span>
            <span>Preparation sequence / 01–10</span>
          </div>
          <p className={styles.kicker}>Practical preparation after discovery</p>
          <h1>First-Time Dark Alternative Festival Guide</h1>
          <p className={styles.dek}>
            You have identified a festival. This guide helps you turn that choice into a calm plan for the format, conditions, sound, schedule, rules, movement, and week-of rechecks—without telling you how to dress or pretending every event works the same way.
          </p>
          <dl className={styles.signalStrip}>
            <GuideFact label="Starting point" value="A festival has been identified" />
            <GuideFact label="Finish line" value="A practical plan before arrival" />
            <GuideFact label="Controlling source" value="Current organizer and venue information" />
          </dl>
        </header>

        <aside className={styles.boundaryPanel} aria-label="Guide boundary">
          <p className={styles.panelLabel}>What this transmission can—and cannot—do</p>
          <p>
            This is general preparation guidance, not a promise about one festival. Preparation cannot guarantee safety, accessibility, transit, entry, or an unchanged event. Current organizer, venue, forecast, and official operator information controls the details that can change.
          </p>
        </aside>

        <section className={styles.section} id="event-you-chose" data-qa-section="event-you-chose">
          <SectionHeading
            index="01"
            eyebrow="Establish the real event"
            title="Start with the event you actually chose"
            copy="Build the plan around the current edition and its actual format—not a memory, repost, old schedule, or generic idea of what a festival should be."
          />
          <div className={styles.proseGrid}>
            <div className={styles.prose}>
              <p>
                Write down the event name, current edition, date, place, and basic format from an organizer-controlled source. That short record becomes the reference point for everything else: the forecast you check, the route you plan, the rules you read, and the schedule you save. If the event spans more than one day or venue, note which parts your access appears to cover and then follow the organizer’s current instructions.
              </p>
              <p>
                This page begins after discovery. If you are still deciding whether a purchase path is connected to the organizer, use the <Link href="/guides/how-to-verify-festival-tickets-official-sources">festival ticket and official-source verification guide</Link>. It covers the pre-purchase checks that do not belong here. Once the event is clear, return to practical preparation.
              </p>
              <p>
                Do not fill gaps with assumptions. A past edition may have used a different room, entry process, schedule, or site layout. A social post may describe only one part of a larger program. If the current organizer information is incomplete, keep that item marked as something to recheck rather than turning it into a fact.
              </p>
              <p>
                Separate confirmed details from personal decisions. The organizer can confirm how the event operates; you still decide which parts matter to you, how much time and movement feel realistic, and what uncertainty you are willing to carry. Revisit unresolved operational questions during the week of the event. If an answer affects whether you can attend, seek it through the published event or venue channel before building the rest of the day around it.
              </p>
            </div>
            <FieldNote label="First field note" title="Format before inventory">
              Learn how the event works before deciding what to carry. The format changes the useful questions; adding more things rarely solves an unclear plan.
            </FieldNote>
          </div>
        </section>

        <section className={styles.section} id="event-format" data-qa-section="event-format">
          <SectionHeading
            index="02"
            eyebrow="Read the operating environment"
            title="Understand the format before you pack"
            copy="Indoor, outdoor, mixed, single-site, and multi-venue events can share artists while asking very different things from an attendee."
          />
          <p className={styles.sectionLead}>
            Start with duration, surfaces, distance, weather exposure, room changes, and how often you may need to move. If camping appears in the current event description, treat that as a major format to confirm and seek the organizer’s camping rules; this guide does not replace a camping plan.
          </p>
          <div className={styles.formatGrid} role="list" aria-label="Festival format preparation notes">
            {formatNotes.map((note) => (
              <div className={styles.formatCard} key={note.marker} role="listitem">
                <span className={styles.cardIndex} aria-hidden="true">{note.marker}</span>
                <p className={styles.cardSignal}>{note.signal}</p>
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
              </div>
            ))}
          </div>
          <div className={styles.noteBand}>
            <strong>Single-site does not always mean short distances.</strong>
            <p>
              A large field, campus, park, or venue complex may still involve long walks and queues. Use the official map when one is available, but leave room for the real site to take longer than the diagram suggests.
            </p>
          </div>
        </section>

        <section className={styles.section} id="dress-for-conditions" data-qa-section="dress-for-conditions">
          <SectionHeading
            index="03"
            eyebrow="Style meets the environment"
            title="Dress for the conditions without giving up your style"
            copy="There is no required uniform. The useful goal is to keep your expression while respecting weather, surfaces, movement, venue rules, and your own comfort."
          />
          <div className={styles.proseColumns}>
            <div>
              <h3>Begin from the ground up</h3>
              <p>
                Think about how long you may stand, the distance between stages, stairs, uneven ground, mud, heat held by pavement, and wet or cold conditions after dark. Choose footwear you already understand in similar conditions. A first festival is a poor time to discover that a sole slips, a fastening rubs, or a new platform becomes difficult after several hours.
              </p>
              <p>
                This is not an argument for plain clothing or against dramatic footwear. It is an argument for making the tradeoff consciously. If a piece limits movement, decide when you will wear it, how you will manage it, and whether the event rules give you any storage option.
              </p>
            </div>
            <div>
              <h3>Use layers as a system</h3>
              <p>
                Dark clothing can feel very different in direct sun, a crowded room, wind, or a cool return journey. A manageable layer gives you more options than an outfit that works in only one temperature. For outdoor conditions, check the forecast near the event rather than relying on seasonal expectations.
              </p>
              <p>
                Confirm bag limits before planning to carry spare clothing. Check whether lockers or a cloakroom are listed rather than assuming. Keep makeup, accessories, spikes, chains, props, and costume pieces within the published event and venue rules. Self-expression and practical preparation can support each other.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="hearing-and-energy" data-qa-section="hearing-and-energy">
          <SectionHeading
            index="04"
            eyebrow="Sound and stamina"
            title="Protect your hearing and pace your energy"
            copy="Amplified music, long schedules, and the pressure to see everything can turn a good plan into an exhausting one. Build in options before you need them."
          />
          <div className={styles.readinessGrid}>
            <FieldNote label="Hearing" title="Make protection part of the plan">
              Consider bringing and using hearing protection suitable for amplified music. Keep it reachable rather than buried. Distance from a speaker, time in a loud space, and a quieter break can also affect your experience, but no simple step promises complete protection.
            </FieldNote>
            <FieldNote label="Energy" title="Choose your important moments">
              Mark the sets or activities that matter most, then leave space around them. A schedule is a menu, not an obligation. Queues, room capacity, food, water, movement, and rest take real time.
            </FieldNote>
            <FieldNote label="Access" title="Know where basics are addressed">
              Review the organizer’s information about water, food, toilets, seating or rest areas, and permitted items. Make a plan around your own needs. This guide does not prescribe quantities, treatment, or a universal routine.
            </FieldNote>
          </div>
          <p className={styles.sectionLead}>
            If you feel unwell or cannot continue comfortably, step away from the schedule and seek appropriate help through the event’s published channels. The next performance is not more important than responding to what you are experiencing.
          </p>
        </section>

        <section className={styles.section} id="phone-power-schedule" data-qa-section="phone-power-schedule">
          <SectionHeading
            index="05"
            eyebrow="Keep essential details usable"
            title="Plan your phone, power, schedule, and meeting point"
            copy="A phone is useful only while it has power, signal, readable information, and a plan behind it. Save the few details that matter when the site is noisy or crowded."
          />
          <div className={styles.sequence} role="list" aria-label="Phone and meeting-point sequence">
            <SequenceStep index="A" title="Save the current essentials">
              Capture the official schedule, map, ticket-access instructions, venue address, return information, and any organizer update channel you expect to use. Save essential details for offline access in case reception becomes slow or unreliable.
            </SequenceStep>
            <SequenceStep index="B" title="Protect the power budget">
              Begin charged. Consider backup power as a practical category if the day is long, but choose and maintain any device according to its instructions. Reduce avoidable battery use before you depend on the phone for entry, navigation, communication, or the return trip.
            </SequenceStep>
            <SequenceStep index="C" title="Make the schedule realistic">
              Include walking, queues, room changes, breaks, and the chance that a space reaches capacity. Decide which conflicts you will resolve in advance and which can wait until the day. A less crowded plan often leaves more room to enjoy the event.
            </SequenceStep>
            <SequenceStep index="D" title="Choose a public meeting point">
              Pick a visible, easy-to-describe place that everyone can identify. Agree on a time or condition for meeting there and what to do if messages do not arrive. Avoid a moving target such as “near the stage” when several stages or entrances look similar.
            </SequenceStep>
          </div>
        </section>

        <section className={styles.section} id="rules-before-arrival" data-qa-section="rules-before-arrival">
          <SectionHeading
            index="06"
            eyebrow="Variable conditions ledger"
            title="Check the rules that can change your day"
            copy="Rules vary by event, edition, venue, and sometimes by room. Read the current official event and venue information instead of carrying assumptions from somewhere else."
          />
          <div className={styles.rulesLedger}>
            {ruleChecks.map((rule, index) => (
              <div className={styles.ruleRow} key={rule.title}>
                <span className={styles.ruleIndex} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.copy}</p>
                </div>
              </div>
            ))}
          </div>
          <aside className={styles.cautionPanel}>
            <p className={styles.panelLabel}>When the answer is missing</p>
            <p>
              Use the organizer or venue’s published contact route for a question that affects attendance. Ask for the specific current-edition detail you need. Silence is not confirmation, and a rule from another festival is not a safe substitute.
            </p>
          </aside>
        </section>

        <section className={styles.section} id="arrival-movement-return" data-qa-section="arrival-movement-return">
          <SectionHeading
            index="07"
            eyebrow="The journey is part of the timetable"
            title="Plan arrival, movement, and the return trip"
            copy="Late finishes and venue changes deserve the same attention as the opening time. Build the movement plan from current official information."
          />
          <div className={styles.proseGrid}>
            <div className={styles.prose}>
              <p>
                Work backward from the first part you care about. Add time for the route, the correct entrance, security or ticket checks, and finding the first room or stage. If the organizer publishes different entry points or collection instructions, save the one connected to your access. Do not assume the address alone leads to the right door.
              </p>
              <p>
                For a multi-venue event, compare the schedule with the official map and transport information. Decide where you will accept a missed or partial set rather than creating a chain of impossible transitions. At night, a route that looked simple in daylight may be less obvious, so save directions and identify a clear pickup or meeting point where relevant.
              </p>
              <p>
                Plan the return before the event begins. Recheck the official operator schedule and note the last practical connection, not merely the last listed departure. Leave time to exit the site and reach the stop or station. Have a noncommercial backup plan you understand if the final connection is missed; this guide does not recommend a provider or promise that transport will remain available.
              </p>
            </div>
            <FieldNote label="Distance check" title="Use time, not adjectives">
              “Nearby” and “easy” are subjective. Compare actual routes and operating times using official venue and operator information. Your starting point, mobility, weather, crowds, and the hour can change what a distance means.
            </FieldNote>
          </div>
        </section>

        <section className={styles.section} id="solo-or-meeting-people" data-qa-section="solo-or-meeting-people">
          <SectionHeading
            index="08"
            eyebrow="Connection without pressure"
            title="Going solo or meeting people"
            copy="A first festival can be meaningful alone, with friends, or with people you meet there. A simple communication plan gives each version more room to work."
          />
          <div className={styles.proseColumns}>
            <div>
              <h3>If you are attending solo</h3>
              <p>
                Share the event and your broad return plan with someone you trust if that feels useful. Keep your phone charged, save essential information, and know where the organizer says to find staff or assistance. Choose your own pace. You do not need to stay in a room, conversation, or crowd that no longer feels right for you.
              </p>
              <p>
                Solo attendance does not require becoming instantly social. A queue, merch area, quieter edge, or scheduled activity may create natural conversation, but you are not failing the scene if you mainly listen and observe. Respect your energy and other people’s space.
              </p>
            </div>
            <div>
              <h3>If you are meeting people</h3>
              <p>
                Agree on a public meeting point and a fallback time before the music begins. Make it acceptable for people to split up for different sets without turning the group chat into a constant coordination task. If someone leaves early, confirm the change rather than relying on a vague assumption.
              </p>
              <p>
                Treat consent and personal boundaries as normal parts of participation. Ask before close photographs or recording someone as a subject, respect a refusal, and follow event rules. Clothing, dancing, makeup, or presence at a dark-alternative event never removes a person’s right to choose an interaction.
              </p>
            </div>
          </div>
          <p className={styles.sectionLead}>
            A communication and meeting plan can reduce confusion, but it cannot guarantee safety. Use your judgment, the event’s published support channels, and appropriate local emergency services when circumstances require them.
          </p>
        </section>

        <section
          className={`${styles.section} ${styles.checklistSection}`}
          id="first-time-checklist"
          data-qa-section="first-time-checklist"
          data-static-readiness-checklist
        >
          <SectionHeading
            index="09"
            eyebrow="Static readiness register"
            title="First-time readiness checklist"
            copy="Use this as a reusable pre-arrival sequence. It stores nothing, tracks nothing, and does not replace the current instructions for your event."
          />
          <ol className={styles.checklist}>
            {readinessChecks.map((item, index) => (
              <li key={item}>
                <span className={styles.checkNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section} id="week-of-recheck" data-qa-section="week-of-recheck">
          <SectionHeading
            index="10"
            eyebrow="Final signal refresh"
            title="Recheck during the week of the event"
            copy="The closer the event gets, the more useful current operational information becomes. Give the plan one calm final pass."
          />
          <div className={styles.recheckGrid}>
            <div>
              <h3>Event and venue</h3>
              <p>Confirm the date, location, entrance information, schedule, map, ticket display, bag rules, re-entry, camera policy, payment information, accessibility details, age or ID requirements, and any official update.</p>
            </div>
            <div>
              <h3>Conditions and movement</h3>
              <p>Check an official forecast and alert source near the event. Recheck the official operator schedule, route notices, the time needed between venues, and the plan for leaving after the final part of your night.</p>
            </div>
            <div>
              <h3>Your usable copy</h3>
              <p>Charge the phone, prepare backup power if you use it, save essential details offline, confirm the meeting point, and make sure every person relying on the plan has the same current information.</p>
            </div>
          </div>
          <aside className={styles.finalNote}>
            <p className={styles.panelLabel}>Official information wins</p>
            <p>
              If this guide, an old post, a saved image, or somebody’s memory conflicts with the current organizer, venue, forecast, or official operator source, stop and resolve the difference. Keep uncertainty visible until an appropriate current source answers it.
            </p>
          </aside>
        </section>

        <section className={styles.continueSection} id="continue-exploring" data-qa-section="continue-exploring">
          <div className={styles.continueHeader}>
            <p className={styles.sectionEyebrow}>Continue exploring</p>
            <h2 className={styles.sectionTitle}>Keep discovery, preparation, and source clarity connected.</h2>
          </div>
          <div className={styles.continueGrid}>
            <Link href="/festivals">
              <span>Active atlas</span>
              <strong>Browse source-aware festival records</strong>
            </Link>
            <Link href="/guides">
              <span>Guide collection</span>
              <strong>Choose another discovery path</strong>
            </Link>
            <Link href="/verification">
              <span>Editorial standards</span>
              <strong>See how RetroAltFest reviews sources</strong>
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

function SequenceStep({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <div className={styles.sequenceStep} role="listitem">
      <span className={styles.sequenceIndex} aria-hidden="true">{index}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
