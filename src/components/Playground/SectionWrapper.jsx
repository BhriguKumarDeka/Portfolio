import React from 'react';
import { motion } from 'motion/react';
import { Typography } from '../ui/Typography';

const SectionWrapper = ({ title, children, className = "" }) => {
  return (
    <div className={`py-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-5"
      >
        <Typography variant="h3">
          {title}
        </Typography>
      </motion.div>
      {children}
    </div>
  );
};

export default SectionWrapper;
