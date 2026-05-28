import signalsData from "@/data/first_dark_festival_signals.json";

const statusTone: Record<string, string> = {
  confirmed_upcoming: "border-[rgba(52,211,153,0.26)] bg-[rgba(52,211,153,0.08)] text-[var(--raf-verified)]",
  date_pending: "border-[rgba(251,191,36,0.24)] bg-[rgba(251,191,36,0.07)] text-[var(--raf-warning)]",
};

const artWash: Record<string, string> = {
  "darker-waves": "from-[rgba(34,211,238,0.14)] via-[rgba(124,58,237,0.12)] to-transparent",
  "dark-force-fest": "from-[rgba(168,85,247,0.16)] via-[rgba(88,28,135,0.15)] to-transparent",
  "cold-waves": "from-[rgba(59,130,246,0.13)] via-[rgba(34,211,238,0.08)] to-transparent",
  "verboden-music-festival": "from-[rgba(34,211,238,0.11)] via-[rgba(139,92,246,0.14)] to-transparent",
  "absolution-fest": "from-[rgba(236,72,153,0.14)] via-[rgba(124,58,237,0.1)] to-transparent",
  "cruel-world": "from-[rgba(251,191,36,0.11)] via-[rgba(236,72,153,0.12)] to-transparent",
};

export function FirstDarkFestivalSignals() {
  const { section, signals } = signalsData;

  return (
    <section
      aria-labelledby="first-dark-festival-signals-heading"
      className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18"
    >
      <div className="section-shadow-well pointer-events-none absolute inset-x-4 top-0 h-40 rounded-full opacity-80 blur-3xl" />

      <div className="relative mb-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">{section.eyebrow}</p>
        <h2
          id="first-dark-festival-signals-heading"
          className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {section.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--raf-text-muted)] sm:text-lg">{section.subtitle}</p>
        <p className="mt-4 max-w-2xl border-l border-[var(--raf-cyan)]/24 pl-4 text-sm leading-6 text-[var(--raf-text-muted)]">
          {section.trust_note}
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {signals.map((signal) => (
          <article
            key={signal.id}
            className="editorial-card-glow group relative min-h-full overflow-hidden rounded-3xl border border-[rgba(168,85,247,0.18)] p-5 transition duration-500 hover:-translate-y-0.5 hover:border-[var(--raf-cyan)]/40"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
                artWash[signal.id] ?? "from-[rgba(124,58,237,0.12)] via-[rgba(34,211,238,0.08)] to-transparent"
              } opacity-80`}
            />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/40 to-[var(--raf-ultraviolet)]/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--raf-ultraviolet)]/10 blur-2xl transition duration-500 group-hover:bg-[var(--raf-cyan)]/10" />

            <div className="relative z-10 flex min-h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                    statusTone[signal.status_key] || "border-[var(--raf-border)] text-[var(--raf-text-muted)]"
                  }`}
                >
                  {signal.status_label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-text-muted)]">
                  {signal.country_scope}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                {signal.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--raf-text-muted)]">{signal.region_label}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {signal.scene_tags.map((tag) => (
                  <span key={tag} className="raf-chip rounded-full px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-[var(--raf-text-muted)]">{signal.cultural_hook}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-cyan)]/80">
                {signal.pathway_concept}
              </p>

              <div className="mt-auto pt-6">
                <a
                  className="inline-flex font-mono text-xs uppercase tracking-[0.16em] text-[var(--raf-text-muted)] transition duration-500 hover:text-white focus-visible:text-white"
                  href={signal.official_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${signal.source_cue} for ${signal.name}`}
                >
                  {signal.source_cue} →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="relative mt-7 max-w-2xl text-sm leading-6 text-[var(--raf-text-dim)]">{section.closing_microcopy}</p>
    </section>
  );
}
