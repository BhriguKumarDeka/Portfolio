import { motion } from "motion/react";
import { useState } from "react";

export const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full group relative block rounded-xl overflow-hidden border border-slate-900 transition-all cursor-pointer h-[280px] sm:h-64"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover absolute inset-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Gradient overlay with blur that disappears on hover */}
      <motion.div
        className="absolute inset-0 bg-linear-to-t from-black to-transparent"
        initial={{ opacity: 1, backdropFilter: "blur(1px)" }}
        animate={{
          opacity: isHovered ? 0.1 : 1,
          backdropFilter: isHovered ? "blur(0px)" : "blur(1px)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Text Overlay (fades out on hover) */}
      <motion.div
        className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 20 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-slate-200 text-xs sm:text-xs leading-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-black/40 text-slate-300 rounded-md border border-slate-700 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-slate-700 text-xs text-slate-300">
          {project.year}
        </div>
      </motion.div>
    </motion.a>
  );
};
