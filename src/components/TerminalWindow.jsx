export function TerminalWindow() {
  return (
    <section
      aria-label="Terminal window header"
      className="terminal-frame relative overflow-hidden rounded-3xl border border-terminal-accent/20 bg-terminal-panel shadow-terminal"
    >
      <div className="flex items-center justify-between border-b border-terminal-line px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[0.68rem] uppercase tracking-[0.32em] text-terminal-muted sm:text-xs">
          bash • operator@security-workstation
        </div>
      </div>

      <div className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-terminal-muted">
            session banner
          </div>
          <p className="max-w-3xl text-lg font-semibold leading-relaxed text-terminal-text sm:text-2xl">
            Offensive validation, secure engineering, and Java backend delivery
            rendered as a personal security terminal.
          </p>
          <div className="grid gap-3 text-sm text-terminal-text/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
              <div className="mb-2 text-terminal-accent">$ whoami</div>
              <p>Pentester / AppSec / Java</p>
            </div>
            <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
              <div className="mb-2 text-terminal-accent">$ cat mission.txt</div>
              <p>Find weak points early. Fix them cleanly. Ship safer systems.</p>
            </div>
          </div>
        </div>

        <div className="terminal-grid rounded-2xl border border-terminal-line bg-black/20 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.28em] text-terminal-muted">
            quick commands
          </div>
          <div className="space-y-3 text-sm">
            {[
              'neofetch --operator',
              'enum --skills --focus appsec',
              'ls ./projects --security',
              'connect --trusted-links',
            ].map((line) => (
              <div
                key={line}
                className="rounded-lg border border-transparent px-3 py-2 text-terminal-text/85 transition hover:border-terminal-accent/30 hover:bg-terminal-accent/5"
              >
                <span className="mr-2 text-terminal-accent">$</span>
                <span className="cursor">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
