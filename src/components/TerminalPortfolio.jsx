import { useState } from 'react';
import { TerminalContent } from './TerminalContent';
import { TerminalHeader } from './TerminalHeader';

export function TerminalPortfolio({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = data.tabs[activeIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.05)_50%)] [background-size:100%_4px]" />

      <div className="flex h-screen w-full">
        <section className="terminal-frame relative flex h-full min-h-0 w-full flex-col overflow-hidden border border-terminal-line bg-terminal-panel">
          <TerminalHeader
            tabs={data.tabs}
            activeIndex={activeIndex}
            onChange={setActiveIndex}
            activeTab={activeTab}
            sessionTitle={`${data.prompt}@security-workstation:~/portfolio`}
          />
          <TerminalContent activeTab={activeTab} data={data} />
        </section>
      </div>
    </div>
  );
}
