import { featuredFestivals, formatLocation, homepageStats } from "@/lib/festivals";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-18 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-24">
      <div className="hero-bloom pointer-events-none absolute -left-20 top-8 h-[34rem] w-[48rem] rounded-full opacity-90 blur-2xl" />
      <div className="pointer-events-none absolute left-[48%] top-16 hidden h-[34rem] w-px bg-gradient-to-b from-transparent via-[var(--raf-ultraviolet)]/20 to-transparent lg:block" />
      <div className="relative z-10 flex flex-col justify-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Source-aware dark festival discovery</p>
        <h1 className="text-balance font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          Discover dark alternative festivals worth traveling for.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--raf-text-muted)] sm:text-xl">
          A curated atlas for goth, darkwave, industrial, synth, EBM, post-punk, and underground alternative festivals — built from official sources, not scraped noise.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--raf-text-dim)]">
          Start with verified records, clear source notes, and honest map status before planning a trip.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a className="raf-button-primary relative z-10 px-6 py-3 text-center" href="#festivals" aria-label="Browse festivals — start browsing the atlas">
            Start browsing the atlas
          </a>
          <a className="raf-button-secondary px-6 py-3 text-center" href="#submit">
            Suggest a festival
          </a>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
          {homepageStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-[var(--raf-border-soft)] bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">{stat.label}</dt>
              <dd className="mt-2 font-display text-2xl font-semibold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative min-h-[34rem] rounded-[2rem] border border-[var(--raf-border)] bg-[linear-gradient(145deg,rgba(45,31,74,0.72),rgba(10,9,18,0.84)_52%,rgba(4,4,8,0.92))] p-4 shadow-[0_34px_120px_rgba(0,0,0,0.58),0_0_70px_rgba(88,28,135,0.18)]">
        <div className="map-panel-bloom absolute -inset-10 rounded-[2.5rem] opacity-70 blur-2xl" />
        <div className="ambient-haze absolute inset-0 rounded-[2rem] opacity-50" />
        <div className="absolute inset-4 rounded-[1.5rem] border border-[var(--raf-border-soft)] bg-[radial-gradient(circle_at_28%_18%,rgba(168,85,247,0.32),transparent_30%),radial-gradient(circle_at_78%_42%,rgba(34,211,238,0.13),transparent_26%),radial-gradient(circle_at_44%_72%,rgba(190,50,134,0.14),transparent_32%),rgba(8,7,14,0.78)]" />
        <div className="grain-field absolute inset-4 rounded-[1.5rem] opacity-[0.08]" />
        <div className="relative flex h-full min-h-[32rem] flex-col justify-between overflow-hidden rounded-[1.5rem] p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-text-muted)]">Nocturnal Atlas</span>
            <span className="verification-glyph rounded-full bg-[var(--raf-verified)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-verified)]">Verified-first MVP</span>
          </div>
          <div className="relative my-10 flex-1" aria-hidden="true">
            <div className="atlas-node absolute left-[10%] top-[24%] h-2 w-2 rounded-full bg-[var(--raf-cyan)] shadow-[0_0_24px_var(--raf-cyan)]" />
            <div className="atlas-node absolute left-[48%] top-[15%] h-2.5 w-2.5 rounded-full bg-[var(--raf-magenta)] shadow-[0_0_28px_var(--raf-magenta)]" />
            <div className="atlas-node absolute left-[72%] top-[42%] h-2 w-2 rounded-full bg-[var(--raf-violet)] shadow-[0_0_28px_var(--raf-violet)]" />
            <div className="atlas-node absolute left-[28%] top-[60%] h-2.5 w-2.5 rounded-full bg-[var(--raf-verified)] shadow-[0_0_24px_var(--raf-verified)]" />
            <div className="atlas-node absolute left-[58%] top-[72%] h-2 w-2 rounded-full bg-[var(--raf-warning)] shadow-[0_0_24px_var(--raf-warning)]" />
            <div className="connection-arc absolute inset-x-8 top-1/2 h-px rotate-[-15deg] bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/40 to-transparent" />
            <div className="connection-arc absolute inset-x-16 top-[38%] h-px rotate-[22deg] bg-gradient-to-r from-transparent via-[var(--raf-magenta)]/35 to-transparent" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {featuredFestivals.slice(0, 2).map((festival) => (
              <article key={festival.record_id} className="rounded-2xl border border-[var(--raf-border)] bg-[linear-gradient(180deg,rgba(20,14,32,0.7),rgba(0,0,0,0.42))] p-4 shadow-[0_16px_44px_rgba(0,0,0,0.24)] backdrop-blur transition duration-500 hover:border-[var(--raf-cyan)]/40 hover:shadow-[0_0_28px_rgba(168,85,247,0.12)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-text-dim)]">{festival.record_id}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-white">{festival.festival_name}</h2>
                <p className="mt-2 text-sm text-[var(--raf-text-muted)]">{formatLocation(festival)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
