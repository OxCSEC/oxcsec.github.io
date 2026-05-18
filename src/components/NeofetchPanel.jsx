import { AsciiBadge } from './AsciiBadge';

function SummaryLine({ label, value }) {
  return (
    <div className="grid gap-1 border-b border-terminal-line/60 py-2 sm:grid-cols-[8rem_1fr] sm:gap-4">
      <div className="text-terminal-accent">{label}</div>
      <div className="text-terminal-text/90">{value}</div>
    </div>
  );
}

function ListBlock({ title, values }) {
  return (
    <div>
      <div className="mb-2 text-terminal-accent">{title}</div>
      <ul className="space-y-1 text-terminal-text/85">
        {values.map((value) => (
          <li key={value} className="flex gap-3">
            <span className="text-terminal-accent">&gt;</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NeofetchPanel({ data }) {
  return (
    <section
      aria-labelledby="overview-title"
      className="terminal-frame relative overflow-hidden rounded-3xl border border-terminal-accent/20 bg-terminal-panel p-4 shadow-terminal sm:p-6"
    >
      <div className="mb-5 flex items-center gap-2 border-b border-terminal-line pb-4 text-xs uppercase tracking-[0.3em] text-terminal-muted">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-4">/usr/portfolio/operator_profile</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <AsciiBadge
          art={data.asciiArt}
          prompt={data.prompt}
          location={data.location}
        />

        <div className="space-y-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-terminal-muted">
              active session
            </p>
            <h1
              id="overview-title"
              className="text-2xl font-semibold tracking-tight text-terminal-text sm:text-3xl"
            >
              {data.name}
            </h1>
            <p className="mt-2 text-sm leading-7 text-terminal-accent sm:text-base">
              {data.title.join(' / ')}
            </p>
          </div>

          <div className="rounded-2xl border border-terminal-line bg-black/30 p-4">
            {data.summaryRows.map(([label, value]) => (
              <SummaryLine key={label} label={label} value={value} />
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <ListBlock title="Expertise" values={data.expertise} />
            <div>
              <div className="mb-2 text-terminal-accent">About</div>
              <p className="leading-7 text-terminal-text/85">{data.about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
