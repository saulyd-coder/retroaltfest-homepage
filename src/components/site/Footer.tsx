export function Footer() {
  return (
    <footer className="border-t border-[var(--raf-border-soft)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[var(--raf-text-dim)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">RetroAltFest</p>
          <p className="mt-1">Curated dark alternative festival discovery. Verified before mapped.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-white" href="#festivals">Festivals</a>
          <a className="transition hover:text-white" href="#map">Map preview</a>
          <a className="transition hover:text-white" href="#submit">Submit festival</a>
        </div>
      </div>
    </footer>
  );
}
