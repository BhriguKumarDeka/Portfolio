import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Typography } from './ui/Typography';
import { LayoutGridIcon, Layout3RowIcon } from 'hugeicons-react';

export default function Skills({ data }) {
  const [view, setView] = useState('scroll');

  if (!data) return null;

  // Split data for the marquee view
  const midpoint = Math.ceil(data.length / 2);
  const row1 = data.slice(0, midpoint);
  const row2 = data.slice(midpoint);

  return (
    <section className="px-4 py-6 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-2">
          <Typography variant="h3">
            Tech Stack
          </Typography>

          {/* SLIDING TOGGLE CONTROLS */}
          <button
            onClick={() => setView(prev => prev === 'scroll' ? 'stack' : 'scroll')}
            className="group flex items-center gap-1 p-1 bg-secondary/30 border border-border/40 rounded-lg cursor-pointer hover:border-border/60 transition-colors"
            title="Toggle View"
          >
            {/* Scroll Option */}
            <div className="relative px-1 py-1">
              {view === 'scroll' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-background shadow-sm rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${view === 'scroll' ? 'text-foreground' : 'text-muted-foreground/50 group-hover:text-foreground/50'}`}>
                <Layout3RowIcon size={14} />
              </span>
            </div>

            {/* Stack Option */}
            <div className="relative px-1 py-1">
              {view === 'stack' && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-background shadow-sm rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${view === 'stack' ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground/70'}`}>
                <LayoutGridIcon size={14} />
              </span>
            </div>
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">

            {/* VIEW 1: SCROLL (MARQUEE) */}
            {view === 'scroll' ? (
              <motion.div
                key="scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              >
                <MarqueeRow items={row1} direction="left" />
                <MarqueeRow items={row2} direction="right" />
              </motion.div>
            ) : (

              /* VIEW 2: STACK (GRID) */
              <motion.div
                key="stack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center sm:justify-start gap-3"
              >
                {data.map((skill, idx) => (
                  <StackItem key={idx} skill={skill} index={idx} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
}

// --- Helper Components ---

const MarqueeRow = ({ items, direction = "left" }) => {
  return (
    <div className="flex overflow-hidden select-none">
      <div
        className={`flex shrink-0 gap-3 pr-3 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
      >
        {[...items, ...items, ...items, ...items].map((skill, idx) => (
          <SkillPill key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

function SkillPill({ skill }) {
  return (
    <div className="
      group relative flex items-center gap-2 px-3 py-1.5
      rounded-full 
      transition-colors duration-300
      cursor-default
    ">
      <div className="w-4 h-4 shrink-0 flex items-center justify-center">
        <img
          src={skill.Icon}
          alt={skill.name}
          className="
            w-full h-full object-contain 
            transition-all duration-300
          "
        />
      </div>
      <span className="
        text-[11px] font-medium tracking-wide 
        text-muted-foreground/80 group-hover:text-foreground
        transition-colors duration-300 whitespace-nowrap
      ">
        {skill.name}
      </span>
    </div>
  );
}

function StackItem({ skill, index }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.02 }}
      className="group relative"
    >
      <div className="
        relative flex items-center justify-center 
        w-10 h-10
      ">
        <img
          src={skill.Icon}
          alt={skill.name}
          className="
            w-5 h-5 object-contain
            transition-all duration-300 group-hover:scale-110
          "
        />

        <div className="
          absolute -top-10 left-1/2 -translate-x-1/2
          px-2 py-1 
          bg-background/90 backdrop-blur border border-border/50
          rounded-md shadow-sm
          opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
          transition-all duration-200 pointer-events-none z-20
        ">
          <span className="text-[10px] font-medium text-foreground whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}