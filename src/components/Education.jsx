import { motion } from 'motion/react';
import { EducationCard } from './EducationCard';
import { Typography } from './ui/Typography';

export default function Education({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Education</Typography>
          <Typography variant="small" className="text-muted-foreground">My Academic Background</Typography>
        </div>

        <div className="space-y-4">
          {data.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
