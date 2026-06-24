import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--raf-border-soft)] bg-[rgba(5,5,7,0.76)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="RetroAltFest home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--raf-border)] bg-white/[0.04] text-sm font-black text-[var(--raf-cyan)] shadow-[0_0_34px_rgba(34,211,238,0.16)]">
            RA
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">RetroAltFest</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-[var(--raf-text-muted)] md:flex">
          <Link className="transition hover:text-white focus-visible:text-white" href="/festivals">Festivals</Link>
          <Link className="transition hover:text-white focus-visible:text-white" href="/guides">Guides</Link>
          <Link className="transition hover:text-white focus-visible:text-white" href="/verification">Verification</Link>
          <Link className="raf-button-secondary px-4 py-2 font-medium text-white" href="/suggest">
            Suggest
          </Link>
        </div>
      </nav>
    </header>
  );
}
