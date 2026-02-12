import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from './SectionWrapper';
import OptimizedVideo from './OptimizedVideo';

const FigmaExploration = ({ data }) => {
  return (
    <SectionWrapper title="Figma">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
        {/* Video 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-1 rounded-lg overflow-hidden relative group"
        >
          <OptimizedVideo
            src={data[0]?.src}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Video 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-1 rounded-lg overflow-hidden relative group"
        >
          <OptimizedVideo
            src={data[1]?.src}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default FigmaExploration;
