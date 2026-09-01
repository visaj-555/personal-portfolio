import type { ArchitectureNode } from "@/data/projects";

export function SystemMap({
  nodes,
  note,
}: {
  nodes: ArchitectureNode[];
  note?: string;
}) {
  const trunk = nodes.slice(0, 3);
  const branches = nodes.slice(3);

  return (
    <figure className="overflow-hidden rounded-xl border border-ink-700 bg-ink-900 lit-surface">
      <figcaption className="border-b border-ink-700 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
        System map
      </figcaption>
      <ol className="space-y-2 p-5">
        {trunk.map((node, index) => (
          <li key={node.id} className="grid grid-cols-[1fr_auto] items-center gap-3 sm:grid-cols-[12rem_1fr]">
            <span className="font-mono text-[11px] tracking-wide text-text-primary">{node.label}</span>
            <div className="flex items-center gap-3">
              <div className="hidden h-1.5 flex-1 overflow-hidden rounded-full bg-ink-800 sm:block">
                <div
                  className="h-full rounded-full bg-signal"
                  style={{ width: `${40 + index * 18}%` }}
                />
              </div>
              <span className="font-mono text-[11px] text-text-faint">{node.detail}</span>
            </div>
          </li>
        ))}
      </ol>
      {branches.length ? (
        <ol className="space-y-2 border-t border-ink-700 px-5 py-5">
          {branches.map((node) => (
            <li key={node.id} className="grid grid-cols-[1fr_auto] items-center gap-3 sm:grid-cols-[12rem_1fr]">
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-text-primary">
                <span className="text-text-faint" aria-hidden>
                  └
                </span>
                {node.label}
              </span>
              <span className="font-mono text-[11px] text-text-faint">{node.detail}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {note ? (
        <p className="border-t border-ink-700 px-5 py-3 font-mono text-[10px] leading-relaxed text-text-faint">
          {note}
        </p>
      ) : null}
    </figure>
  );
}
