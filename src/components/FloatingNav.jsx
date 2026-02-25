import { useState, useEffect } from 'react';
import { PaintBoardIcon, Sun02Icon, Moon02Icon } from 'hugeicons-react';
import DesignSystem from './DesignSystem';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';

export default function FloatingNav({ data }) {
  if (!data) return null;
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHero(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <AnimatePresence>
        {!isInHero && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <div className="flex items-center gap-2 p-2 bg-background/80 backdrop-blur-xl rounded-full border border-border shadow-2xl pointer-events-auto">
              {data.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Button variant="ghost" size="icon" icon={social.icon} className="rounded-full w-10 h-10 hover:bg-muted" />
                </a>
              ))}

              <div className="w-px h-6 bg-border mx-1" />

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full w-10 h-10 hover:bg-muted"
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {isDark ? (
                      <Sun02Icon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
                    ) : (
                      <Moon02Icon size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowDesignSystem(true)}
                className="rounded-full w-10 h-10 hover:bg-muted"
                title="Design System"
              >
                <PaintBoardIcon size={20} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Absolute toggle for when in hero (optional, but good for UX) */}
      <AnimatePresence>
        {isInHero && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-6 right-6 z-50 flex gap-2"
          >
            <button
              onClick={toggleTheme}
              className="rounded-full w-10 h-10 bg-background/50 backdrop-blur border border-border inline-flex items-center justify-center hover:bg-secondary/70 transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {isDark ? (
                    <Sun02Icon size={20} className="text-secondary-foreground transition-colors" />
                  ) : (
                    <Moon02Icon size={20} className="text-secondary-foreground transition-colors" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <DesignSystem isOpen={showDesignSystem} onClose={() => setShowDesignSystem(false)} />
    </>
  );
}
