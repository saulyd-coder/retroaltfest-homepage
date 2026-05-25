import { sceneFilters } from "@/lib/festivals";

export function SceneChips() {
  return (
    <div className="mb-8">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.26em] text-[var(--raf-text-dim)]">Browse by scene</h3>
      <div className="flex flex-wrap gap-2">
        {sceneFilters.map((scene) => (
          <span key={scene} className="rounded-full border border-[var(--raf-border)] bg-white/[0.035] px-4 py-2 text-sm text-[var(--raf-text-muted)]">
            {scene}
          </span>
        ))}
      </div>
    </div>
  );
}
