import { motion } from 'motion/react';
import { Typography } from './ui/Typography';
import { Calendar01Icon, PinIcon } from 'hugeicons-react';

export const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "50px 0px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 group-last:bottom-auto group-last:h-4" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent from-0% via-primary via-20% to-transparent to-90% transition-opacity duration-500 opacity-0 group-hover:opacity-60" />

      {/* Diamond dot */}
      <div className="absolute left-[-5px] top-4 w-[11px] h-[11px] bg-background border rotate-45 z-10 transition-all duration-300 border-border group-hover:border-primary/60">
        <div className="absolute inset-[3px] bg-background transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      </div>

      {/* Card */}
      <div className="w-full text-left pl-8 pr-3 py-3">
        <div className="flex items-center justify-between gap-3 min-w-0">
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <Typography
              variant="h3"
              className="text-sm font-semibold tracking-tight leading-tight truncate transition-colors duration-300 text-foreground/85 group-hover:text-foreground"
            >
              {education.name}
            </Typography>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mt-0.5">
              <span className="flex items-center gap-1">
                <PinIcon className="w-2.5 h-2.5 shrink-0" />
                {education.university}
              </span>
              <span className="text-border hidden sm:inline">·</span>
              <span className="flex items-center gap-1">
                <Calendar01Icon className="w-2.5 h-2.5 shrink-0" />
                {education.year}
              </span>
            </div>
            
            {/* CGPA Tech Pill */}
            {(education.cgpa || education.grade) && (
              <div className="mt-2 text-xs font-mono text-muted-foreground uppercase tracking-wider bg-secondary/50 border border-border/60 rounded-md px-2 py-0.5 inline-flex items-center gap-1 w-fit">
                CGPA: <span className="font-semibold text-foreground/80">{education.cgpa || education.grade}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
