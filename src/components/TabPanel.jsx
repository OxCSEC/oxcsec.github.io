function renderList(items, options = {}) {
  const {
    linked = false,
    showTitle = false,
    dense = false,
    showMeta = false,
    singleColumn = false,
  } = options;

  return (
    <div className={singleColumn ? 'grid gap-3' : 'grid gap-3 lg:grid-cols-2'}>
      {items.map((item) => {
        const Wrapper = linked && item.href ? 'a' : 'div';
        const wrapperProps =
          linked && item.href
            ? {
                href: item.href,
                target: '_blank',
                rel: 'noreferrer',
              }
            : {};

        return (
          <Wrapper
            key={`${item.label}-${item.detail}`}
            {...wrapperProps}
            className="group rounded-2xl border border-terminal-line bg-black/20 px-4 py-4 transition hover:border-terminal-accent/30 hover:bg-terminal-accent/5 focus-visible:border-terminal-accent/40 focus-visible:outline-none"
          >
            <div className="flex flex-wrap items-start gap-3 text-sm">
              <span className="min-w-[8rem] text-terminal-accent">{item.label}</span>
              <div className="flex-1 space-y-1 text-terminal-text/85">
                {showTitle && item.title ? (
                  <p className="font-medium text-terminal-text">{item.title}</p>
                ) : null}
                <p className={dense ? 'leading-6' : 'leading-7'}>{item.detail}</p>
                {showMeta && item.meta ? (
                  <p className="text-xs uppercase tracking-[0.24em] text-terminal-muted">
                    {item.meta}
                  </p>
                ) : null}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

function renderCommandLines(values) {
  return (
    <div className="space-y-3 rounded-2xl border border-terminal-line bg-black/20 p-4">
      {values.map((value) => (
        <div
          key={value}
          className="flex gap-3 rounded-xl px-2 py-2 text-sm text-terminal-text/85 transition hover:bg-terminal-accent/5"
        >
          <span className="text-terminal-accent">&gt;</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

function PanelBlock({ title, children }) {
  return (
    <div className="rounded-2xl border border-terminal-line bg-black/20 p-4">
      <div className="mb-3 text-terminal-accent">{title}</div>
      {children}
    </div>
  );
}

export function TabPanel({ tab, data }) {
  const heading = (
    <div className="mb-5 flex flex-wrap items-center gap-3 border-b border-terminal-line pb-4 text-xs uppercase tracking-[0.28em] text-terminal-muted">
      <span>{tab.label}</span>
      <span className="text-terminal-accent">$ {tab.command}</span>
    </div>
  );

  switch (tab.id) {
    case 'expertise':
      return (
        <div className="h-full animate-reveal">
          {heading}
          {renderCommandLines(data.expertise)}
        </div>
      );
    case 'experience':
      return (
        <div className="h-full animate-reveal">
          {heading}
          <div className="space-y-4">
            <PanelBlock title="Career Timeline">
              {renderList(data.experience, { showTitle: true })}
            </PanelBlock>
            <div className="grid gap-4 xl:grid-cols-3">
              <PanelBlock title="Certifications">
                {renderList(data.certifications, { dense: true, singleColumn: true })}
              </PanelBlock>
              <PanelBlock title="Skills">
                {renderList(data.skills, { dense: true, singleColumn: true })}
              </PanelBlock>
              <PanelBlock title="Tools">
                {renderList(data.tools, { dense: true, singleColumn: true })}
              </PanelBlock>
            </div>
          </div>
        </div>
      );
    case 'projects':
      return (
        <div className="h-full animate-reveal">
          {heading}
          {renderList(data.projects, { dense: true, showMeta: true })}
        </div>
      );
    case 'contact':
      return (
        <div className="h-full animate-reveal">
          {heading}
          <div className="space-y-4">
            {renderList(data.contact, { linked: true, dense: true, showMeta: true })}
            <div className="rounded-2xl border border-terminal-line bg-black/20 p-4 text-sm text-terminal-text/75">
              <span className="mr-2 text-terminal-accent">$</span>
              {data.footerNote}
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}
