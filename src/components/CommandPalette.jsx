import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Search01Icon,
  Home01Icon,
  BrowserIcon,
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Cancel01Icon,
  SlideIcon,
  Globe02Icon,
  FigmaIcon,
  File01Icon,
  Sun02Icon,
  Moon02Icon,
  Mail01FreeIcons
} from '@hugeicons/core-free-icons';

/**
 * CommandPalette Component
 * Features:
 * - Activation via Ctrl+K or Cmd+K
 * - Keyboard navigation (Up/Down/Enter/Esc)
 * - Filtered search results
 * - Cosmic Minimalism Glassmorphism UI
 */

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);

  // Mock data structure - aligns with the app's structure
  const commandSections = [
    {
      group: "Navigation",
      items: [
        { id: 'nav-home', label: 'Home', icon: Home01Icon, shortcut: 'H', action: () => navigate('/') },
        { id: 'nav-projects', label: 'Projects', icon: BrowserIcon, shortcut: 'P', action: () => navigate('/projects') },
        { id: 'nav-playground', label: 'Playground', icon: SlideIcon, shortcut: 'G', action: () => navigate('/playground') },
      ]
    },
    {
      group: "Preferences",
      items: [
        {
          id: 'pref-theme', label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', icon: isDark ? Sun02Icon : Moon02Icon, shortcut: 'T', action: () => {
            window.dispatchEvent(new Event('toggle-theme'));
            setTimeout(() => setIsDark(document.documentElement.classList.contains('dark')), 10);
          }
        },
      ]
    },
    {
      group: "Web Projects",
      items: [
        { id: 'proj-dimlight', label: 'DimLight', icon: Globe02Icon, action: () => navigate('/project/dimlight') },
        { id: 'proj-archon', label: 'Archon', icon: Globe02Icon, action: () => navigate('/project/archon') },
        { id: 'proj-wishgrid', label: 'WishGrid', icon: Globe02Icon, action: () => navigate('/project/wishgrid') },
      ]
    },
    {
      group: "UI Projects",
      items: [
        { id: 'proj-orders', label: 'Orders', icon: FigmaIcon, action: () => navigate('/project/orders') },
        { id: 'proj-swallet', label: 'SWallet', icon: FigmaIcon, action: () => navigate('/project/swallet') },
        { id: 'proj-nyaysaathi', label: 'NyaySaathi', icon: FigmaIcon, action: () => navigate('/project/nyaysaathi') },
      ]
    },
    {
      group: "Case Studies",
      items: [
        { id: 'proj-flow-by-spotify', label: 'Flow by Spotify', icon: File01Icon, action: () => navigate('/project/flow-by-spotify') },
      ]
    },
    {
      group: "Social Links",
      items: [
        { id: 's1', label: 'GitHub', icon: GithubIcon, action: () => window.open('https://github.com/BhriguKumarDeka', '_blank') },
        { id: 's2', label: 'LinkedIn', icon: Linkedin01Icon, action: () => window.open('https://www.linkedin.com/in/bhrigukumardeka/', '_blank') },
        { id: 's3', label: 'Twitter', icon: NewTwitterIcon, action: () => window.open('https://x.com/Dexterwithspecs', '_blank') },
        { id: 's4', label: 'Mail', icon: Mail01FreeIcons, action: () => window.open('mailto:vrigukumar710', '_blank') },
      ]
    }
  ];

  // Flatten and filter items based on search
  const filteredItems = useMemo(() => {
    const flat = [];
    commandSections.forEach(section => {
      const matches = section.items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
      if (matches.length > 0) {
        flat.push({ type: 'header', label: section.group });
        matches.forEach(m => flat.push({ ...m, type: 'item' }));
      }
    });
    return flat;
  }, [search]);

  const selectableItems = useMemo(() =>
    filteredItems.filter(i => i.type === 'item'),
    [filteredItems]);

  // Handle Global Shortcuts
  const lastInteraction = useRef('keyboard');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
        lastInteraction.current = 'keyboard';
      }

      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % selectableItems.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + selectableItems.length) % selectableItems.length);
      }

      if (e.key === 'Enter' && selectableItems[selectedIndex]) {
        handleAction(selectableItems[selectedIndex]);
      }
    };

    const handleOpenPalette = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleOpenPalette);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleOpenPalette);
    };
  }, [isOpen, selectableItems, selectedIndex]);

  const listRef = useRef(null);
  const activeItemRef = useRef(null);

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedIndex]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setSelectedIndex(0);
      setSearch('');
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, [isOpen]);

  const handleAction = (item) => {
    if (item.action) {
      item.action();
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-[30vh] px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-card/60 backdrop-blur-2xl border border-border/50 rounded-xl shadow-2xl overflow-hidden flex flex-col ring-1 ring-black/5"
          >

            {/* Search Input Section */}
            <div className="flex items-center px-3 py-3 border-b border-border/50">
              <HugeiconsIcon icon={Search01Icon} className="mr-3 text-muted-foreground" size={16} />
              <input
                ref={inputRef}
                className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm"
                placeholder="Go to..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted/50 rounded-md text-muted-foreground transition-colors cursor-pointer"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} />
              </button>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-96 overflow-y-auto py-2 command-scrollbar"
              onMouseMove={() => lastInteraction.current = 'mouse'}
            >
              {filteredItems.length === 0 ? (
                <div className="px-6 py-10 text-center">
                  <p className="text-muted-foreground">No results found for "{search}"</p>
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  if (item.type === 'header') {
                    return (
                      <div key={item.label} className="px-3 py-1 text-[10px] font-medium uppercase text-muted-foreground/70">
                        {item.label}
                      </div>
                    );
                  }

                  const currentSelectableIndex = selectableItems.findIndex(si => si.id === item.id);
                  const isActive = currentSelectableIndex === selectedIndex;

                  return (
                    <div
                      key={item.id}
                      ref={isActive ? activeItemRef : null}
                      onClick={() => handleAction(item)}
                      onMouseEnter={() => {
                        if (lastInteraction.current === 'mouse') {
                          setSelectedIndex(currentSelectableIndex);
                        }
                      }}
                      className="group mx-2 px-2 py-2 rounded-lg flex items-center justify-between cursor-pointer relative"
                    >
                      {/* Active highlight background */}
                      {isActive && (
                        <motion.div
                          layoutId="command-palette-highlight"
                          className="absolute inset-0 bg-primary/7 rounded-lg pointer-events-none"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Content */}
                      <div className="flex items-center gap-2 relative z-10 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-md transition-colors ${isActive ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground group-hover:bg-muted/50'}`}>
                            <HugeiconsIcon icon={item.icon} size={16} />
                          </div>
                          <span className={`font-medium text-sm transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                            {item.label}
                          </span>
                        </div>

                        {item.shortcut && (
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground bg-background border border-border/50 rounded shadow-sm">
                              {item.shortcut}
                            </kbd>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-muted/20 border-t border-border/50 flex items-center justify-end gap-4 text-[11px] font-medium text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 py-0.5 bg-background border border-border/50 rounded shadow-sm">Enter</kbd> Execute
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1 py-0.5 bg-background border border-border/50 rounded shadow-sm">Esc</kbd> Exit
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scrollbar Styles */}
          <style>{`
            .command-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .command-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .command-scrollbar::-webkit-scrollbar-thumb {
              background: var(--color-border);
              border-radius: 10px;
            }
            .command-scrollbar::-webkit-scrollbar-thumb:hover {
              background: var(--color-muted-foreground);
            }
          `}</style>
        </div >
      )}
    </AnimatePresence >
  );
};

export default CommandPalette;
