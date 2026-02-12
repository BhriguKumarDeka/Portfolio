import React, { useEffect } from 'react';
import { playgroundData } from '../data/playgroundData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft01Icon, CommandLineIcon, Sun01Icon, Moon01Icon } from 'hugeicons-react';

import BubbleMenu from '../components/Playground/BubbleMenu';
import { Typography } from '../components/ui/Typography';
import { Button } from '../components/ui/Button';
import { AnimatePresence } from 'motion/react';

// Lazy load heavy playground sections
const UIPages = React.lazy(() => import('../components/Playground/UIPages'));
const FigmaExploration = React.lazy(() => import('../components/Playground/Exploration'));
const Animations = React.lazy(() => import('../components/Playground/Animations'));
const SpotifyCovers = React.lazy(() => import('../components/Playground/SpotifyCovers'));
const Posters = React.lazy(() => import('../components/Playground/Posters'));
const ThreeDArts = React.lazy(() => import('../components/Playground/ThreeDArts'));
const Characters = React.lazy(() => import('../components/Playground/Characters'));
const Extras = React.lazy(() => import('../components/Playground/Extras'));

// --- Technical Divider Component ---
const SectionDivider = ({ label }) => (
  <div className="relative w-full my-8 flex items-center">
    {/* Bleeding Line */}
    <div className="absolute left-[calc(-50vw+50%)] w-screen border-t border-dashed border-border/60" />

    {/* Technical Crosshair Marker (Left) */}
    <div className="absolute left-0 -ml-[5px] -mt-px text-border/80">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>

    {/* Technical Crosshair Marker (Right) */}
    <div className="absolute right-0 -mr-[5px] -mt-px text-border/80">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0V10M0 5H10" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  </div>
);

// --- Section Colors Configuration ---
const SECTION_COLORS = {
  figma: '#F24E1E',
  animations: '#A259FF',
  '3d': '#18A0FB',
  posters: '#FF7262',
  spotify: '#1DB954',
  characters: '#FFC700',
  extras: '#00D1FF',
};

export default function Playground() {
  const [activeSection, setActiveSection] = React.useState(null);
  const scrollTimeoutRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0, 0.1]
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 100);
          }
        });
      },
      observerOptions
    );

    const sectionIds = ['figma', 'animations', '3d', 'posters', 'spotify', 'characters', 'extras'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.1] pointer-events-none z-[-1]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* --- Hero Section (Manifest Style) --- */}
      <div className="px-4 py-8 relative pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Typography variant="h3" className="mb-2">
            {playgroundData.hero.title}
          </Typography>

          <Typography variant="p" className="text-muted-foreground text-sm leading-relaxed mb-4">
            {playgroundData.hero.subtitle}
          </Typography>
        </motion.div>
      </div>

      {/* Sticky Menu Bar */}
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur-sm border-b border-dashed border-border px-4 py-2 mb-8">
        <BubbleMenu activeSection={activeSection} />
      </div>

      <SectionDivider />

      {/* --- Content Sections --- */}
      <div className="px-4 pb-32 space-y-8">
        <React.Suspense fallback={
          <div className="w-full py-20 flex items-center justify-center opacity-20">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        }>
          <div id="figma">
            <FigmaExploration data={playgroundData.figma} />
          </div>

          <SectionDivider />

          <div id="animations">
            <Animations data={playgroundData.animations} />
          </div>

          <SectionDivider />

          <div id="3d">
            <ThreeDArts data={playgroundData.threeD} />
          </div>

          <SectionDivider />

          <div id="posters">
            <Posters data={playgroundData.posters} />
          </div>

          <SectionDivider />

          <div id="spotify">
            <SpotifyCovers data={playgroundData.spotify} />
          </div>

          <SectionDivider />

          <div id="characters">
            <Characters data={playgroundData.characters} />
          </div>

          <SectionDivider />

          <div id="extras">
            <Extras data={playgroundData.misc} />
          </div>
        </React.Suspense>
      </div>
    </>
  );
}
