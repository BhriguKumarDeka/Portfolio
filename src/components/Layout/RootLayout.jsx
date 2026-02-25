import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
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



  const applyTheme = (theme) => {
    setIsDark(theme);
    if (theme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTheme = () => {
    applyTheme(!isDark);
  };

  // Keyboard 'D' key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'd' || e.key === 'D') && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDark]);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/20 flex flex-col">
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
        <footer className="relative w-full h-28 sm:h-32 flex flex-col justify-end items-center pb-8 shrink-0">
          <div className="absolute top-0 left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border pointer-events-none z-10" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="space-y-1 text-center font-mono tracking-tighter sm:tracking-normal">
              <p className="text-muted-foreground uppercase text-[10px] sm:text-xs  font-medium">
                {portfolioData.footer.year} {portfolioData.footer.text}
              </p>
              <p className="text-[9px] sm:text-[10px] text-foreground tracking-normal ">
                {portfolioData.footer.love}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
