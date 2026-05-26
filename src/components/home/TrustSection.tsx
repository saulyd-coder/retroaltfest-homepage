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
    </section>
  );
}
