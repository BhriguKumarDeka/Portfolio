import React, { useEffect } from 'react';
import { playgroundData } from '../data/playgroundData';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft01Icon, CommandLineIcon, Sun01Icon, Moon01Icon } from 'hugeicons-react';

import BubbleMenu from '../components/Playground/BubbleMenu';
import { Typography } from '../components/ui/Typography';
import { AnimatePresence } from 'motion/react';



// Lazy load heavy playground sections
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

const SectionSkeleton = () => (
  <div className="w-full py-16 flex items-center justify-center opacity-20">
    <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

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

        {/* Spinner shown per section independently */}
        <div id="figma">
          <React.Suspense fallback={<SectionSkeleton />}>
            <FigmaExploration data={playgroundData.figma} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="animations">
          <React.Suspense fallback={<SectionSkeleton />}>
            <Animations data={playgroundData.animations} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="3d">
          <React.Suspense fallback={<SectionSkeleton />}>
            <ThreeDArts data={playgroundData.threeD} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="posters">
          <React.Suspense fallback={<SectionSkeleton />}>
            <Posters data={playgroundData.posters} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="spotify">
          <React.Suspense fallback={<SectionSkeleton />}>
            <SpotifyCovers data={playgroundData.spotify} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="characters">
          <React.Suspense fallback={<SectionSkeleton />}>
            <Characters data={playgroundData.characters} />
          </React.Suspense>
        </div>

        <SectionDivider />

        <div id="extras">
          <React.Suspense fallback={<SectionSkeleton />}>
            <Extras data={playgroundData.misc} />
          </React.Suspense>
        </div>

      </div>
    </>
  );
}
