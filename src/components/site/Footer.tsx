import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--raf-border-soft)] px-5 py-10 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--raf-cyan)]/25 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--raf-text-dim)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">RetroAltFest</p>
          <p className="mt-1 max-w-xl">Curated dark alternative festival discovery. Verified before mapped.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--raf-text-dim)]">MVP atlas · official-source first · no guessed pins</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link className="transition hover:text-white focus-visible:text-white" href="/festivals">Festival atlas</Link>
          <Link className="transition hover:text-white focus-visible:text-white" href="/guides">Guides</Link>
          <Link className="transition hover:text-white focus-visible:text-white" href="/verification">Verification</Link>
          <Link className="transition hover:text-white focus-visible:text-white" href="/suggest">Suggest a festival</Link>
        </div>
      </div>
    </footer>
  );
}
