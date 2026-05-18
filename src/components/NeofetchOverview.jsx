import { AsciiBadge } from './AsciiBadge';

function SummaryLine({ label, value }) {
  return (
    <div className="grid gap-1 border-b border-terminal-line/60 py-2 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
      <div className="text-terminal-accent">{label}</div>
      <div className="text-terminal-text/90">{value}</div>
    </div>
  );
}

function ListBlock({ title, values }) {
  return (
    <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
      <div className="mb-3 text-terminal-accent">{title}</div>
      <ul className="space-y-2 text-terminal-text/85">
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

export function NeofetchOverview({ data }) {
  return (
    <div className="grid h-full min-h-0 gap-4 xl:grid-cols-[340px_1fr]">
      <AsciiBadge art={data.asciiArt} prompt={data.prompt} location={data.location} />

      <div className="flex min-h-0 flex-col gap-4">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-terminal-muted">
            active session
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-terminal-text sm:text-3xl">
            {data.name}
          </h2>
          <p className="mt-2 text-sm leading-7 text-terminal-accent sm:text-base">
            {data.title.join(' / ')}
          </p>
        </div>

        <div className="rounded-2xl border border-terminal-line bg-black/30 p-4">
          {data.summaryRows.map(([label, value]) => (
            <SummaryLine key={label} label={label} value={value} />
          ))}
        </div>

        <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
          <div className="mb-3 text-terminal-accent">About</div>
          <p className="leading-7 text-terminal-text/90">{data.about}</p>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
            <div className="mb-3 text-terminal-accent">Operational Context</div>
            <div className="space-y-3 text-terminal-text/85">
              {data.aboutLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <ListBlock title="Expertise" values={data.expertise} />
        </div>
      </div>
    </div>
  );
}
