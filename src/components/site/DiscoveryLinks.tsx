import Link from "next/link";

export type DiscoveryLink = {
  href: string;
  label: string;
  description: string;
};

type DiscoveryLinksProps = {
  eyebrow?: string;
  title: string;
  description: string;
  links: DiscoveryLink[];
};

export function DiscoveryLinks({ eyebrow = "Next discovery paths", title, description, links }: DiscoveryLinksProps) {
  return (
    <section className="mt-10 min-w-0 rounded-[2rem] border border-[var(--raf-border-soft)] bg-[linear-gradient(135deg,rgba(34,211,238,0.09),rgba(168,85,247,0.1),rgba(0,0,0,0.42))] p-[clamp(16px,4vw,2.5rem)] shadow-[0_20px_80px_rgba(0,0,0,0.24)]">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--raf-cyan)]">{eyebrow}</p>
        <h2 className="mt-3 min-w-0 font-display text-3xl font-semibold tracking-tight text-white [overflow-wrap:anywhere] sm:text-4xl">{title}</h2>
        <p className="mt-4 min-w-0 text-base leading-7 text-[var(--raf-text-muted)] [overflow-wrap:anywhere]">{description}</p>
      </div>

      <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))] gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group min-w-0 rounded-[1.5rem] border border-[var(--raf-border-soft)] bg-black/25 p-[clamp(16px,2vw,1.25rem)] transition duration-300 hover:-translate-y-1 hover:border-[var(--raf-cyan)]/45 hover:bg-white/[0.055] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--raf-cyan)]"
          >
            <span className="block min-w-0 font-display text-2xl font-semibold leading-tight text-white [overflow-wrap:anywhere]">{link.label}</span>
            <span className="mt-3 block min-w-0 text-sm leading-6 text-[var(--raf-text-muted)] [overflow-wrap:anywhere]">{link.description}</span>
            <span className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.22em] text-[var(--raf-cyan)] transition group-hover:text-white">
              Explore <span aria-hidden="true" className="ml-2 transition group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
