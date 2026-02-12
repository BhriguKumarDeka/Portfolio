import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';
import OptimizedVideo from './OptimizedVideo';

const ThreeDArts = ({ data }) => {
  return (
    <SectionWrapper title="3D Arts">
      {/* 2-Column Grid to allow for the 100% and 50% splits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-auto">

        {/* Row 1: Video 1 (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 md:col-span-2 rounded-lg overflow-hidden relative group bg-secondary/20 border border-border/50 aspect-video"
        >
          <OptimizedVideo
            src={data[0]?.src}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>

        {/* Row 2: Video 2 (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-2 rounded-lg overflow-hidden relative group bg-secondary/20 border border-border/50 aspect-video"
        >
          <OptimizedVideo
            src={data[1]?.src}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>

        {/* Row 3: Items 3 & 4 (Shared Row) */}
        {/* Left Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-1 rounded-lg overflow-hidden relative group bg-secondary/20 border border-border/50 aspect-video md:aspect-auto"
        >
          <OptimizedVideo
            src={data[3]?.src}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>

        {/* Right Item */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-1 rounded-lg overflow-hidden relative group bg-secondary/20 border border-border/50 aspect-video md:aspect-auto"
        >
          <OptimizedVideo
            src={data[2]?.src}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ThreeDArts;