import React, { useState } from 'react';
import { motion, wrap, AnimatePresence } from 'motion/react';
import { ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import SectionWrapper from './SectionWrapper';

const Posters = React.memo(({ data }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => wrap(0, data.length, prev + newDirection));
  };

  return (
    <SectionWrapper title="Posters">
      <div className="relative w-full flex flex-col items-center py-6 px-2 overflow-hidden">

        {/* Poster + Side Chevrons */}
        <div className="relative w-full max-w-xl flex items-center justify-center gap-2">

          {/* Left Chevron */}
          <motion.button
            onClick={() => paginate(-1)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border/60 bg-secondary/20 hover:bg-secondary/50 hover:border-border transition-all duration-200 text-muted-foreground hover:text-foreground z-20"
            aria-label="Previous poster"
          >
            <ArrowLeft02Icon size={16} />
          </motion.button>

          {/* Main Poster */}
          <div className="relative flex-1 aspect-[1/1.4] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">

              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92, x: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.92, x: direction > 0 ? -80 : 80 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0 z-10"
                >
                  <div className="w-full h-full rounded-md overflow-hidden shadow-2xl">
                    <img
                      src={data[index].image}
                      alt={`Poster ${index + 1}`}
                      className="w-full h-full object-cover select-none"
                      draggable="false"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Ghost previews */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-full h-full scale-90 translate-x-8 -z-10 opacity-20 blur-sm overflow-hidden grayscale">
                  <img src={data[wrap(0, data.length, index + 1)].image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="absolute w-full h-full scale-90 -translate-x-8 -z-10 opacity-20 blur-sm overflow-hidden grayscale">
                  <img src={data[wrap(0, data.length, index - 1)].image} className="w-full h-full object-cover" alt="" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Chevron */}
          <motion.button
            onClick={() => paginate(1)}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border/60 bg-secondary/20 hover:bg-secondary/50 hover:border-border transition-all duration-200 text-muted-foreground hover:text-foreground z-20"
            aria-label="Next poster"
          >
            <ArrowRight02Icon size={16} />
          </motion.button>

        </div>

        {/* Dot indicators + counter */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="flex gap-1.5 items-center">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={`rounded-full transition-all duration-300 ${i === index
                    ? 'w-5 h-1.5 bg-foreground/70'
                    : 'w-1.5 h-1.5 bg-border hover:bg-muted-foreground/50'
                  }`}
                aria-label={`Go to poster ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
});

export default Posters;