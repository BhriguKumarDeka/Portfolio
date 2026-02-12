import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { portfolioData } from '../../data/portfolioData';

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground transition-colors duration-300 font-sans selection:bg-primary/20 flex flex-col">
      {/* Main Container with Bleeding Dashed Borders */}
      <div className="max-w-3xl mx-auto border-x border-dashed border-border min-h-screen relative bg-background flex flex-col w-full">

        {/* Global Header */}
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          name={portfolioData.hero.name}
        />

        {/* Page Content */}
        <main className="grow relative">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="relative w-full h-32 sm:h-40 flex flex-col justify-end items-center pb-8 shrink-0">
          <div className="absolute top-0 left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border pointer-events-none z-10" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_currentColor]" />
            <div className="space-y-1 text-center font-mono uppercase tracking-tighter sm:tracking-normal">
              <p className="text-muted-foreground text-[10px] sm:text-xs  font-bold">
                © {portfolioData.footer.year} {portfolioData.footer.text}
              </p>
              <p className="text-[9px] sm:text-[10px] text-border tracking-widest">
                {portfolioData.footer.love}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
