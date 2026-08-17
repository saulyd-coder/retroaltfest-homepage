import Link from "next/link";

export function SubmitFestivalCta() {
  return (
    <section id="submit" className="mx-auto max-w-4xl px-5 py-20 text-center max-[430px]:px-[8px] sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-warning)]">Know a festival?</p>
      <h2 className="mt-3 min-w-0 max-w-full font-display text-4xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] [word-break:normal] sm:text-5xl">Help grow the atlas carefully.</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--raf-text-muted)]">
        Send an official site, organizer page, ticket link, or venue source. Suggestions are reviewed manually and are not automatically published.
      </p>
      <Link className="raf-button-primary mt-8 px-7 py-3" href="/suggest">
        Suggest a festival for review
      </Link>
    </section>
  );
}
