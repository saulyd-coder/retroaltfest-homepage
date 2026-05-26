export function SubmitFestivalCta() {
  return (
    <section id="submit" className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-warning)]">Know a festival?</p>
      <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Help grow the atlas carefully.</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--raf-text-muted)]">
        Send an official site, organizer page, ticket link, or venue source. Leads stay separate from verified records until reviewed.
      </p>
      <a className="raf-button-primary mt-8 px-7 py-3" href="mailto:hello@retroaltfest.com?subject=Festival%20suggestion%20for%20RetroAltFest">
        Suggest a verified lead
      </a>
    </section>
  );
}
