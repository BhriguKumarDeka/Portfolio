import { useState, useEffect } from 'react';
import { PaintBoardIcon, ArrowLeft01Icon, Search01Icon } from 'hugeicons-react';
import "@theme-toggles/react/css/Expand.css";
import { Around, Expand } from "@theme-toggles/react";
import DesignSystem from './DesignSystem';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';

export default function Header({ isDark, toggleTheme, name }) {
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [showProgressHeader, setShowProgressHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowProgressHeader(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPageContext = () => {
    const path = location.pathname;
    if (path === '/') return { title: 'Bhrigu Kumar Deka', subtitle: 'UI/UX Designer', root: true };
    if (path.startsWith('/project/')) return { title: 'View Project', subtitle: 'Case Study', root: false };
    if (path === '/projects') return { title: 'Projects', subtitle: 'Work Archive', root: false };
    if (path === '/playground') return { title: 'Playground', subtitle: 'Creative Archive', root: false };
    return { title: 'Portfolio', subtitle: 'Dexter', root: true };
  };

  const context = getPageContext();

  return (
    <>
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="absolute top-0 left-[calc(-50vw+50%)] w-screen h-full border-b border-dashed border-border pointer-events-none" />

        <div className="flex items-center justify-between px-4 h-14 relative z-10">
          <div className="flex items-center gap-3">
            {!context.root && (
              <Link to={location.pathname.startsWith('/project/') ? '/projects' : '/'}>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full border border-border/50 bg-secondary/10 hover:bg-secondary transition-colors">
                  <ArrowLeft01Icon size={14} />
                </Button>
              </Link>
            )}

            <AnimatePresence mode="wait">
              {showProgressHeader && (
                <motion.div
                  key={context.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col"
                >
                  <Typography variant="h4" className="text-sm font-bold leading-none tracking-tight">
                    {context.title}
                  </Typography>
                  <Typography variant="small" className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                    {context.subtitle}
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              className="hidden md:flex items-center gap-2 px-2 py-1.5 bg-secondary/50 border border-border/50 rounded-lg hover:bg-secondary transition-colors group"
            >
              <Search01Icon size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Search...</span>
              <div className="flex items-center gap-1 ml-2">
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border/50 rounded text-muted-foreground">⌘</kbd>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-background border border-border/50 rounded text-muted-foreground">K</kbd>
              </div>
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
              className="md:hidden rounded-full w-9 h-9 hover:bg-muted"
              aria-label="Search"
            >
              <Search01Icon size={18} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowDesignSystem(true)}
              className="rounded-full w-9 h-9 hover:bg-muted"
            >
              <PaintBoardIcon size={18} />
            </Button>
            <Expand
              toggled={isDark}
              toggle={toggleTheme}
              duration={400}
              className="rounded-full w-9 h-9 hover:bg-muted inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-[1.2rem]"
              aria-label="Toggle Theme"
            />
          </div>
        </div>
      </div>

      <DesignSystem isOpen={showDesignSystem} onClose={() => setShowDesignSystem(false)} />
    </>
  );
}

