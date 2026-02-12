import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';

const Extras = ({ data }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Calculate progress (0 to data.length - 1)
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    const index = Math.round(scrollPercentage * (data.length - 1));

    if (index !== activeIndex && !isNaN(index)) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [data.length]);

  return (
    <SectionWrapper title="Extras">
      <div className="relative group/extras">
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
        >
          <div className="flex gap-4 w-max">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="w-100 h-100 rounded-lg overflow-hidden shrink-0 relative group snap-center"
              >
                <img
                  src={item.image}
                  alt="Extra"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram Style Pagination Dots */}
        <div className="flex justify-center gap-1.5 -mt-4 pb-4">
          {data.map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                animate={{
                  width: isActive ? 16 : 6,
                  backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-border)',
                  opacity: isActive ? 1 : 0.3
                }}
                className="h-1.5 rounded-full transition-colors duration-300"
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Extras;
