import React, { useState } from 'react';
import { motion, wrap, AnimatePresence } from 'motion/react';
import SectionWrapper from './SectionWrapper';

const AUTOPLAY_DURATION = 3500;

const Posters = React.memo(({ data }) => {
  const [index, setIndex] = useState(0);

  const paginate = (newDirection) => {
    setIndex((prev) => wrap(0, data.length, prev + newDirection));
  };

  return (
    <SectionWrapper title="Posters">
      <div className="relative w-full flex flex-col items-center py-6 px-4 touch-none overflow-hidden">

        {/* Main Slider Container */}
        <div className="relative w-full max-w-lg aspect-[1/1.4] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center perspective-distant">

            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute inset-0 z-10"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) {
                    paginate(1);
                  } else if (swipe > 50) {
                    paginate(-1);
                  }
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={data[index].image}
                    alt={`Poster ${index + 1}`}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable="false"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full scale-90 translate-x-8 -z-10 opacity-20 blur-sm overflow-hidden grayscale">
                <img src={data[wrap(0, data.length, index + 1)].image} className="w-full h-full object-cover" alt="Next preview" />
              </div>
              <div className="absolute w-full h-full scale-90 -translate-x-8 -z-10 opacity-20 blur-sm overflow-hidden grayscale">
                <img src={data[wrap(0, data.length, index - 1)].image} className="w-full h-full object-cover" alt="Prev preview" />
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Info */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex gap-2 h-1.5 items-center">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-full rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-secondary' : 'w-1.5 bg-border hover:bg-border/60'
                  }`}
              />
            ))}
          </div>

          <div className="text-[10px] font-mono text-muted-foreground/60 tracking-widest uppercase">
            {index + 1} / {data.length} — SWIPE TO EXPLORE
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
});

export default Posters;