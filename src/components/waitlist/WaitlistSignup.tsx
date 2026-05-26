const digestInterestHref =
  "mailto:hello@retroaltfest.com?subject=RetroAltFest%20festival%20discovery%20digest%20interest";

export function WaitlistSignup() {
  return (
    <section id="waitlist" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="raf-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--raf-cyan)]/10 blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Beta digest signup</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Join the RetroAltFest festival discovery digest.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--raf-text-muted)]">
              Join the RetroAltFest festival discovery digest — email capture is temporarily handled by direct email while durable signup storage is being connected.
            </p>
          </div>

          <div className="min-w-0 rounded-3xl border border-[var(--raf-border-soft)] bg-black/30 p-4 sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Temporary safe signup</p>
            <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]">
              Send a quick email to be added to the early digest list. This avoids storing your address in temporary server storage while the durable provider is being connected.
            </p>
            <a className="raf-button-primary mt-5 w-full px-5 py-3 text-center text-sm" href={digestInterestHref}>
              Email me about the digest
            </a>
            <p className="mt-3 text-xs leading-5 text-[var(--raf-text-dim)]">
              Opens your email app with a pre-filled subject for hello@retroaltfest.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
