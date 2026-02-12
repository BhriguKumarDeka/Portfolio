import { motion } from 'motion/react';
import { ExperienceCard } from './ExperienceCard';
import { Typography } from './ui/Typography';

export default function Experience({ data }) {
  if (!data) return null;

  return (
    <section className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline justify-between mb-4 pb-2">
          <Typography variant="h3">Experience</Typography>
          <Typography variant="small" className="text-muted-foreground">My Journey</Typography>
        </div>

        <div className="space-y-4">
          {data.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
