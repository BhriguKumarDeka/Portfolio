import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Typography } from '../ui/Typography';


export default function Characters({ data }) {
  if (!data || data.length === 0) return null;

  const slotCount = 4;
  const updateInterval = 1000; // Slower interval for better performance

  const [displayedIndices, setDisplayedIndices] = useState([0, 1, 2, 3].map(i => i % data.length));
  const [nextSlotIndex, setNextSlotIndex] = useState(0);
  const [nextDataIndex, setNextDataIndex] = useState(slotCount % data.length);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setDisplayedIndices(prev => {
        const next = [...prev];
        next[nextSlotIndex] = nextDataIndex;
        return next;
      });

      setNextSlotIndex(prev => (prev + 1) % slotCount);
      setNextDataIndex(prev => (prev + 1) % data.length);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [data.length, nextSlotIndex, nextDataIndex, isInView]);

  return (
    <section ref={containerRef} className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" className='mb-2'>
          Characters
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {displayedIndices.map((charIndex, slotIndex) => {
            const character = data[charIndex];

            return (
              <div
                key={slotIndex}
                className="
                  aspect-square relative
                "
              >

                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={character.id}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.5 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src={character.image}
                      alt="Character"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}