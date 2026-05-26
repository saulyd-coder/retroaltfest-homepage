"use client";

import { FormEvent, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmissionState = "idle" | "loading" | "success" | "error";

export function WaitlistSignup() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("Get curated festival drops, map progress, and source-verified scene notes.");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(normalizedEmail)) {
      setStatus("error");
      setMessage("Enter a valid email address so we can add you cleanly.");
      return;
    }

    setStatus("loading");
    setMessage("Adding you to the RetroAltFest festival discovery digest...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail, source: "homepage_waitlist", website }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Signup failed");
      }

      setEmail("");
      setWebsite("");
      setStatus("success");
      setMessage("Check your inbox to confirm your RetroAltFest festival discovery digest signup.");
    } catch {
      setStatus("error");
      setMessage("That did not save. Try again, or email hello@retroaltfest.com for now.");
    }
  }

  return (
    <section id="waitlist" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <div className="raf-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[var(--raf-cyan)]/10 blur-3xl" />
        <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--raf-cyan)]">Festival discovery digest</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Join the RetroAltFest festival discovery digest.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--raf-text-muted)]">
              Get curated festival drops, map progress, and source-verified goth, darkwave, industrial, synthpop, post-punk, EDM, and alternative scene notes.
            </p>
          </div>

          <form className="min-w-0 rounded-3xl border border-[var(--raf-border-soft)] bg-black/30 p-4 sm:p-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--raf-text-dim)]">Email address</span>
              <input
                className="w-full rounded-2xl border border-[var(--raf-border-soft)] bg-black/45 px-4 py-3 text-sm text-white outline-none transition placeholder:text-[var(--raf-text-dim)] focus:border-[var(--raf-cyan)]/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.08)]"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
              <span>Website</span>
              <input
                type="text"
                name="website"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </label>
            <button className="raf-button-primary mt-3 w-full px-5 py-3 text-sm" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Joining..." : "Join the digest"}
            </button>
            <p className="mt-3 text-sm leading-6 text-[var(--raf-text-muted)]" aria-live="polite">
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
