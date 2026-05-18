export function AsciiBadge({ art, prompt, location }) {
  return (
    <aside className="terminal-grid relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-terminal-line bg-[#080808] p-4 shadow-terminal sm:p-5">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-terminal-muted">
        <span>operator.visual</span>
        <span>{location}</span>
      </div>

      <pre className="terminal-scroll min-h-0 flex-1 overflow-auto whitespace-pre text-[0.58rem] leading-[0.92rem] text-terminal-accent sm:text-[0.64rem] sm:leading-[1rem] lg:text-[0.68rem] lg:leading-[1.08rem]">
        {art.join('\n')}
      </pre>

      <div className="mt-4 border-t border-terminal-line pt-3 text-sm text-terminal-text/80">
        <p className="cursor break-all text-terminal-accent">
          {prompt}:~$ neofetch --security-profile
        </p>
      </div>
    </aside>
  );
}
