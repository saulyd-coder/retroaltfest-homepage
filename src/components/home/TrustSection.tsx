import Link from "next/link";

const trustItems = [
  ["Official sources", "Each seed record includes source URLs and confidence notes so visitors can verify the trail."],
  ["Clear status labels", "No scraped listings: confirmed upcoming, multi-venue parent, and follow-up-needed records are visually separated."],
  ["Manual curation", "The MVP starts small on purpose: better signal, clearer status labels, and no dead-end listings."],
];

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {trustItems.map(([title, body]) => (
          <article key={title} className="raf-panel rounded-3xl p-6">
            <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{body}</p>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-[1.75rem] border border-[var(--raf-cyan)]/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(168,85,247,0.08),rgba(0,0,0,0.24))] p-5 text-sm leading-6 text-[var(--raf-text-muted)] sm:flex sm:items-center sm:justify-between sm:gap-6">
        <p>
          Want the public version of the source-checking promise? Read how RetroAltFest verifies festival status before map placement.
        </p>
        <Link className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.22em] text-[var(--raf-cyan)] transition hover:text-white sm:mt-0" href="/verification">
          How we verify festivals →
        </Link>
      </div>
    </section>
  );
}
