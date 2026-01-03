import { motion } from 'motion/react';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      role: 'Graphic Designer & Social Media Manager',
      company: 'Cisco Student Club',
      period: '2024 - 2025',
      description: 'Created visually engaging graphics and managed social media content to enhance club visibility and engagement among students.',
      technologies: ['Figma', 'Adobe Photoshop']
    },
    {
      role: 'Freelance Graphic Designer',
      company: 'Freelance',
      period: '2021 - 2023',
      description: 'Designed Creatives for various clients including logos, brochures, and social media content. Made Spotify album cover arts and YouTube thumbnails',
      technologies: ['Adobe Photoshop', 'Inkscape', 'Ibis Paint X', 'Figma']
    }
  ];

  return (
    <section className="bg-black text-white px-6 py-20 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-slate-500 text-sm mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Where I've worked
          </motion.p>
          <motion.p
            className="text-slate-400 mb-12 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My professional journey and the amazing teams I've been part of.
          </motion.p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};