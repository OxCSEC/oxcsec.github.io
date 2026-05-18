function renderItem(item) {
  const content = (
    <>
      <span className="min-w-[8rem] text-terminal-accent">{item.label}</span>
      <span className="text-terminal-text/85">{item.detail}</span>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-1 rounded-xl border border-transparent px-3 py-3 transition hover:border-terminal-accent/30 hover:bg-terminal-accent/5 focus-visible:border-terminal-accent/40 focus-visible:outline-none sm:flex-row"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-1 rounded-xl px-3 py-3 transition hover:bg-terminal-accent/5 sm:flex-row">
      {content}
    </div>
  );
}

export function CommandSection({ id, title, command, items, delay }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="terminal-frame relative overflow-hidden rounded-2xl border border-terminal-line bg-terminal-panel px-4 py-5 shadow-terminal sm:px-6"
      style={{ animationDelay: `${delay * 120}ms` }}
    >
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-terminal-muted">
        <span>{title}</span>
        <span className="text-terminal-accent">$ {command}</span>
      </div>

      <h2 id={`${id}-title`} className="sr-only">
        {title}
      </h2>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={`${title}-${item.label}`} className="border-b border-terminal-line/60 last:border-b-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
}
