import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  Figma, Code2, Palette, Box, Terminal, FileCode,
  BracesIcon as Braces, Database, Layers, Flame,
  Wind, Play, Cpu, Globe, Server, Laptop
} from 'lucide-react';

export default function RubiksGridSkills() {
  // Flattened the skills into one single array for the grid effect
  const skills = [
    { name: 'JS', Icon: FileCode },
    { name: 'React', Icon: Flame },
    { name: 'Java', Icon: Code2 },
    { name: 'HTML', Icon: Braces },
    { name: 'CSS', Icon: Palette },
    { name: 'Node', Icon: Server },
    { name: 'SQL', Icon: Database },
    { name: 'Tailwind', Icon: Wind },
    { name: 'Motion', Icon: Play },
    { name: 'Figma', Icon: Figma },
    { name: 'Git', Icon: Layers },
    { name: 'C++', Icon: Cpu },
    { name: 'Python', Icon: Terminal },
    { name: 'Next', Icon: Globe },
    { name: 'Three', Icon: Box },
    { name: 'System', Icon: Laptop },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 pl-4 sm:pl-14">
            Skills
          </h2>

          {/* The Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {skills.map((skill, index) => (
              <FlipCell key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FlipCell({ skill, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = skill.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="aspect-square relative perspective-1000 cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.35,
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 backface-hidden bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-lime-500/50 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all duration-150">
          <Icon className="text-slate-300 group-hover:text-lime-400 w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-150" />
          <span className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-wide">
            {skill.name}
          </span>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 backface-hidden bg-lime-400 border border-lime-300 rounded-lg flex flex-col items-center justify-center gap-1.5 shadow-lg shadow-lime-500/20"
          style={{ transform: "rotateY(180deg)" }}
        >
          <Icon className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-slate-900 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}