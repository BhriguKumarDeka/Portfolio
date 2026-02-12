import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';

const SpotifyCovers = ({ data }) => {
  // Limit to just the first 2 items
  const displayedCovers = data.slice(0, 2);

  return (
    <SectionWrapper title="Spotify Cover Arts">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto md:mx-0">
        {displayedCovers.map((item, index) => (
          <motion.div
            key={item.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="
              relative aspect-square 
              rounded-2xl overflow-hidden 
            "
          >
            <img
              src={item.image}
              alt="Cover Art"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SpotifyCovers;