import { useEffect, useState } from 'react';
import { BootSequence } from './components/BootSequence';
import { TerminalPortfolio } from './components/TerminalPortfolio';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setBootComplete(true);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-terminal-base text-terminal-text">
      <a
        href="#terminal-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-terminal-accent focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to terminal content
      </a>

      {!bootComplete && <BootSequence lines={portfolioData.bootLog} />}
      <TerminalPortfolio data={portfolioData} />
    </div>
  );
}
