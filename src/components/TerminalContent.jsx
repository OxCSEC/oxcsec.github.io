import { NeofetchOverview } from './NeofetchOverview';
import { TabPanel } from './TabPanel';

export function TerminalContent({ activeTab, data }) {
  return (
    <main
      id="terminal-content"
      className="flex-1 min-h-0 overflow-hidden px-2 py-2 sm:px-3 sm:py-3"
    >
      <div
        id={`panel-${activeTab.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab.id}`}
        className="terminal-grid terminal-scroll h-full overflow-auto border border-terminal-line bg-[#080808] p-4 shadow-inner shadow-black/30 sm:p-5"
      >
        {activeTab.id === 'overview' ? (
          <NeofetchOverview data={data} />
        ) : (
          <TabPanel tab={activeTab} data={data} />
        )}
      </div>
    </main>
  );
}
