import { motion } from 'motion/react';


export const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="group relative pl-8 border-l-2 border-slate-800 hover:border-lime-500/50 transition-all duration-150"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ x: 4 }}
    >
      {/* Timeline dot with glow effect */}
      <motion.div
        className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-700 border-2 border-black rounded-full group-hover:bg-lime-400 group-hover:border-lime-300 group-hover:shadow-lg group-hover:shadow-lime-500/50 transition-all duration-150"
        whileHover={{ scale: 1.05 }}
      />

      <div className="pb-8 p-4 -ml-4 rounded-lg bg-slate-900/0 group-hover:bg-slate-900/40 backdrop-blur-sm border border-transparent group-hover:border-slate-800 transition-all duration-150">
        <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-lime-400 transition-colors duration-150">
              {experience.role}
            </h3>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-150">
              {experience.company}
            </p>
          </div>
          <span className="text-slate-500 text-sm font-mono group-hover:text-lime-400/70 transition-colors duration-150">
            {experience.period}
          </span>
        </div>

        <p className="text-slate-400 mb-4 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-150">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 + i * 0.02, type: "spring", stiffness: 400, damping: 25 }}
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.1 } }}
              className="px-3 py-1.5 text-xs bg-slate-800/80 text-slate-300 rounded-md border border-slate-700 group-hover:border-lime-500/30 group-hover:bg-slate-800 transition-all duration-150 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};