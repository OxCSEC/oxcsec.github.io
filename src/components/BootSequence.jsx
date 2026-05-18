export function BootSequence({ lines }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/95 px-4"
      aria-hidden="true"
    >
      <div className="w-full max-w-3xl rounded-2xl border border-terminal-line bg-terminal-panel p-6 shadow-terminal">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-terminal-muted">
          boot sequence
        </p>
        <div className="space-y-3 text-sm text-terminal-text sm:text-base">
          {lines.map((line, index) => (
            <p
              key={line}
              className="animate-reveal"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <span className="mr-3 text-terminal-accent">$</span>
              {line}
              {index === lines.length - 1 ? <span className="cursor" /> : null}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
