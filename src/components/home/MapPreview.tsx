import { featuredFestivals, mapPreviewLabel } from "@/lib/festivals";

export function MapPreview() {
  return (
    <section id="map" className="relative mx-auto max-w-7xl px-5 py-16 max-[430px]:px-[16px] sm:px-8">
      <div className="section-shadow-well pointer-events-none absolute inset-x-0 top-0 h-full" />
      <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(168,85,247,0.18)] bg-[linear-gradient(135deg,rgba(28,20,48,0.58),rgba(6,6,10,0.74))] shadow-[0_30px_110px_rgba(0,0,0,0.48),0_0_70px_rgba(88,28,135,0.13)]">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 p-7 max-[430px]:p-[16px] sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Map preview</p>
            <h2 className="mt-3 min-w-0 max-w-full font-display text-4xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] [word-break:normal]">A travel-oriented atlas, without fake precision.</h2>
            <p className="mt-5 leading-8 text-[var(--raf-text-muted)]">
              The first dataset intentionally keeps coordinates empty until venue geocoding is verified. The interface can still preview regions, status, and follow-up needs now.
            </p>
          </div>
          <div className="relative min-h-[24rem] min-w-0 overflow-hidden border-t border-[rgba(168,85,247,0.14)] bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.32),transparent_34%),radial-gradient(circle_at_66%_34%,rgba(190,50,134,0.12),transparent_32%),rgba(0,0,0,0.32)] lg:border-l lg:border-t-0">
            <div className="ambient-haze absolute inset-0 opacity-55" />
            <div className="nocturnal-grid absolute inset-0 opacity-50" />
            <div className="grain-field absolute inset-0 opacity-[0.06]" />
            <div className="absolute left-6 top-6 rounded-2xl border border-[var(--raf-border)] bg-black/45 p-4 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-text-dim)]">Preview mode</p>
              <p className="mt-1 text-sm text-[var(--raf-text-muted)]">Region labels now. Exact pins after geocoding.</p>
            </div>
            <div className="connection-arc absolute inset-x-10 top-[44%] h-px -rotate-12 bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/35 to-transparent" />
            <div className="connection-arc absolute inset-x-14 top-[59%] h-px rotate-12 bg-gradient-to-r from-transparent via-[var(--raf-magenta)]/30 to-transparent" />
            {featuredFestivals.map((festival, index) => (
              <div
                key={festival.record_id}
                className="atlas-node absolute rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur"
                style={{ left: `${12 + (index % 3) * 28}%`, top: `${18 + Math.floor(index / 3) * 28}%` }}
              >
                {mapPreviewLabel(festival)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
