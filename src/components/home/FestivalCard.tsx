import Link from "next/link";
import { Festival, festivalSlug, formatLocation, statusLabel } from "@/lib/festivals";

export function FestivalCard({ festival }: { festival: Festival }) {
  return (
    <article className="editorial-card-glow group relative flex min-h-full flex-col overflow-hidden rounded-3xl border border-[rgba(168,85,247,0.18)] p-5 transition duration-500 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/45">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.06),transparent_28%)] opacity-55 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/45 to-[var(--raf-ultraviolet)]/30 opacity-60 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-[var(--raf-ultraviolet)]/25 to-transparent opacity-70 transition duration-500 group-hover:via-[var(--raf-cyan)]/35" />
      <div className="relative z-10 flex min-h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--raf-text-dim)]">{festival.record_id}</p>
        <span className="verification-glyph inline-flex items-center gap-1.5 rounded-full bg-[var(--raf-verified)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--raf-verified)]">
          <span aria-hidden="true">✦</span>
          {statusLabel(festival.verification_status)}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">{festival.festival_name}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">{formatLocation(festival)}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--raf-text-dim)]">{festival.date_text}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {festival.genres.slice(0, 4).map((genre) => (
          <span key={genre} className="rounded-full border border-[var(--raf-border-soft)] bg-black/25 px-3 py-1 text-xs text-[var(--raf-text-muted)] transition duration-500 group-hover:border-white/14 group-hover:text-[var(--raf-text)]">
            {genre}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <Link className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--raf-cyan)] transition duration-500 group-hover:text-white" href={`/festivals/${festivalSlug(festival)}`}>
            View atlas entry →
          </Link>
          <a className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-text-dim)] transition duration-500 hover:text-white" href={festival.official_url} target="_blank" rel="noreferrer">
            Official source
          </a>
        </div>
      </div>
      </div>
    </article>
  );
}
