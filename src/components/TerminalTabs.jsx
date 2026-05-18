import { useRef } from 'react';

export function TerminalTabs({ tabs, activeIndex, onChange }) {
  const tabRefs = useRef([]);

  const focusTab = (index) => {
    const nextIndex = (index + tabs.length) % tabs.length;
    onChange(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div
      role="tablist"
      aria-label="Portfolio sections"
      className="flex min-w-full gap-2 overflow-x-auto pb-1 pr-4"
    >
      {tabs.map((tab, index) => {
        const selected = index === activeIndex;

        return (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            tabIndex={selected ? 0 : -1}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onChange(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`shrink-0 rounded-t-xl border px-3 py-2 text-xs uppercase tracking-[0.24em] transition sm:px-4 ${
              selected
                ? 'border-terminal-accent/40 bg-terminal-accent/10 text-terminal-accent'
                : 'border-terminal-line bg-black/30 text-terminal-muted hover:border-terminal-accent/20 hover:text-terminal-text'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
