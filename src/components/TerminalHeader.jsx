import { TerminalTabs } from './TerminalTabs';

export function TerminalHeader({ tabs, activeIndex, onChange, activeTab, sessionTitle }) {
  return (
    <header className="shrink-0 border-b border-terminal-line bg-[#090909]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-terminal-line px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.68rem] uppercase tracking-[0.28em] text-terminal-muted sm:text-xs">
              {sessionTitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.26em] sm:text-xs">
          <span className="rounded-full border border-terminal-accent/30 bg-terminal-accent/10 px-2 py-1 text-terminal-accent">
            Online
          </span>
          <span className="rounded-full border border-terminal-line px-2 py-1 text-terminal-muted">
            Secure Mode
          </span>
          <span className="rounded-full border border-terminal-line px-2 py-1 text-terminal-text/75">
            {activeTab.label}
          </span>
        </div>
      </div>

      <div className="px-3 pt-2 sm:px-4">
        <TerminalTabs tabs={tabs} activeIndex={activeIndex} onChange={onChange} />
      </div>
    </header>
  );
}
