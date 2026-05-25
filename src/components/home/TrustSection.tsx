const trustItems = [
  ["Official sources", "Each seed record carries source URLs and confidence notes so visitors can verify the trail."],
  ["Clear status labels", "Confirmed upcoming, multi-venue parent, and follow-up-needed records are visually separated."],
  ["Manual curation", "The MVP starts small on purpose: better signal, fewer dead ends, and no guessed map pins."],
];

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {trustItems.map(([title, body]) => (
          <article key={title} className="rounded-3xl border border-[rgba(168,85,247,0.16)] bg-[linear-gradient(180deg,rgba(30,22,48,0.42),rgba(255,255,255,0.026))] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
            <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-3 leading-7 text-[var(--raf-text-muted)]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
