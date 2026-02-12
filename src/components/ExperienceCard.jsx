import React from 'react';
import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { Calendar01Icon, PinIcon } from 'hugeicons-react'; // Added icon for visual cue

export const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="group relative px-8 py-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 group-last:bottom-auto group-last:h-4" />

      <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent from-0% via-primary via-20% to-transparent to-90% opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute left-[-5px] top-4 w-[11px] h-[11px] bg-background border border-border rotate-45 group-hover:border-primary group-hover:bg-primary transition-all duration-300 z-10">
        <div className="absolute inset-[3px] bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="relative flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <Typography
            variant="h3"
            className="text-lg font-semibold tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-300"
          >
            {experience.role}
          </Typography>

          <div className="flex items-center justify-between flex-wrap text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <PinIcon className="w-3 h-3 opacity-70" />
              <span>{experience.company}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar01Icon className="w-3 h-3 opacity-70" />
              <span>{experience.period}</span>
            </div>
          </div>
        </div>

        <div className="relative bg-secondary/40 p-2 rounded-md inset-shadow-sm">
          <Typography
            variant="body"
            className="text-sm leading-relaxed text-muted-foreground/70"
          >
            {experience.description}
          </Typography>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((skill, index) => (
            <Typography
              key={index}
              variant="small"
              className="text-xs font-mono text-muted-foreground uppercase tracking-wider bg-secondary/50 border border-border rounded-md px-2 py-1"
            >
              {skill}
            </Typography>
          ))}
        </div>

      </div>
    </motion.div>
  );
};