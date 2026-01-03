import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";

export default function Project() {
  const [isExpanded, setIsExpanded] = useState(false);

  const projects = [
    {
      title: 'DimLight',
      description: 'An AI-powered Sleep and Wellness app that offers personalized sleep tracking, personal insights, and ambient breathing exercises to enhance sleep quality and overall well-being.',
      tags: ['React', 'Figma', 'User Research', 'AI Integration'],
      link: 'https://www.dimlight.space',
      year: '2025',
      image: '/images/projects/DimlightOgImage.png',
    },
    {
      title: 'Orders',
      description: 'A unified platform to manage the decentralized system of e-commerce platforms. Seamlessly manage orders and return windows from multiple brands in one place.',
      tags: ['Figma', 'Balsamiq', 'Miro', 'Prototyping', 'Gen AI'],
      link: 'https://www.figma.com/proto/0Ym2EXSxhoravrc2XL7vYM/Orders?page-id=350%3A8003&node-id=350-8004&viewport=133%2C292%2C0.3&t=Oj4hKskcTb7VC5kl-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/OrdersOgImage.png',
    },
    {
      title: 'SWallet',
      description: 'A secure digital wallet app designed to simplify personal details management. Offers encrypted storage, easy access, and seamless integration with various services like Google Wallet and Apple Pay.',
      tags: ['Figma', 'Security', 'UI Design', 'Prototyping'],
      link: 'https://www.figma.com/proto/7gXCW0TG77wj6dVdm0ZafX/SWallet?page-id=142%3A1181&node-id=346-2685&viewport=183%2C-194%2C0.1&t=kxeO3FBzaNwddIbP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=346%3A2685',
      year: '2025',
      image: '/images/projects/SWalletOgImage.png',
    },
    {
      title: 'Flow by Spotify',
      description: 'A mobile app that focused on productivity and mental well-being by integrating music and task management. Designed to help users maintain life.',
      tags: ['Figma', 'Design Thinking', 'User-Research', 'Adobe Photoshop'],
      link: 'https://www.figma.com/proto/oVU35kRPdNWYNAR7iFUDvm/Flow?page-id=0%3A1&node-id=46-119&viewport=152%2C77%2C0.34&t=XldlV1rAlDgYm9er-1&scaling=scale-down-width&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/HeroImageFlow.png',
    },
    {
      title: 'Archon',
      description: 'SIH project. A RAG platform that leverages AI to provide contextually relevant answers from policies and amendments, enhancing information retrieval.',
      tags: ['SIH', 'Figma', 'UI Design', 'Prototyping', 'User Research'],
      link: 'https://www.figma.com/proto/GGStlrHc9eBRQHqR5lxvKz/SIH?page-id=2%3A11&node-id=70-118&viewport=1270%2C-514%2C0.2&t=d3bRQRokhmUtkRay-1&scaling=contain&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/ArchonOgImage.png',
    },
    {
      title: 'NyaySaathi',
      description: 'An AI based platform to provide legal help and knowledge to the general public, empowering citizens for better access to justice.',
      tags: ['Figma', 'UI Design', 'Prototyping', 'User Research'],
      link: 'https://www.figma.com/proto/NaFzrjQb1OIvc0roDdvEcQ/NyaySaathi?page-id=0%3A1&node-id=213-50&viewport=-257%2C-263%2C0.22&t=jKeLC5t3A7XsTSa2-1&scaling=min-zoom&content-scaling=fixed',
      year: '2025',
      image: '/images/projects/NyaySaathiOgImage.png',
    }
  ];

  const displayedProjects = isExpanded ? projects : projects.slice(0, 4);

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 pl-4 sm:pl-14 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            My Creations
          </motion.h2>
          <motion.p
            className="text-slate-400 mb-8 sm:mb-12 pl-4 sm:pl-14 text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A showcase of my design & development work
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {projects.length > 4 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex justify-center mt-10 sm:mt-14"
            >
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group px-8 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white border border-slate-700 rounded-xl hover:border-lime-500/50 transition-all duration-300 bg-gradient-to-r from-slate-900/40 to-slate-800/40 hover:from-slate-900/60 hover:to-slate-800/60 backdrop-blur-sm shadow-xl shadow-slate-900/30 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover gradient effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-lime-500/0 via-lime-500/10 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">{isExpanded ? '↑ Show Less' : '↓ Explore More'}</span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};