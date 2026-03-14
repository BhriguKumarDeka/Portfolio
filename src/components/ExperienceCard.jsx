import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Typography } from './ui/Typography';
import { Calendar01Icon, PinIcon, UnfoldLessIcon, UnfoldMoreIcon } from 'hugeicons-react';

export const ExperienceCard = ({ experience, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Timeline bar */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/20 group-last:bottom-auto group-last:h-4" />
      <div className={`absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent from-0% via-primary via-20% to-transparent to-90% transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />

      {/* Diamond dot */}
      <div className={`absolute left-[-5px] top-4 w-[11px] h-[11px] bg-background border rotate-45 z-10 transition-all duration-300 ${isOpen ? 'border-primary bg-primary' : 'border-border group-hover:border-primary/60'}`}>
        <div className={`absolute inset-[3px] bg-background transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Card */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left pl-8 pr-3 py-3 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        {/* Always-visible header row */}
        <div className="flex items-center justify-between gap-3 min-w-0">
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <Typography
              variant="h3"
              className={`text-sm font-semibold tracking-tight leading-tight truncate transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-foreground/75 group-hover:text-foreground'}`}
            >
              {experience.role}
            </Typography>
            <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <PinIcon className="w-2.5 h-2.5 shrink-0" />
                {experience.company}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1">
                <Calendar01Icon className="w-2.5 h-2.5 shrink-0" />
                {experience.period}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? 'collapse' : 'expand'}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              className="shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"
            >
              {isOpen ? <UnfoldLessIcon size={16} /> : <UnfoldMoreIcon size={16} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </button>

      {/* Expanding content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="pl-8 pr-3 pb-4 flex flex-col gap-3"
            >
              {/* Description */}
              <div className="relative bg-secondary/40 px-3 py-2 rounded-md inset-shadow-sm">
                <Typography
                  variant="body"
                  className="text-sm leading-relaxed text-muted-foreground/80"
                >
                  {experience.description}
                </Typography>
              </div>

              {/* Tech pills */}
              <motion.div
                className="flex flex-wrap gap-1.5"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                {experience.technologies.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, scale: 0.85, y: 4 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="text-xs font-mono text-muted-foreground uppercase tracking-wider bg-secondary/50 border border-border rounded-md px-2 py-0.5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};